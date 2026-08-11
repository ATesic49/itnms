"use client";

import { ChangeEvent, useEffect, useState } from "react";

export type UploadedDriveImage = {
	fileId: string;
	imageUrl: string;
	previewUrl: string;
};

type ImageUploadProps = {
	onUploaded: (image: UploadedDriveImage) => void;
};

export function ImageUpload({ onUploaded }: ImageUploadProps) {
	const [preview, setPreview] = useState("");
	const [isUploading, setIsUploading] = useState(false);
	const [message, setMessage] = useState("");

	useEffect(() => {
		return () => {
			if (preview.startsWith("blob:")) {
				URL.revokeObjectURL(preview);
			}
		};
	}, [preview]);

	async function handleImageChange(event: ChangeEvent<HTMLInputElement>) {
		const file = event.target.files?.[0];

		if (!file) {
			return;
		}

		if (preview.startsWith("blob:")) {
			URL.revokeObjectURL(preview);
		}

		const localPreview = URL.createObjectURL(file);

		setPreview(localPreview);
		setMessage("");
		setIsUploading(true);

		try {
			const formData = new FormData();

			formData.append("image", file);

			const response = await fetch("/api/upload-image", {
				method: "POST",
				body: formData,
			});

			const result = (await response.json()) as {
				message: string;
				fileId?: string;
				imageUrl?: string;
				previewUrl?: string;
			};

			if (
				!response.ok ||
				!result.fileId ||
				!result.imageUrl ||
				!result.previewUrl
			) {
				throw new Error(result.message);
			}

			onUploaded({
				fileId: result.fileId,
				imageUrl: result.imageUrl,
				previewUrl: result.previewUrl,
			});

			setMessage("Slika je uspešno postavljena.");
		} catch (error) {
			setMessage(error instanceof Error ? error.message : "Upload nije uspeo.");
		} finally {
			setIsUploading(false);
		}
	}

	return (
		<div className="space-y-4">
			<label className="block">
				<span className="block mb-2 text-sm font-semibold text-stone-800">
					Fotografija
				</span>

				<input
					type="file"
					accept="image/jpeg,image/png,image/webp"
					onChange={handleImageChange}
					disabled={isUploading}
					className="block w-full p-3 text-sm bg-white border rounded-md border-stone-300"
				/>
			</label>

			{preview && (
				<img
					src={preview}
					alt="Pregled izabrane slike"
					className="object-cover w-full max-w-lg aspect-video rounded-xl"
				/>
			)}

			{isUploading && (
				<p className="text-sm text-stone-600">Postavljanje slike...</p>
			)}

			{message && <p className="text-sm text-stone-700">{message}</p>}
		</div>
	);
}

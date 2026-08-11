import Image from "next/image";
import { Employee } from "../types/employee";

type CompactEmployeeCardProps = {
	image: string;
	fullName: string;
	scientificTitle: string;
	profileUrl: string;
};
import user from "@/public/imgs/user.png";
import Link from "next/link";
export function CompactEmployeeCard({
	firstName,
	lastName,
	naucnoZvanje,
	slug,
}: Employee) {
	return (
		<Link
			href={`istrazivaci/${slug}`}
			className="
        group flex min-h-32 overflow-hidden rounded-xl
        border border-stone-200 bg-white shadow-sm
        transition duration-200
        hover:-translate-y-0.5
        hover:border-institute-300
        hover:shadow-md
      "
		>
			<div className="overflow-hidden w-28 shrink-0 bg-stone-100 sm:w-32">
				<Image
					src={user}
					alt={firstName}
					className="
            h-full w-full object-cover object-top
            transition-transform duration-300
            group-hover:scale-[1.03]
          "
				/>
			</div>

			<div className="flex flex-col justify-center flex-1 min-w-0 px-5 py-4">
				<h3 className="text-lg font-semibold tracking-tight transition-colors text-stone-900 group-hover:text-institute-800">
					{firstName} {lastName}
				</h3>

				<p className="mt-2 text-sm leading-5 text-stone-600">{naucnoZvanje}</p>

				<span className="mt-3 text-sm font-semibold transition-colors text-institute-700 group-hover:text-institute-900">
					Saznaj Više →
				</span>
			</div>
		</Link>
	);
}

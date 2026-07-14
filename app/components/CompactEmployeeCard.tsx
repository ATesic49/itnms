type CompactEmployeeCardProps = {
	image: string;
	fullName: string;
	scientificTitle: string;
	profileUrl: string;
};

export function CompactEmployeeCard({
	image,
	fullName,
	scientificTitle,
	profileUrl,
}: CompactEmployeeCardProps) {
	return (
		<a
			href={profileUrl}
			className="
        group flex min-h-[128px] overflow-hidden rounded-xl
        border border-stone-200 bg-white shadow-sm
        transition duration-200
        hover:-translate-y-0.5
        hover:border-institute-300
        hover:shadow-md
      "
		>
			<div className="w-28 shrink-0 overflow-hidden bg-stone-100 sm:w-32">
				<img
					src={image}
					alt={fullName}
					className="
            h-full w-full object-cover object-top
            transition-transform duration-300
            group-hover:scale-[1.03]
          "
				/>
			</div>

			<div className="flex min-w-0 flex-1 flex-col justify-center px-5 py-4">
				<h3
					className="
            text-lg font-semibold  tracking-tight text-stone-900
            transition-colors group-hover:text-institute-800
          "
				>
					{fullName}
				</h3>

				<p className="mt-2 text-sm leading-5 text-stone-600">
					{scientificTitle}
				</p>

				<span
					className="
            mt-3 text-sm font-semibold text-institute-700
            transition-colors group-hover:text-institute-900
          "
				>
					Saznaj Više →
				</span>
			</div>
		</a>
	);
}

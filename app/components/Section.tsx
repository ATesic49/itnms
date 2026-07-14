type SectionProps = {
	children: React.ReactNode;
	className?: string;
	background?: "white" | "stone" | "institute";
};

const backgroundClasses = {
	white: "bg-white",
	stone: "bg-stone-50",
	institute: "bg-institute-50",
};

export function Section({
	children,
	className = "",
	background = "white",
}: SectionProps) {
	return (
		<section
			className={`
        py-16 md:py-20 lg:py-24
        ${backgroundClasses[background]}
        ${className}
      `}
		>
			{children}
		</section>
	);
}

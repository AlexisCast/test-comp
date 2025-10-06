export interface IconProps {
	width?: number;
	height?: number;
	className?: string;
}

export const EmptyBattery = ({
	width = 16,
	height = 16,
	className,
}: IconProps) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		width={width}
		height={height}
		viewBox="0 0 24 24"
		className={className}
	>
		<path
			fill="currentColor"
			d="M17 5v16c0 .55-.45 1-1 1H8c-.55 0-1-.45-1-1V5c0-.55.45-1 1-1h2V2h4v2h2c.55 0 1 .45 1 1m-2 1H9v14h6z"
		/>
	</svg>
);

export const FullBattery = ({
	width = 16,
	height = 16,
	className,
}: IconProps) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		width={width}
		height={height}
		viewBox="0 0 24 24"
		className={className}
	>
		<path
			fill="currentColor"
			d="M15.67 4H14V2h-4v2H8.33C7.6 4 7 4.6 7 5.33v15.33C7 21.4 7.6 22 8.33 22h7.33c.74 0 1.34-.6 1.34-1.33V5.33C17 4.6 16.4 4 15.67 4"
		/>
	</svg>
);

export const Exclamation = ({
	width = 16,
	height = 16,
	className,
}: IconProps) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		width={width}
		height={height}
		viewBox="0 0 24 24"
		className={className}
	>
		<path
			fill="currentColor"
			d="M11 14V5h2v9zm0 5v-2h2v2z"
		/>
	</svg>
);



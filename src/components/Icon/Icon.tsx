import classNames from "classnames";
import styles from "./BaseIcon.module.scss";
import { EmptyBattery, FullBattery } from "./Icons";

export interface Icon {
	className?: string;
	variant?: "default" | "primary" | "secondary";
	size?: "sm" | "md" | "lg";
	iconName: "EmptyBattery" | "FullBattery";
}

const iconMap = {
  EmptyBattery: EmptyBattery,
  FullBattery: FullBattery,
};

const sizeMap = {
	sm: 16,
	md: 24,
	lg: 32,
};

export const BaseIcon = ({
	className = "",
	variant = "default",
	size = "md",
	iconName,
}: Icon) => {
	const elementClass = classNames(styles.icon, className, {
		[styles.primary]: variant === "primary",
		[styles.secondary]: variant === "secondary",
	});

	const IconComponent = iconMap[iconName];
	const iconSize = sizeMap[size] || sizeMap.md;

	return (
		<IconComponent
			width={iconSize}
			height={iconSize}
			className={elementClass}
		/>
	);
};

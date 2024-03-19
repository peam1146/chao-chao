import { cn } from "@/lib/utils";
import Link from "next/link";
import React, { PropsWithChildren } from "react";

interface SideBarLinkProps extends PropsWithChildren {
	href: string;
	isSelected?: boolean;
}

export default function SideBarLink(props: SideBarLinkProps) {
	const { href, isSelected, children } = props;
	return (
		<Link
			href={href}
			className={cn(
				"flex flex-row w-[200px] gap-4 px-4 py-3 rounded-lg",
				isSelected && "bg-muted",
			)}
		>
			{children}
		</Link>
	);
}

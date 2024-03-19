import { DropdownMenuItem } from "@/components/ui/dropdown-menu";
import Link from "next/link";
import React, { PropsWithChildren } from "react";

interface ProfileToggleMenuLinkProps extends PropsWithChildren {
	href: string;
}

export default function ProfileToggleMenuLink(
	props: ProfileToggleMenuLinkProps,
) {
	const { href, children } = props;
	return (
		<DropdownMenuItem className="cursor-pointer" asChild>
			<Link href={href} className="flex gap-2 items-center w-full h-full">
				{children}
			</Link>
		</DropdownMenuItem>
	);
}

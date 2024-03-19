"use client";

import Typography from "@/components/ui/typography";
import {
	CreditCard,
	Envelope,
	ListDashes,
	Megaphone,
	Tray,
} from "@phosphor-icons/react";
import SideBarLink from "./components/SideBarLink";
import { usePathname } from "next/navigation";

export default function SideBar() {
	const pathname = usePathname();
	return (
		<div className="flex flex-col pt-[72px] max-lg:hidden">
			<SideBarLink href={"/myAssets"} isSelected={pathname === "/myAssets"}>
				<Tray size={24} />
				<Typography>My Assets</Typography>
			</SideBarLink>
			<SideBarLink href={"/contracts"} isSelected={pathname === "/contracts"}>
				<ListDashes size={24} />
				<Typography>My Contracts</Typography>
			</SideBarLink>
			<SideBarLink
				href={"/rentalRequest"}
				isSelected={pathname === "/rentalRequest"}
			>
				<Envelope size={24} />
				<Typography>Rental Requests</Typography>
			</SideBarLink>
			<SideBarLink href={"/payment"} isSelected={pathname === "/payment"}>
				<CreditCard size={24} />
				<Typography>Payment</Typography>
			</SideBarLink>
			<SideBarLink
				href={"/advertising"}
				isSelected={pathname === "/advertising"}
			>
				<Megaphone size={24} />
				<Typography>Advertising</Typography>
			</SideBarLink>
		</div>
	);
}

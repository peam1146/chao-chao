import SideBar from "@/components/layout/SideBar";
import React from "react";
import { RentalRequestContainer } from "./components/RentalRequestContainer";

type RentalRequestPageProps = {};

export default function RentalRequestPage(props: RentalRequestPageProps) {
	return (
		<div className="container">
			<div className="flex flex-row gap-4 mt-10">
				<SideBar />
				<RentalRequestContainer />
			</div>
		</div>
	);
}

import React from "react";
import {
	RentalRequestCard,
	RentalRequestCardButton,
	RentalRequestCardContainer,
} from "./RentalRequestCard";
import { Button } from "@/components/ui/button";
import Typography from "@/components/ui/typography";
import { useMediaQuery } from "@/hooks/use-media-query";
import bicycle from "@/assets/images/bicycle.svg";

export default function RequestMadeContainer() {
	const isDesktop = useMediaQuery("(min-width: 821px)");

	return (
		<div className="flex flex-col gap-4 w-full">
			<RentalRequestCard>
				<RentalRequestCardContainer
					title="จกรยานแพะภเขา"
					requestFrom="มาย มม"
					thumbnail={bicycle}
					startDate={new Date("2024-02-29")}
					endDate={new Date()}
					rentalFee={50}
				/>
				<RentalRequestCardButton>
					<Button
						variant="secondary"
						size={isDesktop ? "sm" : "lg"}
						className="flex gap-2 w-full"
					>
						<Typography variant={isDesktop ? "h6" : "h5"}>Cancel</Typography>
					</Button>
				</RentalRequestCardButton>
			</RentalRequestCard>
		</div>
	);
}

import React from "react";
import {
	RentalRequestCard,
	RentalRequestCardButton,
	RentalRequestCardContainer,
} from "./RentalRequestCard";
import bicycle from "@/assets/images/bicycle.svg";
import { Button } from "@/components/ui/button";
import { Check } from "@phosphor-icons/react/dist/ssr";
import { X } from "@phosphor-icons/react/dist/csr/X";
import Typography from "@/components/ui/typography";
import { useMediaQuery } from "@/hooks/use-media-query";

export default function RequestReceivedContainer() {
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
						variant="default"
						size={isDesktop ? "sm" : "lg"}
						className="flex gap-2 w-full"
					>
						<Check className="max-lg:w-5 max-lg:h-5 lg:w-4 lg:h-4" />
						<Typography variant={isDesktop ? "h6" : "h5"}>Accept</Typography>
					</Button>
					<Button
						variant="outline"
						size={isDesktop ? "sm" : "lg"}
						className="flex gap-2 w-full"
					>
						<X className="max-lg:w-5 max-lg:h-5 lg:w-4 lg:h-4" />
						<Typography variant={isDesktop ? "h6" : "h5"}>Decline</Typography>
					</Button>
				</RentalRequestCardButton>
			</RentalRequestCard>
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
						variant="default"
						size={isDesktop ? "sm" : "lg"}
						className="flex gap-2 w-full"
					>
						<Check className="max-lg:w-5 max-lg:h-5 lg:w-4 lg:h-4" />
						<Typography variant={isDesktop ? "h6" : "h5"}>Accept</Typography>
					</Button>
					<Button
						variant="outline"
						size={isDesktop ? "sm" : "lg"}
						className="flex gap-2 w-full"
					>
						<X className="max-lg:w-5 max-lg:h-5 lg:w-4 lg:h-4" />
						<Typography variant={isDesktop ? "h6" : "h5"}>Decline</Typography>
					</Button>
				</RentalRequestCardButton>
			</RentalRequestCard>
		</div>
	);
}

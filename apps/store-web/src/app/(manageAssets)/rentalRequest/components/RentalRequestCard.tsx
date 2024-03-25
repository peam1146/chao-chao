import { Button } from "@/components/ui/button";
import Typography from "@/components/ui/typography";
import { Separator } from "@radix-ui/react-separator";
import Image from "next/image";
import React, { PropsWithChildren } from "react";

export type RentalRequestCardContainerProps = {
	title: string;
	requestFrom: string;
	thumbnail: string;
	startDate: Date;
	endDate: Date;
	rentalFee: number;
};

export function RentalRequestCardContainer(
	props: RentalRequestCardContainerProps,
) {
	const { title, requestFrom, thumbnail, startDate, endDate, rentalFee } =
		props;

	const startDateText = `${startDate.getDate()}/${startDate.toLocaleString(
		"default",
		{ month: "2-digit", year: "2-digit" },
	)}`;

	const endDateText = `${endDate.getDate()}/${endDate.toLocaleString(
		"default",
		{ month: "2-digit", year: "2-digit" },
	)}`;

	const daysDiff = Math.round(
		(endDate.getTime() - startDate.getTime()) / (24 * 60 * 60 * 1000),
	);

	return (
		<div className="flex gap-3 w-full">
			<Image src={thumbnail} alt="thumbnail" className="w-[100px] h-[100px]" />
			<div className="flex flex-col gap-1 w-full">
				<Button variant="link" className="p-0 w-fit h-fit">
					<Typography variant="h5">{title}</Typography>
				</Button>
				<Separator
					orientation="horizontal"
					className="border-b border-border"
				/>
				<div className="flex gap-1">
					<Typography variant="h6">Request from:</Typography>
					<Button variant="link" className="p-0 w-fit h-fit">
						<Typography variant="h6">{requestFrom}</Typography>
					</Button>
				</div>
				<div className="flex max-xl:flex-col xl:flex-row max-xl:gap-1 xl:gap-8">
					<div className="flex gap-1">
						<Typography variant="h6">Date:</Typography>
						<Typography variant="h6">{`${startDateText} - ${endDateText}`}</Typography>
					</div>
					<div className="flex gap-1">
						<Typography variant="h6">Rental fee:</Typography>
						<Typography variant="h6">
							{`฿${rentalFee} (฿${
								Math.round((rentalFee / daysDiff + Number.EPSILON) * 100) / 100
							}/day)`}
						</Typography>
					</div>
				</div>
			</div>
		</div>
	);
}

export function RentalRequestCardButton(props: PropsWithChildren) {
	return (
		<div className="max-lg:w-full lg:w-[120px]">
			<div className="flex max-lg:flex-row lg:flex-col items-center justify-center w-full h-full gap-3">
				{props.children}
			</div>
		</div>
	);
}

export function RentalRequestCard(props: PropsWithChildren) {
	return (
		<div className="flex max-lg:flex-col lg:flex-row px-3 py-2 max-lg:gap-2 lg:gap-4 rounded-xl bg-card">
			{props.children}
		</div>
	);
}

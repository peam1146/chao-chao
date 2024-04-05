"use client";

import React from "react";

import bicycle from "@/assets/images/bicycle.svg";

import {
	ExpensesCardButton,
	ExpensesCardOverDueButton,
	PaymentCard,
	PaymentCardContainer,
} from "./PaymentCard";

export default function ExpensesContainer() {
	return (
		<div className="flex flex-col gap-4 w-full">
			<PaymentCard>
				<PaymentCardContainer
					title="จกรยานแพะภเขา"
					assetFrom="มาย มม"
					thumbnail={bicycle}
					startDate={new Date("2024-02-29")}
					endDate={new Date()}
					insuranceFee={1000}
					deliveryFee={50}
					rentalFee={50}
					totalFee={1100}
				/>
				<ExpensesCardButton dueDate={new Date("2024-03-29")} />
			</PaymentCard>
			<PaymentCard>
				<PaymentCardContainer
					title="จกรยานแพะภเขา"
					assetFrom="มาย มม"
					thumbnail={bicycle}
					startDate={new Date("2024-02-29")}
					endDate={new Date()}
					insuranceFee={1000}
					deliveryFee={50}
					rentalFee={50}
					totalFee={1100}
				/>
				<ExpensesCardOverDueButton />
			</PaymentCard>
		</div>
	);
}

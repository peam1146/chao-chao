"use client";

import React, { useState } from "react";
import { PaymentCard, PaymentCardContainer } from "./PaymentCard";
import bicycle from "@/assets/images/bicycle.svg";
import Typography from "@/components/ui/typography";
import { Button } from "@/components/ui/button";
import { Modal } from "@/components/ui/dialog";
import PaymentHistoryRenterReviewModal from "./components/PaymentHistoryRenterReviewModal";
import PaymentHistoryLessorReviewModal from "./components/PaymentHistoryLessorReviewModal";

export default function PaymentHistoryContainer() {
	const [openLessorReviewModal, SetOpenLessorReviewModal] = useState(false);
	const [openRenterReveiwModal, setOpenRenterReviewModal] = useState(false);

	return (
		<>
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
					<div className="flex justify-center items-center w-max">
						<div className="flex flex-col gap-2 w-max items-center justify-center">
							<Typography variant="h6" className="text-unavailable">
								- ฿1,110
							</Typography>
							<Button
								variant="default"
								className="flex gap-2 w-full"
								onClick={() => {
									setOpenRenterReviewModal(true);
								}}
							>
								<Typography>Write a review</Typography>
							</Button>
						</div>
					</div>
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
						variant="receivable"
					/>
					<div className="flex justify-center items-center w-max">
						<div className="flex flex-col gap-2 w-max items-center justify-center">
							<Typography variant="h6" className="text-available">
								+ ฿1,110
							</Typography>
							<Button
								variant="default"
								className="flex gap-2 w-full"
								onClick={() => {
									SetOpenLessorReviewModal(true);
								}}
							>
								<Typography>Write a review</Typography>
							</Button>
						</div>
					</div>
				</PaymentCard>
			</div>
			<Modal
				open={openRenterReveiwModal}
				onOpenChange={setOpenRenterReviewModal}
			>
				<PaymentHistoryRenterReviewModal
					onClick={() => setOpenRenterReviewModal(false)}
				/>
			</Modal>
			<Modal
				open={openLessorReviewModal}
				onOpenChange={SetOpenLessorReviewModal}
			>
				<PaymentHistoryLessorReviewModal
					onClick={() => SetOpenLessorReviewModal(false)}
				/>
			</Modal>
		</>
	);
}
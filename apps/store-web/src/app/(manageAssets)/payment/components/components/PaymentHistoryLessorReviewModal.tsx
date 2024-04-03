import Typography from "@/components/ui/typography";
import React from "react";

import { Button } from "@/components/ui/button";
import { ReviewContent } from "./PaymentHistoryRenterReviewModal";
type PaymentHistoryLessorReviewModalProps = {
	onClick: () => void;
};

export default function PaymentHistoryLessorReviewModal(
	props: PaymentHistoryLessorReviewModalProps,
) {
	const { onClick } = props;
	return (
		<>
			<ReviewContent name="renter" rating={4} />
			<div className="flex justify-end gap-4">
				<Button
					variant="outline"
					type="button"
					size="lg"
					className="w-full lg:w-[108px]"
					onClick={onClick}
				>
					<Typography variant="h5">Cancel</Typography>
				</Button>
				<Button
					variant="default"
					type="submit"
					size="lg"
					className="w-full lg:w-[108px]"
				>
					<Typography variant="h5">Submit</Typography>
				</Button>
			</div>
		</>
	);
}

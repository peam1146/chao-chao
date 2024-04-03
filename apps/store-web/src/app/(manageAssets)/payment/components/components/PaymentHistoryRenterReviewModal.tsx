import Typography from "@/components/ui/typography";
import React from "react";

import { Rating } from "@mui/material";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

type ReviewContentProps = {
	name: string;
	rating: number;
};

export function ReviewContent(props: ReviewContentProps) {
	const { name, rating } = props;
	return (
		<div className="flex flex-col gap-2">
			<Typography variant="h5" fontWeight="bold">
				{`Review ${name}`}
			</Typography>
			<div className="flex gap-2 w-full">
				<Typography variant="h6">Rating</Typography>
				<div className="flex flex-row justify-center gap-1">
					<Rating
						name="read-only"
						value={rating}
						max={5}
						readOnly
						sx={{
							"& .MuiRating-iconEmpty": {
								color: "#999999",
							},
						}}
					/>
					<Typography variant="h5" className="text-light pt-0.5">
						{rating}
					</Typography>
				</div>
			</div>
			<Textarea placeholder="Type here..." className=" h-[124px]" />
		</div>
	);
}

type PaymentHistoryRenterReviewModalProps = {
	onClick: () => void;
};

export default function PaymentHistoryRenterReviewModal(
	props: PaymentHistoryRenterReviewModalProps,
) {
	const { onClick } = props;
	return (
		<>
			<div className="flex flex-col gap-4">
				<ReviewContent name="lessor" rating={4} />
				<ReviewContent name="asset" rating={3} />
			</div>
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

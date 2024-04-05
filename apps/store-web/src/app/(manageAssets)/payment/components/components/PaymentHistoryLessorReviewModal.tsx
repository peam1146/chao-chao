import Typography from "@/components/ui/typography";
import React from "react";

import { Button } from "@/components/ui/button";
import { ReviewContent } from "./ReviewContent";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { ReviewPayment } from "../../types/types";
import { zodResolver } from "@hookform/resolvers/zod";
import { Review_option_MutationInput, resolve } from "../../../../../../gqty";
import { toast } from "@/components/ui/use-toast";
import { Form } from "@/components/ui/form";

type PaymentHistoryLessorReviewModalProps = {
	reviewToUser: number;
	onClick: () => void;
};

export default function PaymentHistoryLessorReviewModal(
	props: PaymentHistoryLessorReviewModalProps,
) {
	const { reviewToUser, onClick } = props;

	const ReviewSchema = z.object({
		description: z.string(),
		rating: z.string(),
		option: z.enum(["ITEM", "USER"]),
		reviewToUser: z.number().int().optional(),
		reviewToItem: z.number().int().optional(),
	});

	const reviewForm = useForm<ReviewPayment>({
		resolver: zodResolver(ReviewSchema),
		defaultValues: {
			description: "",
			rating: "0",
			option: Review_option_MutationInput.USER,
			reviewToUser: reviewToUser,
		},
	});

	const onSubmit = (data: ReviewPayment) => {
		try {
			resolve(
				async ({ mutation }) => {
					const request = mutation.createReview({
						data: {
							description: data.description,
							rating: Number(data.rating),
							option: data.option,
							reviewToUser: data.reviewToUser,
						},
					});
					return request;
				},
				{
					cachePolicy: "no-store",
				},
			);
			toast({
				title: "Success",
				description: "Request sent successfully",
				success: true,
			});
		} catch {
			toast({
				title: "Error",
				description: "You alreary have a pending request for this item",
				error: true,
			});
		} finally {
			onClick();
		}
	};

	return (
		<Form {...reviewForm}>
			<form
				onSubmit={reviewForm.handleSubmit(onSubmit)}
				className="flex flex-col gap-4"
			>
				<ReviewContent name="renter" reviewForm={reviewForm} />
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
						type="submit"
						variant="default"
						size="lg"
						className="w-full lg:w-[108px]"
					>
						<Typography variant="h5">Submit</Typography>
					</Button>
				</div>
			</form>
		</Form>
	);
}

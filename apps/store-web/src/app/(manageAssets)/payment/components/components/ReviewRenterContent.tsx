import { Textarea } from "@/components/ui/textarea";
import Typography from "@/components/ui/typography";
import { Rating } from "@mui/material";
import { UseFormReturn } from "react-hook-form";
import { duplicateReviewPayment } from "../../types/types";
import { FormControl, FormField, FormItem } from "@/components/ui/form";

type ReviewRenterContentProps = {
	reviewForm: UseFormReturn<duplicateReviewPayment>;
};

export function ReviewRenterContent(props: ReviewRenterContentProps) {
	const { reviewForm } = props;
	const { register, control } = reviewForm;

	return (
		<div className="flex flex-col gap-4">
			<div className="flex flex-col gap-2">
				<Typography variant="h5" fontWeight="bold">
					Review lessor
				</Typography>
				<div className="flex gap-2 w-full justify-center items-center">
					<Typography variant="h6" className="leading-none">
						Rating
					</Typography>
					<FormField
						control={control}
						name="userRating"
						render={({ field }) => (
							<FormItem className="flex flex-row justify-center items-center gap-1">
								<div className="flex flex-row justify-center items-center gap-1">
									<Rating
										value={Number(field.value)}
										onChange={field.onChange}
										max={5}
										sx={{
											"& .MuiRating-iconEmpty": {
												color: "#999999",
											},
										}}
									/>
									<Typography
										variant="h5"
										className="text-light mt-0 leading-none"
									>
										{field.value}
									</Typography>
								</div>
							</FormItem>
						)}
					/>
				</div>
				<Textarea
					placeholder="Type here..."
					className=" h-[124px]"
					{...register("userDescription")}
				/>
			</div>
			<div className="flex flex-col gap-2">
				<Typography variant="h5" fontWeight="bold">
					Review asset
				</Typography>
				<div className="flex gap-2 w-full justify-center items-center">
					<Typography variant="h6" className="leading-none">
						Rating
					</Typography>
					<FormField
						control={control}
						name="itemRating"
						render={({ field }) => (
							<FormItem className="flex flex-row justify-center items-center gap-1">
								<div className="flex flex-row justify-center items-center gap-1">
									<Rating
										value={Number(field.value)}
										onChange={field.onChange}
										max={5}
										sx={{
											"& .MuiRating-iconEmpty": {
												color: "#999999",
											},
										}}
									/>
									<Typography
										variant="h5"
										className="text-light mt-0 leading-none"
									>
										{field.value}
									</Typography>
								</div>
							</FormItem>
						)}
					/>
				</div>
				<Textarea
					placeholder="Type here..."
					className=" h-[124px]"
					{...register("itemDescription")}
				/>
			</div>
		</div>
	);
}

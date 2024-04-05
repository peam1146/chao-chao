import { Textarea } from "@/components/ui/textarea";
import Typography from "@/components/ui/typography";
import { Rating } from "@mui/material";
import { UseFormReturn } from "react-hook-form";
import { ReviewPayment } from "../../types/types";
import { FormControl, FormField, FormItem } from "@/components/ui/form";

type ReviewContentProps = {
	name: string;
	reviewForm: UseFormReturn<ReviewPayment>;
};

export function ReviewContent(props: ReviewContentProps) {
	const { name, reviewForm } = props;
	const { register, control } = reviewForm;

	return (
		<div className="flex flex-col gap-2">
			<Typography variant="h5" fontWeight="bold">
				{`Review ${name}`}
			</Typography>
			<div className="flex gap-2 w-full justify-center items-center">
				<Typography variant="h6" className="leading-none">
					Rating
				</Typography>
				<FormField
					control={control}
					name="rating"
					render={({ field }) => (
						<FormItem className="flex flex-row justify-center items-center gap-1">
							<div className="flex flex-row justify-center items-center gap-1">
								<FormControl>
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
								</FormControl>
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
				{...register("description")}
			/>
		</div>
	);
}

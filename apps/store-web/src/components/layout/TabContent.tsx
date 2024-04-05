import Typography from "@/components/ui/typography";
import Rating from "@mui/material/Rating";
import Image from "next/image";

export type Review = {
	image: string;
	name: string;
	date: string;
	rating?: number;
	description?: string;
};

type TabContentProps = {
	reviews?: Review[];
	starRating?: number;
};

function filterReviews(reviews?: Review[], starRating?: number) {
	if (!starRating) return reviews ?? [];
	return reviews?.filter((item) => item?.rating === starRating) ?? [];
}

export default function TabContent(props: TabContentProps) {
	const { reviews, starRating } = props;
	const filteredReviews = filterReviews(reviews, starRating);
	console.log(filteredReviews);

	return (
		<div className="flex flex-col gap-y-4">
			{filteredReviews.length > 0 ? (
				filteredReviews?.map((review, index) => (
					<div className="flex flex-col gap-y-4" key={index}>
						<div className="flex flex-row gap-x-2">
							<>
								<Image
									src={review.image}
									alt="Profile Picture"
									width={50}
									height={50}
									className="rounded-full h-[50px]"
								/>
								<div className="flex flex-col gap-y-2">
									<div>
										<div className="flex gap-x-2">
											<Typography variant="h6">{review.name}</Typography>
											<Typography variant="tiny" className="text-light">
												{new Date(review.date).toLocaleDateString()}
											</Typography>
										</div>
										<div className="text-light flex ">
											<Rating
												name="read-only"
												size="small"
												value={review.rating}
												readOnly
												sx={{
													"& .MuiRating-iconEmpty": {
														color: "#999999",
													},
												}}
											/>
											<Typography variant="tiny" className="pt-0.5">
												{review.rating?.toFixed(1)}
											</Typography>
										</div>
									</div>
									<Typography variant="h6">{review.description}</Typography>
								</div>
							</>
						</div>
						<hr />
					</div>
				))
			) : (
				<Typography variant="h5" className="my-10 text-center text-light">
					No reviews
				</Typography>
			)}
		</div>
	);
}

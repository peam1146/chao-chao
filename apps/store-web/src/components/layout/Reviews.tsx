"use client";

import {
	Pagination,
	PaginationContent,
	PaginationEllipsis,
	PaginationItem,
	PaginationLink,
	PaginationNext,
	PaginationPrevious,
} from "@/components/ui/pagination";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Typography from "@/components/ui/typography";
import { Rating } from "@mui/material";

import TabContent, { Review } from "./TabContent";

export type ReviewsProps = {
	reviews: Review[];
};

function avgRating(reviews: Review[]) {
	if (!reviews.length) return 0;
	const totalRating = reviews.reduce((acc, review) => {
		if (!review?.rating) return acc;
		return acc + review?.rating;
	}, 0);
	return totalRating / reviews.length;
}

export function Reviews(props: ReviewsProps) {
	const { reviews } = props;

	if (!reviews) return null;

	return (
		<div className="flex flex-col gap-y-4 p-6 bg-card rounded-2xl w-full">
			<Typography variant="h4" fontWeight="bold">
				Reviews
			</Typography>
			<div className="flex flex-col gap-y-4">
				<div className="flex flex-col">
					<div className="flex justify-center">
						<Typography variant="h3" fontWeight="bold">
							{avgRating(reviews).toFixed(1)}
						</Typography>
						<Typography variant="h5" className="text-light my-auto">
							/5
						</Typography>
					</div>
					<Rating
						name="read-only"
						value={avgRating(reviews)}
						readOnly
						className="mx-auto"
						sx={{
							"& .MuiRating-iconEmpty": {
								color: "#999999",
							},
						}}
					/>
				</div>
				<Tabs defaultValue="all" className="w-full">
					<TabsList className="w-full max-lg:no-scrollbar max-lg:overflow-x-scroll justify-start">
						<TabsTrigger value="all" className="lg:w-1/6">
							All
						</TabsTrigger>
						<TabsTrigger value="star5" className="lg:w-1/6">
							5 stars
						</TabsTrigger>
						<TabsTrigger value="star4" className="lg:w-1/6">
							4 stars
						</TabsTrigger>
						<TabsTrigger value="star3" className="lg:w-1/6">
							3 stars
						</TabsTrigger>
						<TabsTrigger value="star2" className="lg:w-1/6">
							2 stars
						</TabsTrigger>
						<TabsTrigger value="star1" className="lg:w-1/6">
							1 star
						</TabsTrigger>
					</TabsList>
					<TabsContent value="all">
						<TabContent reviews={reviews} />
					</TabsContent>
					<TabsContent value="star5">
						<TabContent reviews={reviews} starRating={5} />
					</TabsContent>
					<TabsContent value="star4">
						<TabContent reviews={reviews} starRating={4} />
					</TabsContent>
					<TabsContent value="star3">
						<TabContent reviews={reviews} starRating={3} />
					</TabsContent>
					<TabsContent value="star2">
						<TabContent reviews={reviews} starRating={2} />
					</TabsContent>
					<TabsContent value="star1">
						<TabContent reviews={reviews} starRating={1} />
					</TabsContent>
				</Tabs>
			</div>

			{/*waiting for backend to query*/}
			{/* <Pagination> */}
			{/* 	<PaginationContent> */}
			{/* 		<PaginationItem> */}
			{/* 			<PaginationPrevious href="#" /> */}
			{/* 		</PaginationItem> */}
			{/**/}
			{/* 		<PaginationItem> */}
			{/* 			<PaginationLink isActive>1</PaginationLink> */}
			{/* 		</PaginationItem> */}
			{/**/}
			{/* 		<PaginationItem> */}
			{/* 			<PaginationLink href="#">2</PaginationLink> */}
			{/* 		</PaginationItem> */}
			{/**/}
			{/* 		<PaginationItem> */}
			{/* 			<PaginationLink href="#">3</PaginationLink> */}
			{/* 		</PaginationItem> */}
			{/**/}
			{/* 		<PaginationItem> */}
			{/* 			<PaginationEllipsis /> */}
			{/* 		</PaginationItem> */}
			{/**/}
			{/* 		<PaginationItem> */}
			{/* 			<PaginationNext href="#" /> */}
			{/* 		</PaginationItem> */}
			{/* 	</PaginationContent> */}
			{/* </Pagination> */}
		</div>
	);
}

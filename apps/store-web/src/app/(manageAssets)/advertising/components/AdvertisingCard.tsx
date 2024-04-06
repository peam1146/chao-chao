"use client";

import Typography from "@/components/ui/typography";
import { CalendarBlank, Clock } from "@phosphor-icons/react";
import Image from "next/image";
import Link from "next/link";

import { Maybe, Media } from "../../../../../gqty";

type AdvertisingCardProps = {
	id: number;
	name: string;
	image?: Maybe<Media[]>;
	startDate: Date;
	endDate: Date;
};

export default function AdvertisingCard(props: AdvertisingCardProps) {
	const { id, name, image, startDate, endDate } = props;
	const start = `${startDate.getDate()}/${startDate.getMonth()}/${startDate.getFullYear()}`;
	const end = `${endDate.getDate()}/${endDate.getMonth()}/${endDate.getFullYear()}`;
	const dayLeft = Math.ceil(
		(endDate.getTime() - new Date().getTime()) / (1000 * 60 * 60 * 24),
	);

	return (
		<Link href={`/detail/${id}`}>
			<div className="flex flex-col h-fit w-full bg-card rounded-2xl p-4 gap-2 border lg:border-2 border-transparent hover:border-primary hover:border-opacity-100">
				<div className="flex h-[142px] justify-center">
					{image && (
						<Image
							src={image?.[0]?.url ?? ""}
							width={image?.[0]?.width ?? 0}
							height={image?.[0]?.height ?? 0}
							alt="picture"
							className="object-contain rounded-lg"
						/>
					)}
				</div>
				<div className="flex flex-col gap-1 w-fit items-start">
					<Typography
						variant="tiny"
						fontWeight="bold"
						className="lg:h4 line-clamp-1"
					>
						{name}
					</Typography>
					<div className="flex max-md:flex-col gap-1 items-center">
						<CalendarBlank size={16} className="text-secondary" />
						<Typography variant="h6" className="text-light pt-0.5 ">
							{`${start} - ${end}`}
						</Typography>
					</div>
					<div className="flex max-md:flex-col w-full gap-1 items-center">
						<Clock size={16} className="text-secondary" />
						<Typography variant="h6">{`${dayLeft}d left`}</Typography>
					</div>
				</div>
			</div>
		</Link>
	);
}

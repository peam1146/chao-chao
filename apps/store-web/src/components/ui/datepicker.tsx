"use client";

import * as React from "react";

import { Calendar } from "@/components/ui/calendar";
import {
	Popover,
	PopoverContent,
	PopoverTrigger,
} from "@/components/ui/popover";
import { format } from "date-fns";
import { Calendar as CalendarIcon } from "lucide-react";
import { SelectSingleEventHandler } from "react-day-picker";

type DatepickerProps = {
	value?: Date;
	onChange: SelectSingleEventHandler;
};

export function DatePicker(props: DatepickerProps) {
	const { value, onChange } = props;
	return (
		<Popover>
			<PopoverTrigger asChild>
				<button className="flex items-center border text-sm rounded-md p-1 w-full">
					<CalendarIcon className="mr-2 h-4 w-4" />
					{value ? (
						format(value, "dd/MM/yyyy")
					) : (
						<span className="leading-none">Pick a date</span>
					)}
				</button>
			</PopoverTrigger>
			<PopoverContent className="w-auto p-0">
				<Calendar
					mode="single"
					selected={value}
					onSelect={onChange}
					initialFocus
				/>
			</PopoverContent>
		</Popover>
	);
}

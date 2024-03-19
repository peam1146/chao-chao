// import LoadingIndicator from "@/common/components/partial/LoadingIndicator";

import { ChangeEvent, DragEvent } from "react";
import { Button } from "./button";
import Typography from "./typography";
import { CloudArrowUp } from "@phosphor-icons/react";

export interface FileUploadProps {
	file?: File | null;
	uploadText: string;
	uploadStatus: "default" | "success" | "error";
	// inputRef: React.MutableRefObject<HTMLInputElement | null>;
	accept?: string;
	isLoading?: boolean;
	// handleDragOver(e: DragEvent<HTMLDivElement>): void;
	// handleDrop(e: DragEvent<HTMLDivElement>): void;
	// handleFileChange(e: ChangeEvent<HTMLInputElement>): void;
	// handleButtonClick(): void;
}

const FileUpload = (props: FileUploadProps) => {
	const {
		uploadText,
		uploadStatus,
		// handleDragOver,
		// handleDrop,
		// handleFileChange,
		// handleButtonClick,
		// inputRef,
		isLoading,
		accept,
	} = props;

	return (
		<div
			className="flex items-center justify-center w-full h-fit border border-primary border-dashed rounded-md px-3 py-10"
			// onDragOver={!isLoading ? handleDragOver : undefined}
			// onDrop={!isLoading ? handleDrop : undefined}
		>
			<div className="flex flex-row items-center justify-center gap-2 max-lg:flex-col">
				<div className="flex flex-row gap-2">
					{uploadStatus === "default" && (
						<CloudArrowUp className="w-5 h-5 text-primary" />
					)}
					<Typography
						variant="h5"
						className={`${
							uploadStatus === "error" ? "text-system-error" : "text-primary"
						}`}
					>
						{uploadText}
					</Typography>
				</div>
				<input
					type="file"
					hidden
					// ref={inputRef}
					// onChange={handleFileChange}
					accept={accept}
				/>
				<Button
					disabled={isLoading}
					// onClick={handleButtonClick}
				>
					<div className="flex flex-row gap-2">
						{/* {isLoading && <LoadingIndicator size="xs" />} */}
						{!(uploadStatus === "default") && (
							<CloudArrowUp className="w-5 h-5 text-invert" />
						)}
						{uploadStatus === "default"
							? "Click here to upload file"
							: "Upload again"}
					</div>
				</Button>
			</div>
		</div>
	);
};

export default FileUpload;

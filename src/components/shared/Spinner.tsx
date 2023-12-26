import { ComponentProps } from "react";

type SpinnerProps = ComponentProps<"div"> & {
	bgColor?: string;
}

const Spinner = ({ bgColor }: SpinnerProps) => {
	return (
		<div className='h-full grid place-items-center mt-12'>
			<div
				className={`h-10 w-10 rounded-full ${bgColor} grid place-items-center`}
			>
				<div className='h-8 w-8 rounded animate-spin grid place-items-center'>
					<div className='h-6 w-6 rounded-sm bg-black animate-spin'></div>
				</div>
			</div>
		</div>
	);
};

export default Spinner;


import { Puff } from "react-loader-spinner"

export const Shimmer = () => {
	return (
		<><div className="hidden md:block -mt-[1px] ml-[536px]">
			<Puff
				height="750"
				width="110"
				radius={1}
				color="#7b8a8b"
				ariaLabel="puff-loading"
				wrapperStyle={{}}
				wrapperClass=""
				visible={true}
			/>
		</div></>
	)
}
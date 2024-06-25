
import { Puff } from "react-loader-spinner"

export const Shimmer = () => {
	return (
		<><div className="flex justify-center items-center">
			<Puff
				height="750"
				width="200"
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
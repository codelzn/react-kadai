import { useCatPic } from "../composable/usePic"

export default function Cat() {
	const pics = useCatPic()
	return (
		<div className="flex flex-wrap justify-center items-center gap-5">
			{pics.map((pic, i) => (
				<img src={pic} alt="" key={i} className="h-60" />
			))}
		</div>
	)
}

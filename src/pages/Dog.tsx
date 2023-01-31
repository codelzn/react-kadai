import { useDogPic } from "../composable/usePic"
import ToTop from "../components/toTop"

export default function Dog() {
	const pics = useDogPic()
	return (
    <>
      <ToTop />
			<div className="flex flex-wrap justify-center items-center gap-5">
				{pics.map((pic, i) => (
					<img src={pic} alt="" key={i} className="h-60 rounded-2xl overflow-hidden" />
				))}
			</div>
		</>
	)
}

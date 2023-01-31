import Rive from "@rive-app/react-canvas"
import { useNavigate } from "react-router-dom"

export default function Home() {
	const navigate = useNavigate()
	return (
		<div className="h-full w-full bg-[#FCBA2B] flex">
			<Rive
				src="/cat.riv"
				stateMachines="State Machine 1"
				onClick={() => navigate("/cat")}
			/>
			<Rive
				src="/dog.riv"
				stateMachines="State Machine good dog"
				onClick={() => navigate("/dog")}
			/>
		</div>
	)
}

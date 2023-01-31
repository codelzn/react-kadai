import Rive from "@rive-app/react-canvas"
import { useNavigate } from "react-router-dom"
import { motion } from "framer-motion"
import { useState } from "react"

const variants = {
	leave: { scale: 1, y: 0 },
	enter: { scale: 1.5, y: 40 },
}

export default function Home() {
	const navigate = useNavigate()
	const [Neko, setNeko] = useState(false)
	const [Inu, setInu] = useState(false)
	return (
		<div className="h-full w-full bg-[#FCBA2B] relative">
			<div className="absolute w-full flex justify-around text-4xl top-10">
				<motion.p
					variants={variants}
					initial="leave"
					animate={Neko ? "enter" : "leave"}
          transition={{ duration: 0.5 }}
          onClick={() => navigate("/cat")}
          onMouseOver={() => setNeko(true)}
          onMouseLeave={() => setNeko(false)}
          className="cursor-pointer"
				>
					かわいい猫ちゃんに会おう
				</motion.p>
				<motion.p
					variants={variants}
					animate={Inu ? "enter" : "leave"}
					initial="leave"
          transition={{ duration: 0.5 }}
          onClick={() => navigate("/dog")}
          onMouseOver={() => setInu(true)}
          onMouseLeave={() => setInu(false)}
          className="cursor-pointer"
				>
					かわいいワンちゃんに会おう
				</motion.p>
			</div>
			<div className="h-full w-full flex cursor-pointer">
				<Rive
					src="/cat.riv"
					stateMachines="State Machine 1"
					onClick={() => navigate("/cat")}
					onMouseOver={() => setNeko(true)}
          onMouseLeave={() => setNeko(false)}
				/>
				<Rive
					src="/dog.riv"
					stateMachines="State Machine good dog"
					onClick={() => navigate("/dog")}
					onMouseOver={() => setInu(true)}
          onMouseLeave={() => setInu(false)}
				/>
			</div>
		</div>
	)
}

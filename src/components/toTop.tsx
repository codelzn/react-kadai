import { useNavigate } from "react-router-dom"
import { motion } from "framer-motion"

const variants = {
	leave: { scale: 1 },
	enter: { scale: 1.5 },
}

export default function ToTop() {
  const navigate = useNavigate()
	return (
		<motion.h1
			variants={variants}
      initial="leave"
      animate="enter"
			transition={{ duration: 0.5, repeat: Infinity, repeatType: "reverse" }}
			className="text-4xl block w-fit mx-auto mb-10 mt-6 px-3 py-2 cursor-pointer"
			onClick={() => navigate("/")}
		>
			ホームに戻る
		</motion.h1>
	)
}

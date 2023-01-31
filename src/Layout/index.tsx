import { Canvas } from '@react-three/fiber'

import { Outlet } from 'react-router-dom'

export default function Layout() {
	return (
		<>
			<div className="fixed w-full z-10 flex flex-col items-center justify-between">
				<h1 className="text-4xl text-black font-bold cursor-pointer"><a href="/">俺の仲間</a></h1>
				<nav className="flex gap-10 text-4xl text-purple-600">
					<a href="/macbook" className="cursor-pointer">
						MacBook
					</a>
					<a href="/iphone" className="cursor-pointer">
						iPhone
					</a>
				</nav>
			</div>
			<Outlet />
		</>
	)
}

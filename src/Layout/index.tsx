import { Canvas } from '@react-three/fiber'

import { Outlet } from 'react-router-dom'

export default function Layout() {
	return (
		<>
			<Outlet />
		</>
	)
}

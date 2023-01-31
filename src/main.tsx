import React from 'react'
import ReactDOM from 'react-dom/client'
import './assets/styles/global.scss'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './Layout'
import Home from './pages/Home'
import Macbook from './pages/Macbook'
import Iphone from './pages/Iphone'

const router = createBrowserRouter([
	{
		path: '/',
		element: <Layout />,
		children: [
			{ path: '/', element: <Home /> },
			{ path: 'macbook', element: <Macbook /> },
			{ path: 'iphone', element: <Iphone /> },
		],
	},
])

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>
)

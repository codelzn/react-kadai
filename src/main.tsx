import React from "react"
import ReactDOM from "react-dom/client"
import "./assets/styles/global.scss"
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Layout from "./Layout"
import Home from "./pages/Home"
import Cat from "./pages/Cat"
import Dog from "./pages/Dog"

const router = createBrowserRouter([
	{
		path: "/",
		element: <Layout />,
		children: [
			{ index: true, element: <Home /> },
			{ path: "cat", element: <Cat /> },
			{ path: "dog", element: <Dog /> },
		],
	},
])

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
	<RouterProvider router={router} />
)

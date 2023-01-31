import axios from "axios"
import { useState, useEffect } from "react"

type Pic = string[]

async function getDogPic() {
	const { data } = await axios.get("https://dog.ceo/api/breeds/image/random/10")
	return data.message as Pic
}

type CatApiType = { id: string; url: string; width: number; height: number }[]

async function getCatPic() {
	const { data } = await axios.get<CatApiType>(
		"https://api.thecatapi.com/v1/images/search?limit=10"
	)
	const currentData = data.reduce((pre, cur) => {
		pre.push(cur.url)
		return pre
	}, [] as Pic)
	return currentData
}

export function useCatPic() {
	const [pics, setPics] = useState<Pic>([])
	useEffect(() => {
		getCatPic()
			.then(data => {
				setPics(data)
			})
			.catch(err => console.error(err))
	}, [])
	return pics
}

export function useDogPic() {
	const [pics, setPics] = useState<Pic>([])
	useEffect(() => {
		getDogPic()
			.then(data => {
				setPics(data)
			})
			.catch(err => console.error(err))
	}, [])
	return pics
}

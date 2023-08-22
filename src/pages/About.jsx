import { useLoaderData } from 'react-router-dom'
import Loading from '@/components/Loading'

export async function loader() {
	await new Promise((r) => setTimeout(r, 500))
	return 'I came from the About.tsx loader function!'
}

export function Component() {
	let data = useLoaderData()

	return (
		<div>
			<h2>About</h2>
			<p>{data}</p>
		</div>
	)
}

Component.displayName = 'AboutPage'

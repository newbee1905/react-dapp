import NavItem from '@/components/NavItem'
import routes from '@/routes'

export default function Navbar() {
	return (
		<>
			<span display="none">
				{/* Preload icons */}
				<i i="tabler-search" />
				<i i="tabler-home-2" />
				<i i="tabler-wallet" />
				<i i="tabler-arrows-exchange" />
				<i i="tabler-brand-mastercard" />
				<i i="tabler-clock-dollar" />
			</span>
			<ul list="none" m-t="20px" h="full">
				{routes.map((data) => (
					<NavItem key={data.content} data={data} />
				))}
			</ul>
		</>
	)
}

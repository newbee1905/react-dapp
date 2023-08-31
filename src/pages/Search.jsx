import data from '@/data.json'

export default function Search() {
	return (
		<>
			<label
				for="default-search"
				m="b-2"
				text="slate-100 sm medium"
				sr="only"
			>
				Search
			</label>
			<div className="relative">
				<div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
					<svg
						className="w-4 h-4 text-gray-500 dark:text-gray-400"
						aria-hidden="true"
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 20 20"
					>
						<path
							stroke="currentColor"
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
						/>
					</svg>
				</div>
				<input
					type="search"
					id="default-search"
					text="slate-100 sm"
					w="full"
					p="4 l-10"
					border="0 b-1 gray-300 focus:cool-gray-500"
					right="focus:cool-gray-500"
					bg="gray-900"
					placeholder="Search Mockups, Logos..."
					required
				/>
			</div>
		</>
	)
}

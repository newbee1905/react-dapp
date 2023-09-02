export default function SearchBar({ input, setInput }) {
	return (
		<div m-b="10">
			<label
				htmlFor="default-search"
				m="b-2"
				text="slate-100 sm medium"
				sr="only"
			>
				Search
			</label>
			<div position="relative">
				<div
					position="absolute"
					inset="y-0"
					left="0"
					display="flex"
					items="center"
					p="l-3"
					className="pointer-events-none"
				>
					<svg
						w="4"
						h="4"
						text="slate-300"
						aria-hidden="true"
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 20 20"
					>
						<path
							stroke="currentColor"
							strokeLinecap="round"
							strokeLinejoin="round"
							strokeWidth="2"
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
					border="0 b-1 cool-gray-600 focus:cool-gray-300"
					outline="focus:none"
					bg="gray-900"
					placeholder="Search Coins"
					value={input}
					onChange={(e) => setInput(e.target.value)}
					required
				/>
			</div>
		</div>
	)
}

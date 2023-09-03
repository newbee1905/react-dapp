export default function SearchBar({ input, setInput }) {
	return (
		<div>
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
					<i text="slate-200 xl" i="tabler-search" />
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

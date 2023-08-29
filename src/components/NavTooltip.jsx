export default function Tooltip({ content }) {
	return (
		<span
			display="md:flex none"
			justify="center"
			items="center"
			position="absolute"
			top="0px"
			left="[calc(100%+20px)]"
			z="3"
			bg="[#fff]"
			h="50px"
			p="y-6px x-12px"
			rounded="md"
			text="base 400"
			whitespace="nowrap"
			shadow="xl"
			className="opacity-0 group-hover:opacity-100 pointer-events-none"
		>
			{content}
		</span>
	)
}

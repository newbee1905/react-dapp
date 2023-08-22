import AtomicSpinner from 'atomic-spinner'

function Loading() {
	return (
		<div
			animate="motion-safe:pulse"
			position="fixed"
			w="screen"
			h="screen"
			display="flex"
			justify="center"
			items="center"
		>
			<AtomicSpinner atomSize={480} displayElectronPaths={true} />
		</div>
	)
}

export default Loading

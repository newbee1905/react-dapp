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

export function SkeletonLoading() {
	return (
		<div role="status" w="full" animate="pulse">
			<div h="2.5" bg="gray-600" rounded="full" mb="4" />
			<div h="2.5" bg="gray-600" rounded="full" mb="4" />
			<div h="2.5" bg="gray-600" rounded="full" mb="4" />
			<div h="2.5" bg="gray-600" rounded="full" mb="4" />
			<div h="2.5" bg="gray-600" rounded="full" mb="4" />
			<div h="2.5" bg="gray-600" rounded="full" mb="4" />
			<div h="2.5" bg="gray-600" rounded="full" mb="4" />
			<div h="2.5" bg="gray-600" rounded="full" mb="4" />
		</div>
	)
}

export default Loading

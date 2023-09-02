/**
 * Loading the table when data is not being loaded
 * 
 * @component
 */
export default function MarketTableSkeletonLoading() {
	return (
		<>
			<tr role="status" w="full" animate="pulse">
				<th h="4.5" bg="gray-600" rounded="full" mb="4" />
				<th h="4.5" bg="gray-600" rounded="full" mb="4" />
				<th h="4.5" bg="gray-600" rounded="full" mb="4" />
			</tr>
			<br />
			<tr role="status" w="full" animate="pulse">
				<th h="4.5" bg="gray-600" rounded="full" mb="4" />
				<th h="4.5" bg="gray-600" rounded="full" mb="4" />
				<th h="4.5" bg="gray-600" rounded="full" mb="4" />
			</tr>
			<br />
			<tr role="status" w="full" animate="pulse">
				<th h="4.5" bg="gray-600" rounded="full" mb="4" />
				<th h="4.5" bg="gray-600" rounded="full" mb="4" />
				<th h="4.5" bg="gray-600" rounded="full" mb="4" />
			</tr>
		</>
	)
}

/**
 * Splits an array into smaller chunks of a specified size.
 *
 * @param {Array} arr - The array to be split.
 * @param {number} chunkSize - The size of each chunk.
 * @returns {Array} An array containing smaller chunks of the input array.
 */
function arrayChunks(arr, chunkSize) {
	let res = new Array(Math.ceil(arr.length / chunkSize))
	for (let i = 0, j = 0; i < res.length; i++) {
		res[i] = arr.slice(i * chunkSize, (i + 1) * chunkSize)
	}
	return res
}

/**
 * Generates a random integer between 0 and the specified max value.
 *
 * @param {number} max - Max Value.
 * @returns {number} A random integer.
 */
function getRandomInt(max) {
	return Math.floor(Math.random() * max)
}

export { arrayChunks, getRandomInt }

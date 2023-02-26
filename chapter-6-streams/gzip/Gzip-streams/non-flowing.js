//non-flowing mode
// process.stdin.on("readable", () => {
// 	let chunk;
// 	while ((chunk = process.stdin.read()) !== null) {
// 		// Read data from stdin is synchronous operation that pulls data from the internal buffers of readable stream. this returned data is a buffer object. if the stream is working in binary mode.
// 		console.log(`Chunk read (${chunk.length} bytes): ${chunk.toString()}`);
// 	}
// });

//flowing mode
process.stdin
	.on("data", (chunk) => {
		console.log("New data available");
		console.log(`Chunk read (${chunk.length} bytes): ${chunk.toString()}`);
	})
	.on("end", () => {
		console.log("No more data");
	});

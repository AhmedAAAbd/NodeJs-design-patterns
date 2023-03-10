import { gzip } from "zlib";
import { promisify } from "es6-promisify";
import { promises as fs } from "fs";

const createGzip = promisify(gzip);

const filename = process.argv[2];

async function main() {
	const data = await fs.readFile(filename);
	const compressed = await createGzip(data);
	await fs.writeFile(filename + ".gz", compressed);
	console.log("Compressed file written to " + filename + ".gz");
}
main();

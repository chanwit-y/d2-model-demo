"use server";
import { writeFile } from "node:fs";
import { readdir } from "node:fs/promises";
import { join } from "node:path";

export async function createJson(json: string) {
  const filePath = `./json/${Date.now()}.json`;
  await writeFile(filePath, json, (err) => {
    if (err) {
      console.error("Error writing file:", err);
    } else {
      console.log("File written successfully:", filePath);
    }
  });
  return filePath;
}

export async function listJson() {
  //list all json files typescript

// const directoryPath = join(__dirname, "json");
// console.log("directoryPath", directoryPath);

try {
	const files = await readdir("./json");
	files.forEach((file: string) => {
		console.log(file);
	});
} catch (err) {
	console.error("Unable to scan directory:", err);
}
}

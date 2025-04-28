"use server";
import { writeFile } from "node:fs";
import { readdir, readFile } from "node:fs/promises";
// import { join } from "node:path";

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

export async function readJson(fileName: string) {
  try {
    const data = await readFile(`./json/${fileName}`, "utf-8");
    const jsonData = JSON.parse(data);
    return jsonData;
  } catch (err) {
    console.error("An error occurred:", err);
    throw err; // Re-throw the error to be handled by the caller
  }
}

export async function listJson() {
  //list all json files typescript

  // const directoryPath = join(__dirname, "json");
  // console.log("directoryPath", directoryPath);

  const res: any[] = [];
  try {
    const files = await readdir("./json");
    files.forEach((file: string) => {
      if (file.endsWith(".json")) {
        res.push(file);
      }
      console.log(file);
    });
  } catch (err) {
    console.error("Unable to scan directory:", err);
  }
  return res;
}

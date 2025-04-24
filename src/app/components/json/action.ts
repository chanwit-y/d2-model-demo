"use server";
import { writeFile } from "node:fs";

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

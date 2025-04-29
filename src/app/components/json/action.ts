"use server";
import { writeFile } from "node:fs";
import { readdir, readFile, unlink } from "node:fs/promises";
import { resolve } from "node:path";

const JSON_DIR = "./json";

/**
 * Creates a new JSON file with the provided content
 * @param json JSON string to save
 * @returns Path to the created file
 */
export async function createJson(json: string): Promise<string> {
  const filename = `${Date.now()}.json`;
  const filePath = `${JSON_DIR}/${filename}`;
  
  return new Promise((resolve, reject) => {
    writeFile(filePath, json, (err) => {
      if (err) {
        console.error("Error writing file:", err);
        reject(err);
      } else {
        console.log("File written successfully:", filePath);
        resolve(filename);
      }
    });
  });
}

/**
 * Reads and parses a JSON file by name
 * @param fileName Name of the JSON file to read
 * @returns Parsed JSON data
 */
export async function readJson(fileName: string): Promise<Record<string, any>> {
  try {
    const filePath = resolve(`${JSON_DIR}/${fileName}`);
    const data = await readFile(filePath, "utf-8");
    return JSON.parse(data);
  } catch (err) {
    console.error(`Error reading JSON file ${fileName}:`, err);
    throw err;
  }
}

/**
 * Lists all JSON files in the JSON directory
 * @returns Array of JSON filenames
 */
export async function listJson(): Promise<string[]> {
  try {
    const files = await readdir(JSON_DIR);
    const jsonFiles = files.filter(file => file.endsWith(".json"));
    
    return jsonFiles;
  } catch (err) {
    console.error("Unable to scan JSON directory:", err);
    return [];
  }
}

/**
 * Deletes a JSON file by name
 * @param fileName Name of the JSON file to delete
 * @returns Success status
 */
export async function deleteJson(fileName: string): Promise<boolean> {
  try {
    await unlink(`${JSON_DIR}/${fileName}`);
    return true;
  } catch (err) {
    console.error(`Error deleting JSON file ${fileName}:`, err);
    return false;
  }
}
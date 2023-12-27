/* eslint-env node */

import sharp from "sharp";
import { existsSync, mkdirSync, readdirSync } from "fs";
import { extname, join, basename } from "path";

// Get input and output directories from command line arguments
const inputDirectory = process.argv[2];
const outputDirectory = process.argv[3];

// Validate input
if (!inputDirectory || !outputDirectory) {
  console.error("Usage: node script.js <inputDirectory> <outputDirectory>");
  process.exit(1);
}

// Create the output directory if it doesn't exist
if (!existsSync(outputDirectory)) {
  mkdirSync(outputDirectory);
}

// Get a list of all PNG files in the input directory
const pngFiles = readdirSync(inputDirectory).filter(
  (file) => extname(file).toLowerCase() === ".png"
);

// Convert each PNG file to WebP
pngFiles.forEach((pngFile) => {
  const pngFilePath = join(inputDirectory, pngFile);

  // Convert to WebP
  const webpFileName = basename(pngFile, extname(pngFile)) + ".webp";
  const webpFilePath = join(outputDirectory, webpFileName);

  sharp(pngFilePath)
    .toFormat("webp", { quality: 80 }) // Adjust quality as needed
    .toFile(webpFilePath, (err) => {
      if (err) {
        console.error(`Error converting ${pngFile} to WebP:`, err);
      } else {
        console.log(`${pngFile} converted to ${webpFileName}`);
      }
    });
});

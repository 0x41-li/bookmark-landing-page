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

// Convert each PNG file to AVIF
pngFiles.forEach((pngFile) => {
  const pngFilePath = join(inputDirectory, pngFile);

  // Convert to AVIF
  const avifFileName = basename(pngFile, extname(pngFile)) + ".avif";
  const avifFilePath = join(outputDirectory, avifFileName);

  sharp(pngFilePath)
    .toFormat("avif", { quality: 30 }) // Specify 'avif' format
    .toFile(avifFilePath, (err) => {
      if (err) {
        console.error(`Error converting ${pngFile} to AVIF:`, err);
      } else {
        console.log(`${pngFile} converted to ${avifFileName}`);
      }
    });
});

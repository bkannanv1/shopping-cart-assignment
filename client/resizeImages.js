import sharp from "sharp";
import fs from "fs";
import path from "path";

const sourceDir = "./public/static/images/offers";
const targetDir = "./public/static/images/resized";

/**
 * Node script to resize images.
 */
fs.readdirSync(sourceDir).forEach((file) => {
  console.log("file:", file);
  const extension = path.extname(file);
  const filename = path.basename(file, extension);

  sharp(`${sourceDir}/${file}`)
    .resize({ width: 450 })
    .toFile(`${targetDir}/${filename}-small${extension}`);
});

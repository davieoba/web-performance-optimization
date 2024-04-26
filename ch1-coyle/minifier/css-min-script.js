import fs from "fs"
import path from "path"
import CleanCSS from "clean-css"
// const { minify } = require("minify")
// const fs = require("fs")

const dirname = path.resolve()
const css = fs.readFileSync(
  path.join(dirname, "..", "css", "styles.css"),
  "utf-8"
)

const minifiedCSS = new CleanCSS().minify(css).styles

fs.writeFileSync("styles.min.css", minifiedCSS)
console.log("css minified successfully")

import fs from "fs"
import path from "path"
import { minify } from "uglify-js"

const dirname = path.resolve()
const jsFilePath = path.join(dirname, "..", "js", `${process.argv[2]}.js`)
const js = fs.readFileSync(jsFilePath, "utf-8")

const minifiedCode = minify(js).code

fs.writeFileSync(`${process.argv[2]}.min.js`, minifiedCode)
console.log("Javascript code minified successfully")

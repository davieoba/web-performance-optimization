import fs from "fs"
import path from "path"
import htmlMinfier from "html-minifier"

const dirname = path.resolve()
const htmlFilePath = path.join(dirname, "..", `index.html`)
const html = fs.readFileSync(htmlFilePath, "utf-8")

const minifiedHtml = htmlMinfier.minify(html, {
  collapseWhitespace: true,
  removeComments: true,
})

fs.writeFileSync("index.min.html", minifiedHtml)
console.log("HTML minified successfully")

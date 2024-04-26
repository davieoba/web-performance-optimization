// var express = require("express");
import express from "express"
import path from "path"
import compression from "compression"

var app = express()
app.use(compression())
const dirname = path.resolve()

app.get("/", (req, res) => {
  res.sendFile(path.join(dirname, "index.min.html"))
})

// Run static server
app.use(express.static(dirname))
app.listen(8080)

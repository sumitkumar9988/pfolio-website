const express = require('express')
const path = require('path')
const { createProxyMiddleware } = require("http-proxy-middleware");

const app = express()
app.use(express.static(path.join(__dirname,"client","build")));

app.use(
    "/",
    createProxyMiddleware({
      target: "http://pfolio.site",
      changeOrigin: true,
    })
  )

  // app.listen('80',()=>{
  //   console.log('Hello');
  // })

module.exports = app
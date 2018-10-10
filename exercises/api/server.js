const http = require('http')
const url = require('url')
const fs = require('fs')
const path = require('path')
const mime = require('mime')

/**
 * async function that reads asset from disk
 * @param {String} name full file name of asset in asset folder
 */
const findAsset = (name) => {
  return new Promise((resolve, reject) => {
    const assetPath = path.join(__dirname, 'assets', name)
    fs.readFile(assetPath, {encoding: 'utf-8'}, (err, asset) => {
      if (err) {
        reject(err)
      } else {
        resolve(asset)
      }
    })
  })
}

const hostname = '127.0.0.1'
const port = 3000
// simple, quick router object
const router = {
  '/ GET': {
    asset: 'index.html',
    type: mime.getType('html')
  },
  '/style.css GET': {
    asset: 'style.css',
    type: mime.getType('css')
  }
}

// log incoming request coming into the server. Helpful for debugging and tracking
const logRequest = (method, route, status) => console.log(method, route, status)

const server = http.createServer(async (req, res) => {
  const method = req.method
  const route = url.parse(req.url).pathname
  // check the router for the incomming route + method pair
  const routeMatch = router[`${route} ${method}`]
  // return not found if the router does not have a match
  if (!routeMatch) {
    res.writeHead(404)
    logRequest(method, route, 404)
    return res.end()
  }

  const {type, asset} = routeMatch

  // set the content-type header for the asset so applications like a browser will know how to handle it
  res.writeHead(200,{'Content-Type': type})
  // most important part, send down the asset
  res.write(await findAsset(asset))
  logRequest(method, route, 200)
  res.end()
})

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`)
})

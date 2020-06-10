const http = require('http')
const url = require('url')
const fs = require('fs')
const path = require('path')

/**
 * this function is blocking, fix that
 * @param {String} name full file name of asset in asset folder
 */
const findAsset = async(name) => {
const assetPath = path.join(__dirname, 'assets', name);
return new Promise((resolve,reject)=>{
  fs.readFile(assetPath,{encoding:'utf-8'},(err,res)=>{
    if(err)
      reject(err);
    else
      resolve(res);
  });
});
}

const hostname = '127.0.0.1'
const port = 3000

// log incoming request coming into the server. Helpful for debugging and tracking
const logRequest = (method, route, status) => console.log(method, route, status)

const routs = {
  '/ GET':{
    asset:'index.html',
    mim:'text/html'
  },
  '/style.css GET':{
    asset:'style.css',
    mim:'text/css'
  }
}
const server = http.createServer(async(req, res) => {
  const method = req.method;
  const route = url.parse(req.url).pathname;
  const findRout = routs[`${route} ${method}`];
  if (!findRout) {
    res.writeHead(404);
    res.write(await findAsset('error.html'))
    res.end();
    // console.log('ther is no rout with this url.');
  } else{
    res.writeHead(200, {'Content-Type': findRout.mim});
    res.write(await findAsset(findRout.asset));
    logRequest(method, route, 200);
    res.end();
  }
})

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`)
})

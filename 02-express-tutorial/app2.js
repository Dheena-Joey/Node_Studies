// const http = require('http')
// const fs = require('fs')

// const homePage = fs.readFileSync('./navbar-app/index.html')
// const homeCss = fs.readFileSync('./navbar-app/styles.css')
// const homelogo = fs.readFileSync('./navbar-app/logo.svg')
// const homeApp = fs.readFileSync('./navbar-app/browser-app.js')
// const homeAbout = fs.readFileSync('./navbar-app/about.html')



// const server=http.createServer((req, res)=>{
//     const url = req.url
//     console.log(url)
//     //HOME HTML
//     if(url === '/'){
//         res.writeHead(200,{ 'content-type':'text/html' })
//         res.write(homePage)
//         res.end()
//       }
//       else if(url === '/styles.css'){
//         res.writeHead(200,{ 'content-type':'text/css' })
//         res.write(homeCss)
//         res.end()
//       }   
//       else if(url === '/logo.svg'){
//         res.writeHead(200,{ 'content-type':'image/svg+xml' })
//         res.write(homelogo)
//         res.end()
//       }
//       //HOME LOGO 
//       //HOME JAVASCRIPT FILE
//       else if(url === '/browser-app.js'){
//         res.writeHead(200, { 'content-type' : 'text/javascript' })
//         res.write(homeApp)
//         res.end()
//       }
//       //Home CSS
//     else if(url === '/about.html'){
//       res.writeHead(200,{ 'content-type':'text/html' })
//       res.write(homeAbout)
//        res.end()
//     }
//     else{
//         res.writeHead(404,{ 'content-type':'text/html' })
//         res.write('<h1>Page not found</h1>')
//         res.end()
//     }
// })

// server.listen(5000);

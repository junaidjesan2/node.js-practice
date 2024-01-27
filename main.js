const http=require("http")

var server=http.createServer(function(req,res){
    if(req.url=="/"){
        res.writeHead(200,{'Content-type':'text/html'})
        res.write('<h1>This is Home Page</h1>')
        res.end()
    }
    if(req.url=="/contact"){
        res.writeHead(200,{'Content-type':'text/html'})
        res.write('<h1>This is Contact Page</h1>')
        res.end()
    }
})

server.listen(8000)
console.log("Server");
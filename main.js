const http=require("http")

var server=http.createServer(function(req,res){
    res.end("Parsire mmh")
})

server.listen(8000)
console.log("Server connected");
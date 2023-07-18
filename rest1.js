let nbs = require("express")
let server=nbs()

server.get("/student",function(req,res){
    res.send("I recieve the request via get-method")
})
server.post("/student",function(req,res){
    res.send("I recieve the request via post-method")
})
server.delete("/student",function(req,res){
    res.send("I recieve the request via delete-method")
})
server.put("/student",function(req,res){
    res.send("I recieve the request via put-method")
})
server.listen(3000)
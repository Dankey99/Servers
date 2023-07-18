let nbs = require("express")
let server=nbs()

server.use("/java/:name",function(req,res,next){
    if (req.params.name=="dan"){
        next()
    }else{
    res.write("Only dan can access this")
    res.end()
    }
})
server.get("/service",function(req,res){
    res.send("I provide training")
})

server.get("/team",function(req,res){
    res.send("dan , stan , kan")
})
server.get("/java/:name",function(req,res){
    res.write(" java is a programming language")
    res.end()
})
server.listen(3000)
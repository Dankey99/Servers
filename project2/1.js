let nbs = require("express")
let server=nbs()

server.set("view engine","ejs")

server.get("/",function(req,res){
    res.render("homepage.ejs")
    res.end()
})
server.get("/selectRange/:n",function(req,res){
    res.render("range.ejs",{number: req.params.n})
    res.end()
})
server.get("/timestable/:range/:T",function(req,res){
    res.render("timestable.ejs",{T:req.params.T,R:req.params.range})
    res.end()
})
server.listen(3000)
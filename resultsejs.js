let nbs = require("express")
let server=nbs()

server.set("view engine","ejs")

server.get("/Results/Shafeeq",function(req,res){

    res.render("results.ejs" ,{"tname":"Shafeeq","phy":80, "chem":50, "mth":72})
    res.end()
})
server.get("/Results/James",function(req,res){

    res.render("results.ejs" ,{"tname":"James","phy":82, "chem":44, "mth":33})
    res.end()
})
server.get("/Results/Dan",function(req,res){

    res.render("results.ejs" ,{"tname":"Dan","phy":100, "chem":100, "mth":100})
    res.end()
})


server.listen(3000)
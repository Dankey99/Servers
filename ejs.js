let nbs = require("express")
let server=nbs()

server.set("view engine","ejs")

server.get("/trainer/Shafeeq",function(req,res){

    res.render("homepage.ejs" ,{"tname":"Shafeeq","taddress":"London"})
    res.end()
})


server.listen(3000)
let nbs = require("express")

let server=nbs()

function doSomething(request,response){
    response.send("Hello my friends")
}
function manchester(request,response){
    response.send("weather isn't bad")
}

server.get("/nbs",doSomething)
server.get("/qa", manchester)

server.listen(3000)
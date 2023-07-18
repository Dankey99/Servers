let nbs = require("express")

let server=nbs()

function qaFunction(request,response){
    response.send("Hello my friends!")
}
server.get("/nbs",function(request,response){
    response.send("Weather isn't bad!")
})


server.get("/qa1", qaFunction)
server.get("/qa2", qaFunction)

server.listen(3000)
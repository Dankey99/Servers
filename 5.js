let nbs = require("express")
let server=nbs()
let bodyparser=require("body-parser")
server.use(bodyparser.json())
server.use(bodyparser.urlencoded({extended: true}));
server.post("/process",function(req,res){
    let name=req.body.na
    let salary=parseInt(req.body.sal)
    let tax=0
    if(salary<1000){
        tax=0
    } else if(salary>=1000 && salary<2000){
        tax=salary*16/100
    }else if(salary>=2000){
        tax=salary*21/100
    }
    
    res.write("<h1> <center> Salaryslip of: ")
    res.write(name)
    res.write("</center></h1>")
    res.write("<br>Salary:"+salary)
    res.write("<br>Tax:"+tax)

    
    res.end()
})
server.listen(3000)
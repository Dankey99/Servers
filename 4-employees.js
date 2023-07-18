let nbs = require("express")
let server=nbs()

function homePage(req,res){
    res.write("<h1> <center> welcome </center></h1>")
    res.write("<b> List Of Deparmtments</b><br><br>")
    res.write("<A href='http://127.0.0.1:3000/department/101'>Human Resource Deparmtent</a></br>")
    res.write("<A href='http://127.0.0.1:3000/department/102'>IT Department</a></br>")
    res.write ("<A href='http://127.0.0.1:3000/department/103'>sales</a></br>")
}
function employeesList(req,res){
  let departmentName=""
  if (req.params.dept==101){
    departmentName=" Human Resource Department"
  }
  if (req.params.dept==102){
    departmentName=" Infromation Technology Department"
  }
  if (req.params.dept==103){
    departmentName=" Sales Department"
  }
  res.write("<h1><center>")
  res.write(departmentName)
  res.write("</center> </h1>")
}
server.get("/",homePage)
server.get("/department/:dept",employeesList)
server.listen(3000)
let express = require("express")
let server = express()
let MySql=require("mysql")

let db=MySql.createConnection({
        host:"localhost",
        user:"root",
        password:"root",
        database:"nbs2"
});
        db.connect();

        server.get("/employeesOFDepartment/:dept",function(req,res){
            let sql1="select * from employees where department='"+req.params.dept+"'"
            db.query(sql1,function(err,records){
                res.render("employeeslist.ejs",{employees:records})
                res.end()
            })
        })
        server.get("/deleteEmployee/:empno",function(req,res){
            let deleteSQL="delete from employees where empno=" +req.params.empno
            db.query(deleteSQL,function(err,records){
                
                db.query("select * from employees",function(err,records){
                    res.render("employeeslist.ejs",{employees:records})
                    res.end()})
                
            })
        })
    
        server.get("/",function(req,res){
        res.render("homepage.ejs")
        res.end()
        })
        server.get("/allemployeeslist",function(req,res){
            db.query("select * from employees",function(err,records){
                res.render("employeeslist.ejs",{employees:records})
                res.end()
            })
        })
        server.get("/department",function(req,res){
            db.query("select distinct department from employees",function(err,records){
                res.render("departments.ejs",{deptName:records})
                res.end()
            })
        })

        server.listen(3000)



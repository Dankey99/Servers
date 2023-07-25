function Records(){
    let employees=[
        {"name":"James",
        "department":"IT",
         "salary":1000},

        {"name":"Dan",
        "department":"IT",
         "salary":1000},

        {"name":"Stan",
        "department":"IT",
         "salary":1000}
    ]
        function doSomething(rec){
            return rec.name
        }
        function check(rec){
            if(rec.department=="IT"){
                return true
            }else{
                return false
            }
            }
            let name1=employees.map(doSomething)
            let name2=employees.filter(check)
            
            return(
                <>
                {name1}
                <br/>
                {name2.length}
                </>
            )
        }
    


export default Records;
import { useState } from "react";
function Data(){let records=[
    {
        "name":"James",
        "dept":"HR",
        "salary":2000
    }
]
function addEmployee(){
    records.push({
        "name":"Peter",
        "dept":"Janitor",
        "salary":6000
    })
    alert(records.length)
    console.log(records)
}
let [employees,setEmployees]=useState(records)
return(
    <>
    <input type="button" value="New Employee" onClick={addEmployee}/>
    <table>
        <tbody>
        <tr>
            <td>Name</td>
            <td>Department</td>
            <td>Salary</td>
        </tr>
        {
            employees.map((rec)=>
            <tr>
            <td>{rec.name}</td>
            <td>{rec.dept}</td>
            <td>{rec.salary}</td>
        </tr>
            )
        }</tbody>
    </table>
    </>
)
    
}
export default Data;
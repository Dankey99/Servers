function Records2(){
    let employees=[
        {"name":"James",
        "department":"IT",
         "salary":1500},

        {"name":"Dan",
        "department":"IT",
         "salary":5000},

        {"name":"Stan",
        "department":"IT",
         "salary":1000}
    ]
    return(
        <>
        <table border="1">
            {
                employees.map( (record)=>
                                        <tr>
                                            <td>{record.name}</td>
                                            <td>{record.salary}</td>
                                            <td>{record.department}</td>
                                            <td>{record.salary*21/100}</td>
                                        </tr>
                )
            }
        </table>
        </>
    )
}
export default Records2;
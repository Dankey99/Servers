import { useState } from "react";
function DataFromWeb(){
    let[records,setRecords]=useState([])
    
    function getDataFromResponse(data){
        setRecords(data)
    }
    function processResponse(response){
        let jsonPromise= response.json()
        jsonPromise.then(getDataFromResponse)
    }
    function clickingButton(){
        let pid=document.getElementById("t1").value
        let url= "https://jsonplaceholder.typicode.com/posts/"+pid+"/comments"
    let responsePromise = fetch(url)
    responsePromise.then(processResponse)
    }
    function clickingButton2(){
        let pid2=document.getElementById("t2").value
        let url2= "https://jsonplaceholder.typicode.com/posts/"+pid2+"/comments"
        let responsePromise2 = fetch(url2)
        responsePromise2.then(processResponse)
    }
    
   
    return(
        <>
        <h1>Hello Web</h1>
        <input type="text"  id="t1"/>
        <input type="button" id="Go" onClick={clickingButton}></input>
        <table>
            {
                records.map((rec) =>
                <tr>
                    <td>{rec.name}<input type="button" id="t2" onClick={clickingButton2}></input></td>
                    
                    
                </tr>
                )
            }
        </table>






        </>
    )
}
export default DataFromWeb;
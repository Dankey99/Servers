import { useState } from "react";

function Events(){
    let [X,shafeeq]=useState(100)
    let[data,assignData]=useState(21)
    function doSomething(){
        shafeeq(++X)
    }
    function doSomething2(){
        assignData(++data)
    }
    return(
        <>
        <input type="button" value="Click" onClick={doSomething}/>
        <input type="button" value="Click2" onClick={doSomething2}/>
        <h1>{X}</h1>
        <h1>{data}</h1>

        </>

    )
        
    

}
export default Events;
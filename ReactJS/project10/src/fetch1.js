function displayData(records){
    console.log(records)
}
function processResponse(response){
    let p2 = response.json()
    p2.then(displayData)
}
let p = fetch('https://jsonplaceholder.typicode.com/comments')
p.then(processResponse)
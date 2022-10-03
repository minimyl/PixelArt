// Your code here
let table = document.getElementsByTagName("table")[0]
let addRow = document.getElementById("add-row")
let select= document.getElementsByTagName("select")[0]
let result ="teal"
console.log(select)
// let tealColor= document.getElementsByName("teal")
// let orangeColor="orange"

// const rows = document.createElement("tr")

function makeRow(){
  let row = document.createElement("tr")
for (let i=0; i<3; i++){

  const td= document.createElement("td")
  row.appendChild(td)
}
table.appendChild(row)
}


function colorize (event){
  const tdCell = event.target
 tdCell.className=result
    // tdCell.className = "teal"
  }
  //  if else(td.className)
  // else{

  //   tdCell.className=tealColor
 //}
// function colorize (event){
//   const tdCell = event.target
//   if(tdCell.className){
//     tdCell.className = "orange"
//   }
//   // if else(td.className)
//   else{

//     tdCell.className=tealColor
//   }
  // else if( select === "blue")
  // {
  //   tdCell.className= "blue"
  // }



// }

function colorCallBack (event){
  //  result=document.getElementsByTagName("value");
  // result.textContext=event.target.value
  result = event.target.value


}
// colorize(table)
addRow.addEventListener("click", makeRow)
select.addEventListener("change", colorCallBack)
table.addEventListener("click", colorize)
select.addEventListener("change", colorize)

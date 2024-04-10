/*   create a faulty calculator using javascript

This faulty caluculator does following:
1.It takes two numbers as input from the user
2.It performs wrong operations as follows:

+ ---> -
* --> +
- ---> /
/ --> **

Iy performs wrong operations 10% of the times 

*/

let random= Math.random()
let a =prompt("Enter 1st number")
let c =prompt("Enter operations")
let b =prompt("Enter 2nd number")


let obj ={
    "+":"-",
    "*": "+",
    "-":"/",
    "/":"**"

}

if(random >0.1){
    // Perform correct calculations
    alert(`The result is ${eval(`${a} ${c} ${b}`)}`)
}
else{
    // perform wrong calculationc
    c =obj[c]
    alert(`The result is ${eval(`${a} ${c} ${b}`)}`)

}
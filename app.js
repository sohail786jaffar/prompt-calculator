function addnumber(a,b){
    alert( a+b)
}
function subnumber(a,b){
    alert( a-b)
}
function multipynumber(a,b){
    alert( a*b)
}
function dividenumber(a,b){
    alert( a/b)
}

let operation=prompt("select the number corresponding to operation you like to perform \n 1 ---> addition.\n 2 ---> subtraction \n 3 ---> multiplication \n 4 ---> divide");
console.log(operation);
let firstmumber=parseInt(prompt("enter your first number"))
let secondmumber=parseInt(prompt("enter your second number"))
if (operation === "1"){
    addnumber(firstmumber,secondmumber)
}
else if ( operation==="2"){
    subnumber(firstmumber,secondmumber)
}
else if (operation==="3"){
    multipynumber(firstmumber,secondmumber)
}
else{
    dividenumber(firstmumber,secondmumber)
}
let calculation=confirm("do you want to perform calculation again")
calculation ? location.reload()
:alert("let me know if you need any help")
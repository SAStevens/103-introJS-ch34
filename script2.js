// let userName= prompt("Enter your name:");
// let userEmail= prompt("Enter your email:");
// let password= "12345";
// let userAge= "25";
// let geoLocation= "USA";
// let monthlySalary= prompt("Enter your monthly salary");

// document.write(`
// <p>User: ${userName}</p>
// <p>Email: ${userEmail} </p>
// <p>Salary: $${monthlySalary*12} </p>
// `);

// console.log(userName,userEmail,monthlySalary);

//creating functions

//function declaration
// function greeting(){
    //body of the function
    // console.log("Hello");
    //alert("Hello");
    //document.write("Hello");
    // return "Scott";
// }

//global variable
let global;

function sum(a,b){
    //local variable
    global:"affected"
    return a+b;
}

console.log(sum(10,50));
console.log(global);

//function expression

let displayValues=function(){
    console.log("Displaying values...")
}
displayValues();


//arrow function
let traveling = country => "Traveling to ..." + country;

travel = traveling("Italy");
console.log(travel);

// Exercise 2

let total=0;

 function addCart(price){
    total = total + price;
    console.log(total);
    return total;
} 


function calculateTaxes(){
    subtotal=addCart(2);

    let totalTax = subtotal*1.11;

    document.getElementById("receipt").
        innerHTML=
        `<p>Subtotal = ${subtotal}</p>
        <p> Total = ${totalTax}</p>`
}








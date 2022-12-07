console.log("Script file");
var age="100";//initialization and assignation
let userName="Mike";
let taxes="11.5";
const URL="http://www/thisisprivateEndPoint/project";

console.log("age,userName,URL");// displaying the age userName and URL

// add extra notes using the comments
userName = "Edward";//changing the userName value
taxes=12;//changing the taxes value
console.log(userName, URL);//displaying the new userName and URL
//EX1
let job="student";
let geoLocation="Colorado";
let spouse="Kerri";
let children="0";
// console.log("You will be a" + job + "in" geoLocation + "and married to" + spouse + "with" + children + "kids");

document.write(`
<p> You will be a ${job} </p>
<p> in ${geoLocation}, and married to ${spouse}</p>
<p> with ${children} kids</p>
`);
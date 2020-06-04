'use strict';
console.log('This file connected!');




function withMyFunctionName() {
    
var userName = prompt('Please enter your first name.');

var hourNow = prompt('What time is it now?, 0-23');

//variable declaration. spot in memory waiting value to added. 
var greeting;

if(hourNow >= 18 && hourNow < 24){
    greeting = 'good evening, ' + userName + ' !';
} else if (hourNow > 12 && hourNow < 18){
    greeting = 'Good afternoon '+ userName + ' !';
} else if (hourNow >= 0 && hourNow <= 12) {
    greeting = ' Good Morning ' + userName;
} else {
    greeting = ' Hello, how are ya? ';
}
//console.log(userName + ' ' + hourNow + ' ' + greeting);

// will be the link to your javascript file. 
//returns only the greeting from above. 
return greeting;

//or to add styling to return values
//return '<h1 style="color:yellow; font-size: 50px; background-color:blue;">' + greeting + '</h1>';



//This will write to the page where ever your script tag is located. 
//document.write('<h1 style="color:yellow; font-size: 50px; background-color:blue;">' + greeting + '</h1>');

}


//var netPriceOfShoes = 399; // interger
//var kroner = " kr"      // String
//var vat = 25;
//var calculatedVat = (1 + vat / 100);
//var grossPriceOfShoes = netPriceOfShoes * calculatedVat;
//var amount = 10;

//alert("special offer " + priceOfShoes + kroner);
//alert("You bought a pair of shoes for the price of: " + grossPriceOfShoes + " DKK " +" Buy " + amount + " for the price: " + grossPriceOfShoes * amount + " DKK")

//document.getElementById("result").innerHTML = grossPriceOfShoes;

//function calc () {
//    document.getElementById("result").innerHTML = grossPriceOfShoes;
//};

/*document.addEventListener("DOMContentLoaded", function(event) {
    document.getElementById("result").innerHTML = grossPriceOfShoes; //do work
});*/


//      ---Get input from user---

/*var f = prompt("Enter degrees Fahrenheit: ", 32);

if (isNaN(f))
    alert("Degrees Fahrenheit must be a number");
else {

    var c = 5 / 9 * (f - 32);

    alert(c + " degrees celsius");
}*/


//      ---discount---

/*var price = 22;

var age = prompt("Enter your age");

if(isNaN(age)){
    alert("Age must be a number!");
}
else if(age <= 4) {
    var discountamount = 0;
    alert(price * discountamount + " DKK");
}
else if (age <= 15) {
    var discountamount = 0.5;
    alert(price * discountamount + " DKK");
}
else if (age <= 59) {
    /*var student = prompt("are you a student? yes or no:")
    if (student == "yes" ) {
        var discount = 0.75;
        alert(price * discount + " DKK");
    }
    else if(student == "no" ) {
        var discountamount = 1;
        alert(price * discountamount + " DKK");
    }*/
    /* - var student = confirm("Are you a student?");
    if (student == true) {
        var discount = 0.75;
        alert(price * discount + " DKK");
    }
    else {
        var discountamount = 1;
        alert(price * discountamount + " DKK");
    }
}
else if (age >= 60) {
    var discountamount = 0.5;
    alert(price * discountamount + " DKK");
}*/


// --- array and loops ---

/*myArray = [];
myArray.push("Peter");
myArray.push("Paul");
myArray.push("Mary");
myArray.push("John");
myArray.push("George");

document.write("myArray holds " + myArray.length + " elements<br/>");

// using a loop to display all elements in myArray
for (var i = 0; i < myArray.length; i++)
{
    document.write("element no " + i + " = " + myArray[i] + "<br/>");
}

// now we sort myArray and display the elements again
document.write("<br/>We now sort myArray and display the elements<br/>");
myArray.sort();
// now we use another type of loop to display the elements in myArray
var counter = 0;
while (counter < myArray.length)
{
    document.write("element no " + counter + " = " + myArray[counter] + "<br/>");
    counter++;
}

// now we use another type of loop to display the elements in myArray
document.write("<br/><br/>We now display myArray using a for-in loop<br/>");
var x;
for (x in myArray)
{
    document.write("element no " + x + " = " + myArray[x] + "<br/>");
}
*/


// --- Array, loops and functions example ---

// definer funktionerne

/*function sortNumber(a,b)

{
    return a - b;
}

function findMax(mitArray)
{
    var max = mitArray[0];
    for(var i = 0; i < mitArray.length; i++) {
        if(mitArray[i] > max ) {
            max = mitArray[i];
        }
    }
    return max;
}

function findMin(mitArray)
{
    var min = mitArray[0];
    for(var i = 0; i < mitArray.length; i++) {
        if(mitArray[i] < min ) {
            min = mitArray[i];
        }
    }
    return min;
}

function findSum(mitArray)
{
    var sum = 0;
    for (var i = 0; i < mitArray.length; i++)
    {
        sum = sum + mitArray[i];
    }
    return sum;
}

function findAverage(mitArray)
{
    return (findSum(mitArray) / mitArray.length);
}

// Functions end

//
var mitArray = [];
// skab et Array med 15 tilfældige tal i hver sin række.
for (var i = 0; i < 15; i++)
{
    mitArray.push(Math.floor(Math.random()*100)+1);
}
// vis Array
for(var i = 0; i < mitArray.length; i++)
{
    document.write(mitArray[i] + " ");
}
// sorter array og udskriv det igen.

// sortering.
mitArray.sort(sortNumber);
document.write ("</br>");


// Udskriv det sorterede.
var counter = 0;
while(counter < mitArray.length)
{
    document.write((mitArray[counter] + " "));
    counter++;
}

document.write("<p>" + findMax(mitArray) + " max tallet" +"</p>");
document.write("<p>" + findMin(mitArray) + " min tallet" + "</p>");
document.write("<p>" + findSum(mitArray) + " summen af tallene" + "</p>");
document.write("<p>" + findAverage(mitArray) + " Gennemsnittet" + "</p>");


// --- Functions ---

// definer funktionen

/*function convertFtoC(degF) {
    var degC = 5 / 9 * (degF - 32);
    return degC;
}


// Kald funktionen

var f = prompt("Enter degrees Fahrenheit: ", 32);

var c = convertFtoC(f);

alert(c + " degrees celsius");*/


// --- Object Orientated Programming ---

/*
var navn = "Jens Jensen";

var fornavn = navn.substr(0 , navn.indexOf(" "))

document.write(fornavn);
*/


// Date example
/*
var dateNow = new Date();
document.write("Today is " + dateNow.toDateString() + "<br/>");

var days = parseInt(prompt("How many days will you be gone?"));

var returnDate = new Date();
returnDate.setDate(dateNow.getDate() + days);

document.write("Return date is " + returnDate.toDateString());
*/

// fahrenheit to celsius example

/*
var f = prompt("Enter degrees Fahrenheit: ", 32);

while (isNaN(f))
{
    f = prompt("Enter degrees Fahrenheit: ", 32);
}

var c = 5 / 9 * (f - 32);

// using Math.round
//c = Math.round(c);
alert(c.toFixed(1) + " degrees celsius");
*/

// exercise 90 days from now

/*
var dateNow = new Date();

document.write("Today is " + dateNow.toDateString() + "<br/>");

var days = 90;

var returnDate = new Date();
returnDate.setDate(dateNow.getDate() + days);

document.write("Return date is " + returnDate.toDateString());
*/

// exercise day of birth NOT DONE!

/*
var year = parseInt(prompt("What year where you born?"));

var month = parseInt(prompt("Which month?"));

var day = parseInt(prompt("Which day"));

var returndate = new Date(year, month - 1 , day);

document.write(returndate.toDateString());
*/

// --- DOM Document Object Model ---


// **************** PLAYING WITH ATTRIBUTES *********************

/*
var prevalue = document.getElementById("textbox1");

var htext = document.getElementById("headline");

prevalue.setAttribute("value" , htext.innerHTML);
*/



// ******* Slideshow tryout *******

var Image = new Array("img/1.jpg", "img/2.jpg", "img/3.jpg");

var Image_Number = 0;

var Image_Length = Image.length - 1;

function change_image(num){

    Image_Number = Image_Number + num;

    if (Image_Number > Image_Length){

        Image_Number = 0;

    }

    if (Image_Number < 0){

        Image_Number = Image_Length;

    }

    //makes the slideshow fade instead of just a hard "cut"
    $("#slideimg").fadeOut('fast', function() {

            $(this).attr('src', Image[Image_Number]);

        }
    ).fadeIn('fast');

}

//function that makes the slideshow start when the function is activated.
function auto(){

    setInterval("change_image(+1)", 4000);

}

//Activates the function auto, when the page loads.
onload(auto());



// ******* Cookies tryout *******

//change styling of header/menubar and when that works put it into to a cookie that remembers the unique styling for some time.
//Save changes in a cookie and save that cookie for a couple of minutes. So if page is reloaded within the saved time the chosen
//color should still be shown.

function colorChanger() {
    var headerdiv = document.getElementById("nav");
    var colorvalue = document.getElementById("colorselector").selectedIndex;
    var personalColor = document.getElementsByTagName("option")[colorvalue].value;
    headerdiv.style.backgroundColor = personalColor;
    var expire = new Date();
    expire.setMinutes(expire.getMinutes() + 10);
    document.cookie = "personalcolor=" + personalColor + ";" + "expires=" + expire.toUTCString() + ";" + "personalcolor=" + colorvalue + ";" ;
    //alert(document.cookie);
}

function checkCookie() {
        var cookieValue = document.cookie;
        var splitCookieInfo = cookieValue.split("=", 2);
        var headerdiv = document.getElementById("nav");
        var newColorValue = splitCookieInfo[1];
        //headerdiv.style.backgroundColor = newColorValue;
        document.write(newColorValue);

}

//styling changed by using html tag <option> and <button> successful.
//cookie created, but issues with reading it and inserting it as the backgroundcolor.


// var x=10,
// 	y=50,
// 	z=100,
// 	firstName="ahmed",
// 	lastName="hussein";
	
// document.getElementById('test').innerHTML= lastName

// if (x+y===610) {
// 		console.log("good");
// 	}else{console.log("bad");}
// var price=500,
// 	discound=50,
// 	discound1=100,
// 	discound2=200;


// 
// document.getElementById("product1").innerHTML=price-discound
// document.getElementById("product2").innerHTML=price-discound1
// document.getElementById("product3").innerHTML=price-discound2

// var price=500,
// var	withdiscound=false;
//  if(withdiscound===true) {var price=400;} 
//  	else {var price=500;}

// var websites={firstName:"ahmed",lastName:"hussein"};

// document.getElementById("test").innerHTML=websites.lastName;
// (function checkage() {
//      var age=prompt("checkage");

// 	if (age=18) { alert("gada3");

// 	}
// 	 else if (age>18)
// 	 	{alert("wmalo");}
// 	 else if(age<18)
// 	 	{alert("roo7 lomak");}
// }())

//     var database=[ {userName:"ahmed",
// 					passWord:"ahmed800"}]
// 	var	newfeeds=[
// 		{userName:"ahmed",
// 		timeline:"hey there"			},
// 		{userName:"ahmed",
// 		timeline:"hello"			},
// 		{userName:"ahmed",
// 		timeline:"hi every one"			},]
		
// 	var userNamePrompt= prompt("enter your username");
// 	var passwordPrompt= prompt("enter your password");

// 	 function signIn(user,pass) {
// 	 if (user===database[0].userName && pass===database[0].passWord) {
// 	 	console.log(newfeeds);

// 	 } 
// 	 else {alert("check your data well!")

// 	 }
// }
	
// 	signIn(userNamePrompt,passwordPrompt);

// var todos=["play",
// 			"study",
// 			"work",
// 			"eat"
// ];
// var todosimp=["pray",
// 			"enjoy",
// 			"go path",
// 			"eat healthy"
// ];

// function logtodos(todo,i)
// {console.log(todo,i)};

// todos.forEach(logtodos);

// todosimp.forEach(logtodos);

var button = document.getElementById("enter");
var input= document.getElementById("userinput");
var ul = document.querySelector("ul");

function inputLength(){return input.value.length}

function createListElement(){
		var li= document.createElement("li");
		li.appendChild (document.createTextNode(input.value));
		ul.appendChild(li);
		input.value="";}

function addListAfterClick(){
		if (inputLength()>0) 
		createListElement()}
function addListAfterKeypress(event){
		if (inputLength()>0 && event.keyCode===13) 
		createListElement()}

button.addEventListener("click",addListAfterClick);


input.addEventListener("keypress",addListAfterKeypress);




// function setGradient() {
// 	body.style.background = 
// 	"linear-gradient(to right, " 
// 	+ color1.value 
// 	+ ", " 
// 	+ color2.value 
// 	+ ")";

// 	css.textContent = body.style.background + ";";
// }

// color1.addEventListener("input", setGradient);

// color2.addEventListener("input", setGradient);


var css=document.querySelector("h3");
var color1= document.querySelector(".color1");
var color2=document.querySelector(".color2");
var body =document.getElementById("gradient");

function setGradient(){
		body.style.background =
		"linear-gradient (to right, "
		+color1.value
		+", "
		+ color2.value
		+")";}
css.textContent = body.style.background + ";";
color1.addEventListener("input", setGradient );
color2.addEventListener("input", setGradient );



// var css = document.querySelector("h3");
// var color1 = document.querySelector(".color1");
// var color2 = document.querySelector(".color2");
// var body = document.getElementById("gradient");

// function setGradient() {
// 	body.style.background = 
// 	"linear-gradient(to right, " 
// 	+ color1.value 
// 	+ ", " 
// 	+ color2.value 
// 	+ ")";}

// 	css.textContent = body.style.background + ";";


// color1.addEventListener("input", setGradient);

// color2.addEventListener("input", setGradient);












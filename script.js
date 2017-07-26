
//Variables
// 1. Create a variable "firstName" and "lastName", assign it to a string that is stores your first and last name.
// 2. Create a variable "age" and assign it to your age

let firstName = 'Francis';
let lastName = 'Agbodji';
let Age = '31';



//String Concatenation
// 1. Create a variable called "fullName" that stores your "lastName" and "firstName"
// 2. console.log() your fullName

let fullName = firstName + " " + lastName;
console.log(fullName);



//Expressions & Operators
// 1. create two variables called "num1", "num2", and "numberResult"
// 2. Run the following operators "+", "-", "*", "%", "/",and store them in numberResult

let num1 = '10';
let num2 = '20';
let numberResult = num1 + num2;



//Linking JavaScript to HTML File
// Write the HTML tag to link the file "script.js" that's located in a folder called JS
// User JavaScript comments to comment this tag out or else the code below this will not work

////////////// <script type="text/javascript" src="script.js"></script>



//Operators, Boolean Logic, and Conditionals
//Write an if else statement that prints out "It's true" if two varibles are true, or else print out out "It's False"
//Write an if else statement that console logs "It's more" if 5 is more than 3, else it console logs "It's less!"

if (num1 === num2) {
	console.log("It's true");
} else {
	console.log("It's false");
}


if (5 > 3) {
	console.log("It's more");
} else {
	console.log("It's less");
}





//Arrays
//Create an array called menu that stores the menu for your website that includes "Home", "Portfolio", "About", "Contact"

let menu = ["Home", "Portfolio", "About", "Contact"];




//Loops
//Write a for loop that loops through your menu array that you created above and print it out via the console log

for (i=0; i<menu.length; i++) {
	console.log(menu[i]);
}






//Switch Statements
// 1. Write a switch statement called mood with a default state of hungry
// 2. create a case called happy and console log the messeage "I'm feeling great!"
// 3. create a case called sad and console log the messeage "I'm feeling sad!"
// 4. create a case called tired and console log the messeage "I'm feeling sleepy!"

switch (mood) {
	case 'happy':
	console.log("I'm feeling great!");
		break;
	case 'sad':
	console.log("I'm feeling sad!");
		break;
	case 'tired':
	console.log("I'm feeling sleepy!");
		break;
	default:
	console.log('hungry');
}






//Functions
//Create a function that takes two parameters which are your first and last name and concatenates them together
//Create a function that takes two parameters which are numbers and returns them added/concatenated together

function (fitstName, lastName) {
	console.log(firstName + " " + lastName);
}

function (num1, num2) {
	console.log(num1 + num2);
}






//Objects
//Write an Object called person with the following properties: fullName, age, gender, location  
//Create a Method that turns your fullname to all CAPS!!!

let person = {
	fullName: "Francis",
	age: "31",
	gender: "M",
	location: "NYC"
	allCaps = function () {
		this.fullName.style.textTransform = "uppercase";
	}
}





//DOM
//How would you describe the DOM?
//How do you manipulate the DOM?

// the DOM is the Document Object Model and in essence is the entire element branch of a web page.
// you manipulate the DOM using JS and jQuery




//Git and Github
//1. Create a repo call JS Review
//2. Push your answers up to your repo
//3. Share the link in Slack


//Bonus - Fizz Buzz
// Write some code that, depending on the value of x, assigns one of several values to result:

// If x is evenly divisible by both 3 and 5 (for example, 15 or 30), set result to "fizzbuzz".
// Otherwise if x is evenly divisible by 3 (for example, 3, 6, or 9), set result to "fizz".
// Otherwise if x is evenly divisible by 5 (for example, 5 or 10), set result to "buzz".
// If x is not evenly divisible by either 3 or 5 (for example, 7), set result to x.
// Don't remember how to determine if something divides evenly? Review the modulus (%) operator.


function getFizzBuzz (x) {
	if (x % 3 === 0 || x % 5 === 0) {
		console.log('fizzbuzz')
	} else if (x % 3 === 0) {
		console.log('fizz')
	} else if (x % 5 === 0) {
		console.log('buzz')
	} else {
		console.log(x)
	}
}






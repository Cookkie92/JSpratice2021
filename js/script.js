
//Module Assignment 1

//Question 1

var $num = 7;
var $boo = false;
var $str = "Very nice";

//console.log($num)

//Question 2

var name = "Kristian";
var lastName = "Koloy";
var fullName = (name + lastName)

//console.log(fullName)

//Question 3

var $animal = "frog";
var $string = "The type of frog is"
var typeOfAnimal = typeof $animal;

//console.log($string+typeOfAnimal)

//Question 4

var orderHasShipped = true;
if (orderHasShipped === true) {
    //console.log("The order shipped");
}
else {
    //console.log("The order did not ship");
}

//Question 5

for (var i = 7; i <= 13; i++) {
    //console.log(i);
}














//Module Assignment 2




//question 1

var pets = [
    {
        type: "cat",
        age: 5.5,
    },
    {
        type: "dog",
        age: 3.8,
    },
    {
        type: "parrot",
        age: 4.0,
    },
];

for (var i = 0; i < pets.length; i++) {
    if (pets[i].age >= 4) {
        //console.log(pets[i].type)
    }
}





//Question 2

//declare function
function boolValue(argue) {
    if (argue === true || argue === false) {
        console.log(argue)
    }
    else if (argue === false) {
        console.log(argue)
    }
    else {
        console.log("Please pass a boolean value in")
    }

}
//call function
boolValue(boolValue);







//Question 3

var headline = document.querySelector("h2");
var button = document.querySelector("button");

function changeHeadline() {
    headline.innerHTML = "Updated Subheading";
    headline.style.color = "blue";
}

button.onclick = changeHeadline;



//Javascript CA1


//Question 1


var outOfStock = true;

if (outOfStock === true) {
    //console.log("Out of stock");
}
else {
    //console.log("In stock");
}


//Question 2


for (var i = 15; i <= 25; i++) {
    if (i === 17 || i === 20) {
        console.log(i);
    }
}






//Question 3

var games = [
    {
        title: "Grand Theft Auto",
        rating: 4.48,
    },
    {
        title: "Portal 2",
        rating: 3.5,
    },
    {
        title: "Team Fortress",
        rating: null,
    },
    {
        title: "The Witcher",
        rating: 3.0,
    },
    {
        title: "The Elder Scrolls",
        rating: 2.9,
    },
];



//Javascript CA1


//Question 1


var outOfStock = true;

if(outOfStock === true){
    console.log("Out of stock");
}
else{
    console.log("In stock");
}


//Question 2


for (var i = 15; i <=25; i++){
    if(i === 17 || i === 20 ){ 
        console.log(i);   
    }
}






//Question 3



var games = [
	{
		title: "Grand Theft Auto",
		rating: 4.48,
	},
	{
		title: "Portal 2",
		rating: 3.5,
	},
	{
		title: "Team Fortress",
		rating: null,
	},
	{
		title: "The Witcher",
		rating: 3.0,
	},
	{
		title: "The Elder Scrolls",
		rating: 2.9,
	},
];
console.log(games);

// selecting class of the UL
var gamesContainer = document.querySelector(".games");


//making the loop
for(var i = 0; i < games.length; i++){
	//creating variable for array with loop
	var item = games[i];
	// creating if statement that pulls out games that are below 3.5 and also excluding games with null as value
    if(games[i].rating <3.5 && games[i].rating !==null){
        console.log(games[i].title,":",games[i].rating)
		//creating li items inside ul and adding game title and game rating of the games pulled from loop
		gamesContainer.innerHTML = gamesContainer.innerHTML + "<li>" + item.title + ":" + item.rating + "</li>";
		
    }
	
}
//failed codes



//var filtered = games.filter(function (el){
	//return el != null;
//});


//function removeNull(games){
	//return games.filter(x => x !== null);
//}
//removeNull(games);


//var gamesContainer = document.querySelector("#game");
//gamesContainer.innerhtml = games;
//console.log("gamesContainer", gamesContainer.innerHTML);





//Question 4
//declaring the argument, (checkType)

function whatIDontLike (checkType){
	if(typeof checkType === "string"){
	console.log("i dont like"+ " " + checkType);
}
	else{
	console.log("Please send in a string")
}

}
whatIDontLike("hotdogs");





//failed codes
//if(horses === String){
//	console.log( "I dont like" + horses)
//}
//else {
//	console.log("Please send in a string")
//}






//Question 5




function convertNum (oneArgue, twoArgue){

	oneArgue = Number(oneArgue);
	twoArgue = Number(twoArgue);

    if(isNaN(oneArgue) || isNaN(twoArgue)){
        return document.getElementById("subtraction").innerHTML = "Invalid argument(s)";
    }

    return document.getElementById("subtraction").innerHTML = oneArgue - twoArgue;
	 
}

convertNum("8", "4");



//DRITT OPPGAVA

//idontknow shiiit
//function convertNum (oneArgue, twoArgue){
//	var convertNu = Number(oneArgue, twoArgue);
//	if(typeof oneArgue || typeof twoArgue === number){
//		console.log(twoArgue - oneArgue);
//	}
//		else{
//		console.log("invalid argument(s)");
//	}
	
//}





//failed code
//var bothNum = oneArgue, twoArgue;
	//var numberBothNum = number(bothNum);




//Question 6

var updatePage = document.querySelector(".page");
var updateTitle = document.querySelector("title");
var bodyChange = document.querySelector("body");
var headline = document.querySelector("h1");
var ulStyle = document.querySelector("ul");

function pageUpdate(){
	updateTitle = document.title;
	document.title = "Updated title";
	document.body.style.background = "#FFFF00";
	headline.style.color = "green";
	headline.style.fontFamily = "impact";
	headline.innerHTML = "<a href=\"#\">" + headline.innerHTML + "</a>";
	ulStyle.style.listStyle = "none";
	ulStyle.style.padding ="0";
}

console.log(headline)



updatePage.onclick = pageUpdate;



//Failed code
//var a = document.createElement('a');
//	var link = document.createTextNode("this is link");
//	a.appendChild(link);
//	a.href ="";
//	document.h1.appendChild(a);






//Question 7

var bringPrice = document.querySelector(".price");

var toys = [
	{
		name: "Lego",
		price: 15.6,
	},
	{
		name: "Master of the Universe",
		price: "28.3",
	},
	{
		name: "Barbie",
		price: null,
	},
	{
		name: "Mr Potato Head",
		price: 89.99,
	},
];
function addTotal() {
	var sum = 0;
	for(var i = 0; i < toys.length; i++){
	sum += Number (toys[i].price);
}
document.getElementById("total").innerHTML = sum;
return sum;
}



bringPrice.onclick = addTotal;


//Javscript MA1


const cats = [
    {
        name: "Blob",
        age: 10
    },
    {
        name: "Harold",
    },
    {
        name: "Blurt",
        age: 21
    }
];

// var hello = "hello"

// //Question 1

const cat = {
    complain: function() {
        console.log("meow");
    }
        
    
}
cat.complain();

// //Question 2

const heading = document.querySelector("h3");

heading.innerHTML = "Updated Heading";

// console.log(heading)

//Question 3

heading.style.fontSize = "2em";

//Question 4

heading.className = "subheading";

//Question 5

const paragraphs = document.querySelectorAll("p");

for(let i = 0; i < paragraphs.length; i++){
    //console.dir(paragraphs[i].innerHTML);

    paragraphs[i].style.color = "red";
}


// //Question 6

const resultsContainer = document.querySelector(".results");

resultsContainer.innerHTML = `
    <p>New paragraph</p>
`;
resultsContainer.style.background = "yellow";

//console.log(resultsContainer);

// //Question 7

function findCats (list){
    for(let i = 0; i < list.length; i++){
        // console.log(list[i].name);
    }
}

findCats(cats);

//Question 8


function createCats(cats){
    
    let kittens = "";

    for(let i = 0; i < cats.length; i++){

        let age = "Age unknown";

        if(cats[i].age){
            age = cats[i].age;
        }

        kittens +=`<div>
                    <h5>${cats[i].name}</h5>
                    <p>${age}</p>
                </div>
    `;
    }
    const finalHtml =  kittens

    return finalHtml;
}
const newHtml = createCats(cats);

console.log(newHtml);

const container = document.querySelector(".cat-container");

container.innerHTML = newHtml;

// this is wrong, rewrite code tomorrow

// const container = document.querySelector(".cat-container");

// console.log();

// let html = "";

// function createCats(){
//     for(let i = 0; i < cats.length; i++){

//         let age = "Age unknown";

//         if(cats[i].age){
//             age = cats[i].age;
//         }
//         html += `<div>
//                     <h5>${cats[i].name}</h5>
//                     <p>${age}</p>
        
//                 </div>
//         `;
//     }
//     container.innerHTML = html;
//     console.log(html);
// }



// createCats();






// function createCats(){
//     let html =""
//     for(let i = 0; i < cats.length; i++){
//         let ageNot = "Uknown age";
//         if (cats[i].age) {
//             catsNot = cats[i].age;

//         }
//         html += `<div>
//             <h5>${cats[i].name}</h5>
//             <p>Age: ${cats[i].age}</p>
//         </div>
//         `;
//     }
//     return html;
// }
// createCats();


 // kittens = kittens + "<h5>" + cats[i].name + cats[i].age +  "</h5>";
        // console.log(kittens);


















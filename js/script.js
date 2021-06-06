
//Module Assignment 1

//Question 1

var $num = 7;
var $boo = false;
var $str ="Very nice";

//console.log($num)

//Question 2

var name = "Kristian";
var lastName ="Koloy";
var fullName = (name+lastName)

//console.log(fullName)

//Question 3

var $animal ="frog";
var $string ="The type of frog is"
var typeOfAnimal = typeof $animal;

//console.log($string+typeOfAnimal)

//Question 4

var orderHasShipped = true;
if (orderHasShipped === true) {
    //console.log("The order shipped");
}
else{
    //console.log("The order did not ship");
}

//Question 5

for (var i = 7; i <=13; i++){
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
        type:"dog",
        age: 3.8,
    },
    {
        type:"parrot",
        age:4.0,
    },
];

for(var i = 0; i < pets.length; i++){
    if(pets[i].age >= 4) {
        //console.log(pets[i].type)
    }
}





//Question 2

//declare function
function boolValue(argue) {
    if(argue === true) {
        //console.log(argue)
    }
    else if(argue === false){
        //console.log(argue)
    }
     else{
        //console.log("Please pass a boolean value in")
    }

}
//call function
//boolValue();







//Question 3

var headline = document.querySelector("h2");
var button = document.querySelector("button");

function changeHeadline (){
    headline.innerHTML = "Updated Subheading";
    headline.style.color = "blue";
}

button.onclick = changeHeadline;












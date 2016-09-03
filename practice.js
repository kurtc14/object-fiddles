//Once you complete a problem, open up Chrome and check the answer in the console.


//Create an object called me. Give it a key of name with the value being your name, and another key of age with the value being your age. Then alert your name using dot notation.

var me = {};
me.name = "Kurt";
me.age = 26;
alert(me.name + " is " + me.age);




//NEXT PROBLEM




//Make a 'favoriteThings' object that contains the following keys: band, food, person, book, movie, holiday. Have the values to those keys be your favorite thing in that category.

var favoriteThings = {
    band : "Yellowcard",
    food : "Chicken Alfredo",
    person : "My Wife",
    book : "Harry Potter",
    movie : "Coach Carter",
    holiday : "Christmas"
};



//After you've made your object, add another key named 'car' with the value being your favorite car and then another key named 'brand' with the value being your favorite brand.

var favoriteThingsAdd = {
    car : "Mustang",
    brand : "Walmart"
};
 Object.assign(favoriteThings, favoriteThingsAdd);

//Now change the food key in your favoriteThings object to be 'Lettuce' and change the book key in your favoriteThings object to be '50 Shades of Gray'.

var favoriteThingsAdd = {
    food : "Lettuce",
    book : '50 Shades of Gray'
};
Object.assign(favoriteThings, favoriteThingsAdd);



//NEXT PROBLEM



/*Create an empty Object called backPack. Now, create a variable called 'item'
and set it equal to the string 'firstPocket'. Using bracket notation,
add a 'firstPocket' key (or property) to backPack, using 'item'.
Set the value of that key to 'chapstick'.

Using dot notation, add another key (or property) to your backPack object
that is named color, with the value being the color of your backpack. */

var backPack = {};
var item = "firstPocket";
backPack[item] = 'chapstick';
backPack.color = 'brown';
//After you do the above, alert your entire backPack object.

alert(backPack);

/*You probably noticed that it just alerted [object Object].
Alerting to see the data in your Object doesn't work so well.
Instead, console.log your whole backPack object and then check out the console. */

console.log(backPack);




//NEXT PROBLEM




//Create an 'alsoMe' object with the following properties name, age, height, gender, married, eyeColor, hairColor. Fill those properties in with the appropriate values.

var alsoMe = {
    name:'Kurt',
    age:26,
    height:'5 foot 9 inches',
    gender:'Male',
    married:'Happily',
    eyeColor:'Brown',
    hairColor:'Brown'

};

//Now, loop through your object and alert every value. *Tyler --> 24 --> 6'0 --> Male, etc etc

Object.keys(alsoMe).forEach(function (key) {
    alert(key + " is " + alsoMe[key]);
});


//NEXT PROBLEM




//Create an Object called 'album' with 5 keys named different song titles that you make up, with the values being the length of each song.

var album = {
    firstSong:'3:30',
    secondSong:'2:24',
    thirdSong:'3:33',
    fourthSong:'4:44',
    fifthSong:'10:10'
};
//Now, loop through your album object alerting every song title individually.

Object.keys(album).forEach(function (key) {
    alert(key + " length is " + album[key]);
}
);



//NEXT PROBLEM




//Create an object called states that has 5 US states as properties with the values being their population (doesn't have to be accurate).

var states = {
    Utah:100000,
    Colorado:20000,
    Arizona:300000,
    Nevada:4000,
    Idaho:50000
};
//Now, loop through your states object and if the states population is greater than 30K, alert that state.

 Object.keys(states).forEach(function (key) {
     if (states[key] > 30000) {
         alert(key + " has more than 30k people, in fact they have " + states[key]);
     }
 }
);




//NEXT PROBLEM




var user1 = {
    name: 'Tyler McGinnis',
    email: null,
    pwHash: 'U+Ldlngx2BYQk',
    birthday: undefined,
    username: 'tylermcginnis33',
    age: 0
};
/*Above you're given a user object. Loop through the user object checking to make sure
that each value is truthy. If it's not truthy, remove it from the object. */

Object.keys(user1).forEach(function (key) {
    if (Boolean(user1[key])=== false ) {
        delete user1[key];
    }
}
);
//Once you get your truthy Object, Change the remaining values in the object to be specific to you (name: 'your name', username: 'your username'), rather than my information.

var myUser1 = {
    name: 'Kurt',
    pwHash: 'password',
    username: 'kurtuser'
};
Object.assign(user1, myUser1);



//NEXT PROBLEM




var user2 = {
        name: 'Tyler McGinnis',
        age: 24,
        pwHash: 'U+Ldlngx2BYQk',
        email: 'tylermcginnis33@gmail.com',
        birthday: '05/02/1990',
        username: 'tylermcginnis33',
        sayName: function(){
            alert('Email is : ' + this.email);
        }
};
//Let's say I, the user, decided to change my name and email address to the following
// name -> 'Tyler S. McGinnis', email -> 'tyler.mcginnis@devmounta.in'. Make that change.

 var user2change = {
     name:'Tyler S. McGinnis',
     email:'tyler.mcginnis@devmounta.in'
 };
 Object.assign(user2, user2change);


//Now call the sayName method that's on the user object which will alert the users email

user2.sayName();




//NEXT PROBLEM




//Create an empty object called methodCollection.

var methodCollection = {};

/*Now add two methods (functions that are properties on objects) to your methodCollection
object. One called 'alertHello' which alerts 'hello' and another method called logHello
 which logs 'hello' to the console. */

var methodCollectionAdd = {
    alertHello: function(){
        alert('hello');
    },
    logHello: function(){
        console.log('hello');
    }

};
Object.assign(methodCollection, methodCollectionAdd);

//Now call your alertHello and logHello methods.

 methodCollection.alertHello();
 methodCollection.logHello();



//NEXT PROBLEM



// Create a function called makePerson which takes in name, birthday, ssn as its
// parameters and returns a new object with all of the information that you passed in.

var makePerson = function(arg1, arg2, arg3) {
    var objPerson = {
        name:arg1,
        birthday:arg2,
        ssn:arg3
    };
    return objPerson;
};



//NEXT PROBLEM



// Create a function called makeCard which takes in cardNumber, expirationDate, and securityCode to make a Credit Card object and returns that object so that whenever you invoke makeCard, you get a brand new credit card.

var makeCard = function(arg1, arg2, arg3) {
    var newCreditCard = {
    cardNumber:arg1,
    expirationDate:arg2,
    securityCode:arg3
};
return newCreditCard;
};


//NEXT PROBLEM



/* As of this point you should have a makePerson and a makeCard function which returns you either a person or a credit card object.
   Now, create a bindCard function that takes in a person object as its first parameter and a creditcard object as its second parameter.
   Have bindCard merge the two parameters together into a new object which contains all the properties from the person as well as the creditcard. While Object.assign would give you the answer, specRunner requires an answer without using it.
*/

var bindCard = function(personObject, creditcardObject) {
    bindObject = {};

    for (var personP in personObject) {bindObject[personP] = personObject[personP];}
  for (var ccP in creditcardObject) {bindObject[ccP] = creditcardObject[ccP];}





    return bindObject;

};

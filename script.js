
// Write a constructor for the class Movie, which takes a String representing the title of the movie, 
//a String representing the studio, and a String representing the rating as its arguments, and sets the respective class properties to these values.
class Movie {
   constructor(Title, studio,rating) {

    this.Title = Title;
    this.studio = studio;

    this.rating = rating;

   }
}
var a = new Movie("Vikram","RajKamal Film Corporation","PG-13")

console.log(a.Title);
console.log(a.studio);
console.log(a.rating);

// b) The constructor for the class Movie will set the class property rating to
// "PG" as default when no rating is provided.

class Movie {
constructor(title, studio,rating){
   this.title = title;
   this.studio = studio;
   if(this.rating == undefined) {
      this.rating = "PG";

   } else{
      this.rating = rating;
   }
}

       printmovies(){
   return this.title;
}
printmovies(){
   return this.studio;
}
printmovies(){
   return this.rating;
}
}

var Kollywood = new Movie("Vikram","RajKamal Film Corporation")

console.log(Kollywood.title);
console.log(Kollywood.studio);
console.log(Kollywood.rating);

// // //c) Write a method getPG, which takes an array of base type Movie as its argument,
// // //and returns a new array of only those movies in the input array with a rating of "PG". You may assume the input array is full of Movie instances. The returned array need not be full.

class Movie {
  constructor(title, studio, rating){
    this.title = title;
    this.studio = studio;
    if(rating == undefined) {
      this.rating = "PG";
    } else {
      this.rating = rating;
    }
  }

  getPG(array) {
    var pgMovies = [];
    for (var i = 0; i < array.length; i++) {
      if (array[i].rating === "PG") {
        pgMovies.push(array[i]);
      }
    }
    return pgMovies;
  }
}
var res1 = new Movie("Vikram", "RajKamal Film Corporation","PG13");
var res2 = new Movie("Varisu", "sun pictures");
var res3 = new Movie("Maanaadu", "V creations","PG14");
var res4 = new Movie("Justice League","DC");
var arr = [res1, res2, res3,res4];
console.log(res1.getPG(arr));

// ---------------------------------------------------------------------------

   class Movie {
constructor(title, studio,rating = "PG"){
   this.title = title;
   this.studio = studio;
   this.rating = rating;
}
}

   Movie = new Movie("casino Royale","Eon Productions","PG-13");

   console.log(Movie.title);
      console.log(Movie.studio);
  console.log(Movie.rating);

//   //================================================================


// Convert the UML diagram to Typescript class. - use number for double

class Circle {
   constructor(radius,color) {
      this.radius = radius;
      this.color = color;
   }
   get radiusCircle() { 
      return this.radius;
    }
    get colorCircle() { 
      return this.color;
    }
    set radiusCircle(radius) {
      this.radius = radius;
    }
    set colorCircle(color) {
      this.color = color;
    }
    get toString() {
      return `"Circle[radius="${this.radius}", color="${this.color}]"`;
    }
    get areaCircles() {
      return Math.PI * this.radius * this.radius;
    }
    get circumferenceCircle() {
      return 2 * Math.PI * this.radius;
    }
    
}
var finalobject = new Circle(1.0, "red");
    console.log(finalobject.radiusCircle);  //get

    var finalobject = new Circle(1.0, "red");
    console.log(finalobject.colorCircle);   //get

finalobject.radiusCircle = 564.89;
console.log(finalobject.radiusCircle);  //set

finalobject.colorCircle = "Purple";
console.log(finalobject.colorCircle);   //set

//========================================================================

// Write a “person” class to hold all the details.

class Person {
   constructor(name, age, address, blood_group, Nationality, Sex) {
      this.name = name;
      this.age = age;
      this.address = address;
      this.blood_group = blood_group;
      this.Nationality = Nationality;
      this.sex = Sex;
   }
}
var person1 = new Person("ram", 19,"12,ghandi st, chennai", "o +ve", "indian", "male");

var person2 = [];
person2.push(person1);
console.log(person2);


//========================================================================



//write a class to calculate the uber price.

class Uber {
   constructor(distance, baseFee, perMileFee) {
     this.distance = distance;
     this.baseFee = baseFee;
     this.perMileFee = perMileFee;
   }
 
   calculate_price() {
     return this.baseFee + (this.distance * this.perMileFee);
   }
 }

 var res = new Uber(10, 20, 7);
 console.log(res.calculate_price());

 //----------------------------------------------------------------------------




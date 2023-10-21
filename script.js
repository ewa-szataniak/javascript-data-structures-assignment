//START OF REVIEW

// As discussed in class, 2 of the most common and important
// data structures native to javascript: Arrays and Objects

//To review, an array is an ordered collection of data where each item is assigned
//an index starting from 0
//e.g.
let mySampleArray = ["Index 0", "Index 1", "Index 2"];

//An object, is used to store collections of data in a key-value pair format,
//where each key is a string (although quotes are optional for keys without spaces in them) and
//the values can be any data type

let mySampleObject = {
  firstName: "John",
  lastName: "Doe",
  age: 50,
};

//END OF REVIEW

//START OF ASSIGNMENT
//Given what we just learned, your assignment is to create an array of objects!
//Set the myZooAnimals variable underneath this text to an array of objects that have the
//following keys:
//1. animalType
//2. name
//3. age
//4. pictureURl

//Hint: go to https://unsplash.com for some great, high-res pics and search up whatever animal you want!

//Make sure to make at least 3 animal objects with these keys inside of the myZooAnimals array!

let myZooAnimals = [
  {
    animalType: "lion",
    name: "Simba",
    age: 5,
    pictureURL: "https://www.istockphoto.com/photo/male-lion-gm1478313319-506609880?utm_campaign=srp_photos_top&utm_content=https%3A%2F%2Funsplash.com%2Fs%2Fphotos%2Flion&utm_medium=affiliate&utm_source=unsplash&utm_term=lion%3A%3A%3A"
  },
  {
    animalType: "elephant",
    name: "Dumbo",
    age: 10,
    pictureURL: "https://media.istockphoto.com/id/1067020092/photo/african-elephants-in-chobe-national-park-botswana.jpg?s=1024x1024&w=is&k=20&c=8wON6ZVgO63hiZk9N-sCvzx_zeW6Expymd6wj0tMDY0="
  },
  {
    animalType: "giraffe",
    name: "Melman",
    age: 7,
    pictureURL: "https://media.istockphoto.com/id/876192236/photo/giraffe.jpg?s=1024x1024&w=is&k=20&c=AmKIvn5F-zeHM-Gox11GV5aZxWFdM4fZ131OwcPowJw="
  }
];

//END OF ASSIGNMENT

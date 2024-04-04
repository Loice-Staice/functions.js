//Question 1
//ascending
let elements =[
    {
    "name": "kate",
    },

    {
      "name": "Faith",
    },

    {
      "name":"Brenda",
    },

    {
        "name":"Edna"
    },

]
console.log("original elements are:")
console.log(elemedcnts)
let sortedElements = elements.sort(
    (n1 , n2) => (n1.name < n2.name) ? -1 : (n1.name > n2.name)? 1 : 0)

console.log("names sorted in ascending order")
console.log(sortedElements)

//descending
let ele =[
    {
    "name": "kate",
    },

    {
      "name": "Faith",
    },

    {
      "name":"Brenda",
    },

    {
        "name":"Edna"
    },

]
console.log("original ele are:")
console.log(ele)
let sortedEle = ele.sort(
    (n1 , n2) => (n1.name < n2.name) ? 1 : (n1.name > n2.name)? -1 : 0)

console.log("names sorted in descending order")
console.log(sortedEle)



//Question 2
var arr2 = [1, 0, 20, -2, 6, 5, -7]

function myFunction(arr2){
    let negative = arr2.filter ((element) => element < 0 )
    let positive = arr2.filter ((element) => element > 0)
    let zero = arr2.filter ((element) => element == 0)
    return{
        negative: negative,
        positive: positive,
        zero: zero
    }
}
console.log(myFunction(arr2))

function sortedObjects(){
  let arrEmployees = [
      {name:"Jane", id:"Ctfsv098", salary: 60000},
      {name:"moana", id:"Ctfv098", salary: 50000},
      {name:"simon", id:"Ctsv098", salary: 90000}
  ]
  console.log(arrEmployees.sort((a,b) => a.salary-b.salary))
  console.log(arrEmployees.sort((b,a) => a.salary - b.salary))
  // return arrEmployees
}
sortedObjects()


// Write a function that accepts an array of numbers and uses the forEach() method to console.
// log each number multiplied by 2.
const array = [23,45,12,54,12,21]
function arrayNumbers(){
   array.forEach(num =>{
      console.log(num *2);
  })
}
arrayNumbers(array)


// Write a function that takes in an array of numbers and consoles the first four items multiplied by 8 and the last two added by 5.
//  Console the array with the new values
const numbers = [45,23,67,13,2,8,9,12]
function arrayNums(){
  numbers.forEach((number,index) =>{
      if(index < 4){
          numbers[index] = number *8;
      }
      else if(index >= numbers.length -2){
          numbers[index] = number+5;
      }

  });
  console.log(numbers);
}
arrayNums()
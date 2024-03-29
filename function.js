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
console.log(elements)
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
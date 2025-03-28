// function printmyname(myname){
//     console.log("This is printmyname function with value ",myname)
// }
// function getmyname(name1){
//     console.log("This is getmyname function with value ",name1)
//     printmyname(name1)
// }
// getmyname('Ramesh')

// function getmyname(){
//     myname = 'Ramesh'
//     function printmyname(){
//         console.log("This is printmyname function with value ",myname)
//     }
//     return printmyname
// }
// var myfunction = getmyname()
// myfunction()

console.log("function nesting:")
function myLastName(lname){
    console.log("my last name is ", lname)
}
function myFirstName(fname){
    const lname= "Pandey"
    console.log("My first name is ", fname)
    myLastName(lname)
}
myFirstName("Ashish");

console.log("function closure:")
function profileFunction(){
    const name='Ashish Pandey'
    function aboutMe(){
        console.log("my name is ", name)
    }
    return aboutMe
}
const runAboutMe= profileFunction()
runAboutMe();








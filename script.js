let myName = 'Franc\'s my name' 
const yourName = `Chiname`
// const age = Number(prompt('how old are you'))
let statement = `${yourName.toUpperCase()} is  ${age}  years old, that means he was 
born in ${new Date().getFullYear() - age}`

let heading = document.querySelectorAll('h1')
heading[0].textContent = yourName
let para = document.querySelector('h1 + p')

let list1 = document.querySelectorAll('ul li')
list1[3].textContent = 'apple'
list1[2].textContent = "oranges"
list1[0].textContent = myName
para.textContent = statement
para.style.backgroundColor = "blue"



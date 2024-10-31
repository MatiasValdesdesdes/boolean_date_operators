//1
let firstname = 'José'
let lastname = 'Valdés'
let country = 'Ucrania'
let city = 'Sebastopol'
let age = 19
let ismarried = false
let year = 2005
    console.log("firstname ", typeof firstname)
    console.log("lastname ", typeof lastname)
    console.log("country ", typeof country)
    console.log("city ", typeof city)
    console.log("age ", typeof age)
    console.log("isMarried ", typeof ismarried)
    console.log("year ", typeof year)


//2
console.log(" '10' == 10 ",
     typeof '10' === typeof 10)


//3
console.log("parseInt('9.8') == 10 ", 
    parseInt('9.8') === 10)


//4
console.log(!!"aguacate")
console.log(!!"14")
console.log(!!"Agua de aguacate")


//5
console.log("4 > 3 ", 4 > 3)
console.log("4 >= 3 ", 4 >= 3)
console.log("4 < 3 ", 4 < 3)
console.log("4 <= 3 ", 4 <= 3)
console.log("4 == 4 ", 4 == 4)
console.log("4 === 4 ", 4 === 4)
console.log("4 != 4 ", 4 != 4)
console.log("4 !== 4 ", 4 !== 4)
console.log("4 != '4' ", 4 != '4')
console.log("4 == '4' ", 4 == '4')
console.log("4 === '4' ", 4 === '4')


//6
let now = new Date();
console.log("The current year is ",
     now.getFullYear())
console.log("The current month is ",
     now.getMonth()+1)
console.log("Today's date is ",
     now.getDate())
console.log("This day as a number is ",
     now.getDay())
console.log("The time right now is ",
     now.getHours())
console.log("The current minutes are ",
     now.getMinutes())
console.log("The seconds for 01 Enero of 1970 to today are ",
     Math.floor(Date.now()/1000))


//7 
let base = prompt("Escriba el valor de la base de su triángulo ")
let height = prompt("Escriba el valor de la altura de su triángulo ")
let area = 0.5 * base * height
console.log(`Su triángulo tiene un área de  ${area}`)


//8
let sideA = parseFloat(prompt("Escriba el valor para el lado A de su triángulo "))
let sideB = parseFloat(prompt("Escriba el valor para el lado B de su triángulo "))
let sideC = parseFloat(prompt("Escriba el valor para el lado C de su triángulo "))
let perimeter =sideA + sideB + sideC
console.log(`Su triángulo tiene un perímetro de  ${perimeter}`)


/*Matias Valdés José Ignacio
TI-31
2302060*/
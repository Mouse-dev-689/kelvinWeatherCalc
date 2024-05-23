//hard coding kelvin temp, please feel free to play around with different numbers
const kelvin = 0
// console.log(kelvin)
//Celsius is similar to Kelvin, except 273 degrees less.
let celsius = kelvin - 273
// console.log(celsius)
//Used the following equation for fahrenheit Fahrenheit = Celsius * (9/5) + 32, saved it as a var
let fahrenheit = celsius * (9/5) + 32
//Rounding down to the nearest temp
fahrenheit = Math.floor(fahrenheit)
// console.log(fahrenheit)

console.log(`The temperature is ${fahrenheit} degrees fahrenheit.`)



//extra practice
//Converting celsius to the newton scale using Newton = Celsius * (33/100)
let newton = celsius * (33/100)
//Rounding down the newton temp using the .floor method
newton = Math.floor(newton)
//Printing newtown to the console
console.log(`Also the temp on the Newton scale is ${newton}`)
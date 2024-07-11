// example.js

// Variable sin uso
const unusedVar = 42

// Función para saludar
function greet(name) {
  console.log('Hello, ' + name)  // falta punto y coma
}

// Llamada a la función de saludo
greet('World')  // falta punto y coma

// Clase para representar una persona
class Person {
  constructor(firstName, lastName) {
    this.firstName = firstName  // falta punto y coma
    this.lastName = lastName  // falta punto y coma
  }

  // Método para obtener el nombre completo
  getFullName() {
    return this.firstName + ' ' + this.lastName  // falta punto y coma
  }
}

// Crear una nueva persona
var person = new Person('John', 'Doe')  // uso de var, falta punto y coma

// Imprimir el nombre completo de la persona
console.log(person.getFullName())  // falta punto y coma

// Ejemplo de uso de una promesa
function fetchData(url) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (url) {
        resolve('Data from ' + url)  // falta punto y coma
      } else {
        reject(new Error('URL is required'))  // falta punto y coma
      }
    }, 1000)  // falta punto y coma
  })  // falta punto y coma
}

// Llamar a la función fetchData y manejar la promesa
fetchData('https://api.example.com')
  .then((data) => {
    console.log(data)  // falta punto y coma
  })
  .catch((error) => {
    console.error(error)  // falta punto y coma
  })

// Función para sumar dos números
function add(a, b) {
  return a + b  // falta punto y coma
}

// Llamada a la función add con números
const sum = add(5, 10)  // falta punto y coma

// Imprimir la suma
console.log('Sum:', sum)  // falta punto y coma

// Ejemplo de una función asíncrona
async function asyncFunction() {
  try {
    const data = await fetchData('https://api.example.com')  // falta punto y coma
    console.log('Async data:', data)  // falta punto y coma
  } catch (error) {
    console.error('Async error:', error)  // falta punto y coma
  }
}

// Llamar a la función asíncrona
asyncFunction()  // falta punto y coma

// Ejemplo de uso de let y const
let mutableVariable = 10
const immutableVariable = 20

mutableVariable = 15  // falta punto y coma

console.log('Mutable variable:', mutableVariable)  // falta punto y coma
console.log('Immutable variable:', immutableVariable)  // falta punto y coma

// Ejemplo de uso de array
const numbers = [1, 2, 3, 4, 5]

// Recorrer el array e imprimir cada número
numbers.forEach((number) => {
  console.log('Number:', number)  // falta punto y coma
})

// Ejemplo de un objeto con métodos
const calculator = {
  add(a, b) {
    return a + b  // falta punto y coma
  },
  subtract(a, b) {
    return a - b  // falta punto y coma
  },
  multiply(a, b) {
    return a * b  // falta punto y coma
  },
  divide(a, b) {
    if (b === 0) {
      throw new Error('Division by zero')  // falta punto y coma
    }
    return a / b  // falta punto y coma
  }
}

// Uso de los métodos del objeto calculator
console.log('Addition:', calculator.add(10, 5))  // falta punto y coma
console.log('Subtraction:', calculator.subtract(10, 5))  // falta punto y coma
console.log('Multiplication:', calculator.multiply(10, 5))  // falta punto y coma
console.log('Division:', calculator.divide(10, 5))  // falta punto y coma

// Ejemplo de un array de objetos
const people = [
  { name: 'Alice', age: 30 },
  { name: 'Bob', age: 25 },
  { name: 'Charlie', age: 35 }
]

// Filtrar personas mayores de 30 años
const olderThan30 = people.filter(person => person.age > 30)

// Imprimir las personas mayores de 30 años
console.log('People older than 30:', olderThan30)  // falta punto y coma

// Intentar usar una variable no definida
console.log(undefinedVariable)  // variable no definida

// Re-declarar una variable
var person = new Person('Jane', 'Doe')  // redeclaración de variable, falta punto y coma
console.log(person.getFullName())  // falta punto y coma

// Llamada a función antes de su declaración
console.log(subtract(10, 5))  // falta punto y coma
function subtract(a, b) {
  return a - b  // falta punto y coma
}

// Múltiples líneas vacías

function exampleFunction() {
  return true  // falta punto y coma
}



exampleFunction()  // falta punto y coma

// Líneas con espacios finales
console.log('Trailing spaces')    
console.log('Trailing spaces again')    

// Bloques sin llaves
if (true) console.log('No curly braces')  // falta punto y coma

// Uso incorrecto de espacios alrededor de palabras clave
if(true) { console.log('Incorrect keyword spacing') }  // falta punto y coma

// Uso incorrecto de espacios y tabs mezclados
function mixedTabsAndSpaces() {
	let x = 1;
    let y = 2;
	console.log(x + y);
}

mixedTabsAndSpaces();  // falta punto y coma

// Intento de reasignación a una constante
immutableVariable = 25  // reasignación a const, falta punto y coma

// Duplicación de claves en un objeto
const duplicateKeysObject = {
  key: 'value1',
  key: 'value2'  // duplicación de clave
};

// Caso duplicado en un switch
function duplicateCase(value) {
  switch(value) {
    case 1:
      console.log('Case 1');
      break;
    case 2:
      console.log('Case 2');
      break;
    case 1:  // duplicación de case
      console.log('Duplicate case');
      break;
    default:
      console.log('Default case');
  }
}

// Uso de un bloque vacío
if (true) {}

// Booleano extra
const extraBoolean = !!true;  // booleano extra innecesario

// Puntos y comas extra
function extraSemicolons() {
  let a = 1;;
  let b = 2;;
  return a + b;;
}

extraSemicolons();  // llamada con punto y coma extra

// Sparse arrays
const sparseArray = [1,,3];



let petNames = ["Darcy", "Jack", "Jerry", "Marty", "Vito", "Vinny", "Riley", "Saddie", "Marge", "Sam"]

let withSal = petNames 

let newDog = "Sal"

petNames.push(newDog)

withSal.push(newDog)

console.log(`The dogs' name is ${petNames[2]}`)

console.log(`The array has ${petNames.length}`)

petNames.pop()
console.log(petNames)
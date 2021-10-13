// Starting array
let array = [28, 43, -12, 30, 4, 0, 12]

// Write your solution below: default assumption is that no number is equal to zero; 
//default state is 'False'
let defaultState = false
for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length; j++) {
        if (i === j) {
            continue
        } 
        if ((array[i] + array[j]) === 0) {
            defaultState = true
            i = array.length
            continue
        } 
    }
} 

console.log(defaultState)
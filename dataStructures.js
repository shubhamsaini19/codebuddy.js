// level {2}

// 1

let array = [1, 3, 4, 6, 7, 8]

array = array.filter((e)=>{
    return e%2 !== 0;
})

console.log(array)


// 2

let string =  'Elie'

let str = string.split()

for (let i = 0; i < str.length; i++) {
    if(str[i] === "a" || str[i] === "e" || str[i] === "i" || str[i] === "o" || str[i] === "u"){
        str[i] = str[i].toUpperCase()
    }
}



// 3

let arr = [1, 3, 4, 6, 7, 8, 2, 5]

let max = arr[0]

for (let i = 0; i < arr.length; i++) {
    if( arr[i] > max ){

        max = arr[i]
    }
}

console.log("max",max)
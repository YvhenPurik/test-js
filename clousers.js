


// задача сделать чтоб нормально работало без let
// for (var i = 0; i < 10; i++) {
//   setTimeout(function () {
//     console.log(i); // 1 ?
//   }, 0);
// }


// решение обернуть в самовызывающуюся функцию

for (var i = 0; i < 10; i++) {
    (function(index){
        setTimeout(function () {
            console.log(index); // 1 ?
        }, i);
    })(i)
}


// или вот так тоже работает
for (i = 1; i <= 5; ++i) {
    setDelay(i);
}

function setDelay(i) {
    setTimeout(function(){
        console.log(i);
    }, 1000);
}



// MAX ARR 
 let arr = [1, 12, 5, 88, -3, 7]

// let max = Math.max(...arr)
// console.log(max)
let max = arr[0];
// MAX ARR 2
for(let i = 1; i < arr.length; i++ ){
    if(arr[i] > max){
    	max =  arr
    }
}
// console.log("2, 5, 6, 7, 8");

let button3 = document.querySelector('#task4');
button3.onclick = function(){
    let range = prompt('Enter number')
    if (range > 0 && range < 500) {
        alert('This number  in range 0 > 500');
    } else {
        alert('This number is not in range 0 > 500');
    }
}
// console.log("2, 5, 6, 7, 8");

let button4 = document.querySelector('#task5');
button4.onclick = function(){
    let year = prompt('Enter year')
    if (year % 400 == 0 || (year % 4 == 0) && (year % 100 != 0)) {
        alert('this year leap year');
    } else {
        alert('this year not leap year');
    }
}

// console.log("2, 5, 6, 7, 8");

let button2 = document.querySelector('#task3');
button2.onclick = function(){
    let tasknum = prompt(`Enter three-digit number ${[]}`);
    let tasknum1 = tasknum[0];
    let tasknum2 = tasknum[1];
    let tasknum3 = tasknum[2];
    let plus1 = (tasknum1 + tasknum2 + tasknum3)%2;
    if (plus1 === 0){
        alert('This number even');
    } else {
        alert('This number not even');
    }
    let plus2 = (tasknum1 + tasknum2 + tasknum3)%5
    if (plus2 === 0){
        alert('This number divide by 5');
    }else {
        alert('This number dont divide by 5')
    }
    let plus3 = tasknum1 * tasknum2 * tasknum3;
    if (plus3 > 100) {
        alert('this number is greater 100');
    }else {
        alert('this number is less 100');
    }
}
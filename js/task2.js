// console.log("2, 5, 6, 7, 8");

let button1 = document.querySelector('#task2');
button1.onclick = function(){
    let num1 = prompt(`Enter two-digit number ${[]}`);
    let num2 = num1[0];
    let num3 = num1[1];
    if (num2 > num3){
        alert(`${num2} > ${num3}`);
    }else if (num2 === num3){
        alert(`${num2} = ${num3}`);
    }
    else {
        alert(`${num2} < ${num3}`);
    }
}

// console.log("2, 5, 6, 7, 8");

let button = document.querySelector('#task1');
button.onclick = function(){
    let km = +prompt("Please enter number (km)");
    let ib = +prompt("Please enter number (ib)")
    let ibm = ib * 0.305;
    let km1 = km * 1000;
    if(ibm > km1){
        alert(`${ib}ib > ${km}km`)
    }else if(ibm === km1) {
        alert(`${km}km = ${ib}ib`)
    }else {
        alert(`${km}km > ${ib}ib`)
    }
}

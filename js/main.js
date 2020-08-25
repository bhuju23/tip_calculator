var tip_increment = document.getElementById('tip-plus');
var tip = document.querySelector('.tip input[type ="text"]');
var tip_decrement = document.getElementById('tip-minus');

tip_increment.addEventListener('click', (e) =>{
    e.preventDefault();
    tip.value++;
});

tip_decrement.addEventListener('click', (e)=>{
    e.preventDefault();
    if(tip.value > 0){
        tip.value--;
    }
});


var people_increment = document.getElementById('people-plus');
var people = document.querySelector('.people input[type = "text"]');
var people_decrement = document.getElementById('people-minus');


people_increment.addEventListener('click', (e)=>{
    e.preventDefault();
    people.value++;
});

people_decrement.addEventListener('click', (e)=>{
    e.preventDefault();
    if(people.value > 0){
        people.value--;
    }
});

var calculate = document.getElementById('calculate');
var total = document.getElementById('total');
var tip_amount = document.getElementById('tip-amount');
var bill_amount = document.getElementById('bill-amount');
var people = document.getElementById('num-people');

calculate.addEventListener('click', (e)=>{
    e.preventDefault();
    tip_amount.value = bill_amount.value * tip.value/100;
    if(people.value == 1){
        total.value = parseInt(bill_amount.value )+ parseInt(tip_amount.value);
    }

    else{
        let a = parseInt(bill_amount.value )+ parseInt(tip_amount.value);
        total.value = a / people.value;
    }
});


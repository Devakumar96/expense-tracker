'use strict';

const balance = document.getElementById('balance');
const moneyPlus = document.getElementById('money-plus');
const moneyMinus = document.getElementById('money-minus');
const list = document.getElementById('list');
const form = document.getElementById('form');
const transection = document.getElementById('transection');
const amount = document.getElementById('amount');

// creat post method
// creat put method
// read method
// read get method
// delete method
 
 const localStorageTransection = JSON.parse(
     localStorage.getItem('transections')
 );
 let transections = localStorage.getItem('transection') !== null ? localStorageTransection:[];

//  update value
const updateValue = function(){

    const amounts = transections.map((transection) => transection.amount);

    const plusTransection = amounts.filter((amount) => amount < 0);

    const minusTransection = amounts.filter((amount) => amount > 0);

    const incomeValue = plusTransection.reduce((acc,amount) => acc+amount,0);

    const expenseValue = minusTransection.reduce((acc,amount)=> acc+amount,0);

moneyPlus.innerHTML = incomeValue;
moneyMinus.innerHTML = expenseValue;
balance.innerHTML =  incomeValue + expenseValue;

};

// add transection

const addTransectionDom = function(transection){
    // add sign
    const sign = transection.amount < 0 ? '-':'+';
    // add item
    const item = document.createElement('li');

    // add class based sign / value
    item.classList.add(transection.amount <0? 'minus':'plus');

    item.innerHTML = `${transection.transection}<span>${sign}${Math.abs(transection.amount,)}</span> <button class="delete-btn" onclick = "removeTransection(${ transection.id})">X</button`;

    list.appendChild(item)
};

// inital function

const init = function (){
    list.innerHTML = '';
    transections.foreach(addTransectionDom);
    updateValue();
    init();
};
const updateLocalStorage = function(){
    localStorage.setItem('transform',JSON.stringify(transection));
};

const removeTransection = function(id){
    transections = transections.filter((transection)=> transection.id !== id);
    updateLocalStorage(); 
};

form.addEventListener ('submit',(e) =>{
    e.preventDefault();
    if (transection.value.trim() === '' || amount.value.trim() === ''){
        alert('Please add Transection')
    }
    
    const transectionDetails = {
        id : Math.floor(Math.random()*10000),
        transection : transection.value,
        amount : Number(amount.value),
    };

    transections.push(transectionDetails);

    addTransectionDom(transectionDetails);

    updateLocalStorage();
    
    updateValue();

    trasection.value = '';
    amount.value = '';

});
// starting value
init();
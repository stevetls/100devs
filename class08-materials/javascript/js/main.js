















const form = document.getElementById('my-form');
console.log(document.querySelector('.container'))
console.log(form);


//select Miltiple element

console.log(document.querySelectorAll('.item'));

const ul = document.querySelector('.items');

ul.lastElementChild.innerHTML = '<h1>hi</h1>';

ul.children[1].textContent = 'Hello';

const btn = document.querySelector('.btn');

btn.addEventListener('mouseover', (e) =>{
   e.preventDefault();
    
});
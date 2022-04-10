
const task = document.querySelector('#task');
const button = document.querySelector('.btn');
const list = document.querySelector('.list');
const msg = document.querySelector('#msg')
const form = document.querySelector('#taskForm')

/*
button.addEventListener('click', e => {
    e.preventDefault();
    console.log('click');
    msg.innerHTML = 'Success';
    setTimeout(() => msg.remove(), 2000)
});
*/

taskForm.addEventListener('submit', onSubmit);

function onSubmit(e){
    e.preventDefault();

    if(task.value === ''){
        msg.innerHTML = 'Please enter a task.';
    } else {

        // Create new list item with user
        const li = document.createElement('li');

        // Add text node with input values
        li.appendChild(document.createTextNode(task.value));

        // Append to ul
        list.appendChild(li);

        // Clear fields
        task.value = '';
    }

}


let text = document.querySelector('.task');
let add = document.querySelector('#addbtn');
let myList = document.querySelector('.mylist');
let arr = [];

add.addEventListener('click', function () {
    let b = text.value;
    arr.push(b);
    let li = document.createElement('li');
    li.textContent = b;

    let edit = document.createElement('button');
    edit.textContent = 'Edit';
    edit.style.backgroundColor='red'
    edit.style.color='white'
    edit.style.margin='10px'

    edit.addEventListener('click', function () {
        let newText =prompt(b);
        if (newText !== null) {
            b = newText;
            li.textContent = newText;
        }
    });

    let deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.style.backgroundColor='gray'
    deleteButton.style.color='black'
    deleteButton.style.margin='10px'
    deleteButton.addEventListener('click', function () {
        arr.splice(arr.indexOf(b), 1);
        myList.removeChild(li);
    });

    li.appendChild(deleteButton);
    li.appendChild(edit);
    myList.appendChild(li);
});










            
        
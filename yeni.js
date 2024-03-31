


// add.addEventListener('click',function () {
//     let b=text.value
//     myList.innerHTML=` `
//     arr.push(b)
// for(let i =0;i<arr.length;i++){
//     myList.innerHTML+=`<li>${arr[i]}</li>`

// }
// })







let text = document.querySelector('.task');
let add = document.querySelector('#addbtn');
let myList = document.querySelector('.mylist');
let arr = [];

add.addEventListener('click', function () {
    let b = text.value;
    arr.push(b);
    renderList();
});

function renderList() {
    myList.innerHTML = '';
    for (let i = 0; i < arr.length; i++) {
        let li = document.createElement('li');
        li.textContent = arr[i];

        let edit = document.createElement('button');
        edit.textContent = 'Edit';
        edit.style.backgroundColor='red'
        edit.style.color='white'
        edit.style.margin='10px'

        edit.addEventListener('click', function () {
            let newText =prompt(arr[i]);
            if (newText !== null) {
                arr[i] = newText;
                renderList();
            }
        });

        let deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.style.backgroundColor='gray'
        deleteButton.style.color='black'
        deleteButton.style.margin='10px'
        deleteButton.addEventListener('click', function () {
            arr.splice(i, 1);
            renderList();
        });

        li.appendChild(deleteButton);
        li.appendChild(edit);
        myList.appendChild(li);
    }
}







            
        
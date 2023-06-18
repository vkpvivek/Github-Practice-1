
// const ul = document.querySelector('.items');
// ul.firstElementChild.textContent = 'Hello';
// ul.children[1].innerText = 'Brad';
// ul.lastElementChild.innerHTML = '<h1>Hello</h1>';

// //_____________Task 2(hello tag to 'Green' in color)
// ul.firstElementChild.style.background = 'green';

// //_____________Task 3(second Li tah 'yellow' in color)
// ul.children[1].style.background = 'yellow';


//______  ____Task 1
const btn=document.querySelector('.btn')

btn.addEventListener('click', (e)=>{
    e.preventDefault();
    console.log(btn.innerHTML = "Clicked!<br>");
})

btn.addEventListener('mouseover', (e)=>{
    //e.preventDefault();
    console.log(btn.innerHTML = "Moused over!<br>");
})

btn.addEventListener('mouseout', (e)=>{
    e.preventDefault();
    console.log(btn.innerHTML = "Moused out!<br>");
})


//_____  ____  Task 2
const myForm = document.querySelector('#my-form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const msg = document.querySelector('.msg');

myForm.addEventListener('submit', onSubmit);

function onSubmit(e) {
    e.preventDefault();
    
    if(nameInput.value === '' || emailInput.value === '') {
      msg.innerHTML = 'Please enter all fields';

    } else {
        console.log(nameInput.value)
        console.log(emailInput.value)
    }
};


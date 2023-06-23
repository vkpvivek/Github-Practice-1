
// const ul = document.querySelector('.items');
// ul.firstElementChild.textContent = 'Hello';
// ul.children[1].innerText = 'Brad';
// ul.lastElementChild.innerHTML = '<h1>Hello</h1>';

// //_____________Task 2(hello tag to 'Green' in color)
// ul.firstElementChild.style.background = 'green';

// //_____________Task 3(second Li tah 'yellow' in color)
// ul.children[1].style.background = 'yellow';


//______  ____Task 1
// const btn=document.querySelector('.btn')

// btn.addEventListener('click', (e)=>{
//     e.preventDefault();
//     console.log(btn.innerHTML = "Clicked!<br>");
// })

// btn.addEventListener('mouseover', (e)=>{
//     //e.preventDefault();
//     console.log(btn.innerHTML = "Moused over!<br>");
// })

// btn.addEventListener('mouseout', (e)=>{
//     e.preventDefault();
//     console.log(btn.innerHTML = "Moused out!<br>");
// })


//_____  ____  Task 2
const myForm = document.querySelector('#my-form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const msg = document.querySelector('.msg');


var ItemList=document.getElementById('userDetail');
//ItemList.addEventListener('click', removeItem);

myForm.addEventListener('submit', onSubmit);

function onSubmit(e) {
    e.preventDefault();

    if(nameInput.value === '' || emailInput.value === '') {
      msg.innerHTML = 'Please enter all fields';

    } else {

        let myObj={
            name:nameInput.value,
            email:emailInput.value
        };
        
        localStorage.setItem(myObj.email,JSON.stringify(myObj));
        showUser(myObj);
       
    }  

        // let myObj_serialized=JSON.stringify(myObj);   //convert obj into string
        // console.log(myObj_serialized);

        // localStorage.setItem("myObj",myObj_serialized);
        // console.log(localStorage);
 
        //let myObj_deserialized=JSON.parse(localStorage.getItem("myObj"));
        // console.log(myObj_deserialized);
        
        // localStorage.setItem(nameInput.value,emailInput.value);
        // console.log("value update at local storage");
        // console.log(nameInput.value)
        // console.log(emailInput.value)
    //}

    function showUser(obj){
        const parElem=document.getElementById('userDetail');
        const childElem=document.createElement('li');
        childElem.className='item';

        childElem.textContent=obj.name +" "+obj.email;  //add text to Li

        //create Delete Button to add in li
        var deleteBtn = document.createElement('button');
        deleteBtn.className ='delete';
        deleteBtn.style='float:right';
        deleteBtn.appendChild(document.createTextNode('delete'));
        //console.log(deleteBtn);

         deleteBtn.onclick=()=>{
            localStorage.removeItem(obj.email);
            parElem.removeChild(childElem);
        }

        childElem.appendChild(deleteBtn);               //add delete button Li
        parElem.appendChild(childElem);

        console.log(parElem);
        console.log(ItemList.childElementCount);
        // childElem.textContent=obj.name +" "+obj.email;
        // console.log(childElem);
        //console.log(obj.name,obj.email);
    }
};



// function removeItem(e){
//     console.log("delete item");
//     // if(e.target.classList.contains('delete')){
//     //    if(confirm('Are You Sure?')){
//     //      var li = e.target.parentElement;
//     //      ItemList.removeChild(li);
//     //    }
//     //  }
// };


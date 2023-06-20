    //Examine the document object

//console.dir(document);
// console.log(document.URL);
// console.log(document.title);
//document.title=123;
// console.log(document.head);
// console.log(document.body);
// console.log(document.forms);
// console.log(document.forms[0]);
// console.log(document.images);

    //Get Element By ID

// //task 1(Add Blck Border to Title)
// var headerTitle=document.getElementById('header-title');
// // headerTitle.textContent ='Hello';
// // headerTitle.innerText="GoodBye";

// headerTitle.style.borderBottom='solid 3px #000';

// //Task-2 (change font->bold, color:green)
// var AddItem=document.getElementById('add-title');
// console.log(AddItem.innerText);
// AddItem.style="color:green;font-weight: bold"

// var items=document.getElementsByClassName('list-group-item');
// console.log(items);

    //Get Element by ClassName

// var items=document.getElementsByClassName('list-group-item');
// console.log(items);
// console.log(items[1]);
// items[2].style.backgroundColor="LightGreen";

// for(var i=0;i<items.length;i++){
//     items[i].style.fontWeight="bold";
// }

    //Get Element by TagName

// var li=document.getElementsByTagName('li');
// console.log(li);
// console.log(li[1]);
// li[2].style.backgroundColor="LightGreen";


// for(var i=0;i<li.length;i++){
//     li[i].style.fontWeight="bold";
// }

//Task -1 (Use querySelecter)
var secItem=document.querySelector('.list-group-item:nth-child(2)');
secItem.style.color='red';

var thirdItem=document.querySelector('.list-group-item:nth-child(3)');
thirdItem.style.visibility="hidden";

//task 2 (Use querySelecterAll)
var Items=document.querySelectorAll('.list-group-item');
Items[1].style.color='green';

var odd=document.querySelectorAll('li:nth-child(odd)');

for(var i=0;i<odd.length;i++){
    odd[i].style.backgroundColor='green';
}

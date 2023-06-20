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

// //Task -1 (Use querySelecter)
// var secItem=document.querySelector('.list-group-item:nth-child(2)');
// secItem.style.color='red';

// var thirdItem=document.querySelector('.list-group-item:nth-child(3)');
// thirdItem.style.visibility="hidden";

// //task 2 (Use querySelecterAll)
// var Items=document.querySelectorAll('.list-group-item');
// Items[1].style.color='green';

// var odd=document.querySelectorAll('li:nth-child(odd)');

// for(var i=0;i<odd.length;i++){
//     odd[i].style.backgroundColor='green';
// }


//------------------------------------------------------------

// var ItemList=document.querySelector('#items');
// //parent Node
// // console.log(ItemList.parentNode);
// // ItemList.parentNode.style.backgroundColor="#03fcc2";

// //parent Element
// console.log(ItemList.parentElement);
// ItemList.parentElement.style.backgroundColor="#03fcc2";

//childNode
// console.log(ItemList.childNodes);
// console.log(ItemList.children);
// console.log(ItemList.children[1]);
// ItemList.children[1].style.backgroundColor="yellow";

//First Child
// console.log(ItemList.firstChild);
// console.log(ItemList.firstElementChild);
// ItemList.firstElementChild.textContent="Hello";

//last-Child
// console.log(ItemList.firstChild);
// console.log(ItemList.lastElementChild);
// ItemList.lastElementChild.textContent="Hello";

//Sibling
// console.log(ItemList.nextSibling);
// console.log(ItemList.previousSibling);
// console.log(ItemList.nextElementSibling);
// console.log(ItemList.previousElementSibling);

// ItemList.previousElementSibling.style.color='green';

//Create a Div
var newDiv=document.createElement('div');
newDiv.className='className';
newDiv.id='idName';
newDiv.setAttribute('attName','attvalue');

//add text
var newDivText=document.createTextNode('Hello World');
newDiv.appendChild(newDivText);
console.log(newDiv);

//add style
newDiv.style.fontSize='30px';

//insert newDiv at header
var container=document.querySelector('header .container');
var h1=document.querySelector('header h1');

container.insertBefore(newDiv,h1);

//insert newDiv before item1
var body=document.querySelector('div #main');
var h2=document.querySelector('div ul');
body.insertBefore(newDiv,h2);







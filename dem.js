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

//task 1(Add Blck Border to Title)
var headerTitle=document.getElementById('header-title');
// headerTitle.textContent ='Hello';
// headerTitle.innerText="GoodBye";

headerTitle.style.borderBottom='solid 3px #000';

//Task-2 (change font->bold, color:green)
var AddItem=document.getElementById('add-title');
console.log(AddItem.innerText);
AddItem.style="color:green;font-weight: bold"



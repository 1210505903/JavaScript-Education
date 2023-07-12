//Document Objesi

// console.log(window);

//let value ;

//console.log(document);

// value = document.location.href;
// value = document.location.hostname;
// value = document.location.port;
// value = document.location.pathname;


// value = document.all;
// value = document.characterSet;

// value = document.title;
// value = document.links.item(4);
// value = document.links.item(4).id;
// value = document.links.item(4).getAttribute("id");
// value = document.links.item(4).getAttribute("class"); 
// value = document.links.item(4).classList[3];

// value  = document.forms.item(1).children;

// value = document.domain;
// value = document.contentType;
//value = document.location.hostname();
//value = document.location.port; 
//value= document.links.item(4);


//querySelector - querySelecterAll

/*const todo = document.querySelector(".list-group")
const cart = document.querySelector(".card");

console.log(cart);


console.log(todo);
 */

const form = document.querySelector("#todoAddForm");
const  addInput = document.querySelector("#todoName");
const todoList = document.querySelector(".list-group");
const firstCarBudy = document.querySelectorAll(".list-group")[0];
const secondCarBudy = document.querySelectorAll(".list-group")[1];
const clearbutton = document.querySelector("#clearbutton");

runEvents();

function runEvents(){
    
    form.addEventListener("submit",addTodo);
}

function addTodo(e){
  
    const inputText  = addInput.value();
    console.log(inputText);
    if(inputText == null && inputText == ""){
        alert("LÜFTFEN GEÇERLİ Bİ DEĞER GİRİNİZ");
    }else {
        addTodoIU(inputText); // Ara yüze ekleme
    }
    //storge ekleme 
    e.preventDefault();
}

function addTodoIU(newTodo){
    //EKRANA YAZDIRMA
    //İLK OLARAK EKRANA YAZDIRIYORZ
    const li = document.createElement("li");
    li.className= "list-group-item d-flex justify-content-between";
    li.textContent =newTodo;

    const a = document.createElement("a");
    a.href="#";
    a.className="delete-item";

    const i = document.createElement("i");
    i.className="fa fa-remove";

    a.appendChild(i);
    li.appendChild(a);
    todoList.appendChild(li);

    //addInput="";
    }

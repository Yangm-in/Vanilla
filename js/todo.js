const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("input")
const toDoList = document.querySelector("#todo-list");

const TODOS_KEY = "toDos";

let toDos = [];

function saveToDos(){
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos)); //JSON.stringify(변수) = 변수의 값을 striing화해서 저장함
}

function deliteToDo(event){
    const li = event.target.parentElement;
    li.remove();
    toDos = toDos.filter(toDo => toDo.id !== parseInt(li.id));
    saveToDos();
}

function paintToDo (newToDo){
    const li = document.createElement("li");
    li.id=newToDo.id;
    const span = document.createElement("span");
    span.innerText=newToDo.text;
    const button = document.createElement("btuuon");
    button.innerText="❌";
    button.addEventListener("click",deliteToDo);
    li.appendChild(span);
    li.appendChild(button);
    toDoList.appendChild(li);
}

function handleTodoSubmit(event) {
    event.preventDefault();
    const newToDo = toDoInput.value;
    toDoInput.value = "";
    const newToDoobj = {
        text:newToDo,
        id: Date.now(),
    }
    toDos.push(newToDoobj);
    paintToDo(newToDoobj);
    saveToDos();
}

toDoForm.addEventListener("submit", handleTodoSubmit);


//function sayHello(item){ //item마다 함수 실행하기
//    console.log(`지금 실행되는 아이템은 ${item}`);
//}



const savedToDos = localStorage.getItem(TODOS_KEY);
if (savedToDos !== null){
    const parsedToDos = JSON.parse(savedToDos); //JSON.parse(변수) 변수의 값을 배열로 만들어 줌.
    toDos = parsedToDos;
    //parseToDos.forEach(sayHello); //배열.forEach(함수); 배열 아이템마다 함수 실행
    parsedToDos.forEach(paintToDo);//화살표 함수. parseToDos안에 각각의 아이템에 콘솔로그를 실행하라
}
//중복된 코드가 많다. object라고 하면 에러나서  { id: number; title: string; done: boolean; }작성해준 부분

type Todo = {
  id: number;
  title: string;
  done: boolean;
}

let todoItems: Todo[];


// api
function fetchTodoItems(): Todo[] {
    const todos = [
        { id: 1, title: "안녕", done: false },
        { id: 2, title: "타입", done: false },
        { id: 3, title: "스크립트", done: false },
    ];
    return todos;
}

// crud methods
function fetchTodos():object[] {
  const todos = fetchTodoItems();
  return todos;
}

function addTodo(todo: Todo):void {
  todoItems.push(todo);
}
//void는 반환값이 없다는 것을 명시적으로 보여주는 것이다.

function deleteTodo(index:number):void {
  todoItems.splice(index, 1);
}

function completeTodo(
    index: number,
    todo: Todo
): void {
    todo.done = true;
    todoItems.splice(index, 1, todo);
}

// business logic
function logFirstTodo():object {
  return todoItems[0];
}

function showCompleted() :object[] {
 return todoItems.filter(item => item.done);
  // return todoItems.filter(function (item) {
  //   if (item.done) {
  //     return item;
  //   }
  // })
}
//array에서 특정조건 값들만 필터해내고 싶을 떄

// TODO: 아래 함수의 내용을 채워보세요. 아래 함수는 `addTodo()` 함수를 이용하여 2개의 새 할 일을 추가하는 함수입니다.
function addTwoTodoItems() {
  // addTodo() 함수를 두 번 호출하여 todoItems에 새 할 일이 2개 추가되어야 합니다.
  const item1 = {
    id: 4,
    title: '아이템4',
    done:false,
  }

  addTodo(item1);
  addTodo({id:5,title:'아이템 5',done:false});
}

// NOTE: 유틸 함수
function log() :void {
  console.log(todoItems);
}

todoItems = fetchTodoItems();
addTwoTodoItems();
log();

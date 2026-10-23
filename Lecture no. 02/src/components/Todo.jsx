import React from 'react'

export function Todo() {
    let Value="";
    let [todos,setTodos] = useState(["todo1","todo2","todo3","todo4"])
    // let todos = ["todo1","todo2","todo3","todo4"];
    function printValue(e){
        // console.log(e.target.value);
        Value=e.target.value;
    }

    function addTodo(e){
        e.preventDefault();
        // todos.push(Value);
        setTodos((prev) => {
            return [...prev,Value]
        })
    }

  return (
    <div>
    <h1>Todo</h1>
    <form action="" onSubmit={addTodo}>
        <label htmlFor="todo">Enter Your Task</label>
        <input id = "todo" type="text" onChange={printValue} />
        <button>Add</button>
        <ul>
            {
                todos.map((todo)=>
                    (<li>{todo}</li>)
                )
            }
        </ul>
    </form>
    </div>
  )
}

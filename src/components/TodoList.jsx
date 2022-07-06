import React, { Fragment, useState, useRef } from "react";
import { v4 as uuid } from "uuid";
import { TodoItem } from "./TodoItem";

export function TodoList() {
  const [todos, setTodos] = useState([
    { id: 1, task: "Tarea 1" },
    { id: 2, task: "Tarea 2" },
    { id: 3, task: "Tarea 3" },
    { id: 4, task: "Tarea 4" },
    { id: 5, task: "Tarea 5" },
    { id: 6, task: "Tarea 6" },
    { id: 7, task: "Tarea 7" },
  ]);

  const taskRef = useRef();

  const agregarTarea = () => {
    const task = taskRef.current.value;
    console.log(task);

    if (task === "") return;
    console.log("Agregando tarea...");

    /* Metodo que esta definido por react para operar los elementos */

    setTodos((prevTodos) => {
      const newTask = {
        id: uuid(),
        task: task,
      };

      return [...prevTodos, newTask];
    });

    taskRef.current.value = "";
  };

  return (
    <Fragment>
      <h1>Listado de Tareas</h1>
      <div className="input-group my-4">
        <input
          ref={taskRef}
          type="text"
          placeholder="Ingrese una tarea"
          className="form-control"
        />
        <button onClick={agregarTarea} className="btn btn-success ms-2">
          +
        </button>
      </div>

      <ul className="list-group">
        {/* Investigar que más se puede hacer con el método map */}
        {todos.map((todo) => (
          <TodoItem todo={todo} key={todo.id}></TodoItem>
        ))}
      </ul>
    </Fragment>
  );
}

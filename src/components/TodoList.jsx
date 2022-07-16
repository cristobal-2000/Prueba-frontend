import React, { Fragment, useState, useRef } from "react";
import { useEffect } from "react";
import { v4 as uuid } from "uuid";
import { TodoItem } from "./TodoItem";
//funcion que maneja la lista
const KEY = "todolist-todos";

export function TodoList() {
  const [todos, setTodos] = useState([
    { id: 1, task: "Tarea 1",descripcion:"holaa" ,   completed: true },
    { id: 1, task: "Tarea 1",descripcion:"holaa" ,   completed: true },
    { id: 1, task: "Tarea 1",descripcion:"holaa" ,   completed: true },
    { id: 1, task: "Tarea 1",descripcion:"holaa" ,   completed: true },
    { id: 1, task: "Tarea 1",descripcion:"holaa" ,   completed: true },
    { id: 1, task: "Tarea 1",descripcion:"holaa" ,   completed: true },
    { id: 1, task: "Tarea 1",descripcion:"holaa" ,   completed: true },
    { id: 1, task: "Tarea 1",descripcion:"holaa" ,   completed: true }

    
  ]);

  

  const taskRef = useRef();
  
 
  const descripcionRef = useRef();




/*   /* permite almacenar datos 
  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem(KEY))
    if((storedTodos)){
      setTodos(storedTodos)
    }
  },[])

  useEffect(() => {
    localStorage.setItem(KEY, JSON.stringify(todos))
  },[todos]) */

  const agregarTarea = () => {
    //para ques se usa current.value?
    const task = taskRef.current.value;
    const descripcion = descripcionRef.current.value;
   

    console.log(task);
    //para que utiliza esto??
    if (task === "") return;

    console.log("Agregando tarea...");

    /* Metodo que esta definido por react para operar los elementos */

    setTodos((prevTodos) => {
      const newTask = {
        id: uuid(),
        task: task,
        descripcion: descripcion,
        completed: false
      };

      return [...prevTodos, newTask];
    });
    //que hace esto?
    taskRef.current.value = "";

  };

  


  const ResumenTareas = () => {
    const cant = cantidadTareas();

    if (cant === 0){
      return (
        <div className="alert alert-success mt-3">
          felicidades no tienes tareas pendientes :)
        </div>
      )
    }

    if (cant === 1){
      return (
        <div className="alert alert-info mt-3">
          te queda solamente una tarea pendiente
        </div>
      )
    }

    if (cant === 2){
      return (
        <div className="alert alert-info mt-3">
          te quedan 2 tarea pendientes
        </div>
      )
    }

    if (cant >= 3){
      return (
        <div className="alert alert-info mt-3">
          te quedan 3 o mas tareas pendientes
        </div>
      )
    }
  }

  const cantidadTareas = () => {
    return todos.filter((todo) => !todo.completed).length;
  }

  const cambiarEstadoTarea = (id) =>{
    console.log(id);
    const newTodos = [...todos]
    const todo = newTodos.find((todo) => todo.id===id)
    todo.completed = !todo.completed
    setTodos(newTodos)
  }

  const eliminarTareasCompletas = () => {
    const newTodos = todos.filter((todo) => !todo.completed)
    setTodos(newTodos)
  }

  const cerrar = (id) => {
    const newTodos = todos.filter((todo) => todo.id !== id);
    setTodos(newTodos);
  };



  return (
    <Fragment>
      <h1>post it simulador!</h1>
      <div className="input-group my-4">
        <input
          ref={taskRef}
          type="text"
          placeholder="Titulo"
          className="form-control"
        />
         <input 
        ref={descripcionRef}
          type="text" 
          placeholder="Descripcion"
          className="form-control"
          
        /> 
        <input type="checkbox" className="form-check-input me-2" />importante!
        
        
        
        <button onClick={eliminarTareasCompletas} className='btn btn-success me-2'>Agregar
        </button>
      </div>

      <ul className="">
        {/* Investigar que más se puede hacer con el método map */}
        {todos.map((todo) => (
          <TodoItem todo={todo} key={todo.id} cerrar={cerrar} cambiarEstado={cambiarEstadoTarea}></TodoItem>
        ))}
      </ul>
      <ResumenTareas/>
    </Fragment>
  );
}

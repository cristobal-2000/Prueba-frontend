import "./style.css"
import React, { Fragment } from "react";
//item en la lista
export function TodoItem({ todo, cambiarEstado, cerrar }) {
  const { id, task, descripcion, completed } = todo;
  const fnCambiarEstado = () => {
    cambiarEstado(id);
  }
  return (
    <Fragment>
      <ul>
        <li>
          <a href="#">
            <button className="botonx" onClick={()=>cerrar(id)}>x</button>
            <h2>{task}</h2>
            <p>{descripcion}</p>
          </a>
        </li>
      </ul>
    </Fragment>
  );
}

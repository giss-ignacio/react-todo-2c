import React, { Component } from 'react';

export default function Tarea(props) {

  const handleOnChange = () => {
    // TODO: esta bien cambiar el estado de una prop?
    props.tarea.check = !props.tarea.check;
    props.handleUnchecked();    
  };

return (
<li>
  <span>
    <input class="todo-checkbox" type="checkbox" id="topping" name="topping"
    value="Paneer" checked={props.tarea.check} onChange={handleOnChange} />&nbsp;
    {props.tarea.titulo}
  </span>
</li>
)
}
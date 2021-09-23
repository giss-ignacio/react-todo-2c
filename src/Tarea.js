import React, { Component } from 'react';
import useValue from './useValue'

export default function Tarea(props) {

  const isChecked = useValue(false);

  const handleOnChange = () => {
    isChecked.set(!isChecked.get());
    props.handleUnchecked(isChecked.get());
  };

return (
<li>
  <input class="todo-checkbox" type="checkbox" id="topping" name="topping" 
    value="Paneer" checked={isChecked.get()} onChange={handleOnChange} />
  <p style = {{color:'blue'}}>
    {props.texto}
  </p>
</li>
)
}
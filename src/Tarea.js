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
  <span>
    <input class="todo-checkbox" type="checkbox" id="topping" name="topping"
    value="Paneer" checked={isChecked.get()} onChange={handleOnChange} />&nbsp;
    {props.texto}
  </span>
</li>
)
}
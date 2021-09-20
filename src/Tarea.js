import React, { Component } from 'react';

export default function Tarea(props) {
return (
<li>
  <p style = {{color:'blue'}}>
{props.texto}
</p>
</li>
)
}
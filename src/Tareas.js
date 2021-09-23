import React, { Component } from 'react';
import Tarea from './Tarea'


export default function Tareas(props) {

  return(
    <ul id="todo-list" class="todo-list">       
    {  props.tareas.map((tarea)=> {
      return  <Tarea tarea={tarea} handleUnchecked={props.handleUnchecked}/>
    })
    }
    </ul>


  )
}
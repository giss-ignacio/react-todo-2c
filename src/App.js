import React, { Component } from 'react';
import Tareas from './Tareas'

class App extends Component {
  constructor() {
    super();
    this.state = {
        tareas:[]
    };
  }

  addTodo() {
    const tarea = {
      titulo : prompt ("Tarea a realizar"),
      checked:false
    }

    const newArray = Array.from(this.state.tareas)
    newArray.push(tarea)
    this.setState({tareas:newArray})
  }


  render() {
    return (
      <div>
      <h1 class="center title">TODO App</h1>
      <div class="flow-right controls">

        <span>Item count: <span id="item-count">0</span></span>
        <span>Unchecked count: <span id="unchecked-count">0</span></span>
      </div>
      <button class="button center" onClick={this.addTodo.bind(this)}>Agregar Tarea</button>


        <Tareas tareas={this.state.tareas}/>

      </div>
    );
  }
}

export default App;

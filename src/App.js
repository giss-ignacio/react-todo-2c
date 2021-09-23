import React, { Component } from 'react';
import Tareas from './Tareas'

class App extends Component {
  constructor() {
    super();
    this.state = {
        tareas:[],
        unchecked: 0,
        total: 0
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
    this.setState({ total: this.state.total + 1 });
    this.setState({ unchecked: this.state.unchecked + 1 });
  }

  handleUnchecked(isChecked) {
    isChecked ?
      this.setState({ unchecked: this.state.unchecked - 1 })
    :
      this.setState({ unchecked: this.state.unchecked + 1 });
  }


  render() {
    return (
      <div>
      <h1 class="center title">TODO App</h1>
      <div class="flow-right controls">

        <span>Item count: <span id="item-count">{this.state.total}</span></span>
        <span>Unchecked count: <span id="unchecked-count">{this.state.unchecked}</span></span>
      </div>
      <button class="button center" onClick={this.addTodo.bind(this)}>Agregar Tarea</button>


        <Tareas tareas={this.state.tareas} handleUnchecked={this.handleUnchecked.bind(this)}/>

      </div>
    );
  }
}

export default App;

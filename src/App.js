import React, { Component } from 'react';
import Tareas from './Tareas'

class App extends Component {
  constructor() {
    super();
    this.state = {
        tareas:[],
        // tareas render son las que muestro y no modifica las originales tareas
        // TODO: hacerlo de una mejor forma usando React
        tareasRender: [],
        unchecked: 0,
        total: 0,
        filtro: ''
    };
  }

  addTodo() {
    const tarea = {
      titulo : prompt ("Tarea a realizar"),
      checked:false
    }

    const newArray = Array.from(this.state.tareas);
    newArray.push(tarea);
    this.setState({tareas:newArray});
    this.setState({tareasRender:[...newArray]});
    this.setState({filtro: ''});    
    this.setState({ total: this.state.total + 1 });
    this.setState({ unchecked: this.state.unchecked + 1 });
  }

   filtrarTodo(filtro) {
    this.setState({tareasRender: this.state.tareas.filter(t => t.titulo.toLowerCase().includes(filtro.toLowerCase()))});
  }

  handleKeyPress(event) {
    this.filtrarTodo(event.target.value);
  }

  handleUnchecked(isChecked) {
    isChecked ?
      this.setState({ unchecked: this.state.unchecked - 1 })
    :
      this.setState({ unchecked: this.state.unchecked + 1 });
  }


  render() {
    return (
      <div class="container center">
        <h1 class="center title">TODO App</h1>
        <div class="flow-right controls">
          <span>Item count: <span id="item-count"> {this.state.total} </span></span>
          <span>Filtrar: <input type="text" id="filtrar" onKeyUp={this.handleKeyPress.bind(this)}  placeholder='' /></span>
          <span>Unchecked count: <span id="unchecked-count"> {this.state.unchecked} </span></span>
      </div>

      <button class="button center" onClick={this.addTodo.bind(this)}>Agregar Tarea</button>

      <Tareas tareas={this.state.tareasRender} handleUnchecked={this.handleUnchecked.bind(this)}/>

      </div>
    );
  }
}

export default App;

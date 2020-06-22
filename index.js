import React, { Component, useState } from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import './style.css';

import Contador from './Contador'


/*function A(props){
  return <p>Hola {props.nombre}, {props.children}</p>;
}
function B(props){
  return <p>{props.nombre}:10</p>;
}

class MiComponenteDeClase extends Component{
  render(){
    return <p>Hola soy de la clase </p>
  }
}*/

/*class Contador extends Component{
  constructor(props){
    super(props);
    this.state = {
      contador:0
    };
  }

  aumentar = ()=>{
    this.setState({
      contador:this.state.contador +1
    })
  }
  
  render(){
    return (<div>
      <p>{this.state.contador}</p>
      <button onClick={this.aumentar}>Aumentar</button>
    </div>);
  }
}*/

/*class Formulario extends Component{
  constructor(props){
    super(props);
    this.state = {
      email: '',
      password:''
    }
  }

  syncChanges(value,property){
    //console.log(email);
    let state = {};
    state[property]=value;
    this.setState(state);
  }

  submitForm = ()=>{
    console.log(this.state)
  }
  render(){
    return (
      <form>
      <input 
        onChange={(ev)=>{this.syncChanges(ev.target.value, 'email')}}
        type="email" 
        value={this.state.email} 
        placeholder="Email"
      />
      <input 
        onChange={(ev)=>{this.syncChanges(ev.target.value, 'password')}}
        type="password" 
        value={this.state.password} 
        placeholder="********"
        autocomplete="on"
      />
      
      <div>
        <input 
          onClick={this.submitForm}
          type="submit"
          value="Iniciar sesion"/>
      </div>
    </form>
    )
    
  }
}*/

/*class Blog extends Component{
  constructor(props){
    super(props);
    this.state={
      articles: []
    };
  }

  componentDidMount(){
    let promesa = fetch('https://jsonplaceholder.typicode.com/posts');
    promesa.then(response => response.json()).then(data=>{
      //console.log(data);
      this.setState({articles:data})
    })
    promesa.then((response)=>{
      response.json().then((data)=>{
        //console.log(data)
      })
    })

  }
  render(){
    return(
      <div>
        {
          this.state.articles.map((article)=>{
           return <div className="card" style={ { backgroundColor:'purple',color:'#fff' } }><p>{article.title}</p></div>
          })
        }
      </div>
    )
  }
}*/

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: 'React'
    };
  }

  render() {
    let nombre = "Uriel";
    return (
      <div>
        <Contador/>
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));

import React, { Component } from 'react';
import axios from "axios";


class App extends Component {
  state ={
    fname:"",
    sname:"",
    items:[]
  }

  cal = () =>{
    const options = {
      method: 'GET',
      url: 'https://love-calculator.p.rapidapi.com/getPercentage',
      params: {fname: this.state.fname, sname: this.state.sname},
      headers: {
        'X-RapidAPI-Key': '15e4dc1e48msh24c0d03eba5cf69p10e045jsn50d1a48b7f0e',
        'X-RapidAPI-Host': 'love-calculator.p.rapidapi.com'
      }
    };
    
    axios.request(options).then(response => {
      console.log(response.data);
      this.setState({
        items: response.data
      })
    }).catch(function (error) {
      console.error(error);
    });
  }

  render() {
    return (
      <div>
        <div>
          <input className='firstname' value={this.setState.fname} onChange={
            (e) => this.setState({fname: e.target.value})
          }></input>
          <input className='secondname' value={this.setState.sname} onChange={
            (e) => this.setState({sname: e.target.value})
          }></input>
        </div>
        <button onClick={this.cal}>Hesapla</button>
        <p>%{this.state.items.percentage}</p>
        <p>{this.state.items.result}</p>
      </div>
    );
  }
}

export default App;
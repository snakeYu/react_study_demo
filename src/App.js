import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Footer from './components/Footer'
import Header from './components/Header'

class App extends Component {
  hanedleGreet_p(h){
    alert('you click me '+h)
  }
  render() {
    const user={
      name:"Anna",
      hobbies:['sports','playGames']
    }
    return (
      <div className="App">
        <Header></Header>
        <div className="content">
          <img src={logo} className='App-logo' alt='logo图片'/>
        </div>

        <Footer name={user.name} hobbies={user.hobbies} greet={this.hanedleGreet_p}>
          <p>
            I am child;
          </p>
        </Footer>


      </div>
    );
  }
}

export default App;

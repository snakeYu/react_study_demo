import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Footer from './components/Footer'
import Header from './components/Header'

class App extends Component {
  constructor(props){
    super(props);
    this.state={
      headerValue:"default",
      user:{
        name:"Anna",
        hobbies:['sports','playGames']
      },
      inputValue:'default'
    }
  }
  hanedleGreet_p(h){
    this.setState({
      headerValue:h
    })
  }
  handleChange(v){
    this.setState({
      inputValue:v
    })
  }
  render() {
    return (
      <div className="App">
        <Header headerValue={this.state.headerValue} inputValue={this.state.inputValue}></Header>
        <div className="content">
          <img src={logo} className='App-logo' alt='logo图片'/>
        </div>

        <Footer 
          name={this.state.user.name} 
          hobbies={this.state.user.hobbies} 
          greet={this.hanedleGreet_p.bind(this)}
          handleChange={this.handleChange.bind(this)} 
          inputValue={this.state.inputValue}>
          <p>
            I am child;
          </p>
        </Footer>


      </div>
    );
  }
  componentWillMount(){
    console.log('willMount')
  }
  componentDidMount(){
    console.log('didMount')
  }
  componentWillReceiveProps(nextProps){
    // 当你传入一个新的props的时候才会触发
    console.log('willReceiveProps',nextProps)
  }
  shouldComponentUpdate(nextProps,nextState){
    // 当你的props和state任意一个有变化都会触发
    console.log('shouldUpdate',nextProps,nextState)
    // 这里必须返回一个Boolean值
    return true;
  }
  componentWillUpdate(nextProps,nextState){
    console.log('willUpdate',nextProps,nextState)
  }
  componentDidUpdate(prevProps,prevState){
    console.log('didUpdate',prevProps,prevState)
  }
  componentWillUnmount(){
    console.log('willUnmount')
    
  }
}

export default App;

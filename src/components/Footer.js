import React ,{Component} from 'react';

// 这个库是用来做参数类型检测的
import PropTypes from 'prop-types';

 class Footer extends Component{
  //  如果要使用constructor的话一定要记住传入props，如论是否用的到。
   constructor(props){ 
     super(props);
    //  props是无法修改的，只能获取，如果要修改状态的话，只能借用state
    this.state={
      name:this.props.name,
      hobbies:this.props.hobbies,
      age:0
    }
   }
   onMakeOlder(){
     this.setState({
      age:this.state.age+1
     })
   }
   handleGreet(h){
     this.props.greet(h)
   }
  render(){
    return (
      <div>
        <div className="new">
            <footer>this is {this.state.name},I'm {this.state.age}</footer>
            <ul>
              {
                // <li onClick={()=>{this.onMakeOlder()}}></li> 这种写法用的很巧妙
                this.state.hobbies.map(hobby => <li onClick={this.onMakeOlder.bind(this)} key={hobby}>
                
                {hobby}
                <button onClick={this.handleGreet.bind(this,hobby)}>click me</button>
                </li>)
              }
            </ul>
        </div>
        <div>
          {/* 这里可以通过this.props.children获取父元素中的子元素，类似于slot的作用 */}
          {this.props.children}
        </div>
      </div>
    )
  }
};

// Footer后面的propTypes首字母不是大写，不是大写！！！！！
Footer.propTypes = {
  name: PropTypes.string,
  hobbies:PropTypes.array,
  greet:PropTypes.func
};

export default Footer;
import React ,{Component} from 'react';

// 这个库是用来做参数类型检测的
import PropTypes from 'prop-types';

 class Footer extends Component{
  render(){
    return (
      <div>
        <footer>this is {this.props.name}</footer>
        <ul>
          {
            this.props.hobbies.map(hobby => <li key={hobby}>{hobby}</li>)
          }
        </ul>

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
  hobbies:PropTypes.array
};

export default Footer;
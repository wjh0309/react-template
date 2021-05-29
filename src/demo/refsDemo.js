import React, { Component } from 'react'

class RefsDemo extends Component {
  // inputRef = React.createRef();
  inputClick = (e) => {
    // console.log(this.inputRef.current.value)
    // console.log(this.inputRef.value)
    console.log(e.target.value)
  }

  render() {
    const {name, sex} = this.props;
    return (
      /*<input ref={this.inputRef} onChange={this.inputClick}></input>*/
      <div>
        <input ref={ref => this.inputRef = ref} onChange={this.inputClick}></input>
        <p>{`${name}:${sex}`}</p>
      </div>
    )
  }
}

class PropsDemo extends Component {
  render() {
    const props = {
      name: '小明',
      sex: '男',
    }
    return (
      <RefsDemo {...props}></RefsDemo>
      /*<RefsDemo name={props.name} sex={props.sex}></RefsDemo>*/
    )
  }
}

class FormDemo extends Component {
  state = {
    username: '',
    password: '',
  }
  handleSubmit = (e) => {
    e.preventDefault();
    const { username, password } = this.state;
    console.log(username, password, this.sum(1)(2)(3));
  }
  //函数柯里化， 通过函数调用继续返回函数，实现多次接收参数，最后统一处理的编码方式。
  sum = (a) => {
    return (b) => {
      return (c) => {
        return b + c;
      }
    }
  }
  
  saveForm = (key) => {
    return e => {
      this.setState({[key]: e.target.value});
    }
  }
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        用户名：<input onChange={this.saveForm('username')}></input><br/>
        密码：<input onChange={this.saveForm('password')}></input><br/>
        <button>登录</button>
      </form>
    )
  }
}

export default FormDemo;
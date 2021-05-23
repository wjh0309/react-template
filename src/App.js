import logo from './logo.svg';
import './App.css';
import { Component } from 'react';
import PropTypes from 'prop-types';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}
class Test extends Component {
  constructor() {
    super();
    this.state = {
      arr: [1, 2, 3, 4, 5],
      title: '这是标签',
    }
  }
  tabClick = (e) => {
    const el = e.nativeEvent.target;
    this.setState({title: `这是标题${el.id}`});
  }
  
  render() {
    const { arr, title } = this.state;
    const { arg1 } = this.props;
    const { container, myClass } = style;
    console.log(this);
    return (
      <div>
        <h1>{arg1}</h1>
        <ul onClick={this.tabClick} style={container}>
        {
          arr.map((item, index) => {
            return (
              <li id={index} key={index} style={myClass}>{item}</li>
            )
          })
        }
      </ul>
      </div>
    )
  }
  static propTypes = {
    arg1: PropTypes.string,
    arg2: PropTypes.string.isRequired,
    arg3: PropTypes.func
  }
  
  static defaultProps = {
    arg1: '默认标题'
  }
}

function Demo(props) {
  console.log(props)
  return <div></div>
}
class Test1 extends Component{
  render() {
    let args = {
      arg2: '',
      arg3: () => {console.log('测试')},
    }
    return <Demo {...args}></Demo>
  }

}

const style = {
  container: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '200px',
  },
  myClass: {
    listStyle: 'none',
    flex: 1,
    textAlign: 'center',
    border: '1px solid #000',
  }
}

export default Test1;

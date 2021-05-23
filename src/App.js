import logo from './logo.svg';
import './App.css';
import { Component } from 'react';

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
  tabClick(e) {
    const el = e.nativeEvent.target;
    this.setState({title: `这是标题${el.id}`});
  }
  render() {
    const { arr, title } = this.state;
    const { container, myClass } = style;
    return (
      <div>
        <h1>{title}</h1>
        <ul onClick={this.tabClick.bind(this)} style={container}>
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

export default Test;

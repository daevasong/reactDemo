import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Task from './Task';

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
        list: [],
        newTask: '默认值'
    }

}

onChange = (event) => {
    this.setState({
        newTask: event.target.value
    })
}

onCreate = () => {
    this.setState({
        list: this.state.list.concat(this.state.newTask)
    })
}

onDone = (id) => {
    this.setState({
        list: this.state.list.filter((ele, index) => index !== id)
    })
}

render() {
    return (
        <div>
            <div>
                <input value={this.state.newTask} onChange={this.onChange}></input>
                <button onClick={this.onCreate}>增加</button>
            </div>
            <div>
                {
                    this.state.list.map((ele, index) => <Task id={index} content={ele} onDone={this.onDone}/>)
                }
            </div>
        </div>
    )
}
  // render() {
  //   return (
  //     <div className="App">
  //       <header className="App-header">
  //         <img src={logo} className="App-logo" alt="logo" />
  //         <p>
  //           Edit <code>src/App.js</code> and save to reload.
  //         </p>
  //         <a
  //           className="App-link"
  //           href="https://reactjs.org"
  //           target="_blank"
  //           rel="noopener noreferrer"
  //         >
  //           Learn React
  //         </a>
  //       </header>
  //     </div>
  //   );
  // }
}

export default App;

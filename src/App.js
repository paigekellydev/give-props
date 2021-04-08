import './App.css';
import RedRoom from './components/RedRoom';
import { Component } from 'react';
import GreenRoom from './components/GreenRoom'

class App extends Component {
  state = {
    phrase: "HEY FROM THE APP",
    numbers: [1, 2, 3, 4],
    counter: 0
  };

  render() {
    return (
    <div className="App">
      <p>App</p>
        <RedRoom phrase={this.state.phrase} >
          <GreenRoom test="UvU"/>
        </RedRoom >
    </div>
    );
  }
}

export default App;

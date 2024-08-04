### Component Life Cycle in React

#### Overview
Component life cycle in React consists of three main phases: 
1. **Mounting**: Adding the component to the DOM.
2. **Updating**: Changing the component's state or props.
3. **Unmounting**: Removing the component from the DOM.

#### Mounting
The mounting phase involves rendering the component for the first time. The following methods are executed in order:

1. **constructor()**: Initializes the component state.
2. **static getDerivedStateFromProps()**: Updates the state based on initial props.
3. **render()**: Returns JSX to render the component.
4. **componentDidMount()**: Executes after the component is mounted, often used for API calls or setting up subscriptions.

Example:
```javascript
import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class App extends Component {
  constructor(props) {
    super(props);
    console.log('I am the constructor and I will be the first to run.');
    this.state = { firstName: '' };
  }

  static getDerivedStateFromProps(props, state) {
    console.log('I am getDerivedStateFromProps and I will be the second to run.');
    return null;
  }

  componentDidMount() {
    console.log('I am componentDidMount and I will be last to run.');
  }

  render() {
    console.log('I am render and I will be the third to run.');
    return (
      <div className='App'>
        <h1>React Component Life Cycle</h1>
      </div>
    );
  }
}

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);
```

#### Updating
The updating phase occurs when a component's state or props change. Methods executed in this phase include:

1. **static getDerivedStateFromProps()**: Updates the state based on new props.
2. **shouldComponentUpdate()**: Determines whether the component should update (returns a boolean).
3. **render()**: Renders the component with updated state or props.
4. **getSnapshotBeforeUpdate()**: Captures some information before the DOM is updated.
5. **componentDidUpdate()**: Executes after the component's updates are flushed to the DOM.

Example:
```javascript
import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class App extends Component {
  constructor(props) {
    super(props);
    console.log('I am the constructor and I will be the first to run.');
    this.state = { firstName: 'John', day: 1 };
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log(nextProps, nextState);
    return nextState.day <= 31;
  }

  doChallenge = () => {
    this.setState({ day: this.state.day + 1 });
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.day === 30) {
      this.setState({ congratulate: 'Congratulations, Challenge has been completed' });
    }
    console.log(prevState, prevProps);
  }

  render() {
    return (
      <div className='App'>
        <h1>React Component Life Cycle</h1>
        <button onClick={this.doChallenge}>Do Challenge</button>
        <p>Challenge: Day {this.state.day}</p>
        {this.state.congratulate && <h2>{this.state.congratulate}</h2>}
      </div>
    );
  }
}

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);
```

#### Unmounting
The unmounting phase removes the component from the DOM. The primary method in this phase is:

1. **componentWillUnmount()**: Executes right before the component is removed from the DOM, used for cleanup tasks like invalidating timers, canceling network requests, or cleaning up subscriptions.

Example:
```javascript
import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class App extends Component {
  componentWillUnmount() {
    console.log('Component will unmount');
  }

  render() {
    return (
      <div className='App'>
        <h1>React Component Life Cycle</h1>
      </div>
    );
  }
}

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);

// Later, when you want to unmount the component
ReactDOM.unmountComponentAtNode(rootElement);
```

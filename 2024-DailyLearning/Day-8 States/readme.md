### Day 8: State in React

#### What is State?
- State represents the particular condition of a component at a specific time.
- State is an object that determines how a component renders and behaves.
- Changing the state causes the component to re-render.

#### Setting Initial State
- Initial state is set in the constructor or directly within the class component.
- State should not be mutated directly. Instead, use the `setState()` method.

#### Example: Basic State Setup
```jsx
class App extends React.Component {
  state = { count: 0 };

  render() {
    const count = this.state.count;
    return (
      <div className='App'>
        <h1>{count}</h1>
      </div>
    );
  }
}
```
- Access state values using `this.state.propertyName`.

#### Updating State with Methods
- Define methods to update the state using `this.setState()`.

#### Example: Increment/Decrement Counter
```jsx
class App extends React.Component {
  state = { count: 0 };

  addOne = () => {
    this.setState({ count: this.state.count + 1 });
  }

  minusOne = () => {
    this.setState({ count: this.state.count - 1 });
  }

  render() {
    const count = this.state.count;
    return (
      <div className='App'>
        <h1>{count}</h1>
        <button onClick={this.addOne}>+1</button>
        <button onClick={this.minusOne}>-1</button>
      </div>
    );
  }
}
```

#### Example: Toggle Between Images
```jsx
class App extends React.Component {
  state = {
    image: 'catURL'
  };

  changeAnimal = () => {
    const catURL = 'catURL';
    const dogURL = 'dogURL';
    this.setState({ image: this.state.image === catURL ? dogURL : catURL });
  }

  render() {
    return (
      <div className='App'>
        <h1>30 Days Of React</h1>
        <div className='animal'>
          <img src={this.state.image} alt='animal' />
        </div>
        <button onClick={this.changeAnimal}>Change</button>
      </div>
    );
  }
}
```

#### Exercises

**Level 1**
1. What is state in React?
   - State is an object that holds information that influences the output of a render.
2. What is the difference between props and state in React?
   - Props are immutable and passed from parent to child, whereas state is mutable and local to the component.
3. How do you access state in a React component?
   - Access state using `this.state.propertyName`.
4. How do you set a state in a React component?
   - Set state using `this.setState({ propertyName: newValue })`.

**Level 2**
- Implement a button to change the background color of the page.
- Create a random country selector for holiday destinations.

---


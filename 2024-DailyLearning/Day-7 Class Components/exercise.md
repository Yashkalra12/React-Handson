
# JavaScript and React Concepts

## Table of Contents
1. [Writing a Pure JavaScript Function](#writing-a-pure-javascript-function)
2. [Inheritance in JavaScript](#inheritance-in-javascript)
3. [Class-Based React Components](#class-based-react-components)
4. [Functional vs. Class-Based React Components](#functional-vs-class-based-react-components)
5. [Use Cases for Class-Based Components](#use-cases-for-class-based-components)
6. [Frequently Used Component Type](#frequently-used-component-type)
7. [React Lifecycle (Not Covered)](#react-lifecycle-not-covered)
8. [State in React (Not Covered)](#state-in-react-not-covered)

## Writing a Pure JavaScript Function

A pure JavaScript function is one that:

1. Given the same inputs, always returns the same output.
2. Produces no side effects (e.g., modifying global variables or performing I/O operations).

Example:

```javascript
function add(a, b) {
  return a + b;
}
```

This function is pure because it consistently returns the sum of `a` and `b` without modifying any external state or causing side effects.

## Inheritance in JavaScript

Inheritance in JavaScript allows one class (child) to inherit properties and methods from another class (parent). This is typically done using the `extends` keyword.

Example:

```javascript
class Parent {
  constructor(name) {
    this.name = name;
  }

  greet() {
    return `Hello, my name is ${this.name}`;
  }
}

class Child extends Parent {
  constructor(name, age) {
    super(name); // Call the parent class constructor
    this.age = age;
  }

  introduce() {
    return `${super.greet()} and I am ${this.age} years old.`;
  }
}

const child = new Child('Yash', 20);
console.log(child.introduce());
```

## Class-Based React Components

Class-based React components are ES6 classes that extend from `React.Component` and must contain a `render` method which returns the JSX to be rendered.

Example:

```javascript
import React, { Component } from 'react';

class MyComponent extends Component {
  render() {
    return <div>Hello, World!</div>;
  }
}

export default MyComponent;
```

## Functional vs. Class-Based React Components

### Functional Components
- Simpler and easier to write.
- Use functions and hooks for state and lifecycle management.
- Example:

```javascript
import React from 'react';

const MyComponent = () => {
  return <div>Hello, World!</div>;
};

export default MyComponent;
```

### Class-Based Components
- Use ES6 class syntax.
- Require the `render` method to return JSX.
- Have access to lifecycle methods without hooks.
- Example:

```javascript
import React, { Component } from 'react';

class MyComponent extends Component {
  render() {
    return <div>Hello, World!</div>;
  }
}

export default MyComponent;
```

## Use Cases

## Use Cases for Class-Based Components

Class-based components are useful when:

1. **State Management**: When you need to manage complex state and lifecycle methods.
2. **Legacy Code**: Maintaining older codebases where class-based components were predominantly used.
3. **Lifecycle Methods**: When you need to use lifecycle methods directly without hooks.

Example:

```javascript
import React, { Component } from 'react';

class Timer extends Component {
  constructor(props) {
    super(props);
    this.state = { seconds: 0 };
  }

  componentDidMount() {
    this.interval = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  tick() {
    this.setState(state => ({
      seconds: state.seconds + 1
    }));
  }

  render() {
    return (
      <div>
        Seconds: {this.state.seconds}
      </div>
    );
  }
}

export default Timer;
```

## Frequently Used Component Type

**Functional Components** are more frequently used due to their simplicity and the advent of React Hooks, which allow functional components to manage state and lifecycle methods.

## React Lifecycle (Not Covered)

The React component lifecycle includes several methods that are invoked at different stages of a component's existence, such as mounting, updating, and unmounting.

**Lifecycle Methods (Class-Based Components):**
- `componentDidMount()`
- `shouldComponentUpdate()`
- `componentDidUpdate()`
- `componentWillUnmount()`

**Hooks (Functional Components):**
- `useEffect()`

Detailed explanation of each lifecycle method and hook is beyond this document's scope but can be covered separately.

## State in React (Not Covered)

**State** in React is an object that holds dynamic data and determines the component's behavior and rendering. For class-based components, state is managed using `this.state` and `this.setState()`. For functional components, the `useState` hook is used.

**Class-Based State Example:**

```javascript
import React, { Component } from 'react';

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
  }

  increment = () => {
    this.setState({ count: this.state.count + 1 });
  }

  render() {
    return (
      <div>
        <p>Count: {this.state.count}</p>
        <button onClick={this.increment}>Increment</button>
      </div>
    );
  }
}

export default Counter;
```

**Functional State Example:**

```javascript
import React, { useState } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  }

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={increment}>Increment</button>
    </div>
  );
}

export default Counter;


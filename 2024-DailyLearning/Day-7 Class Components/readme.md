### Class Components in React

*Yash Kalra, July 15, 2024*

---

#### Introduction

In the previous sections, we covered **JSX**, **functional components**, and **props**. In this section, we will explore **class components** or **stateful components**. Before React version 16.8.0, class-based components were the only way to manage state and lifecycle methods. However, React Hooks introduced in version 16.8.0 allow functional components to have state and lifecycle features. In this **30 Days Of React** challenge, we will cover both the old class-based components and the newer functional components with Hooks. Understanding class components is crucial for working with legacy code and grasping React fundamentals.

#### Creating Class Components

Class components are created using JavaScript classes that extend `React.Component`. Here’s how to define a basic class component:

```javascript
class Component {
  constructor(props) {}
}

class Child extends Component {
  constructor(props) {
    super(props);
  }
}
```

**Functional Component Example:**

```javascript
const Header = () => (
  <header>
    <div className='header-wrapper'>
      <h1>Welcome to 30 Days Of React</h1>
      <h2>Getting Started React</h2>
      <h3>JavaScript Library</h3>
      <p>Asabeneh Yetayeh</p>
      <small>Oct 6, 2020</small>
    </div>
  </header>
);
```

**Class Component Conversion:**

```javascript
class Header extends React.Component {
  render() {
    return (
      <header>
        <div className='header-wrapper'>
          <h1>Welcome to 30 Days Of React</h1>
          <h2>Getting Started React</h2>
          <h3>JavaScript Library</h3>
          <p>Asabeneh Yetayeh</p>
          <small>Oct 7, 2020</small>
        </div>
      </header>
    );
  }
}
```

#### Adding a Constructor in Class Components

The constructor method is used for initializing state and binding methods:

```javascript
class Header extends React.Component {
  constructor(props) {
    super(props);
    // Initialization code
  }
  render() {
    return (
      <header>
        <div className='header-wrapper'>
          <h1>Welcome to 30 Days Of React</h1>
          <h2>Getting Started React</h2>
          <h3>JavaScript Library</h3>
          <p>Asabeneh Yetayeh</p>
          <small>Oct 7, 2020</small>
        </div>
      </header>
    );
  }
}
```

#### Converting Functional Components to Class Components

Here’s how to convert various functional components to class-based components:

**TechList Component:**

- *Functional Component:*

  ```javascript
  const TechList = () => {
    const techs = ['HTML', 'CSS', 'JavaScript'];
    const techsFormatted = techs.map((tech) => <li key={tech}>{tech}</li>);
    return techsFormatted;
  };
  ```

- *Class Component:*

  ```javascript
  class TechList extends React.Component {
    constructor(props) {
      super(props);
    }
    render() {
      const techs = ['HTML', 'CSS', 'JavaScript'];
      const techsFormatted = techs.map((tech) => <li key={tech}>{tech}</li>);
      return techsFormatted;
    }
  }
  ```

**Main Component:**

- *Functional Component:*

  ```javascript
  const Main = () => (
    <main>
      <div className='main-wrapper'>
        <p>Prerequisite to get started react.js:</p>
        <ul>
          <TechList />
        </ul>
      </div>
    </main>
  );
  ```

- *Class Component:*

  ```javascript
  class Main extends React.Component {
    constructor(props) {
      super(props);
    }
    render() {
      return (
        <main>
          <div className='main-wrapper'>
            <p>Prerequisite to get started react.js:</p>
            <ul>
              <TechList />
            </ul>
          </div>
        </main>
      );
    }
  }
  ```

**Footer Component:**

- *Functional Component:*

  ```javascript
  const Footer = () => (
    <footer>
      <div className='footer-wrapper'>
        <p>Copyright 2020</p>
      </div>
    </footer>
  );
  ```

- *Class Component:*

  ```javascript
  class Footer extends React.Component {
    constructor(props) {
      super(props);
    }
    render() {
      return (
        <footer>
          <div className='footer-wrapper'>
            <p>Copyright 2020</p>
          </div>
        </footer>
      );
    }
  }
  ```

**App Component:**

- *Functional Component:*

  ```javascript
  const App = () => (
    <div className='app'>
      <Header />
      <Main />
      <Footer />
    </div>
  );
  ```

- *Class Component:*

  ```javascript
  class App extends React.Component {
    constructor(props) {
      super(props);
    }
    render() {
      return (
        <div className='app'>
          <Header />
          <Main />
          <Footer />
        </div>
      );
    }
  }
  ```

**Putting All Class Components Together:**

```javascript
import React from 'react';
import ReactDOM from 'react-dom';

class Header extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <header>
        <div className='header-wrapper'>
          <h1>Welcome to 30 Days Of React</h1>
          <h2>Getting Started React</h2>
          <h3>JavaScript Library</h3>
          <p>Asabeneh Yetayeh</p>
          <small>Oct 7, 2020</small>
        </div>
      </header>
    );
  }
}

class TechList extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const techs = ['HTML', 'CSS', 'JavaScript'];
    const techsFormatted = techs.map((tech) => <li key={tech}>{tech}</li>);
    return techsFormatted;
  }
}

class Main extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <main>
        <div className='main-wrapper'>
          <p>Prerequisite to get started react.js:</p>
          <ul>
            <TechList />
          </ul>
        </div>
      </main>
    );
  }
}

class Footer extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <footer>
        <div className='footer-wrapper'>
          <p>Copyright {this.props.date.getFullYear()}</p>
        </div>
      </footer>
    );
  }
}

class App extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const data = {
      welcome: 'Welcome to 30 Days Of React',
      title: 'Getting Started React',
      subtitle: 'JavaScript Library',
      author: {
        firstName: 'Asabeneh',
        lastName: 'Yetayeh',
      },
      date: 'Oct 7, 2020',
    };
    const techs = ['HTML', 'CSS', 'JavaScript'];

    return (
      <div className='app'>
        <Header data={data} />
        <Main techs={techs} />
        <Footer date={new Date()} />
      </div>
    );
  }
}

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);
```

#### Accessing Props in Class Components

Props are used to pass data from parent to child components. You can access props in class components using `this.props`:

```javascript
class Header extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const {
      welcome,
      title,
      subtitle,
      author: { firstName, lastName },
      date,
    } = this.props.data;

    return (
      <header>
        <div className='header-wrapper'>
          <h1>{welcome}</h1>
          <h2>{title}</h2>
          <h3>{subtitle}</h3>
          <p>{firstName} {lastName}</p>
          <small>{date}</small>
        </div>
      </header>
    );
  }
}
```

You can also use destructuring to make code cleaner:

```javascript
class Header extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const {
      welcome,
      title,
      subtitle,
      author: { firstName, lastName },
      date,
    } = this.props.data;

    return (
      <header>
        <div className='header-wrapper'>
          <h1>{welcome}</h1>
          <h2>{title}</h2>
          <h3>{subtitle}</h3>
          <p>{firstName} {lastName}</p>
          <small>{date}</small>
        </div>
      </header>
    );
  }
}
```

**Using Class Components with Methods**

Class components can

 have methods that can be used in event handling and other logic. Methods must be bound to the component instance:

```javascript
class Button extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    alert('Button clicked!');
  }
  render() {
    return <button onClick={this.handleClick}>Click me</button>;
  }
}
```

#### Summary

- **Class components** allow the management of state and lifecycle methods.
- **Constructor** initializes props and state.
- **render()** method returns the JSX to be rendered.
- **this.props** accesses props passed from the parent component.
- **State management** and **lifecycle methods** are only available in class components (before React 16.8.0).
- **Event handling** requires method binding to the class instance.

In the next section, we will cover **state** management in class components, which will introduce the concept of mutable data in React components.

---

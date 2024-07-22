### Day 9: Conditional Rendering

**Conditional Rendering Overview**
- Conditional rendering allows rendering different JSX or components based on certain conditions.
- It can be implemented using `if-else` statements, the ternary operator, and the `&&` operator.

**1. Conditional Rendering using `if-else`**
- Example:
  ```jsx
  class App extends React.Component {
    state = {
      loggedIn: false,
    };

    render() {
      let status;
      if (this.state.loggedIn) {
        status = <h3>Welcome to 30 Days Of React</h3>;
      } else {
        status = <h3>Please Login</h3>;
      }
      return <div>{status}</div>;
    }
  }
  ```

**2. Toggle User Status with `if-else`**
- Add a method to toggle the user status and a button to handle login/logout events.
- Example:
  ```jsx
  class App extends React.Component {
    state = {
      loggedIn: false,
    };

    handleLogin = () => {
      this.setState({ loggedIn: !this.state.loggedIn });
    };

    render() {
      let status;
      let buttonText;
      if (this.state.loggedIn) {
        status = <h1>Welcome to 30 Days Of React</h1>;
        buttonText = 'Logout';
      } else {
        status = <h3>Please Login</h3>;
        buttonText = 'Login';
      }

      return (
        <div>
          {status}
          <button onClick={this.handleLogin}>{buttonText}</button>
        </div>
      );
    }
  }
  ```

**3. Conditional Rendering using the Ternary Operator**
- Example:
  ```jsx
  class App extends React.Component {
    state = {
      loggedIn: false,
    };

    handleLogin = () => {
      this.setState({ loggedIn: !this.state.loggedIn });
    };

    render() {
      const status = this.state.loggedIn ? (
        <h1>Welcome to 30 Days Of React</h1>
      ) : (
        <h3>Please Login</h3>
      );

      return (
        <div>
          {status}
          <button onClick={this.handleLogin}>
            {this.state.loggedIn ? 'Logout' : 'Login'}
          </button>
        </div>
      );
    }
  }
  ```

**4. Conditional Rendering using Components**
- Create separate components for different states.
- Example:
  ```jsx
  const Login = () => <h3>Please Login</h3>;
  const Welcome = () => <h1>Welcome to 30 Days Of React</h1>;

  class App extends React.Component {
    state = {
      loggedIn: false,
    };

    handleLogin = () => {
      this.setState({ loggedIn: !this.state.loggedIn });
    };

    render() {
      const status = this.state.loggedIn ? <Welcome /> : <Login />;

      return (
        <div>
          {status}
          <button onClick={this.handleLogin}>
            {this.state.loggedIn ? 'Logout' : 'Login'}
          </button>
        </div>
      );
    }
  }
  ```

**5. Conditional Rendering using the `&&` Operator**
- Example:
  ```jsx
  class App extends React.Component {
    state = {
      loggedIn: false,
      techs: ['HTML', 'CSS', 'JS'],
    };

    handleLogin = () => {
      this.setState({ loggedIn: !this.state.loggedIn });
    };

    render() {
      const { loggedIn, techs } = this.state;

      return (
        <div>
          <h1>{loggedIn && 'Welcome to 30 Days Of React'}</h1>
          <button onClick={this.handleLogin}>
            {loggedIn ? 'Logout' : 'Login'}
          </button>
          {techs.length === 3 && <p>You have all the prerequisites for React</p>}
          {!loggedIn && <p>Please login to access more information</p>}
        </div>
      );
    }
  }
  ```

**6. Rendering Time and Greeting**
- Example:
  ```jsx
  class App extends React.Component {
    state = {
      loggedIn: false,
      message: 'Click show time or greet people',
    };

    handleLogin = () => {
      this.setState({ loggedIn: !this.state.loggedIn });
    };

    showDate = () => {
      const time = new Date();
      const message = `${time.getMonth() + 1}/${time.getDate()}/${time.getFullYear()}`;
      this.setState({ message });
    };

    greetPeople = () => {
      this.setState({ message: 'Welcome to 30 Days Of React Challenge' });
    };

    render() {
      return (
        <div>
          <button onClick={this.showDate}>Show Time</button>
          <button onClick={this.greetPeople}>Greet People</button>
          <button onClick={this.handleLogin}>
            {this.state.loggedIn ? 'Logout' : 'Login'}
          </button>
          <p>{this.state.message}</p>
        </div>
      );
    }
  }
  ```

**Exercises**

**Exercises: Level 1**
1. **What is conditional rendering?**
   - Conditional rendering is displaying different UI elements or components based on specific conditions.

2. **How do you implement conditional rendering?**
   - Implement conditional rendering using `if-else` statements, the ternary operator, and the `&&` operator.

3. **Which method of conditional rendering do you prefer to use?**
   - The preferred method depends on the complexity of the condition. For simple conditions, the ternary operator is concise. For more complex conditions, `if-else` statements or creating separate components might be more readable.

**Exercises: Level 2**
1. **Make a single page application which changes the body of the background based on the season of the year (Autumn, Winter, Spring, Summer).**
   - Use `Date` to determine the current month and conditionally apply a background style accordingly.
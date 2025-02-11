### Notes on React Events

**1. What is an Event?**
An event is an action or occurrence recognized by a software, such as clicking a button, hovering over an image, or pressing a key.

**2. React vs. HTML Event Handling:**
- **Naming**: React uses camelCase for event names (`onClick`, `onChange`), whereas HTML uses lowercase (`onclick`, `onchange`).
- **Event Handler**: In React, pass a function as the event handler. In HTML, use a string of JavaScript code.

**3. Preventing Default Behavior:**
- **HTML**: `onclick="return false"`
- **React**: Use `e.preventDefault()` inside the event handler.

**4. Common Mouse and Keyboard Events:**
- **Mouse Events**: `onClick`, `onMouseEnter`, `onMouseLeave`, `onMouseOut`, `onMouseMove`
- **Keyboard Events**: `onKeyDown`, `onKeyPress`, `onKeyUp`

**5. Examples of Event Handling in React:**

```jsx
// Functional Component
import React from 'react';

const App = () => {
  const handleClick = () => alert('Welcome to 30 Days Of React Challenge');
  
  return <button onClick={handleClick}>Click Me</button>;
};

// Class Component
import React, { Component } from 'react';

class App extends Component {
  handleClick = () => {
    alert('Welcome to 30 Days Of React Challenge');
  }

  render() {
    return <button onClick={this.handleClick}>Click Me</button>;
  }
}
```

**6. Handling Events:**

```jsx
import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class App extends Component {
  state = {
    firstName: '',
    message: '',
  }

  handleClick = () => {
    this.setState({ message: 'Welcome to the world of events' });
  }

  handleMouseMove = () => {
    this.setState({ message: 'Mouse is moving' });
  }

  handleChange = (e) => {
    this.setState({ firstName: e.target.value, message: e.target.value });
  }

  handleKeyPress = (e) => {
    this.setState({ message: `${e.target.value} has been pressed and the keycode is ${e.charCode}` });
  }

  handleBlur = () => {
    this.setState({ message: 'Input field has been blurred' });
  }

  handleCopy = () => {
    this.setState({ message: 'Using 30 Days Of React for commercial purpose is not allowed' });
  }

  render() {
    return (
      <div>
        <h1>Welcome to the World of Events</h1>

        <button onClick={this.handleClick}>Click Me</button>
        <button onMouseMove={this.handleMouseMove}>Move mouse on me</button>
        <p onCopy={this.handleCopy}>Check copy right permission by copying this text</p>

        <p>{this.state.message}</p>

        <label>Test for onKeyPress Event:</label>
        <input type='text' onKeyPress={this.handleKeyPress} />
        
        <br />

        <label>Test for onBlur Event:</label>
        <input type='text' onBlur={this.handleBlur} />

        <form onSubmit={this.handleSubmit}>
          <div>
            <label htmlFor='firstName'>First Name:</label>
            <input onChange={this.handleChange} name='firstName' value={this.state.firstName} />
          </div>

          <div>
            <input type='submit' value='Submit' />
          </div>
        </form>
      </div>
    );
  }
}

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);
```

**7. Exercises:**

- **Level 1**:
  - Define an event.
  - Compare HTML and React events.
  - List 4 keyboard events and 8 mouse events.
  - Describe common mouse and keyboard events.
  - Specify events for input and form elements.
  - Display viewport coordinates on mouse move.
  - Differentiate `onInput`, `onChange`, and `onBlur`.
  - Location of `onSubmit` event.

- **Level 2**:
  - Implement behavior using `onMouseEnter`.

Here are solutions for the exercises related to React events:

### Level 1

1. **What is an event?**
   An event is an action or occurrence recognized by software, such as user interactions (clicks, key presses) or system notifications.

2. **Difference between an HTML element event and React event:**
   - **HTML**: Events are in lowercase and defined as attributes in HTML tags. Example: `<button onclick="myFunction()">Click me</button>`.
   - **React**: Events use camelCase naming and are passed as functions. Example: `<button onClick={myFunction}>Click me</button>`.

3. **Write at least 4 keyboard events:**
   - `onKeyDown`
   - `onKeyPress`
   - `onKeyUp`
   - `onInput` (also triggers for text input)

4. **Write at least 8 mouse events:**
   - `onClick`
   - `onMouseEnter`
   - `onMouseLeave`
   - `onMouseOut`
   - `onMouseOver`
   - `onMouseMove`
   - `onContextMenu`
   - `onDoubleClick`

5. **What are the most common mouse and keyboard events?**
   - **Mouse**: `onClick`, `onMouseEnter`, `onMouseLeave`, `onMouseMove`
   - **Keyboard**: `onKeyDown`, `onKeyPress`, `onKeyUp`

6. **Write an event specific to input element:**
   - `onChange`

7. **Write an event specific to form element:**
   - `onSubmit`

8. **Display the coordinate of the viewport when a mouse is moving on the body:**

   ```jsx
   import React, { Component } from 'react';

   class App extends Component {
     handleMouseMove = (e) => {
       console.log(`X: ${e.clientX}, Y: ${e.clientY}`);
     }

     render() {
       return (
         <div onMouseMove={this.handleMouseMove} style={{ height: '100vh' }}>
           Move your mouse over this area to see the coordinates in the console.
         </div>
       );
     }
   }

   export default App;
   ```

9. **What is the difference between `onInput`, `onChange`, and `onBlur`?**
   - **`onInput`**: Triggered every time the value of an input field changes, including during text entry.
   - **`onChange`**: Triggered when the value of an input field is committed (e.g., when a user types something and then focuses out of the field).
   - **`onBlur`**: Triggered when an input field loses focus.

10. **Where do we put the `onSubmit` event?**
    The `onSubmit` event is used on a `<form>` element to handle form submission.

### Level 2

**Implement the following using `onMouseEnter` event:**

```jsx
import React, { Component } from 'react';

class App extends Component {
  handleMouseEnter = () => {
    console.log('Mouse has entered the element');
  }

  render() {
    return (
      <div
        onMouseEnter={this.handleMouseEnter}
        style={{ width: '200px', height: '200px', border: '1px solid black' }}
      >
        Hover over this box
      </div>
    );
  }
}

export default App;
```

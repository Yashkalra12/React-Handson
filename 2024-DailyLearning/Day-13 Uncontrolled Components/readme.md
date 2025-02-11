

### Uncontrolled Components

**Definition:**
- Uncontrolled components allow you to access the form values directly from the DOM using refs, similar to traditional HTML form handling.

**Example:**
```jsx
import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class App extends Component {
  firstName = React.createRef();

  handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.firstName.current.value);
  }

  render() {
    return (
      <div className='App'>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor='firstName'>First Name: </label>
          <input
            type='text'
            id='firstName'
            name='firstName'
            placeholder='First Name'
            ref={this.firstName}
          />
          <button type='submit'>Submit</button>
        </form>
      </div>
    );
  }
}

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);
```

**Getting Multiple Inputs:**
```jsx
import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class App extends Component {
  firstName = React.createRef();
  lastName = React.createRef();
  country = React.createRef();
  title = React.createRef();

  handleSubmit = (e) => {
    e.preventDefault();

    const data = {
      firstName: this.firstName.current.value,
      lastName: this.lastName.current.value,
      title: this.title.current.value,
      country: this.country.current.value,
    };
    console.log(data);
  }

  render() {
    return (
      <div className='App'>
        <h3>Add Student</h3>
        <form onSubmit={this.handleSubmit}>
          <div>
            <input type='text' name='firstName' placeholder='First Name' ref={this.firstName} />
          </div>
          <div>
            <input type='text' name='lastName' placeholder='Last Name' ref={this.lastName} />
          </div>
          <div>
            <input type='text' name='country' placeholder='Country' ref={this.country} />
          </div>
          <div>
            <input type='text' name='title' placeholder='Title' ref={this.title} />
          </div>
          <button className='btn btn-success'>Submit</button>
        </form>
      </div>
    );
  }
}

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);
```

**Notes:**
- Controlled inputs are preferred as recommended in React's official documentation.
- Use refs to access input values in uncontrolled components.
- Avoid direct DOM manipulation with pure JavaScript; let React handle the DOM.

---

### Exercises: Level 1

1. **What is a controlled input?**
   - A controlled input is an input element whose value is controlled by React state.

2. **What is an uncontrolled input?**
   - An uncontrolled input is an input element where the value is handled by the DOM, accessed via refs.

3. **How do you get the content of a certain HTML element in React?**
   - By using `React.createRef()` and accessing the `current.value`.

4. **Why is it not a good idea to touch the DOM directly in React?**
   - Direct DOM manipulation bypasses React's virtual DOM, leading to potential inconsistencies and bugs.

5. **What is most frequently used in React? Controlled or Uncontrolled input?**
   - Controlled input.

6. **What do you need to write uncontrolled input?**
   - Use `React.createRef()` to reference DOM elements.

7. **Does state require to write uncontrolled input?**
   - No, uncontrolled inputs do not require state.

8. **When do you use uncontrolled input?**
   - When you need simple form values without the overhead of state management.

9. **When do you use controlled input?**
   - When you need to fully manage and validate form values within React.

10. **Do you use a controlled or uncontrolled input to validate form input fields?**
    - Controlled input.

---

**Congratulations on completing the exercises!** 🎉

---
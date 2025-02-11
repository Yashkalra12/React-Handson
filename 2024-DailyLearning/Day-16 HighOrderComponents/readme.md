## Higher Order Component (HOC) in React

### Key Concepts

- **Higher Order Function (HOF)**: In JavaScript, a HOF is a function that takes another function as a parameter or returns another function.
- **Higher Order Component (HOC)**: Similar to HOF, a HOC is a function that takes a component and returns a new component.

### Example of HOC

1. **Basic HOC**:
```javascript
import React from 'react';

const higherOrderComponent = (Component) => {
  return (props) => {
    return <Component {...props} />;
  };
};
```

2. **Using HOC with Styles**:
```javascript
import React from 'react';

const Button = ({ onClick, text, style }) => {
  return (
    <button onClick={onClick} style={style}>
      {text}
    </button>
  );
};

const buttonWithStyle = (CompParam) => {
  const buttonStyles = {
    backgroundColor: '#61dbfb',
    padding: '10px 25px',
    border: 'none',
    borderRadius: 5,
    margin: 3,
    cursor: 'pointer',
    fontSize: 18,
    color: 'white',
  };
  return (props) => {
    return <CompParam {...props} style={buttonStyles} />;
  };
};

const NewButton = buttonWithStyle(Button);

class App extends React.Component {
  render() {
    return (
      <div className='App'>
        <Button text='No Style' />
        <NewButton text='Styled Button' />
      </div>
    );
  }
}

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);
```

3. **HOC with Dynamic Styles**:
```javascript
import React from 'react';

const Button = ({ onClick, text, style }) => {
  return (
    <button onClick={onClick} style={style}>
      {text}
    </button>
  );
};

const buttonWithStyles = (CompParam, name = 'default') => {
  const colors = [
    { name: 'default', backgroundColor: '#e7e7e7', color: '#000000' },
    { name: 'react', backgroundColor: '#61dbfb', color: '#ffffff' },
    { name: 'success', backgroundColor: '#4CAF50', color: '#ffffff' },
    { name: 'info', backgroundColor: '#2196F3', color: '#ffffff' },
    { name: 'warning', backgroundColor: '#ff9800', color: '#ffffff' },
    { name: 'danger', backgroundColor: '#f44336', color: '#ffffff' },
  ];
  const { backgroundColor, color } = colors.find((c) => c.name === name);

  const buttonStyles = {
    backgroundColor,
    padding: '10px 45px',
    border: 'none',
    borderRadius: 3,
    margin: 3,
    cursor: 'pointer',
    fontSize: '1.25rem',
    color,
  };
  return (props) => {
    return <CompParam {...props} style={buttonStyles} />;
  };
};

const NewButton = buttonWithStyles(Button);
const ReactButton = buttonWithStyles(Button, 'react');
const InfoButton = buttonWithStyles(Button, 'info');
const SuccessButton = buttonWithStyles(Button, 'success');
const WarningButton = buttonWithStyles(Button, 'warning');
const DangerButton = buttonWithStyles(Button, 'danger');

class App extends React.Component {
  render() {
    return (
      <div className='App'>
        <Button text='No Style' onClick={() => alert('I am not styled yet')} />
        <NewButton text='Styled Button' onClick={() => alert('I am the default style')} />
        <ReactButton text='React' onClick={() => alert('I have react color')} />
        <InfoButton text='Info' onClick={() => alert('I am styled with info color')} />
        <SuccessButton text='Success' onClick={() => alert('I am successful')} />
        <WarningButton text='Warning' onClick={() => alert('I warn you many times')} />
        <DangerButton text='Danger' onClick={() => alert('Oh no, you cannot restore it')} />
      </div>
    );
  }
}

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);
```

### Benefits of HOCs

- **Code Reusability**: HOCs allow you to reuse component logic.
- **Enhancement**: HOCs can enhance components by adding additional functionality or styles.
- **Abstraction**: HOCs abstract the common functionalities that can be applied to multiple components.

### Exercises

#### Level 1

1. **What is a higher order function?**
   - A higher order function is a function that takes another function as an argument or returns another function.

2. **What is a Higher Order Component?**
   - A Higher Order Component is a function that takes a component and returns a new component with additional props or functionality.

3. **What is the difference between higher order function and higher order component?**
   - A higher order function operates on functions, whereas a higher order component operates on React components.

4. **A higher order component can allow us to enhance a component. (True or False)**
   - True

#### Level 2

**Make a higher order component which can handle all input types:**

```javascript
import React from 'react';

const withInputHandling = (Component) => {
  return (props) => {
    const handleChange = (event) => {
      const { name, value } = event.target;
      console.log(`${name}: ${value}`);
    };

    return <Component {...props} onChange={handleChange} />;
  };
};

const Input = ({ type, name, onChange }) => {
  return <input type={type} name={name} onChange={onChange} />;
};

const TextInput = withInputHandling(Input);
const CheckboxInput = withInputHandling(Input);

const App = () => {
  return (
    <div>
      <TextInput type="text" name="textInput" />
      <CheckboxInput type="checkbox" name="checkboxInput" />
    </div>
  );
};

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);
```
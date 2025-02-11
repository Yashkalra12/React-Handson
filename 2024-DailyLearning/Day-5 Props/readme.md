### Props in Functional Component


![Day-5](day5.png)


**July 11, 2024 - Yash Kalra**

**What are props?**
Props (short for properties) in React are used to pass data from one component to another, typically from a parent component to a child component. They act as a data carrier or a means to transport data.

**Using props in components**
Props are similar to function parameters. They allow us to pass dynamic data to a component.

**Function vs Component Syntax**

```javascript
// Function syntax
const getUserInfo = (firstName, lastName, country) => {
  return `${firstName} ${lastName}. Lives in ${country}.`
}

// Calling a function
getUserInfo('Yash', 'Kalra', 'India')

// Component syntax
const User = (props) => {
  return (
    <div>
      <h1>{props.firstName} {props.lastName}</h1>
      <small>{props.country}</small>
    </div>
  )
}

// Instantiating a component
<User firstName='Yash' lastName='Kalra' country='India' />
```

**Passing Data as Props**
Instead of injecting data directly into a component, we can pass it as props.

**Example with props object**
```javascript
import React from 'react'
import ReactDOM from 'react-dom'

// Header Component
const Header = (props) => {
  console.log(props) // {welcome: 'Welcome to 30 Days Of React'}
  return (
    <header>
      <div className='header-wrapper'>
        <h1>{props.welcome}</h1>
      </div>
    </header>
  )
}

// App Component
const App = () => {
  return (
    <div className='app'>
      <Header welcome='Welcome to 30 Days Of React' />
    </div>
  )
}

const rootElement = document.getElementById('root')
ReactDOM.render(<App />, rootElement)
```

**Different Data Types for Props**

1. **String Props**
```javascript
<Header
  welcome='Welcome to 30 Days Of React'
  title='Getting Started with React'
  subtitle='JavaScript Library'
  firstName='Yash'
  lastName='Kalra'
  date='July 11, 2024'
/>
```

2. **Number Props**
```javascript
const Age = (props) => <div>The person is {props.age} years old.</div>
const Weight = (props) => <p>The weight of the object on earth is {props.weight} N.</p>

// App Component
const App = () => {
  const age = 2024 - 2000
  const weight = 9.81 * 75

  return (
    <div className='app'>
      <Age age={age} />
      <Weight weight={weight} />
    </div>
  )
}
```

3. **Boolean Props**
```javascript
const Status = (props) => {
  let status = props.status ? 'Old enough to drive' : 'Too young for driving'
  return <p>{status}</p>
}

// App Component
const App = () => {
  const age = 2024 - 2010
  const status = age >= 18

  return (
    <div className='app'>
      <Status status={status} />
    </div>
  )
}
```

4. **Array Props**
```javascript
const Skills = (props) => {
  const skillList = props.skills.map((skill) => <li key={skill}>{skill}</li>)
  return <ul>{skillList}</ul>
}

// App Component
const App = () => (
  <div className='app'>
    <Skills skills={['HTML', 'CSS', 'JavaScript']} />
  </div>
)
```

5. **Object Props**
```javascript
const Header = (props) => {
  const { welcome, title, subtitle, author, date } = props.data
  const { firstName, lastName } = author
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
  )
}

// App Component
const App = () => {
  const data = {
    welcome: 'Welcome to 30 Days Of React',
    title: 'Getting Started with React',
    subtitle: 'JavaScript Library',
    author: {
      firstName: 'Yash',
      lastName: 'Kalra',
    },
    date: 'July 11, 2024',
  }

  return (
    <div className='app'>
      <Header data={data} />
    </div>
  )
}
```

**Function Props**
```javascript
const Button = (props) => <button onClick={props.onClick}>{props.text}</button>

// App Component
const App = () => {
  const sayHi = () => {
    alert('Hi')
  }

  return (
    <div className='app'>
      <Button text='Say Hi' onClick={sayHi} />
    </div>
  )
}
```

**Destructuring Props**
```javascript
const Header = ({ data: { welcome, title, subtitle, author: { firstName, lastName }, date } }) => {
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
  )
}
```

### What are props in a React component?

Props (short for properties) are used to pass data from one component to another, typically from a parent component to a child component. They act as a way to transport data and allow components to be dynamic and reusable. Props are read-only, meaning a component cannot modify its own props.

### How do you access props in a React component?

In a functional component, props are accessed via the function's parameter. You can directly use `props` to access the passed data. Destructuring can also be used for more concise code.

```javascript
// Without destructuring
const User = (props) => {
  return (
    <div>
      <h1>{props.firstName} {props.lastName}</h1>
      <small>{props.country}</small>
    </div>
  )
}

// With destructuring
const User = ({ firstName, lastName, country }) => {
  return (
    <div>
      <h1>{firstName} {lastName}</h1>
      <small>{country}</small>
    </div>
  )
}
```

### What data types can we pass as props to components?

You can pass various data types as props to components, including:

1. **String Props**
   ```javascript
   <Header welcome='Welcome to 30 Days Of React' />
   ```

2. **Number Props**
   ```javascript
   <Age age={24} />
   ```

3. **Boolean Props**
   ```javascript
   <Status status={true} />
   ```

4. **Array Props**
   ```javascript
   <Skills skills={['HTML', 'CSS', 'JavaScript']} />
   ```

5. **Object Props**
   ```javascript
   const data = { welcome: 'Welcome to 30 Days Of React', author: { firstName: 'Yash', lastName: 'Kalra' } }
   <Header data={data} />
   ```

6. **Function Props**
   ```javascript
   <Button onClick={() => alert('Hi')} text='Say Hi' />
   ```

### What is propTypes?

`propTypes` is a mechanism to ensure that components use the correct data type for the props they receive. This helps in catching bugs and making the code more robust. You can define `propTypes` for a component using the `prop-types` library.

```javascript
import PropTypes from 'prop-types'

const Header = (props) => {
  return <h1>{props.title}</h1>
}

Header.propTypes = {
  title: PropTypes.string.isRequired,
}
```

### What is defaultProps?

`defaultProps` is a way to define default values for props. If a prop is not provided, the component will use the default value instead.

```javascript
const Header = (props) => {
  return <h1>{props.title}</h1>
}

Header.defaultProps = {
  title: 'Default Title',
}
```

Using `propTypes` and `defaultProps` together ensures that your components are used correctly and have fallback values if necessary.
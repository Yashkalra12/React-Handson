### Third-Party Packages in React

JavaScript has a vast ecosystem of third-party packages available through npm. These packages provide solutions for a variety of problems, allowing developers to avoid reinventing the wheel. Here, we will cover some commonly used packages in React applications.

#### Popular Packages
- **node-sass**: CSS preprocessor that allows writing functions, nesting, and more.
- **moment**: Library for parsing, validating, manipulating, and formatting dates.
- **axios**: Promise-based HTTP client for making requests.
- **react-icons**: Collection of popular icon sets.
- **styled-components**: Utilizes tagged template literals to style components.
- **reactstrap**: Bootstrap components for React.
- **lodash**: Utility library for common JavaScript tasks.
- **uuid**: Generates unique IDs.

#### Installation

You can use either npm or yarn to install packages. It's recommended to stick with one package management tool.

**Using npm:**
```bash
npm install package-name
```

**Using yarn:**
```bash
yarn add package-name
```

### Using Common Packages

#### node-sass
Sass is a CSS preprocessor. After installing `node-sass`, you can use Sass in your React application.

**Installation:**
```bash
npm install node-sass
# or
yarn add node-sass
```

**Example:**
```scss
/* styles/header.scss */
header {
  background-color: #61dbfb;
  padding: 10px;
  margin: 0;
}
```

```jsx
// Header.js
import React from 'react';
import './styles/header.scss';

const Header = () => (
  <header>
    <div className="header-wrapper">
      <h1>30 Days Of React</h1>
      <h2>Getting Started React</h2>
      <h3>JavaScript Library</h3>
      <p>Instructor: Asabeneh Yetayeh</p>
      <small>Oct 15, 2020</small>
    </div>
  </header>
);

export default Header;
```

```jsx
// App.js
import React from 'react';
import ReactDOM from 'react-dom';
import Header from './Header';
import './styles/header.scss';

const App = () => (
  <div className="App">
    <Header />
  </div>
);

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);
```

#### CSS Modules
CSS modules allow for scoped and modular CSS.

**Example:**
```scss
/* styles/header.module.scss */
.header {
  background-color: #61dbfb;
  padding: 10px;
  margin: 0;
}
.headerWrapper {
  font-weight: 500;
  border: 5px solid orange;
}
```

```jsx
// Header.js
import React from 'react';
import styles from './styles/header.module.scss';

const Header = () => (
  <header className={styles.header}>
    <div className={styles.headerWrapper}>
      <h1>30 Days Of React</h1>
      <h2>Getting Started React</h2>
      <h3>JavaScript Library</h3>
      <p>Instructor: Asabeneh Yetayeh</p>
      <small>Oct 15, 2020</small>
    </div>
  </header>
);

export default Header;
```

#### axios
Axios is used for making HTTP requests.

**Installation:**
```bash
npm install axios
# or
yarn add axios
```

**Example:**
```jsx
import React, { Component } from 'react';
import axios from 'axios';
import ReactDOM from 'react-dom';

class App extends Component {
  state = {
    data: [],
  };

  componentDidMount() {
    const API_URL = 'https://restcountries.com/v2/all';
    axios.get(API_URL)
      .then(response => {
        this.setState({ data: response.data });
      })
      .catch(error => {
        console.error(error);
      });
  }

  renderCountries = () => this.state.data.map(country => (
    <div key={country.name}>
      <div>
        <img src={country.flag} alt={country.name} />
      </div>
      <div>
        <h1>{country.name}</h1>
        <p>Capital: {country.capital}</p>
        <p>Population: {country.population}</p>
      </div>
    </div>
  ));

  render() {
    return (
      <div className="App">
        <h1>Fetching Data Using Axios</h1>
        <div>
          <p>There are {this.state.data.length} countries in the API</p>
          <div className="countries-wrapper">{this.renderCountries()}</div>
        </div>
      </div>
    );
  }
}

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);
```

#### react-icons
React-icons provide a collection of popular icon sets.

**Installation:**
```bash
npm install react-icons
# or
yarn add react-icons
```

**Example:**
```jsx
import React from 'react';
import ReactDOM from 'react-dom';
import { TiSocialLinkedinCircular, TiSocialGithubCircular, TiSocialTwitterCircular } from 'react-icons/ti';

const Footer = () => (
  <footer>
    <h3>30 Days Of React</h3>
    <div>
      <TiSocialLinkedinCircular />
      <TiSocialGithubCircular />
      <TiSocialTwitterCircular />
    </div>
    <small>Copyright &copy; {new Date().getFullYear()}</small>
  </footer>
);

const App = () => (
  <div className="App">
    <h1>Welcome to the world of Icons</h1>
    <Footer />
  </div>
);

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);
```

#### moment
Moment.js is used for date manipulation and formatting.

**Installation:**
```bash
npm install moment
# or
yarn add moment
```

**Example:**
```jsx
import React from 'react';
import ReactDOM from 'react-dom';
import moment from 'moment';

const App = () => (
  <div className="App">
    <h1>How to use moment</h1>
    <p>This challenge started {moment('2020-10-01').fromNow()}</p>
    <p>The challenge will end {moment('2020-10-30').fromNow()}</p>
    <p>Today is {moment().format('MMMM DD, YYYY HH:mm')}</p>
  </div>
);

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);
```

#### styled-components
Styled-components allow you to write CSS directly within your JavaScript files.

**Installation:**
```bash
npm install styled-components
# or
yarn add styled-components
```

**Example:**
```jsx
import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';

const Title = styled.h1`
  font-size: 70px;
  font-weight: 300;
`;

const Header = styled.header`
  background-color: #61dbfb;
  padding: 10px;
  margin: 0;
`;

const App = () => (
  <div className="App">
    <Header>
      <Title>30 Days Of React</Title>
      <h2>Getting Started React</h2>
      <h3>JavaScript Library</h3>
      <p>Instructor: Asabeneh Yetayeh</p>
      <small>Oct 15, 2020</small>
    </Header>
  </div>
);

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);
```

#### reactstrap
Reactstrap provides Bootstrap components for React.

#### lodash
Lodash is a utility library for common JavaScript tasks.

### Exercises

#### Level 1
1. What is a package?
2. What is a third-party package?
3. Do you have to use third-party packages?
4. How do you know the popularity and stability of a third-party package?
5. How many JavaScript packages are there on the npm registry?
6. How do you install a third-party package?
7. What packages do you use most frequently?
8. What package do you use to fetch data?
9. What is the purpose of the `classnames` package?
10. What is the purpose of the `validator` package?

#### Level 2
1. Learn how to use Sass.
2. Learn how to use axios.
3. Learn how to use moment and react-icons.
4. Use the `validator` package to validate the form you had on day 12.
5. Use `classnames` to change a class based on some logic.

.

Sure, here are the solutions for each of the questions and tasks listed, suitable for adding to a README file.

---

## Solutions to Exercises

### Level 1

1. **What is a package?**
   A package is a bundle of code that can be reused by other developers. It can contain functions, classes, or any other reusable code modules that provide specific functionalities.

2. **What is a third-party package?**
   A third-party package is a reusable code module developed and published by someone other than the primary developers of the project using it. These packages are typically hosted on repositories like npm (Node Package Manager).

3. **Do you have to use third-party packages?**
   No, you do not have to use third-party packages. However, using them can save time and effort by providing pre-built solutions for common problems, allowing you to focus on the unique aspects of your project.

4. **How do you know the popularity and stability of a third-party package?**
   You can check the popularity and stability of a third-party package by looking at metrics such as the number of downloads, stars on GitHub, the frequency of updates, and the number of open issues. Tools like npm trends and GitHub insights can help with this.

5. **How many JavaScript packages are there on the npm registry?**
   As of 2024, there are over 2 million packages on the npm registry. The exact number can be found on the [npm website](https://www.npmjs.com/).

6. **How do you install a third-party package?**
   You can install a third-party package using npm or yarn. For npm, use the command:
   ```bash
   npm install package-name
   ```
   For yarn, use the command:
   ```bash
   yarn add package-name
   ```

7. **What packages do you use most frequently?**
   Commonly used packages include `react`, `axios`, `lodash`, `moment`, `classnames`, and `styled-components`.

8. **What package do you use to fetch data?**
   The `axios` package is commonly used to fetch data in JavaScript and React applications.

9. **What is the purpose of the `classnames` package?**
   The `classnames` package is used to conditionally join class names together, making it easier to apply multiple classes to elements based on certain conditions.

10. **What is the purpose of the `validator` package?**
    The `validator` package is used to validate strings in JavaScript. It provides functions to validate email addresses, URLs, and other common data formats.

### Level 2

1. **Learn how to use Sass**
   Install `node-sass`:
   ```bash
   npm install node-sass
   ```
   Example usage:
   ```scss
   /* styles/header.scss */
   header {
     background-color: #61dbfb;
     padding: 10px;
     margin: 0;
   }
   ```
   ```jsx
   // Header.js
   import React from 'react';
   import './styles/header.scss';

   const Header = () => (
     <header>
       <div className="header-wrapper">
         <h1>30 Days Of React</h1>
         <h2>Getting Started React</h2>
         <h3>JavaScript Library</h3>
         <p>Instructor: Asabeneh Yetayeh</p>
         <small>Oct 15, 2020</small>
       </div>
     </header>
   );

   export default Header;
   ```

2. **Learn how to use axios**
   Install `axios`:
   ```bash
   npm install axios
   ```
   Example usage:
   ```jsx
   import React, { Component } from 'react';
   import axios from 'axios';

   class App extends Component {
     state = {
       data: [],
     };

     componentDidMount() {
       const API_URL = 'https://restcountries.com/v2/all';
       axios.get(API_URL)
         .then(response => {
           this.setState({ data: response.data });
         })
         .catch(error => {
           console.error(error);
         });
     }

     renderCountries = () => this.state.data.map(country => (
       <div key={country.name}>
         <div>
           <img src={country.flag} alt={country.name} />
         </div>
         <div>
           <h1>{country.name}</h1>
           <p>Capital: {country.capital}</p>
           <p>Population: {country.population}</p>
         </div>
       </div>
     ));

     render() {
       return (
         <div className="App">
           <h1>Fetching Data Using Axios</h1>
           <div>
             <p>There are {this.state.data.length} countries in the API</p>
             <div className="countries-wrapper">{this.renderCountries()}</div>
           </div>
         </div>
       );
     }
   }

   export default App;
   ```

3. **Learn how to use moment and react-icons**
   Install `moment` and `react-icons`:
   ```bash
   npm install moment react-icons
   ```
   Example usage:
   ```jsx
   import React from 'react';
   import moment from 'moment';
   import { TiSocialLinkedinCircular, TiSocialGithubCircular, TiSocialTwitterCircular } from 'react-icons/ti';

   const Footer = () => (
     <footer>
       <h3>30 Days Of React</h3>
       <div>
         <TiSocialLinkedinCircular />
         <TiSocialGithubCircular />
         <TiSocialTwitterCircular />
       </div>
       <small>Copyright &copy; {new Date().getFullYear()}</small>
     </footer>
   );

   const App = () => (
     <div className="App">
       <h1>How to use moment</h1>
       <p>This challenge started {moment('2020-10-01').fromNow()}</p>
       <p>Today is {moment().format('MMMM DD, YYYY HH:mm')}</p>
       <Footer />
     </div>
   );

   export default App;
   ```

4. **Use the `validator` package to validate the form you had on day 12**
   Install `validator`:
   ```bash
   npm install validator
   ```
   Example usage:
   ```jsx
   import React, { useState } from 'react';
   import validator from 'validator';

   const Form = () => {
     const [email, setEmail] = useState('');
     const [error, setError] = useState('');

     const handleSubmit = (e) => {
       e.preventDefault();
       if (!validator.isEmail(email)) {
         setError('Invalid email address');
       } else {
         setError('');
         // handle valid email submission
       }
     };

     return (
       <form onSubmit={handleSubmit}>
         <input
           type="email"
           value={email}
           onChange={(e) => setEmail(e.target.value)}
         />
         <button type="submit">Submit</button>
         {error && <p>{error}</p>}
       </form>
     );
   };

   export default Form;
   ```

5. **Use `classnames` to change a class based on some logic**
   Install `classnames`:
   ```bash
   npm install classnames
   ```
   Example usage:
   ```jsx
   import React, { useState } from 'react';
   import classNames from 'classnames';

   const App = () => {
     const [isActive, setIsActive] = useState(false);

     return (
       <div>
         <button onClick={() => setIsActive(!isActive)}>
           Toggle Class
         </button>
         <div className={classNames('box', { 'box--active': isActive })}>
           This box changes class based on state
         </div>
       </div>
     );
   };

   export default App;
   ```

---
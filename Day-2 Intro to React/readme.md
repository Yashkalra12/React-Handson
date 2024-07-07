

### Exercises: What is React?

**1. What is React?**

**Answer:** React is a JavaScript library for building user interfaces. It allows developers to create reusable UI components and manage the state of the application efficiently. React uses a virtual DOM to optimize updates and improve performance.

**2. What is a library?**

**Answer:** A library is a collection of pre-written code, functions, or tools that developers can use to perform common tasks and solve problems. Libraries are designed to be used within applications to provide specific functionalities, such as UI components, data manipulation, or networking.

**3. What is a single page application?**

**Answer:** A Single Page Application (SPA) is a web application that loads a single HTML page and dynamically updates the content as the user interacts with the app, without requiring a full page reload. SPAs offer a smoother and faster user experience by loading content on-demand.

**4. What is a component?**

**Answer:** In React, a component is a reusable, self-contained piece of the user interface. Components can be functional or class-based and can manage their own state and behavior. They can be composed together to build complex UIs.

**5. What is the latest version of React?**

**Answer:** As of July 2024, the latest stable version of React is **18.3.0**. Be sure to check the [React official website](https://reactjs.org/) or [React GitHub repository](https://github.com/facebook/react) for the most up-to-date version.

**6. What is DOM?**

**Answer:** DOM (Document Object Model) is a programming interface for web documents. It represents the structure of a document as a tree of objects, where each object corresponds to a part of the document (elements, attributes, text, etc.). The DOM allows programs to manipulate the document's structure, style, and content.

**7. What is React Virtual DOM?**

**Answer:** The React Virtual DOM is a lightweight in-memory representation of the real DOM. React uses the Virtual DOM to efficiently update the real DOM by comparing the current Virtual DOM state with the previous one and applying only the necessary changes.

**8. What does a web application or a website (composed of) have?**

**Answer:** A web application or website is composed of several components:
   - **HTML:** The structure of the web pages.
   - **CSS:** The styles and layout of the web pages.
   - **JavaScript:** The behavior and interactivity of the web pages.
   - **Server-side Code:** Backend logic, APIs, and database interactions.
   - **Client-side Code:** Frontend logic, user interface, and data manipulation.

---

### Exercises: Why React?

**1. Why did you choose to use React?**

**Answer:** React is chosen for its:
   - **Component-Based Architecture:** Allows for reusable and modular components.
   - **Virtual DOM:** Enhances performance by minimizing direct DOM manipulations.
   - **Strong Community Support:** Provides extensive libraries, tools, and resources.
   - **Declarative Syntax:** Simplifies the development of dynamic UIs.
   - **Rich Ecosystem:** Includes tools like React Router for navigation and Redux for state management.

**2. What measures do you use to know popularity?**

**Answer:** To gauge popularity, you can use:
   - **GitHub Stars and Forks:** Reflects the number of users and contributors.
   - **NPM Downloads:** Shows the frequency of library usage.
   - **Developer Surveys:** Provides insights from the developer community (e.g., Stack Overflow Developer Survey).
   - **Social Media Mentions:** Indicates community engagement and discussions.

**3. What is more popular, React or Vue?**

**Answer:** As of 2024, React is generally considered more popular than Vue based on:
   - **GitHub Stars:** React has more stars than Vue.
   - **NPM Downloads:** React has higher download counts.
   - **Survey Results:** React often ranks higher in developer surveys for usage and preference.

---

### Exercises: JSX

**1. What is an HTML element?**

**Answer:** An HTML element is a building block of HTML documents. It consists of a start tag, content, and an end tag. For example, `<div>Hello World</div>` is a `div` element with "Hello World" as its content.

**2. How to write a self-closing HTML element?**

**Answer:** A self-closing HTML element does not have closing tags and ends with a `/>`. For example: `<img src="image.jpg" alt="Example Image" />`

**3. What is an HTML attribute? Write some of them.**

**Answer:** An HTML attribute provides additional information about an element. Common attributes include:
   - **`class`**: Specifies one or more class names for an element.
   - **`id`**: Defines a unique identifier for an element.
   - **`src`**: Specifies the URL of an image (for the `img` tag).
   - **`href`**: Defines the URL for a link (for the `a` tag).
   - **`alt`**: Provides alternative text for an image (for the `img` tag).

**4. What is JSX?**

**Answer:** JSX (JavaScript XML) is a syntax extension for JavaScript used in React. It allows developers to write HTML-like code within JavaScript, which gets transformed into React elements. JSX makes it easier to define the structure and appearance of UI components.

**5. What is Babel?**

**Answer:** Babel is a JavaScript compiler that transforms modern JavaScript (ES6+) code into backward-compatible JavaScript code that can run on older browsers. It also converts JSX into standard JavaScript.

**6. What is a transpiler?**

**Answer:** A transpiler is a type of compiler that translates code written in one programming language or syntax into another language or syntax with a similar level of abstraction. Babel is a transpiler that converts modern JavaScript and JSX into older JavaScript versions.

---

### Exercises: JSX Elements

**1. What is a JSX element?**

**Answer:** A JSX element is a piece of code written in JSX syntax that describes what the UI should look like. JSX elements can be HTML-like tags or React components, and they are converted into React elements.

**2. Write your name in a JSX element and store it in a `name` variable.**

**Answer:**

```jsx
const name = <h1>Yash Kalra</h1>;
```

**3. Write a JSX element which displays your full name, country, title, gender, email, phone number. Use `h1` for the name and `p` for the rest of the information and store it in a `user` variable.**

**Answer:**

```jsx
const user = (
  <div>
    <h1>Yash Kalra</h1>
    <p>Country: India</p>
    <p>Title: Full Stack Developer</p>
    <p>Gender: Male</p>
    <p>Email: yash.kalra@example.com</p>
    <p>Phone Number: +91-1234567890</p>
  </div>
);
```

**4. Write a footer JSX element.**

**Answer:**

```jsx
const footer = (
  <footer>
    <div className='footer-wrapper'>
      <p>© 2024 Yash Kalra. All Rights Reserved.</p>
    </div>
  </footer>
);
```



### Exercises: Inline Style

**1. Create a style object for the main JSX**

**Exercise:** Define a JavaScript object with CSS properties for the `main` JSX element.

**Solution:**

```jsx
const mainStyle = {
  padding: '20px',
  backgroundColor: '#f5f5f5',
  color: '#333',
  borderRadius: '8px',
  boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
};
```

**Usage in JSX:**

```jsx
const main = (
  <main style={mainStyle}>
    <div className='main-wrapper'>
      <p>
        Prerequisite to get started{' '}
        <strong><em>react.js</em></strong>:
      </p>
      <ul>{techsFormatted}</ul>
      {result}
      {personAge}
    </div>
  </main>
);
```

**2. Create a style object for the footer and app JSX**

**Exercise:** Define JavaScript objects with CSS properties for the `footer` and `app` JSX elements.

**Solutions:**

```jsx
const footerStyle = {
  backgroundColor: '#6cf',
  color: '#fff',
  fontWeight: '400',
  textAlign: 'center',
  lineHeight: '60px',
  height: '60px',
  position: 'absolute',
  bottom: '0',
  width: '100%',
};

const appStyle = {
  fontFamily: `'Montserrat', sans-serif`,
  color: '#333',
  textAlign: 'center',
  backgroundColor: '#e0e0e0',
  minHeight: '100vh',
};
```

**Usage in JSX:**

```jsx
const footer = (
  <footer style={footerStyle}>
    <div className='footer-wrapper'>
      <p>© 2024 Yash Kalra. All Rights Reserved.</p>
    </div>
  </footer>
);

const app = (
  <div className='app' style={appStyle}>
    {header}
    {main}
    {footer}
  </div>
);
```

**3. Add more styles to the JSX elements**

**Exercise:** Extend the existing styles with additional CSS properties.

**Solution:**

```jsx
const mainStyle = {
  padding: '20px',
  backgroundColor: '#f5f5f5',
  color: '#333',
  borderRadius: '8px',
  boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
  fontSize: '18px',
  margin: '10px auto',
  maxWidth: '800px',
};

const footerStyle = {
  backgroundColor: '#6cf',
  color: '#fff',
  fontWeight: '400',
  textAlign: 'center',
  lineHeight: '60px',
  height: '60px',
  position: 'absolute',
  bottom: '0',
  width: '100%',
  fontSize: '14px',
};

const appStyle = {
  fontFamily: `'Montserrat', sans-serif`,
  color: '#333',
  textAlign: 'center',
  backgroundColor: '#e0e0e0',
  minHeight: '100vh',
  padding: '10px',
};
```

**Updated JSX Usage:**

```jsx
const main = (
  <main style={mainStyle}>
    <div className='main-wrapper'>
      <p>
        Prerequisite to get started{' '}
        <strong><em>react.js</em></strong>:
      </p>
      <ul>{techsFormatted}</ul>
      {result}
      {personAge}
    </div>
  </main>
);

const footer = (
  <footer style={footerStyle}>
    <div className='footer-wrapper'>
      <p>© 2024 Yash Kalra. All Rights Reserved.</p>
    </div>
  </footer>
);

const app = (
  <div className='app' style={appStyle}>
    {header}
    {main}
    {footer}
  </div>
);
```

---

### Exercises: Internal Styles

**1. Apply different styles to your JSX elements**

**Exercise:** Define and apply internal styles using a `<style>` tag within the JSX.

**Solution:**

```jsx
const AppWithInternalStyles = () => (
  <div className='app'>
    <style>
      {`
        .header-wrapper {
          background-color: #61dbfb;
          padding: 10px;
          border-radius: 4px;
        }

        .main-wrapper {
          background-color: #fff;
          padding: 20px;
          border-radius: 4px;
          box-shadow: 0 4px 8px rgba(0,0,0,0.1);
        }

        .footer-wrapper {
          color: #fff;
          background-color: #6cf;
        }
      `}
    </style>
    {header}
    {main}
    {footer}
  </div>
);
```

**2. Style specific elements**

**Exercise:** Add styles for `h1`, `p`, and `ul` elements.

**Solution:**

```jsx
const AppWithElementStyles = () => (
  <div className='app'>
    <style>
      {`
        h1 {
          color: #333;
          font-size: 2.5em;
        }

        p {
          color: #555;
          font-size: 1.2em;
        }

        ul {
          list-style: none;
        }
      `}
    </style>
    {header}
    {main}
    {footer}
  </div>
);
```

---

### Exercises: Inject Data to JSX

**1. Practice how to make a JSX element and inject dynamic data (string, number, boolean, array, object)**

**Exercise:** Create a JSX element that injects different types of data.

**Solution:**

```jsx
const name = 'Yash Kalra';
const age = 25;
const isStudent = false;
const hobbies = ['Coding', 'Reading', 'Traveling'];
const user = {
  firstName: 'Yash',
  lastName: 'Kalra',
  email: 'yash.kalra@example.com',
};

const dataExample = (
  <div>
    <h1>{name}</h1>
    <p>Age: {age}</p>
    <p>Student: {isStudent ? 'Yes' : 'No'}</p>
    <ul>
      {hobbies.map((hobby, index) => <li key={index}>{hobby}</li>)}
    </ul>
    <p>Email: {user.email}</p>
  </div>
);
```

**2. Inject dynamic data into a JSX element**

**Exercise:** Create a JSX element that displays a user’s profile information dynamically.

**Solution:**

```jsx
const profile = (
  <div>
    <h1>{user.firstName} {user.lastName}</h1>
    <p>Email: {user.email}</p>
    <p>Age: {age}</p>
    <p>Is Student: {isStudent ? 'Yes' : 'No'}</p>
  </div>
);
```

**3. Display an array of objects using JSX**

**Exercise:** Display a list of users from an array of objects.

**Solution:**

```jsx
const users = [
  { id: 1, name: 'Alice', age: 30 },
  { id: 2, name: 'Bob', age: 25 },
  { id: 3, name: 'Charlie', age: 28 },
];

const usersList = (
  <ul>
    {users.map(user => (
      <li key={user.id}>{user.name} is {user.age} years old</li>
    ))}
  </ul>
);
```

---

### Summary Table

| Exercise                               | Description                                                             |
|----------------------------------------|-------------------------------------------------------------------------|
| **Inline Style**                       | Create and apply style objects for various JSX elements.                |
| **Internal Styles**                   | Define and apply styles within a `<style>` tag in JSX components.       |
| **Inject Data to JSX**                | Practice inserting dynamic data into JSX elements.                      |

Feel free to adjust or expand these exercises based on your specific learning objectives or interests!

---

### Additional Resources

- [React Documentation](https://reactjs.org/docs/getting-started.html)
- [MDN Web Docs - CSS](https://developer.mozilla.org/en-US/docs/Web/CSS)
- [MDN Web Docs - JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
- [Babel Documentation](https://babeljs.io/docs/en/)



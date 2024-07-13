// // index.js
// import React from 'react'
// import ReactDOM from 'react-dom'
// import yashImage from './images/yash.jpg'

// // Hexadecimal color generator
// const hexaColor = () => {
//   let str = '0123456789abcdef'
//   let color = ''
//   for (let i = 0; i < 6; i++) {
//     let index = Math.floor(Math.random() * str.length)
//     color += str[index]
//   }
//   return '#' + color
// }

// const HexaColor = () => <div>{hexaColor()}</div>

// // Button Component with styles
// const buttonStyles = {
//   padding: '10px 20px',
//   background: 'rgb(0, 255, 0)',
//   border: 'none',
//   borderRadius: 5,
// }

// const Button = () => <button style={buttonStyles}>action</button>

// // Header Component
// const Header = () => (
//   <header>
//     <div className='header-wrapper'>
//       <h1>Welcome to 30 Days Of React</h1>
//       <h2>Getting Started React</h2>
//       <h3>JavaScript Library</h3>
//       <p>Yash Kalra</p>
//       <small>10 July 2024</small>
//     </div>
//   </header>
// )

// // User Card Component
// const UserCard = () => (
//   <div className='user-card'>
//     <img src={yashImage} alt='yash kalra image' />
//     <h2>Yash Kalra</h2>
//   </div>
// )

// // TechList Component
// const TechList = () => {
//   const techs = ['HTML', 'CSS', 'JavaScript']
//   const techsFormatted = techs.map((tech) => <li key={tech}>{tech}</li>)
//   return techsFormatted
// }

// // Main Component
// const Main = () => (
//   <main>
//     <div className='main-wrapper'>
//       <p>Prerequisite to get started react.js:</p>
//       <ul>
//         <TechList />
//       </ul>
//       <UserCard />
//       <Button />
//       <HexaColor />
//     </div>
//   </main>
// )

// // Footer Component
// const Footer = () => (
//   <footer>
//     <div className='footer-wrapper'>
//       <p>Copyright 2024</p>
//     </div>
//   </footer>
// )

// // The App, or the parent or the container component
// const App = () => (
//   <div className='app'>
//     <Header />
//     <Main />
//     <Footer />
//   </div>
// )

// const rootElement = document.getElementById('root')
// // we render the App component using the ReactDOM package
// ReactDOM.render(<App />, rootElement)





import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

// SubscribeForm Component
const SubscribeForm = () => {
  return (
    <div className="subscribe-form">
      <h2>SUBSCRIBE</h2>
      <p>Sign up with your email address to receive news and updates.</p>
      <form>
        <input type="text" placeholder="First name" />
        <input type="text" placeholder="Last name" />
        <input type="email" placeholder="Email" />
        <button type="submit">Subscribe</button>
      </form>
    </div>
  );
};

// ColorBox Component
const ColorBox = ({ color }) => {
  return (
    <div className="color-box" style={{ backgroundColor: color }}>
      {color}
    </div>
  );
};

// App Component
const App = () => {
  const colors = ['#518cef', '#3b10c4', '#9aede6', '#8ee763', '#a30dd0'];

  return (
    <div className="app">
      <SubscribeForm />
      <h2>Exercises: Level 3</h2>
      <h3>Use the given hexadecimal color generator in the example to create these random colors</h3>
      {colors.map((color, index) => (
        <ColorBox key={index} color={color} />
      ))}
    </div>
  );
};

// Render the App
ReactDOM.render(<App />, document.getElementById('root'));




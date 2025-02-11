import React, { useState } from 'react'
import './App.css'
import yashKalraImage from './images/yash.jpg'

// Function to show month date year
const showDate = (time) => {
  const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ]

  const month = months[time.getMonth()].slice(0, 3)
  const year = time.getFullYear()
  const date = time.getDate()
  return ` ${month} ${date}, ${year}`
}

// Header Component
const Header = ({
  data: {
    welcome,
    title,
    subtitle,
    author: { firstName, lastName },
    date,
  },
}) => {
  return (
    <header>
      <div className='header-wrapper'>
        <h1>{welcome}</h1>
        <h2>{title}</h2>
        <h3>{subtitle}</h3>
        <p>
          {firstName} {lastName}
        </p>
        <small>{showDate(date)}</small>
      </div>
    </header>
  )
}

// TechList Component
const TechList = ({ techs }) => {
  const techList = techs.map((tech) => <li key={tech}>{tech}</li>)
  return techList
}

// UserCard Component
const UserCard = ({ user }) => {
  return (
    <div className="user-card">
      <img src={user.avatar} alt={user.name} className="avatar" />
      <div className="user-info">
        <h2>{user.name} <span className="verified">&#10004;</span></h2>
        <p>{user.title}, {user.location}</p>
        <h3>SKILLS</h3>
        <div className="skills">
          {user.skills.map((skill, index) => (
            <span key={index} className="skill">{skill}</span>
          ))}
        </div>
        <p className="joined"><span className="joined-icon">&#128197;</span> Joined on {user.joined}</p>
      </div>
    </div>
  );
};

// A button component
const Button = ({ text, onClick, style }) => (
  <button style={style} onClick={onClick}>
    {text}
  </button>
)

// CSS styles in JavaScript Object
const buttonStyles = {
  backgroundColor: '#61dbfb',
  padding: 10,
  border: 'none',
  borderRadius: 5,
  margin: 3,
  cursor: 'pointer',
  fontSize: 18,
  color: 'white',
}

// Main Component
const Main = ({ user, techs, greetPeople, handleTime }) => (
  <main>
    <div className='main-wrapper'>
      <p>Prerequisite to get started with React.js:</p>
      <ul>
        <TechList techs={techs} />
      </ul>
      <UserCard user={user} />
      <Button text='Greet People' onClick={greetPeople} style={buttonStyles} />
      <Button text='Show Time' onClick={handleTime} style={buttonStyles} />
    </div>
  </main>
)

// Footer Component
const Footer = ({ copyRight }) => (
  <footer>
    <div className='footer-wrapper'>
      <p>Copyright {copyRight.getFullYear()}</p>
    </div>
  </footer>
)

// The App, or the parent or the container component
// Functional Component
const App = () => {
  const [showUserCard, setShowUserCard] = useState(false);

  const data = {
    welcome: 'Welcome to 30 Days Of React',
    title: 'Getting Started with React',
    subtitle: 'JavaScript Library',
    author: {
      firstName: 'Yash',
      lastName: 'Kalra',
    },
    date: new Date(), // date needs to be formatted to a human readable format
  }

  const date = new Date()
  const techs = ['HTML', 'CSS', 'JavaScript']

  const user = {
    avatar: yashKalraImage,
    name: 'Yash Kalra',
    title: 'Software Engineer',
    location: 'India',
    skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Node.js'],
    joined: '11 July, 2024'
  };

  const handleTime = () => {
    alert(showDate(new Date()))
  }

  const greetPeople = () => {
    alert('Welcome to 30 Days Of React Challenge, 2024')
  }

  return (
    <div className='app'>
      <Header data={data} />
      {!showUserCard ? (
        <button className="show-user-card-button" onClick={() => setShowUserCard(true)}>
          Show User Card
        </button>
      ) : (
        <UserCard user={user} />
      )}
      <Main
        user={user}
        techs={techs}
        handleTime={handleTime}
        greetPeople={greetPeople}
      />
      <Footer copyRight={date} />
    </div>
  )
}

export default App

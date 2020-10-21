import React from 'react';
import logo from './logo.svg';
import './App.css';
import Contact from './components/Contact';
import PropTypes from 'prop-types';
import './components/Contact.css';
import ContactList from './components/ContactList';

const myCard = {
  avatar: "https://randomuser.me/api/portraits/men/62.jpg",
  name: "Eliss Morren",
  isConnected: true,
};
const myCard2 = {
  avatar: "https://randomuser.me/api/portraits/women/72.jpg",
  name: "John Doe",
  isConnected: false,
};
const myCard3 = {
  avatar: "https://randomuser.me/api/portraits/women/40.jpg",
  name: "Jim Morrisson",
  isConnected: false,
};

function App() {
  return (
    <div className="App">


      <Contact {...myCard} />
      <Contact {...myCard2} />
      <Contact {...myCard3} />

    </div>
  );
}

export default App;



import React from 'react';
import './App.css';
import ContactList from './ContactList/ContactList'

function App() {
  return (
    <div className="App">
    <h1 className="m-3">Contacts Manager</h1>
     <ContactList />
    </div>
  );
}

export default App;

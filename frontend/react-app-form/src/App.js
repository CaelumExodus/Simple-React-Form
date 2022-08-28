import './App.css';
import { useState } from "react";


function App() {

  const [firstName, setFName] = useState('');
  const [lastName, setLName] = useState('');
  const [email, setEmail] = useState('');
  const [formDate, setDate] = useState('');

  const displayInfo = () => {
    console.log(firstName)
    console.log(lastName)
    console.log(email)
    console.log(formDate)
  }

  return (
    <div className="wrapper form-wrapper">
      <label>
        First name:
        <input
          type="text"
          onChange={ event => setFName(event.target.value) }
        />
      </label>
      <label>
        Last name:
        <input
          type="text"
          onChange={ event => setLName(event.target.value) }
        />
      </label>
      <label>
        Email:
        <input
          type="email"
          onChange={ event => setEmail(event.target.value) }
        />
      </label>
      <label>
        Name:
        <input
          type="date"
          onChange={ event => setDate(event.target.value) }
        />
      </label>
      <button
        className="btn"
        onClick={ displayInfo }
      >
        Send form
      </button>
    </div>
  );
}

export default App;

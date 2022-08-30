import './App.css';
import { useState } from "react";
import Axios from "axios";

function App() {

  let [invalidFirstName, invalidFirstNameFlag] = useState(false);
  let [invalidLastName, invalidLastNameFlag] = useState(false);
  let [invalidEmail, invalidEmailFlag] = useState(false);
  let [invalidDate, invalidDateFlag] = useState(false);

  const [firstName, setFName] = useState('');
  const [lastName, setLName] = useState('');
  const [email, setEmail] = useState('');
  const [formDate, setDate] = useState('');

  const sendForm = () => {
    invalidFirstName = firstName ? invalidFirstNameFlag(false) : invalidFirstNameFlag(true)
    invalidLastName = lastName ? invalidLastNameFlag(false) : invalidLastNameFlag(true)
    invalidEmail = email ? invalidEmailFlag(false) : invalidEmailFlag(true)
    invalidDate = formDate ? invalidDateFlag(false) : invalidDateFlag(true)

    if (!firstName || !lastName || !email || !formDate) return;

      Axios.post('http://localhost:3100/send', {
      firstName: firstName, lastName: lastName, email: email, formDate: formDate,
    }).then(() => console.log('Success'))
  }

  return (<div className="wrapper form-wrapper">
    <div
      className={ `form-input first-name-container ${ invalidFirstName ? 'invalid' : '' }` }>
      <label>
        First name:
        <input
          type="text"
          onChange={ event => setFName(event.target.value) }
        />
      </label>
    </div>
    <div className={ `form-input last-name-container ${ invalidLastName ? 'invalid' : '' }` }>
      <label>
        Last name:
        <input
          type="text"
          onChange={ event => setLName(event.target.value) }
        />
      </label>
    </div>
    <div className={ `form-input email-container ${ invalidEmail ? 'invalid' : '' }` }>
      <label>
        Email:
        <input
          type="email"
          onChange={ event => setEmail(event.target.value) }
        />
      </label>
    </div>
    <div className={ `form-input form-date-container ${ invalidDate ? 'invalid' : '' }` }>
      <label>
        Date:
        <input
          type="date"
          onChange={ event => setDate(event.target.value) }
        />
      </label>
    </div>
    <button
      className="btn"
      onClick={ sendForm }
    >
      Send form
    </button>
  </div>);
}

export default App;

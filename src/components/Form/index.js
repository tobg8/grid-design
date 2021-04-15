import React, { useState } from 'react';
import './styles.scss';
import PropTypes from 'prop-types';

import Field from './Field';

const Form = ({ applyRef }) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [mail, setMail] = useState('');
  const [mailValid, setMailValid] = useState(false);

  const validateEmail = (email) => {
    setMail(email);
    const test = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (test.test(mail)) {
      setMailValid(true);
    }
    else {
      setMailValid(false);
    }
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    setName('');
    setPhone('');
    setMail('');
    setMailValid(false);
  };

  return (
    <form className="form" onSubmit={mailValid && phone.length > 0 && name.length > 0 ? handleFormSubmit : undefined} ref={applyRef}>
      <div className="form__field-container">
        <Field
          type="text"
          placeholder="name"
          changeField={setName}
          value={name}
        />
        <div className={name.length > 0 ? 'form__circle' : 'form__circle form__circle--modifier'} />
      </div>
      <div className="form__field-container">
        <Field
          type="tel"
          placeholder="phone"
          changeField={setPhone}
          value={phone}
        />
        <div className={phone.length > 0 ? 'form__circle' : 'form__circle form__circle--modifier'} />
      </div>
      <div className="form__field-container">
        <Field
          type="email"
          placeholder="mail"
          changeField={validateEmail}
          value={mail}
        />
        <p className="form__show-mail">{mail}</p>
        <div className={mailValid ? 'form__circle' : 'form__circle form__circle--modifier'} />
      </div>
      <button
        type={mailValid && phone.length > 0 && name.length > 0 ? 'submit' : 'button'}
        className="form__button"
        style={mailValid && phone.length > 0 && name.length > 0 ? { opacity: '1' } : { opacity: '0.4' }}
      >
        submit
      </button>
    </form>
  );
};

Form.propTypes = {
  applyRef: PropTypes.object.isRequired,
};

export default Form;

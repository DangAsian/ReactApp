import React from 'react';

import { Link } from 'react-router-dom';

import styles from './ContactInfo.sass';


const ContactInfo = (props) => (
  <div className='contact pure-u-1-3'>
    <h2>
      <Link to={`/contacts/${props.id}`}>
        {props.name}
      </Link>

    </h2>

    <p>{props.email}</p>

  </div>
)

export default ContactInfo;

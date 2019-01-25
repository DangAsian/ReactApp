import React from 'react';

import { Link } from 'react-router-dom';

import styles from './ContactInfo.sass';

import { observer } from 'mobx-react'

// const ContactInfo = (props) => (
//   <div className='contact pure-u-1-3'>
//     <h2>
//       <Link to={`/contacts/${props.id}`}>
//         {props.name}
//       </Link>
//
//     </h2>
//
//     <p>{props.email}</p>
//
//   </div>
// )
//
// export default ContactInfo;

@observer(['contacts'])
class ContactInfo extends React.Component{

  removeContact = (e) => {
    e.preventDefault()
    console.log(this.props.id);
    this.props.contacts.remove(this.props.id)
  }

  render(){
    return(
      <div className='contact pure-u-1-3'>
        <h2>
          <Link to={`/contacts/${this.props.id}`}>
            {this.props.name}
          </Link>

        </h2>

        <p>{this.props.email}</p>
        <button className="removeButton pure-button" onClick={this.removeContact}>
          Remove
        </button>
      </div>
    )
  }
}

export default ContactInfo;

import React, { Component } from 'react';
import ContactInfo from './ContactInfo';

import styles from './Collection.sass';
import { observer, inject } from 'mobx-react';


@observer(['contacts'])
class Contact extends Component {
  nameRef = React.createRef();
  emailRef = React.createRef();


  // componentWillMount() {
  //   // console.log("hello");
  //   // console.log(this.props.contacts.all);
  //   // this.props.contacts.all
  //   this.setState({
  //     contacts: list,
  //   });
  // }

  addContact= (e) => {
    e.preventDefault();
    // console.log(this.nameRef);
    const contacts = this.props.contacts.all.slice()


    const newId = contacts[contacts.length - 1] === undefined ? 0 : contacts[contacts.length - 1].id + 1
    console.log(newId);



    this.props.contacts.add({
      id: newId,
      name: `${this.nameRef.current.value}`,
      email: `${this.emailRef.current.value}`
    })

    // this.setState({
    //   contacts: contacts.concat({id: newId, name: `${this.nameRef.current.value}`, email: `${this.emailRef.current.value}`})
    // })

    this.nameRef.current.value = null
    this.emailRef.current.value = null
  }

  newContact = () =>
    <div className='pure-g'>
      <div className='pure-u-12-24'>
        <form className='pure-form' onSubmit={this.addContact}>
          <fieldset>
            <legend>New Contact</legend>
            <input ref={this.emailRef} type='email' placeholder='example@gmail.com'/>
            <input ref={this.nameRef} type='text' placeholder='Name'/>
              <button type='submit' className="pure-button pure-button-primary">Add</button>
          </fieldset>
        </form>
      </div>
    </div>;


  render(){
    return(
      <div id='Collection' className='main'>
        {this.newContact()}
        {/* <button className='pure-button' onClick={this.addContact}>Button</button> */}
        <div id='Layout' className='pure-g'>
          {this.props.contacts.all.slice().map((info,id) =>
            <ContactInfo name={info.name} email={info.email} key={id} id={info.id}/>
          )}
        </div>
      </div>

    )
  }
}

// )

export default Contact;

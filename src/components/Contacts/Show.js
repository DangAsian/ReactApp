import React from "react";

import {Link} from 'react-router-dom';
import { observer } from 'mobx-react';

@observer(['contacts'])
class Show extends React.Component{

  componentWillMount() {
    const contact = this.props.contacts.find(parseInt(this.props.match.params.id))
    console.log(this.props.match.params.id);
    // console.log(this.props);
    this.setState({ contact });
    //   contact: list.filter(contact => contact.id === parseInt(this.props.match.params.id, 10))[0],
    console.log(contact);
    // });
  }

  render(){
    return(
      <div>
        {/* {console.log(this.state.contact.name)} */}
        <h1>{this.state.contact.name}</h1>
        <h1>{this.state.contact.email}</h1>
        <Link to="/">Home</Link>
      </div>
    )
  }
}


export default Show;

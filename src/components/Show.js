import React from "react";
import list from './list';
import {Link} from 'react-router-dom';

class Show extends React.Component{

  componentWillMount() {
    // console.log(this.props);
    this.setState({
      contact: list.filter(contact => contact.id === parseInt(this.props.match.params.id, 10))[0],
    });
  }

  render(){
    return(
      <div>
        {console.log(this.state.contact.name)}
        <h1>{this.state.contact.name}</h1>
        <h1>{this.state.contact.email}</h1>
        <Link to="/">Home</Link>
      </div>
    )
  }
}


export default Show;

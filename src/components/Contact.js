import { render } from '@testing-library/react';
import React, { Component } from 'react';




class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {online: this.props.isConnected};

  }

  render() {
    return (
      <figure className="Contact">
        <img className="avatar" src={this.props.avatar} alt={this.props.name} 
        />
        <div>
          <div className="name">{this.props.name}</div> 
            <div className="status" >
              <span className={this.state.online ? "status-online" : "status-offline" }
                onClick= {event => {
                const newStatus = !this.state.online;
                this.setState({ online: newStatus });
              }}>
              </span>
              <div className="status-text"
                onClick= {event => {
                const newStatus = !this.state.online;
                this.setState({ online: newStatus });
                }}>{this.state.online ? 'online' : 'offline'}
              </div>
            </div>
          </div>
      </figure>
      );
  }
}



export default Contact;





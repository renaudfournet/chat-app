import React from 'react';

const isOnline = true;

function Contact(props) {
    return (
    <figure className="Contact">
      <img className="avatar"
        src={props.avatar}
        alt={props.name}
      />

      <div>
        <div className="name">{props.name}</div> 
          <div className="status">{props.status}
            <div className={props.online ? "status-online" : "status-offline" }>
            <div className="status-text">{props.online ? 'online' : 'offline'}
            </div>
          </div>
        </div>
      </div>
     
    </figure>
     );
}

export default Contact;





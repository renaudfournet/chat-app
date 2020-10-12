import React from 'react';

const isOnline = true;

function Contact() {
    return (
    <figure className="Contact">
      <img className="avatar"
        src="https://randomuser.me/api/portraits/men/2.jpg"
        alt="Earl Howell"
      />
      <div className="name">Earl Howell</div>
      <div className="status">
        <div className="status-online"></div>
        <div className="status-text">{isOnline ? 'online' : 'offline'}</div>
      </div>
     
    </figure>
     );
}

export default Contact;


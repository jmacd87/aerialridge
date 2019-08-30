import React, { Component } from "react";
import './Contact.css';

class Contact extends Component {
  render() {

    return (

      <div className="contactPage">
  <div className="contactForm">  
  <h1> CONTACT US</h1> 
<form method="POST">
  <label htmlFor="name">Name</label>
  <br/>
  <input type="text" name="name" />
      <br/>
  <label htmlFor="email">Email</label>
  <br/>
  <input type="email" name="email" />
  <br/>
  <label htmlFor="message">Message</label>
  <br/>
  <textarea name="message" rows="3"></textarea>
  <br/>
  <input type="submit" />
</form>
</div>
      </div>
    );
  }
}

export default Contact;
 
  
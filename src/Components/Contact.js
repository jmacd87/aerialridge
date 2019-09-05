import React, { Component } from "react";
import './Contact.css';

class Contact extends Component {
  render() {

    return (
      <div className="contactForm">
   <form id="contact-form">
        <input type="hidden" name="contact_number"/>
        <label>Name</label>
        <input type="text" name="user_name"/>
        <label>Email</label>
        <input type="email" name="user_email"/>
        <label>Message</label>
        <textarea name="contact"></textarea>
        <input type="submit" value="Send"/>
    </form>
</div>
    );
  }
}

export default Contact;
 
  
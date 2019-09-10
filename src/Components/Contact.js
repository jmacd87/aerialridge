import React, { Component } from "react";
import './Contact.css';
import SimpleMap from './map';

class Contact extends Component {
  render() {

    return (
      <div className="contactPage">
      <div className="contactText">
        <h1> SEND A MESSAGE</h1>
        <p>For any inquiries or to request a quote,
           please send us a message. 
           Rates vary on a project to project based 
           on size and location of the proposed idea </p>
      </div>
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
    
</div><div className="mapContainer"><SimpleMap/></div>
</div>


    );
  }
}

export default Contact;
 
  
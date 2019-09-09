import React, { Component } from "react";
import './Contact.css';
 

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
   <form id="contact-form" action="mailto:jmacd87@gmail.com" method="post" enctype="text/plain">
        <input type="hidden" name="contact_number"/>
        <label>Name</label>
        <input type="text" name="user_name"/>
        <label>Email</label>
        <input type="email" name="user_email"/>
        <label>Message</label>
        <textarea name="contact"></textarea>
        <input type="submit" value="Send"/>
    </form>
    
</div><div id="map"></div>
</div>


    );
  }
}

export default Contact;
 
  
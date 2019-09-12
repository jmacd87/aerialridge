import React, { Component } from "react";
import './Contact.css';
const encode = (data) => {
  return Object.keys(data)
      .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
      .join("&");
}
 export default class ContactForm extends React.Component {
    constructor(props) {
      super(props);
      this.state = { name: "", email: "", message: "" };
    }

    /* Here’s the juicy bit for posting the form submission */

    handleSubmit = e => {
      fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: encode({ "form-name": "contact", ...this.state })
      })
        .then(() => alert("Success!"))
        .catch(error => alert(error));

      e.preventDefault();
    };

    handleChange = e => this.setState({ [e.target.name]: e.target.value });

    render() {
      const { name, email, message } = this.state;
      return (
        <div className="contactPage">
        <div className="contactText">

<h1>SEND A MESSAGE</h1>
<p>
For any inquiries or to request a quote, please send us a message. Rates vary on a project by project basis based on size and location of the proposed idea.
</p>        
</div>
        <div className="contactForm">
        <form onSubmit={this.handleSubmit}>
          <p>
            <label>
              Your Name: <input type="text" className="input" name="name" value={name} onChange={this.handleChange} />
            </label>
          </p>
            <label>
              Your Email: <input type="email" name="email" value={email} onChange={this.handleChange} />

            </label>

          <p>
            <label>
              Message: <textarea name="message" value={message} onChange={this.handleChange} />
            </label>
          </p>
          <p>
            <button type="submit">Send</button>
          </p>
        </form>
        </div>
        <div id="map"></div></div>
      );
    }
  }

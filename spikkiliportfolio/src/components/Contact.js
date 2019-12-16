import React, { Component } from 'react';
import '../styles/Contact.css';


export default class Contact extends Component {
  state = {
    feedback: '',
    formSubmitted: false
  };

  handleCancel = this.handleCancel.bind(this);
  handleChange = this.handleChange.bind(this);
  handleSubmit = this.handleSubmit.bind(this);

  static sender = 'sender@sumanthpikkili.com';

  handleCancel() {
    this.setState({
      feedback: ''
    });
  }

  handleChange(event) {
    this.setState({
      feedback: event.target.value
    });
  }

  handleSubmit(event) {
    event.preventDefault();

    this.sendFeedback(
      'sp_email_template',
      this.sender,
      'sumanthpikkili@gmail.com',
      this.state.feedback,
      'user_pTuOdjcs6F8qLoVv9naBX'
    );

    this.setState({
      formSubmitted: true
    });
  }

  sendFeedback(templateId, senderEmail, receiverEmail, feedback, user) {
    window.emailjs
      .send('gmail', templateId, {
          senderEmail,
          receiverEmail,
          feedback
        },
        user
      )
      .then(res => {
        this.setState({
          formEmailSent: true
        });
        console.log('Email successfully sent!');
      })
      .catch(err => console.error('Failed to send feedback. Error: ', err));
  }

  render() {
    return (
      <form className="feedback-form" onSubmit={this.handleSubmit}>
        <h1>Contact Me</h1>
        <textarea
          className="textInput"
          id="feedback-entry"
          name="feedback-entry"
          onChange={this.handleChange}
          placeholder="Enter your comments here..."
          required
          value={this.state.feedback}
        />
        <div className="btn-group">
          <button className="btn btn--cancel" onClick={this.handleCancel}>
            Cancel
          </button>
          <input type="submit" value="Submit" className="btn btn--submit" />
        </div>
      </form>
    );
  }
}

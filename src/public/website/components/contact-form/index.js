import React, { Component } from 'react';
import axios from 'axios';

class ContactForm extends Component {
  constructor(props) {
    super(props); 

    this.state = {
      displayMessage: false,
      message: '',
    };

    this.handleSuccess = this.handleSuccess.bind(this);
  }

  handleOnSubmit(e) {
    e.preventDefault();

    this.setState({
      displayMessage: true,
      message: 'Processing.',
    });

    this.handleContactFormFetch();
  }

  handleContactFormFetch() {
    const body = {
      name: this.name.value,
      email: this.email.value,
      message: this.message.value,
    };

    axios.post('/contact', body)
      .then((res) => this.handleSuccess(res))
      .catch((err) => this.handleError(err))
  }

  handleSuccess() {
    this.setState({
      displayMessage: true,
      message: 'Message sent. Thanks for reaching out!',
    });

    this.name.value = '';
    this.email.value = '';
    this.message.value = '';
  }

  handleError() {
    this.setState({
      displayMessage: true,
      message: 'Error sending the message. Please try again or reach out to me at aemgreenheck@gmail.com.',
    });
  } 

  render() {
    const { displayMessage } = this.state;
    const classNamePrefix = 'contact-form';

    return (
      <div className={classNamePrefix}>

        <div className={`${classNamePrefix}__header`}>
            <span>Contact me</span>
        </div>

        <form method="post" role="form" onSubmit={(e) => this.handleOnSubmit(e)}>

            <label htmlFor="name">Name &#42;</label>
            <input
              name="name"
              ref={(input) => this.name = input}
              type="text"
              placeholder="Your name."
              required="required"
            />

            <label htmlFor="email">Email &#42;</label>
            <input
              name="email"
              type="text"
              ref={(input) => this.email = input}
              placeholder="Your email."
              required="required"
            />

            <label htmlFor="message">Message &#42;</label>
            <textarea
              name="message"
              placeholder="Enter your message here."
              rows="3"
              required="required"
              ref={(input) => this.message = input}
            ></textarea>

            <button type="submit">Submit</button>

        </form>

        <div className={`${classNamePrefix}__footer`}>
          {displayMessage &&
          <span className={`${classNamePrefix}__successMessage`}>
            {this.state.message}
          </span>}
        </div>

      </div>
    )
  }
}

export default ContactForm;
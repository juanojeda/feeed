import React, { Component } from 'react';

import '@/src/pages/_base.scss';
import '@/src/sass/_forms.scss';
import '@/src/sass/_typography.scss';

const handleSubmit = e => {
  fetch('/', {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: encode({ 'form-name': 'contact', ...this.state })
  });

  e.preventDefault();
};

const encode = data => {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&');
};

class ContactForm extends Component {
  constructor() {
    super();

    this.state = {
      form: {}
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    const newFormState = Object.assign({}, this.state.form, {
      [e.target.name]: e.target.value
    });

    this.setState({
      form: newFormState
    });
  }

  render() {
    return (
      <div>
        <h3 className="heading--h4">If you'd like to get in touch</h3>

        <p>
          Why don't you leave your name, a brief message, and an email address,
          and I'll get back to you!
        </p>

        <form
          name="contactMe"
          method="post"
          action="/contact/"
          data-netlify="true"
          data-netlify-honeypot="bot-field"
          onSubmit={handleSubmit}
        >
          <div className="form__row">
            <label htmlFor="contactName">Your name</label>
            <input
              onChange={this.handleChange}
              name="contactName"
              type="text"
            />
          </div>
          <div className="form__row">
            <label htmlFor="contactEmail">Your email address</label>
            <input
              onChange={this.handleChange}
              name="contactEmail"
              type="text"
            />
          </div>
          <div className="form__row">
            <label htmlFor="contactMsg">Your message</label>
            <textarea
              onChange={this.handleChange}
              name="contactMsg"
              type="text"
            />
          </div>

          <button onClick={handleSubmit}>Click</button>
        </form>
      </div>
    );
  }
}

export default ContactForm;

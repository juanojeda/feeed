import React, { Component } from 'react';

class ContactLinks extends Component {
  render() {
    return (
      <div>
        <h2 className="heading--h4">You wanna call me up?</h2>
        <p>Take my number down, it's...</p>
        <a
          href="https://www.instagram.com/foodandpuns/"
          className="link link--block"
        >
          Instagram
        </a>
        <a
          href="https://www.linkedin.com/in/juan-ojeda-a275b68/"
          className="link link--block"
        >
          LinkedIn
        </a>
        <a href="https://github.com/juanojeda" className="link link--block">
          Github
        </a>
        <a href="https://codepen.io/juanojeda/" className="link link--block">
          Codepen
        </a>
      </div>
    );
  }
}

export default ContactLinks;

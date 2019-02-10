import React, { Component } from 'react';

class About extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    const classNamePrefix = 'about';
  
    return (
      <div className={classNamePrefix}>
      
        <span>About me</span>
      
        <p>I have a passion for building beautiful things in both the digital world and the real world. I have expertise working with JavaScript and frameworks like React and Angular to deliver astounding user experiences. On the backend, I have experience creating servers and RESTful API's using Node, Express, SQL and NoSQL databases. I'm a highly motivated and goal oriented individual who always strives to be the very best at what I do. Excellent problem solver and communicator. On a constant journey of self-improvement. When I'm not working I love to explore New York on bike, tinker with motorcycles, and travel as often as I can.</p>
      
        <span>aemgreenheck@gmail.com</span>

      </div>
    )
  }
}

export default About;
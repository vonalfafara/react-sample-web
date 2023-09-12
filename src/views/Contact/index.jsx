import React from "react";
import "./index.css";

const Contact = () => {
  return (
    <section>
      <div className="container">
        <div className="contact">
          <h3>Need a team for your project?</h3>
          <p>Sign me up!</p>
          <form>
            <input type="text" placeholder="Your Name" />
            <input type="email" placeholder="Your Email Address" />
            <textarea name="" id="" cols="30" rows="10"></textarea>
            <button>Submit</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;

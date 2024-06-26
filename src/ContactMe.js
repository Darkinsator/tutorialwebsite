import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';

const ContactMe = () => {


  return (
    <div class="container">
      <h1>FormSubmit Demo</h1>
      <form target="_blank" action="https://formsubmit.co/66529c23ef5286501573c84bbf8c6b70" method="POST">
        <div class="form-group">
          <div class="form-row">
            <div class="col">
              <input type="text" name="name" class="form-control" placeholder="Full Name" required />
            </div>
            <div class="col">
              <input type="email" name="email" class="form-control" placeholder="Email Address" required />
            </div>
          </div>
        </div>
        <div class="form-group">
          <textarea placeholder="Your Message" class="form-control" name="message" rows="10" required></textarea>
        </div>
        <button type="submit" class="btn btn-lg btn-dark btn-block">Submit Form</button>
      </form>
      <footer>
        <p>© 2024 My Portfolio</p>
      </footer>
    </div>
  );
};

export default ContactMe;

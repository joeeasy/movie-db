import React, { Component } from "react";

class ContactForm extends Component {
  render() {
    return (
      <div className="container section negative-margin contact">
        <div className="row">
          <div className="col-sm-12">
            <h2>Send a message</h2>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-6">
            <form>
              <div className="form-group">
                <label>Name *</label>
                <input type="text" />
              </div>
              <div className="form-group">
                <label>Email *</label>
                <input type="email" />
              </div>
              <div className="form-group">
                <label>Where did you hear about us?</label>
                <input type="text" />
              </div>
              <div className="form-group">
                <label>Message *</label>
                <textarea rows="5" />
              </div>
              <div className="form-group right-align">
                <button className="btn btn-ghost">Send message</button>
              </div>
            </form>
          </div>
          <div className="col-sm-5 col-sm-push-1">
            <div className="icon-row">
              <div className="col">
                <span className="circle">
                  <i className="material-icons">email</i>
                </span>
              </div>
              <div className="col">
                <h4 className="no-underline">Email</h4>
                <p>
                  <a
                    href="#"
                    className="__cf_email__"
                    data-cfemail="c4adaaa2ab84a9abb2ada1b7b0a5b6eaa7abeab1af"
                  >
                    [email&#160;protected]
                  </a>
                </p>
              </div>
            </div>
            <div className="icon-row">
              <div className="col">
                <span className="circle">
                  <i className="material-icons">phone in talk</i>
                </span>
              </div>
              <div className="col">
                <h4 className="no-underline">Telephone</h4>
                <p>+2347059972180</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ContactForm;

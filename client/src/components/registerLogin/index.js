import React, { Component } from "react";

class RegisterLogin extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <h2> Login</h2>
          <form
            className="col s12"
            onSubmit={(event) => this.submit(EventSource)}
          >
            <div className="row">
              <div className="input-field col s12">
                <input
                  name="email"
                  value={this.state.email}
                  onChange={(e) => this.handleChange(e)}
                  id="email"
                  type="email"
                  className="validate"
                />
                <lavel htmlFor="email">Email</lavel>
                <span
                  className="helper-text"
                  data-error="type a right type email"
                  data-success="ok!"
                />
              </div>
            </div>
            <div className="row">
              <div className="input-field col s12">
                <input
                  name="password"
                  value={this.state.password}
                  onChange={(e) => this.handleChange(e)}
                  id="password"
                  type="password"
                  className="validate"
                />
                <lavel htmlFor="email">Password</lavel>
                <span
                  className="helper-text"
                  data-error="Wrong password"
                  data-success="ok!"
                />
              </div>
            </div>
          </form>
        </div>
        Login Page
      </div>
    );
  }
}

export default RegisterLogin;

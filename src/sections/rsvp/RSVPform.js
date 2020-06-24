import React from "react";
import "./RSVP.scss";

export default class RSVPform extends React.Component {
  constructor() {
    super();
    this.state = {
      firstname: "",
      lastname: "",
      email: "",
      plusOne: "",
      addGuest: false,
    };
  }
  handleSubmit() {
    console.log(this.state);
  }
  render() {
    return (
      <div id="form_container">
        <form onSubmit={this.handleSubmit.bind(this)} id="rsvpform">
          <div className="form_item">
            <p>First Name</p>
            <input
              className={"form_input"}
              type="text"
              value={this.state.firstname}
              // placeholder={"First Name"}
              onChange={(event) =>
                this.setState({ firstname: event.target.value })
              }
            />
          </div>
          <div className="form_item">
            <p>Last Name</p>
            <input
              className={"form_input"}
              type="text"
              value={this.state.lastname}
              onChange={(event) =>
                this.setState({ lastname: event.target.value })
              }
            />
          </div>
          <div className="form_item">
            <p>Email Address</p>
            <input
              className={"form_input"}
              type="text"
              value={this.state.email}
              onChange={(event) => this.setState({ email: event.target.value })}
            />
          </div>
          <div className="form_item">
            <p>Name of Your Plus One</p>
            <input
              className={"form_input"}
              type="text"
              value={this.state.plusOne}
              onChange={(event) =>
                this.setState({ plusOne: event.target.value })
              }
            />
          </div>
          <button type="submit" className="submit_button">
            Submit
          </button>
        </form>
      </div>
    );
  }
}

import React, { Component } from "react";

export default class Profile extends Component {
  render() {
    console.log(this.props);
    return (
      <div className="p-5 bg-success">
        <h2>Profile</h2>
        <p>{this.props.content}</p>
        <p>{this.props.name}</p>
        <button
          onClick={() => {
            this.props.handleChange("Aliceeee");
          }}
          className="btn btn-primary"
        >
          Alice
        </button>
      </div>
    );
  }
}

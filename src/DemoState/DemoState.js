import React, { Component } from "react";

export default class DemoState extends Component {
  state = {
    soLuong: 1,
  };
  render() {
    return (
      <div>
        <h2>DemoState</h2>
        <button className="btn btn-danger">-</button>
        <strong className="mx-5">{this.state.soLuong}</strong>
        <button className="btn btn-success">+</button>
        {/* dùng databinding đưa số lượng lê layout */}
      </div>
    );
  }
}

// state : quản lý các data liên quan đến việc update layout (re-render)

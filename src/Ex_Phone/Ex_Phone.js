import React, { Component } from "react";
import List from "./List";
import Detail from "./Detail";
import { PhoneArr } from "./data";

export default class Ex_Phone extends Component {
  state = {
    phoneArr: PhoneArr,
    phoneSelected: PhoneArr[0],
  };
  render() {
    return (
      <div>
        <List phoneList={this.state.phoneArr} />
        <Detail detail={this.state.phoneSelected} />
      </div>
    );
  }
}

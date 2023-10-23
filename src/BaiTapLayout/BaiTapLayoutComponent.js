import React, { Component } from "react";
import HeaderComponent from "./HeaderComponent";
import FooterComponent from "./FooterComponent";
import BodyComponent from "./Body/BodyComponent";

export default class BaiTapLayoutComponent extends Component {
  render() {
    return (
      <div>
        <HeaderComponent />
        <BodyComponent />
        <FooterComponent />
      </div>
    );
  }
}

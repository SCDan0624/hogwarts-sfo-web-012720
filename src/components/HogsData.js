import React, { Component } from "react";
import Hogs from "./Hogs";

export default class HogsData extends Component {
  handleHog = () => {
    return this.props.hogs.map((hog) => <Hogs hog={hog} />);
  };

  render() {
    return <div className="ui link cards">{this.handleHog()}</div>;
  }
}

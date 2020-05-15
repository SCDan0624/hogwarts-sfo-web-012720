import React, { Component } from "react";
import "../App.css";
import Nav from "./Nav";
import hogs from "../porkers_data";
import HelloWorld from "./HelloWorld";
import HogsData from "./HogsData";
import HogsFilter from "./HogsFilter";

class App extends Component {
  constructor() {
    super();
    this.state = {
      hogs: [...hogs],
      filterBy: "None"
    };
  }

  handleOnChange = (type) => {
    this.setState({
      filterBy: type

    })
  }

  handleFilterHogs = () => {
    switch (this.state.filterBy) {
      case "Grease":
        return this.state.hogs.filter(hog => hog.greased);
      case "Name":
        return this.state.hogs.sort((hog, hog2) => hog.name.localeCompare(hog2.name))
      case "Weight":
        return this.state.hogs.sort((hog, hog2) => hog.weight - hog2.weight)
      case "None":
        return this.state.hogs
    }

  }

  render() {
    console.log(this.state.filterBy)
    return (
      <div className="ui grid container">
        <div className="ui eight wide column">
          <HogsFilter filterBy={this.handleOnChange} />
          <Nav />
          <HelloWorld />
          <HogsData hogs={this.handleFilterHogs()} />

        </div>
      </div>
    );
  }
}

export default App;

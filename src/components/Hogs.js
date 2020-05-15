import React from "react";
import hogs from "../porkers_data";
import HogsData from "./HogsData";


export default class Hogs extends React.Component {
  //   handleHogs = () => {
  //     hogs.map((hog) => hog.name, hog.specialty, hog.greased, hog.weight);
  //   };

  handleHogImage = () => {
    let pigImage = require(`../hog-imgs/${this.props.hog.name.split(" ").join("_").toLowerCase()}.jpg`)
    return <img src={pigImage} />
  }

  render(props) {
    console.log(this.props.hog)
    return (
      <div class="card">
        <div class="image">
          {this.handleHogImage()}
        </div>
        <div class="content">
          <div class="header"> {this.props.hog.name}</div>
          <div class="meta">
            <a> {this.props.hog.specialty}</a>
          </div>
          <div class="description">
            {this.props.hog.greased.toString()}
          </div>
        </div>
        <div class="extra content">

          <span>
            <i class="user icon"></i>
            {this.props.hog.weight}
          </span>
        </div>
      </div>
    );
  }
}

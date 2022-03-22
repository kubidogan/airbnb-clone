import React from "react";
import "./marker.css";

class Marker extends React.Component {
  render () {
    let classes = "marker";
    if (this.props)
    return (
      <div className="marker"> €
        {this.props.text}
      </div> );
  }
}

export default Marker;

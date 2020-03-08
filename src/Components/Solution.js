import React, { Component } from "react";

class Solution extends Component {
    render() {
        let spaces =["_ ","_ ","_ ","_ "]
      return (
        <div>
          <div>{spaces.map(m => m)}</div>
          <p>Hint for the bitch</p>
        </div>
      );
    }
  }

export default Solution;
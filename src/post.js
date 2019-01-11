import React from "react";

const postEl = props => {
    return (
      <h1>
        {" "}
        {props.tittle} - {props.body}
      </h1>
    );
  };
  
export default postEl;
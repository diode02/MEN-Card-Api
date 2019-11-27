import React from "react";
import Avatar from "./Avatar";
const User = props => {
  return (
    <div>
      <Avatar img={props.img} />
      {props.name}
    </div>
  );
};

export default User;

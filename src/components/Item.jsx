import React from "react";

const Item = ({ item }) => {
  return (
    <React.Fragment>
      <li>{item.title}</li>
    </React.Fragment>
  );
};
export default Item;
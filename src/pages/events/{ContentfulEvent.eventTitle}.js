import React from "react";

const AllEvents = (props) => {
  console.log(props);
  return (
    <div className="">
      <h2>{props.params.eventTitle}</h2>
    </div>
  );
};

export default AllEvents;

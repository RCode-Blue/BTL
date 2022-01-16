import React from "react";

// import "../../styles/home/events.scss";
import "../../styles/allStyles.scss";

// import { EventBox } from "../_reusables/contentSection/sectionColumns";
import EventBox from "../_reusables/event/eventBox";
import { SectionHeaderLight } from "../_reusables/contentSection/sectionHeader";

import latestEvents from "../../queries/fetchEventsLimited";

const Events = () => {
  const events = latestEvents();

  const node0 = events.allContentfulEvent.nodes[0];
  const node1 = events.allContentfulEvent.nodes[1];
  const node2 = events.allContentfulEvent.nodes[2];
  const node3 = events.allContentfulEvent.nodes[3];
  const node4 = events.allContentfulEvent.nodes[4];
  const node5 = events.allContentfulEvent.nodes[5];
  const headerText = "Events";

  return (
    <div>
      <SectionHeaderLight text={headerText} />
      <div className="events-sectionbody">{<EventBox node={node0} />}</div>
      <div className="events-sectionbody">{<EventBox node={node1} />}</div>
      <div className="events-sectionbody">{<EventBox node={node2} />}</div>
      <div className="events-sectionbody">{<EventBox node={node3} />}</div>
      <div className="events-sectionbody">{<EventBox node={node4} />}</div>
      <div className="events-sectionbody">{<EventBox node={node5} />}</div>
    </div>
  );
};

export default Events;

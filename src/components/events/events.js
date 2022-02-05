import React from "react";

// import "../../styles/home/events.scss";
// import "../../styles/allStyles.scss";
import filterFutureEvents from "../../scripts/filterFutureEvents";

// import { EventBox } from "../_reusables/contentSection/sectionColumns";
import EventBox from "../_reusables/event/eventBox";
import { SectionHeaderLight } from "../_reusables/contentSection/sectionHeader";

import allEvents from "../../queries/fetchAllEvents";

const Events = () => {
  const events = allEvents();

  // const node0 = events.allContentfulEvent.nodes[0];
  // const node1 = events.allContentfulEvent.nodes[1];
  // const node2 = events.allContentfulEvent.nodes[2];
  // const node3 = events.allContentfulEvent.nodes[3];
  // const node4 = events.allContentfulEvent.nodes[4];
  // const node5 = events.allContentfulEvent.nodes[5];

  const futureEvents = filterFutureEvents(events.allContentfulEvent.nodes);
  const headerText = "Events";

  const node0 = futureEvents[0];
  const node1 = futureEvents[1];
  const node2 = futureEvents[2];

  console.log(node0);

  return (
    <div>
      <SectionHeaderLight text={headerText} />
      <div className="events-sectionbody">{<EventBox node={node0} />}</div>
      <div className="events-sectionbody">{<EventBox node={node1} />}</div>
      <div className="events-sectionbody">{<EventBox node={node2} />}</div>
    </div>
  );
};

export default Events;

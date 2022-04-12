import React from "react";

// import "../../styles/home/events.scss";
// import "../../styles/allStyles.scss";
import filterFutureEvents from "../../scripts/filterFutureEvents";

import EventBox from "../_reusables/event/eventBox";
import { SectionHeaderLight } from "../_reusables/contentSection/sectionHeader";

import allEvents from "../../queries/fetchAllEvents";

const Events = () => {
  const events = allEvents();

  const futureEvents = filterFutureEvents(events.allContentfulEvent.nodes);
  const headerText = "Events";

  const node0 = futureEvents[0];
  const node1 = futureEvents[1];
  const node2 = futureEvents[2];

  console.log(node0);

  return (
    <div>
      <SectionHeaderLight text={headerText} />
      <div className="eventspage-wrap">
        <div className="eventspage__box">{<EventBox node={node0} />}</div>
        <div className="eventspage__box">{<EventBox node={node1} />}</div>
        <div className="eventspage__box">{<EventBox node={node2} />}</div>
      </div>
    </div>
  );
};

export default Events;

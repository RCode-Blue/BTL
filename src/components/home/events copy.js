import React from "react";

// import "../../styles/home/events.scss";

// import { EventBox } from "../_reusables/contentSection/sectionColumns";
import EventBox from "../_reusables/event/eventBox";
import { SectionHeaderLight } from "../_reusables/contentSection/sectionHeader";

import latestEvents from "../../queries/fetchEventsLimited";

const Events = () => {
  const events = latestEvents();

  const node0 = events.allContentfulEvent.nodes[0];
  const node1 = events.allContentfulEvent.nodes[1];
  const headerText = "Events";

  return (
    <div>
      <SectionHeaderLight text={headerText} />
      <div className="home-section-events-wrapper">
        <div className="home-section-eventsbox">
          {<EventBox node={node0} />}
        </div>
        <div className="home-section-eventsbox">
          {<EventBox node={node1} />}
        </div>
      </div>
    </div>
  );
};

export default Events;

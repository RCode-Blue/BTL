import React from "react";

import "../../styles/home/events.scss";

import { EventBox } from "../_reusables/contentSection/sectionColumns";
import { SectionHeaderLight } from "../_reusables/contentSection/sectionHeader";

import latestEvents from "../../queries/fetchEventsLimited";

const Events = () => {
  const events = latestEvents();

  const node1 = events.allContentfulEvent.nodes[0];
  const node2 = events.allContentfulEvent.nodes[1];
  const headerText = "Events";

  return (
    <div>
      <SectionHeaderLight text={headerText} />
      <div className="sectionbody">
        <EventBox node={node1} />
        <EventBox node={node2} />
      </div>
    </div>
  );
};

export default Events;

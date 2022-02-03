import React from "react";

import filterFutureEvents from "../../scripts/filterFutureEvents";

// import "../../styles/home/events.scss";

import EventBox from "../_reusables/event/eventBox";
import { SectionHeaderLight } from "../_reusables/contentSection/sectionHeader";

import AllEvents from "../../queries/fetchAllEvents";

const Events = () => {
  const events = AllEvents();

  // console.log(events);

  // const graphQLDate = graphQLStart.slice(0, 10);
  // const graphQLTime = graphQLStart.substr(11, 5);
  // const dateString = graphQLDate + " " + graphQLTime;
  // const anotherDay = moment.tz(dateString, "Australia/Brisbane");

  const allEvents = events.allContentfulEvent.nodes;

  const futureEvents = filterFutureEvents(allEvents);
  const node0 = futureEvents[0];
  const node1 = futureEvents[1];
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

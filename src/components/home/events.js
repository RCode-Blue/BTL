import React from "react";

import filterFutureEvents from "../../scripts/filterFutureEvents";

import EventBox from "../_reusables/event/eventBox";
import { SectionHeaderLight } from "../_reusables/contentSection/sectionHeader";

import AllEvents from "../../queries/fetchAllEvents";

const renderFutureEvents = (allEvents, size) => {
  let futureEvents = filterFutureEvents(allEvents);
  if (futureEvents.length === 0) {
    return (
      <div className="home-section-events-wrapper">
        No future events scheduled
      </div>
    );
  }
  return (
    <div className="home-section-events-wrapper">
      {futureEvents.slice(0, size).map((event) => {
        return (
          <div className="home-section-eventsbox" key={event.id}>
            {<EventBox node={event} />}
          </div>
        );
      })}
    </div>
  );
};

const Events = () => {
  const events = AllEvents();
  const allEvents = events.allContentfulEvent.nodes;
  const headerText = "Events";

  return (
    <div id="whatson">
      <SectionHeaderLight text={headerText} />
      <div>{renderFutureEvents(allEvents, 2)}</div>
    </div>
  );
};

export default Events;

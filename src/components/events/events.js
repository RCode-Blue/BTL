import React from "react";

import filterFutureEvents from "../../scripts/filterFutureEvents";

import EventBox from "../_reusables/event/eventBox";
import { SectionHeaderLight } from "../_reusables/contentSection/sectionHeader";

import allEvents from "../../queries/fetchAllEvents";

/**
 * @description Main events page component
 *
 * @namespace Events
 * @memberof App.components.EventsMain
 */
const Events = () => {
  const events = allEvents();

  const headerText = "Events";

  /**
   * @description Renders future events
   *
   * @function renderFutureEvents
   * @inner
   * @memberof App.components.Events
   *
   * @param {object} allEvents
   * @param {integer} size The number of future events to render
   * @returns {component} A component containing the specified number of future events; alternate message if there are none
   */
  const renderFutureEvents = (allEvents, size) => {
    let futureEvents = filterFutureEvents(allEvents.allContentfulEvent.nodes);
    if (futureEvents.length === 0) {
      return <div className="eventspage-wrap">No future events scheduled</div>;
    }
    return (
      <div className="eventspage-wrap">
        {futureEvents.slice(0, size).map((event) => {
          return (
            <div className="eventspage__box" key={event.id}>
              {<EventBox node={event} />}
            </div>
          );
        })}
      </div>
    );
  };
  return (
    <div>
      <SectionHeaderLight text={headerText} />
      {renderFutureEvents(events, 3)}
    </div>
  );
};

export default Events;

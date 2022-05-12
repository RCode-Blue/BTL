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
   * @memberof App.components.EventsMain.Events
   *
   * @param {object} allEvents
   * @param {integer} size The number of future events to render
   * @returns {component} A component containing the specified number of future events; alternate message if there are none
   *
   * @example
   * renderFutureEvents(
   *  {
   *    allContentfulEvent: {
   *      nodes: [
   *        {
   *          {
   *            "eventDuration": "2 hours",
   *            "eventStart": "2022-05-25T00:00+10:00",
   *            "eventTitle": "What is a Circular Economy",
   *            "id": "b929ck10-b03h-5fa4-879f-257d12d3ebf4",
   *            "eventLocation": {
   *              "id": "ee3498dc-e3u6-5l28-84ac-0e3c40s1dead"
   *          },
   *          "eventImage": {
   *             "id": "d7ccf4of-7fg0-5ggc-a91a-90869s15vb9e",
   *             "image": {
   *               "gatsbyImageData": {},
   *               "title": "Windmills 01",
   *               "description": "Image of windmills in a field"
   *              },
   *              "title": "Windmill01"
   *          },
   *          "slug": "what-is-a-circular-economy"
   *        },
   *        {...}
   *      ]
   *    }
   *  },
   *  5
   * )
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

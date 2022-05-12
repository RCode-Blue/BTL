/**
 * @description Filters out events that have happend prior to current date time
 *
 * @function filterFutureEvents
 * @param {AllEvents} allevents
 */
import dayjs from "dayjs";

const filterFutureEvents = (allEvents) => {
  const now = dayjs();

  let futureEvents = [];
  allEvents.forEach((elem) => {
    const evtStartDay = dayjs(elem.eventStart);
    if (now < evtStartDay) {
      futureEvents.push(elem);
    }
  });
  return futureEvents;
};

export default filterFutureEvents;

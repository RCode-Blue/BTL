import moment from "moment-timezone";

const filterFutureEvents = (allEvents) => {
  const today = moment();

  let futureEvents = [];
  allEvents.forEach((elem) => {
    const evtStartMoment = moment.tz(elem.eventStart, "Australia/Brisbane");
    if (today < evtStartMoment) {
      elem.momentStart = evtStartMoment;
      futureEvents.push(elem);
    }
  });
  return futureEvents;
};

export default filterFutureEvents;

// import moment from "moment-timezone";
import dayjs from "dayjs";

const filterFutureEvents = (allEvents) => {
  // const today = moment();
  const now = dayjs();

  let futureEvents = [];
  allEvents.forEach((elem) => {
    const evtStartDay = dayjs(elem.eventStart);
    if (now < evtStartDay) {
      futureEvents.push(elem);
    }

    // const evtStartMoment = moment.tz(elem.eventStart, "Australia/Brisbane");
    // if (today < evtStartMoment) {
    //   elem.momentStart = evtStartMoment;
    //   futureEvents.push(elem);
    // }
  });
  return futureEvents;
};

export default filterFutureEvents;

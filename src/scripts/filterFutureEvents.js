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
  });
  return futureEvents;
};

export default filterFutureEvents;

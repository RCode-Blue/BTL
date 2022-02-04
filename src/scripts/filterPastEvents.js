import moment from "moment-timezone";
import dayjs from "dayjs";

const filterPastEvents = (allEvents) => {
  const now = dayjs();

  let pastEvents = [];
  allEvents.forEach((elem) => {
    const evtStartDay = dayjs(elem.eventStart);
    if (now > evtStartDay) {
      pastEvents.push(elem);
    }
  });
  return futureEvents;
};

export default filterPastEvents;

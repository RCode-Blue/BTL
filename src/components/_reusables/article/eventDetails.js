import React from "react";

// import "../../../styles/_reusables/eventDetails.scss";
// import "../../../styles/allStyles.scss";

const renderEventCategories = (data) => {
  const {
    onlineEvent: isOnline,
    inPersonEvent: isInperson,
    seminar: isSeminar,
    workshop: isWorkshop,
  } = data.data;

  return (
    <div className="eventpage-article__details__categories">
      {isOnline ? <div>Online</div> : <div></div>}
      {isInperson ? <div>In-Person</div> : <div></div>}
      {isSeminar ? <div>Seminar</div> : <div></div>}
      {isWorkshop ? <div>Workshop</div> : <div></div>}
    </div>
  );
};

const renderEvtTimes = (data) => {
  const { eventStart: start, eventDuration: duration } = data.data;
  return (
    <div className="eventpage-article__details__times">
      <div className="">{start}</div>
      <div className="">{duration}</div>
    </div>
  );
};

const EventDetails = (data) => {
  return (
    <div className="eventpage-article__details-wrapper">
      <div className="eventpage-article__details">
        {renderEventCategories(data)}
        {renderEvtTimes(data)}
      </div>
    </div>
  );
};

export default EventDetails;

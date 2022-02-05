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
      {isOnline ? (
        <div className="eventpage-article__details__categories__category">
          Online
        </div>
      ) : (
        <div className="eventpage-article__details__categories__blank"></div>
      )}
      {isInperson ? (
        <div className="eventpage-article__details__categories__category">
          In-Person
        </div>
      ) : (
        <div className="eventpage-article__details__categories__blank"></div>
      )}
      {isSeminar ? (
        <div className="eventpage-article__details__categories__category">
          Seminar
        </div>
      ) : (
        <div className="eventpage-article__details__categories__blank"></div>
      )}
      {isWorkshop ? (
        <div className="eventpage-article__details__categories__category">
          Workshop
        </div>
      ) : (
        <div className="eventpage-article__details__categories__blank"></div>
      )}
    </div>
  );
};

const renderEvtTimes = (data) => {
  const { eventStart: start, eventDuration: duration } = data.data;
  return (
    <div className="eventpage-article__details__times">
      <div className="eventpage-article__details__times__start">{start}</div>
      <div className="eventpage-article__details__times__duration">
        {duration}
      </div>
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

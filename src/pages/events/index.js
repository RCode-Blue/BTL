import React from "react";

import MainLayout from "../../layouts/mainLayout";
import EventsMain from "../../components/events/eventsMain";

import "../../styles/allStyles.scss";

function App() {
  return (
    <MainLayout>
      <EventsMain />
    </MainLayout>
  );
}

export default App;

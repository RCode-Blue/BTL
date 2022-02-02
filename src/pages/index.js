import React from "react";

import MainLayout from "../layouts/mainLayout";
import HomeMain from "../components/home/homeMain";
import "../styles/_variables.scss";
import "../styles/_mixins.scss";
// import "../styles/allStyles.scss";
import "../styles/header.scss";
import "../styles/subheader.scss";
import "../styles/reusables.scss";
import "../styles/home.scss";
import "../styles/events.scss";
import "../styles/event_page.scss";
import "../styles/footer.scss";

function App() {
  return (
    <MainLayout>
      <HomeMain />
    </MainLayout>
  );
}

export default App;

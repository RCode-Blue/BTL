/**
 * @description Top-level component
 *
 * @namespace App.components
 */
import React from "react";
import MainLayout from "../layouts/mainLayout";
import HomeMain from "../components/home/homeMain";

import "../styles/allStyles.scss";

function App() {
  return (
    <MainLayout>
      <HomeMain />
    </MainLayout>
  );
}

export default App;

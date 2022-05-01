import React from "react";
import ReactGA from "react-ga";

const useAnalyticsEventTracker = (category="Blog category") => {
  const eventTracker = (action = "click", label = "Works page visited") => {
    ReactGA.event({category, action, label});
  }
  return eventTracker;
}

export default useAnalyticsEventTracker;
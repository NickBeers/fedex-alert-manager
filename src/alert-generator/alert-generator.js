import { loremIpsum } from "react-lorem-ipsum";
import * as alertData from "./alert-data";
import store from "../store/configureStore";
import * as alerts from "../store/alerts.js";

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

const alertGenerator = function () {
  const randInt = getRandomInt(4);

  var title;
  var alertClass;

  switch (randInt) {
    // staff
    case 0:
      const staff = alertData.staffTitles;
      title = staff[getRandomInt(staff.length)];
      alertClass = "staff";
      break;
    // timing
    case 1:
      const timing = alertData.timingTitles;
      title = timing[getRandomInt(timing.length)];
      alertClass = "timing";
      break;
    // volume
    case 2:
      const volume = alertData.volumeTitles;
      title = volume[getRandomInt(volume.length)];
      alertClass = "volume";
      break;
    // weather
    case 3:
      const weather = alertData.weatherTitles;
      title = weather[getRandomInt(weather.length)];
      alertClass = "weather";
      break;
    default:
  }

  const isCritical = alertData.levels[getRandomInt(alertData.levels.length)];
  const location = alertData.location[getRandomInt(alertData.location.length)];

  store.dispatch(
    alerts.alertAdded({
      title,
      body: loremIpsum({ random: true })[0],
      isCritical,
      location,
      alertClass,
    })
  );
};

export default alertGenerator;

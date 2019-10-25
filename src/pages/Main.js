import React from "react";

export default function Main(props) {
  const [pos, setPos] = React.useState({ lat: "", lng: "" });
  const [time, setTime] = React.useState("");

  React.useEffect(() => {
    if (props.location) {
      fetch(
        `http://www.mapquestapi.com/geocoding/v1/address?key=03hqhhNBkWfGywAsE9GJh1Xqg39M3Jcp&location=${props.location}`
      )
        .then(response => response.json())
        .then(data => {
          let item = data.results[0].locations[0].latLng;
          setPos(item);
        });
    }
  }, [props.location]);

  React.useEffect(() => {
    if (pos.lat) {
      fetch(
        `http://api.timezonedb.com/v2.1/get-time-zone?key=0C1IU2VIYEG0&format=json&by=position&lat=${pos.lat}&lng=${pos.lng}`
      )
        .then(response => response.json())
        .then(data => {
          let date = new Date(data.timestamp * 1000);
          setTime(date);
        });
    }
  }, [pos]);

  return (
    <div>
      It is currently{" "}
      {time
        ? `${time.getHours() < 10 ? `0${time.getHours()}` : time.getHours()}:${
            time.getMinutes() < 10 ? `0${time.getMinutes()}` : time.getMinutes()
          }:${
            time.getSeconds() < 10 ? `0${time.getSeconds()}` : time.getSeconds()
          }`
        : ""}
    </div>
  );
}

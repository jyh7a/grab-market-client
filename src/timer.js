import React, { useState, useEffect } from "react";

function TimerComponent() {
  const [time, setTime] = useState(0);

  function addTime() {
    setTime(time + 1);
  }

  function downTime() {
    setTime(time - 1);
  }

  useEffect(() => {
    setTime(time + 1);
  }, []);

  return (
    <>
      <button onClick={addTime}>타임 +1 Click!</button>
      <button onClick={downTime}>타임 -1 Click!</button>
      <p>타입: {time}</p>
    </>
  );
}

export default TimerComponent;

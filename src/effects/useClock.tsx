import React, { useState, useEffect } from 'react';

export default function useClock () {
  const [timer, setTimer] = React.useState(null);
  const [time, setTime] = React.useState(getNow());

  // this effect will run when our app renders for the first time
  React.useEffect(() => {
    // When this effect runs, initialize the timer / interval
    if (!timer) initTimer();

    // This returned function will clear the interval when our app unmounts
    // @ts-ignore
    return (() => (timer && window.clearInterval(timer) && setTimer(null)));

  }, [timer]); // This hook will run only when the value of timer is set or unset

  function initTimer () {
    const now = Date.now();
    const nextSec = (Math.floor(now / 1000) + 1) * 1000;
    const timeLeft = nextSec - now;

    // Register an interval beginning next second
    window.setTimeout(() => {
      // on each second update the state time
      const interval = window.setInterval(() => setTime(getNow()), 1000);

      // now our timer / interval is set
      setTimer(interval);
    }, timeLeft);
  }

  return time;
}

function getNow () {
  const now = new Date(Date.now());
  const hour = (now.getHours()<10?'0':'') + now.getHours();
  const minute = (now.getMinutes()<10?'0':'') + now.getMinutes();
  const second = (now.getSeconds()<10?'0':'') + now.getSeconds();
  const display = now.toLocaleString();
  const amOrPm = now.getHours() > 11 ? "PM" : "AM"

  return {
    hour,
    minute,
    second,
    display,
    amOrPm,
  };
}
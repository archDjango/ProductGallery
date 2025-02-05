import React, { useState, useEffect } from "react";
import "../styles/Timer.css";

const SALE_DURATION = 60;

export default function Timer() {
  const [timeLeft, setTimeLeft] = useState(SALE_DURATION);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => (prev > 0 ? prev - 1 : SALE_DURATION));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return <div className="timer">Sale Ends In: {timeLeft}s</div>;
}

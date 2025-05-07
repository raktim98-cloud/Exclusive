import React, { useState, useEffect } from 'react';

const SimpleCountdown = () => {
  const [time, setTime] = useState({
    days: 3,
    hours: 23,
    minutes: 19,
    seconds: 56
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(prev => {
        let { days, hours, minutes, seconds } = prev;
        
        seconds -= 1;
        
        if (seconds < 0) {
          seconds = 59;
          minutes -= 1;
        }
        
        if (minutes < 0) {
          minutes = 59;
          hours -= 1;
        }
        
        if (hours < 0) {
          hours = 23;
          days -= 1;
        }
        
        if (days < 0) {
          clearInterval(timer);
          return { days: 0, hours: 0, minutes: 0, seconds: 0 };
        }
        
        return { days, hours, minutes, seconds };
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex flex-col items-start justify-center  font-mono pl-[80px]">
      <div className="flex space-x-4 mb-2 text-sm text-gray-600">
        <span className="w-16 text-center">Days</span>
        <span className="w-16 text-center">Hours</span>
        <span className="w-16 text-center">Minutes</span>
        <span className="w-16 text-center">Seconds</span>
      </div>
      
      <div className="flex space-x-2 text-4xl font-bold">
        <span className="w-16 text-center">{time.days.toString().padStart(2, '0')}</span>
        <span>:</span>
        <span className="w-16 text-center">{time.hours.toString().padStart(2, '0')}</span>
        <span>:</span>
        <span className="w-16 text-center">{time.minutes.toString().padStart(2, '0')}</span>
        <span>:</span>
        <span className="w-16 text-center">{time.seconds.toString().padStart(2, '0')}</span>
      </div>
    </div>
  );
};

export default SimpleCountdown;
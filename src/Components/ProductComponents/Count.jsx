import { useEffect, useState } from "react";
import { formateTime } from "../../Helper Function/formateTime";

function Count() {
  const [targetDate, setTargetDate] = useState("2025-06-10T23:59:59");
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  useEffect(() => {
    const calculaterTime = () => {
      const difference = Number(new Date(targetDate)) - Number(new Date());
      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / (1000 * 60)) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        });
      }
    };
    calculaterTime();
    const timer = setInterval(calculaterTime, 1000);
    return () => clearInterval(timer);
  }, [targetDate]);

  return (
    <div className="flex items-baseline justify-center gap-6 font-mono">
      {/* Hours */}
      <div className="rounded-full bg-white px-[10px] py-[14px] flex flex-col items-center justify-center">
        <div className="text-[16px] leading-[20px] font-semibold">
          {formateTime(timeLeft.days)}
        </div>
        <div className="text-[11px] leading-[18px]">Seconds</div>
      </div>

      {/* Days */}
      <div className="rounded-full bg-white px-[10px] py-[14px] flex flex-col items-center justify-center">
        <div className="text-[16px] leading-[20px] font-semibold">
          {formateTime(timeLeft.hours)}
        </div>
        <div className="text-[11px] leading-[18px]">Seconds</div>
      </div>

      {/* Minutes */}
      <div className="rounded-full bg-white px-[10px] py-[14px] flex flex-col items-center justify-center">
        <div className="text-[16px] leading-[20px] font-semibold">
          {formateTime(timeLeft.minutes)}
        </div>
        <div className="text-[11px] leading-[18px]">Seconds</div>
      </div>

      {/* Seconds */}
      <div className="rounded-full bg-white px-[10px] py-[14px] flex flex-col items-center justify-center">
        <div className="text-[16px] leading-[20px] font-semibold">
          {formateTime(timeLeft.seconds)}
        </div>
        <div className="text-[11px] leading-[18px]">Seconds</div>
      </div>
    </div>
  );
}

export default Count;

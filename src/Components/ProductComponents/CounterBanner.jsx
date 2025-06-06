import { useEffect, useState } from "react"
import { formateTime} from "../../Helper Function/formateTime";

function CounterBanner() {
  const [targetDate, setTargetDate] = useState("2025-06-10T23:59:59")
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  })
  useEffect (()=> {
   const calculaterTime = ()=> {
     const difference = Number(new Date(targetDate)) - Number(new Date())
    if (difference > 0) {
      setTimeLeft({
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / (1000 * 60)) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      })
    }
   };
   calculaterTime();
    const timer = setInterval(calculaterTime ,1000)
    return ()=> clearInterval(timer)
  },[targetDate])
 

  
  return (
    <div className="flex items-baseline justify-center gap-2 font-mono">
      {/* Hours */}
      <div className="text-center">
        <div className="text-3xl font-bold text-black">{formateTime(timeLeft.days)}</div>
        <div className="text-xs uppercase tracking-wider text-black">Days</div>
      </div>
      
      {/* Divider */}
      <div className="text-2xl font-bold text-black">:</div>
      
      {/* Days */}
      <div className="text-center">
        <div className="text-3xl font-bold text-black">{formateTime(timeLeft.hours)}</div>
        <div className="text-xs uppercase tracking-wider text-black">Hours</div>
      </div>
      
      {/* Divider */}
      <div className="text-2xl font-bold text-black">:</div>
      
      {/* Minutes */}
      <div className="text-center">
        <div className="text-3xl font-bold text-black">{formateTime(timeLeft.minutes)}</div>
        <div className="text-xs uppercase tracking-wider text-black">Minutes</div>
      </div>
      
      {/* Divider */}
      <div className="text-2xl font-bold text-black">:</div>
      
      {/* Seconds */}
      <div className="text-center">
        <div className="text-3xl font-bold text-black">{formateTime(timeLeft.seconds)}</div>
        <div className="text-xs uppercase tracking-wider text-black">Seconds</div>
      </div>
    </div>
  )
}

export default CounterBanner
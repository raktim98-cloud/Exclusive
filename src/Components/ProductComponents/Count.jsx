import React from 'react'

function Count() {
  return (
    <div className="flex items-baseline justify-center gap-2 font-mono">
      {/* Hours */}
      <div className="text-center">
        <div className="text-3xl font-bold text-red-600">23</div>
        <div className="text-xs uppercase tracking-wider text-red-500">Hours</div>
      </div>
      
      {/* Divider */}
      <div className="text-2xl font-bold text-red-600">:</div>
      
      {/* Days */}
      <div className="text-center">
        <div className="text-3xl font-bold text-red-600">05</div>
        <div className="text-xs uppercase tracking-wider text-red-500">Days</div>
      </div>
      
      {/* Divider */}
      <div className="text-2xl font-bold text-red-600">:</div>
      
      {/* Minutes */}
      <div className="text-center">
        <div className="text-3xl font-bold text-red-600">58</div>
        <div className="text-xs uppercase tracking-wider text-red-500">Minutes</div>
      </div>
      
      {/* Divider */}
      <div className="text-2xl font-bold text-red-600">:</div>
      
      {/* Seconds */}
      <div className="text-center">
        <div className="text-3xl font-bold text-red-600">3.5</div>
        <div className="text-xs uppercase tracking-wider text-red-500">Seconds</div>
      </div>
    </div>
  )
}

export default Count
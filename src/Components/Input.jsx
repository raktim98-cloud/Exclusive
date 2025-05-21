import React from 'react'

function Input({type="text", placeholder,className,...props}) {
  return (
    <input className={`border-b border-b-[#7D8184] text-[#7D8184] text-[16px] leading-[24px] pt-[48px] mb-5 ${className}`} type={type} placeholder={placeholder} {...props} />
  )
}

export default Input
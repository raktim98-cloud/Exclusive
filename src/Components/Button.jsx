
import React from 'react'


function Button({TagName,children,className="",type="button",...props}) {
  return (
    <TagName className={`bg-red-500 px-25 py-4 text-[16px]  font-medium leading-10 ${className}`} type={type}{...props}>
        {children}
    </TagName>
  )
}

export default Button
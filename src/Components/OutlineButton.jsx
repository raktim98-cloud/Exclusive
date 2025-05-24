
import React from 'react'


function OutlineButton({TagName,children,className="",type="button",...props}) {
  return (
    <TagName className={`bg-transparent outline outline-amber-800 px-25 py-4 text-[16px] mt-4 font-medium leading-10 flex items-center justify-center gap-4 ${className}`} type={type}{...props}>
        {children}
    </TagName>
  )
}

export default OutlineButton
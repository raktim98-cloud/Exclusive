

function SectionHead({subCatagories,catagories}) {
  return (
    <div>
        <div className="flex gap-10 ">
            <span className="relative after:absolute after:content-[''] after:w-5 after:h-10 after:bg-[#DB4444] after:rounded-[4px]">{subCatagories}</span>
            <h5 className="text-[16px] leading-[20px] text-[#DB4444]">{catagories}</h5>
            
        </div>
        
    </div>
  )
}

export default SectionHead
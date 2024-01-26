const Filter = ({icon, title}) => {
  return(
    <div className='flex items-center bg-[#ff5a60] text-white hover:bg-white hover:text-[#ff5a60]  duration-200 ease-out gap-2 py-1 px-3 sm:px-4 rounded-full text-[14px] sm:text-[16px]'>
      {icon}
      {title}
    </div>
  )
}

export default Filter

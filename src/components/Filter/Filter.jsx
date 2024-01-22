const Filter = ({icon, title}) => {
  return(
    <div className='flex items-center bg-[#ff5a60] text-white hover:bg-white hover:text-[#ff5a60]  duration-200 ease-outgap-2 py-1 px-4 rounded-full'>
      {icon}
      {title}
    </div>
  )
}

export default Filter

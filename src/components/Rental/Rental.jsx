

const Rental = ({title, image, price}) => {
  return (
    <div className=''>
      <div className='relative'>
        <div className='grad absolute h-full w-full rounded-b-[1.3rem]'></div>
      <div className='flex '>
        {/* Background Image  */}
        <img src={image} alt="" className='object-cover rounded-[1.3rem]' />
        {/* Title */}
        <div className='absolute text-white font-bold bottom-6 left-6 text-[22px] flex items-center gap-2'>
          {title}
          <span> &#x2022;</span>
          <p className='text-[18px] text-slate-200'>${price}</p>
        </div>
        </div>
      </div>
      {/* Description */}
      <div className=''> 
        <p className='max-w-[17rem]'>
        This is a rare find. It is usually fully booked 
        </p>
      </div>
    </div>
  )
}

export default Rental


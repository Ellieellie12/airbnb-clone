

const Rental = ({title, image, price}) => {
  return (
    <div className='relative'>
      <div className='grad absolute h-full w-full rounded-b-[1.3rem]'></div>
      <div className='flex '>
        <img src={image} alt="" className='object-cover rounded-[1.3rem]' />
        <div className='absolute text-white font-bold bottom-6 left-6 text-[22px] flex items-center gap-4'>
          {title}
          <p className='text-[18px]'>${price}</p>
          </div>
      </div>
    </div>
  )
}

export default Rental


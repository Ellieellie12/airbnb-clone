
import mainLogo from '../images/logo1.png'
import { GiWorld } from 'react-icons/gi'
// import { IoMdMenu } from 'react-icons/io'
import { FaRegUser } from 'react-icons/fa'
import { CiSearch } from 'react-icons/ci'

const Navbar = () => {
  return ( 
    <div className='flex justify-between items-center border-b'>
      {/* Left */}
      <div className='h-20 flex'>
        <img src={mainLogo} alt='main-logo'className='object-cover -my-10'/>
      </div>
      {/* Middle */}
      <div className='flex justify-center items-center relative shadow-sm shadow-gray-400 rounded-full'>
        <input type='search' placeholder='' className='py-2.5 w-[20rem] rounded-full outline-0'/>
        <div className='flex justify-between absolute w-full pr-16 pl-6 font-semibold text-gray-600'>
          <button className='w-full'>Place</button>
          <button className='border-l border-x px-6'>Time</button>
          <button className='w-full text-gray-600/60 pl-2'>Group Size</button>
        </div>
        <div className='bg-[#ff5a60] p-2 rounded-full mr-2'>
          <CiSearch className='text-white'/>
        </div>
      </div>
      {/* Right */}
      <div className='flex items-center pr-3 font-semibold text-gray-600'>
        <p>Rent Your Home</p>
        <GiWorld className='mx-4'/>
        <div className='flex items-center border px-3 py-2 rounded-full gap-3'>
          <p>Sign In</p>
          {/* <IoMdMenu className='text-[19px]' /> */}
          <FaRegUser className='text-[19px]'/>
        </div>
      </div>
    </div>
  )
}

export default Navbar
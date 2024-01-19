
import mainLogo from '../images/logo1.png'
import { GiWorld } from 'react-icons/gi'
import { IoMdMenu } from 'react-icons/io'
import { FaRegUser } from 'react-icons/fa'
import { CiSearch } from "react-icons/ci";
const Navbar = () => {
  return ( 
    <div className='flex justify-between items-center border-b'>
      {/* Left */}
      <div className='h-20 flex'>
        <img src={mainLogo} alt='main-logo'className='object-cover -my-10'/>
      </div>
      {/* Middle */}
      <div className='flex justify-center relative shadow-sm shadow-gray-400 rounded-full'>
        <input type='search' placeholder='' className='py-2.5 w-[20rem] rounded-full outline-0'/>
        <div className='absolute'>
          <button>Place</button>
          <button>Time</button>
          <button>Group Size</button>
        </div>
        <div className=''>
          <CiSearch />
        </div>
      </div>
      {/* Right */}
      <div className='flex items-center pr-3'>
        <p>Airbnb Your Home</p>
        <GiWorld />
        <div className='flex items-center'>
        <IoMdMenu />
        <FaRegUser />
        </div>
      </div>

    </div>
  )
}

export default Navbar
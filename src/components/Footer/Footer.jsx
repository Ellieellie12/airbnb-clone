import { FaXTwitter } from 'react-icons/fa6'
import { FaInstagram } from 'react-icons/fa'
import { FaFacebookSquare } from 'react-icons/fa'
import { FaSnapchat } from 'react-icons/fa6'

const Footer = () => {
  const socialicons = [
  <FaXTwitter key={5}/>,
  <FaInstagram key={6} />,
  <FaFacebookSquare key={7}/>,
  <FaSnapchat key={8}/>
]
  return ( 
      <div className='flex items-center justify-center h-20 w-full bg-white border-t-2 shadow-t-lg shadow-gray-300 sticky bottom-0 gap-6'>
        {socialicons.map((socialicon) => (
          <div className='text-[30px] text-gray-500 hover:text-black duration-100 ease-out' >{socialicon}</div>
        ))}
      </div>
    )
}
export default Footer
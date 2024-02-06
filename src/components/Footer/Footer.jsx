import { FaXTwitter } from 'react-icons/fa6'
import { FaInstagram } from 'react-icons/fa'
import { FaFacebookSquare } from 'react-icons/fa'
import { FaSnapchat } from 'react-icons/fa6'

const Footer = () => {
  const socialicons = [
  <FaXTwitter />, 
  <FaInstagram />, 
  <FaFacebookSquare />,
  <FaSnapchat />
]
  return ( 
      <div className='flex items-center justify-center h-20 w-full bg-white border-t-2 shadow-t-lg shadow-gray-300 sticky bottom-0'>
        {socialicons.map((socialicon) => (
          <div className=''></div>
        ))}
      </div>
    )
}
export default Footer

<FaXTwitter />
<FaInstagram />
<FaFacebookSquare />
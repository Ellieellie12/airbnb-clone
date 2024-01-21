//icons
import { IoKeySharp } from 'react-icons/io5'
import { PiMountainsDuotone } from 'react-icons/pi'
import { GiMineExplosion } from 'react-icons/gi'
import { RiAliensLine } from 'react-icons/ri'
import { LuTreeDeciduous } from 'react-icons/lu'

//components
import Filter from '../Filter/Filter'

const Filters = () => {
  const icons = [
    {title:'Key', icon:<IoKeySharp />},
    {title:'Mountain', icon: <PiMountainsDuotone />},
    {title:'Hot', icon: <GiMineExplosion />},
    {title:'Alien', icon: <RiAliensLine />},
    {title:'Tree', icon: <LuTreeDeciduous />}
  ]
  return ( 
    <div className='sm:mx-6 md:mx-10 lg:mx-12'>
      <div className='flex'>
        {icons.map((object)=> (<Filter title={object.title} icon={object.icon} />

        ))}
      </div>
    </div>
  )
}
export default Filters




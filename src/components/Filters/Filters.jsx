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
    {title:'New', icon:<IoKeySharp />},
    {title:'Trending', icon: <GiMineExplosion />},
    {title:'Mountain', icon: <PiMountainsDuotone />},
    {title:'Unique', icon: <RiAliensLine />},
    {title:'Forest', icon: <LuTreeDeciduous />}
  ]
  return ( 
    <div className=''>
      <div className='flex justify-start gap-3 sm:gap-4 mt-4'>
        {icons.map((object)=> (<Filter title={object.title} icon={object.icon} key={3} />

        ))}
      </div>
    </div>
  )
}
export default Filters




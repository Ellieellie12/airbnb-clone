import houseone from '../images/house1.jpg'
import housetwo from '../images/house2.jpg'
import housethree from '../images/house3.jpg'
import housefour from '../images/house4.jpg'
import housefive from '../images/house5.jpg'
import housesix from '../images/house6.jpg'
import houseseven from '../images/house7.jpg'
import houseeight from '../images/house8.jpg'
import housenine from '../images/house9.jpg'
import houseten from '../images/house10.jpg'
import Rental from '../Rental/Rental'


const Rentals = () => {
  const rentals = [
    {title:'Texas, USA', image: houseone, price:'1,541'},
    {title:'Texas, USA', image: housetwo, price:'1,541'},
    {title:'Texas, USA', image: housethree, price:'1,541'},
    {title:'Texas, USA', image: housefour, price:'1,541'},
    {title:'Texas, USA', image: housefive, price:'1,541'},
    {title:'Texas, USA', image: housesix, price:'1,541'},
    {title:'Texas, USA', image: houseseven, price:'1,541'},
    {title:'Texas, USA', image: houseeight, price:'1,541'},
    {title:'Texas, USA', image: housenine, price:'1,541'},
    {title:'Texas, USA', image: houseten, price:'1,541'},
    {title:'Texas, USA', image: housesix, price:'1,541'},
    {title:'Texas, USA', image: houseseven, price:'1,541'},
    {title:'Texas, USA', image: houseeight, price:'1,541'},
    {title:'Texas, USA', image: housenine, price:'1,541'},
    {title:'Texas, USA', image: houseten, price:'1,541'}

]


  return (
    <div className='py-3 sm:py-5'>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4'>
        {rentals.map((rental) => 
        <Rental 
          title={rental.title} 
          image={rental.image} 
          price={rental.price} key={4}/>)}
      </div>
    </div>
  )
}

export default Rentals
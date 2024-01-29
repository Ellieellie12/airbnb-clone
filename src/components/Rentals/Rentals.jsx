import houseone from '../images/house1.jpg'
import Rental from '../Rental/Rental'


const Rentals = () => {
  const rentals = [
    {title:'Texas, USA', image: houseone, price:'1,541'},
    {title:'Texas, USA', image: houseone, price:'1,541'},
    {title:'Texas, USA', image: houseone, price:'1,541'},
    {title:'Texas, USA', image: houseone, price:'1,541'},
    {title:'Texas, USA', image: houseone, price:'1,541'},
    {title:'Texas, USA', image: houseone, price:'1,541'},
    {title:'Texas, USA', image: houseone, price:'1,541'},
    {title:'Texas, USA', image: houseone, price:'1,541'},
    {title:'Texas, USA', image: houseone, price:'1,541'},
    {title:'Texas, USA', image: houseone, price:'1,541'}

]


  return (
    <div className='pt-3 sm:pt-5'>
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
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
    <div className='pt-3'>
      <div className='grid grid-cols-1 sm:grid-cols-2 gap-4'>
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
import houseone from '../images/house1.jpg'
import Rental from '../Rental/Rental'


const Rentals = () => {
  const rentals = [{title:'Texas, USA', image: houseone, price:'1,541'}]
  const rentals = [{title:'Texas, USA', image: houseone, price:'1,541'}]
  const rentals = [{title:'Texas, USA', image: houseone, price:'1,541'}]
  const rentals = [{title:'Texas, USA', image: houseone, price:'1,541'}]
  const rentals = [{title:'Texas, USA', image: houseone, price:'1,541'}]
  const rentals = [{title:'Texas, USA', image: houseone, price:'1,541'}]
  const rentals = [{title:'Texas, USA', image: houseone, price:'1,541'}]
  const rentals = [{title:'Texas, USA', image: houseone, price:'1,541'}]
  const rentals = [{title:'Texas, USA', image: houseone, price:'1,541'}]
  const rentals = [{title:'Texas, USA', image: houseone, price:'1,541'}]

  return (
    <div className='pt-3'>
      {rentals.map((rental) => <Rental />)}
    </div>
  )
}

export default Rentals
import Navbar from './components/Navbar/Navbar'
import Filters from './components/Filters/Filters'
import Rentals from './components/Rentals/Rentals'

function App() {

  return (
    <div className='App'>
      {/* Navbar */}
      <Navbar />
      {/* Filters */}
      <div className='sm:mx-6 md:mx-10 lg:mx-12'>
      <Filters />
      {/* Rentals */}
      <Rentals />
      {/* Footer */}
      </div>
    </div>

  
  )
}

export default App

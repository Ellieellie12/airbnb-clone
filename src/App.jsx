import Navbar from './components/Navbar/Navbar'
import Filters from './components/Filters/Filters'
import Rentals from './components/Rentals/Rentals'
import Footer from './components/Footer/Footer'

function App() {

  return (
    <div className='App'>
      {/* Navbar */}
      <Navbar />
      {/* Filters */}
      <div className='sm:mx-6 md:mx-10 lg:mx-12 px-3'>
      <Filters />
      {/* Rentals */}
      <Rentals />
      {/* Footer */}
      <Footer />
      </div>
    </div>

  
  )
}

export default App

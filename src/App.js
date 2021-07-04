import React, {useState} from 'react'
import Tours from './components/Tours'
import TourData from './components/Static-data'
import './App.css';

function App() {

  const [tours, setTours] = useState(TourData)


  const removeTour = (id) => {
    const newTours = tours.filter((tour) => tour.id !== id)
    setTours(newTours)
  }

  if (tours.length === 0) {
    return (
      <main>
        <div className='title'>
          <h2>No tours left</h2>
          <div className="underline"></div>
          <button className='btn' onClick={() => window.location.reload(false)}>
            Refresh Tours
          </button>
        </div>
      </main>
    )
  }
  return (
    <main>
      <Tours tours={tours} removeTour={removeTour} />
    </main>
  )
};

export default App;
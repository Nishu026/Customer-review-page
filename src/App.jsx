import { useState } from 'react'
import './App.css'
import CardSlider from './components/Slider'
import Review from './components/Review'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className='wrapper'>
    <CardSlider/>

    <Review/>
    
    </div>
  
    </>
  )
}

export default App

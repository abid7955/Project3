import { useState } from 'react'
import Login from './components/login'
import Pricingpage from './pages/pricingpage'
import Homepage from './pages/homepage'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
<>
<Login/>
</>
  )
}

export default App
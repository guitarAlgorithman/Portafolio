import { useState } from 'react'

import CV from './components/CV'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
   <CV />
    </div>
  )
}

export default App

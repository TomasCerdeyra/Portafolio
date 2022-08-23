import { useState } from 'react'
import './App.css'
import Header from './components/Header/Header'
import Main from './components/Main/1main'
function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Header />
      <Main />
    </div>
  )
}

export default App

import { useState } from 'react'
import './App.css'
import { HomePage } from './Pages/home/HomePage'
import { SearchFilter } from './components/SearchFilter'





function App() {
  const [count, setCount] = useState(0)
  const items = ['Apple', 'Banana', 'Orange', 'Grapes', 'Mango'];

  return (
    <>      
      <SearchFilter
        items={items}
        placeholder="Search For a Fruit..."
      />
      <HomePage/>
    </>
  )
}

export default App

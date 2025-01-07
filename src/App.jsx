import './App.css'
import { HomePage } from './Pages/home/HomePage'
import { ChatInterface } from './components/ChatInterface/ChatInterface'

// <customer>:<amount>

function App() {

  return (
    <>      
      <ChatInterface/>
      <HomePage/>
    </>
  )
}

export default App

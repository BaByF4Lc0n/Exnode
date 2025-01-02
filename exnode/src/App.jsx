import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
// component
import Navbar from './components/Navbar/navbar';
// component page
import Index from './Components/index/index';
import Transaction from './Components/Transaction/transaction';
function App() {
  const [count, setCount] = useState(0)

  return ( 
    <div>
      <Navbar/>
        <BrowserRouter>
         <Router>
          <Route>
            <Route path="/" element={<Index/>} />
            <Route path="/" element={<Transaction/>} />
            <Route path="contact" element={<h1>Contact Page</h1>} />
            <Route path="schedule" element={<h1>Schedule Page</h1>} />
            <Route path="news" element={<h1>News Page</h1>} />
            <Route path="*" element={<h1>Page Not Found</h1>} />
          </Route>
         </Router>
        </BrowserRouter>
    </div>
  )
}

export default App

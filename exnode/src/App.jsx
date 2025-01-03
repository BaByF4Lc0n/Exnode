import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
// component
import Navbar from './Components/Navigationbar/navbar';
// component page
import Index from './Components/index/index';
import Transaction from './Components/Transaction/transaction';
import Analysis from './Components/AnalysistPage/analysis';
import Schedule from './Components/Schedule/schedule';
import Contact from './Components/ContactPage/contact';
import News from './Components/News/news';
function App() {
  const [count, setCount] = useState(0)

  return ( 
      <BrowserRouter>
         <Routes>
          <Route>
            <Route index element={<Index />} />
            <Route path="Transaction" element={<Transaction/>} />
            <Route path="schedule" element={<Schedule/>} />
            <Route path="analysis" element={<Analysis/>} />
            <Route path="contact" element={<Contact/>} />
            <Route path="news" element={<News/>} />
          </Route>
         </Routes>
        </BrowserRouter>
  )
}

export default App

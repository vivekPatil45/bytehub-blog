
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import {About, Home,Dashboard,SignIn,SignUp,Project } from './pages'
import { FooterComp, Header } from './components'

function App() {

    return (
      <BrowserRouter>
        <Header/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/sign-in" element={<SignIn />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/projects" element={<Project />} />
        </Routes>
        <FooterComp/>
      </BrowserRouter>
    )
}

export default App

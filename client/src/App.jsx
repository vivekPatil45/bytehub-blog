
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import {About, Home,Dashboard,SignIn,SignUp,Project, CreatePost } from './pages'
import { FooterComp, Header, OnlyAdminPrivateRoute, PrivateRoute } from './components'

function App() {

    return (
      <BrowserRouter>
        <Header/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/sign-in" element={<SignIn />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route element={<PrivateRoute />}>
            <Route path='/dashboard' element={<Dashboard />} />
          </Route>
          <Route element={<OnlyAdminPrivateRoute />}>
            <Route path='/create-post' element={<CreatePost />} />
          </Route>
          <Route path="/projects" element={<Project />} />
        </Routes>
        <FooterComp/>
      </BrowserRouter>
    )
}

export default App

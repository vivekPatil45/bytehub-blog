
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import {About, Home,Dashboard,SignIn,SignUp,Project, CreatePost, UpdatePost, PostPage, Search } from './pages'
import { FooterComp, Header, OnlyAdminPrivateRoute, PrivateRoute, ScrollToTop } from './components'

function App() {

    return (
      <BrowserRouter>
        <ScrollToTop/>
        <Header/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<Home />} />

          <Route path="/about" element={<About />} />
          <Route path="/sign-in" element={<SignIn />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path='/search' element={<Search />} />
          <Route element={<PrivateRoute />}>
            <Route path='/dashboard' element={<Dashboard />} />
          </Route>
          <Route element={<OnlyAdminPrivateRoute />}>
            <Route path='/create-post' element={<CreatePost />} />
            <Route path='/update-post/:postId' element={<UpdatePost />} />
          </Route>
          {/* <Route path="/projects" element={<Project />} /> */}
          <Route path='/post/:postSlug' element={<PostPage />} />
        </Routes>
        <FooterComp/>
      </BrowserRouter>
    )
}

export default App

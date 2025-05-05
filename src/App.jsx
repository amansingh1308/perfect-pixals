import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Layout from './Layout'
import Home from './components/Home';
import Business from './components/Business';
import Invitations from './components/Invitations';
import Annoucement from './components/Announcement';
import About from './components/AboutUs';
import Singaltemplate from './components/singaltemplate';
import ContactUs from './components/ContactUs';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="business" element={<Business />} />
          <Route path="invitations" element={<Invitations />} />
          <Route path="annoucement" element={<Annoucement />} />
          <Route path="about" element={<About />} />
          <Route path="single-Services" element={<Singaltemplate/>}/>
          <Route path="contact" element={<ContactUs/>}/>
          <Route path="/invitations/:id" element={<Singaltemplate/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
export default App

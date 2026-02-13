import { Routes, Route } from 'react-router-dom'
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Contact from './pages/Contact';
import Projects from "./pages/Projects.jsx";
import "./App.css"
import "./index.css"
import About from "./pages/About.jsx";
function App() {

  return (
    <>
      <Header />
      <main>
          <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/contact" element={<Contact />} />
          </Routes>
      </main>
      <Footer />
    </>
  )
}

export default App

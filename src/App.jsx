import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Contact from './pages/Contact';
import Projects from "./pages/Projects.jsx";
import "./App.css"
function App() {

  return (
    <>
      <Header />
      <main>
        <Home />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </>
  )
}

export default App

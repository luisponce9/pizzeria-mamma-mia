import 'bootstrap/dist/css/bootstrap.min.css'
import MiNavbar from './components/MiNavbar.jsx'
import Footer from './components/Footer.jsx'
import Home from './components/Home.jsx'

function App() {
  return (
    <div
      className="d-flex flex-column min-vh-100">
      <MiNavbar />

      <Home />

      <Footer />
    </div>
  )
}

export default App

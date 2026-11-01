import 'bootstrap/dist/css/bootstrap.min.css'
import MiNavbar from './components/MiNavbar.jsx'
import Footer from './components/Footer.jsx'
//import Home from './components/Home.jsx'
import Cart from './components/Cart.jsx'
//import RegisterPage from './components/RegisterPage.jsx'
//import LoginPage from './components/LoginPage.jsx'


function App() {
  return (
    <div
      className="d-flex flex-column min-vh-100">
      <MiNavbar />

      {/*<Home />*/}

      {/*<RegisterPage />*/}

      {/*<LoginPage />*/}

      <Cart />

      <Footer />
    </div>
  )
}

export default App

import './App.css'
import LandingPage from './Screens/LandingPage/LandingPage';
import SignIn from './Screens/LoginPage/SignIn';
import Register from './Screens/LoginPage/SignIn';
import Store from './Screens/StorePage/Store';
import GameDetail from './Components/Interface/GameDetails_Interface'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


function App() {

  return (
    <>
      <Router>
      <Routes>
        <Route path='/' element={<LandingPage/>} />
        <Route path='/SignIn' element={<SignIn heading='Sign in to your Account'/>} />
        <Route path='/Register' element={<Register heading={`Create an Account`}/>} />
        <Route path='/Store' element={<Store/>} />
        <Route path='/Store/GameDetail' element={<GameDetail/>} />
      </Routes>
    </Router>
    </>
  )
}

export default App

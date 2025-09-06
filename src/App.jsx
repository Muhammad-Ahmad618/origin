import './App.css'
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import LandingPage from './Screens/LandingPage/LandingPage';
import SignIn from './Screens/LoginPage/SignIn';
import Register from './Screens/LoginPage/SignIn';
import Store from './Screens/StorePage/Store';
import GameDetail from './Components/Interface/GameDetails_Interface'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


const queryClient = new QueryClient()


function App() {

  return (
    <>
     <QueryClientProvider client={queryClient}>
      <Router>
      <Routes>
        <Route path='/' element={<LandingPage/>} />
        <Route path='/SignIn' element={<SignIn heading='Sign in to your Account'/>} />
        <Route path='/Register' element={<Register heading={`Create an Account`}/>} />
        <Route path='/Store' element={<Store/>} />
        <Route path='/Store/GameDetail' element={<GameDetail/>} />
      </Routes>
    </Router>
    </QueryClientProvider>
    </>
  )
}

export default App

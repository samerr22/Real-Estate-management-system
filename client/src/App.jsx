
import About from './pages/Ab
import Profil from './pages/Profile'
import Header from './componnts/Header'
import PrivateRoute from './componnts/PrivateRoute'
import CreateListing from './pages/CreateListing'
import UpdateListing from './pages/updateListing';
import Listing from '
import Search from './pages/Search'

export default function App() {
  return (
    <BrowserRouter> 
    < Header/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/sign-in" element={<Signin/>}/>
      <Route path="/sign-up" element={<SignOut/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/search" element={<Search/>}/>
      


      <Route  element={<PrivateRoute/>}>
      <Route path="/profile" element={<Profil/>}/>
      <Route path="/create-listing" element={<CreateListing/>}/>
      <Route path="/update-listing/:listingId" element={<UpdateListing/>}/>
      </Route>
     

    </Routes>

    </BrowserRouter>
  )
}


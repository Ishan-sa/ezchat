import Home from './Home';
import Navbar from '../comps/Navbar';
import AuthProvider from '../context/auth';


export default function HomePage() {
  return (
    <AuthProvider>
      <div>
        <Navbar />
        <Home />
      </div>
    </AuthProvider>
    // <BrowserRouter>
    //   <Switch>
    //     <Route exact path='/' component={Home} />
    //   </Switch>
    // </BrowserRouter>
  )
}
import Nav from './components/Nav';
import { Switch, Route} from 'react-router-dom';
import Home from './pages/Home'
import Cart from './pages/Cart'
import SellPage from './pages/SellPage'
import UpdatePage from './pages/UpdatePage'
import Register from './pages/Register'
import SignIn from './pages/SignIn'

function App() {
  return (
    <div className="App">
      <Nav />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/cart" component={Cart} />
        <Route path="/sell" component={SellPage} />
        <Route path="/update" component={UpdatePage} />
        <Route path="/register" component={Register} />
        <Route path="/login" component={SignIn} />
      </Switch>
    </div>
  );
}

export default App;
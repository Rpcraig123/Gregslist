import Nav from './components/Nav';
import { Switch, Route} from 'react-router-dom';
import Home from './pages/Home'
import Cart from './pages/Cart'
import SellPage from './pages/SellPage'

function App() {
  return (
    <div className="App">
      <Nav />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/cart" component={Cart} />
        <Route path="/sell" component={SellPage} />
      </Switch>
    </div>
  );
}

export default App;
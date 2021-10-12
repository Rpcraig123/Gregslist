import Nav from './components/Nav';
import Products from './components/Products';
// import { Switch, Route} from 'react-router-dom';
// import Home from './pages/Home'
// import Cart from './pages/Cart'

function App() {
  return (
    <div className="App">
      <Nav />
      <Products />
      {/* <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/cart" component={Cart} />
      </Switch> */}
    </div>
  );
}

export default App;
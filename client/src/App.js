import Nav from './components/Nav';
import { Switch, Route} from 'react-router-dom';
import { connect } from 'react-redux'
import Home from './pages/Home'
import Cart from './pages/Cart'
import SellPage from './pages/SellPage'
import UpdatePage from './pages/UpdatePage'
import Register from './pages/Register'
import SignIn from './pages/SignIn'

const mapStateToProps = ( userState ) => ({
  ...userState
})

const mapDispatchToProps = (dispatch) => {  
  return {}
}

function App(props) {
  return (
    <div className="App">
      <Nav />
      <Switch>
        <Route exact path="/" component={props.userState.authenticated ? Home : SignIn} />
        <Route path="/cart" component={Cart} />
        <Route path="/sell" component={SellPage} />
        <Route path="/update" component={UpdatePage} />
        <Route path="/register" component={Register} />
        <Route path="/login" component={SignIn} />
      </Switch>
    </div>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
import logo from './logo.svg';
import './App.css';
import Header from './Header';
import Cart from './Cart';
import Home from './Home';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { useEffect, useState } from 'react';
import { db } from './firebase';

function App() {
  const [cartItems, setCartItems] = useState([]);

  const GetCartItems = () => {
    db.collection('cartitems').onSnapshot((snapshot) => {
      const tempItems = snapshot.docs.map((doc) => ({
        id: doc.id,
        product: doc.data()
      }))
      setCartItems(tempItems)
    })
  }

  useEffect(() => {
    GetCartItems();
  }, [])

  return (
    <Router>
      <div className="App">
      <Header cartItems={cartItems} />
        <Switch>

          <Route exact path="/">
            <Home />
          </Route>

          <Route path="/cart">
            <Cart cartItems={cartItems} />
          </Route>
          
        </Switch>
      </div>
    </Router>
  );
}

export default App;

import logo from './logo.svg';
import './App.css';
import Header from './Header';
import Cart from './Cart';
import Home from './Home';
import Login from './Login';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { useEffect, useState } from 'react';
import { auth, db } from './firebase';

function App() {
  const [cartItems, setCartItems] = useState([]);
  const [user, setUser] = useState(JSON.parse(localStorage.getItem('user')));

  const GetCartItems = () => {
    db.collection('cartitems').onSnapshot((snapshot) => {
      const tempItems = snapshot.docs.map((doc) => ({
        id: doc.id,
        product: doc.data()
      }))
      setCartItems(tempItems)
    })
  }

  const signOut = () => {
    auth.signOut().then(() => {
      setUser(null);
    })
  }

  useEffect(() => {
    GetCartItems();
  }, [])

  console.log("user", user);

  return (
    <Router>
      {
        !user ? (
          <Login setUser={setUser} />
        ) : (
          <div className="App">
            <Header cartItems={cartItems} user={user} signOut={signOut}/>

            <Switch>

              <Route exact path="/">
                <Home />
              </Route>

              <Route path="/cart">
                <Cart cartItems={cartItems} />
              </Route>

            </Switch>
          </div>
        )
      }
    </Router>
  );
}

export default App;

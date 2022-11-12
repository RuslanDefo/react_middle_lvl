import './App.css';
import './scss/app.scss';
import React from 'react';



import Header from './components/Header';
import Home from './pages/Home';
import { Route, Routes } from 'react-router-dom';
import NotFound from './pages/NotFound/NotFound';
import Cart from './pages/Cart';


export const searchContext = React.createContext();


function App() {
  const [searchValue, setSearchValue] = React.useState('');


  return (
    <div className="App">
      <div className="wrapper">
        <searchContext.Provider value={{ searchValue, setSearchValue }}>
          <Header/>
          <div className="content">
            <div className="container">
              <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/cart" element={<Cart/>}/>
                <Route path="*" element={<NotFound/>}/>
              </Routes>

            </div>
          </div>
        </searchContext.Provider>
      </div>
    </div>);
}

export default App;

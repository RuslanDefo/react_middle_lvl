import './App.css';
import './scss/app.scss';
import Header from './components/Header';
import Categories from './components/Categories';
import Sort from './components/Sort';
import PizzaCard from './components/PizzaCard';
import axios from 'axios';
import React from 'react';
import Skeleton from './components/PizzaBlockLoader';

function App() {

  const [pizzas, setPizzas] = React.useState([]);
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {

    async function getPizzas() {
      const products = await axios.get('https://6342b0e73f83935a78478a41.mockapi.io/api/v1/products');
      setPizzas(products.data);
      setLoading(false);
    }

    getPizzas();

  }, []);


  return (
    <div className="App">
      <div className="wrapper">
        <Header/>
        <div className="content">
          <div className="container">
            <div className="content__top">
              <Categories/>
              <Sort/>
            </div>
            <h2 className="content__title">Все пиццы</h2>
            <div className="content__items">
              {
                  loading ?
                    [...new Array(6)].map((_, index) => <Skeleton key={index}/>)
                    :
                    pizzas.map((item) =><PizzaCard
                      {...item}
                      key={item.id}
                    />
                )}
            </div>
          </div>
        </div>
      </div>
    </div>);
}

export default App;

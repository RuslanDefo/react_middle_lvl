import React from 'react';
import axios from 'axios';

import Categories from '../components/Categories';
import Sort from '../components/Sort';
import Skeleton from '../components/PizzaBlockLoader';
import PizzaCard from '../components/PizzaCard';


function Home() {

  const [pizzas, setPizzas] = React.useState([]);
  const [loading, setLoading] = React.useState(true);
  const [categoryId, setCategoryId] = React.useState(0);


  React.useEffect(() => {
    setLoading(true);
    async function getPizzas() {
      const products = await axios.get('https://6342b0e73f83935a78478a41.mockapi.io/api/v1/products');
      setPizzas(products.data);
      setLoading(false);
    }
    getPizzas();
    window.scrollTo(0,0);
  }, []);

  return (
    <>
      <div className="content__top">
        <Categories value={categoryId} selectCategory={(id) => setCategoryId(id)}/>
        <Sort/>
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">
        {
          loading ?
            [...new Array(6)].map((_, index) => <Skeleton key={index}/>)
            :
            pizzas.map((item) => <PizzaCard
                {...item}
                key={item.id}
              />
            )}
      </div>
    </>
  );
}

export default Home;
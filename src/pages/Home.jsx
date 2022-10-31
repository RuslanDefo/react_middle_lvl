import React from 'react';
import axios from 'axios';

import Categories from '../components/Categories';
import Sort from '../components/Sort';
import Skeleton from '../components/PizzaBlockLoader';
import PizzaCard from '../components/PizzaCard';
import Pagination from '../components/pagination/Pagination';
import { searchContext } from '../App';


function Home() {

  const [pizzas, setPizzas] = React.useState([]);
  const [loading, setLoading] = React.useState(true);
  const [categoryId, setCategoryId] = React.useState(0);
  const [currentPage, setCurrentPage] = React.useState(1);
  const [sortType, setSortType] = React.useState({
    name: 'популярности',
    sortProperty: 'rating',
  });
  const { searchValue } = React.useContext(searchContext);


  React.useEffect(() => {


    setLoading(true);

    const search = searchValue ? `&search=${searchValue}` : '';

    async function getPizzas() {
      const products = await axios.get(`https://6342b0e73f83935a78478a41.mockapi.io/api/v1/products?page=${currentPage}&limit=4${categoryId > 0 ? `category=${categoryId}` : ''}&sortBy=${sortType.sortProperty.replace('-', '')}&order=${sortType.sortProperty.includes('-') ? 'asc' : 'desc'}${search}`);
      setPizzas(products.data);
      setLoading(false);
    }

    getPizzas();
    window.scrollTo(0, 0);
  }, [categoryId, sortType, searchValue, currentPage]);

  const filteredPizzas = pizzas.filter(obj => {
    if (obj.title.toLowerCase().includes(searchValue.toLowerCase())) {
      return true;
    }
    return false;
  }).map((item) => <PizzaCard{...item} key={item.id}/>);
  const skeletons = [...new Array(6)].map((_, index) => <Skeleton key={index}/>);


  return (
    <>
      <div className="content__top">
        <Categories value={categoryId} selectCategory={(id) => setCategoryId(id)}/>
        <Sort value={sortType} selectSort={(id) => setSortType(id)}/>
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">
        {loading ? skeletons : filteredPizzas}
      </div>
      <Pagination onChangePage={(number) => setCurrentPage(number)}/>
    </>
  );
}

export default Home;
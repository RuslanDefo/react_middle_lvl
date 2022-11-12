import React from 'react';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';

import Categories from '../components/Categories';
import Sort from '../components/Sort';
import Skeleton from '../components/PizzaBlockLoader';
import PizzaCard from '../components/PizzaCard';
import Pagination from '../components/pagination/Pagination';
import { searchContext } from '../App';
import { setCategoryId } from '../redux/slices/filterSlice';


function Home() {
  const dispatch = useDispatch();
  const categoryId = useSelector((state) => state.filterSlice.categoryId);
  const sortType = useSelector((state) => state.filterSlice.sort.sortProperty);


  const [pizzas, setPizzas] = React.useState([]);
  const [loading, setLoading] = React.useState(true);
  const [currentPage, setCurrentPage] = React.useState(1);


  const onChangeCategory = (id) => {
    dispatch(setCategoryId(id));
  };


  const { searchValue } = React.useContext(searchContext);

  React.useEffect(() => {


    setLoading(true);

    const search = searchValue ? `&search=${searchValue}` : '';

    async function getPizzas() {
      const products = await axios.get(`https://6342b0e73f83935a78478a41.mockapi.io/api/v1/products?page=${currentPage}&limit=4${categoryId > 0 ? `&category=${categoryId}` : ''}&sortBy=${sortType.replace('-', '')}&order=${sortType.includes('-') ? 'asc' : 'desc'}${search}`);
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
        <Categories value={categoryId} selectCategory={onChangeCategory}/>
        <Sort/>
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
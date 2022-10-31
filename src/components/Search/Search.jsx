import React from 'react';
import styles from './search.module.scss';
import { searchContext } from '../../App';


function Search() {

  const {searchValue, setSearchValue } = React.useContext(searchContext)
  return (

      <div className={styles.searchBlock}>
    <input className={styles.root} type="text" placeholder="Поиск пиццы" onChange={ event => setSearchValue(event.target.value)} value={searchValue}/>
      <img src="/img/clear.svg" alt="close" className={styles.closeIco} onClick={() => setSearchValue('')}/>
      </div>

  );
}

export default Search;
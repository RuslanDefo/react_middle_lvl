import React from 'react';

function Categories() {

  const [active, setActive] = React.useState(0);
  const selectCategory = (index) => {
    setActive(index);
  };

  const categories = [
    'Все',
    'Мясные',
    'Вегетарианская',
    'Гриль',
    'Острые',
    'Закрытые',
  ];

  return (
    <div className="categories">
      <ul>
        {categories.map((category, i) =>
          <li onClick={() => selectCategory(i)} className={active === i ? 'active' : ''} key={i}>{category}</li>
        )}
      </ul>
    </div>
  );
}

export default Categories;
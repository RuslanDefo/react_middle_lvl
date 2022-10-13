import React from 'react';

function Categories({selectCategory, value}) {

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
          <li onClick={() => selectCategory(i)} className={value === i ? 'active' : ''} key={i}>{category}</li>
        )}
      </ul>
    </div>
  );
}

export default Categories;
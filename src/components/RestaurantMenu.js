import React, { useState, useEffect } from 'react';
import { menuInfo } from '../utility/menuInfo';
import { useParams } from 'react-router-dom';
import './menu.css';
import ItemCard from './ItemCard';

const RestaurantMenu = () => {
  const [searchKey, setSearchKey] = useState('');
  const [filteredMenu, setFilteredMenu] = useState(menuInfo);
  const { id } = useParams();
  const restaurantId = parseInt(id) - 1;
  const [count, setCount] = useState(0);

  useEffect(() => {
    // When restaurant data changes or search key is updated, filter the menu
    if (menuInfo[restaurantId]) {
      const filteredList = menuInfo[restaurantId].menu.filter((item) =>
        item.item.toLowerCase().includes(searchKey.toLowerCase())
      );
      setFilteredMenu(filteredList);
    }
  }, [searchKey, restaurantId]); // Dependency on searchKey and restaurantId

  if (!menuInfo[restaurantId]) {
    return <div>Restaurant not found</div>;
  }

  return (
    <div className="container">
      <div className="res-name">{menuInfo[restaurantId].name}</div>

      <div>
        <input
          onChange={(e) => setSearchKey(e.target.value)}
          value={searchKey}
          type="search"
          placeholder="Search items..."
        />
      </div>

      <div className="res-menu-card">
        {filteredMenu.length > 0 ? (
          filteredMenu.map((res) => (
            <div key={res.id} className="item-card-wrapper">
              <ItemCard itemData={res}  />
            </div>
          ))
        ) : (
          <div>No items found</div>
        )}
      </div>
      {/* <div className='price-footer'>Total amount: </div> */}
    </div>
  );
};

export default RestaurantMenu;

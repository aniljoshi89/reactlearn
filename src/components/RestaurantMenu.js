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
  const [clicked, setClicked] = useState(false);

  useEffect(() => {
    if (menuInfo[restaurantId]) {
      const filteredList = menuInfo[restaurantId].menu.filter((item) =>
        item.item.toLowerCase().includes(searchKey.toLowerCase())
      );
      setFilteredMenu(filteredList);
    }
  }, [searchKey, restaurantId]);

  if (!menuInfo[restaurantId]) {
    return <div>Restaurant not found</div>;
  }

  const handleClick = () =>{
     setClicked(!clicked);
  }

  return (
    <div className="w-full max-w-full mx-auto p-5 flex flex-col bg-white">
      <div className="text-2xl font-bold mb-5 text-center text-gray-800">
        {menuInfo[restaurantId].name}
      </div>

      <div className="mb-5">
        <input
          onChange={(e) => setSearchKey(e.target.value)}
          value={searchKey}
          type="search"
          placeholder="Search items..."
          className="w-full p-3 rounded-lg text-lg shadow-md outline-none"
        />
      </div>

      <div className="flex flex-col gap-5">

        <div className=' w-6/12 rounded-lg p-3 bg-gray-200 flex text-center m-auto justify-between'>
          <div className='font-bold'>Available ({menuInfo[restaurantId].menu.length})</div>
          <div className='cursor-pointer' onClick={handleClick}>⬇️</div>
          </div>
        {filteredMenu.length > 0 ? (
          filteredMenu.map((res) => {
            if(clicked)
              {return (<div key={res.id} className="w-full">
              <ItemCard itemData={res} />
            </div>)
          }
})
        ) : (
          <div>No items found</div>
        )}
      </div>
   
      {/* Footer for total price */}
      {/* <div className='price-footer'>Total amount: </div> */}
    </div>
  );
};

export default RestaurantMenu;

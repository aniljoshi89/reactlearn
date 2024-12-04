import React, { useState } from 'react';
import vegImg from '../images/veg.jpg';
import nonvegImg from '../images/non-veg.jpg';

const ItemCard = (props) => {
  const { itemData } = props;
  const [count, setCount] = useState(0);

  return (
    <div className="w-1/2 max-w-md p-4 border border-gray-300 rounded-lg shadow-md bg-white hover:-translate-y-1 hover:shadow-lg transition-transform mx-auto">
      <div className="flex justify-between items-center mb-3">
        <h4 className="text-xl font-bold text-gray-800">{itemData.item}</h4>
        <img
          src={itemData.type === 'Veg' ? vegImg : nonvegImg}
          alt={itemData.type}
          className="w-6 h-6"
        />
      </div>

      <p className="text-lg font-semibold text-gray-600 mb-3">Price: {itemData.price}</p>

      {count === 0 ? (
        <button
          onClick={() => setCount(count + 1)}
          className="px-4 py-2 bg-yellow-500 text-white rounded-md hover:bg-yellow-600 transition-colors"
        >
          Add to Cart
        </button>
      ) : (
        <div className="flex items-center">
          <button
            onClick={() => setCount(count + 1)}
            className="px-3 py-1 bg-gray-300 rounded-md hover:bg-gray-400"
          >
            +
          </button>
          <span className="mx-3 text-lg font-semibold">{count}</span>
          <button
            onClick={() => setCount(count - 1)}
            className="px-3 py-1 bg-gray-300 rounded-md hover:bg-gray-400"
          >
            -
          </button>
        </div>
      )}
    </div>
  );
};

export default ItemCard;

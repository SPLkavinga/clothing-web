import React, { useState } from 'react';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';

import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';

function Sidepanel() {
  const [category1Open, setCategory1Open] = useState(true);
  const [category2Open, setCategory2Open] = useState(true);
  const [avaliabilityOpen, setAvaliabilityOpen] = useState(true);
  const [priceOpen, setPriceOpen] = useState(true);
  const [colorOpen, setcolorOpen] = useState(true);
  const [clothOpen, setclothOpen] = useState(true);
  const [priceRange, setPriceRange] = useState([0, 9270]);

  const [currentIndex, setCurrentIndex] = useState(0);
  const featuredProducts = [
    {
      name: 'Kaylee Button Down Crop Top - Red',
      price: 'Rs 3,990.00',
      image: 'src/assets/product1.jpeg', // Replace with actual image paths
    },
    {
      name: 'Athleisure Top - Blue',
      price: 'Rs 4,290.00',
      image: 'src/assets/product1.jpeg',
    },
    {
      name: 'Casual Dress - Green',
      price: 'Rs 5,200.00',
      image: 'src/assets/product1.jpeg',
    },
  ];

  const toggleCategory1 = () => setCategory1Open(!category1Open);
  const toggleCategory2 = () => setCategory2Open(!category2Open);
  const toggleAvaliability = () => setAvaliabilityOpen(!avaliabilityOpen);
  const togglePrice = () => setPriceOpen(!priceOpen);
  const togglecolor = () => setcolorOpen(!colorOpen);
  const togglecloth = () => setclothOpen(!clothOpen);

  const handlePriceChange = (range) => setPriceRange(range);

  const nextProduct = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % featuredProducts.length);
  };

  const prevProduct = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + featuredProducts.length) % featuredProducts.length);
  };

  return (
    <div className="relative left-0 top-0 w-[250px] h-full text-[#232323]">
      <div className="p-4">
        <ul>
          {/* Category 1 */}
          <li className="mb-2">
            <div className="flex items-center justify-between p-2" onClick={toggleCategory1}>
              <span className="text-[16px] font-semibold ">Category</span>
              {category1Open ? <ExpandLessIcon /> : <ExpandMoreIcon />}
            </div>
            <hr />
            {category1Open && (
              <ul className="ml-4 mt-2 text-[12px] font-normal">
                <li className='p-2 mb-2 rounded'>50% off</li>
                <li className='p-2 mb-2 rounded'>Athleisure</li>
                {/* Other categories... */}
              </ul>
            )}
          </li>

          {/* Size */}
          <li className="mb-2">
            <div className="flex items-center justify-between p-2" onClick={toggleCategory2}>
              <span className="text-[16px] font-semibold">Size</span>
              {category2Open ? <ExpandLessIcon /> : <ExpandMoreIcon />}
            </div>
            <hr />
            {category2Open && (
              <ul className="mt-2 ml-4">
                <div className="grid grid-cols-4 gap-2 text-[12px] font-normal">
                  <button className="p-2 text-black border border-gray-300 rounded hover:bg-gray-200">XXS</button>
                  <button className="p-2 text-black border border-gray-300 rounded hover:bg-gray-200">XS</button>
                  {/* More sizes... */}
                </div>
              </ul>
            )}
          </li>

          {/* Availability */}
          <li className="mb-2">
            <div className="flex items-center justify-between p-2" onClick={toggleAvaliability}>
              <span className="text-[16px] font-semibold">Availability</span>
              {avaliabilityOpen ? <ExpandLessIcon /> : <ExpandMoreIcon />}
            </div>
            <hr />
            {avaliabilityOpen && (
              <ul className="mt-2 ml-4">
                <div className="flex items-center mb-4">
                  <input
                    id="in-stock-checkbox"
                    type="checkbox"
                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded"
                  />
                  <label htmlFor="in-stock-checkbox" className="ms-2 text-[12px] font-normal text-[#232323]">
                    In Stock(161)
                  </label>
                </div>
                {/* More availability options */}
              </ul>
            )}
          </li>

          {/* Price Range */}
          <li className="mb-2">
            <div className="flex items-center justify-between p-2 rounded cursor-pointer" onClick={togglePrice}>
              <span className="text-[16px] font-semibold">Price</span>
              {priceOpen ? <ExpandLessIcon /> : <ExpandMoreIcon />}
            </div>
            <hr />
            {priceOpen && (
              <div className="mt-2 ">
                <div className="flex items-center mb-4">
                  <Slider
                    range
                    min={0}
                    max={10000}
                    defaultValue={priceRange}
                    value={priceRange}
                    onChange={handlePriceChange}
                    trackStyle={{ backgroundColor: '#000', height: 5 }}
                    handleStyle={[
                      {
                        backgroundColor: '#ffffff',
                        border: '5px solid black',
                        width: 20,
                        height: 20,
                        borderRadius: '100%',
                        top: '2.5px',
                      },
                      {
                        backgroundColor: '#ffffff',
                        border: '5px solid black',
                        width: 20,
                        height: 20,
                        borderRadius: '100%',
                        top: '2.5px',
                      },
                    ]}
                    railStyle={{ backgroundColor: '#d3d3d3', height: 5 }}
                  />
                </div>
                <div className="flex items-center justify-between mb-2 ">
                  <div className="flex items-center">
                    <span className='text-[12px] font-normal'>Rs</span>
                    <input
                      type="number"
                      className="w-[50px] ml-2 border border-gray-300 rounded p-1 "
                      value={priceRange[0]}
                      onChange={(e) => setPriceRange([Number(e.target.value), priceRange[1]])}
                    />
                  </div>
                  <span>to</span>
                  <div className="flex items-center">
                    <span className='text-[12px] font-normal'>Rs</span>
                    <input
                      type="number"
                      className="w-[50px] ml-2 border border-gray-300 rounded p-1"
                      value={priceRange[1]}
                      onChange={(e) => setPriceRange([priceRange[0], Number(e.target.value)])}
                    />
                  </div>
                </div>
                <button className="w-full p-2 mt-2 text-white bg-black rounded">Apply</button>
              </div>
            )}
          </li>

          {/* Color */}
          <li className="mb-2">
            <div className="flex items-center justify-between p-2" onClick={togglecolor}>
              <span className="text-[16px] font-semibold">Color</span>
              {colorOpen ? <ExpandLessIcon /> : <ExpandMoreIcon />}
            </div>
            <hr />
            {colorOpen && (
              <ul className="mt-2 ml-4">
                <div className="grid grid-cols-4 gap-2 font-normal">
                  <button className="w-10 h-10 p-2 bg-red-600 border rounded-full "></button>
                  <button className="w-10 h-10 p-2 bg-orange-400 border rounded-full "></button>
                  {/* More colors... */}
                </div>
              </ul>
            )}
          </li>

          {/* Featured Products (cloth) with image carousel */}
          <li className="mb-2">
            <div className="flex items-center justify-between p-2" onClick={togglecloth}>
              <span className="text-[16px] font-semibold">Featured Products</span>
              {clothOpen ? <ExpandLessIcon /> : <ExpandMoreIcon />}
            </div>
            <hr />
            {clothOpen && (
              <div className="mt-2 ml-4">
                <div className="relative">
                  <button
                    className="absolute left-0 w-10 h-10 p-1 transform -translate-y-1/2 bg-white border rounded-full top-1/2"
                    onClick={prevProduct}
                  >
                   <ChevronLeftIcon />
                  </button>
                  <img
                    src={featuredProducts[currentIndex].image}
                    alt={featuredProducts[currentIndex].name}
                    className="w-full h-auto rounded"
                  />
                  <button
                    className="absolute right-0 w-10 h-10 p-1 transform -translate-y-1/2 bg-white rounded-full top-1/2"
                    onClick={nextProduct}
                  >
                   < ChevronRightIcon/>
                  </button>
                </div>
                <div className="mt-2 text-center">
                  <p className="text-sm font-semibold">{featuredProducts[currentIndex].name}</p>
                  <p className="text-xs text-gray-600">{featuredProducts[currentIndex].price}</p>
                </div>
              </div>
            )}
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Sidepanel;
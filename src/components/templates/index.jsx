import React, { useState } from 'react';
import card from '../../assets/images/home/weedingCad.png'
import { use } from 'react';
import { BiSolidStar } from "react-icons/bi";

const Template = () => {
  const [openAccordion, setOpenAccordion] = useState(null);
  const [minPrice, setMinPrice] = useState(10);
  const [maxPrice, setMaxPrice] = useState(150);
  const [isNewsest, setIsNewest] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [priceType, setPriceType] = useState('all');
  const [sortOption, setSortOption] = useState('popular');
  const [templates] = useState([
    {
      id: 1,
      image: card,
      title: 'Wedding Card Template',
      category: 'Wedding',
      price: 20,
      priceType: 'free',
      rating: 5
    },
    {
      id: 2,
      image: card,
      title: 'Birthday Invitation',
      category: 'Birthday',
      price: 0,
      priceType: 'free',
      rating: 4
    },
    {
      id: 3,
      image: card,
      title: 'Corporate Event',
      category: 'Corporate',
      price: 30,
      priceType: 'premium',
      rating: 5
    },
    {
      id: 4,
      image: card,
      title: 'Product Launch',
      category: 'Product Launch',
      price: 0,
      priceType: 'free',
      rating: 4
    },
    {
      id: 5,
      image: card,
      title: 'Business Card',
      category: 'Business',
      price: 15,
      priceType: 'premium',
      rating: 5
    },
    {
      id: 6,
      image: card,
      title: 'Event Announcement',
      category: 'Event',
      price: 25,
      priceType: 'premium',
      rating: 5
    }
  ]);

  const filteredTemplates = templates
    .filter(template => {
      const categoryMatch = !selectedCategory || template.category === selectedCategory;
      const priceTypeMatch = priceType === 'all' || template.priceType === priceType;
      const priceRangeMatch = template.price >= minPrice && template.price <= maxPrice;
      return categoryMatch && priceTypeMatch && priceRangeMatch;
    })
    .sort((a, b) => {
      switch (sortOption) {
        case 'newest':
          return b.id - a.id;
        case 'oldest':
          return a.id - b.id;
        case 'popular':
        default:
          return b.rating - a.rating;
      }
    });


  const toggleAccordion = (index) => {
    setOpenAccordion(openAccordion === index ? null : index);
    if (index === 0) setSelectedCategory(null);
  };

  const handleMinChange = (e) => {
    const value = Math.min(Number(e.target.value), maxPrice - 10);
    setMinPrice(value);
  };

  const handleMaxChange = (e) => {
    const value = Math.max(Number(e.target.value), minPrice + 10);
    setMaxPrice(value);
  };

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
    setOpenAccordion(null);
  };

  const handlePriceTypeSelect = (type) => {
    setPriceType(type === priceType ? 'all' : type);
  };

  const handleSortOptionSelect = (option) => {
    setSortOption(option);
    setIsNewest(false);
  };

  return (    <>
      <div className='grid grid-cols-12 gap-10 max-w-7xl mx-auto pt-24 pb-24'>
        <div className='col-span-12 md:col-span-4 mt-7'>
          <div>
            <h1 className='text-2xl font-bold font-brygada text-3xl text-[#242424]'>Categories</h1>
          </div>
          <div className='mt-4'>
            {/* Invitations */}
            <div className='border mb-10'>
              <button
                className='w-full text-left p-2 bg-white p-4 font-josefin font-semibold'
                onClick={() => toggleAccordion(0)}
              >
                Invitations
              </button>
              {openAccordion === 0 && (
                <div className='p-2 bg-white border-t'>
                  <ul className='space-y-1 text-[#777777]'>
                    <li className={`p-1 hover:bg-gray-50 cursor-pointer ${selectedCategory === 'Wedding' ? 'text-purple-600' : ''}`} onClick={() => handleCategorySelect('Wedding')}>Wedding</li>
                    <li className={`p-1 hover:bg-gray-50 cursor-pointer ${selectedCategory === 'Birthday' ? 'text-purple-600' : ''}`} onClick={() => handleCategorySelect('Birthday')}>Birthday</li>
                    <li className={`p-1 hover:bg-gray-50 cursor-pointer ${selectedCategory === 'Corporate' ? 'text-purple-600' : ''}`} onClick={() => handleCategorySelect('Corporate')}>Corporate</li>
                  </ul>
                </div>
              )}
            </div>

            {/* Business */}
            <div className='border mb-10'>
              <button
                className='w-full text-left p-2 bg-white p-4 font-josefin font-semibold'
                onClick={() => toggleAccordion(1)}
              >
                Business
              </button>
              {openAccordion === 1 && (
                <div className='p-2 bg-white border-t'>
                  <ul className='space-y-1 text-[#777777]'>
                    <li className={`p-1 hover:bg-gray-50 cursor-pointer ${selectedCategory === 'Startup' ? 'text-purple-600' : ''}`} onClick={() => handleCategorySelect('Startup')}>Startup</li>
                    <li className={`p-1 hover:bg-gray-50 cursor-pointer ${selectedCategory === 'Enterprise' ? 'text-purple-600' : ''}`} onClick={() => handleCategorySelect('Enterprise')}>Enterprise</li>
                    <li className={`p-1 hover:bg-gray-50 cursor-pointer ${selectedCategory === 'Small Business' ? 'text-purple-600' : ''}`} onClick={() => handleCategorySelect('Small Business')}>Small Business</li>
                  </ul>
                </div>
              )}
            </div>

            {/* Announcement */}
            <div className='border mb-10'>
              <button
                className='w-full text-left p-2 bg-gray-100 hover:bg-gray-200 bg-white p-4 font-josefin font-semibold'
                onClick={() => toggleAccordion(2)}
              >
                Announcement
              </button>
              {openAccordion === 2 && (
                <div className='p-2 bg-white border-t'>
                  <ul className='space-y-1 text-[#777777]'>
                    <li className={`p-1 hover:bg-gray-50 cursor-pointer ${selectedCategory === 'Product Launch' ? 'text-purple-600' : ''}`} onClick={() => handleCategorySelect('Product Launch')}>Product Launch</li>
                    <li className={`p-1 hover:bg-gray-50 cursor-pointer ${selectedCategory === 'Event' ? 'text-purple-600' : ''}`} onClick={() => handleCategorySelect('Event')}>Event</li>
                    <li className={`p-1 hover:bg-gray-50 cursor-pointer ${selectedCategory === 'News' ? 'text-purple-600' : ''}`} onClick={() => handleCategorySelect('News')}>News</li>
                  </ul>
                </div>
              )}
            </div>

            {/* Price Range */}
                       {/* Price Range */}
                       <div className='border mb-10'>
              <button
                className='w-full text-left p-2 bg-white p-4 font-josefin font-semibold'
                onClick={() => toggleAccordion(3)}
              >
                Price Range
              </button>
              {openAccordion === 3 && (
                <div className='p-2 bg-white border-t'>
                  <div className='mt-4'>
                    <div className='border-b py-4'>
                      <div className='relative w-full h-6 flex items-center'>
                        <div className='absolute w-full h-2 bg-gray-200 rounded-full'></div>
                        <div
                          className='absolute h-2 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full'
                          style={{ left: `${(minPrice / 200) * 100}%`, right: `${100 - (maxPrice / 200) * 100}%` }}
                        ></div>
                        <input
                          type='range'
                          min='0'
                          max='200'
                          value={minPrice}
                          onChange={handleMinChange}
                          className='absolute w-full h-2 appearance-none bg-transparent z-10'
                          style={{ 
                            WebkitAppearance: 'none',
                            pointerEvents: 'auto',
                            zIndex: 30
                          }}
                        />
                        <input
                          type='range'
                          min='0'
                          max='200'
                          value={maxPrice}
                          onChange={handleMaxChange}
                          className='absolute w-full h-2 appearance-none bg-transparent z-20'
                          style={{ 
                            WebkitAppearance: 'none',
                            pointerEvents: 'auto',
                            zIndex: 40
                          }}
                        />
                      </div>
                      <div className='flex justify-between mt-6'>
                        <div className='px-3 py-1 bg-gray-100 rounded-lg text-black font-medium'>
                          ${minPrice}
                        </div>
                        <div className='px-3 py-1 bg-purple-100 text-purple-700 rounded-lg font-medium'>
                          ${maxPrice}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
          <div>
            <button className='mt-4 gradientBg text-white px-4 py-2 w-full rounded-md'>
              Refine Search
            </button>
            <button className='mt-4 bg-white border text-[#6A6969] px-4 py-2 w-full rounded-md'>
              Reset Filter
            </button>
          </div>
        </div>

        <div className='col-span-12 md:col-span-8'>
          <div>
            <h1 className='text-2xl font-bold font-brygada text-3xl text-[#242424]'>Templates</h1>
            <div className='grid grid-cols-12 gap-10 mt-10 border py-5'>
              <div className='col-span-8 flex gap-6 pl-5 items-center'>
                <h2 
                  className={`text-[#393939] text-[16px] cursor-pointer ${priceType === 'free' ? 'text-purple-600' : ''}`}
                  onClick={() => handlePriceTypeSelect('free')}
                >
                  Free
                </h2>
                <h2 
                  className={`text-[#393939] text-[16px] cursor-pointer ${priceType === 'premium' ? 'text-purple-600' : ''}`}
                  onClick={() => handlePriceTypeSelect('premium')}
                >
                  Premium
                </h2>
              </div>
              <div className='col-span-4 flex justify-end pr-2'>
                <div className="relative inline-block text-left">
                  <button
                    onClick={() => setIsNewest(!isNewsest)}
                    className="flex items-center gap-2 px-4 py-2 bg-white text-[#393939] rounded-lg "
                  >
                    Select Option
                    <svg
                      className={`w-4 h-4 transition-transform ${isNewsest ? "rotate-180" : ""}`}
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>

                  {isNewsest && (
                    <div className="absolute left-0 mt-2 w-48 bg-white border border-gray-200 rounded-lg shadow-lg">
                      <ul className="py-2 text-gray-700">
                        <li 
                          className={`px-4 py-2 hover:bg-gray-100 cursor-pointer ${sortOption === 'popular' ? 'text-purple-600' : ''}`}
                          onClick={() => handleSortOptionSelect('popular')}
                        >
                          Popular
                        </li>
                        <li 
                          className={`px-4 py-2 hover:bg-gray-100 cursor-pointer ${sortOption === 'newest' ? 'text-purple-600' : ''}`}
                          onClick={() => handleSortOptionSelect('newest')}
                        >
                          Newest
                        </li>
                        <li 
                          className={`px-4 py-2 hover:bg-gray-100 cursor-pointer ${sortOption === 'oldest' ? 'text-purple-600' : ''}`}
                          onClick={() => handleSortOptionSelect('oldest')}
                        >
                          Oldest
                        </li>
                      </ul>
                    </div>
                  )}
                </div>
              </div>
            </div>

            <div className='grid grid-cols-12 mt-10'>
              {filteredTemplates.map((template) => (
                <div key={template.id} className='col-span-4 mt-4 py-10 border mr-3'>
                  <img
                    src={template.image}
                    alt={template.title}
                    className='w-full h-64 object-cover w-[95%]'
                  />
                  <h2 className='font-josefin text-center text-[#393939] font-bold text-[18px] mt-5'>
                    {template.title}
                  </h2>
                  <p className='text-[#777777] text-[14px] text-center'>{template.category}</p>
                  <div className='flex gap-3 items-center justify-center mt-2'>
                    {[...Array(template.rating)].map((_, index) => (
                      <BiSolidStar key={index} color='#FF8A00' />
                    ))}
                  </div>
                  <p className='text-center mt-2 font-semibold'>
                    {template.priceType === 'free' ? 'Free' : `$${template.price}`}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Template;
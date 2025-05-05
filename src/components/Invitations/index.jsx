import { React, useState } from 'react'
import { IoIosArrowUp } from "react-icons/io";
import { IoIosArrowDown } from "react-icons/io";
import CardImg from "../../assets/images/home/weedingCad.png"
import { BiSolidStar } from "react-icons/bi";
import ContactForm from '../ContactFrom';
import Testimonial from '../Testimonial';
import templateData from '../../data/TemplateData';
import { Link } from 'react-router-dom';
const Invitations = () => {
   const [openAccordion, setOpenAccordion] = useState(null);
   const [minPrice, setMinPrice] = useState(10);
   const [maxPrice, setMaxPrice] = useState(150);
   const [isOpen, setIsOpen] = useState(true);
   const [checkedItems, setCheckedItems] = useState([true, false, false, false, false]);

   const toggleCheckbox = (index) => {
      const updated = [...checkedItems];
      updated[index] = !updated[index];
      setCheckedItems(updated);
   };

   const [isShort, setIsShort] = useState(true);
   const [checkedShort, setCheckedShort] = useState(true, false, false, false, false);


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
   return (
      <>
         <div className="bgInvitastion m-6 ">
            <div className='max-w-7xl mx-auto px-4 '>
               <div className='grid grid-cols-12'>
                  <div className='col-span-12 flex justify-center items-center bgHeading  '>
                     <h1 className='text-center textUniversal font-brygada font-semibold text-[60px] '>Invitations</h1>
                  </div>
               </div>
            </div>
         </div>

         <div className='max-w-7xl mx-auto px-4'>
            <div className='grid grid-cols-12'>
               <div className='col-span-4'>
                  <h1 className='font-brygada text-[30px] font-bold text-[#242424] mb-5'>Categories</h1>
                  <div>
                     <div className="w-11/12 border border-[#E1E9F3] rounded-sm shadow-sm mb-5">
                        <div
                           className="flex justify-between items-center px-4 py-3 border-b border-[#E1E9F3] cursor-pointer"
                           onClick={() => setIsOpen(!isOpen)}
                        >
                           <h3 className="font-josefin font-bold text-xl text-[#393939]">Birthday</h3>
                           <span className="text-xl">{isOpen ? <IoIosArrowUp /> : <IoIosArrowDown />}</span>
                        </div>

                        {isOpen && (
                           <ul className="space-y-3 px-4 py-3">
                              {[0, 1, 2, 3, 4].map((_, index) => (
                                 <li key={index} className="flex items-center justify-between">
                                    <span className="text-gray-700">Lorem Ipsum</span>
                                    <input
                                       type="checkbox"
                                       checked={checkedItems[index]}
                                       onChange={() => toggleCheckbox(index)}
                                       className="appearance-none h-5 w-5 border border-gray-300 rounded-sm checked:bg-[#753fd9] checked:border-transparent"
                                    />
                                 </li>
                              ))}
                           </ul>
                        )}
                     </div>
                  </div>
                  <div>
                     <div className="w-11/12 border border-[#E1E9F3] rounded-sm shadow-sm mb-5">
                        <div
                           className="flex justify-between items-center px-4 py-3 border-b border-[#E1E9F3] cursor-pointer"
                           onClick={() => setIsOpen(!isOpen)}>
                           <h3 className="font-josefin font-bold text-xl text-[#393939]">Birthday</h3>
                           <span className="text-xl">{isOpen ? <IoIosArrowUp /> : <IoIosArrowDown />}</span>
                        </div>

                        {isOpen && (
                           <ul className="space-y-3 px-4 py-3">
                              {[0, 1, 2, 3, 4].map((_, index) => (
                                 <li key={index} className="flex items-center justify-between">
                                    <span className="text-gray-700">Lorem Ipsum</span>
                                    <input
                                       type="checkbox"
                                       checked={checkedItems[index]}
                                       onChange={() => toggleCheckbox(index)}
                                       className="appearance-none h-5 w-5 border border-gray-300 rounded-sm checked:bg-[#753fd9] checked:border-transparent"
                                    />
                                 </li>
                              ))}
                           </ul>
                        )}
                     </div>
                  </div>
                  <div>
                     <div className="w-11/12 border border-[#E1E9F3] rounded-sm shadow-sm mb-5">
                        <div
                           className="flex justify-between items-center px-4 py-3 border-b border-[#E1E9F3] cursor-pointer"
                           onClick={() => setIsOpen(!isOpen)}
                        >
                           <h3 className="font-josefin font-bold text-xl text-[#393939]">Birthday</h3>
                           <span className="text-xl">{isOpen ? <IoIosArrowUp /> : <IoIosArrowDown />}</span>
                        </div>

                        {isOpen && (
                           <ul className="space-y-3 px-4 py-3">
                              {[0, 1, 2, 3, 4].map((_, index) => (
                                 <li key={index} className="flex items-center justify-between">
                                    <span className="text-gray-700">Lorem Ipsum</span>
                                    <input
                                       type="checkbox"
                                       checked={checkedItems[index]}
                                       onChange={() => toggleCheckbox(index)}
                                       className="appearance-none h-5 w-5 border border-gray-300 rounded-sm checked:bg-[#753fd9] checked:border-transparent"
                                    />
                                 </li>
                              ))}
                           </ul>
                        )}
                     </div>
                  </div>
                  <div>
                     <div className="w-11/12 border border-[#E1E9F3] rounded-sm shadow-sm mb-5">
                        <div
                           className="flex justify-between items-center px-4 py-3 border-b border-[#E1E9F3] cursor-pointer"
                           onClick={() => setIsOpen(!isOpen)}
                        >
                           <h3 className="font-josefin font-bold text-xl text-[#393939]">Birthday</h3>
                           <span className="text-xl">{isOpen ? <IoIosArrowUp /> : <IoIosArrowDown />}</span>
                        </div>

                        {isOpen && (
                           <ul className="space-y-3 px-4 py-3">
                              {[0, 1, 2, 3, 4].map((_, index) => (
                                 <li key={index} className="flex items-center justify-between">
                                    <span className="text-gray-700">Lorem Ipsum</span>
                                    <input
                                       type="checkbox"
                                       checked={checkedItems[index]}
                                       onChange={() => toggleCheckbox(index)}
                                       className="appearance-none h-5 w-5 border border-gray-300 rounded-sm checked:bg-[#753fd9] checked:border-transparent"
                                    />
                                 </li>
                              ))}
                           </ul>
                        )}
                     </div>
                  </div>
                  <div className='border border-[#E1E9F3] rounded-sm shadow-sm mb-8 w-11/12'>
                     <button
                        className='w-full text-left p-2 bg-white p-4 font-josefin font-bold text-xl flex justify-between'
                        onClick={() => toggleAccordion(3)}
                     >
                        Price Range
                        <span className="text-xl">{isOpen ? <IoIosArrowUp /> : <IoIosArrowDown />}</span>
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
                  <div className='w-11/12 mb-28'>
                     <button className=' gradientBg text-white px-4 py-2 w-full rounded-md '>
                        Refine Search
                     </button>
                     <button className='mt-4 bg-white border text-[#6A6969] px-4 py-2 w-full rounded-md'>
                        Reset Filter
                     </button>
                  </div>
               </div>
               <div className='col-span-8'>
                  <h1 className='font-brygada text-[30px] font-bold text-[#242424] mb-5'>Invitation Templates</h1>
                  <div className='border border-[#E1E9F3] rounded-sm shadow-sm mb-5 p-5'>
                     <ul className='flex flex-wrap gap-4 items-center'>
                        {data.map((data, index) => (
                           <li key={index} className='textgradent font-medium'>{data.title}</li>
                        ))
                        }
                     </ul>
                  </div>

                  <div className='grid grid-cols-12 gap-4 '>
                     {templateData.map((data, index) => (
                        <div className='group col-span-4 mb-11 colBoxShadow border border-[#E1E9F3] rounded-sm shadow-sm  p-5 hoverShow'
                           key={index}
                        >
                           <img src={data.img} alt="Card" className='w-full h-[340px] rounded-md ' />
                           <h2 className='font-josefin font-bold text-[#393939] text-xl text-center'>{data.title}</h2>
                           <div className='group-hover:hidden'>
                              <p className='font-poppins text-[#777777] text-center'>{data.subtitile}</p>
                              <div className='flex gap-2 items-center justify-center'>
                                 <BiSolidStar key={index} color='#FF8A00' />
                                 <BiSolidStar key={index} color='#FF8A00' />
                                 <BiSolidStar key={index} color='#FF8A00' />
                                 <BiSolidStar key={index} color='#FF8A00' />
                                 <BiSolidStar key={index} color='#FF8A00' />

                              </div>
                           </div>
                           <div className='hidden  group-hover:block '>
                              <div className='flex items-center justify-center gap-2'>
                                 <h3 className='textUniversal font-bold text-xl'>$ 10.00</h3>
                                 <h3 className='font-medium text-xl text-[#777777] line-through'>$ 10.00</h3>

                              </div>
                              <div className='mt-10 text-center'>
                                 <Link to={`/invitations/${data.id}`} className=' gradientBg text-white px-4 py-2 w-full rounded-md mt-5 font-medium'>
                                    Add to Edit
                                 </Link>
                              </div>
                           </div>
                        </div>
                     ))}



                  </div>
               </div>

            </div>

         </div>

         <ContactForm />
         <Testimonial />

      </>
   )
}
const data = [
   {
      id: 1,
      title: "Wedding",

   },
   {
      id: 2,
      title: "Birthday",

   },
   {
      id: 3,
      title: "Baby & Kids",

   },
   {
      id: 4,
      title: "Corporate",

   },
   {
      id: 5,
      title: "Gathering",

   },
]
export default Invitations

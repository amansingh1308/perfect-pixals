import React from 'react'
import { FaStar, FaThumbsUp } from "react-icons/fa";
import { BiMessageSquareDetail } from "react-icons/bi";
import { FaFacebookSquare, FaInstagram, FaWhatsapp } from "react-icons/fa";
import tempImg from "../assets/images/singalpage/templatesinglePage.png";
import star from '../assets/images/singalpage/star.png';
import thumsup from '../assets/images/singalpage/thumsup.png';
import envlope from '../assets/images/singalpage/envlop.png'
const Singaltemplate = () => {
  return (
    <>
      <div className='singalpageBg m-6'>
        <h1 className='singalpageTitle flex items-center justify-center text-5xl textUniversal font-bold '>Lorem Ipsum</h1>
      </div>

      <div className='max-w-7xl mx-auto'>
        <div className='grid grid-cols-12 gap-4 p-4'>
          <div className='md:col-span-3 col-span-12 singleTemplateImg'>
            <div className='singleTemplateshadow p-2 '>
              <img src={tempImg} alt="" className='  object-cover rounded-lg' />
            </div>
          </div>

          <div className='md:col-span-9 col-span-12 sm:col-span-12'>

            <div className=" ml-10 mx-auto p-6 bg-white ">
              <h1 className="text-4xl font-bold text-[#393939] font-josefin mb-4">Baby Birthday Template</h1>

              <div className="flex justify-between items-center  text-sm text-gray-700 mb-4 ">
                <div className='flex items-center space-x-3'>
                  <div className="flex text-yellow-500 text-xs gap-2">
                    {[...Array(5)].map((_, i) => (
                      <FaStar key={i} className={i < 4 ? "text-[#FF8A00] " : "text-gray-300"} />
                    ))}
                  </div>
                  <span className=" font-josefin text-xl">4.0</span>
                  <div className="flex items-center space-x-1">
                    <img src={thumsup} />
                    {/* <BiMessageSquareDetail /> */}
                    <span className=" font-brygada text-bold text-[#393939] text-sm">99 Review</span>
                  </div>
                  <div className='flex'>
                    <div className="flex items-center space-x-1">
                      <img src={star} />
                      {/* <FaThumbsUp className="text-blue-600" /> */}
                      <span className="font-brygada text-bold text-[#393939] text-sm">999 Likes</span>
                    </div>
                  </div>
                </div>


                <div className="flex  gap-4 items-end justify-end ">
                  <button className="bg-[#F5F3FF] p-2 px-4 text-xs font-brygada text-[#393939] font-semibold">Facebook <FaFacebookSquare className='inline text-[#1877F2] ml-2' /></button>
                  <button className="bg-[#F5F3FF] p-2 px-4 text-xs font-brygada text-[#393939] font-semibold">Instagram <FaInstagram className="inline text-[#E1306C] ml-2" /></button>
                  <button className="bg-[#F5F3FF] p-2 px-4 text-xs font-brygada text-[#393939] font-semibold">WhatsApp <FaWhatsapp className="inline text-[#25D366] ml-2" /></button>
                  <button className="bg-[#F5F3FF] p-2 px-4 text-xs font-brygada text-[#393939] font-semibold">E-Mail <img src={envlope} className='w-3 inline ml-2' /></button>

                </div>

              </div>


              <p className="text-[#777777] text-xl tracking-wider mb-4">
                Lorem Ipsum is simply dummy text of the printing and type setting industry. Lorem Ipsum
                has been the industry's standard dummy text ever since the 1500s, when an unknown printer
                took a galley of type and scrambled it to make a type specimen book.
              </p>

              <p className="text-[#777777] tracking-wider text-xl mb-4">
                Lorem Ipsum is simply dummy text of the printing and type setting industry. Lorem Ipsum
                has been the industry's standard dummy text ever since the 1500s, when an unknown printer
                took a galley of type and scrambled it to make a type specimen book.
              </p>

              <hr className="my-4 border-dashed border-gray-300" />

              <div className="flex items-center justify-between mb-4">
                <div className="text-lg font-semibold text-gray-800">
                  <span className="text-4xl font-bold text-[#242424] font-brygada">$20.00</span>
                  <span className="ml-3 line-through text-gray-400 font-brygada text-2xl">$25.00</span>
                </div>

                <div className="flex gap-2">
                  <button className="textUniversal shadow-lg  text-xs px-4 py-2 ">Go To Payment</button>
                  <button className=" textUniversal shadow-lg text-xs px-4 py-2 ">Go To Edit</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Customer Reviews section  */}
      <div className='max-w-7xl mx-auto  gap-4 mt-10 grid grid-cols-12'>
        <div className='col-span-12 md:col-span-8'>
          <div className='flex mb-5 gap-4 '>
            <h2 className='font-brygada font-bold text-2xl w-1/4'>Template Details</h2>
            <h2 className='font-brygada font-bold text-2xl opacity-30'>Customer Reviews</h2>
          </div>

          <div className=''>
            <div className='flex gap-4   items-center border-b-0 border-2 border-[#D0DAE7] p-2'>
              <div className='border-r-2 border-[#D0DAE7] pr-5 w-1/4 p-2'><h3 className='font-josefin font-medium text-xl text-[#393939]'>Template Title</h3></div>

              <div className='p-2'><h3 className='font-josefin font-medium text-xl text-[#393939] opacity-30'>Lorem Ipsum</h3>
              </div>
            </div>
            <div className='flex gap-4  border-b-0 items-center border-2 border-[#D0DAE7] p-2'>
              <div className='border-r-2 border-[#D0DAE7] pr-5 w-1/4 p-2'><h3 className='font-josefin font-medium text-xl text-[#393939]'>Template Title</h3></div>

              <div className='p-2'><h3 className='font-josefin font-medium text-xl text-[#393939] opacity-30'>Lorem Ipsum</h3>
              </div>
            </div>
            <div className='flex gap-4   items-center border-b-0 border-2 border-[#D0DAE7] p-2'>
              <div className='border-r-2 border-[#D0DAE7] pr-5 w-1/4 p-2'><h3 className='font-josefin font-medium text-xl text-[#393939]'>Template Title</h3></div>

              <div className='p-2'><h3 className='font-josefin font-medium text-xl text-[#393939] opacity-30'>Lorem Ipsum</h3>
              </div>
            </div>
            <div className='flex gap-4  border-b-0 items-center border-2 border-[#D0DAE7] p-2'>
              <div className='border-r-2 border-[#D0DAE7] pr-5 w-1/4 p-2'><h3 className='font-josefin font-medium text-xl text-[#393939]'>Template Title</h3></div>

              <div className='p-2'><h3 className='font-josefin font-medium text-xl text-[#393939] opacity-30'>Lorem Ipsum</h3>
              </div>
            </div>
            <div className='flex gap-4  items-center border-b-0 border-2 border-[#D0DAE7] p-2'>
              <div className='border-r-2 border-[#D0DAE7] pr-5 w-1/4 p-2'><h3 className='font-josefin font-medium text-xl text-[#393939]'>Template Title</h3></div>

              <div className='p-2'><h3 className='font-josefin font-medium text-xl text-[#393939] opacity-30'>Lorem Ipsum</h3>
              </div>
            </div>
            <div className='flex gap-4   items-center border-2 border-[#D0DAE7] p-2'>
              <div className='border-r-2 border-[#D0DAE7] pr-5 w-1/4 p-2'><h3 className='font-josefin font-medium text-xl text-[#393939]'>Tags</h3></div>

              <div className='p-2'><h3 className='font-josefin font-medium text-xl text-[#393939] opacity-30'>Lorem Ipsum</h3>
              </div>
            </div>

          </div>

        </div>
        <div className='col-span-12 md:col-span-4 ml-8'>
          <h2 className='font-brygada font-bold text-2xl '>Related Template</h2>

          <div className='grid grid-cols-12 gap-4 mt-5'>
            <div className='col-span-12 md:col-span-6'>
              <div className='singleTemplateshadow p-2 '>
                <img src={tempImg} alt="" className='  object-cover rounded-lg' />
              </div>


            </div>
            <div className='col-span-12 md:col-span-6'>
              <h3 className='font-josefin font-bold text-xl'>Lorem Ipsum</h3>
              <p>Lorem Ipsum is simply dummy text</p>
              <div className='flex gap-2 items-center'>
                <p><FaStar className="text-[#FF8A00] inline" /> 4.5 </p>
                <div className="flex items-center space-x-1">
                  <img src={star} />
                  {/* <BiMessageSquareDetail /> */}
                  <span className=" font-brygada text-bold text-[#393939] text-sm">99 Review</span>
                </div>
              </div>
              <div className="text-lg font-semibold text-gray-800">
                <span className="text-4xl font-bold text-[#242424] font-brygada">$20.00</span>
                <span className="ml-3 line-through text-gray-400 font-brygada text-2xl">$25.00</span>
              </div>
              <button className=" textUniversal shadow-lg text-xs px-4 py-2 mt-8">Go To Edit</button>
            </div>
          </div>

          <div class="group gradentBorder w-1/2  py-3 px-4 cursor-pointer mt-10 text-center "><button type="button" class="textUniversal inline-block transition-transform duration-200 group-hover:scale-110 hover:font-[500] text-center">Read More</button></div>
        </div>
      </div>


      {/* Customer Reviews section  */}

    </>
  )
}

export default Singaltemplate

import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import img1 from '../../assets/images/home/banner1.png';
import img2 from '../../assets/images/home/banner2.png';
import img3 from '../../assets/images/home/banner3.png';
import about from '../../assets/images/home/aboutus.png';
import creative from '../../assets/images/home/CreativeTemplate.png';
import bestquelity from '../../assets/images/home/BestQuality.png';
import easyEditable from '../../assets/images/home/EasyEditable.png';
import SecurePayment from '../../assets/images/home/SecurePayment.png';
import stepIcon1 from '../../assets/images/home/stepIcon1.png';
import stepIcon2 from '../../assets/images/home/stepIcon2.png';
import stepIcon3 from '../../assets/images/home/stepIcon3.png';
import contactImg from '../../assets/images/home/fprmimg.png';
import rating from '../../assets/images/home/rating.png'
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation } from 'swiper/modules';
import { Pagination } from 'swiper/modules';
const Home = () => {
  return (
    <>
      <div className='m-6'>
        <div className='heroBg bg-cover bg-center bg-no-repeat '>
          <div className='max-w-7xl mx-auto px-4 py-24 h-screen '>
            <diV className='grid grid-cols-12 gap-4 items-center'>
              <div className='col-span-12 md:col-span-8 mr-10'>
                <h1 className='font-josefin text-6xl font-semibold text-white leading-[5rem]'>Your One-Stop Solution for Every Template <span className='textUniversal'>You Need!</span> </h1>

                <div className='flex item-center mt-6 bg-[#c8f1fc] p-10 rounded-md'>
                  <input
                    placeholder='Search your template'
                    className='w-[70%] px-2 gradentBorder rounded-md'
                  ></input>
                  <button className='p-2 gradientBg ml-4 text-white w-[20%]'>Search</button>
                </div>


              </div>

              <div className='col-span-12 md:col-span-4   ml-10'>
                <div className='bg-[#c8f1fc]  rounded-md p-12 mt-10'>
                  <div>
                    <h2 className='textUniversal text-center font-semibold text-4xl mb-5 font-josefin'>Popular’s</h2>
                  </div>
                  <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
                    <SwiperSlide>
                      <img src={img1} alt='img1' className='w-full h-full'></img>
                      <h2 className='textUniversal text-center font-semibold text-2xl mb-5 mt-2 font-josefin'>Announcement’s</h2>
                    </SwiperSlide>

                    <SwiperSlide>
                      <img src={img2} alt='img2' className='w-full h-full'></img>
                      <h2 className='textUniversal text-center font-semibold text-2xl mb-5 mt-2 font-josefin'>Announcement’s</h2>
                    </SwiperSlide>
                    <SwiperSlide>
                      <img src={img3} alt='img3' className='w-full h-full'></img>
                      <h2 className='textUniversal text-center font-semibold text-2xl mb-5 mt-2 font-josefin'>Announcement’s</h2>
                    </SwiperSlide>


                  </Swiper>
                </div>
              </div>
            </diV>
          </div>
        </div>
      </div>

      {/* about us section */}
      <div className='aboutBg my-24 py-4'>
        <div className='grid grid-cols-12 gap-4 max-w-7xl mx-auto '>
          <div className='col-span-12 md:col-span-7 mr-10' >
            <div className='text-right '>
              <img src={about}
                alt='about'
                className='inline-block max-w-full '
              />

            </div>
            <div className='flex items-center justify-end mr-4 '>
              <div className='padding-10 aboutTemplate bg-white'>
                <div className='gradentBorder w-[330px] text-center bg-white py-4'>
                  <h2 className='text-4xl font-semibold textUniversal'>200+</h2>
                  <h3 className='font-josefin text-xl font-semibold'>Template Design's</h3>
                </div>
              </div>
            </div>
          </div>
          <div className='col-span-12 md:col-span-5' >
            <div>
              <h2 className='font-josefin textUniversal font-semibold text-xl'>About Us</h2>
              <h3 className='font-brygada text-black font-bold text-3xl mt-3 '>Lorem Ipsum is simply dummy text of the printing</h3>
              <p className='mt-5 text-sm text-[#777777]'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
              <p className='mt-5 text-sm text-[#777777]'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
            </div>
            <div className='flex mt-5  '>
              < div className='bg-[#F6FAFF] gradentBorder py-2 px-8 font-josefin font-semibold text-[#393939] mr-10'>
                <h3 >Invitations</h3>
              </div>
              < div className='bg-[#F6FAFF] gradentBorder py-2 px-8 font-josefin font-semibold text-[#393939] mr-5'>
                <h3 >Business</h3>
              </div>
              < div className='bg-[#F6FAFF] gradentBorder py-2 px-8 font-josefin font-semibold text-[#393939]'>
                <h3 >Lorem Ipsum</h3>
              </div>

            </div>
            <div className='flex mt-5  '>
              < div className='bg-[#F6FAFF] gradentBorder py-2 px-8 font-josefin font-semibold text-[#393939] mr-10'>
                <h3 >Announcement</h3>
              </div>
              < div className='bg-[#F6FAFF] gradentBorder py-2 px-8 font-josefin font-semibold text-[#393939] mr-5'>
                <h3 >Lorem Ipsu</h3>
              </div>
              < div className='bg-[#F6FAFF] gradentBorder py-2 px-8 font-josefin font-semibold text-[#393939]'>
                <h3 >Lorem </h3>
              </div>

            </div>
            <button className='gradientBg text-white   text-[14px] py-2 px-8 mt-10'>Explore More</button>

          </div>
        </div>
      </div>

      {/* about us section */}

      {/* creative template section  */}

      <div className='flex justify-between max-w-7xl mx-auto my-24 '>
        <div className='flex items-center gap-4 p-5 '>
          <div className='bg-[#F5F3FF] p-3 roundwed-lg-full'>
            <img src={creative} alt='template' width={50} />
          </div>

          <div>
            <h3 className='font-josefin font-semibold text-[18px] text-[#393939]'>Creative Template’s</h3>
            <p className='text-[14px]  text-[#464646]'>Lorem Ipsum is simply dummy text of the printing</p>
          </div>
        </div>

        <div className='flex items-center gap-4 p-5 '>
          <div className='bg-[#F5F3FF] p-3 roundwed-lg-full'>
            <img src={bestquelity} alt='template' width={50} />
          </div>

          <div>
            <h3 className='font-josefin font-semibold text-[18px] text-[#393939]'>Best Quality</h3>
            <p className='text-[14px]  text-[#464646]'>Lorem Ipsum is simply dummy text of the printing</p>
          </div>
        </div>
        <div className='flex items-center gap-4 p-5 '>
          <div className='bg-[#F5F3FF] p-3 roundwed-lg-full'>
            <img src={easyEditable} alt='template' width={50} />
          </div>

          <div>
            <h3 className='font-josefin font-semibold text-[18px] text-[#393939]'>Easy Editable</h3>
            <p className='text-[14px] font-josefin text-[#464646]' >Lorem Ipsum is simply dummy text of the printing</p>
          </div>
        </div>
        <div className='flex items-center gap-4 p-5 '>
          <div className='bg-[#F5F3FF] p-3 roundwed-lg-full'>
            <img src={SecurePayment} alt='template' width={50} />
          </div>

          <div>
            <h3 className='font-josefin font-semibold text-[18px] text-[#393939]'>Secure Payment</h3>
            <p className='text-[14px]  text-[#464646]' >Lorem Ipsum is simply dummy text of the printing</p>
          </div>
        </div>
      </div>

      {/* creative template section  */}
      {/* step guide section  */}

      <div className='stepSectionBg'>
        <div className=' max-w-7xl mx-auto  py-24'>

          <div>
            <h3 className='textUniversal text-xl font-josefin font-semibold text-center'>Step Guide</h3>
            <h4 className=' text-4xl font-brygada font-bold mb-4 text-center'>Create Templates In 3 Easy Steps</h4>
            <p className='text-[#777777] text-center '>Lorem Ipsum is simply dummy text of the printing and type setting industry.</p>
          </div>
          <div className='flex items-center '>
            <div className='stepOne h-[397px] w-1/3 z-30 mt-11 mr-[-10px] relative ' >
              <div className='absolute top-1/4 left-[13%] text-center w-[65%] '>
                <img src={stepIcon3} alt='about' className='inline-block max-w-full h-8  mb-8'></img>
                <h3 className='text-[#2D2D2D] font-josefin font-semibold text-2xl'>Select the template</h3>
                <p className='text-[#6A6969] text-[18px]'>Lorem Ipsum is simply dummy text of the printing </p>
              </div>
            </div>
            <div className='stepTwo h-[397px] w-1/3 z-20 mt-11 mr-[-15px] relative'>
              <div className='absolute top-1/4 left-[13%] text-center w-[65%] '>
                <img src={stepIcon2} alt='about' className='inline-block max-w-full h-8  mb-8'></img>
                <h3 className='text-[#2D2D2D] font-josefin font-semibold text-2xl'>Enter the detail</h3>
                <p className='text-[#6A6969] text-[18px]'>Lorem Ipsum is simply dummy text of the printing </p>
              </div>
            </div>
            <div className='stepThree h-[390px] w-1/3  mt-11 ml-[-15px] relative'>

              <div className='absolute top-1/4 left-[15%] text-center w-[65%] '>
                <img src={stepIcon1} alt='about' className='inline-block max-w-full h-8  mb-8'></img>
                <h3 className='text-[#2D2D2D] font-josefin font-semibold text-2xl'> Download</h3>
                <p className='text-[#6A6969] text-[18px]'>Lorem Ipsum is simply dummy text of the printing </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* step guide section  */}

      {/* contact form section  */}
      <div className='formbg'>
        <div className='grid grid-cols-12 gap-4 max-w-7xl mx-auto py-24'>
          <div className='col-span-12 md:col-span-8'>
            < h3 className='font-brygada text-4xl font-semibold'>Looking to customize your template?</h3>
            <p className='text-[16px] text-[#777777] mt-4 '>Lorem Ipsum is simply dummy text of the printing and type setting industry. </p>

            <form onSubmit={(e) => e.preventDefault()} className='mt-8 space-y-6'>
              <div className='flex gap-4'>
                <div className='w-1/2'>
                  <input
                    type="text"
                    name="fullName"
                    placeholder="Full Name"
                    className="w-full pb-2 border-b border-gray-300 focus:border-gray-500 outline-none placeholder-gray-500 bg-transparent"
                    required
                  />
                </div>

                <div className='w-1/2'>
                  <input
                    type="email"
                    name="email"
                    placeholder="Email Address"
                    className="w-full pb-2 border-b border-gray-300 focus:border-gray-500 outline-none placeholder-gray-500 bg-transparent"
                    required
                  />
                </div>
              </div>

              <div>
                <select
                  name="subject"
                  className="w-full pb-2 border-b border-gray-300 focus:border-gray-500 outline-none text-gray-500 bg-transparent"
                  defaultValue=""
                  required
                >
                  <option value="" disabled>Select Subject</option>
                  <option value="general">General Inquiry</option>
                  <option value="support">Technical Support</option>
                  <option value="custom">Custom Template</option>
                </select>
              </div>

              <div>
                <textarea
                  name="message"
                  placeholder="Your Message"
                  rows="4"
                  className="w-full pb-2 border-b border-gray-300 focus:border-gray-500 outline-none placeholder-gray-500 resize-none bg-transparent"
                  required
                ></textarea>
              </div>

              <div className='flex gap-4'>
                <button type="submit" className='gradientBg text-white py-2 px-12'>Submit</button>
                <button type="button" className='gradentBorder textUniversal py-2 px-8'>Read More</button>
              </div>
            </form>
          </div>
          <div className='col-span-12 md:col-span-4'>
            <img src={contactImg} alt='about' className='inline-block max-w-full ' />
          </div>
        </div>
      </div>

      {/* contact form section  */}
       {/* testimonials section */}
       <div className='stepSectionBg'>
        <div className='  mx-auto  py-24'>

          <div>
            <h3 className='textUniversal text-xl font-josefin font-semibold text-center'>Testimonials</h3>
            <h4 className=' text-4xl font-brygada font-bold mb-4 text-center'>What Our Client Say</h4>
            <p className='text-[#777777] text-center '>Lorem Ipsum is simply dummy text of the printing and type setting industry.</p>
          </div>
           <div className='h-screen mt-10'>

           <Swiper
        slidesPerView={1}
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 50,
          },
        }}
        modules={[Pagination]}
        className="myYSwiper"
      >
        <SwiperSlide>
            
         <div>
             <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</p>
             <div>
                <div className='flex gap-4 mt-5 justify-between'>
                  <div>
                    <div>
                      <img src={rating}/>
                    </div>
                  </div>
                   <div>ntjk</div>

                </div>

             </div>
         </div>

        </SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
        <SwiperSlide>Slide 5</SwiperSlide>
        <SwiperSlide>Slide 6</SwiperSlide>
        <SwiperSlide>Slide 7</SwiperSlide>
        <SwiperSlide>Slide 8</SwiperSlide>
        <SwiperSlide>Slide 9</SwiperSlide>
      </Swiper>
           </div>
        </div>
      </div>


       {/* testimonial sections  */}
    </>
  )
}

export default Home

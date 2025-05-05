import React from 'react';
import map from '../../assets/images/contactUs/map.png';
import envalop from '../../assets/images/contactUs/envlop.png';
import phone from '../../assets/images/contactUs/phone.png';
import top01 from '../../assets/images/contactUs/top01.png';
import top02 from '../../assets/images/contactUs/top02.png';
import top03 from '../../assets/images/contactUs/top03.png';
import bottom01 from '../../assets/images/contactUs/bottom01.png';
import bottom02 from '../../assets/images/contactUs/bottom02.png';
import bottom03 from '../../assets/images/contactUs/bottom03.png';
import { Swiper, SwiperSlide } from 'swiper/react';


import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';




import { Mousewheel, Pagination, Autoplay } from 'swiper/modules';
const ContactUs = () => {
  return (
    <>
      <div className="contactbG m-6">
        <div className='max-w-7xl mx-auto px-4 '>
          <div className='grid grid-cols-12'>
            <div className='col-span-12 flex justify-center items-center bgHeading  '>
              <h1 className='text-center textUniversal font-brygada font-semibold text-[60px] '> Contact Us`</h1>
            </div>
          </div>
        </div>
      </div>

      <div className='max-w-7xl mx-auto px-4 py-28'>
        <div className='flex flex-col items-center justify-center' >

          <h2 className='textUniversal w-fit font-josefin'>Contact Us</h2>
          <h3 className='font-brygada text-4xl font-bold mt-4'>Get In Touch</h3>
          <p className='mt-4 text-[#777777]'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>


        </div>
        <div className='grid grid-cols-12 mt-10 gap-4'>
          <div className='bg-white shadow-[0_10px_30px_rgba(0,0,0,0.1)] rounded-lg px-5 py-8 mt-10 col-span-4 flex flex-col justify-center items-center '>
            <img src={map} className='w-fit mb-4' />
            <h3 className='text-[#393939] text-center font-bold font-josefin text-2xl mb-5 underline'>Phone Number</h3>
            <p className='text-[#6C6C6C]'>+1(987)654 3210</p>
          </div>
          <div className='bg-white shadow-[0_10px_30px_rgba(0,0,0,0.1)] rounded-lg px-5 py-8 mt-10 col-span-4 gradientBg flex flex-col justify-center items-center '>
            <img src={envalop} className='w-fit mb-4' />
            <h3 className='text-white  text-center font-bold font-josefin text-2xl mb-5 underline'>Email Us</h3>
            <p className='text-white '>example@gmail.com  </p>
          </div>
          <div className='shadow-[0_10px_30px_rgba(0,0,0,0.1)] rounded-lg px-5 py-8 mt-10 col-span-4 flex flex-col justify-center items-center '>
            <img src={phone} className='w-fit mb-4' />
            <h3 className='text-[#393939] text-center font-bold font-josefin text-2xl mb-5 underline'>Address</h3>
            <p className='text-[#6C6C6C] '>123, Xyz City, Lorem State, 123456</p>
          </div>
        </div>
      </div>
      <div className='getStarted'>
        <div className='max-w-7xl mx-auto px-4 '>
          <div className='grid grid-cols-12'>
            <div className='col-span-12 md:col-span-6 flex flex-col justify-center items-center'>
              <h2 className='font-brygada font-bold text-[#242424] text-3xl text-center'>Get Started With Perfect Pixels</h2>
              <p className='text-[#777777] mt-3 mb-3 text-center'>Lorem Ipsum is simply dummy text of the printing and type setting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</p>
              <button className='bg-white font-medium text-xl py-3 px-6 rounded-md mt-4 text-[#1767CF] shadow-[0_10px_30px_rgba(0,0,0,0.1)]'>Get Started</button>
            </div>
            <div className='col-span-12 md:col-span-3 contactSwiper'>
              <div className="wrapper">
                {/* Top Swiper with Autoplay (Bottom to Top) */}
                <Swiper
                  direction={'vertical'}
                  slidesPerView={3}
                  spaceBetween={30}
                  loop={true}
                  autoplay={{
                    delay: 2000,
                    disableOnInteraction: false,
                  }}
                  mousewheel={true}
                  pagination={{ clickable: true }}
                  modules={[Mousewheel, Autoplay]}
                  className="mySwiper topSwiper "
                >
                  <SwiperSlide className='mb-2' >
                    <div className='shadow-[0_10px_30px_rgba(0,0,0,0.1)] p-2 bg-white  w-fit '>
                      <img src={top02} />
                    </div>

                  </SwiperSlide>
                  <SwiperSlide className='mb-2' >
                    <div className='shadow-[0_10px_30px_rgba(0,0,0,0.1)] p-2 bg-white  w-fit '>
                      <img src={top01} />
                    </div>

                  </SwiperSlide>
                  <SwiperSlide className='mb-2' >
                    <div className='shadow-[0_10px_30px_rgba(0,0,0,0.1)] p-2 bg-white  w-fit '>
                      <img src={top03} />
                    </div>

                  </SwiperSlide>
                  <SwiperSlide className='mb-2' >
                    <div className='shadow-[0_10px_30px_rgba(0,0,0,0.1)] p-2 bg-white  w-fit '>
                      <img src={top02} />
                    </div>

                  </SwiperSlide>
                  <SwiperSlide className='mb-2' >
                    <div className='shadow-[0_10px_30px_rgba(0,0,0,0.1)] p-2 bg-white  w-fit '>
                      <img src={top01} />
                    </div>

                  </SwiperSlide>
                  <SwiperSlide className='mb-2' >
                    <div className='shadow-[0_10px_30px_rgba(0,0,0,0.1)] p-2 bg-white  w-fit '>
                      <img src={top03} />
                    </div>

                  </SwiperSlide>
                </Swiper>

                {/* Bottom Swiper with Autoplay (Top to Bottom) */}

              </div>
            </div>
            <div className='col-span-12 md:col-span-3 pt-9 contactSwiper'>
              <Swiper
                direction={'vertical'}
                slidesPerView={3}
                spaceBetween={30}
                loop={true}
                autoplay={{
                  delay: 2000,
                  disableOnInteraction: false,
                  reverseDirection: true, // This makes it scroll top-to-bottom
                }}
                mousewheel={true}
                pagination={{ clickable: true }}
                modules={[Mousewheel, Autoplay]} // <-- Autoplay added here
                className="mySwiper bottomSwiper"
              >
                <SwiperSlide className='mb-2' >
                  <div className='shadow-[0_10px_30px_rgba(0,0,0,0.1)] p-2 bg-white  w-fit '>
                    <img src={bottom01} />
                  </div>

                </SwiperSlide>
                <SwiperSlide className='mb-2' >
                  <div className='shadow-[0_10px_30px_rgba(0,0,0,0.1)] p-2 bg-white  w-fit '>
                    <img src={bottom02} />
                  </div>

                </SwiperSlide>
                <SwiperSlide className='mb-2' >
                  <div className='shadow-[0_10px_30px_rgba(0,0,0,0.1)] p-2 bg-white  w-fit '>
                    <img src={bottom03} />
                  </div>

                </SwiperSlide>
                <SwiperSlide className='mb-2' >
                  <div className='shadow-[0_10px_30px_rgba(0,0,0,0.1)] p-2 bg-white  w-fit '>
                    <img src={bottom01} />
                  </div>

                </SwiperSlide>
                <SwiperSlide className='mb-2' >
                  <div className='shadow-[0_10px_30px_rgba(0,0,0,0.1)] p-2 bg-white  w-fit '>
                    <img src={bottom02} />
                  </div>

                </SwiperSlide>
                <SwiperSlide className='mb-2' >
                  <div className='shadow-[0_10px_30px_rgba(0,0,0,0.1)] p-2 bg-white  w-fit '>
                    <img src={bottom03} />
                  </div>

                </SwiperSlide>
              </Swiper>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-12 gap-10 shadow-[0_10px_30px_rgba(0,0,0,0.1)] rounded-md p-5">
          {/* Map Section */}
          <div className="col-span-12 md:col-span-6">
            <div className="w-full h-full  overflow-hidden border border-gray-200">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d27446.557635316836!2d76.77011655!3d30.7333145!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390fed0be66ec96b%3A0xa5ff67f9527319fe!2sChandigarh!5e0!3m2!1sen!2sin!4v1620120000000!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: "450px" }}
                allowFullScreen=""
                loading="lazy"
              />
            </div>
          </div>

          {/* Contact Form */}
          <div className="col-span-12 md:col-span-6">
            <form className="space-y-6">
              <div>
                <input
                  type="text"
                  placeholder="Full Name"
                  className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:border-blue-500 shadow-sm font-josefin"
                />
              </div>
              <div>
                <input
                  type="email"
                  placeholder="Email Address"
                  className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:border-blue-500 shadow-sm font-josefin"
                />
              </div>
              <div>
                <select className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:border-blue-500 text-gray-500 shadow-sm font-josefin">
                  <option value="">Subject</option>
                  <option value="general">General Inquiry</option>
                  <option value="support">Support</option>
                  <option value="feedback">Feedback</option>
                </select>
              </div>
              <div>
                <textarea
                  placeholder="Message"
                  rows="4"
                  className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:border-blue-500 shadow-sm font-josefin"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full py-3 px-6 text-white bg-[#1767CF] rounded-md hover:bg-blue-600 transition-colors textUniversal gradentBorder font-josefin font-semibold "
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}

export default ContactUs

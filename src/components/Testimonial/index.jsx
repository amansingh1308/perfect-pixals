import React from 'react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, FreeMode, Navigation, Pagination } from 'swiper/modules';

import rating from '../../assets/images/home/rating.png';
import testi01 from '../../assets/images/home/testi01.png';
import testi02 from '../../assets/images/home/testimonial02.png';

const Testimonial = () => {
  return (
    <>
       <div className='testimonialSliderOpicity '>
        <div className='  mx-auto  py-24'>

          <div>
            <h3 className='textUniversal text-xl font-josefin font-semibold text-center'>Testimonials</h3>
            <h4 className=' text-4xl font-brygada font-bold mb-4 text-center'>What Our Client Say</h4>
            <p className='text-[#777777] text-center '>Lorem Ipsum is simply dummy text of the printing and type setting industry.</p>
          </div>
          <div className=' mt-10'>

            <Swiper
              loop={true}
              slidesPerView={1}
              spaceBetween={10}

              pagination={{
                clickable: true,
              }}
              autoplay={{
                delay: 2500,}}
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
              modules={[Pagination, Autoplay, FreeMode]}
              className="myYSwiper"
            >
              <SwiperSlide>

                <div className='testimonialBoxShadow mt-3'>
                  <p className='text-center text-[#4A4A4A]'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</p>
                  <div>
                    <div className='flex gap-4 mt-5 justify-between'>
                      <div className='flex gap-4'>
                        <div>
                          <img src={testi01}></img>
                        </div>
                        <div>
                          <h3 className='font-josefin font-semibold text-xl'>Snaya Rao</h3>
                          <p className='text-[#777777]'>CEO, Company Name</p>
                        </div>
                      </div>
                      <div><img src={rating} className='mt-2 w-32' /></div>

                    </div>

                  </div>
                </div>

              </SwiperSlide>
              <SwiperSlide>
                <div className=' pt-3'>
                  <p className='text-center text-[#4A4A4A]'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</p>
                  <div>
                    <div className='flex gap-4 mt-5 justify-between'>
                      <div className='flex gap-4'>
                        <div>
                          <img src={testi02}></img>
                        </div>
                        <div>
                          <h3 className='font-josefin font-semibold text-xl'>Snaya Rao</h3>
                          <p className='text-[#777777]'>CEO, Company Name</p>
                        </div>
                      </div>
                      <div><img src={rating} className='mt-2 w-32' /></div>

                    </div>

                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>

                <div className=' pt-3'>
                  <p className='text-center text-[#4A4A4A]'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</p>
                  <div>
                    <div className='flex gap-4 mt-5 justify-between'>
                      <div className='flex gap-4'>
                        <div>
                          <img src={testi01}></img>
                        </div>
                        <div>
                          <h3 className='font-josefin font-semibold text-xl'>Snaya Rao</h3>
                          <p className='text-[#777777]'>CEO, Company Name</p>
                        </div>
                      </div>
                      <div><img src={rating}  className='mt-2 w-32' /></div>

                    </div>

                  </div>
                </div>

              </SwiperSlide>
              <SwiperSlide> 
                <div className=' pt-3'>
                <p className='text-center text-[#4A4A4A]'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</p>
                <div>
                  <div className='flex gap-4 mt-5 justify-between'>
                    <div className='flex gap-4'>
                      <div>
                        <img src={testi02}></img>
                      </div>
                      <div>
                        <h3 className='font-josefin font-semibold text-xl'>Snaya Rao</h3>
                        <p className='text-[#777777]'>CEO, Company Name</p>
                      </div>
                    </div>
                    <div><img src={rating} className='mt-2 w-32' /></div>

                  </div>

                </div>
              </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
    </>
  )
}

export default Testimonial

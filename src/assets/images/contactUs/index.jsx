import React from 'react';
import map from '../../assets/images/contactUs/map.png';
import envalop from '../../assets/images/contactUs/envlop.png';
import phone from '../../assets/images/contactUs/phone.png'
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
                              <p className='mt-4 text-[#777777]'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>


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
                                 <img src={phone} className='w-fit mb-4'/>
                                 <h3 className='text-[#393939] text-center font-bold font-josefin text-2xl mb-5 underline'>Address</h3>
                                 <p className='text-[#6C6C6C] '>123, Xyz City, Lorem State, 123456</p>
                              </div>
                        </div>

                  </div>

                  <div className='max-w-7xl mx-auto px-4 py-28 getStarted'>

                  </div>
            </>
      )
}

export default ContactUs

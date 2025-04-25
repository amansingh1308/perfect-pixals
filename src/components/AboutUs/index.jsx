import React from 'react';
import imagAbout from '../../assets/images/About/AboutIMG.png'
import Ourmission from '../../assets/images/About/ourmission.png'
import ContactForm from '../ContactFrom';
import Testimonial from '../Testimonial';
import iconArrow from '../../assets/images/About/arrowIcon.png'


const About = () => {
  return (
    <>
      <div className="AboutbG m-6 ">
        <div className='max-w-7xl mx-auto px-4 '>
          <div className='grid grid-cols-12'>
            <div className='col-span-12 flex justify-center items-center bgHeading  '>
              <h1 className='text-center textUniversal font-brygada font-semibold text-[60px] '> About Us </h1>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4">
        <div className='grid grid-cols-12 py-28'>
          <div className='col-span-12 md:col-span-6 relative'>
            <div className='bg-white shadow-[0_10px_30px_rgba(0,0,0,0.1)] rounded-lg px-5 w-max py-8 absolute right-10 top-12'>
              <h2 className='textUniversal  text-4xl font-bold text-center'>200+</h2>
              <p className='font-bold text-[#393939] font-josefin text-2xl text-center'>Template Design’s</p>
            </div>
            <img src={imagAbout} className='w-4/5' />
          </div>
          <div className='col-span-12 md:col-span-6'>
            <h3 className='textUniversal flex w-fit '>About Us</h3>
            <h2 className='font-bold text-3xl font-brygada mt-3 mb-3 tracking-wider'>Lorem Ipsum is simply dummy text of the printing of the printing</h2>
            <p className='text-[#777777] tracking-wider'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
            <p className='text-[#777777] tracking-wider  mt-4'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>


            <div>
              <div className='bg-[#F6FAFF] py-2 px-2 mt-11 gradentBorder w-3/4 rounded-md flex justify-between items-center'>
                <h2 className='text-[#393939] text-xl font-medium font-josefin'>Invitations</h2>
                <img src={iconArrow} className=' mt-2' />
              </div>
              <div className='bg-[#F6FAFF] py-2 px-2 mt-11 gradentBorder w-3/4 rounded-md flex justify-between items-center'>
                <h2 className='text-[#393939] text-xl font-medium font-josefin'>Announcement</h2>
                <img src={iconArrow} className=' mt-2' />
              </div>
              <div className='bg-[#F6FAFF] py-2 px-2 mt-11 gradentBorder w-3/4 rounded-md flex justify-between items-center'>
                <h2 className='text-[#393939] text-xl font-medium font-josefin'>Business</h2>
                <img src={iconArrow} className=' mt-2' />
              </div>
            </div>
          </div>

        </div>
      </div>

      <div className='max-w-7xl mx-auto px-4 py-28'>
        <div className='grid grid-cols-12'>
          <div className='col-span-12 md:col-span-6'>
            <h3 className='textUniversal tracking-wider w-fit'>What We Do</h3>
            <h2 className='font-brygada text-3xl font-bold tracking-wider mt-10'>Our Mission</h2>
            <p className='text-[#777777] tracking-wider'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
            <h3 className='font-brygada text-3xl font-bold tracking-wider mt-10'>Our Vision</h3>
            <p className='text-[#777777] tracking-wider'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>

          </div>
          <div className='col-span-12 md:col-span-6'>
            <img src={Ourmission} className='w-full' />
          </div>
        </div>
      </div>

      <ContactForm />
      <Testimonial />
    </>
  )
}

export default About

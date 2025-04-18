import React from 'react'
import contactImg from '../../assets/images/home/fprmimg.png';
const ContactForm = () => {
  return (
    <>
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

                <div className='group gradientBg text-white py-3 px-12 text-center cursor-pointer'>
                <button type="submit" className='inline-block transition-transform duration-200 group-hover:scale-110 hover:font-[500]  '>Submit</button>
                </div>
                <div className='group gradentBorder  py-3 px-8 cursor-pointer'>
                <button type="button" className='textUniversal inline-block transition-transform duration-200 group-hover:scale-110 hover:font-[500]'>Read More</button>

                </div>
              
              </div>
            </form>
          </div>
          <div className='col-span-12 md:col-span-4'>
            <img src={contactImg} alt='about' className='inline-block max-w-full ' />
          </div>
        </div>
      </div>

      {/* contact form section  */}
    </>
  )
}

export default ContactForm

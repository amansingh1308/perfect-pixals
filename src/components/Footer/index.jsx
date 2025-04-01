import React from 'react'
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from 'react-icons/fa';
import { HiPhone, HiMail, HiLocationMarker } from 'react-icons/hi';
import { Link } from 'react-router-dom';
import bgImage from '../../assets/images/imageFooter/footerbg.png'
import Logo from '../../assets/images/ps.png'
const Footer = () => {
  return (
    <footer
      className={`text-white footerBg bg-cover bg-center bg-no-repeat`}>
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* First Column */}
          <div className="space-y-4">
            <img src={Logo} alt="Logo" className="h-12" />
            <p className="text-[#4A4A4A] font-poppins text-sm ">
            Lorem Ipsum is simply dummy text of the printing and type setting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
            </p>
            <div>
              <h3 className="text-xl font-semibold mb-4 font-josefin text-[#4A4A4A] ">Follow Us</h3>
              <div className="flex space-x-4">
                <Link to="#" className="hover:text-blue-500 "><FaFacebookF size={20} className="iconGradient" /></Link >
                <Link to="#" className="hover:text-blue-400 "><FaTwitter size={20} className="textUniversal"/></Link >
                <Link to="#" className="hover:text-blue-600 "><FaLinkedinIn size={20} className="textUniversal"/></Link >
                <Link to="#" className="hover:text-pink-600 "><FaInstagram size={20} className="textUniversal"/></Link >
              </div>
            </div>
          </div>

          {/* Second Column */}
          <div>
            <h3 className="text-xl font-semibold mb-4 font-josefin text-[#393939]">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="#" className="text-[#4A4A4A] hover:text-white transition-colors">Home</Link ></li>
              <li><Link to="#" className="text-[#4A4A4A] hover:text-white transition-colors">About</Link ></li>
              <li><Link to="#" className="text-[#4A4A4A] hover:text-white transition-colors">Services</Link ></li>
              <li><Link to="#" className="text-[#4A4A4A] hover:text-white transition-colors">Portfolio</Link ></li>
              <li><Link to="#" className="text-[#4A4A4A] hover:text-white transition-colors">Contact</Link ></li>
            </ul>
          </div>

          {/* Third Column */}
          <div>
            <h3 className="text-xl font-semibold mb-4 font-josefin text-[#393939]">Contact Details</h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <HiPhone className="text-[#4A4A4A]" size={20} />
                <span className="text-[#4A4A4A]">+1 234 567 890</span>
              </div>
              <div className="flex items-center space-x-3">
                <HiMail className="text-[#4A4A4A]" size={20} />
                <span className="text-[#4A4A4A]">info@example.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <HiLocationMarker className="text-[#4A4A4A]" size={20} />
                <span className="text-[#4A4A4A]">123 Street Name, City, Country</span>
              </div>
            </div>
          </div>

          {/* Fourth Column */}
          <div>
            <h3 className="text-xl font-semibold mb-4 font-josefin text-[#393939]">Newsletter</h3>
            <p className=" mb-4 text-[#4A4A4A]">Subscribe Our Newsletter</p>
            <form className="space-y-2">
              <input
                type="email"
                placeholder="Your email"
                className="w-full px-4 py-2 bg-white text-black rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 gradentBorder"
              />
              {/* <div className='textUniversal'> */}
              <button
                type="submit"
                className="w-full  px-4 py-2 gradientBg rounded-md transition-colors"
              >
                Subscribe
              </button>
              {/* </div> */}
             
            </form>
          </div>


        </div>
      </div>
      <div className='grid grid-cols-2 max-w-7xl mx-auto px-4 py-12 '>
        <div className='text-[#4A4A4A] text center'>© PerfectPixels  2025, All Rights Reserved. Designed by – Vcana Global, Inc.</div>
        <div className='text-black text-right'>

          <Link to="#" className="textUniversal transition-colors">Privacy policy</Link ><span className="textUniversal"> | </span>
          <Link to="#" className="textUniversal hover:text-white transition-colors">Terms and Conditions </Link >

        </div>


      </div>
    </footer>
  )
}

export default Footer
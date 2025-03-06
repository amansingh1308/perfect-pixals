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
              <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
              <div className="flex space-x-4">
                <Link to="#" className="hover:text-blue-500 transition-colors"><FaFacebookF size={20} /></Link >
                <Link to="#" className="hover:text-blue-400 transition-colors"><FaTwitter size={20} /></Link >
                <Link to="#" className="hover:text-blue-600 transition-colors"><FaLinkedinIn size={20} /></Link >
                <Link to="#" className="hover:text-pink-600 transition-colors"><FaInstagram size={20} /></Link >
              </div>
            </div>
          </div>

          {/* Second Column */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="#" className="text-gray-400 hover:text-white transition-colors">Home</Link ></li>
              <li><Link to="#" className="text-gray-400 hover:text-white transition-colors">About</Link ></li>
              <li><Link to="#" className="text-gray-400 hover:text-white transition-colors">Services</Link ></li>
              <li><Link to="#" className="text-gray-400 hover:text-white transition-colors">Portfolio</Link ></li>
              <li><Link to="#" className="text-gray-400 hover:text-white transition-colors">Contact</Link ></li>
            </ul>
          </div>

          {/* Third Column */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Contact Details</h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <HiPhone className="text-gray-400" size={20} />
                <span className="text-gray-400">+1 234 567 890</span>
              </div>
              <div className="flex items-center space-x-3">
                <HiMail className="text-gray-400" size={20} />
                <span className="text-gray-400">info@example.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <HiLocationMarker className="text-gray-400" size={20} />
                <span className="text-gray-400">123 Street Name, City, Country</span>
              </div>
            </div>
          </div>

          {/* Fourth Column */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Newsletter</h3>
            <p className="text-gray-400 mb-4">Subscribe Our Newsletter</p>
            <form className="space-y-2">
              <input
                type="email"
                placeholder="Your email"
                className="w-full px-4 py-2 bg-gray-800 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-md transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>


        </div>
      </div>
      <div className='grid grid-cols-2 max-w-7xl mx-auto px-4 py-12 '>
        <div className='text-black text center'>© PerfectPixels  2025, All Rights Reserved. Designed by – Vcana Global, Inc.</div>
        <div className='text-black text-right'>

          <Link to="#" className="text-gray-400 hover:text-white transition-colors">Privacy policy</Link ><span className="text-gray-400 mx-2">|</span>
          <Link to="#" className="text-gray-400 hover:text-white transition-colors">Terms and Conditions </Link >

        </div>


      </div>
    </footer>
  )
}

export default Footer
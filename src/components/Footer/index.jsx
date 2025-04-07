import React from 'react'
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from 'react-icons/fa';
import { HiPhone, HiMail, HiLocationMarker } from 'react-icons/hi';
import { Link } from 'react-router-dom';
import bgImage from '../../assets/images/imageFooter/footerbg.png';
import Logo from '../../assets/images/ps.png';
import call from '../../assets/images/footer/call.png';
import mail from '../../assets/images/footer/envlop.png';
import facebook from '../../assets/images/footer/facebook.png';
import instagram from '../../assets/images/footer/instagram.png';
import linkedin from '../../assets/images/footer/linkedin.png';
import x from '../../assets/images/footer/x.png';
import location from '../../assets/images/footer/location.png';
const Footer = () => {
  return (

    <div className='m-6'>
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
                  <Link to="#" className="hover:text-blue-500 "><img src={facebook} /></Link >
                  <Link to="#" className="hover:text-blue-400 "><img src={instagram} /></Link >
                  <Link to="#" className="hover:text-blue-600 "><img src={linkedin} /></Link >
                  <Link to="#" className="hover:text-pink-600 "><img src={x} /></Link >
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
            {/*  */}
            {/* Third Column */}
            <div>
              <h3 className="text-xl font-semibold mb-4 font-josefin text-[#393939]">Contact Details</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <img src={call} />
                  <span className="text-[#4A4A4A]">+1 234 567 890</span>
                </div>
                <div className="flex items-center space-x-3">
                  <img src={mail} />
                  <span className="text-[#4A4A4A]">info@example.com</span>
                </div>
                <div className="flex items-center space-x-3">
                  <img src={location} />
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

                <div className="group w-full px-4 py-2 gradientBg rounded-sm transition-colors inline-block text-center">
                  <button
                    type="submit"
                    className="transition-transform duration-200 group-hover:scale-110 group-hover:font-[500]"
                  >
                    Subscribe
                  </button>
                </div>


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
    </div>

  )
}

export default Footer
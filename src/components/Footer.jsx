// import React from 'react'
import '../styles/Footer.css'
// import { Input } from "@material-tailwind/react";

export default function Footer() {
  return (
    <div className=''>
      <div className=''>
        <div  className='flex justify-between'>
          <div className='font-sans  '>
            <h4 className=''>Follow Us </h4>
            <a href="/instagram">
              <p>Instagram</p>
            </a>
            <a href="/Facebook">
              <p>Facebook</p>
            </a>
            <a href="/TikTok">
              <p>TikTok</p>
            </a>
            <a href="/Twitter">
              <p>Twitter</p>
            </a>
          </div> 
          <div className='footer-links'>
            <h4>About Petify </h4>
            <a href="/instagram">
              <p>Who we are ?</p>
            </a>
            <a href="/instagram">
              <p>Privacy Policy</p>
            </a>
            <a href="/instagram">
              <p>Terms Of Use</p>
            </a> 
            <a href="/instagram">
              <p>Cookie Notice</p>
            </a>
          </div> 
          <div className='footer-links'>
            <h4 className='underline'>Subscribe to our newsletter </h4> <br />
            <p>Stay updated on new releases <br /> and features, guides,
                and Products.</p>
                <br />
            <div className=" border-white text-white">
                {/* <Input label= "" className='w-64 rounded-full'/> */}
                <input label="Your Email" type="text" className='w-64 rounded-full text-white	' />
                <br />
            <br />
                <button className="w-48 bg-cyan-500 hover:bg-cyan-600 rounded-full">Subscribe</button>
            </div>
          </div> 
           <div className='footer-links'>
            <h4>Other  </h4>
            <a href="/instagram">
              <p>Help</p>
            </a>
            <a href="/instagram">
              <p>Contact</p>
            </a>
            <a href="/instagram">
              <p>About us</p>
            </a>
          </div>
        </div>
        <div className='mt-8 tracking-widest	'>
          <p>All right reserved to © Petify 2023</p>
        </div>
      </div>
    </div>
  )
}

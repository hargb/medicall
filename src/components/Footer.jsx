import React from 'react'
import { assets } from '../assets/assets'
import Mylogo from "../assets/Mylogo.png";

const Footer = () => {
  return (
    <div className='md:mx-10'>
      <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>
{/*---left section-- */}
<div>
<img className='mb-5 w-40'src={Mylogo} alt="" />
<p className='w-full md:w-2/3 text-gray-600 leading-6'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cum ratione deleniti, ad facilis, laudantium dolorem quasi assumenda ipsum doloribus consequatur vel rem esse animi molestiae amet reprehenderit similique perferendis molestias?</p>
</div>
{/*---Center section-- */}
<div>
  <p className='text-xl font-medium mb-5'>COMPANY</p>
<ul className='flex flex-col gap-2 text-gray-600'>
  <li>Home</li>
  <li>About us</li>
  <li>Contact us</li>
  <li>Privacy Policy</li>
</ul>
</div>
{/*---Right section-- */}
<div>
  <p className='text-xl font-medium mb-5'>GET IN TOUCH</p>
    <ul className='flex flex-col gap-2 text-gray-600'>
      <li>+91 8130265893</li>
      <li>medicall112@gmail.com</li>
    </ul>
</div>
      </div>
      <div>
        {/*---Copyright Text---*/}
      </div>
      <hr/>
      <p className='py-5 text-sm text-center'>&copy; 2024 Medi-Call. All rights reserved. Developed by Harsh Aggarwal - A user-friendly doctor booking 
appointment app for seamless medical consultations</p>
    </div>
  )
}

export default Footer

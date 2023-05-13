import React from 'react';

import aboutImg from '../../../assets/images/about_us/person.jpg'
import aboutImg1 from '../../../assets/images/about_us/parts.jpg'
const About = () => {
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content md:flex-col gap-24 lg:flex-row">
        <div className="w-1/2 relative">
          <img src={aboutImg} className="rounded-lg shadow-2xl" />
          <img src={aboutImg1} className="w-1/3 border-8  -right-10 top-3/4 border-white absolute rounded-lg shadow-2xl" />
        </div>
        <div className='w-1/2' >
          <h3 className='text-rose-600'>About Us</h3>
          <h1 className="text-5xl text-black font-bold">We are qualified & of experience in this field</h1>
          <p className="py-6">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.</p>
          <p className="py-6">the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. .</p>
          <button className="btn px-12 py-4 bg-red-800 btn-primary">Get Started</button>
        </div>
      </div>
    </div >
  );
};

export default About;
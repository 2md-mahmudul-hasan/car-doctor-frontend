import React, { useEffect, useState } from 'react';
import ServiceCard from './ServiceCard';

const Services = () => {
  const [services, setServices] = useState([])
  useEffect(() => {
    fetch('http://localhost:5000/services')
      .then(res => res.json())
      .then(data => setServices(data))
  }, [])
  return (
    <div>
      <section className='text-center py-4'>
        <h6 className='text-2xl font-bold'>Services</h6>
        <h2 className='text-4xl font-extrabold '>Our Service Area</h2>
        <p>the majority have suffered alteration in some form, by injected humour,<br></br> or randomised words which don't look even slightly believable. </p>
      </section>
      <section>
        <h2> Total services is {services.length}</h2>
        <div className='grid grid-cols-3'>
          {
            services.map(service => <ServiceCard key={service._id} service={service}></ServiceCard>)
          }
        </div>
      </section>
    </div>
  );
};

export default Services;
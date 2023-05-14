import React from 'react';
import { useLoaderData } from 'react-router-dom';

const CheckOut = () => {
  const serviceInfo = useLoaderData()
  return (
    <div>
      <div className="card w-96 bg-base-100 shadow-xl image-full">
        <figure><img src={serviceInfo.img} alt="Shoes" /></figure>
        <div className="card-body">
          <h2 className="card-title">{serviceInfo.title}!</h2>
          <p>{serviceInfo.price}</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Buy Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckOut;
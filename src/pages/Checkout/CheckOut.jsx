import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { authContext } from '../../AuthProvider/AuthProvider';

const CheckOut = () => {
  const serviceInfo = useLoaderData()
  const { user } = useContext(authContext)



  const handleCheckout = (e) => {
    e.preventDefault()
    const form = e.target;
    const name = form.name.value;
    const price = form.price.value;
    const email = form.email.value;
    const date = form.date.value;

    const checkoutInfo = {
      name, price, email, date
    }
    fetch('http://localhost:5000/checkout', {
      method: 'post',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(checkoutInfo)
    })
      .then(res => res.json())
      .then(data => console.log(data))
  }
  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col">
          <h2 className='text-center'> Your checkout here </h2>
          <div className="text-center">
            <h1 className="text-5xl font-bold">Service name: {serviceInfo.title}</h1>
          </div>
          <div className="cad w-full  shadow-2xl bg-base-100">
            <form onSubmit={handleCheckout} className="card-body">

              <div className="flex gap-4 flex-cols-2">
                <div className="form-control w-1/2">
                  <label className="label">
                    <span className="label-text">Name</span>
                  </label>
                  <input type="text" name="name" defaultValue={user?.displayName} placeholder="name" className="input input-bordered" />
                </div>
                <div className="form-control w-1/2">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input type="text" name="email" defaultValue={user?.email} placeholder="email" className="input input-bordered" />
                </div>
              </div>

              <div className="flex gap-4 flex-cols-2">
                <div className="form-control w-1/2">
                  <label className="label">
                    <span className="label-text">Service id</span>
                  </label>
                  <input type="text" name="id" defaultValue={serviceInfo._id} placeholder="service_id" className="input input-bordered" />
                </div>
                <div className="form-control w-1/2">
                  <label className="label">
                    <span className="label-text"> image </span>
                  </label>
                  <input type="text" name="image_url" defaultValue={serviceInfo.img} placeholder="email" className="input input-bordered" />
                </div>
              </div>




              <div className="flex gap-4 flex-cols-2">
                <div className="form-control w-1/2">
                  <label className="label">
                    <span className="label-text">Date</span>
                  </label>
                  <input name='date' type="date" placeholder="date" className="input input-bordered" />
                </div>
                <div className="form-control w-1/2">
                  <label className="label">
                    <span className="label-text">Price</span>
                  </label>
                  <input name="price" type="number" defaultValue={serviceInfo.price} placeholder="price" className="input input-bordered" />
                </div>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary w-full">confirm order</button>
              </div>

            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckOut;
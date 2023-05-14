
import { Link } from 'react-router-dom'
const ServiceCard = ({ service }) => {
  const { _id, title, img, price, description } = service;
  return (
    <div>
      <div className="card w-96 bg-base-100 shadow-xl">
        <figure className="px-10 pt-10">
          <img src={img} alt="Shoes" className="rounded-xl" />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">{title}!</h2>
          <h4 className="card-title">${price}</h4>
          <p>{description.slice(0, 40)}</p>
          <div className="card-actions">
            <button className='btn'><Link className='text-warning' to={`/checkout/${_id}`}>checkout</Link></button>
          </div>
        </div>
      </div>
    </div >
  );
};

export default ServiceCard;
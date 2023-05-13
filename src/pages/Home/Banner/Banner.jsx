
import banner1 from '../../../assets/images/banner/1.jpg'
import banner2 from '../../../assets/images/banner/2.jpg'
import banner3 from '../../../assets/images/banner/3.jpg'
import banner4 from '../../../assets/images/banner/4.jpg'
import banner5 from '../../../assets/images/banner/5.jpg'
import banner6 from '../../../assets/images/banner/6.jpg'

const Banner = () => {
  return (
    <div className="carousel w-full h-[80vh]">
      <div id="slide1" className="carousel-item relative w-full">
        <img src={banner1} className="w-full" />
        <div className="absolute flex justify-end transform -translate-y-1/2 bottom-0 right-0 gap-4">
          <a href="#slide4" className="btn btn-circle">❮</a>
          <a href="#slide2" className="btn btn-circle">❯</a>
        </div>
        <div className="absolute left-0 top-0 translate-y-1/3 w-1/3 space-y-6 text-white p-4 bg-gradient-to-r from-[90deg, #151515 0%] to-[rgba(21, 21, 21, 0) 100%]">
          <h1 className='text-4xl'>Affordable Price For Car Servicing</h1>

          <h4 className='text-2xl'>There are many variations of passages of  available, but the majority have suffered alteration in some form</h4>

          <div className='space-x-6'>
            <button className="btn btn-outline btn-primary">Button</button>
            <button className="btn btn-outline btn-secondary">Button</button>
          </div>
        </div>
      </div>
      <div id="slide2" className="carousel-item relative w-full">
        <img src={banner2} className="w-full" />
        <div className="absolute flex justify-end transform -translate-y-1/2 bottom-0 right-0 gap-4">
          <a href="#slide1" className="btn btn-circle">❮</a>
          <a href="#slide3" className="btn btn-circle">❯</a>
        </div>

        <div className="absolute left-0 top-0 translate-y-1/3 w-1/3 space-y-6 text-white p-4 bg-gradient-to-r from-[90deg, #151515 0%] to-[rgba(21, 21, 21, 0) 100%]">
          <h1 className='text-4xl'>Affordable Price For Car Servicing</h1>

          <h4 className='text-2xl'>There are many variations of passages of  available, but the majority have suffered alteration in some form</h4>

          <div className='space-x-6'>
            <button className="btn btn-outline btn-primary">Button</button>
            <button className="btn btn-outline btn-secondary">Button</button>
          </div>
        </div>
      </div>
      <div id="slide3" className="carousel-item relative w-full">
        <img src={banner3} className="w-full" />
        <div className="absolute flex justify-end transform -translate-y-1/2 bottom-0 right-0 gap-4">
          <a href="#slide2" className="btn btn-circle">❮</a>
          <a href="#slide4" className="btn btn-circle">❯</a>
        </div>

        <div className="absolute left-0 top-0 translate-y-1/3 w-1/3 space-y-6 text-white p-4 bg-gradient-to-r from-[90deg, #151515 0%] to-[rgba(21, 21, 21, 0) 100%]">
          <h1 className='text-4xl'>Affordable Price For Car Servicing</h1>

          <h4 className='text-2xl'>There are many variations of passages of  available, but the majority have suffered alteration in some form</h4>

          <div className='space-x-6'>
            <button className="btn btn-outline btn-primary">Button</button>
            <button className="btn btn-outline btn-secondary">Button</button>
          </div>
        </div>
      </div>
      <div id="slide4" className="carousel-item relative w-full">
        <img src={banner4} className="w-full" />
        <div className="absolute flex justify-end transform -translate-y-1/2 bottom-0 right-0 gap-4">
          <a href="#slide6" className="btn btn-circle">❮</a>
          <a href="#slide6" className="btn btn-circle">❯</a>
        </div>

        <div className="absolute left-0 top-0 translate-y-1/3 w-1/3 space-y-6 text-white p-4 bg-gradient-to-r from-[90deg, #151515 0%] to-[rgba(21, 21, 21, 0) 100%]">
          <h1 className='text-4xl'>Affordable Price For Car Servicing</h1>

          <h4 className='text-2xl'>There are many variations of passages of  available, but the majority have suffered alteration in some form</h4>

          <div className='space-x-6'>
            <button className="btn btn-outline btn-primary">Button</button>
            <button className="btn btn-outline btn-secondary">Button</button>
          </div>
        </div>
      </div>
      <div id="slide5" className="carousel-item relative w-full">
        <img src={banner5} className="w-full" />
        <div className="absolute flex justify-end transform -translate-y-1/2 bottom-0 right-0 gap-4">
          <a href="#slide2" className="btn btn-circle">❮</a>
          <a href="#slide4" className="btn btn-circle">❯</a>
        </div>

        <div className="absolute left-0 top-0 translate-y-1/3 w-1/3 space-y-6 text-white p-4 bg-gradient-to-r from-[90deg, #151515 0%] to-[rgba(21, 21, 21, 0) 100%]">
          <h1 className='text-4xl'>Affordable Price For Car Servicing</h1>

          <h4 className='text-2xl'>There are many variations of passages of  available, but the majority have suffered alteration in some form</h4>

          <div className='space-x-6'>
            <button className="btn btn-outline btn-primary">Button</button>
            <button className="btn btn-outline btn-secondary">Button</button>
          </div>
        </div>
      </div>
      <div id="slide6" className="carousel-item relative w-full">
        <img src={banner6} className="w-full" />
        <div className="absolute flex justify-end transform -translate-y-1/2 bottom-0 right-0 gap-4">
          <a href="#slide6" className="btn btn-circle">❮</a>
          <a href="#slide5" className="btn btn-circle">❯</a>
        </div>

        <div className="absolute left-0 top-0 translate-y-1/3 w-1/3 space-y-6 text-white p-4 bg-gradient-to-r from-[90deg, #151515 0%] to-[rgba(21, 21, 21, 0) 100%]">
          <h1 className='text-4xl'>Affordable Price For Car Servicing</h1>

          <h4 className='text-2xl'>There are many variations of passages of  available, but the majority have suffered alteration in some form</h4>

          <div className='space-x-6'>
            <button className="btn btn-outline btn-primary">Button</button>
            <button className="btn btn-outline btn-secondary">Button</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
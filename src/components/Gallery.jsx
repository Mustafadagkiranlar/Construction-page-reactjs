import React from 'react'
import img1 from '../assets/building1.jpg'
import img2 from '../assets/building2.jpg'
import img3 from '../assets/building3.jpg'
import img4 from '../assets/building4.jpg'

export default function Gallery() {
  return (
    <div className='bg-[#010030]' id='gallery'>
      <div className='text-center p-5'>
        <span className=' text-5xl text-[#3DD324] font-bold'>
          Our Art
        </span>
      </div>
      {/* Desktop */}
      <div className='hidden lg:block'>
        <div className="columns-2">
          <div className=''>
            <img src={img1} alt='im1' />
            <img src={img2} alt='im2' />
            <img src={img3} alt='im3' />
            <img src={img4} alt='im4' />
          </div>
        </div>
      </div>
      {/* mobile */}
      <div className='lg:hidden'>
        <div className="carousel w-[75%] m-auto my-10">
          <div id="item1" className="carousel-item w-full">
            <img src={img1} height='250px' alt='im1' />
          </div>
          <div id="item2" className="carousel-item w-full">
            <img src={img2} height='250px' alt='im2' />
          </div>
          <div id="item3" className="carousel-item w-full">
            <img src={img3} height='250px' alt='im3' />
          </div>
          <div id="item4" className="carousel-item w-full">
            <img src={img4} height='250px' alt='im4' />
          </div>
        </div>
        <div className="flex justify-center w-full py-2 gap-2">
          <a href="#item1" className="btn btn-xs">1</a>
          <a href="#item2" className="btn btn-xs">2</a>
          <a href="#item3" className="btn btn-xs">3</a>
          <a href="#item4" className="btn btn-xs">4</a>
        </div>
      </div>
    </div>
  );
}

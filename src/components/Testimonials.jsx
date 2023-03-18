import React from 'react'
import person1 from '../assets/person1.jpg'
import person2 from '../assets/person2.jpg'

export default function Testimonials() {
  return (
    <div className='testimonial-bg m-10 rounded-3xl' id='testimonials'>

      <div className="card w-96 bg-base-100 shadow-xl image-full mb-10">
        <figure><img src={person1} alt="Shoes" height={500}/></figure>
        <div className="card-body">
          <h2 className="card-title">Shoes!</h2>
          <p>If a dog chews shoes whose shoes does he choose?</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Buy Now</button>
          </div>
        </div>
      </div>

      <div className="card w-96 bg-base-100 shadow-xl image-full">
        <figure><img src={person2} alt="Shoes" height={500}/></figure>
        <div className="card-body">
          <h2 className="card-title">Shoes!</h2>
          <p>If a dog chews shoes whose shoes does he choose?</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Buy Now</button>
          </div>
        </div>
      </div>

    </div>
  )
}

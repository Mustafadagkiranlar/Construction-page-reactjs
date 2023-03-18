import React, { useState } from 'react'
import Contact from '../components/Contact'
import Gallery from '../components/Gallery'
import Hero from '../components/Hero'
import Testimonials from '../components/Testimonials'

export default function Home() {
  const [toastVisible, setToastVisible] = useState(true);

  return (
    <>
      <div>
      <Hero />
      <Gallery />
      <Testimonials />
      <Contact />
      {toastVisible ?
        <div className="toast">
          <div className="alert alert-info">
            <div>
              <button onClick={() => setToastVisible(false)}>
                <span>This site for demo purposes only<br />Mustafa Dağkıranlar</span>
              </button>
            </div>
          </div>
        </div> :
        <></>}
      </div>
    </>
  )
}

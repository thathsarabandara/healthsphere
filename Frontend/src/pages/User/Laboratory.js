import React from 'react'
import Rectangle82 from '../../assets/images/Rectangle 82.svg'

function Laboratory() {
  return (
    <div>
      <section className="section1">
        <div className="img-container position-relative">
          <img
            src={Rectangle82}
            className="img-fluid w-100"
            alt="Home"
            style={{ objectFit: 'cover', height: 'auto', maxHeight: '100vh' }}
          />
          
          {/* Centered Text */}
          <div className="container position-absolute start-50 top-50 translate-middle text-white text-center">
            <div style={{ color: 'white', fontSize: 34, fontFamily: 'Sansation', fontWeight: '700', wordWrap: 'break-word' }}>
              <div className="col-12 fs-3 fs-md-2 fs-lg-1">Health Sphere Labs</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Laboratory

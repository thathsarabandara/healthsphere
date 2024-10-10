import React from 'react'
import footer1 from '../assets/images/Rectangle 33.svg'
import '../styles/Footer.css'
import Image47 from '../assets/images/Rectangle 47.svg'
import Image46 from '../assets/images/Rectangle 46.svg'
import Image45 from '../assets/images/Rectangle 45.svg'
import Image44 from '../assets/images/Rectangle 44.svg'
import Image34 from '../assets/images/Rectangle 34.svg'

function Footer() {
  return (
    <section className='section footer text-white'>
        <div className='container'>
            <div className='row '>
                <div className='col-12 col-sm-6 col-md-6 col-lg-3 mt-5'>
                    <div> 
                        <img src={footer1} className='footer1 mb-4' alt='footer'/>
                        <div className='text'>
                            <h6>Health Code is a Private Hospital to<br/> Delivering Exceptional HealthCare<br/> across a range of specialties for more<br/> than 75 years</h6>
                        </div>
                    </div>
                </div>
                <div className='col-12 col-sm-6 col-md-6 col-lg-3 mt-5'>
                    <h5 className='mb-4'>Contact Us</h5>
                    <dl>
                        <dt>Call:</dt>
                        <dd className='ms-4'>091 11 22 1234</dd>
                        <dt>Email:</dt>
                        <dd className='ms-4'>healthcode@gmail.com</dd>
                        <dt>Address</dt>
                        <dd className='ms-4'>Gangodawila,<br/>Nugegoda,<br/>Colombo,<br/>Sri-Lanka</dd>
                    </dl>
                </div>
                <div className='col-12 col-sm-6 col-md-6 col-lg-3 mt-5'>
                    <h5 className='mb-5'>Important Links</h5>
                    <div>
                        <dl className='ms-4'>
                            <dd>Docotrs</dd>
                            <dd>Package</dd>
                            <dd>Pharmacy</dd>
                            <dd>Labratory</dd>
                            <dd>About Us</dd>
                        </dl>
                    </div>
                </div>
                <div className='col-12 col-sm-6 col-md-6 col-lg-3 mt-5'>
                    <h5 className='mb-5'>HealthCode Hospitals</h5>
                    <div className='row'>
                        <div className='col-2'><img src={Image47}/></div>
                        <div className='col-2'><img src={Image46}/></div>
                        <div className='col-2'><img src={Image45}/></div>
                        <div className='col-2'><img src={Image44}/></div>
                    </div>
                </div>
            </div>
            <div className='row'>
                <hr/>
                <div className='col-4'>
                    <p className='ms-5'>2024 HealthSphere Hospitals </p>
                </div>
                <div className='col-4'>
                    <p className='ms-5'>© All Rights Reserved by Dev Squad TM</p>
                </div>
                <div className='col-4'>
                    <img src={Image34} className='ms-5'/>
                </div>
            </div>
        </div>
    </section>
  )
}
export default Footer

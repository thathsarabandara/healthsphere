import React from 'react'
import Home1 from "../../assets/images/Rectangle 9 (1).svg"
import '../../styles/Home.css'
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'typeface-anton';
import img1 from '../../assets/images/image-1.svg'
import img2 from '../../assets/images/img-2.svg'
import img3 from '../../assets/images/img-3.svg'
import Rectangle98 from '../../assets/images/Rectangle 98.svg'
import Img0 from '../../assets/images/img-1.svg'
import Img1 from '../../assets/images/img-1 (1).svg'
import Img2 from '../../assets/images/img-1 (2).svg'
import Img3 from '../../assets/images/img-1 (3).svg'
import Img4 from '../../assets/images/img-1 (4).svg'
import Img5 from '../../assets/images/img-1 (5).svg'
import Img6 from '../../assets/images/img-1 (6).svg'
import Img7 from '../../assets/images/img-1 (7).svg' 
import Img8 from '../../assets/images/img-1 (8).svg'
import Img9 from '../../assets/images/img-1 (9).svg' 



function Home() {
  return (
    <div className="container-fluid p-0 position-relative">
      {/* Background Image */}
      
      {/*<div className="img-container ">
        <img src={Home1} className="img-fluid w-100" alt="Home" style={{ objectFit: 'cover', height: '100vh' }} />
      </div>*/}
      <div className="img-container">
        <img src={Home1} className="img-fluid w-100" alt="Home" style={{ objectFit: 'cover', height: 'auto', maxHeight: '100vh' }} />
      </div>

      

      

      

      {/* Content overlaying the image */}
      <div className="container position-absolute  start-50 text-white" style={{ transform: 'translate(-50%, -80%)',  marginTop: '-200px'}}>
        <div className="row">
          {/* Upper Text */}
          <div className="col-12 col-md-8 ms-md-5 text-center text-md-start">
            <h6 className="text-black mb-3 fs-6 fs-md-5 fs-lg-4">
            Unlimited Health Experience with Health Code
            </h6>
          </div>

          {/* Main Heading */}
          <div className="col-12 col-md-8 ms-md-5 text-center text-md-start">
            <h1 className="text-black display-5 display-md-4 display-lg-3 mb-3">
            Get Better Care For Your Health<br />
            with Health <span className="sphere text-white">Sphere</span>
            </h1>
          </div>

          {/* Buttons */}
          <div className="col-12 col-md-8 ms-md-5 d-flex flex-column flex-md-row justify-content-md-start justify-content-center gap-3 mb-4">
            <button className="btn btn-primary px-4 w-100 w-md-auto">Make Appointment</button>
            <button className="btn btn-outline-primary px-4 w-100 w-md-auto">Find Doctor</button>
          </div>

          {/* Social Media Icons */}
          <div className="col-12 col-md-8 ms-md-5 d-flex justify-content-center justify-content-md-start gap-3 mb-4">
            <a href="#"><i className="fab fa-facebook fa-2x text-black"></i></a>
            <a href="#"><i className="fab fa-twitter fa-2x text-black"></i></a>
            <a href="#"><i className="fab fa-instagram fa-2x text-black"></i></a>
          </div>
        </div>
      </div>
      

      



      {/* Lower Text */}
      
      {/*<div className='lower'>
        <div className="position-absolute bottom-0 w-100 text-center">
          <span className="middle text-white fs-1 p-3">"Your Health is our Priority"</span>
        </div>
      </div>*/}
      <div className="position-absolute  start-50 translate-middle text-center ">
        <span className="middle text-white fs-1 p-3" >"Your Health is our Priority"</span>
      </div>

      {/*<div className='home2'>
        <div className='container-fluid'>
          <div className='row'>
            <div className='col'>
              <h1 className='firstheading '>Welcome to Health Code</h1>
              <h6 className='secondheading'>We Dedicated to You</h6>
              <h3 className='thirdheading'>Compassion, Innovation & Excell</h3>
            </div>

          </div>
        </div>
      </div>*/}
      <section className='section1 py-5'>
        <div className='container'>
          <div className='row text-center'>
          <div className="col-12 mt-3">
            <h1>Welcome to Health Code</h1>
            <h6>We Dedicated to You</h6>
            <h3>Compassion , Innovation & Excellence</h3>
          </div>
            
          </div>
          <div className='row text-center mt-3 '>
            <div className='col-12 col-sm-4'>
              <img src={img1} alt="Doctor" className="img-fluid mb-3"/>
            </div>
            <div className='col-sm-4'>
              <img src={img2} alt="Care" className="img-fluid mb-3"/>
            </div>
            <div className='col-sm-4'>
              <img src={img3} alt="Surgery" className="img-fluid mb-3"/>
            </div>
          </div>
        </div>
      </section>

      <section className='section2 py-5' >
        <div className='container'>
          <div className='row text-center'>
            <div className='col'>
              <div style={{color: 'black', fontSize: 30, fontFamily: 'Sansation', fontWeight: '700', wordWrap: 'break-word'}}>Why Patients Choose Us</div>
              <div style={{width: '100%', height: '100%', color: 'black', fontSize: 20, fontFamily: 'Segoe UI', fontWeight: '400', wordWrap: 'break-word'}}>Health Sphere partners with top healthcare professionals to deliver advanced, evidence-based treatments for complex diseases through our Centres of Excellence. <br/><br/>We also provide comprehensive care for lifestyle-related conditions, preventive healthcare, and a full range of diagnostic services. All our hospitals are internationally accredited, ensuring exceptional standards of care.</div>
            </div>
            <div className='col'>
              <img src={Rectangle98} alt="image" style={{width: '100%', height: '100%'}}/>
            </div>
          </div>
          

          <div className="row text-center justify-content-center" style={{width: '100%', height: '100%', color: 'white', background: '#112D4E', boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)', borderRadius: 14}}>
            <div className="col-md-2 col-sm-4 stat-box">
              <div className="stat-number">35<span className="stat-plus">+</span></div>
              <div className="stat-label">Doctors</div>
            </div>
            <div className="col-md-2 col-sm-4 stat-box">
              <div className="stat-number">15<span className="stat-plus">+</span></div>
              <div className="stat-label">New Users</div>
            </div>
            <div className="col-md-2 col-sm-4 stat-box">
              <div className="stat-number">400<span className="stat-plus">+</span></div>
              <div className="stat-label">Consultations</div>
            </div>
            <div className="col-md-2 col-sm-4 stat-box">
              <div className="stat-number">300<span className="stat-plus">+</span></div>
              <div className="stat-label">Total Tests</div>
            </div>
            <div className="col-md-2 col-sm-4 stat-box">
              <div className="stat-number">5<span className="stat-plus">+</span></div>
              <div className="stat-label">Branches</div>
            </div>
          </div>
        </div>
      </section>


      <section className='section3 py-5 '>
        <div className='container text-center'>
          <div className='row'>
            <p className='text-black w-6 h-6' style={{fontSize: 40 ,fontFamily: 'Aoboshi One' , fontWeight: '500', wordWrap: 'break-word'}}>HealthSphere NewsLetter</p>
            <p className='text-black' style={{fontSize: 23, fontFamily: 'Sansita', fontWeight: '400', wordWrap: 'break-word'}}>Check out For Latest News From HealthCode Hospitals</p>
          </div>
          <div className='row'>
            <div className='col col-xm-6 mb-4'><img src={Img0} /></div>
            <div className='col col-xm-6 mb-4'><img src={Img1}/></div>
            <div className='col col-xm-6 mb-4'><img src={Img2}/></div>
            <div className='col col-xm-6 mb-4'><img src={Img3}/></div>
            <div className='col col-xm-6 mb-4' ><img src={Img4}/></div>
          
        
            <div className='col col-xm-6'><img src={Img5} /></div>
            <div className='col col-xm-6'><img src={Img6} /></div>
            <div className='col col-xm-6'><img src={Img7} /></div>
            <div className='col col-xm-6'> <img src={Img8} /></div>
            <div className='col col-xm-6'><img src={Img9} /></div>
          </div>
        </div>
      </section>

      
        
    
    
    
    </div>
     



   
  )
}

export default Home;

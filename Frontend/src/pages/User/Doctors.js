import React from 'react'
import Rectangle56 from '../../assets/images/Rectangle 56.svg'
import Ellipse1 from '../../assets/images/Ellipse 1.svg'
import '../../styles/Doctors.css'

function Doctors() {
  return (
    <div>
      <section className='section '>
        <div className="img-container">
          <img src={Rectangle56} className="img-fluid w-100" alt="Home" style={{ objectFit: 'cover', height: 'auto', maxHeight: '100vh' }} />
        </div>
      </section>
      




      <div className="position-absolute start-50 translate-middle text-center search-form-container">
        <form method="POST">
          <div className="row">
            <div className="col-md-6 col-lg-6 mb-3">
              <div className="form-group">
                <label htmlFor="doctorName" className="label-class">Doctor Name</label>
                <input
                  type="text"
                  name="doctorName"
                  className="form-input form-control"
                  placeholder="Search Doctor Name"
                />
              </div>
            </div>
            <div className="col-md-6 col-lg-6 mb-3">
              <div className="form-group">
                <label htmlFor="specialization" className="label-class">Specialization</label>
                <input
                  type="text"
                  name="specialization"
                  className="form-input form-control"
                  placeholder="Select Specialization"
                />
              </div>
            </div>
          </div>
          
          <div className="row">
            <div className="col-md-4 col-lg-4 mb-3">
              <div className="form-group">
                <label htmlFor="sessionTime" className="label-class">Session Time</label>
                <input
                  type="text"
                  name="sessionTime"
                  className="form-input form-control"
                  placeholder="Any"
                />
              </div>
            </div>
            <div className="col-md-4 col-lg-4 mb-3">
              <div className="form-group">
                <label htmlFor="date" className="label-class">Date</label>
                <input
                  type="text"
                  name="date"
                  className="form-input form-control"
                  placeholder="YY / MM / DD"
                />
              </div>
            </div>
            <div className="col-md-4 col-lg-4 mb-3">
              <button className="btn btn-primary w-100" type="submit">
                Search
              </button>
            </div>
          </div>
        </form>
      </div>


      <div>
        {/* Doctor search form */}
        <div className="position-absolute start-50 translate-middle text-center search-form-container">
          <form method="POST">
            {/* First row: Doctor Name and Specialization */}
            <div className="row">
              <div className="col">
                <div className="form-group">
                  <label htmlFor="doctorName" className="label-class">Doctor name</label>
                  <input type="text" name="doctorName" className="form-input form-control" placeholder="Search Doctor Name" style={{width: 520, height: 53}} />
                </div>
              </div>
              <div className="col">
                <div className="form-group">
                  <label htmlFor="specialization" className="label-class">Specialization</label>
                  <input type="text" name="specialization" className="form-input form-control" placeholder="Select Specialization" style={{width: 305, height: 53}} />
                </div>
              </div>
            </div>

            {/* Second row: Session Time, Date, and Search Button */}
            <div className="row mt-3">
              <div className="col">
                <div className="form-group">
                  <label htmlFor="sessionTime" className="label-class">Session Time</label>
                  <input type="text" name="sessionTime" className="form-input form-control" placeholder="Any" style={{width: 305, height: 53}} />
                </div>
              </div>
              <div className="col">
                <div className="form-group">
                  <label htmlFor="date" className="label-class">Date</label>
                  <input type="text" name="date" className="form-input form-control" placeholder="YY / MM / DD" style={{width: 305, height: 53}} />
                </div>
              </div>
              <div className="col">
                <button className="btn" style={{ width: 196, height: 53, background: '#2A5D9C', borderRadius: 13, marginTop: '32px',display: 'flex', justifyContent: 'center',alignItems: 'center', border: 'none' }}>
                  <span className="text-white" style={{ fontSize: 16, fontFamily: 'Sansation', fontWeight: '400', wordWrap: 'break-word', background: '#2A5D9C' }}>
                    Search
                  </span>
                </button>
              </div>
             
            </div>
          </form>
        </div>
      </div>


    


      <section className='section1 py-5' style={{ background: '#C8D8F6' }}>
        <div className='container'>
          <div className='row text-center  justify-content-center' style={{marginTop: 120}}>

            {/* General Practitioner Card */}
            <div className="col-12 col-md-12 col-lg-6 mb-5 " style={{width: 197, height: 273,  borderRadius: 8}}>
              <div className="card text-center shadow" style={{ background: '#2A5D9C'}}>
                <div className="card-body">
                  <img 
                    src={Ellipse1} 
                    alt="General Practitioner" 
                    className="rounded-circle mb-1" 
                    style={{ width: 94, height: 94 }} 
                  />
                  <div className="text-white mb-0" style={{ fontSize: 16, fontFamily: 'Sansation', fontWeight: '400' }}>
                    Channel a General <br /> Practitioner
                  </div>
                  <div className="text-white mb-1" style={{ fontSize: 9, fontFamily: 'Sansation', fontWeight: '400' }}>
                    Provides comprehensive healthcare, including routine check-ups, preventive care, and treatment for a variety of illnesses and injuries across all ages.
                  </div>
                  <button className="btn mt-1 w-100" style={{ background: '#112D4E', borderRadius: 10 }}>
                    <span className="text-white" style={{ fontSize: 15, fontFamily: 'Sansation', fontWeight: '400' }}>
                      Book
                    </span>
                  </button>
                </div>
              </div>
            </div>

            {/* Pediatrician Card */}
            <div className="col-12 col-md-12 col-lg-6 mb-5 " style={{width: 197, height: 273,  borderRadius: 8}}>
              <div className="card text-center shadow" style={{ background: '#2A5D9C' }}>
                <div className="card-body">
                  <img 
                    src={Ellipse1} 
                    alt="Pediatrician" 
                    className="rounded-circle mb-1" 
                    style={{ width: 94, height: 94 }} 
                  />
                  <div className="text-white mb-0" style={{ fontSize: 16, fontFamily: 'Sansation', fontWeight: '400' }}>
                    Channel a <br /> Pediatrician
                  </div>
                  <div className="text-white mb-3" style={{ fontSize: 9, fontFamily: 'Sansation', fontWeight: '400' }}>
                    Focuses on the health of children from birth to adolescence, including preventive healthcare and chronic disease management.
                  </div>
                  <button className="btn mt-1 w-100" style={{ background: '#112D4E', borderRadius: 10 }}>
                    <span className="text-white" style={{ fontSize: 15, fontFamily: 'Sansation', fontWeight: '400' }}>
                      Book
                    </span>
                  </button>
                </div>
              </div>
            </div>

            {/* Cardiologist Card */}
            <div className="col-12 col-md-12 col-lg-6 mb-5 " style={{width: 197, height: 273,  borderRadius: 8}}>
              <div className="card text-center shadow" style={{ background: '#2A5D9C' }}>
                <div className="card-body">
                  <img 
                    src={Ellipse1} 
                    alt="Cardiologist" 
                    className="rounded-circle mb-1" 
                    style={{ width: 94, height: 94 }} 
                  />
                  <div className="text-white mb-0" style={{ fontSize: 16, fontFamily: 'Sansation', fontWeight: '400' }}>
                    Channel a <br /> Cardiologist
                  </div>
                  <div className="text-white mb-3" style={{ fontSize: 9, fontFamily: 'Sansation', fontWeight: '400' }}>
                    Diagnoses and treats heart conditions such as heart attacks, hypertension, and arrhythmias, and provides preventive care.
                  </div>
                  <button className="btn mt-1 w-100" style={{ background: '#112D4E', borderRadius: 10 }}>
                    <span className="text-white" style={{ fontSize: 15, fontFamily: 'Sansation', fontWeight: '400' }}>
                      Book
                    </span>
                  </button>
                </div>
              </div>
            </div>

            {/* Dermatologist Card */}
            <div className="col-12 col-md-12 col-lg-6 mb-5" style={{width: 197, height: 243,  borderRadius: 8}}>
              <div className="card text-center shadow" style={{ background: '#2A5D9C'}}>
                <div className="card-body">
                  <img 
                    src={Ellipse1} 
                    alt="Dermatologist" 
                    className="rounded-circle mb-1" 
                    style={{ width: 94, height: 94 }} 
                  />
                  <div className="text-white mb-0" style={{ fontSize: 16, fontFamily: 'Sansation', fontWeight: '400' }}>
                    Channel a <br /> Dermatologist
                  </div>
                  <div className="text-white mb-4" style={{ fontSize: 9, fontFamily: 'Sansation', fontWeight: '400' }}>
                    Specializes in the treatment of skin, hair, and nail conditions like acne, eczema, and psoriasis.
                  </div>
                  <button className="btn mt-1 w-100" style={{ background: '#112D4E', borderRadius: 10 }}>
                    <span className="text-white" style={{ fontSize: 15, fontFamily: 'Sansation', fontWeight: '400' }}>
                      Book
                    </span>
                  </button>
                </div>
              </div>
            </div>
            
          </div>
        </div>
      </section>



      <section className='section2 py-5 bg-white'>
        <div className='container'>
          <div className='row text-center mt-3 justify-content-center'>

            {/* General Practitioner Card */}
            <div className="col-12 col-md-12 col-lg-6 mb-5" style={{width: 197, height: 273,  borderRadius: 8}}>
              <div className="card text-center shadow" style={{ background: '#2A5D9C'}}>
                <div className="card-body">
                  <img 
                    src={Ellipse1} 
                    alt="General Practitioner" 
                    className="rounded-circle mb-1" 
                    style={{ width: 94, height: 94 }} 
                  />
                  <div className="text-white mb-0" style={{ fontSize: 16, fontFamily: 'Sansation', fontWeight: '400' }}>
                    Channel a General <br /> Practitioner
                  </div>
                  <div className="text-white mb-1" style={{ fontSize: 9, fontFamily: 'Sansation', fontWeight: '400' }}>
                    Provides comprehensive healthcare, including routine check-ups, preventive care, and treatment for a variety of illnesses and injuries across all ages.
                  </div>
                  <button className="btn mt-1 w-100" style={{ background: '#112D4E', borderRadius: 10 }}>
                    <span className="text-white" style={{ fontSize: 15, fontFamily: 'Sansation', fontWeight: '400' }}>
                      Book
                    </span>
                  </button>
                </div>
              </div>
            </div>

            {/* Pediatrician Card */}
            <div className="col-12 col-md-12 col-lg-6 mb-5" style={{width: 197, height: 273,  borderRadius: 8}}>
              <div className="card text-center shadow" style={{ background: '#2A5D9C' }}>
                <div className="card-body">
                  <img 
                    src={Ellipse1} 
                    alt="Pediatrician" 
                    className="rounded-circle mb-1" 
                    style={{ width: 94, height: 94 }} 
                  />
                  <div className="text-white mb-0" style={{ fontSize: 16, fontFamily: 'Sansation', fontWeight: '400' }}>
                    Channel a <br /> Pediatrician
                  </div>
                  <div className="text-white mb-3" style={{ fontSize: 9, fontFamily: 'Sansation', fontWeight: '400' }}>
                    Focuses on the health of children from birth to adolescence, including preventive healthcare and chronic disease management.
                  </div>
                  <button className="btn mt-1 w-100" style={{ background: '#112D4E', borderRadius: 10 }}>
                    <span className="text-white" style={{ fontSize: 15, fontFamily: 'Sansation', fontWeight: '400' }}>
                      Book
                    </span>
                  </button>
                </div>
              </div>
            </div>

            {/* Cardiologist Card */}
            <div className="col-12 col-md-12 col-lg-6 mb-5  " style={{width: 197, height: 273,  borderRadius: 8}}>
              <div className="card text-center shadow" style={{ background: '#2A5D9C' }}>
                <div className="card-body">
                  <img 
                    src={Ellipse1} 
                    alt="Cardiologist" 
                    className="rounded-circle mb-1" 
                    style={{ width: 94, height: 94 }} 
                  />
                  <div className="text-white mb-0" style={{ fontSize: 16, fontFamily: 'Sansation', fontWeight: '400' }}>
                    Channel a <br /> Cardiologist
                  </div>
                  <div className="text-white mb-3" style={{ fontSize: 9, fontFamily: 'Sansation', fontWeight: '400' }}>
                    Diagnoses and treats heart conditions such as heart attacks, hypertension, and arrhythmias, and provides preventive care.
                  </div>
                  <button className="btn mt-1 w-100" style={{ background: '#112D4E', borderRadius: 10 }}>
                    <span className="text-white" style={{ fontSize: 15, fontFamily: 'Sansation', fontWeight: '400' }}>
                      Book
                    </span>
                  </button>
                </div>
              </div>
            </div>

            {/* Dermatologist Card */}
            <div className="col-12 col-md-12 col-lg-6 mb-5 " style={{width: 197, height: 243,  borderRadius: 8}}>
              <div className="card text-center shadow" style={{ background: '#2A5D9C'}}>
                <div className="card-body">
                  <img 
                    src={Ellipse1} 
                    alt="Dermatologist" 
                    className="rounded-circle mb-1" 
                    style={{ width: 94, height: 94 }} 
                  />
                  <div className="text-white mb-0" style={{ fontSize: 16, fontFamily: 'Sansation', fontWeight: '400' }}>
                    Channel a <br /> Dermatologist
                  </div>
                  <div className="text-white mb-4" style={{ fontSize: 9, fontFamily: 'Sansation', fontWeight: '400' }}>
                    Specializes in the treatment of skin, hair, and nail conditions like acne, eczema, and psoriasis.
                  </div>
                  <button className="btn mt-1 w-100" style={{ background: '#112D4E', borderRadius: 10 }}>
                    <span className="text-white" style={{ fontSize: 15, fontFamily: 'Sansation', fontWeight: '400' }}>
                      Book
                    </span>
                  </button>
                </div>
              </div>
            </div>
            
          </div>

          <div className='row text-center mt-3 justify-content-center'>

            {/* General Practitioner Card */}
            <div className="col-12 col-md-12 col-lg-6 mb-5" style={{width: 197, height: 273,  borderRadius: 8}}>
              <div className="card text-center shadow" style={{ background: '#2A5D9C'}}>
                <div className="card-body">
                  <img 
                    src={Ellipse1} 
                    alt="General Practitioner" 
                    className="rounded-circle mb-1" 
                    style={{ width: 94, height: 94 }} 
                  />
                  <div className="text-white mb-0" style={{ fontSize: 16, fontFamily: 'Sansation', fontWeight: '400' }}>
                    Channel a General <br /> Practitioner
                  </div>
                  <div className="text-white mb-1" style={{ fontSize: 9, fontFamily: 'Sansation', fontWeight: '400' }}>
                    Provides comprehensive healthcare, including routine check-ups, preventive care, and treatment for a variety of illnesses and injuries across all ages.
                  </div>
                  <button className="btn mt-1 w-100" style={{ background: '#112D4E', borderRadius: 10 }}>
                    <span className="text-white" style={{ fontSize: 15, fontFamily: 'Sansation', fontWeight: '400' }}>
                      Book
                    </span>
                  </button>
                </div>
              </div>
            </div>

            {/* Pediatrician Card */}
            <div className="col-12 col-md-12 col-lg-6 mb-5 " style={{width: 197, height: 273,  borderRadius: 8}}>
              <div className="card text-center shadow" style={{ background: '#2A5D9C' }}>
                <div className="card-body">
                  <img 
                    src={Ellipse1} 
                    alt="Pediatrician" 
                    className="rounded-circle mb-1" 
                    style={{ width: 94, height: 94 }} 
                  />
                  <div className="text-white mb-0" style={{ fontSize: 16, fontFamily: 'Sansation', fontWeight: '400' }}>
                    Channel a <br /> Pediatrician
                  </div>
                  <div className="text-white mb-3" style={{ fontSize: 9, fontFamily: 'Sansation', fontWeight: '400' }}>
                    Focuses on the health of children from birth to adolescence, including preventive healthcare and chronic disease management.
                  </div>
                  <button className="btn mt-1 w-100" style={{ background: '#112D4E', borderRadius: 10 }}>
                    <span className="text-white" style={{ fontSize: 15, fontFamily: 'Sansation', fontWeight: '400' }}>
                      Book
                    </span>
                  </button>
                </div>
              </div>
            </div>

            {/* Cardiologist Card */}
            <div className="col-12 col-md-12 col-lg-6 mb-5 " style={{width: 197, height: 273,  borderRadius: 8}}>
              <div className="card text-center shadow" style={{ background: '#2A5D9C' }}>
                <div className="card-body">
                  <img 
                    src={Ellipse1} 
                    alt="Cardiologist" 
                    className="rounded-circle mb-1" 
                    style={{ width: 94, height: 94 }} 
                  />
                  <div className="text-white mb-0" style={{ fontSize: 16, fontFamily: 'Sansation', fontWeight: '400' }}>
                    Channel a <br /> Cardiologist
                  </div>
                  <div className="text-white mb-3" style={{ fontSize: 9, fontFamily: 'Sansation', fontWeight: '400' }}>
                    Diagnoses and treats heart conditions such as heart attacks, hypertension, and arrhythmias, and provides preventive care.
                  </div>
                  <button className="btn mt-1 w-100" style={{ background: '#112D4E', borderRadius: 10 }}>
                    <span className="text-white" style={{ fontSize: 15, fontFamily: 'Sansation', fontWeight: '400' }}>
                      Book
                    </span>
                  </button>
                </div>
              </div>
            </div>

            {/* Dermatologist Card */}
            <div className="col-12 col-md-12 col-lg-6 mb-5" style={{width: 197, height: 243,  borderRadius: 8}}>
              <div className="card text-center shadow" style={{ background: '#2A5D9C'}}>
                <div className="card-body">
                  <img 
                    src={Ellipse1} 
                    alt="Dermatologist" 
                    className="rounded-circle mb-1" 
                    style={{ width: 94, height: 94 }} 
                  />
                  <div className="text-white mb-0" style={{ fontSize: 16, fontFamily: 'Sansation', fontWeight: '400' }}>
                    Channel a <br /> Dermatologist
                  </div>
                  <div className="text-white mb-4" style={{ fontSize: 9, fontFamily: 'Sansation', fontWeight: '400' }}>
                    Specializes in the treatment of skin, hair, and nail conditions like acne, eczema, and psoriasis.
                  </div>
                  <button className="btn mt-1 w-100" style={{ background: '#112D4E', borderRadius: 10 }}>
                    <span className="text-white" style={{ fontSize: 15, fontFamily: 'Sansation', fontWeight: '400' }}>
                      Book
                    </span>
                  </button>
                </div>
              </div>
            </div>
            
          </div>

        </div>
      </section>


      <section className='section3 py-5' style={{ background: '#C8D8F6' }}>
        <div className='container'>
          <div className='row text-center mt-3 justify-content-center'>

            {/* General Practitioner Card */}
            <div className="col-12 col-md-12 col-lg-6 mb-5 " style={{width: 197, height: 273,  borderRadius: 8}}>
              <div className="card text-center shadow" style={{ background: '#2A5D9C'}}>
                <div className="card-body">
                  <img 
                    src={Ellipse1} 
                    alt="General Practitioner" 
                    className="rounded-circle mb-1" 
                    style={{ width: 94, height: 94 }} 
                  />
                  <div className="text-white mb-0" style={{ fontSize: 16, fontFamily: 'Sansation', fontWeight: '400' }}>
                    Channel a General <br /> Practitioner
                  </div>
                  <div className="text-white mb-1" style={{ fontSize: 9, fontFamily: 'Sansation', fontWeight: '400' }}>
                    Provides comprehensive healthcare, including routine check-ups, preventive care, and treatment for a variety of illnesses and injuries across all ages.
                  </div>
                  <button className="btn mt-1 w-100" style={{ background: '#112D4E', borderRadius: 10 }}>
                    <span className="text-white" style={{ fontSize: 15, fontFamily: 'Sansation', fontWeight: '400' }}>
                      Book
                    </span>
                  </button>
                </div>
              </div>
            </div>

            {/* Pediatrician Card */}
            <div className="col-12 col-md-12 col-lg-6 mb-5 " style={{width: 197, height: 273,  borderRadius: 8}}>
              <div className="card text-center shadow" style={{ background: '#2A5D9C' }}>
                <div className="card-body">
                  <img 
                    src={Ellipse1} 
                    alt="Pediatrician" 
                    className="rounded-circle mb-1" 
                    style={{ width: 94, height: 94 }} 
                  />
                  <div className="text-white mb-0" style={{ fontSize: 16, fontFamily: 'Sansation', fontWeight: '400' }}>
                    Channel a <br /> Pediatrician
                  </div>
                  <div className="text-white mb-3" style={{ fontSize: 9, fontFamily: 'Sansation', fontWeight: '400' }}>
                    Focuses on the health of children from birth to adolescence, including preventive healthcare and chronic disease management.
                  </div>
                  <button className="btn mt-1 w-100" style={{ background: '#112D4E', borderRadius: 10 }}>
                    <span className="text-white" style={{ fontSize: 15, fontFamily: 'Sansation', fontWeight: '400' }}>
                      Book
                    </span>
                  </button>
                </div>
              </div>
            </div>

            {/* Cardiologist Card */}
            <div className="col-12 col-md-12 col-lg-6 mb-5 " style={{width: 197, height: 273,  borderRadius: 8}}>
              <div className="card text-center shadow" style={{ background: '#2A5D9C' }}>
                <div className="card-body">
                  <img 
                    src={Ellipse1} 
                    alt="Cardiologist" 
                    className="rounded-circle mb-1" 
                    style={{ width: 94, height: 94 }} 
                  />
                  <div className="text-white mb-0" style={{ fontSize: 16, fontFamily: 'Sansation', fontWeight: '400' }}>
                    Channel a <br /> Cardiologist
                  </div>
                  <div className="text-white mb-3" style={{ fontSize: 9, fontFamily: 'Sansation', fontWeight: '400' }}>
                    Diagnoses and treats heart conditions such as heart attacks, hypertension, and arrhythmias, and provides preventive care.
                  </div>
                  <button className="btn mt-1 w-100" style={{ background: '#112D4E', borderRadius: 10 }}>
                    <span className="text-white" style={{ fontSize: 15, fontFamily: 'Sansation', fontWeight: '400' }}>
                      Book
                    </span>
                  </button>
                </div>
              </div>
            </div>

            {/* Dermatologist Card */}
            <div className="col-12 col-md-12 col-lg-6 mb-5 " style={{width: 197, height: 243,  borderRadius: 8}}>
              <div className="card text-center shadow" style={{ background: '#2A5D9C'}}>
                <div className="card-body">
                  <img 
                    src={Ellipse1} 
                    alt="Dermatologist" 
                    className="rounded-circle mb-1" 
                    style={{ width: 94, height: 94 }} 
                  />
                  <div className="text-white mb-0" style={{ fontSize: 16, fontFamily: 'Sansation', fontWeight: '400' }}>
                    Channel a <br /> Dermatologist
                  </div>
                  <div className="text-white mb-4" style={{ fontSize: 9, fontFamily: 'Sansation', fontWeight: '400' }}>
                    Specializes in the treatment of skin, hair, and nail conditions like acne, eczema, and psoriasis.
                  </div>
                  <button className="btn mt-1 w-100" style={{ background: '#112D4E', borderRadius: 10 }}>
                    <span className="text-white" style={{ fontSize: 15, fontFamily: 'Sansation', fontWeight: '400' }}>
                      Book
                    </span>
                  </button>
                </div>
              </div>
            </div>
            
          </div>
        </div>
      </section>


    
    </div>
    
      
    
  )
}

export default Doctors

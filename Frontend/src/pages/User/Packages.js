import React from 'react'
import Rectangle57 from '../../assets/images/Rectangle 57.svg'

function Packages() {
  return (
    <div>
      <section className='section1 '>
        <div className="img-container">
          <img src={Rectangle57} className="img-fluid w-100" alt="Home" style={{ objectFit: 'cover', height: 'auto', maxHeight: '100vh' }} />
        </div>
      </section>

      
      <section className='section2  ' style={{background: '#C8D8F6'}}>
        <div className='container mb-5 mt-0'>
          
          {/* Header */}
          <div className='row text-center '>
            <div className='col-12 mt-4'>
              <div style={{ color: 'black', fontSize: 22, fontFamily: 'Sansation', fontWeight: '700' }}>
                HealthCare Packages
              </div>
            </div>
          </div>
          
          {/* Adult Packs */}
          <div className='row mt-3 '>
            <div className='col-12'>
              <div style={{ width: 194, height: 42 , backgroundColor: '#112D4E', padding: '10px', borderTopRightRadius: 16, border: '1px solid black', color: 'white', fontSize: 19 }}>
                Adult Packs
              </div>
            </div>
          </div>

          {/* Cards */}
          <div className='row mt-0 mb-3 ' style={{background: '#5E85CD', marginBottom: '1rem !important' }}>

            {/* Essential Health Checkup Card */}
            <div className='col-12 col-md-4 mb-4 mt-4'>
              <div style={{ backgroundColor: '#C8D8F6', borderRadius: 11, border: '2px solid #2A5D9C', padding: '10px' }}>
                <div style={{ backgroundColor: '#504E4E', borderRadius: 9, height: '150px' }}></div>
                <div style={{ color: 'black', fontSize: 19, fontFamily: 'Sansation', fontWeight: '700', marginTop: '10px' }}>
                  Essential Health Checkup
                </div>
                <div style={{ color: 'black', fontSize: 11, fontFamily: 'Sans Serif Collection', fontWeight: '400', textAlign: 'center', marginTop: '10px' }}>
                  Comprehensive basic health screening including blood tests, cholesterol check, blood pressure monitoring, and BMI assessment.
                </div>
                <div className='row mt-3'>
                  <div className='col'>
                    <div style={{ textAlign: 'center', color: 'black', fontSize: 18, fontFamily: 'Sans Serif Collection' }}>Rs. 2500</div>
                  </div>
                  <div className='col'>
                    <button style={{ backgroundColor: '#413C3C', color: 'white', fontSize: 14, padding: '5px 10px', borderRadius: '5px', width: '100%' }}>
                      + Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Advanced Wellness Package */}
            <div className='col-12 col-md-4 mb-4 mt-4'>
              <div style={{ backgroundColor: '#C8D8F6', borderRadius: 11, border: '2px solid #2A5D9C', padding: '10px' }}>
                <div style={{ backgroundColor: '#504E4E', borderRadius: 9, height: '150px' }}></div>
                <div style={{ color: 'black', fontSize: 19, fontFamily: 'Sansation', fontWeight: '700', marginTop: '10px' }}>
                  Advanced Wellness Package
                </div>
                <div style={{ color: 'black', fontSize: 11, fontFamily: 'Sans Serif Collection', fontWeight: '400', textAlign: 'center', marginTop: '10px' }}>
                  Includes all tests from the Essential Health Checkup plus additional screenings like liver function tests, kidney function tests, and ECG.
                </div>
                <div className='row mt-3'>
                  <div className='col'>
                    <div style={{ textAlign: 'center', color: 'black', fontSize: 18, fontFamily: 'Sans Serif Collection' }}>Rs. 3500</div>
                  </div>
                  <div className='col'>
                    <button style={{ backgroundColor: '#413C3C', color: 'white', fontSize: 14, padding: '5px 10px', borderRadius: '5px', width: '100%' }}>
                      + Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Executive Health Package */}
            <div className='col-12 col-md-4 mb-4 mt-4'>
              <div style={{ backgroundColor: '#C8D8F6', borderRadius: 11, border: '2px solid #2A5D9C', padding: '10px' }}>
                <div style={{ backgroundColor: '#504E4E', borderRadius: 9, height: '150px' }}></div>
                <div style={{ color: 'black', fontSize: 19, fontFamily: 'Sansation', fontWeight: '700', marginTop: '10px' }}>
                  Executive Health Package
                </div>
                <div style={{ color: 'black', fontSize: 11, fontFamily: 'Sans Serif Collection', fontWeight: '400', textAlign: 'center', marginTop: '10px' }}>
                  Comprehensive health assessment including advanced blood tests, cardiac stress test, full-body MRI, and consultations with specialists.
                </div>
                <div className='row mt-3'>
                  <div className='col'>
                    <div style={{ textAlign: 'center', color: 'black', fontSize: 18, fontFamily: 'Sans Serif Collection' }}>Rs. 5000</div>
                  </div>
                  <div className='col'>
                    <button style={{ backgroundColor: '#413C3C', color: 'white', fontSize: 14, padding: '5px 10px', borderRadius: '5px', width: '100%' }}>
                      + Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            </div>

          </div>

          <div style={{ background: '#C8D8F6', padding: '20px', borderRadius: '10px', marginTop: '20px' }}/>
      

        </div>
      </section>
  


        {/*--------------------Child Packs-----------*/}

        <section className='section   ' style={{background: 'white'}}>
        <div className='container mb-5 mt-0'>
          
          
          
          {/* Adult Packs */}
          <div className='row mt-3 '>
            <div className='col-12'>
              <div style={{ width: 194, height: 42 , backgroundColor: '#112D4E', padding: '10px', borderTopRightRadius: 16, border: '1px solid black', color: 'white', fontSize: 19 }}>
              Child Packs
              </div>
            </div>
          </div>

          {/* Cards */}
          <div className='row mt-0 mb-3 ' style={{background: '#5E85CD', marginBottom: '1rem !important' }}>

            {/* Essential Health Checkup Card */}
            <div className='col-12 col-md-4 mb-4 mt-4'>
              <div style={{ backgroundColor: '#C8D8F6', borderRadius: 11, border: '2px solid #2A5D9C', padding: '10px' }}>
                <div style={{ backgroundColor: '#504E4E', borderRadius: 9, height: '150px' }}></div>
                <div style={{ color: 'black', fontSize: 19, fontFamily: 'Sansation', fontWeight: '700', marginTop: '10px' }}>
                Basic Pediatric Checkup
                </div>
                <div style={{ color: 'black', fontSize: 11, fontFamily: 'Sans Serif Collection', fontWeight: '400', textAlign: 'center', marginTop: '10px' }}>
                 Routine health checkup including growth and development assessment, vaccination review, and general pediatric examination.
                </div>
                <div className='row mt-3'>
                  <div className='col'>
                    <div style={{ textAlign: 'center', color: 'black', fontSize: 18, fontFamily: 'Sans Serif Collection' }}>Rs. 3000</div>
                  </div>
                  <div className='col'>
                    <button style={{ backgroundColor: '#413C3C', color: 'white', fontSize: 14, padding: '5px 10px', borderRadius: '5px', width: '100%' }}>
                      + Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Comprehensive Child Package */}
            <div className='col-12 col-md-4 mb-4 mt-4'>
              <div style={{ backgroundColor: '#C8D8F6', borderRadius: 11, border: '2px solid #2A5D9C', padding: '10px' }}>
                <div style={{ backgroundColor: '#504E4E', borderRadius: 9, height: '150px' }}></div>
                <div style={{ color: 'black', fontSize: 19, fontFamily: 'Sansation', fontWeight: '700', marginTop: '10px' }}>
                Comprehensive Child Package
                </div>
                <div style={{ color: 'black', fontSize: 11, fontFamily: 'Sans Serif Collection', fontWeight: '400', textAlign: 'center', marginTop: '10px' }}>
                Includes all services from the Basic Pediatric Checkup plus vision and hearing screening, nutritional assessment, and dental check.
                </div>
                <div className='row mt-3'>
                  <div className='col'>
                    <div style={{ textAlign: 'center', color: 'black', fontSize: 18, fontFamily: 'Sans Serif Collection' }}>Rs. 4500</div>
                  </div>
                  <div className='col'>
                    <button style={{ backgroundColor: '#413C3C', color: 'white', fontSize: 14, padding: '5px 10px', borderRadius: '5px', width: '100%' }}>
                      + Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Child Wellness  Package */}
            <div className='col-12 col-md-4 mb-4 mt-4'>
              <div style={{ backgroundColor: '#C8D8F6', borderRadius: 11, border: '2px solid #2A5D9C', padding: '10px' }}>
                <div style={{ backgroundColor: '#504E4E', borderRadius: 9, height: '150px' }}></div>
                <div style={{ color: 'black', fontSize: 19, fontFamily: 'Sansation', fontWeight: '700', marginTop: '10px' }}>
                Child Wellness  Package
                </div>
                <div style={{ color: 'black', fontSize: 11, fontFamily: 'Sans Serif Collection', fontWeight: '400', textAlign: 'center', marginTop: '10px' }}>
                Extensive health and development assessment including psychological evaluation, allergy testing, and specialized consultations.
                </div>
                <div className='row mt-3'>
                  <div className='col'>
                    <div style={{ textAlign: 'center', color: 'black', fontSize: 18, fontFamily: 'Sans Serif Collection' }}>Rs. 7000</div>
                  </div>
                  <div className='col'>
                    <button style={{ backgroundColor: '#413C3C', color: 'white', fontSize: 14, padding: '5px 10px', borderRadius: '5px', width: '100%' }}>
                      + Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            </div>

          </div>

          
      

        </div>
      </section>


      {/*--------------------------Couple Packs-----------*/}


      <section className='section   ' style={{background: 'white'}}>
        <div className='container mb-5 mt-0'>
          
          
          
          {/* Couple Packs */}
          <div className='row mt-3 '>
            <div className='col-12'>
              <div style={{ width: 194, height: 42 , backgroundColor: '#112D4E', padding: '10px', borderTopRightRadius: 16, border: '1px solid black', color: 'white', fontSize: 19 }}>
              Couple Packs
              </div>
            </div>
          </div>

          {/* Cards */}
          <div className='row mt-0 mb-3 ' style={{background: '#5E85CD', marginBottom: '1rem !important' }}>

            {/* Couples Basic Health Check */}
            <div className='col-12 col-md-4 mb-4 mt-4'>
              <div style={{ backgroundColor: '#C8D8F6', borderRadius: 11, border: '2px solid #2A5D9C', padding: '10px' }}>
                <div style={{ backgroundColor: '#504E4E', borderRadius: 9, height: '150px' }}></div>
                <div style={{ color: 'black', fontSize: 19, fontFamily: 'Sansation', fontWeight: '700', marginTop: '10px' }}>
                Couples Basic Health Check
                </div>
                <div style={{ color: 'black', fontSize: 11, fontFamily: 'Sans Serif Collection', fontWeight: '400', textAlign: 'center', marginTop: '10px' }}>
                Basic health screening for both partners including blood tests, cholesterol check, and BMI assessment.
                </div>
                <div className='row mt-3'>
                  <div className='col'>
                    <div style={{ textAlign: 'center', color: 'black', fontSize: 18, fontFamily: 'Sans Serif Collection' }}>Rs. 7000</div>
                  </div>
                  <div className='col'>
                    <button style={{ backgroundColor: '#413C3C', color: 'white', fontSize: 14, padding: '5px 10px', borderRadius: '5px', width: '100%' }}>
                      + Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Couples Comprehensive Package */}
            <div className='col-12 col-md-4 mb-4 mt-4'>
              <div style={{ backgroundColor: '#C8D8F6', borderRadius: 11, border: '2px solid #2A5D9C', padding: '10px' }}>
                <div style={{ backgroundColor: '#504E4E', borderRadius: 9, height: '150px' }}></div>
                <div style={{ color: 'black', fontSize: 19, fontFamily: 'Sansation', fontWeight: '700', marginTop: '10px' }}>
                Couples Comprehensive Package
                </div>
                <div style={{ color: 'black', fontSize: 11, fontFamily: 'Sans Serif Collection', fontWeight: '400', textAlign: 'center', marginTop: '10px' }}>
                In-depth health assessment for both partners including liver and kidney function tests, ECG, and consultations with general practitioners.
                </div>
                <div className='row mt-3'>
                  <div className='col'>
                    <div style={{ textAlign: 'center', color: 'black', fontSize: 18, fontFamily: 'Sans Serif Collection' }}>Rs. 9500</div>
                  </div>
                  <div className='col'>
                    <button style={{ backgroundColor: '#413C3C', color: 'white', fontSize: 14, padding: '5px 10px', borderRadius: '5px', width: '100%' }}>
                      + Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Wellness and Fitness Package*/}
            <div className='col-12 col-md-4 mb-4 mt-4'>
              <div style={{ backgroundColor: '#C8D8F6', borderRadius: 11, border: '2px solid #2A5D9C', padding: '10px' }}>
                <div style={{ backgroundColor: '#504E4E', borderRadius: 9, height: '150px' }}></div>
                <div style={{ color: 'black', fontSize: 19, fontFamily: 'Sansation', fontWeight: '700', marginTop: '10px' }}>
                Wellness and Fitness Package
                </div>
                <div style={{ color: 'black', fontSize: 11, fontFamily: 'Sans Serif Collection', fontWeight: '400', textAlign: 'center', marginTop: '10px' }}>
                Complete wellness package including advanced health screenings, fitness assessments, nutrition counseling, and stress management sessions.
                </div>
                <div className='row mt-3'>
                  <div className='col'>
                    <div style={{ textAlign: 'center', color: 'black', fontSize: 18, fontFamily: 'Sans Serif Collection' }}>Rs. 15500</div>
                  </div>
                  <div className='col'>
                    <button style={{ backgroundColor: '#413C3C', color: 'white', fontSize: 14, padding: '5px 10px', borderRadius: '5px', width: '100%' }}>
                      + Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            </div>

          </div>

          
      

        </div>
      </section>


      





      

      
      
    
    </div>
  )
}

export default Packages

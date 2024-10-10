import React, { useState } from 'react';
import Rectangle60 from '../../assets/images/Rectangle 60.svg';
import Rectangle81 from '../../assets/images/Rectangle 81.svg';

function Pharmacy() {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleSubmit = () => {
    if (selectedFile) {
      alert(`File ${selectedFile.name} uploaded successfully!`);
    } else {
      alert('Please select a file!');
    }
  };

  return (
    <div>
      {/* Section 1 with image and title */}
      <section className="section1">
        <div className="img-container position-relative">
          <img
            src={Rectangle60}
            className="img-fluid w-100"
            alt="Home"
            style={{ objectFit: 'cover', height: 'auto', maxHeight: '100vh' }}
          />
          
          {/* Centered Text */}
          <div className="container position-absolute start-50 top-50 translate-middle text-white text-center">
            <div style={{ color: 'white', fontSize: 34, fontFamily: 'Sansation', fontWeight: '700', wordWrap: 'break-word' }}>
              <div className="col-12 fs-3 fs-md-2 fs-lg-1">Health Sphere Pharmacy</div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2 with prescription form */}
      <section className="section2 " style={{ background: '#C8D8F6', padding: '20px' }}>
        <div className="container mb-5">
          {/* Header */}
          <div className="row text-center">
            <div className="col-12 mt-4">
              <div style={{ color: 'black', fontSize: '22px', fontFamily: 'Sansation', fontWeight: '700' }}>
                Get Your Medicine to Your Door Step
              </div>
              <div style={{ color: 'black', fontSize: '19px', fontFamily: 'Sans Serif Collection', fontWeight: '400' }}>
                Delivery or pickup on your way
              </div>
            </div>
          </div>

          {/* Prescription Upload Section */}
          <div className="row justify-content-center mt-4">
            <div
              style={{
                width: '100%',
                maxWidth: '1061px',
                background: '#2A5D9C',
                borderRadius: '23px',
                border: '1px solid black',
                padding: '20px',
              }}
            >
              {/* Logo and Prescription Upload */}
              <div className="row" style={{marginLeft: -100}} >
                <div className="col text-center mt-5" >
                  <img src={Rectangle81} alt="Health Sphere Logo" style={{maxWidth: 216, maxHeight: '56px' }} />
                </div>
                <div className="col text-center" style={{marginLeft: -100}}>
                  <div style={{ color: 'white', fontSize: '21px', fontFamily: 'Sansation', fontWeight: '700' }}>
                    Enter your prescription Here
                  </div>
                  <div className="mt-3" style={{ background: '#C8D8F6', borderRadius: '11px', padding: '0px' }}>
                    <input
                      type="file"
                      name="prescription"
                      onChange={handleFileChange}
                      style={{
                        width: '100%',
                        padding: '10px',
                        background: '#112D4E',
                        color: 'white',
                        border: 'none',
                        borderRadius: '5px',
                      }}
                    />
                  </div>
                </div>
              </div>

              {/* Delivery or Pickup Section */}
              <div className="row mt-4">
                <div className="col text-center">
                  <div style={{ color: 'white', fontSize: '17px', fontFamily: 'Sansation', fontWeight: '700' }}>
                    Which Type do you like?
                  </div>
                </div>
              </div>

              <div className="row justify-content-center mt-2">
                <div className="col text-center ">
                  <div style={{textAlign: 'center', color: 'white', fontSize: 30, fontFamily: 'Sansation', fontWeight: '700', wordWrap: 'break-word'}}>HealthSphere<br/>Pharmacy</div>
                </div>   
                <div className='col text-center'>
                   
                  <button
                    style={{
                      width: 194, height: 41,
                      background: '#C8D8F6',
                      color: 'black',
                      padding: '10px 20px',
                      borderRadius: '10px',
                      border: 'none',
                      cursor: 'pointer',
                    }}
                    onClick={handleSubmit}
                  >
                    Delivery
                  </button>
                </div>
                <div className="col text-center">
                  <button
                    style={{
                      width: 194, height: 41,
                      background: '#C8D8F6',
                      color: 'black',
                      padding: '10px 20px',
                      borderRadius: '10px',
                      border: 'none',
                      cursor: 'pointer',
                    }}
                    onClick={handleSubmit}
                  >
                    Pick up
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Pharmacy;


import React from 'react';
import heroimg from '../assets/heroimg.svg';

const Section1 = () => {
  return (
    <>
      <div className="bg-hero py-5">
        <div className="container twincarrier py-5">
          <div className="row align-items-center">
            <div className="col-12 col-lg-6">
              <div className="px-3">
                <p className="font-weight-semibold">Hey, I am Ayo</p>
                <h1
  className="display-4"
  style={{
    fontFamily: 'Roboto, sans-serif',
    fontWeight: 900, // This makes the text very bold (900 is typically the heaviest weight)
  }}
>
  I develop dynamic and User-Centered Web Applications
</h1>


                <p className="w-lg-75">
                  My expertise spans both front-end and back-end development, enabling me to build comprehensive solutions that meet diverse client needs.
                </p>

                {/* Regular Bootstrap Button */}
                <button
  className="btn btn-lg btn-sm px-4 py-3"
  style={{
    backgroundColor: '#5E3BEE',
    borderColor: '#5E3BEE',
    color: 'white',
  }}
>
  Get In Touch
</button>

              </div>
            </div>
            <div className="col-12 col-lg-6">
              <img src={heroimg} className="img-fluid" alt="img" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Section1;

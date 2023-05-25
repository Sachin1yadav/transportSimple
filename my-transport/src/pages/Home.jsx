import React, { useEffect } from 'react'
import "../style/Home.css"
import AOS from "aos";
import "aos/dist/aos.css";
const Home = () => {
 
    useEffect(() => {
        AOS.init();
      }, []);
  return (
    <div className='mainHome'> 
       <div className='HomeContent'>
          <div>
            <p className='HomeHeadLine'>Content fleet management Content fleet</p>
          </div>
          <div>
            <p className='HomeTextContent'>TransportSimple has been build with a vision to revolutionies the logistics
                Industry globally. It is the perfect one-stop fleet management solution suitable for 
                all fleet sizes.
            </p>
          </div>
          <div className='HomeButtonDiv'>
            <button className='HomeButtonStarted'>Get Started</button>
            <button className='HomeButtonContect'>Contect us</button>
          </div>

       </div>
       <div data-aos="fade-up"
            data-aos-anchor-placement="center-bottom"
            data-aos-duration="1200"  className='HomeImgDiv'>

        <img src="./homeIMG.PNG" alt="homeImg" />
       </div>





    </div>
  )
}

export default Home
import React, { useEffect } from 'react'
import "../style/InvestorPage.css"
import AOS from "aos";
import "aos/dist/aos.css";
const InvestorPage = () => {
   
    
        useEffect(() => {
            AOS.init();
          }, []);

  return (
    <div>
  <div className='InvestorComponent'> 
       <h3>OUT <span>INVESTOR</span></h3>
     <div className='InvestorDiv'>
        <div>
            <img src="./investorPic1.PNG" alt="" />
        </div>
        <div>
            <img src="./investorPic2.PNG" alt="" />
        </div>
        <div>
            <img src="./investorPic3.PNG" alt="" />
        </div>
        <div>
            <img src="./investorPic4.PNG" alt="" />
        </div>
     </div>

    </div>


<div className='MentorComponent'>
    <h3>OUR  <span>MENTOR</span> </h3>
    <div>
    <div data-aos="fade-down"
            data-aos-anchor-placement="center-bottom"
            data-aos-duration="1200">
        <img src="https://www.transportsimple.com/media/partners/1-logo-par.jpg" alt="" />
    </div>
    <div data-aos="fade-up"
            data-aos-anchor-placement="center-bottom"
            data-aos-duration="1200">
        <img src="https://www.transportsimple.com/media/partners/nsl_logo.png" alt="" />
    </div>
    </div>
   
</div>


    </div>
  
  )
}

export default InvestorPage
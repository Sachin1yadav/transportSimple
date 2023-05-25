import React from 'react'
import "../style/InvestorPage.css"
const InvestorPage = () => {
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
    <div>
        <img src="https://www.transportsimple.com/media/partners/1-logo-par.jpg" alt="" />
    </div>
    <div>
        <img src="https://www.transportsimple.com/media/partners/nsl_logo.png" alt="" />
    </div>
    </div>
   
</div>


    </div>
  
  )
}

export default InvestorPage
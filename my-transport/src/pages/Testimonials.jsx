import React, { useEffect } from "react";
import "../style/Testimonials.css";
import AOS from "aos";
import "aos/dist/aos.css";
const Testimonials = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div>
      <div className="TestimonialDiv">
        <h4>There are 3 steps to get</h4>
        <h4>Worlds most visible platform</h4>

        <div className="MainCardDiv">
          <div data-aos="fade-up"
            data-aos-anchor-placement="center-bottom"
            data-aos-duration="1200" className="Cards">
            <div className="Cricle">
              <p>01</p>
            </div>

            <h1>We will your Tech Partner</h1>
            <p>
              We have 20+ years of industry experience and understand the
              challenges faced by you. Let us manage technology while you
              expland your business!
            </p>
            <img src="./cord1.PNG" alt="card1" />
          </div>
          <div className="Card2" data-aos="fade-up"
            data-aos-anchor-placement="center-bottom"
            data-aos-duration="1200">
            <div className="Cricle2">
              <p>02</p>
            </div>
            <h1>Request and Free Trial</h1>
            <p>
              The wait is over, try our software and see the value. No Credit
              Card, No T&C. Start your 12-day trial.
            </p>
            <img src="./cord2.PNG" alt="card1" />
          </div>
          <div className="Cards" data-aos="fade-up"
            data-aos-anchor-placement="center-bottom"
            data-aos-duration="1200">
            <div className="Cricle">
              {" "}
              <p>03</p>
            </div>
            <h1>24x7 Team support</h1>
            <p>
              We provide self-help tutorial videos, user guides and 24*7 chat
              support to resolve your queries within minutes
            </p>
            <img src="./cord3.PNG" alt="card1" />
          </div>
        </div>
      </div>

      <div className="BookDemo">
        <h3>Be more efficient and profitable with TransportSimple</h3>
        <p>
          We offer solutions to streamline opreations and accounts, resulting in
          enhanced productivity increased profits, scalability and ease in daily
          operations. We've been building a solution to revolutionies the
          logisticts indutstry globally
        </p>
        <button>Bool A Demo</button>
      </div>

      <div className="BenefitsMainDiv">
        <h3>
          BENEFITS OF WORKING WITH <span>US</span>{" "}
        </h3>
        <div className="BenefitsDiv">
          <div data-aos="fade-up"
            data-aos-anchor-placement="center-bottom"
            data-aos-duration="1200">
            <img src="./benifitsPic1.PNG" alt="" />
            <p>Industry Experts</p>
          </div>
          <div data-aos="fade-down"
            data-aos-anchor-placement="center-bottom"
            data-aos-duration="1200">
            <img src="./benifitsPic2.PNG" alt="" />
            <p>Top notch Developers</p>
          </div>
          <div data-aos="fade-up"
            data-aos-anchor-placement="center-bottom"
            data-aos-duration="1200">
            <img src="./benifitsPic3.PNG" alt="" />
            <p>Full customer support team</p>
          </div>
          <div data-aos="fade-down"
            data-aos-anchor-placement="center-bottom"
            data-aos-duration="1200">
            <img src="./benifitsPic4.PNG" alt="" />
            <p>Trustworthy and reliable</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;

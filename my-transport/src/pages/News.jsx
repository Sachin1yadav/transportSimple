import React, { useEffect } from "react";
import "../style/News.css";
import AOS from "aos";
import "aos/dist/aos.css";
const News = () => {
  
 
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className="NewsMainDiv">
      <h3>
        ACHIEVEMENTS & <span>NEWS</span>
      </h3>
      <div className="NewsMainDivPost">
        <div className="NewsMainDiv2">
          <img
          data-aos="fade-down"
          data-aos-anchor-placement="center-bottom"
          data-aos-duration="1500"
            src="https://www.chalgenius.com/wp-content/uploads/2021/03/kxk-1024x466.jpg"
            alt=""
          />
          <h2>Request and Free Trails</h2>
          <p>
            You can noew mange your fleet straight from your fingertips! Access
            transportSimple form anywhere and anytime, with an easy-to-use
          </p>
        </div>
        <div className="NewsMainDiv3">
          <div data-aos="fade-up"
            data-aos-anchor-placement="center-bottom"
            data-aos-duration="1200">
            <img
              src="https://www.chalgenius.com/wp-content/uploads/2021/03/kxk-1024x466.jpg"
              alt=""
            />
          </div>
          <div data-aos="fade-up"
            data-aos-anchor-placement="center-bottom"
            data-aos-duration="1500">
            <img
              src="https://www.chalgenius.com/wp-content/uploads/2021/03/kxk-1024x466.jpg"
              alt=""
            />
          </div>
          <div data-aos="fade-up"
            data-aos-anchor-placement="center-bottom"
            data-aos-duration="1700">
            <img
              src="https://www.chalgenius.com/wp-content/uploads/2021/03/kxk-1024x466.jpg"
              alt=""
            />
          </div>
           
        </div>
      </div>

      <div>
      <div className="NewsLastDiv">
          <div>
            <img
              src="https://www.chalgenius.com/wp-content/uploads/2021/03/kxk-1024x466.jpg"
              alt=""
            />
          </div>
          <div>
            <img
              src="https://www.chalgenius.com/wp-content/uploads/2021/03/kxk-1024x466.jpg"
              alt=""
            />
          </div>
          <div>
            <img
              src="https://www.chalgenius.com/wp-content/uploads/2021/03/kxk-1024x466.jpg"
              alt=""
            />
          </div>
          <div>
            <img
              src="https://www.chalgenius.com/wp-content/uploads/2021/03/kxk-1024x466.jpg"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default News;

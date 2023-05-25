import React from "react";
import "../style/Vehicles.css";
import { FiTruck } from 'react-icons/fi';
const Vehicles = () => {
  return (
    <div className="vahiclesMainDiv">
      <div className="vahiclesContentDiv">
        <div>
          <h4>
            KNOW ABOUT <span>TRANSPORTSIMPLE</span>
          </h4>
          <h1>At out compnay, we specialize in providing comprehensive</h1>
        </div>
        <p>
          Lorem ipsum dolor sit amet consectetur adipLorem ipsum dolor sit amet
          consectetur adipLorem ipsum dolor sit amet consectetur adipisicing
          elit. Ipsum, non delectus aliquid suscipit dolorem pariatur explicabo
          ex nesciunt earum, facere omnis quidem vitae reprehenderit incidunt
          esse. Cupiditate placeat nobis animi doloribus voluptate numquam quam?
        </p>
      </div>
      <div className="parent">
      {/* <div className="child"></div>
        <div>
          <img
            src="https://images.unsplash.com/photo-1586191552066-d52dd1e3af86?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHRydWNrfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"
            alt=""
          />
        </div> */}
          
        <div className="child"></div>
        <div className="imageParent">
        <img
          src="https://images.unsplash.com/photo-1586191552066-d52dd1e3af86?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHRydWNrfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"
          alt=""
          className="image"
        />
        </div>
       
      </div>


      <div className="VahiclesNumbers">
        <div>
        <FiTruck style={{color:"blue",fontSize:"20px"}}/>
            <h3>135400</h3>
            <p>Vehicles</p>
        </div>
        <div>
        <FiTruck style={{color:"blue",fontSize:"20px"}}/>
            <h3>135400</h3>
            <p>Vehicles</p>
        </div>
        <div>
        <FiTruck style={{color:"blue",fontSize:"20px"}}/>
            <h3>135400</h3>
            <p>Vehicles</p>
        </div>
        <div>
        <FiTruck style={{color:"blue",fontSize:"20px"}}/>
            <h3>135400</h3>
            <p>Vehicles</p>
        </div>
      </div>
    </div>
  );
};

export default Vehicles;

import { useEffect, useState } from "react";
import "../style/hero.css";
import drAnupriya from "../assets/banner/Dr-Anupriya.jpg";


const Hero = () => {
  const [current, setCurrent] = useState(0);



  return (
    <section className="hero">
      <div className="container hero-grid">

      
        <div className="hero-content">
          <h1>
            Specialized Dental Care for <br />
            Women, Children & Families
          </h1>

          <p>
            Experience compassionate, expert-led dental services tailored to
            your needs — all in a modern and welcoming environment.
          </p>

          <div className="hero-actions">
            <button className="btn btn-primary">Fix an Appointment</button>
            <button className="btn btn-outline">Emergency Dental Support</button>
          </div>
        </div>

        
        <div className="hero-images">

          <img
            src={drAnupriya}
            alt="Dr Anupriya"
            className="hero-doctor"
          />
        </div>

      </div>
    </section>
  );
};

export default Hero;

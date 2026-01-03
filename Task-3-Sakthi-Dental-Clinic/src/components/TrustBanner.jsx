import { useEffect, useState } from "react";
import "../style/trustBanner.css";

import banner1 from "../assets/banner/Banner-Img-1.jpg";
import banner2 from "../assets/banner/Banner-Img-2.jpg";
import banner3 from "../assets/banner/Banner-Img-3.jpg";

const banners = [banner1, banner2, banner3];

const TrustBanner = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % banners.length);
    }, 4500);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="trust-banner">
      <img src={banners[current]} alt="Clinic Banner" />

      <div className="trust-content">
        <h3>You are always in safe hands.</h3>
        <p>We are ready to help, anytime.</p>
      </div>
    </section>
  );
};

export default TrustBanner;

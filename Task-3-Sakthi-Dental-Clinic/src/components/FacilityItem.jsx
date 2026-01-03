import "../style/facilities.css";
import city from "../assets/icons/city.png";
import doctor from "../assets/icons/doctors.png";
import parking from "../assets/icons/parking.png";
import pickup from "../assets/icons/pickup.png";
import wheel from "../assets/icons/wheel-chair.png";

const Facilities = () => {
  return (
    <section className="facilities">
      <div className="container">
        <h2 className="section-title">Clinic Facilities</h2>

        <div className="facilities-list">
          <div className="facility-item"> <img src={city} alt="" />✔ Convenient central location</div>
          <div className="facility-item"> <img src={parking} alt="" />✔ Hassle-free parking</div>
          <div className="facility-item"> <img src={doctor} alt="" />✔ Doctors available daily (9 AM – 9 PM)</div>
          <div className="facility-item"> <img src={pickup} alt="" />✔ Pickup & drop-off support</div>
          <div className="facility-item"> <img src={wheel} alt="" />✔ Wheelchair access</div>
        </div>
      </div>
    </section>
  );
};

export default Facilities;

import "../style/whyChooseUs.css";


const WhyChooseUs = () => {
  return (
    <section className="why-choose">
      <div className="container">
        <h2 className="section-title">Why Choose Sakthi Dental Clinic?</h2>

        <div className="why-grid">
          <div className="why-card">
            <h4>All-in-One Care</h4>
            <p>
              From general dentistry to specialized treatments, everything
              under one roof.
            </p>
          </div>

          <div className="why-card">
            <h4>Experienced Doctors</h4>
            <p>
              Our dentists are professionally trained and committed to
              personalized patient care.
            </p>
          </div>

          <div className="why-card">
            <h4>Patient-Centric Approach</h4>
            <p>
              We prioritize comfort, safety, and transparency in every
              treatment we offer.
            </p>
          </div>

          <div className="why-card">
            <h4>Technology-Driven Services</h4>
            <p>
              Modern tools and equipment ensure precision and safety.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;

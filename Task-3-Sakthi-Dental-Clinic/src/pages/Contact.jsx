import "../style/contact.css";

const Contact = () => {
  return (
    <>
   
      <section className="section-bg">
        <div className="container">
          <h1 className="page-title">Contact Us</h1>
          <p className="page-subtitle">
            We would love to hear from you
          </p>
        </div>
      </section>

      
      <section className="contact-section">
        <div className="container contact-grid">

          
          <div className="contact-form">
            <h2>Send us a message</h2>

            <form>
              <input type="text" placeholder="Your Name" required />
              <input type="email" placeholder="Email Address" required />
              <input type="tel" placeholder="Phone Number" required />
              <textarea placeholder="Your Message (optional)" rows="4"></textarea>

              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </form>
          </div>

          {/* Info */}
          <div className="contact-info">
            <h2>Reach Us</h2>

            <p><strong>📍 Address:</strong><br />
              B2/8, SBM Layout, Anthivadi,<br />
              Hosur, Tamil Nadu 635109
            </p>

            <p><strong>📧 Email:</strong><br />
              info@sakthidentalclinic.in
            </p>

            <p><strong>📞 Phone:</strong><br />
              +91 9862890897<br />
              +91 9363298118
            </p>

            <p><strong>⏰ Timings:</strong><br />
              Sunday to Saturday<br />
              9:00 AM – 8:00 PM
            </p>
          </div>

        </div>
      </section>
    </>
  );
};

export default Contact;

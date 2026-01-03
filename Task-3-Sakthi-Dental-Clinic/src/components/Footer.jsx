import "../style/footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container footer-grid">

    
        <div className="footer-col">
          <h3>Sakthi Dental Clinic</h3>
          <p>
            Specialized dental care for women, children & families.
            Providing compassionate and expert-led dental services.
          </p>
        </div>

   
        <div className="footer-col">
          <h4>Quick Links</h4>
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Treatments</li>
            <li>FAQs</li>
            <li>Contact</li>
            <li>Privacy Policy</li>
          </ul>
        </div>


        <div className="footer-col">
          <h4>Key Treatments</h4>
          <ul>
            <li>Tooth Extraction</li>
            <li>Dental Implants</li>
            <li>Braces & Aligners</li>
            <li>Teeth Cleaning</li>
            <li>Root Canal</li>
          </ul>
        </div>

     
        <div className="footer-col">
          <h4>Contact</h4>
          <p>
            B2/8, SBM Layout, Anthivadi,<br />
            Hosur, Tamil Nadu 635109
          </p>
          <p>
            📞 +91 9862890897 <br />
            📞 +91 9363298118
          </p>
          <p>📧 info@sakthidentalclinic.in</p>
        </div>

      </div>

      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} Sakthi Dental Clinic. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;

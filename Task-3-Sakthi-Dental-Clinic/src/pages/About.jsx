import "../style/about.css";

const About = () => {
  return (
    <section className="section-bg">
      <div className="container">

       
        <div className="container about-intro">
          <h1>Get to Know Dr. Anupriya</h1>
          <h3>Your Trusted Partner in Dental Care</h3>

          <p className="about-subtitle">
            Bringing over 20 years of expertise, Dr. Anupriya stands as a leading
            figure in modern dentistry at Hosur. A proud alumna of the renowned
            Government Dental College, she began her professional journey after
            graduating in 2000.
          </p>

          <p>
            In 2004, Dr. Anupriya established Sakthi Dental Clinic in Hosur with a
            clear vision — to make high-quality dental care accessible to all.
            Her dedication extends beyond private practice through her long
            service as a dental consultant at Chandara Hospital.
          </p>

          <p>
            At Sakthi Dental Clinic, we believe that a healthy smile is a gateway
            to confidence and wellbeing. From routine check-ups to specialized
            treatments, every patient receives personalized care.
          </p>
        </div>

     
        <div className="vision-mission">
          <div className="vm-card">
            <h2>Our Mission</h2>
            <p>
              To deliver personalized, compassionate, and advanced dental
              services in a welcoming environment, ensuring comfort and
              confidence for every patient.
            </p>
          </div>

          <div className="vm-card">
            <h2>Our Vision</h2>
            <p>
              To be a leading force in modern dentistry, known for innovation,
              excellence in patient care, and positive community impact.
            </p>
          </div>
        </div>

        {/* Doctors Team */}
        <div className="doctors-team">
          <h2>Our Team of Doctors</h2>

          <ul>
            <li>Dr. Anupriya (Founder)</li>
            <li>Dr. Ananya Iyer (Prosthodontist)</li>
            <li>Dr. Meera Subramanian (Endodontist)</li>
            <li>Dr. Arvind Kumar (Dental Surgeon)</li>
            <li>Dr. Sneha N (Orthodontist)</li>
            <li>Dr. Srinivas Rohit Ramanujam (Implantologist)</li>
            <li>Dr. Balu (Laser Surgeon)</li>
            <li>Dr. Vikram Raj Kishore (Aligners Partner)</li>
            <li>Dr. Ajay Jumar (Oral & Maxillofacial Surgeon)</li>
          </ul>
        </div>

      </div>
    </section>
  );
};

export default About;

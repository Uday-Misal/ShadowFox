import "../style/treatmentsPage.css";
import { allTreatments } from "../data/allTreatments.js";

const Treatments = () => {
  return (
    <section className="section-bg">
      <div className="container">
        <h1 className="page-title">Our Treatments</h1>

        {allTreatments.map((item, index) => (
          <div className="treatment-row" key={index}>
            <img src={item.image} alt={item.title} />
            <div className="treatment-content">
              <h2>{item.title}</h2>
              <p className="page-subtitle">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Treatments;

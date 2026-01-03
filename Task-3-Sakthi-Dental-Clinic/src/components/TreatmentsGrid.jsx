import "../style/treatmentsGrid.css";
import { treatments } from "../data/treatments";

const TreatmentsGrid = () => {
  return (
    <section className="treatments">
      <div className="container">
        <h2 className="section-title">Explore Our Services</h2>

        <div className="treatments-grid">
          {treatments.map((item, index) => (
            <div className="treatment-card" key={index}>
              <h4>{item.title}</h4>
              <p>{item.desc}</p>
            </div>
          ))}
        </div>

        <div className="treatments-cta">
          <button className="btn btn-primary">
            View Full List of Treatments
          </button>
        </div>
      </div>
    </section>
  );
};

export default TreatmentsGrid;

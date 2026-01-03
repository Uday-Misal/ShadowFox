import Hero from "../components/Hero";
import TrustBanner from "../components/TrustBanner";
import WhyChooseUs from "../components/WhyChooseUs"; 
import TreatmentsGrid from "../components/TreatmentsGrid"; 
import Testimonials from "../components/TestimonialCard";
import Facilities from "../components/FacilityItem";


const Home = () => {
  return (
    <>
      <Hero />
      <TrustBanner />
      <WhyChooseUs />
      <TreatmentsGrid />
      <Testimonials />  
      <Facilities />
    </>
  );
};

export default Home;

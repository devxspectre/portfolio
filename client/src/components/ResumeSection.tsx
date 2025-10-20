import ContactInfo from './ContactInfo';
import ProfessionalSummary from './ProfessionalSummary';
import Experience from './Experience';
import Education from './Education';
import Skills from './Skills';
import Projects from './Projects';

const ResumeSection = () => {
  return (
    <section id="resume" className="bg-white rounded-lg shadow-md p-8">
      <ContactInfo />
      <ProfessionalSummary />
      <Experience />
      <Education />
      <Skills />
      <Projects />
    </section>
  );
};

export default ResumeSection;
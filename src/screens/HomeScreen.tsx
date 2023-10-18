import Banner from "../components/Banner";
import Specilize from "../components/Specilize";
import Projects from "../components/Projects";
import Skills from "../components/Skills";
import About from "../components/About";
import Contact from "../components/Contact";
import Services from "../ServicesData";

function HomeScreen() {
  return (
    <>
      {" "}
      <Banner abouts={Services.aboutMe} />
      <Specilize services={Services.services} />
      <Projects projects={Services.projects} />
      <Skills
        skills={Services.skills}
        educations={Services.education}
        certifications={Services.certificates}
      />
      <About abouts={Services.aboutMe} />
      <Contact contact={Services.website} />
    </>
  );
}
export default HomeScreen;

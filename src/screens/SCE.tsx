import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "../css/Screens.scss";
import Services from "../ServicesData";
import Skills from "./Skills";
import Education from "./Education";
import Certificates from "./Certificates";
import { useState } from "react";

const SCE = () => {
  const [tabIndex, setTabIndex] = useState(0);

  return (
    <>
      <Tabs selectedIndex={tabIndex} onSelect={setTabIndex}>
        <TabList>
          <Tab>Skills</Tab>
          <Tab>Educations</Tab>
          <Tab>Certifications</Tab>
        </TabList>

        <TabPanel>
          <Skills skills={Services.skills} />
        </TabPanel>
        <TabPanel>
          <Education educations={Services.education} />
        </TabPanel>
        <TabPanel>
          <Certificates certifications={Services.certificates} />
        </TabPanel>
      </Tabs>
    </>
  );
};

export default SCE;

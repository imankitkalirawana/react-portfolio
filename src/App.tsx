import Header from "./components/Header";

import HomeScreen from "./screens/HomeScreen";
import Projects from "./screens/Projects";
import Skills from "./screens/Skills";
import Education from "./screens/Education";
import Services from "./ServicesData";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
      <>
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<HomeScreen />} />
            <Route
              path="/projects"
              element={<Projects projects={Services.projects} />}
            />
            <Route
              path="/skills"
              element={<Skills certifications={Services.certificates} />}
            />
            <Route path="/education" element={<Education />} />
          </Routes>
        </main>
      </>
    </Router>
  );
}

export default App;

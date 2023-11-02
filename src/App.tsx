import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";

import HomeScreen from "./screens/HomeScreen";
import Projects from "./screens/Projects";
import Services from "./ServicesData";
import Skills from "./screens/Skills";
import Certificates from "./screens/Certificates";
import SCE from "./screens/SCE";
import Education from "./screens/Education";

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
            <Route path="/sce" element={<SCE />}></Route>
          </Routes>
        </main>
      </>
    </Router>
  );
}

export default App;

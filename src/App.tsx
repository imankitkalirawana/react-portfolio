import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import HomeScreen from "./screens/HomeScreen";
import Projects from "./screens/Projects";
import Services from "./ServicesData";
import SCE from "./screens/SCE";
import Links from "./Links";
import ScrollTop from "./components/overlays/ScrollTop";
function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Header />
              <HomeScreen />
              <ScrollTop />
            </>
          }
        />
        <Route
          path="/projects"
          element={
            <>
              <Header />
              <Projects projects={Services.projects} />
            </>
          }
        />
        <Route
          path="/sce"
          element={
            <>
              <Header />
              <SCE />
            </>
          }
        />
        <Route
          path="/links"
          element={
            <>
              <Header />
              <Links links={Services.links} />
            </>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;

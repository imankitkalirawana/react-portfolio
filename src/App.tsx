import Header from "./components/Header";

import AppScreen from "./screens/AppScreen";
import HomeScreen from "./screens/HomeScreen";

import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";

function App() {
  return (
    <Router>
      <>
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<HomeScreen />} />
            <Route path="/app" element={<AppScreen />} />
          </Routes>
        </main>
      </>
    </Router>
  );
}

export default App;

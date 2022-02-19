import "./App.css";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import LandingPage from "./screens/LandingPage/LandingPage";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import MyNotes from "./screens/MyNotes/MyNotes";

const App = () => (
  <Router>
    <Header />
    <main className="App">
      <Routes>
        <Route path="/" exact element={<LandingPage />} />
        <Route path="/mynotes" exact element={<MyNotes />} />
      </Routes>
    </main>
    <Footer />
  </Router>
);

export default App;

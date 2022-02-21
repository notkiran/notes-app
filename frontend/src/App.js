import "./App.css";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import LandingPage from "./screens/LandingPage/LandingPage";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import MyNotes from "./screens/MyNotes/MyNotes";
import LoginScreen from "./screens/LoginScreen/LoginScreen";
import RegisterScreen from "./screens/RegisterScreen/RegisterScreen";
import CreateNote from "./screens/CreateNote/CreateNote";
import SingleNote from "./screens/SingleNote/SingleNote";
import { useState } from "react";
import ProfileScreen from "./screens/ProfileScreen/ProfileScreen";

const App = () => {
  const [search, setSearch] = useState("");
  return (
    <Router>
      <Header setSearch={setSearch} />
      <main className="App">
        <Routes>
          <Route path="/" exact element={<LandingPage />} />
          <Route path="/login" exact element={<LoginScreen />} />
          <Route path="/profile" exact element={<ProfileScreen />} />
          <Route path="/register" exact element={<RegisterScreen />} />
          <Route path="/create-note" exact element={<CreateNote />} />
          <Route path="/note/:id" exact element={<SingleNote />} />
          <Route path="/mynotes" exact element={<MyNotes search={search} />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
};

export default App;

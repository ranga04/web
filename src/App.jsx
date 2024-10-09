import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import PageWithAnimation from "./components/PageWithAnimation";
import CustomCursor from "./components/CustomCursor"; // Import CustomCursor
import MyJourney from "./components/MyJourney";

const App = () => {
  return (
    <Router>
      <div className="font-sans relative">
        <CustomCursor /> {/* Add CustomCursor here */}
        <Header />
        <main className="pt-16">
          <Routes>
            <Route
              path="/"
              element={
                <PageWithAnimation
                  text="Hello World!"
                  Component={() => (
                    <Hero
                      name="Sri Ranga Sai Tulasi"
                      title="Robotics & Tech"
                      location="Sheffield, UK"
                    />
                  )}
                />
              }
            />
            <Route
              path="/about"
              element={<PageWithAnimation text="About Me" Component={About} />}
            />
            <Route
              path="/myJourney"
              element={
                <PageWithAnimation text="Journey" Component={MyJourney} />
              }
            />
            <Route
              path="/projects"
              element={
                <PageWithAnimation text="Projects" Component={Projects} />
              }
            />
            <Route
              path="/skills"
              element={<PageWithAnimation text="Skills" Component={Skills} />}
            />
            <Route
              path="/contact"
              element={<PageWithAnimation text="Contact" Component={Contact} />}
            />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;

import "./App.css";
import About from "./components/About";
import Contact from "./components/Contact";
import Content from "./components/Content";
import Experience from "./components/Experience";
import Footer from "./components/Footer";
import Hirebtn from "./components/Hirebtn";
import Navbar from "./components/Navbar";
import Skills from "./components/Skills";

function App() {
  return (
    <div>
      <div className="fixed right-[60px] bottom-[60px] hire z-50">
        <Hirebtn name="Hire me" link="https://www.linkedin.com/in/aakash25/" />
      </div>

      <Navbar />
      <Content />
      <About />
      <Experience />
      <Skills />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;

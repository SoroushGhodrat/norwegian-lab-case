import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./shared/components/Navbar/Navbar";
import Contact from "./Pages/Contact/Contact";
import About from "./Pages/About/About";
import Policy from "./Pages/Policy/Policy";
import Home from "./Pages/Landing/Landing";
import "./App.css";
import Terms from "./Pages/Terms/Terms";
import Order from "./Pages/Order/Order";
import Footer from "./shared/components/Footer/Footer";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/policy" element={<Policy />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/order" element={<Order />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;

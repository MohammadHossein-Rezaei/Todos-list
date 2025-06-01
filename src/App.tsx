import { HashRouter as Router, Routes, Route, NavLink } from "react-router-dom";
import Home from "./pages/home/Home";
import { About } from "./pages/about/About";
import { NotFound } from "./pages/notFound/NotFound";
import { motion } from "framer-motion";

const App = () => {
  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-br from-[#f4f0ea] to-[#e8e1d9]">
        <motion.nav
          initial={{ y: -20 }}
          animate={{ y: 0 }}
          className="p-5 shadow-sm bg-white/80 backdrop-blur-sm"
        >
          <div className="max-w-6xl mx-auto flex justify-between items-center">
            <h1 className="text-2xl font-bold text-[#1d7874]">Task</h1>
            <div className="flex gap-8">
              <NavLink to="/">Home</NavLink>
              <NavLink to="/about">About</NavLink>
            </div>
          </div>
        </motion.nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </Router>
  );
};
export default App;

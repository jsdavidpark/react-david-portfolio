import Header from "./components/Header.jsx";
import AnimRoutes from "./components/AnimRoutes.jsx";
import { BrowserRouter as Router } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

const App = () => {
  return (
    <>
      <Router>
        <Header />
        <AnimRoutes />
      </Router>
    </>
  );
};

export default App;

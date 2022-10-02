import { ThemeProvider } from "./context/ThemeContext";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./components/Home";
import CaloriesProvider from "./context/caloriesContext/CaloriesProvider";

const App = () => {
  return (
    <ThemeProvider>
      <CaloriesProvider>
        <Navbar />
        <Home />
        <Footer />
      </CaloriesProvider>
    </ThemeProvider>
  );
};

export default App;

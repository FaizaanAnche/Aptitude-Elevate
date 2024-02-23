import HomePage from "./pages/HomePage";
import Navbar from "./components/Navbar";
import { Route, Routes } from "react-router-dom";
import MockTest from "./pages/MockTest";
import DriveInfo from "./pages/DriveInfo";

function App() {
  return (
    <div>
      <Navbar />
      <div>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/MockTest" element={<MockTest />} />
          <Route path="/DriveInfo" element={<DriveInfo />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;

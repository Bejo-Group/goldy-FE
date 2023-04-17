import { Routes, Route } from "react-router-dom";
import Homepage from "./pages/homepage";
import Tipspage from "./pages/tipspage";

import "./index.css"

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/tips" element={<Tipspage/>}></Route>
      </Routes>

    </>
  );
};

export default App;
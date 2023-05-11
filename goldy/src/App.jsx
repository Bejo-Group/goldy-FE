import { Routes, Route } from "react-router-dom";
import Homepage from "./pages/homepage";
import Tipspage from "./pages/tipspage";
import Rekomendasipage from "./pages/rekomendasipage";
import Prediksipage from "./pages/prediksipage"

import "./index.css"

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/tips" element={<Tipspage/>}></Route>
        <Route path="/rekomendasi" element={<Rekomendasipage/>}></Route>
        <Route path="/prediksi" element={<Prediksipage/>}></Route>
      </Routes>

    </>
  );
};

export default App;
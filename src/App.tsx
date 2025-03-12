import { HashRouter as Router, Route, Routes } from "react-router-dom";
import { Inspection } from "./pages/Inspection";

import { CarDetail } from "./pages/CarDetail";

function App() {
  return (
    <Router>
      <Routes>
        {/* 정적 라우팅 */}
        <Route path={"/"} element={<Inspection />} />

        {/* 동적 라우팅 */}
        <Route path={"/detail/:id"} element={<CarDetail />} />
      </Routes>
    </Router>
  );
}

export default App;

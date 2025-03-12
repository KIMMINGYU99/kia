import { Route, Routes } from "react-router";
import { Inspection } from "./pages/Inspection";

import { CarDetail } from "./pages/CarDetail";

function App() {
  return (
    <Routes>
      {/* 정적 라우팅 */}
      <Route path={"/"} element={<Inspection />} />

      {/* 동적 라우팅 */}
      <Route path={"/detail/:id"} element={<CarDetail />} />
    </Routes>
  );
}

export default App;

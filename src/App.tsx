import { Route, Routes } from "react-router";
import { Inspection } from "./pages/Inspection";
import { Kia } from "./pages/Kia";
import { About } from "./pages/About";
import { CarDetail } from "./pages/CarDetail";

function App() {
  return (
    <Routes>
      {/* 정적 라우팅 */}
      <Route path={"/"} element={<Inspection />} />
      <Route path={"/kia"} element={<Kia />} />
      <Route path={"/about"} element={<About />} />
      {/* 동적 라우팅 */}
      <Route path={"/detail/:id"} element={<CarDetail />} />
    </Routes>
  );
}

export default App;

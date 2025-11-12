import { Route, Routes } from "react-router-dom";
import Header from "./componets/Header";
import EditAvatar from "./pages/EditAvatar";
import ReactMemo from "./pages/ReactMemo";
import UseRef from "./pages/UseRef";

function App() {
  return (
    <div>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<EditAvatar />} />
          <Route path="useMemo" element={<ReactMemo />} />
          <Route path="useRef" element={<UseRef />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;

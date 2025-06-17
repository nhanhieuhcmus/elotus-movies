import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import Header from "./components/Header/Header";
import Detail from "./components/Detail/Detail";
import Footer from "./components/Footer/Footer";
import useOnlineStatus from "./hooks/useOnlineStatus";
import OfflineOverlay from "./components/OfflineOverlay/OfflineOverlay";
import "./App.scss";

function App() {
  const isOnline = useOnlineStatus();

  return (
    <>
      {!isOnline && <OfflineOverlay />}
      <BrowserRouter>
        <div className="app-wrapper">
          <Header />

          <main className="main-content">
            <Routes>
              <Route path="/" element={<Navigate to="/now-playing" />} />
              <Route path="/now-playing" element={<Home />} />
              <Route path="/top-rated" element={<Home />} />
              <Route path="/movie/:id" element={<Detail />} />
            </Routes>
          </main>

          <Footer />
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;

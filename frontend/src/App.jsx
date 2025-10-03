import { BrowserRouter as Router, Routes, Route } from "react-router";
import SearchPage from "./pages/SearchPage";
import SavedPage from "./pages/SavedPage";
import Navbar from "./components/Navbar";

export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-100 text-gray-800">
        <Navbar />
        <div className="p-6">
          <Routes>
            <Route path="/" element={<SearchPage />} />
            <Route path="/saved" element={<SavedPage />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

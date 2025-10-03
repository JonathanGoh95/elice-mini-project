import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import SearchPage from "./pages/SearchPage";
import SavedPage from "./pages/SavedPage";

export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50 text-gray-800">
        <nav className="flex items-center space-x-4 p-4 bg-white shadow">
          <Link to="/" className="text-blue-600 hover:underline">
            Search
          </Link>
          <Link to="/saved" className="text-blue-600 hover:underline">
            Saved
          </Link>
        </nav>
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

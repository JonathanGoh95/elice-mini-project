import { Link } from "react-router";

export default function Navbar() {
  return (
    <nav className="flex justify-center space-x-4 p-4 bg-gray-400 w-full text-xl">
      <Link to="/" className="text-blue-600 hover:underline">
        Search
      </Link>
      <Link to="/saved" className="text-blue-600 hover:underline">
        Saved
      </Link>
    </nav>
  );
}

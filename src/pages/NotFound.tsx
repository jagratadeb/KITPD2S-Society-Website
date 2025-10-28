import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="flex min-h-screen items-center justify-center bg-black text-white px-6">
      <div className="text-center space-y-6">
        <img src="/src/assets/KITPD2S_Logo.png" alt="Logo" className="w-28 mx-auto opacity-90 animate-pulse" />
        <h1 className="text-6xl font-orbitron font-bold tracking-widest">404</h1>
        <p className="text-lg text-gray-400">The page you're looking for doesn't exist.</p>
        <Link
          to="/"
          className="inline-block px-6 py-3 rounded-xl font-inter text-sm font-medium bg-primary text-primary-foreground hover:scale-105 transition-transform duration-200 shadow-lg"
        >
          Go Back Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
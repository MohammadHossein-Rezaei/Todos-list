import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export const NotFound = () => {
  return (
    <div className="max-w-md mx-auto text-center py-20">
      <motion.div
        animate={{
          rotate: [0, 10, -10, 0],
          scale: [1, 1.05, 1],
        }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="text-[#f4c095] text-6xl mb-6"
      >
        ⎈
      </motion.div>
      <h1 className="text-3xl font-bold text-[#1d7874] mb-4">Page Not Found</h1>
      <p className="text-[#1d7874]/80 mb-6">
        The page you're looking for doesn't exist.
      </p>
      <Link
        to="/"
        className="inline-block px-6 py-2 bg-[#1d7874] text-white rounded-full shadow-md hover:bg-[#1d7874]/90 transition-colors"
      >
        Return Home
      </Link>
    </div>
  );
};

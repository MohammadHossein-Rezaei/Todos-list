import { motion } from "framer-motion";
export const About = () => {
  return (
    <div className="max-w-3xl mx-auto p-6">
      <motion.div
        initial={{ y: 20 }}
        animate={{ y: 0 }}
        className="bg-white p-8 rounded-xl shadow-lg"
      >
        <h1 className="text-2xl font-bold text-[#1d7874] mb-6">About Task</h1>

        <div className="prose prose-sm max-w-none text-[#1d7874]">
          <p className="mb-4">
            A beautiful task management app designed for simplicity and
            elegance.
          </p>

          <div className="bg-[#f4c095]/10 p-4 rounded-lg border-l-4 border-[#1d7874] mb-6">
            <h2 className="text-lg font-semibold mb-2">Features</h2>
            <ul className="space-y-2">
              <li className="flex items-start">
                <span className="text-[#f4c095] mr-2">•</span>
                <span>Minimalist interface with smooth animations</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#f4c095] mr-2">•</span>
                <span>Keyboard-friendly workflow</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#f4c095] mr-2">•</span>
                <span>Persistent local storage</span>
              </li>
            </ul>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

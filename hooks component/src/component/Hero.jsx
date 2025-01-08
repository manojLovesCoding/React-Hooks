import { motion } from "framer-motion";
import heroImage from "../assets/images/hero-image.png";

const Hero = () => {
  return (
    <section className="bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-200">
      <div className="container mx-auto px-6 lg:px-20 py-20 flex flex-col md:flex-row items-center justify-between">
        {/* Left Content */}
        <div className="md:w-1/2 space-y-6">
          <motion.h1
            className="text-4xl lg:text-6xl font-bold"
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            Build Your Future with <span className="text-blue-500">Shreem</span>
          </motion.h1>
          <motion.p
            className="text-lg text-gray-600 dark:text-gray-300"
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Empowering businesses with cutting-edge technology solutions. Join
            us to innovate, grow, and succeed.
          </motion.p>
          <motion.div
            className="flex space-x-4"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <button className="px-6 py-3 bg-blue-500 text-white rounded-lg shadow-lg hover:bg-blue-600">
              Get Started
            </button>
            <button className="px-6 py-3 bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-lg shadow-lg hover:bg-gray-300 dark:hover:bg-gray-600">
              Learn More
            </button>
          </motion.div>
        </div>

        {/* Right Image */}
        <motion.div
          className="md:w-1/2 mt-10 md:mt-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <img
            src={heroImage}
            alt="Hero"
            className="w-full max-w-md mx-auto md:max-w-none"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;

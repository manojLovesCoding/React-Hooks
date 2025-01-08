import Hero from "../component/Hero";
import Testimonial from "../component/Testimonial";

const Home = () => {
  return (
    <div className="bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-200 min-h-screen p-6">
      <Hero />
      <Testimonial />
    </div>
  );
};

export default Home;

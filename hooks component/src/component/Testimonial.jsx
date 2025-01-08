import { motion } from "framer-motion";
import testimonialImg1 from "../assets/images/testimonail1.jpg";
import testimonialImg2 from "../assets/images/testimonail2.jpg";
const Testimonial = () => {
  /*Add real client images and feedback for a professional look. */
  const testimonials = [
    {
      name: "John Doe",
      role: "CEO, TechCorp",
      feedback:
        "Shreem Software Pvt Ltd has revolutionized our business operations. Their innovative solutions and support are unmatched!",
      image: testimonialImg1
    },
    {
      name: "Jane Smith",
      role: "CTO, InnovateX",
      feedback:
        "Working with Shreem Software was a game-changer. The team is highly professional and delivered exactly what we needed.",
      image: testimonialImg2
    }
  ];

  return (
    <div className="bg-gray-100 dark:bg-gray-900 py-16 px-4">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-gray-800 dark:text-gray-200 mb-8">
          What Our Clients Say
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="relative p-6 bg-neon-gradient rounded-xl shadow-xl text-white"
            >
              <div className="absolute inset-0 bg-opacity-50 blur-xl"></div>
              <div className="relative z-10 flex flex-col items-center">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-20 h-20 rounded-full border-4 border-white shadow-lg mb-4"
                />
                <h3 className="text-lg font-semibold">{testimonial.name}</h3>
                <p className="text-sm text-white/70">{testimonial.role}</p>
                <p className="mt-4 text-sm">{testimonial.feedback}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonial;

import { motion } from "framer-motion";
import {
  Gallery1,
  Gallery2,
  Gallery3,
  Gallery4,
  Gallery5,
  Gallery6,
  Gallery7,
  Gallery8,
} from "../ReUsable/Images";
import SectionHeader from "../ReUsable/SectionHeader";

const images = [
  Gallery1,
  Gallery2,
  Gallery3,
  Gallery4,
  Gallery5,
  Gallery6,
  Gallery7,
  Gallery8,
];

// Staggered container animation
const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

// Animation for each image
const imageVariants = {
  hidden: { opacity: 0, scale: 0.9, y: 30 },
  show: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

const Gallery = () => {
  return (
    <div className="px-4 md:px-8 lg:px-20 py-8">
      <SectionHeader title="Gallery" />

      <motion.div
        className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-6"
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
      >
        {images.map((img, index) => (
          <motion.div
            key={index}
            variants={imageVariants}
            className="w-full"
          >
            <motion.img
              src={img}
              alt={`Gallery ${index + 1}`}
              className="w-full object-cover rounded-xl "
              whileHover={{ scale: 1.03 }}
              transition={{ type: "spring", stiffness: 200, damping: 12 }}
            />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Gallery;

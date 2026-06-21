import { motion } from "framer-motion";

function PageWrapper({ children }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8 }}
    >
      {children}
    </motion.div>
  );
}

export default PageWrapper;
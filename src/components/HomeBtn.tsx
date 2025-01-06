import { motion } from "framer-motion";
import Link from "next/link";

const HomeBtn = () => {
  return (
    <Link href="/" passHref>
      <motion.a
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 1 }}
        className="text-foreground rounded-full flex items-center justify-center custom-bg fixed top-4 left-4 w-fit self-start z-50"
        aria-label="home"
      >
        Home
      </motion.a>
    </Link>
  );
};

export default HomeBtn;

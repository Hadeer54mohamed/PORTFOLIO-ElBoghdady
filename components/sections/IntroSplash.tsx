"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

export default function IntroSplash({ isVisible }: { isVisible: boolean }) {
  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className="fixed inset-0 z-[9999] flex items-center justify-center  bg-gradient-to-br from-[#0f0f1a] via-[#1a0f2e] to-[#0a0a14]"
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6 }}
        >
          <motion.div
            layoutId="logo" // 🔥 نفس الـ id
            initial={{ scale: 0.6, opacity: 0 }}
            animate={{
              scale: [0.6, 1.1, 1],
              opacity: 1,
              filter: [
                "drop-shadow(0 0 0px #fff)",
                "drop-shadow(0 0 25px #ff66cc)",
                "drop-shadow(0 0 10px #66ccff)",
              ],
            }}
            exit={{
              scale: 0.4,
              y: -250,
              opacity: 0,
            }}
            transition={{
              duration: 1.6,
              ease: "easeInOut",
            }}
          >
            <Image
              src="/images/dede-logo.png"
              alt="logo"
              width={180}
              height={180}
              priority
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
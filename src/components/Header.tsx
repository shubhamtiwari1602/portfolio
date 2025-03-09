import { motion } from 'framer-motion';
import { SocialLinks } from './SocialLinks';
import { HiOutlineExternalLink } from 'react-icons/hi';
import Image from 'next/image';

export function Header() {
  return (
    <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-8 w-full">
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        className="flex-1 max-w-2xl"
      >
        <div className="space-y-4">
          <h1 className="text-4xl md:text-6xl font-bold gradient-text">
            Shubham Tiwari
          </h1>
          <h2 className="text-xl md:text-2xl text-gray-400">
            Student at IIT Madras | Quant & App Development Enthusiast
          </h2>
        </div>
        
        <div className="mt-8">
          <SocialLinks />
        </div>

        <motion.a
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          href="https://console.zerodha.com/verified/4cc3be80"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-primary/10 text-primary px-6 py-3 rounded-lg hover:bg-primary/20 transition-all duration-300 mt-4"
        >
          <span>Verified Portfolio</span>
          <HiOutlineExternalLink />
        </motion.a>
      </motion.div>
      
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.3 }}
        className="relative w-32 h-32 md:w-40 md:h-40 shrink-0"
      >
        <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary to-accent opacity-20 blur-lg" />
        <div className="relative w-full h-full rounded-full overflow-hidden border-2 border-primary/20 hover:border-primary/50 transition-colors duration-300">
          <Image
            src="/photo_2025-01-12 16.21.51.jpeg"
            alt="Shubham Tiwari"
            fill
            className="object-cover"
            sizes="(max-width: 768px) 128px, 160px"
            priority
          />
        </div>
      </motion.div>
    </div>
  );
}
'use client';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';

export function SocialLinks() {
  const socials = [
    {
      icon: FaLinkedin,
      href: 'https://www.linkedin.com/in/shubhamtiwari1602/',
      label: 'LinkedIn - IIT Madras Student',
      color: '#0077b5'
    },
    {
      icon: FaGithub,
      href: 'https://github.com/shubhamtiwari1602/BlueResq',
      label: 'GitHub - BlueResq Project',
      color: '#333'
    },
    {
      icon: FaInstagram,
      href: 'https://www.instagram.com/shubham_t16/',
      label: 'Instagram',
      color: '#e4405f'
    }
  ];

  return (
    <div className="flex gap-6">
      {socials.map((social) => (
        <motion.a
          key={social.label}
          whileHover={{ scale: 1.1 }}
          href={social.href}
          target="_blank"
          rel="noopener noreferrer"
          className="relative group w-12 h-12 flex items-center justify-center rounded-xl bg-white/10 text-white/70 hover:text-white transition-all duration-300"
          style={{ 
            boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
          }}
        >
          <motion.div
            className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            style={{ 
              background: `linear-gradient(135deg, ${social.color}40, ${social.color}20)`,
            }}
          />
          <social.icon 
            size={24} 
            className="relative z-10"
          />
        </motion.a>
      ))}
    </div>
  );
}
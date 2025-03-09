'use client';
import { motion } from 'framer-motion';

interface ProjectCardProps {
  title: string;
  date: string;
  guide?: string;
  description: string[];
}

export function ProjectCard({ title, date, guide, description }: ProjectCardProps) {
  return (
    <motion.div
      data-hoverable
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ y: -5 }}
      className="group relative bg-secondary/10 backdrop-blur-sm rounded-xl p-6 border border-secondary/20 hover:border-primary/50 transition-all duration-300"
    >
      <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-accent/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      
      <div className="relative">
        <div className="flex justify-between items-start mb-4">
          <motion.h3 
            className="text-xl font-semibold text-gradient"
            whileHover={{ scale: 1.02 }}
          >
            {title}
          </motion.h3>
          <span className="text-sm text-gray-400 font-medium">{date}</span>
        </div>
        
        {guide && (
          <p className="text-sm text-gray-400 mb-4 italic">
            Guided by {guide}
          </p>
        )}
        
        <ul className="space-y-3">
          {description.map((point, index) => (
            <motion.li
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="flex items-start gap-3 group/item"
            >
              <span className="mt-2">
                <motion.div
                  initial={{ scale: 0.8 }}
                  whileInView={{ scale: 1 }}
                  className="h-1.5 w-1.5 rounded-full bg-primary group-hover/item:bg-accent transition-colors duration-300"
                />
              </span>
              <span className="text-gray-300 leading-relaxed">{point}</span>
            </motion.li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
}
'use client';
import { motion } from 'framer-motion';
import { Navigation } from '@/components/Navigation';
import { SocialLinks } from '@/components/SocialLinks';

export default function Home() {
  return (
    <>
      <Navigation />
      <main className="flex min-h-screen flex-col items-center text-white">
        <div className="container mx-auto px-4 py-8 sm:px-6 lg:px-8 space-y-20">
          {/* Hero Section */}
          <section id="home" className="relative pt-20 flex items-center justify-center min-h-[80vh]">
            <div className="w-full max-w-4xl">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-center mb-8"
              >
                <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 gradient-text">
                  Shubham Tiwari
                </h1>
                <h2 className="text-xl sm:text-2xl text-white/90 max-w-2xl mx-auto">
                  Student at IIT Madras | Quant & App Development Enthusiast
                </h2>
              </motion.div>
            </div>
            
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.1 }}
              transition={{ duration: 1.5 }}
              className="absolute inset-0 -z-10"
            >
              <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-background to-background" />
            </motion.div>
          </section>

          {/* Introduction Section - Reducing height and adjusting spacing */}
          <section className="flex flex-col justify-center py-16">
            <h1 className="text-4xl sm:text-5xl font-bold mb-6 text-white">
              Hi, I'm <span className="text-gradient">Shubham Tiwari</span>
            </h1>
            <p className="text-lg sm:text-xl text-white/90 mb-8 max-w-2xl">
              Student at IIT Madras pursuing B.Tech in Mechanical Engineering and M.Tech in Quantitative Finance. 
              Passionate about Quantitative Finance, App Development, Business Startups, and Investing.
            </p>
            <SocialLinks />
          </section>

          {/* About Section */}
          <section id="about" className="py-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="max-w-4xl mx-auto"
            >
              <h2 className="text-3xl font-bold mb-8 text-gradient">About Me</h2>
              <div className="prose prose-invert max-w-none">
                <p className="text-lg text-white/90 leading-relaxed">
                  I'm pursuing a dual degree at IIT Madras - B.Tech in Mechanical Engineering and M.Tech in Quantitative Finance. 
                  I'm passionate about quantitative analysis, app development, and exploring the intersection of technology and finance. 
                  I'm also interested in business startups and investing.
                </p>
              </div>
            </motion.div>
          </section>

          {/* Projects Section */}
          <section id="projects" className="py-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="max-w-4xl mx-auto"
            >
              <h2 className="text-3xl font-bold mb-8 text-gradient">Projects</h2>
              <div className="grid gap-8">
                {[
                  {
                    title: "Project Member Minix*",
                    date: "Nov '24 – Present",
                    guide: "Prof Nandan Sudarsanam, Department of Management Studies, IIT Madras",
                    description: [
                      "Working on statistical arbitrage strategies for Exchange Traded Funds (ETFs), analyzing NAV to determine fair prices.",
                      "Designing pairs trading strategies to identify and exploit price inefficiencies between ETF pairs."
                    ]
                  },
                  {
                    title: "Exchange Simulator",
                    date: "May '24 – July '24",
                    guide: "Prof Neelesh Upadhye, Department of Mathematics, IIT Madras",
                    description: [
                      "Built a virtual market simulator for accurate market condition predictions",
                      "Integrated ABIDES framework and Reinforcement Learning algorithms",
                      "Evaluated performance using historical market data and metrics"
                    ]
                  },
                  {
                    title: "BlueResQ (CFI, Sahaay)",
                    date: "May '23 – Apr '24",
                    description: [
                      "Developed a mobile app to optimize animal rescue response time",
                      "Implemented Firebase backend with Map API, Google Sign-In",
                      "Created real-time notifications and web dashboard",
                      "Recognized as Most Valuable Member"
                    ]
                  }
                ].map((project, index) => (
                  <motion.div
                    key={project.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.2 }}
                    className="group relative bg-secondary/20 rounded-lg p-6 hover:bg-secondary/30 transition-all duration-300"
                  >
                    <div className="flex justify-between items-start mb-4">
                      <h3 className="text-xl font-semibold text-primary">{project.title}</h3>
                      <span className="text-sm text-gray-400">{project.date}</span>
                    </div>
                    {project.guide && (
                      <p className="text-sm text-gray-400 mb-4 italic">{project.guide}</p>
                    )}
                    <ul className="space-y-2">
                      {project.description.map((point, i) => (
                        <li key={i} className="text-gray-300 flex items-start gap-2">
                          <span className="text-primary mt-1.5">•</span>
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </section>

          <footer className="py-8 text-center text-white/70">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
            >
              <p>© {new Date().getFullYear()} Shubham Tiwari. All rights reserved.</p>
            </motion.div>
          </footer>
        </div>
      </main>
    </>
  );
}

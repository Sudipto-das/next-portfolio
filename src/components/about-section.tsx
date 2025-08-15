"use client"

import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { Code2, Database, Globe, Laptop, Palette, Zap, Trophy, Users, Coffee, Server, Smartphone } from "lucide-react"

export default function AboutSection() {
  const skills = [
    { name: "React", icon: <Code2 size={16} />, category: "frontend" },
    { name: "Next.js", icon: <Globe size={16} />, category: "frontend" },
    { name: "TypeScript", icon: <Code2 size={16} />, category: "language" },
    { name: "Node.js", icon: <Server size={16} />, category: "backend" },
    { name: "Git", icon: <Code2 size={16} />, category: "language" },
    { name: "Firebase", icon: <Database size={16} />, category: "database" },
    { name: "Tailwind CSS", icon: <Palette size={16} />, category: "styling" },
    { name: "Github", icon: <Smartphone size={16} />, category: "design" },
    
  ]

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              viewport={{ once: true }}
              className="font-sans font-black text-4xl md:text-6xl text-black mb-6 tracking-tight"
            >
              About{" "}
              <span className="text-black relative">
                Me
                <motion.div
                  animate={{ rotate: [0, 10, -10, 0] }}
                  transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                  className="absolute -top-1 -right-8"
                >
                  <Coffee className="text-lime-400" size={18} />
                </motion.div>
              </span>
            </motion.h2>
            <div className="h-1 w-16 bg-lime-400 rounded-full mt-2"></div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              viewport={{ once: true }}
              className="text-base text-gray-700 mb-6 leading-relaxed font-medium"
            >
              A passionate freelance web developer with expertise in building scalable web applications and modern
              websites. I focus on creating digital solutions that combine{" "}
              <span className="text-black font-bold">performance</span>,{" "}
              <span className="text-black font-bold">usability</span>, and{" "}
              <span className="text-black font-bold">aesthetic appeal</span>.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              viewport={{ once: true }}
              className="text-base text-gray-700 mb-8 leading-relaxed font-medium"
            >
              With{" "}
              <span className="font-mono bg-lime-100 text-black px-2 py-1 rounded border border-lime-200 font-bold">
                1+ years
              </span>{" "}
              of experience, I specialize in modern web technologies and deliver solutions that drive business growth.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              viewport={{ once: true }}
              className="mb-8"
            >
              <h3 className="text-xl font-bold text-black mb-4 flex items-center gap-2">
                <motion.div
                  animate={{ rotate: [0, 360] }}
                  transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                >
                  <Laptop className="text-black" size={20} />
                </motion.div>
                Tech Stack
              </h3>
              <div className="flex flex-wrap gap-3">
                {skills.map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.6 + index * 0.1, duration: 0.4 }}
                    whileHover={{ scale: 1.05, y: -2 }}
                    viewport={{ once: true }}
                  >
                    <Badge
                      variant="secondary"
                      className="bg-lime-100 border border-lime-200 text-black hover:bg-lime-200 hover:border-lime-300 transition-all duration-300 flex items-center gap-2 px-3 py-2 font-medium"
                    >
                      <motion.div
                        animate={{ rotate: [0, 360] }}
                        transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                      >
                        {skill.icon}
                      </motion.div>
                      {skill.name}
                    </Badge>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="relative"
          >
            <motion.div
              whileHover={{ y: -8 }}
              className="bg-white rounded-2xl p-8 border border-gray-200 shadow-lg relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-lime-50 to-lime-100/50" />

              <div className="relative z-10">
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.4, duration: 0.6 }}
                  viewport={{ once: true }}
                  className="text-center mb-8"
                >
                  <div className="text-4xl font-black mb-2 text-black">1+</div>
                  <div className="text-lg text-gray-700 font-bold">Years of Experience</div>
                </motion.div>

                <div className="grid grid-cols-2 gap-6">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6, duration: 0.5 }}
                    viewport={{ once: true }}
                    className="text-center"
                  >
                    <motion.div
                      animate={{ scale: [1, 1.1, 1] }}
                      transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                      className="w-12 h-12 bg-lime-400 rounded-full flex items-center justify-center mx-auto mb-3"
                    >
                      <Trophy className="text-black" size={20} />
                    </motion.div>
                    <div className="text-2xl font-black text-black mb-1">50+</div>
                    <div className="text-sm text-gray-700 font-medium">Projects</div>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8, duration: 0.5 }}
                    viewport={{ once: true }}
                    className="text-center"
                  >
                    <motion.div
                      animate={{ rotate: [0, 10, -10, 0] }}
                      transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
                      className="w-12 h-12 bg-lime-400 rounded-full flex items-center justify-center mx-auto mb-3"
                    >
                      <Users className="text-black" size={20} />
                    </motion.div>
                    <div className="text-2xl font-black text-black mb-1">30+</div>
                    <div className="text-sm text-gray-700 font-medium">Happy Clients</div>
                  </motion.div>
                </div>
              </div>
            </motion.div>

            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
              className="absolute -top-4 -right-4 w-16 h-16 bg-lime-200 rounded-full opacity-60 flex items-center justify-center"
            >
              <Zap className="text-black" size={20} />
            </motion.div>

            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY, delay: 1 }}
              className="absolute -bottom-4 -left-4 w-12 h-12 bg-lime-300 rounded-full opacity-60 flex items-center justify-center"
            >
              <Palette className="text-black" size={16} />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

"use client"

import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Building2, Calendar, MapPin, ArrowRight } from "lucide-react"

export default function ExperienceSection() {
  const experiences = [
    {
      company: "Design Elementary",
      position: "Associate Frontend Developer",
      location: "Remote",
      duration: "June 2024 - Present",
      technologies: ["React", "Next.js", "TypeScript"],
      description:
        "Developing responsive web applications and implementing modern frontend solutions using cutting-edge technologies.",
    },
    {
      company: "Sphere AI",
      position: "Frontend Developer Intern",
      location: "Remote",
      duration: "December 2023 - Present",
      technologies: ["React", "Next.js", "TypeScript"],
      description:
        "Building AI-powered user interfaces and collaborating with cross-functional teams on innovative projects.",
    },
  ]

  return (
    <section id="experience" className="py-20 bg-stone-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left Side - Header and Description */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="lg:sticky lg:top-20"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.6 }}
              viewport={{ once: true }}
              className="flex items-center gap-3 mb-6"
            >
              <motion.div
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                className="w-3 h-3 bg-black rounded-full"
              />
              <span className="text-sm font-bold text-gray-600 uppercase tracking-wider">Experiences</span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              viewport={{ once: true }}
              className="font-sans font-black text-4xl md:text-5xl text-black mb-6 tracking-tight leading-tight"
            >
              EXPLORE MY{" "}
              <span className="text-black">
                DEVELOPMENT
                <br />
                JOURNEY
              </span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              viewport={{ once: true }}
              className="text-base text-gray-700 mb-8 leading-relaxed font-medium max-w-lg"
            >
              Over the past 2 years, I've focused on building and shipping modern web applications, collaborating with
              talented teams to solve real-world problems. My development journey has included working on scalable SaaS
              dashboards, e-commerce platforms, and interactive user interfaces using the latest frontend technologies.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              viewport={{ once: true }}
            >
              <Button className="bg-black text-white hover:bg-gray-800 font-bold px-6 py-3 rounded-lg transition-all duration-300 group">
                Book A Call
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={16} />
              </Button>
            </motion.div>
          </motion.div>

          {/* Right Side - Experience Cards */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + index * 0.2, duration: 0.6 }}
                viewport={{ once: true }}
                whileHover={{ y: -4 }}
                className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm hover:shadow-lg transition-all duration-300 group"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <motion.div
                        animate={{ scale: [1, 1.1, 1] }}
                        transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, delay: index * 0.5 }}
                        className="w-10 h-10 bg-lime-100 rounded-lg flex items-center justify-center border border-lime-200"
                      >
                        <Building2 className="text-black" size={18} />
                      </motion.div>
                      <div>
                        <h3 className="text-lg font-black text-black group-hover:text-gray-800 transition-colors">
                          {exp.company}
                        </h3>
                        <div className="flex items-center gap-2 text-sm text-gray-600">
                          <MapPin size={14} />
                          <span className="font-medium">{exp.location}</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="text-right">
                    <div className="text-lg font-bold text-black mb-1">{exp.position}</div>
                    <div className="flex items-center gap-1 text-sm text-gray-600 font-medium">
                      <Calendar size={14} />
                      <span>{exp.duration}</span>
                    </div>
                  </div>
                </div>

                <p className="text-gray-700 text-sm leading-relaxed mb-4 font-medium">{exp.description}</p>

                <div className="flex flex-wrap gap-2">
                  {exp.technologies.map((tech, techIndex) => (
                    <motion.div
                      key={tech}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.5 + techIndex * 0.1, duration: 0.3 }}
                      viewport={{ once: true }}
                      whileHover={{ scale: 1.05 }}
                    >
                      <Badge
                        variant="secondary"
                        className="bg-lime-100 border border-lime-200 text-black hover:bg-lime-200 transition-all duration-200 font-medium text-xs px-3 py-1"
                      >
                        {tech}
                      </Badge>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

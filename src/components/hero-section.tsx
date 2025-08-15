"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Github, Linkedin, Code2, Zap, Globe, Database, Twitter } from "lucide-react"
import { motion, useScroll, useTransform, easeOut, easeInOut } from "framer-motion"
import { useRef } from "react"

export default function HeroSection() {
  const heroRef = useRef<HTMLElement>(null)

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start end", "end start"],
  })

  const y1 = useTransform(scrollYProgress, [0, 1], [0, -100])
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -200])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: easeOut,
      },
    },
  }

  const linearEasing = (t: number) => t

  return (
    <motion.section
      ref={heroRef}
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-stone-100"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-stone-50 via-stone-100 to-stone-200" />

      <motion.div
        style={{ y: y1 }}
        className="absolute top-20 right-20 w-32 h-32 rounded-full bg-gradient-to-br from-stone-300/30 to-stone-400/30 blur-xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{
          duration: 4,
          repeat: Number.POSITIVE_INFINITY,
          ease: easeInOut,
        }}
      />

      <motion.div
        style={{ y: y2 }}
        className="absolute bottom-20 left-20 w-40 h-40 rounded-full bg-gradient-to-br from-stone-400/30 to-stone-300/30 blur-xl"
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.4, 0.2, 0.4],
        }}
        transition={{
          duration: 5,
          repeat: Number.POSITIVE_INFINITY,
          ease: easeInOut,
          delay: 1,
        }}
      />

      <motion.div
        className="absolute top-1/4 left-1/4 text-stone-600/40"
        animate={{
          y: [0, -20, 0],
          rotate: [0, 10, 0],
        }}
        transition={{
          duration: 6,
          repeat: Number.POSITIVE_INFINITY,
          ease: easeInOut,
        }}
      >
        <Code2 size={24} />
      </motion.div>

      <motion.div
        className="absolute top-1/3 right-1/4 text-stone-700/40"
        animate={{
          y: [0, 15, 0],
          rotate: [0, -10, 0],
        }}
        transition={{
          duration: 5,
          repeat: Number.POSITIVE_INFINITY,
          ease: easeInOut,
          delay: 2,
        }}
      >
        <Database size={20} />
      </motion.div>

      <motion.div
        className="absolute bottom-1/3 right-1/3 text-stone-600/40"
        animate={{
          y: [0, -10, 0],
          rotate: [0, 15, 0],
        }}
        transition={{
          duration: 7,
          repeat: Number.POSITIVE_INFINITY,
          ease: easeInOut,
          delay: 1,
        }}
      >
        <Globe size={18} />
      </motion.div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div variants={itemVariants}>
          <motion.h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-black mb-6 tracking-tighter leading-none">
            <span className="block">Crafting Digital
            </span>
            <span className="block">Experiences</span>
            
          </motion.h1>
        </motion.div>

        <motion.div variants={itemVariants}>
          <p className="text-base md:text-lg text-stone-700 mb-8 max-w-2xl mx-auto leading-relaxed font-medium">
          with Precision and Passion. I&apos;m Sudipto Das, a freelance web developer specializing in modern web applications and websites that function beautifully.
          </p>
        </motion.div>

        <motion.div variants={itemVariants}>
          <div className="flex flex-wrap justify-center gap-3 mb-10">
            <motion.div
              className="bg-white/80 backdrop-blur-sm border border-stone-200 px-4 py-2 rounded-full text-sm text-stone-700 flex items-center gap-2 shadow-sm"
              whileHover={{ scale: 1.05, y: -2 }}
            >
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, ease: linearEasing }}
              >
                <Code2 size={16} className="text-stone-600" />
              </motion.div>
              React & Next.js
            </motion.div>
            <motion.div
              className="bg-white/80 backdrop-blur-sm border border-stone-200 px-4 py-2 rounded-full text-sm text-stone-700 flex items-center gap-2 shadow-sm"
              whileHover={{ scale: 1.05, y: -2 }}
            >
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
              >
                <Database size={16} className="text-stone-600" />
              </motion.div>
              Firebase & MongoDB
            </motion.div>
            <motion.div
              className="bg-white/80 backdrop-blur-sm border border-stone-200 px-4 py-2 rounded-full text-sm text-stone-700 flex items-center gap-2 shadow-sm"
              whileHover={{ scale: 1.05, y: -2 }}
            >
              <motion.div
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
              >
                <Zap size={16} className="text-lime-500" />
              </motion.div>
              Node.js & Express.js
            </motion.div>
          </div>
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
        >
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button
              size="lg"
              className="bg-lime-400 hover:bg-lime-500 text-black px-8 py-3 text-lg font-bold rounded-lg shadow-lg transition-all duration-300"
              onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
            >
              View My Work <ArrowRight className="ml-2" size={20} />
            </Button>
          </motion.div>

          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button
              variant="outline"
              size="lg"
              className="border-2 border-black text-black hover:bg-black hover:text-white px-8 py-3 text-lg font-bold rounded-lg bg-transparent transition-all duration-300"
              onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
            >
              Get In Touch
            </Button>
          </motion.div>
        </motion.div>

        <motion.div variants={itemVariants} className="flex justify-center space-x-6">
          <motion.a
            href="https://github.com/Sudipto-das"
            target="_blank"
            rel="noopener noreferrer"
            className="text-stone-600 hover:text-black transition-colors duration-300"
            whileHover={{ scale: 1.2, y: -2 }}
            whileTap={{ scale: 0.9 }}
          >
            <div className="p-3 rounded-lg bg-white/60 backdrop-blur-sm border border-stone-200 shadow-sm hover:shadow-md transition-all duration-300">
              <Github size={24} />
            </div>
          </motion.a>

          <motion.a
            href="https://www.linkedin.com/in/sudipto-das-a48a31154/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-stone-600 hover:text-black transition-colors duration-300"
            whileHover={{ scale: 1.2, y: -2 }}
            whileTap={{ scale: 0.9 }}
          >
            <div className="p-3 rounded-lg bg-white/60 backdrop-blur-sm border border-stone-200 shadow-sm hover:shadow-md transition-all duration-300">
              <Linkedin size={24} />
            </div>
          </motion.a>

          <motion.a
            href="https://x.com/sudiptodas877" // Replace with your Twitter handle
            target="_blank"
            rel="noopener noreferrer"
            className="text-stone-600 hover:text-black transition-colors duration-300"
            whileHover={{ scale: 1.2, y: -2 }}
            whileTap={{ scale: 0.9 }}
          >
            <div className="p-3 rounded-lg bg-white/60 backdrop-blur-sm border border-stone-200 shadow-sm hover:shadow-md transition-all duration-300">
              <Twitter size={24} />
            </div>
          </motion.a>
        </motion.div>
      </div>

      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 1 }}
      >
        <motion.div
          className="w-6 h-10 border-2 border-stone-400 rounded-full flex justify-center"
          whileHover={{ borderColor: "#000000" }}
        >
          <motion.div
            className="w-1 h-3 bg-black rounded-full mt-2"
            animate={{
              y: [0, 12, 0],
              opacity: [1, 0.3, 1],
            }}
            transition={{
              duration: 1.5,
              repeat: Number.POSITIVE_INFINITY,
              ease: easeInOut,
            }}
          />
        </motion.div>
      </motion.div>
    </motion.section>
  )
}

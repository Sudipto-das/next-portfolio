"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
      setIsMobileMenuOpen(false)
    }
  }

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? "bg-white/95 backdrop-blur-sm shadow-sm" : "bg-white/90 backdrop-blur-sm"
        }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="font-sans font-bold text-2xl text-gray-900">
            Sudipto<span className="text-green-600">.</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-4 border-2 px-14 py-1.5 rounded-full">
            {["Home", "About", "Services", "Projects", "Contact"].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item.toLowerCase())}
                className="relative px-4  text-black font-medium text-sm uppercase 
                 rounded-full transition-all duration-300 ease-in-out 
                 hover:bg-black hover:text-white cursor-pointer py-4"
              >
                {item}
              </button>
            ))}
          </nav>


          <div className="hidden md:flex items-center space-x-4">

            <Button
              onClick={() => scrollToSection("contact")}
              className="bg-lime-400 hover:bg-lime-500 text-black font-medium px-6 py-2 rounded-full"
            >
              Let&apos;s Work
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden text-black" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-white border-t">
            <nav className="flex flex-col space-y-4 py-4">
              {["Home", "About", "Services", "Projects", "Contact"].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="text-black hover:text-gray-600 transition-colors font-medium text-left"
                >
                  {item}
                </button>
              ))}
              <Button
                onClick={() => scrollToSection("contact")}
                className="bg-lime-400 hover:bg-lime-500 text-black font-medium w-full mt-4 rounded-full"
              >
                Let&apos;s Work
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github } from "lucide-react"
import Image from "next/image"

export default function ProjectsSection() {
  const projects = [
    {
      title: "E-Commerce Platform",
      description:
        "A modern e-commerce solution with advanced filtering, payment integration, and admin dashboard. Increased client sales by 30% within three months.",
      image: "/ecom.png",
      technologies: ["Reactjs", "TypeScript", "Razorpay", ],
      liveUrl: "https://b2c.designelementary.in/#/raw-materials",
      githubUrl: "#",
    },
    {
      title: "SaaS Dashboard",
      description:
        "Comprehensive analytics dashboard for a SaaS platform with real-time data visualization and user management capabilities.",
      image: "/saas-dashboard.png",
      technologies: ["React", "react-chartjs-2", "Node.js", "Firebase"],
      liveUrl: "https://b2b-dashboard.designelementary.com/#/dashboard",
      githubUrl: "#",
    },
    {
      title: "Portfolio Website",
      description:
        "Creative portfolio website for a digital agency featuring smooth animations, parallax effects, and responsive design.",
      image: "/portfolio.png",
      technologies: ["Next.js", "Framer Motion", "Tailwind CSS"],
      liveUrl: "#",
      githubUrl: "#",
    },
  ]

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 scroll-reveal">
          <h2 className="font-sans font-black text-4xl md:text-6xl text-black mb-6 tracking-tight">
            Featured <span className="text-black">Projects</span>
          </h2>
          <div className="h-1 w-16 bg-lime-400 rounded-full mx-auto mt-2"></div>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto font-medium">
            A showcase of recent work that demonstrates my expertise in modern web development
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="hover-lift scroll-reveal border-0 shadow-lg overflow-hidden bg-white">
              <div className="aspect-video bg-gray-200 overflow-hidden">
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  width={400}
                  height={225}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="font-sans font-bold text-xl text-black mb-3">{project.title}</h3>
                <p className="text-gray-600 mb-4 leading-relaxed">{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech) => (
                    <Badge key={tech} variant="secondary" className="bg-lime-100 text-black font-medium">
                      {tech}
                    </Badge>
                  ))}
                </div>

                <div className="flex gap-3">
                  <Button
                    variant="outline"
                    size="sm"
                    className="border-black text-black hover:bg-lime-100 bg-transparent font-medium"
                    asChild
                  >
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                      <ExternalLink size={16} className="mr-2" />
                      Live Demo
                    </a>
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    className="border-gray-300 text-gray-600 hover:bg-gray-50 bg-transparent font-medium"
                  >
                    <Github size={16} className="mr-2" />
                    Code
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

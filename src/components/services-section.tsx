import { Card, CardContent } from "@/components/ui/card"
import { Code, Palette, Smartphone } from "lucide-react"

export default function ServicesSection() {
  const services = [
    {
      icon: <Code className="w-8 h-8" />,
      title: "Web Development",
      description:
        "Custom web applications built with modern technologies like React, Next.js, and Node.js for optimal performance and scalability.",
    },
    {
      icon: <Palette className="w-8 h-8" />,
      title: "UI/UX Design",
      description:
        "Beautiful, intuitive interfaces designed with user experience in mind. From wireframes to pixel-perfect implementations.",
    },
    {
      icon: <Smartphone className="w-8 h-8" />,
      title: "Responsive Design",
      description:
        "Mobile-first approach ensuring your website looks and works perfectly across all devices and screen sizes.",
    },
  ]

  return (
    <section id="services" className="py-20 bg-stone-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 scroll-reveal">
          <h2 className="font-sans font-black text-4xl md:text-6xl text-black mb-6 tracking-tight">
            What I <span className="text-black">Offer</span>
          </h2>
          <div className="h-1 w-16 bg-lime-400 rounded-full mx-auto mt-2"></div>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto font-medium">
            Comprehensive web development services tailored to bring your digital vision to life
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="hover-lift scroll-reveal border-0 shadow-lg bg-white">
              <CardContent className="p-8 text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-lime-100 text-black rounded-full mb-6">
                  {service.icon}
                </div>
                <h3 className="font-sans font-bold text-xl text-black mb-4">{service.title}</h3>
                <p className="text-gray-600 leading-relaxed">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

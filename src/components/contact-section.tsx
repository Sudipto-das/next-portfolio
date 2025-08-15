import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Mail, MessageCircle, Calendar } from "lucide-react"

export default function ContactSection() {
  return (
    <section id="contact" className="py-20 bg-stone-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 scroll-reveal">
          <h2 className="font-sans font-black text-4xl md:text-6xl text-black mb-6 tracking-tight">
            Let&apos;s Build Something <span className="text-black">Amazing Together!</span>
          </h2>
          <div className="h-1 w-16 bg-lime-400 rounded-full mx-auto mt-2"></div>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto font-medium">
            Ready to bring your digital vision to life? I&apos;m here to help you create exceptional web experiences that
            drive results.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {[
            {
              icon: <Mail className="w-6 h-6" />,
              title: "Email Me",
              description: "Drop me a line and I&apos;ll get back to you within 24 hours",
              action: "sudipto877@gmail.com",
            },
            {
              icon: <MessageCircle className="w-6 h-6" />,
              title: "Let's Chat",
              description: "Schedule a free consultation to discuss your project",
              action: "Book a Call",
            },
            {
              icon: <Calendar className="w-6 h-6" />,
              title: "Quick Response",
              description: "I typically respond to inquiries within a few hours",
              action: "Get Started",
            },
          ].map((item, index) => (
            <Card key={index} className="hover-lift scroll-reveal border-0 shadow-lg bg-white">
              <CardContent className="p-6 text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-lime-100 text-black rounded-full mb-4">
                  {item.icon}
                </div>
                <h3 className="font-sans font-bold text-lg text-black mb-2">{item.title}</h3>
                <p className="text-gray-600 mb-4 text-sm font-medium">{item.description}</p>
                <div className="text-black font-bold">{item.action}</div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center scroll-reveal">
          <Button
            size="lg"
            className="bg-lime-400 hover:bg-lime-500 text-black px-12 py-4 text-lg font-bold rounded-full"
          >
            Start Your Project Today
          </Button>
        </div>
      </div>

      {/* Footer */}
      <footer className="mt-20 pt-8 border-t border-gray-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-gray-700">
            <p className="font-medium">&copy; 2024 Sudipto Das. All rights reserved.</p>
            <p className="mt-2 font-medium">Crafted with passion and precision.</p>
          </div>
        </div>
      </footer>
    </section>
  )
}

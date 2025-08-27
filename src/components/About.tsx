import { useEffect, useRef, useState } from 'react'
import { Code, Palette, Rocket, Award } from 'lucide-react'
import photo from '../assets/WhatsApp.jpeg';

const About = () => {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const achievements = [
    { icon: Code, title: '5+', subtitle: 'Projects Completed' },
    { icon: Palette, title: '0', subtitle: 'Years Experience' },
    
 
  ]

  return (
    <section id="about" ref={sectionRef} className="py-20 bg-gradient-secondary relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/3 right-1/4 w-72 h-72 bg-accent/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/3 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <div className={`text-center mb-16 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <h2 className="text-4xl md:text-5xl font-orbitron font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-primary mx-auto rounded-full"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Photo Section */}
          <div className={`transition-all duration-1000 delay-300 ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
          }`}>
            <div className="relative group">
              {/* Photo Placeholder */}
              <div className="w-80 h-80 mx-auto bg-gradient-secondary rounded-full border-4 border-primary/20 flex items-center justify-center relative overflow-hidden group-hover:border-primary/40 transition-all duration-300 hover:scale-105">
                <div className="absolute inset-4 rounded-full bg-gradient-primary opacity-10"></div>
                <div className="text-6xl text-muted-foreground/50 font-orbitron">
                  {photo && <img src={photo} alt="Jayanth kumar" className="w-full h-full object-cover rounded-full" />}
                </div>
                <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-primary/20 via-transparent to-accent/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              
              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-primary rounded-full animate-float"></div>
              <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-accent rounded-full animate-float" style={{animationDelay: '2s'}}></div>
              <div className="absolute top-1/2 -left-8 w-4 h-4 bg-secondary rounded-full animate-float" style={{animationDelay: '4s'}}></div>
            </div>
          </div>

          {/* Content Section */}
          <div className={`transition-all duration-1000 delay-500 ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
          }`}>
            <h3 className="text-3xl font-orbitron font-bold mb-6 text-foreground">
              Crafting Digital Experiences
            </h3>
            
            <div className="space-y-4 text-lg text-muted-foreground leading-relaxed mb-8">
              <p>
              I'm a Computer Science student at SRM University, Andhra Pradesh, with a passion for building intelligent systems that make a difference.
              </p>
              
              <p>
                My journey in tech began with curiosity and has evolved into a mission to build applications that 
                make a difference. I specialize in modern web technologies and always stay updated with the latest 
                trends and best practices in the industry.
              </p>
              
              <p>
                When I'm not coding, you'll find me exploring new technologies, contributing to open-source projects, 
                or sharing my knowledge with the developer community.
              </p>
            </div>

            {/* Skills Highlight */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              <div className="skill-card">
                <h4 className="font-orbitron font-semibold text-primary mb-2">Frontend</h4>
                <p className="text-sm text-muted-foreground">React, JavaScript, TypeScript</p>
              </div>
              <div className="skill-card">
                <h4 className="font-orbitron font-semibold text-primary mb-2">Backend</h4>
                <p className="text-sm text-muted-foreground">Node.js, ExpressJ, APIs</p>
              </div>
              <div className="skill-card">
                <h4 className="font-orbitron font-semibold text-primary mb-2">Design</h4>
                <p className="text-sm text-muted-foreground">UI/UX</p>
              </div>
              <div className="skill-card">
                <h4 className="font-orbitron font-semibold text-primary mb-2">Tools</h4>
                <p className="text-sm text-muted-foreground">Git</p>
              </div>
            </div>

            <button
              onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="btn-futuristic"
            >
              <span className="relative z-10">Let's Work Together</span>
            </button>
          </div>
        </div>

        {/* Achievements */}
        <div className={`mt-20 transition-all duration-1000 delay-700 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <div
                key={index}
                className="text-center group hover:scale-105 transition-transform duration-300"
                style={{animationDelay: `${index * 0.2}s`}}
              >
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-primary rounded-2xl flex items-center justify-center group-hover:shadow-neon transition-all duration-300">
                  <achievement.icon className="text-primary-foreground" size={24} />
                </div>
                <h4 className="text-3xl font-orbitron font-bold text-primary mb-2">
                  {achievement.title}
                </h4>
                <p className="text-muted-foreground font-rajdhani">
                  {achievement.subtitle}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
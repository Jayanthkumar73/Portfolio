import { useEffect, useRef, useState } from 'react'
import { 
  Code2, 
  Palette, 
  Database, 
  Globe, 
  Smartphone, 
  Server,
  Zap,
  Layers,
  GitBranch,
  Monitor
} from 'lucide-react'

const Skills = () => {
  const [isVisible, setIsVisible] = useState(false)
  const [hoveredSkill, setHoveredSkill] = useState<number | null>(null)
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

  const skillCategories = [
    {
      title: 'Frontend Development',
      icon: Monitor,
      color: 'from-blue-500 to-cyan-500',
      skills: [
        { name: 'React', level: 80 },
        { name: 'HTML', level: 87 },
        { name: 'CSS', level: 70 },
        
        { name: 'TypeScript', level: 60 },
        
        { name: 'Next.js', level: 65 }
      ]
    },
    {
      title: 'Backend Development',
      icon: Server,
      color: 'from-green-500 to-emerald-500',
      skills: [
        { name: 'Node.js', level: 80 },
        
        { name: 'Express.js', level: 78 },
        
        { name: 'REST APIs', level: 80 }
      ]
    },
    {
      title: 'Database ',
      icon: Database,
      color: 'from-purple-500 to-pink-500',
      skills: [
        { name: 'MongoDB', level: 80 },
        { name: 'MYSQL', level: 82 },
        { name: 'Firebase', level: 90 }
        
      ]
    },
    {
      title: 'Languages & Tools',
      icon: Palette,
      color: 'from-orange-500 to-red-500',
      skills: [
        { name: 'Python', level: 90 },
        { name: 'Java', level: 70 },
        { name: 'Selenium', level: 70 },
        { name: 'Git', level: 92 },
        { name: 'Javascript', level: 80 }
      ]
    }
  ]

  const technologies = [
    { name: 'React', icon: '⚛️' },
    { name: 'Express', icon: '💚' },
    { name: 'TypeScript', icon: '🔷' },
    { name: 'Node.js', icon: '🟢' },
    { name: 'Python', icon: '🐍' },
    { name: 'MongoDB', icon: '🍃' },
    { name: 'MYSQL', icon: '🐘' },
    { name: 'Selenium', icon: '☁️' },
    { name: 'NextJs', icon: '🐳' },
    { name: 'Git', icon: '📚' },
    { name: 'Java', icon: '🎨' },
    { name: 'Firebase', icon: '🔥' }
  ]

  return (
    <section id="skills" ref={sectionRef} className="py-20 bg-gradient-secondary relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Floating Particles */}
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-primary/20 rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 6}s`,
              animationDuration: `${4 + Math.random() * 4}s`
            }}
          />
        ))}
        
        {/* Large Background Elements */}
        <div className="absolute top-1/4 right-1/3 w-96 h-96 bg-gradient-to-r from-primary/5 to-accent/5 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-1/3 left-1/4 w-72 h-72 bg-gradient-to-r from-accent/5 to-primary/5 rounded-full blur-3xl animate-float" style={{animationDelay: '3s'}}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <div className={`text-center mb-16 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <h2 className="text-4xl md:text-5xl font-orbitron font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
            Skills & Technologies
          </h2>
          <div className="w-24 h-1 bg-gradient-primary mx-auto rounded-full mb-4"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Mastering cutting-edge technologies to build exceptional digital experiences
          </p>
        </div>

        {/* Skills Categories */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {skillCategories.map((category, categoryIndex) => (
            <div
              key={categoryIndex}
              className={`transition-all duration-1000 delay-${categoryIndex * 200} ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
            >
              <div className="skill-card group">
                {/* Category Header */}
                <div className="flex items-center mb-6">
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${category.color} flex items-center justify-center mr-4 group-hover:shadow-neon transition-all duration-300`}>
                    <category.icon className="text-white" size={24} />
                  </div>
                  <h3 className="text-xl font-orbitron font-bold text-foreground">
                    {category.title}
                  </h3>
                </div>

                {/* Skills List */}
                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="group/skill">
                      <div className="flex justify-between items-center mb-2">
                        <span className="font-rajdhani font-medium text-foreground">
                          {skill.name}
                        </span>
                        <span className="text-sm text-primary font-semibold">
                          {skill.level}%
                        </span>
                      </div>
                      
                      {/* Animated Progress Bar */}
                      <div className="w-full bg-muted/30 rounded-full h-2 overflow-hidden">
                        <div
                          className={`h-full bg-gradient-to-r ${category.color} rounded-full transition-all duration-1000 ease-out group-hover/skill:shadow-hover`}
                          style={{
                            width: isVisible ? `${skill.level}%` : '0%',
                            transitionDelay: `${categoryIndex * 200 + skillIndex * 100}ms`
                          }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Technology Cloud */}
        <div className={`transition-all duration-1000 delay-800 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <h3 className="text-3xl font-orbitron font-bold text-center mb-12 text-foreground">
            Technology Stack
          </h3>
          
          <div className="relative">
            {/* Central Hub */}
            <div className="w-32 h-32 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-8 shadow-neon animate-pulse-glow">
              <Zap className="text-primary-foreground" size={48} />
            </div>

            {/* Orbiting Technologies */}
            <div className="relative flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
              {technologies.map((tech, index) => (
                <div
                  key={index}
                  className={`
                    relative group cursor-pointer transition-all duration-300 
                    hover:scale-110 hover:z-10 animate-float
                  `}
                  style={{
                    animationDelay: `${index * 0.5}s`,
                    animationDuration: `${4 + (index % 3)}s`
                  }}
                  onMouseEnter={() => setHoveredSkill(index)}
                  onMouseLeave={() => setHoveredSkill(null)}
                >
                  <div className={`
                    w-20 h-20 rounded-2xl bg-card border border-border 
                    flex flex-col items-center justify-center 
                    shadow-card group-hover:shadow-neon
                    transition-all duration-300
                    ${hoveredSkill === index ? 'scale-125 shadow-cosmic' : ''}
                  `}>
                    <span className="text-2xl mb-1">{tech.icon}</span>
                    <span className="text-xs font-rajdhani font-medium text-center px-1">
                      {tech.name}
                    </span>
                  </div>
                  
                  {/* Connecting Lines */}
                  <div className={`
                    absolute top-1/2 left-1/2 w-px bg-gradient-to-r from-primary/50 to-transparent 
                    transition-all duration-300 origin-left
                    ${hoveredSkill === index ? 'h-8 opacity-100' : 'h-4 opacity-30'}
                  `} 
                  style={{
                    transform: `translate(-50%, -50%) rotate(${index * 30}deg)`
                  }} />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Skills Stats */}
        <div className={`mt-16 transition-all duration-1000 delay-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center group">
              <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center group-hover:shadow-neon transition-all duration-300">
                <Code2 className="text-white" size={24} />
              </div>
              <h4 className="text-3xl font-orbitron font-bold text-primary mb-2">4+</h4>
              <p className="text-muted-foreground font-rajdhani">Languages</p>
            </div>
            
            <div className="text-center group">
              <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center group-hover:shadow-neon transition-all duration-300">
                <Layers className="text-white" size={24} />
              </div>
              <h4 className="text-3xl font-orbitron font-bold text-primary mb-2">3+</h4>
              <p className="text-muted-foreground font-rajdhani">Frameworks</p>
            </div>
            
            <div className="text-center group">
              <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center group-hover:shadow-neon transition-all duration-300">
                <GitBranch className="text-white" size={24} />
              </div>
              <h4 className="text-3xl font-orbitron font-bold text-primary mb-2">5+</h4>
              <p className="text-muted-foreground font-rajdhani">Repositories</p>
            </div>
            
            <div className="text-center group">
              <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-orange-500 to-red-500 rounded-2xl flex items-center justify-center group-hover:shadow-neon transition-all duration-300">
                <Globe className="text-white" size={24} />
              </div>
              <h4 className="text-3xl font-orbitron font-bold text-primary mb-2">5+</h4>
              <p className="text-muted-foreground font-rajdhani">Projects</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills
import { useEffect, useRef, useState } from 'react'
import { ExternalLink, Github, Sparkles } from 'lucide-react'

import assetmanagement from '../assets/asset-managementScreenshot.jpeg';
import carrental from '../assets/Carrentalscreenshot.jpeg';

const Projects = () => {
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

  const projects = [
    {
      title: 'Asset Management System',
      description: 'Developed an Asset Management application to efficiently track and manage organizational assets, streamlining inventory and allocation processes.Implemented features for asset assignment, categorization, and history tracking, enhancing operational transparency and resource utilization.',
      technologies: ['React', 'Node.js', 'MongoDB', 'Express'],
      image: assetmanagement,
      liveUrl: 'https://asset-management-azure-two.vercel.app/',
      githubUrl: 'https://github.com/Jayanthkumar73/Asset-Management',
      featured: true
    },
    {
      title: 'Car Rental Application',
      description: 'Car rental application built with ReactJs with backend as Firestore and for authtication purpose used firebase authentication. Implemented features like car browsing, booking, user profiles, and payment integration to provide a seamless rental experience.',
      technologies: ['React.js', 'Razorpay', 'Firebase', 'Firestore'],
      image: carrental,
      liveUrl: 'https://carrental-gamma-self.vercel.app/',
      githubUrl: 'https://github.com/Jayanthkumar73/Carrental',
      featured: true
    },
    {
      title: 'Twitter Sentimental Analysis',
      description: 'Collaborative task management tool with drag-and-drop interface, real-time updates, and team collaboration features.',
      technologies: ['Machine Learning', 'Scikit Learn', 'Pandas', 'TF-IDF'],
      image: '/api/placeholder/600/400',
      
      githubUrl: 'https://github.com',
      featured: false
    },
    {
      title: 'Student Portal',
      description: 'AI-powered image generation tool with custom prompts, style transfer, and high-resolution output.',
      technologies: ['React.Js', 'JSON server'],
      image: '/api/placeholder/600/400',
      liveUrl: 'https://example.com',
      githubUrl: 'https://github.com',
      featured: false
    },
    {
      title: 'Online Voting System',
      description: 'Real-time cryptocurrency tracking with portfolio management, price alerts, and market analysis.',
      technologies: ['HTML', 'CSS', 'PHP', 'MYSQL'],
      image: '/api/placeholder/600/400',
      liveUrl: 'https://example.com',
      githubUrl: 'https://github.com',
      featured: false
    },
    
  ]

  const featuredProjects = projects.filter(p => p.featured)
  const otherProjects = projects.filter(p => !p.featured)

  return (
    <section id="projects" ref={sectionRef} className="py-20 cosmic-bg relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-accent/5 rounded-full blur-3xl animate-float" style={{animationDelay: '3s'}}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <div className={`text-center mb-16 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <div className="flex items-center justify-center mb-4">
            <Sparkles className="text-primary mr-2 animate-pulse-glow" size={24} />
            <h2 className="text-4xl md:text-5xl font-orbitron font-bold bg-gradient-primary bg-clip-text text-transparent">
              Featured Projects
            </h2>
            <Sparkles className="text-accent ml-2 animate-pulse-glow" size={24} />
          </div>
          <div className="w-24 h-1 bg-gradient-primary mx-auto rounded-full mb-4"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A showcase of my recent work, featuring innovative solutions and cutting-edge technologies
          </p>
        </div>

        {/* Featured Projects */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {featuredProjects.map((project, index) => (
            <div
              key={index}
              className={`group transition-all duration-1000 delay-${index * 200} ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
            >
              <div className="skill-card h-full">
                {/* Project Image */}
                <div className="relative overflow-hidden rounded-xl mb-6 bg-muted aspect-video">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 via-transparent to-accent/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>

                {/* Project Info */}
                <h3 className="text-2xl font-orbitron font-bold mb-3 text-foreground group-hover:text-primary transition-colors duration-300">
                  {project.title}
                </h3>
                
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 text-sm bg-primary/10 text-primary rounded-full border border-primary/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Project Links */}
                <div className="flex gap-4">
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:shadow-neon transition-all duration-300 hover:scale-105"
                  >
                    <ExternalLink size={16} />
                    Live Demo
                  </a>
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 border border-primary text-primary hover:bg-primary hover:text-primary-foreground rounded-lg transition-all duration-300 hover:scale-105"
                  >
                    <Github size={16} />
                    Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Other Projects Grid */}
        <div className={`transition-all duration-1000 delay-600 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <h3 className="text-3xl font-orbitron font-bold text-center mb-12 text-foreground">
            Other Notable Projects
          </h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {otherProjects.map((project, index) => (
              <div
                key={index}
                className="skill-card group hover:scale-105"
                style={{animationDelay: `${index * 0.1}s`}}
              >
                <h4 className="text-xl font-orbitron font-bold mb-3 text-foreground group-hover:text-primary transition-colors duration-300">
                  {project.title}
                </h4>
                
                <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-1 mb-4">
                  {project.technologies.slice(0, 3).map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-2 py-1 text-xs bg-primary/10 text-primary rounded-full border border-primary/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-3">
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:text-accent transition-colors duration-200"
                  >
                    <ExternalLink size={16} />
                  </a>
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:text-accent transition-colors duration-200"
                  >
                    <Github size={16} />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className={`text-center mt-16 transition-all duration-1000 delay-800 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <p className="text-lg text-muted-foreground mb-6">
            Want to see more of my work or collaborate on something amazing?
          </p>
          <button
            onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="btn-futuristic"
          >
            <span className="relative z-10">Let's Talk</span>
          </button>
        </div>
      </div>
    </section>
  )
}

export default Projects

import { useEffect, useState } from 'react'
import { ChevronDown, Sparkles } from 'lucide-react'
import heroBackground from '../assets/hero-bg.jpg'

const Hero = () => {
  const [currentText, setCurrentText] = useState('')
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)
  
  const texts = ['Full Stack Developer', 'UI/UX Designer', 'Creative Coder', 'Problem Solver'];

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (isDeleting) {
        setCurrentText(prev => prev.slice(0, prev.length - 1))
        if (currentText === '') {
          setIsDeleting(false)
          setCurrentIndex(prev => (prev + 1) % texts.length)
        }
      } else {
        const fullText = texts[currentIndex]
        setCurrentText(fullText.slice(0, currentText.length + 1))
        if (currentText === fullText) {
          setTimeout(() => setIsDeleting(true), 2000)
        }
      }
    }, isDeleting ? 50 : 100)

    return () => clearTimeout(timeout)
  }, [currentText, currentIndex, isDeleting, texts])

  const scrollToAbout = () => {
    const element = document.querySelector('#about')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Hero Background */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBackground})` }}
      >
        <div className="absolute inset-0 bg-background/30 dark:bg-background/50"></div>
      </div>
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute top-3/4 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-float" style={{animationDelay: '2s'}}></div>
        <div className="absolute bottom-1/4 left-1/3 w-48 h-48 bg-secondary/20 rounded-full blur-2xl animate-float" style={{animationDelay: '4s'}}></div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        {/* Greeting */}
        <div className="flex items-center justify-center mb-6 animate-slide-up">
          <Sparkles className="text-primary mr-2 animate-pulse-glow" size={24} />
          <span className="text-lg font-rajdhani font-medium text-muted-foreground">
            Hello, I'm
          </span>
          <Sparkles className="text-accent ml-2 animate-pulse-glow" size={24} />
        </div>

        {/* Name */}
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-orbitron font-bold mb-6 animate-slide-up bg-gradient-primary bg-clip-text text-transparent">
          Jayanth kumar
        </h1>

        {/* Animated Title */}
        <div className="text-2xl md:text-4xl lg:text-5xl font-rajdhani font-medium mb-8 h-16 flex items-center justify-center animate-slide-up">
          <span className="text-foreground">I'm a </span>
          <span className="text-primary ml-2 min-w-[300px] text-left">
            {currentText}
            <span className="animate-pulse">|</span>
          </span>
        </div>

        {/* Description */}
        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-12 leading-relaxed animate-slide-up">
          Passionate about creating innovative digital experiences that blend cutting-edge technology 
          with beautiful design. Let's build the future together.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-16 animate-slide-up">
          <button
            onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="btn-futuristic relative z-10"
          >
            <span className="relative z-10">Get In Touch</span>
          </button>
          
          <button
            onClick={() => document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' })}
            className="px-8 py-3 font-orbitron font-semibold border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-neon"
          >
            View My Work
          </button>
        </div>

        {/* Scroll Indicator */}
        <button
          onClick={scrollToAbout}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-muted-foreground hover:text-primary transition-colors duration-300 animate-bounce"
        >
          <ChevronDown size={32} />
        </button>
      </div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background/50 pointer-events-none"></div>
    </section>
  )
}

export default Hero
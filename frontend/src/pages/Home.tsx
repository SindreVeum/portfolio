import { motion } from 'framer-motion'
import { ArrowRight, Github, Linkedin, Mail } from 'lucide-react'

const Home = () => {
  return (
    <div className="space-y-16">
      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center py-20"
      >
        <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
          Welcome to My
          <span className="text-primary-600"> Portfolio</span>
        </h1>
        <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
          Full-stack developer passionate about creating beautiful, functional, and scalable web applications.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="btn-primary flex items-center justify-center gap-2">
            View Projects <ArrowRight size={20} />
          </button>
          <button className="btn-secondary flex items-center justify-center gap-2">
            Get in Touch <Mail size={20} />
          </button>
        </div>
      </motion.section>

      {/* Quick Stats */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="grid grid-cols-1 md:grid-cols-3 gap-6"
      >
        <div className="card text-center">
          <h3 className="text-3xl font-bold text-primary-600 mb-2">5+</h3>
          <p className="text-gray-600">Years Experience</p>
        </div>
        <div className="card text-center">
          <h3 className="text-3xl font-bold text-primary-600 mb-2">20+</h3>
          <p className="text-gray-600">Projects Completed</p>
        </div>
        <div className="card text-center">
          <h3 className="text-3xl font-bold text-primary-600 mb-2">15+</h3>
          <p className="text-gray-600">Happy Clients</p>
        </div>
      </motion.section>

      {/* Social Links */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="text-center"
      >
        <h2 className="section-title">Connect With Me</h2>
        <div className="flex justify-center gap-6">
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition-colors"
          >
            <Github size={24} />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            <Linkedin size={24} />
          </a>
          <a
            href="mailto:contact@example.com"
            className="p-3 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors"
          >
            <Mail size={24} />
          </a>
        </div>
      </motion.section>
    </div>
  )
}

export default Home 
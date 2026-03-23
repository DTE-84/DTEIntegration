import { useState } from 'react'

function App() {
  const [selectedProject, setSelectedProject] = useState(null)

  const projects = [
    {
      id: 'pulse',
      title: 'Pulse',
      subtitle: 'Behavioral Finance AI',
      description: 'AI-powered financial coach that detects spending triggers and helps users build healthier money habits.',
      tech: 'React, Firebase, Claude API, Real-time Data',
      image: '/assets/Pulse-MeetNova.png',
      images: ['/assets/Pulse-Intro.png', '/assets/Pulse-MeetNova.png', '/assets/Pulse-CognitiveGap.png']
    },
    {
      id: 'pcsp',
      title: 'PCSP Assistant',
      subtitle: 'HIPAA-Compliant Clinical Tool',
      description: 'Streamlined documentation for developmental services. Secure, automated workflows.',
      tech: 'React, Firebase, HIPAA Compliance',
      image: '/assets/mwhealth.png',
      images: ['/assets/mwhealth.png', '/assets/MWISPthumbnail.png']
    },
    {
      id: 'fluff',
      title: 'Fluff',
      subtitle: 'AI Golf Caddie',
      description: 'PGA-certified AI swing analysis with GPS tracking and practice logging.',
      tech: 'React, Firebase, GPS, AI Analysis',
      image: '/assets/FLUFF-Landing.png',
      images: ['/assets/FLUFF-Landing.png', '/assets/FLUFF-PersonalDashboard.png', '/assets/FLUFF-GPS.png']
    }
  ]

  return (
    <div className="min-h-screen bg-black text-white">
      <header className="relative py-20 px-6">
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 to-blue-500/10"></div>
        <div className="max-w-6xl mx-auto relative z-10">
          <img src="/assets/bannerlogo.jpg" alt="DTE Solutions" className="w-full max-w-4xl mx-auto mb-12"/>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-emerald-400 to-blue-400 bg-clip-text text-transparent">
            AI Integration Sprints
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-4">Fixed-price Claude AI integrations for SaaS products</p>
          <p className="text-lg text-gray-400 mb-12">5-10 day delivery • Clean code • No hourly surprises</p>
          <a href="https://calendly.com/dte-solutions-llc" target="_blank" rel="noopener noreferrer"
            className="inline-block bg-gradient-to-r from-emerald-500 to-blue-500 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:from-emerald-600 hover:to-blue-600 transition-all">
            Book a Discovery Call
          </a>
        </div>
      </header>

      <section className="py-16 px-6 bg-gray-900/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">What I Build</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-6 bg-gray-800/50 rounded-lg border border-emerald-500/20">
              <h3 className="text-xl font-semibold mb-3 text-emerald-400">AI Chat Interfaces</h3>
              <p className="text-gray-400">Claude API chat with message history, context management, clean UX.</p>
            </div>
            <div className="p-6 bg-gray-800/50 rounded-lg border border-blue-500/20">
              <h3 className="text-xl font-semibold mb-3 text-blue-400">Data Processing</h3>
              <p className="text-gray-400">File uploads, custom formatting, automation with AI analysis.</p>
            </div>
            <div className="p-6 bg-gray-800/50 rounded-lg border border-purple-500/20">
              <h3 className="text-xl font-semibold mb-3 text-purple-400">Full Integration</h3>
              <p className="text-gray-400">Auth, database, APIs, deployment. Complete AI applications.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">Recent Builds</h2>
          <p className="text-gray-400 text-center mb-12">AI across fitness, finance, and healthcare</p>
          <div className="grid md:grid-cols-3 gap-8">
            {projects.map((project) => (
              <div key={project.id} className="group cursor-pointer" onClick={() => setSelectedProject(project)}>
                <div className="relative overflow-hidden rounded-lg border border-gray-700 hover:border-emerald-500 transition-all">
                  <img src={project.image} alt={project.title} className="w-full h-64 object-cover group-hover:scale-105 transition-transform"/>
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent flex flex-col justify-end p-6">
                    <h3 className="text-2xl font-bold mb-1">{project.title}</h3>
                    <p className="text-emerald-400 text-sm mb-2">{project.subtitle}</p>
                    <p className="text-gray-300 text-sm">{project.description}</p>
                  </div>
                </div>
                <p className="text-xs text-gray-500 mt-3">{project.tech}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-6 bg-gray-900/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">Pricing</h2>
          <p className="text-gray-400 text-center mb-12">Fixed-price sprints. No hourly billing, no scope creep.</p>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {name: 'Basic', price: '$500', duration: '5 days', features: ['Claude API integration', 'Basic chat UI', 'Message history', 'Source code & docs', '1 revision']},
              {name: 'Standard', price: '$750', duration: '7 days', featured: true, features: ['Everything in Basic', 'File upload handling', 'Custom data processing', 'Enhanced UI/UX', '2 revisions']},
              {name: 'Premium', price: '$1,000', duration: '10 days', features: ['Everything in Standard', 'User authentication', 'Database integration', 'External APIs', 'Deployment', '3 revisions']}
            ].map((tier) => (
              <div key={tier.name} className={`relative p-8 rounded-lg border ${tier.featured ? 'border-emerald-500 bg-emerald-500/10' : 'border-gray-700 bg-gray-800/50'}`}>
                {tier.featured && <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-emerald-500 text-black px-4 py-1 rounded-full text-sm font-semibold">Most Popular</div>}
                <h3 className="text-2xl font-bold mb-2">{tier.name}</h3>
                <div className="mb-6">
                  <span className="text-4xl font-bold">{tier.price}</span>
                  <span className="text-gray-400 ml-2">• {tier.duration}</span>
                </div>
                <ul className="space-y-3 mb-8">
                  {tier.features.map((f, i) => (
                    <li key={i} className="flex items-start text-gray-300">
                      <svg className="w-5 h-5 text-emerald-500 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7"/>
                      </svg>
                      {f}
                    </li>
                  ))}
                </ul>
                <a href="https://calendly.com/dte-solutions-llc" target="_blank" rel="noopener noreferrer"
                  className={`block w-full text-center py-3 px-6 rounded-lg font-semibold transition-all ${tier.featured ? 'bg-emerald-500 text-black hover:bg-emerald-600' : 'bg-gray-700 text-white hover:bg-gray-600'}`}>
                  {tier.featured ? 'Most Popular' : 'Get Started'}
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">Tech Stack</h2>
          <div className="flex flex-wrap justify-center gap-4 text-gray-400">
            {['React 19', 'TypeScript', 'Next.js', 'Firebase', 'Claude API', 'Vercel', 'Tailwind'].map(t => (
              <span key={t} className="px-4 py-2 bg-gray-800 rounded-full">{t}</span>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-6 bg-gradient-to-r from-emerald-500/20 to-blue-500/20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Ready to add AI to your product?</h2>
          <p className="text-xl text-gray-300 mb-8">Book a 15-min call. Fixed quote, clean handoff.</p>
          <a href="https://calendly.com/dte-solutions-llc" target="_blank" rel="noopener noreferrer"
            className="inline-block bg-gradient-to-r from-emerald-500 to-blue-500 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:from-emerald-600 hover:to-blue-600 transition-all">
            Book Discovery Call
          </a>
        </div>
      </section>

      <footer className="py-12 px-6 border-t border-gray-800">
        <div className="max-w-6xl mx-auto text-center text-gray-400">
          <p className="mb-2">DTE Solutions LLC • Quincy, IL</p>
          <p className="text-sm"><a href="mailto:dte.solutions.llc@gmail.com" className="hover:text-emerald-400 transition-colors">dte.solutions.llc@gmail.com</a></p>
          <p className="text-sm mt-4">Data • Integrity • Engineering</p>
        </div>
      </footer>

      {selectedProject && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-6" onClick={() => setSelectedProject(null)}>
          <div className="max-w-4xl w-full bg-gray-900 rounded-lg p-8 max-h-[90vh] overflow-y-auto" onClick={(e) => e.stopPropagation()}>
            <div className="flex justify-between mb-6">
              <div>
                <h3 className="text-3xl font-bold mb-2">{selectedProject.title}</h3>
                <p className="text-emerald-400 mb-4">{selectedProject.subtitle}</p>
              </div>
              <button onClick={() => setSelectedProject(null)} className="text-gray-400 hover:text-white text-2xl">×</button>
            </div>
            <p className="text-gray-300 mb-6">{selectedProject.description}</p>
            <p className="text-sm text-gray-500 mb-6">Tech: {selectedProject.tech}</p>
            <div className="grid grid-cols-2 gap-4">
              {selectedProject.images.map((img, i) => (
                <img key={i} src={img} alt={`${selectedProject.title} ${i + 1}`} className="w-full rounded-lg border border-gray-700"/>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default App

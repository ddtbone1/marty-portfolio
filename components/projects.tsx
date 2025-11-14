'use client'

export default function Projects() {
  const projects = [
    {
      title: 'Restaurant POS System',
      description: 'Full-featured Point of Sale system with sales tracking, inventory management, employee payroll, and receipt printing capabilities.',
      tags: ['C#', '.NET WinForms', 'SQL Server', 'PDFSharp'],
      image: '/pos-screenshot.png',
      link: 'https://github.com/ddtbone1/Restaurant-POS'
    },
    {
      title: 'Church Website',
      description: 'Modern, responsive website for Bible Baptist Church Basak with YouTube integration, Google Maps, and community features.',
      tags: ['.NET 8.0', 'Bootstrap 5', 'JavaScript', 'Azure'],
      image: '/church-website.png',
      link: 'https://basakbiblebaptistchurch.netlify.app/'
    },
    {
      title: 'Pulox',
      description: 'Modern web application showcasing advanced frontend development techniques and responsive design principles.',
      tags: ['React', 'JavaScript', 'CSS3'],
      image: '/pulox.png',
      link: 'https://pulox.netlify.app/'
    },
  ]

  return (
    <section id="work" className="py-24 px-4 lg:px-8 relative">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-balance" data-aos="fade-up">Featured Projects</h2>
        <p className="text-muted-foreground text-lg mb-16 max-w-2xl" data-aos="fade-up" data-aos-delay="200">
          A selection of projects that showcase my expertise in web design and development.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <a
              key={index}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative overflow-hidden rounded-2xl border border-border/50 hover:border-accent/50 transition-all duration-300 block"
              data-aos="fade-up"
              data-aos-delay={400 + (index * 200)}
            >
              <img
                src={project.image || "/placeholder.svg"}
                alt={project.title}
                className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent" />

              <div className="absolute inset-0 p-6 flex flex-col justify-end">
                <div className="flex items-center gap-2 mb-2">
                  <h3 className="text-lg font-bold">{project.title}</h3>
                  <svg className="w-4 h-4 text-accent group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </div>
                <p className="text-sm text-muted-foreground mb-4 line-clamp-2">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.slice(0, 3).map((tag) => (
                    <span key={tag} className="text-xs px-2 py-1 rounded-full bg-accent/20 text-accent">
                      {tag}
                    </span>
                  ))}
                  {project.tags.length > 3 && (
                    <span className="text-xs px-2 py-1 rounded-full bg-muted/20 text-muted-foreground">
                      +{project.tags.length - 3} more
                    </span>
                  )}
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}

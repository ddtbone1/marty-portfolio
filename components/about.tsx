'use client'

export default function About() {
  const skills = [
    { 
      category: 'Programming Languages', 
      items: ['Python', 'C#', 'Java', 'HTML', 'CSS', 'SQL'] 
    },
    { 
      category: 'Frameworks & Libraries', 
      items: ['ASP.NET Core', 'React', 'Next.js', 'Tailwind CSS', 'ShadCN UI'] 
    },
    { 
      category: 'Database Management', 
      items: ['SQL Server', 'SQLite', 'Supabase'] 
    },
    { 
      category: 'Tools & Platforms', 
      items: ['Git', 'GitHub', 'Visual Studio', 'VS Code', 'Swagger', 'Figma'] 
    },
    { 
      category: 'Concepts & Methodologies', 
      items: ['OOP', 'RESTful APIs', 'CRUD Operations', 'Entity Framework Core', 'Authentication'] 
    },
    { 
      category: 'Soft Skills', 
      items: ['Problem Solving', 'Collaboration', 'System Design', 'Adaptability'] 
    }
  ]

  return (
    <section id="about" className="py-24 px-4 lg:px-8 relative">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-balance" data-aos="fade-up">About Me</h2>

        <div className="grid lg:grid-cols-2 gap-12">
          <div className="flex flex-col justify-center" data-aos="fade-right" data-aos-delay="200">
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              I'm an aspiring full-stack software developer with a Bachelor of Science in Computer Science from the University of Cebu Lapu-Lapu and Mandaue (UCLM). I have a strong passion for creating robust, scalable applications and innovative web solutions.
            </p>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              My expertise spans across multiple technologies including ASP.NET Core, React, and various database management systems. I specialize in building CRM systems, POS applications, and modern web platforms.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Based in Cebu, Philippines, I'm always eager to learn new technologies and collaborate on projects that make a positive impact.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4" data-aos="fade-left" data-aos-delay="400">
            {skills.map((skillGroup) => (
              <div key={skillGroup.category} className="p-4 rounded-xl border border-border/50 hover:border-accent/50 transition-colors" data-aos="fade-up" data-aos-delay={600 + (skills.indexOf(skillGroup) * 100)}>
                <h3 className="font-semibold mb-3 text-accent text-sm">{skillGroup.category}</h3>
                <ul className="space-y-1">
                  {skillGroup.items.map((skill) => (
                    <li key={skill} className="text-xs text-muted-foreground">
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

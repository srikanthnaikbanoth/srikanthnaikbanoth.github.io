import "./App.css";

const projects = [
  {
    title: "Automated Data Pipeline",
    description:
      "Designed an ETL workflow for customer data using Python, SQL, PostgreSQL, Apache Airflow, Docker, and data-quality checks.",
    stack: ["Python", "SQL", "PostgreSQL", "Airflow", "Docker"],
    github: "https://github.com/YOUR-GITHUB-USERNAME",
  },
  {
    title: "Job Application Automation Pipeline",
    description:
      "An end-to-end tool that reads job information, analyzes job descriptions, and helps tailor applications efficiently.",
    stack: ["Python", "FastAPI", "Pandas", "LLMs"],
    github: "https://github.com/YOUR-GITHUB-USERNAME",
  },
  {
    title: "Data Science Visualization Project",
    description:
      "Built data analysis and visualization workflows to communicate insights clearly using Python.",
    stack: ["Python", "Pandas", "Matplotlib"],
    github: "https://github.com/YOUR-GITHUB-USERNAME",
  },
];

function App() {
  return (
    <>
      <nav className="navbar">
        <a className="logo" href="#home">SN.</a>
        <div className="nav-links">
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      <main>
        <section id="home" className="hero">
          <p className="eyebrow">DATA ENGINEER / DATA SCIENTIST</p>
          <h1>Hi, I’m Srikanth Naik Banoth.</h1>
          <p className="hero-text">
            I build reliable data pipelines and practical data products with
            Python, SQL, cloud tools, and automation.
          </p>

          <div className="buttons">
            <a className="button primary" href="#projects">View Projects</a>
            <a
              className="button secondary"
              href="https://github.com/srikanthnaikbanoth"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>
          </div>
        </section>

        <section id="about" className="section">
          <p className="section-label">ABOUT ME</p>
          <h2>Turning raw data into dependable systems.</h2>
          <p>
            I am a Data Science graduate from EPITA Paris, focused on data
            engineering, ETL pipelines, cloud services, and automation. I am
            currently seeking data engineering and data-focused roles in France.
          </p>
        </section>

        <section id="skills" className="section">
          <p className="section-label">TECHNICAL SKILLS</p>
          <div className="skills">
            {[
              "Python",
              "SQL",
              "PostgreSQL",
              "Apache Airflow",
              "Apache Spark",
              "Docker",
              "AWS",
              "FastAPI",
              "Git & GitHub",
              "Grafana",
            ].map((skill) => (
              <span key={skill}>{skill}</span>
            ))}
          </div>
        </section>

        <section id="projects" className="section">
          <p className="section-label">FEATURED PROJECTS</p>
          <div className="project-grid">
            {projects.map((project) => (
              <article className="project-card" key={project.title}>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="tags">
                  {project.stack.map((item) => (
                    <span key={item}>{item}</span>
                  ))}
                </div>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                >
                  View on GitHub →
                </a>
              </article>
            ))}
          </div>
        </section>

        <section id="contact" className="section contact">
          <p className="section-label">CONTACT</p>
          <h2>Let’s build something useful.</h2>
          <p>Open to data engineering, data analyst, and data science opportunities.</p>
          <a className="button primary" href="mailto:banothsrikantnaik@gmail.com">
            Email Me
          </a>
        </section>
      </main>

      <footer>
        © 2026 Srikanth Naik Banoth · Built with React and GitHub Pages
      </footer>
    </>
  );
}

export default App;
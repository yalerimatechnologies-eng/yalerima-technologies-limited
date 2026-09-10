export default function ProjectsPreview() {
  return (
    <section
      className="section projects-section"
      id="projects"
    >
      <div className="container">
        <div className="section-label light">
          SELECTED WORK
        </div>

        <div className="projects-heading">
          <h2>
            Ideas become
            <br />
            <em>working products.</em>
          </h2>

          <p>
            Our projects are built to solve specific
            problems. Explore the platforms and
            systems delivered by Yalerima Technologies.
          </p>
        </div>

        <div className="project-feature">
          <div className="project-visual">
            <div className="project-visual-overlay" />

            <div className="project-visual-label">
              <span>TECHNOLOGY PROJECTS</span>
              <strong>REAL WORK · REAL SYSTEMS</strong>
            </div>
          </div>

          <div className="project-content">
            <div className="project-index">
              PORTFOLIO / PROJECTS
            </div>

            <h3>
              Digital solutions
              <br />
              designed around
              <br />
              <em>people.</em>
            </h3>

            <p>
              Explore websites, applications,
              management platforms and business
              systems developed for organisations
              across different sectors.
            </p>

            <a
              href="/projects.html"
              className="project-link"
            >
              View All Projects
              <span aria-hidden="true">↗</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

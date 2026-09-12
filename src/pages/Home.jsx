import { useEffect, useState } from "react";
import "./home-redesign.css";

const HERO_IMAGES = [
  "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=2200&q=85",
  "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=2200&q=85",
  "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=2200&q=85",
  "https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=2200&q=85",
  "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=2200&q=85",
];

const SERVICES = [
  {
    number: "01",
    title: "Custom Applications",
    text: "Purpose-built web and business applications designed around the exact workflow, users and objectives of an organisation.",
    image:
      "https://images.unsplash.com/photo-1551650975-87deedd944c3?auto=format&fit=crop&w=1200&q=82",
    tags: ["Web Apps", "Business Apps", "Custom Software"],
  },
  {
    number: "02",
    title: "Real Estate Management",
    text: "Property and real estate management platforms for properties, tenants, payments, records, maintenance, reporting and daily operations.",
    image:
      "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=1200&q=82",
    tags: ["Properties", "Tenants", "Payments"],
  },
  {
    number: "03",
    title: "Hospital & Clinic Systems",
    text: "Digital management platforms for hospitals and clinics, covering patient information, appointments, staff, departments and operational records.",
    image:
      "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=1200&q=82",
    tags: ["Hospital", "Clinic", "Patients"],
  },
  {
    number: "04",
    title: "Medical Records",
    text: "Structured medical record and healthcare information systems that help organisations manage patient data and operational information more effectively.",
    image:
      "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1200&q=82",
    tags: ["Records", "Healthcare", "Data"],
  },
  {
    number: "05",
    title: "Islamic & Herbal Medicine",
    text: "Management platforms for Islamic and herbal medicine organisations, practitioners, centres and related service operations.",
    image:
      "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&w=1200&q=82",
    tags: ["Medicine", "Management", "Platforms"],
  },
  {
    number: "06",
    title: "Islamic School Platforms",
    text: "Digital platforms for Islamic schools and educational organisations, helping manage students, teachers, classes, records and administration.",
    image:
      "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=1200&q=82",
    tags: ["Schools", "Students", "Education"],
  },
  {
    number: "07",
    title: "Education Systems",
    text: "Education management software for institutions that need organised student records, academic workflows, administration and digital services.",
    image:
      "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=1200&q=82",
    tags: ["Education", "Records", "Administration"],
  },
  {
    number: "08",
    title: "Business Management",
    text: "Digital tools and management systems that bring business operations, information, workflows and reporting into one organised environment.",
    image:
      "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=1200&q=82",
    tags: ["Business", "Operations", "Reports"],
  },
];

const SECTORS = [
  "Technology",
  "Healthcare",
  "Real Estate",
  "Education",
  "Islamic Education",
  "Business",
];

export default function Home() {
  const [heroImage, setHeroImage] = useState(0);
  const [activeService, setActiveService] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setHeroImage((current) => (current + 1) % HERO_IMAGES.length);
    }, 6000);

    return () => window.clearInterval(timer);
  }, []);

  useEffect(() => {
    const updateTheme = () => {
      const html = document.documentElement;
      const body = document.body;

      const dark =
        html.dataset.theme === "dark" ||
        body.dataset.theme === "dark" ||
        html.classList.contains("dark") ||
        body.classList.contains("dark") ||
        html.classList.contains("dark-mode") ||
        body.classList.contains("dark-mode");

      const light =
        html.dataset.theme === "light" ||
        body.dataset.theme === "light" ||
        html.classList.contains("light") ||
        body.classList.contains("light") ||
        html.classList.contains("light-mode") ||
        body.classList.contains("light-mode");

      const root = document.querySelector(".yl-home");

      if (root) {
        root.dataset.ylTheme = dark && !light ? "dark" : "light";
      }
    };

    updateTheme();

    const observer = new MutationObserver(updateTheme);

    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class", "data-theme"],
    });

    observer.observe(document.body, {
      attributes: true,
      attributeFilter: ["class", "data-theme"],
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="yl-home">
      {/* =========================================================
          HERO
      ========================================================== */}
      <section className="yl-hero" id="home">
        <div className="yl-hero-backgrounds" aria-hidden="true">
          {HERO_IMAGES.map((image, index) => (
            <div
              key={image}
              className={`yl-hero-background ${
                index === heroImage ? "is-active" : ""
              }`}
              style={{ backgroundImage: `url("${image}")` }}
            />
          ))}
        </div>

        <div className="yl-hero-overlay" />

        <div className="yl-hero-grid" aria-hidden="true" />

        <div className="yl-hero-content">
          <div className="yl-hero-label">
            <span className="yl-label-line" />
            <span>YALERIMA TECHNOLOGIES LIMITED</span>
          </div>

          <div className="yl-hero-main">
            <p className="yl-eyebrow">
              SOFTWARE · SYSTEMS · DIGITAL PLATFORMS
            </p>

            <h1>
              Technology
              <br />
              <span>that works.</span>
            </h1>

            <p className="yl-hero-description">
              We build applications, real estate management systems,
              hospital and clinic management platforms, medical record
              systems, Islamic school platforms, education systems,
              business software and digital solutions designed for
              real organisations and real work.
            </p>

            <div className="yl-hero-actions">
              <a href="/message.html" className="yl-pill-button yl-pill-primary">
                <span>Talk to Us</span>
                <span className="yl-button-arrow">↗</span>
              </a>

              <a
                href="#services"
                className="yl-pill-button yl-pill-secondary"
              >
                <span>See Our Services</span>
                <span className="yl-button-arrow">↓</span>
              </a>
            </div>
          </div>

          <div className="yl-hero-bottom">
            <div className="yl-hero-sectors">
              {SECTORS.map((sector) => (
                <span key={sector}>{sector}</span>
              ))}
            </div>

            <div className="yl-hero-counter">
              <span>{String(heroImage + 1).padStart(2, "0")}</span>
              <span className="yl-counter-divider" />
              <span>{String(HERO_IMAGES.length).padStart(2, "0")}</span>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          INTRODUCTION
      ========================================================== */}
      <section className="yl-intro" id="about">
        <div className="yl-container">
          <div className="yl-section-marker">
            <span>01</span>
            <span className="yl-red-line" />
            <span>WHAT WE DO</span>
          </div>

          <div className="yl-intro-grid">
            <div className="yl-intro-title">
              <h2>
                We don't just
                <br />
                build websites.
                <br />
                <em>We build systems.</em>
              </h2>
            </div>

            <div className="yl-intro-copy">
              <p className="yl-large-copy">
                YALERIMA TECHNOLOGIES LIMITED creates practical digital
                technology for organisations that need more than a simple
                online presence.
              </p>

              <p>
                From a custom application to a complete management
                platform, we combine interface design, software
                development, structured information and business
                workflows to create technology people can actually use.
              </p>

              <p>
                Our work covers healthcare, real estate, education,
                Islamic education, medicine, business operations and
                digital services.
              </p>

              <a href="/message.html" className="yl-text-link">
                DISCUSS YOUR IDEA
                <span>↗</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          SERVICES
      ========================================================== */}
      <section className="yl-services" id="services">
        <div className="yl-container">
          <div className="yl-section-heading">
            <div>
              <div className="yl-section-marker">
                <span>02</span>
                <span className="yl-red-line" />
                <span>OUR SERVICES</span>
              </div>

              <h2>
                Digital systems
                <br />
                <em>for real operations.</em>
              </h2>
            </div>

            <p>
              We build technology around the actual work an organisation
              needs to perform — not technology for technology's sake.
            </p>
          </div>

          <div className="yl-services-layout">
            <div className="yl-services-list">
              {SERVICES.map((service, index) => (
                <button
                  key={service.number}
                  type="button"
                  className={`yl-service-row ${
                    activeService === index ? "is-active" : ""
                  }`}
                  onMouseEnter={() => setActiveService(index)}
                  onFocus={() => setActiveService(index)}
                  onClick={() => setActiveService(index)}
                >
                  <span className="yl-service-number">
                    {service.number}
                  </span>

                  <span className="yl-service-name">
                    {service.title}
                  </span>

                  <span className="yl-service-arrow">↗</span>
                </button>
              ))}
            </div>

            <div className="yl-service-feature">
              {SERVICES.map((service, index) => (
                <article
                  key={service.number}
                  className={`yl-service-feature-card ${
                    activeService === index ? "is-active" : ""
                  }`}
                >
                  <div
                    className="yl-service-image"
                    style={{
                      backgroundImage: `url("${service.image}")`,
                    }}
                  />

                  <div className="yl-service-image-shade" />

                  <div className="yl-service-feature-content">
                    <span>{service.number}</span>

                    <h3>{service.title}</h3>

                    <p>{service.text}</p>

                    <div className="yl-service-tags">
                      {service.tags.map((tag) => (
                        <span key={tag}>{tag}</span>
                      ))}
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          HEALTHCARE / REAL ESTATE FEATURE
      ========================================================== */}
      <section className="yl-feature-band" id="projects">
        <div className="yl-feature-image">
          <img
            src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=1800&q=85"
            alt="Modern healthcare technology environment"
            loading="lazy"
          />
        </div>

        <div className="yl-feature-overlay" />

        <div className="yl-container yl-feature-container">
          <div className="yl-feature-content">
            <span className="yl-feature-kicker">
              SOFTWARE FOR ORGANISATIONS
            </span>

            <h2>
              From healthcare
              <br />
              to <em>real estate.</em>
            </h2>

            <p>
              The systems we create are designed to organise information,
              simplify workflows and give organisations a clearer way to
              operate.
            </p>

            <div className="yl-feature-points">
              <div>
                <strong>Healthcare</strong>
                <span>Patients · Records · Clinics · Operations</span>
              </div>

              <div>
                <strong>Real Estate</strong>
                <span>Properties · Tenants · Payments · Management</span>
              </div>

              <div>
                <strong>Education</strong>
                <span>Students · Teachers · Classes · Administration</span>
              </div>
            </div>

            <a href="/projects.html" className="yl-pill-button yl-pill-light">
              <span>See Our Projects</span>
              <span className="yl-button-arrow">↗</span>
            </a>
          </div>
        </div>
      </section>

      {/* =========================================================
          APPROACH
      ========================================================== */}
      <section className="yl-approach" id="why">
        <div className="yl-container">
          <div className="yl-section-marker">
            <span>03</span>
            <span className="yl-red-line" />
            <span>OUR APPROACH</span>
          </div>

          <div className="yl-approach-grid">
            <div>
              <h2>
                Good technology
                <br />
                should feel
                <br />
                <em>natural.</em>
              </h2>
            </div>

            <div className="yl-approach-steps">
              <div className="yl-approach-step">
                <span>01</span>
                <div>
                  <h3>Understand</h3>
                  <p>
                    We first understand the organisation, the people,
                    the workflow and the problem the system needs to solve.
                  </p>
                </div>
              </div>

              <div className="yl-approach-step">
                <span>02</span>
                <div>
                  <h3>Design</h3>
                  <p>
                    We shape the experience, information structure and
                    interface around the people who will actually use it.
                  </p>
                </div>
              </div>

              <div className="yl-approach-step">
                <span>03</span>
                <div>
                  <h3>Build</h3>
                  <p>
                    We develop the software and connect the different
                    parts into a practical working system.
                  </p>
                </div>
              </div>

              <div className="yl-approach-step">
                <span>04</span>
                <div>
                  <h3>Improve</h3>
                  <p>
                    Technology should evolve with the organisation.
                    We leave room for future improvements and expansion.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          BUSINESS SYSTEMS
      ========================================================== */}
      <section className="yl-systems">
        <div className="yl-container">
          <div className="yl-systems-header">
            <div>
              <span>BUILT AROUND THE WORK</span>
              <h2>
                One technology
                <br />
                partner. <em>Many possibilities.</em>
              </h2>
            </div>

            <p>
              Whether the requirement is a management system, a digital
              platform, a specialised application or a complete business
              workflow, our focus remains the same: useful technology.
            </p>
          </div>

          <div className="yl-system-grid">
            <div className="yl-system-card yl-system-card-red">
              <span>APPLICATIONS</span>
              <strong>Custom software</strong>
              <p>
                Applications designed specifically around your organisation.
              </p>
              <i>↗</i>
            </div>

            <div className="yl-system-card">
              <span>MANAGEMENT</span>
              <strong>Organised operations</strong>
              <p>
                Centralise information, records, workflows and reporting.
              </p>
              <i>↗</i>
            </div>

            <div className="yl-system-card">
              <span>PLATFORMS</span>
              <strong>Connected services</strong>
              <p>
                Build a digital environment that brings important services
                together.
              </p>
              <i>↗</i>
            </div>

            <div className="yl-system-card">
              <span>DATA</span>
              <strong>Better information</strong>
              <p>
                Structure information so teams can work with greater clarity.
              </p>
              <i>↗</i>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          FINAL CTA
      ========================================================== */}
      <section className="yl-final-cta" id="contact">
        <div className="yl-cta-glow" />

        <div className="yl-container">
          <div className="yl-section-marker yl-marker-light">
            <span>04</span>
            <span className="yl-red-line" />
            <span>START SOMETHING</span>
          </div>

          <div className="yl-final-grid">
            <div>
              <h2>
                Have a system
                <br />
                in mind?
                <br />
                <em>Let's build it.</em>
              </h2>
            </div>

            <div className="yl-final-copy">
              <p>
                Tell us what you are trying to build, improve or organise.
                We can help turn the idea into a practical digital solution.
              </p>

              <div className="yl-final-actions">
                <a
                  href="/message.html"
                  className="yl-pill-button yl-pill-primary yl-pill-large"
                >
                  <span>Talk to Us</span>
                  <span className="yl-button-arrow">↗</span>
                </a>

                <a
                  href="/projects.html"
                  className="yl-pill-button yl-pill-outline-light yl-pill-large"
                >
                  <span>See Our Projects</span>
                  <span className="yl-button-arrow">→</span>
                </a>
              </div>
            </div>
          </div>

          <div className="yl-cta-bottom">
            <span>YALERIMA TECHNOLOGIES LIMITED</span>
            <span>SOFTWARE · SYSTEMS · DIGITAL PLATFORMS</span>
          </div>
        </div>
      </section>
    </div>
  );
}

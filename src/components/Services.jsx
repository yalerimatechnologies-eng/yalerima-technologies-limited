const services = [
  {
    number: "01",
    category: "APPLICATIONS",
    title: "Application Development",
    description:
      "Purpose-built web and mobile applications designed around the way your organisation actually works."
  },
  {
    number: "02",
    category: "DIGITAL",
    title: "Web & Digital Platforms",
    description:
      "Fast, responsive and search-ready websites that give organisations a serious digital presence."
  },
  {
    number: "03",
    category: "EDUCATION",
    title: "School Management Systems",
    description:
      "Complete digital systems for schools, including Islamic institutions, administration and academic operations."
  },
  {
    number: "04",
    category: "PROPERTY",
    title: "Real Estate Management Systems",
    description:
      "Professional property, client, tenancy and operational management solutions for real estate organisations."
  },
  {
    number: "05",
    category: "HEALTHCARE",
    title: "Islamic & Herbal Medicine Systems",
    description:
      "Digital management platforms designed around the specific needs of Islamic and herbal healthcare practices."
  },
  {
    number: "06",
    category: "HEALTH",
    title: "Hospital & Clinic Systems",
    description:
      "Structured digital platforms for patient, staff, appointments, records and day-to-day healthcare operations."
  }
];

export default function Services() {
  return (
    <section
      className="section services-section"
      id="services"
    >
      <div className="container">
        <div className="section-heading split-heading">
          <div>
            <div className="section-label">
              WHAT WE BUILD
            </div>

            <h2>
              Digital systems with
              <br />
              <em>purpose.</em>
            </h2>
          </div>

          <p>
            We don't believe technology should be
            complicated for the people using it.
            Our solutions are built around real
            workflows, real organisations and real
            African conditions.
          </p>
        </div>

        <div className="service-list">
          {services.map((service) => (
            <article
              className="service-item"
              key={service.number}
            >
              <div className="service-no">
                {service.number}
              </div>

              <div className="service-main">
                <span>{service.category}</span>

                <h3>{service.title}</h3>
              </div>

              <p>{service.description}</p>

              <a href="/message.html">
                Explore service
                <b aria-hidden="true">↗</b>
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

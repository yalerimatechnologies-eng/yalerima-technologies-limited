export default function WhyYalerima() {
  return (
    <section
      className="section why-section"
      id="about"
    >
      <div className="container why-grid">
        <div
          className="why-visual"
          aria-hidden="true"
        >
          <div className="orbit orbit-one" />
          <div className="orbit orbit-two" />
          <div className="orbit orbit-three" />

          <div className="why-core">
            <img
              src="/logo.png"
              alt=""
            />
          </div>
        </div>

        <div className="why-copy">
          <div className="section-label">
            WHY YALERIMA
          </div>

          <h2>
            Built here.
            <br />
            <em>Ready for anywhere.</em>
          </h2>

          <p>
            Yalerima Technologies Limited is a
            technology company focused on creating
            practical digital solutions for businesses,
            institutions and organisations.
          </p>

          <p>
            Our approach combines thoughtful design,
            dependable engineering and an understanding
            of the environments in which our clients
            operate.
          </p>

          <div className="why-points">
            <div>
              <b>01</b>
              <strong>Human-centred</strong>
              <span>
                Technology designed around the people
                using it.
              </span>
            </div>

            <div>
              <b>02</b>
              <strong>Performance-focused</strong>
              <span>
                Fast, stable and dependable digital
                experiences.
              </span>
            </div>

            <div>
              <b>03</b>
              <strong>Built to grow</strong>
              <span>
                Systems prepared for changing
                organisational needs.
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

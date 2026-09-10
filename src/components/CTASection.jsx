export default function CTASection() {
  return (
    <section className="cta-section">
      <div className="container">
        <div className="section-label light">
          START A CONVERSATION
        </div>

        <h2>
          Have a problem worth
          <br />
          <em>solving?</em>
        </h2>

        <p>
          Tell us what you are trying to build.
          We will help you turn the idea into a
          clear digital solution.
        </p>

        <div className="cta-actions">
          <a href="/message.html">
            Send us a message
            <span aria-hidden="true">↗</span>
          </a>

          <a
            href="tel:+2349115311509"
            className="dark-action"
          >
            Call Yalerima
            <span aria-hidden="true">↗</span>
          </a>
        </div>

        <div className="cta-contact">
          <span>
            yalerimatechnologies@gmail.com
          </span>

          <span>
            +234 911 531 1509
          </span>

          <span>
            Abuja · Maiduguri · Nigeria
          </span>
        </div>
      </div>
    </section>
  );
}

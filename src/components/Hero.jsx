export default function Hero() {
  return (
    <section className="hero" id="home">
      <video
        className="hero-media"
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        poster="https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=1600"
      >
        <source
          src="/be.mp4"
          type="video/mp4"
        />

        <source
          src="https://videos.pexels.com/video-files/3861969/3861969-hd_1920_1080_25fps.mp4"
          type="video/mp4"
        />
      </video>

      <div className="hero-shade" />

      <div className="hero-inner">
        <div className="hero-copy">
          <div className="hero-kicker">
            <span />
            AFRICA · TECHNOLOGY · POSSIBILITY
          </div>

          <h1>
            Technology built for
            <br />
            <em>real businesses.</em>
          </h1>

          <p>
            We design and develop intelligent digital
            products, business systems and software
            solutions that help African organisations
            operate better, serve people better and
            grow with confidence.
          </p>

          <div className="hero-actions">
            <a
              href="/message.html"
              className="primary-button"
            >
              Start a Project
              <span aria-hidden="true">↗</span>
            </a>

            <a
              href="/projects.html"
              className="outline-button"
            >
              Explore Our Work
            </a>
          </div>

          <div className="hero-trust">
            <span>APPLICATIONS</span>
            <i />
            <span>DIGITAL PLATFORMS</span>
            <i />
            <span>BUSINESS SYSTEMS</span>
          </div>
        </div>
      </div>

      <div className="hero-bottom">
        <span>Scroll to explore</span>
        <div className="scroll-line" />
      </div>
    </section>
  );
}

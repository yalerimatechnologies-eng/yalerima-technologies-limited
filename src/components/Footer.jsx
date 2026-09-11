function FacebookIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M13.5 21v-8h2.7l.4-3h-3.1V8.1c0-.9.3-1.5 1.6-1.5h1.7V4c-.3 0-1.4-.1-2.5-.1-2.5 0-4.2 1.5-4.2 4.3V10H7.3v3h2.8v8h3.4Z" />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <rect x="3.5" y="3.5" width="17" height="17" rx="4.5" />
      <circle cx="12" cy="12" r="4" />
      <circle
        cx="17.6"
        cy="6.7"
        r="1"
        className="icon-fill"
      />
    </svg>
  );
}

function XIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M5 4h3.8l4.1 5.4L17.4 4H19l-5.4 6.4L19.4 20h-3.8l-4.4-5.8L6.6 20H5l5.5-6.5L5 4Zm2.6 1.4 8.6 13.2h1L8.6 5.4h-1Z" />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M5.1 8.3H2V20h3.1V8.3ZM3.6 3A1.9 1.9 0 1 0 3.6 6.8 1.9 1.9 0 0 0 3.6 3ZM21.9 13.3c0-3.5-1.9-5.1-4.5-5.1-2.1 0-3.1 1.2-3.6 2v-1.9h-3.1V20h3.1v-6.2c0-1.6.3-3.1 2.2-3.1 1.8 0 1.8 1.7 1.8 3.2V20h3.1v-6.7Z" />
    </svg>
  );
}

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <img
              src="/logo.png"
              alt="Yalerima Technologies Limited"
            />

            <div>
              <strong>
                YALERIMA TECHNOLOGIES LIMITED
              </strong>

              <p>
                Building practical digital solutions
                for ambitious organisations across
                Africa.
              </p>

              <div className="footer-socials">
                <a
                  href="https://www.facebook.com/share/1UiQrDN5CG/"
                  aria-label="Facebook"
                  title="Facebook"
                >
                  <FacebookIcon />
                </a>

                <a
                  href="https://www.instagram.com/yalerimatechnologieslimited?stkn=MXA5OTd5eXNzYmJtYg=="
                  aria-label="Instagram"
                  title="Instagram"
                >
                  <InstagramIcon />
                </a>

                <a
                  href="https://x.com/alarabii001"
                  aria-label="X"
                  title="X"
                >
                  <XIcon />
                </a>

                <a
                  href="#"
                  aria-label="LinkedIn"
                  title="LinkedIn"
                >
                  <LinkedInIcon />
                </a>
              </div>
            </div>
          </div>

          <div>
            <h4>EXPLORE</h4>

            <div className="footer-links">
              <a href="#home">Home</a>
              <a href="#services">Our Services</a>
              <a href="/projects.html">Projects</a>
              <a href="#about">About Us</a>
              <a href="/message.html">Contact</a>
              <a href="/admin-system/login.html">
                Admin Portal
              </a>
              <a href="/privacy-policy.html">
                Privacy Policy
              </a>
              <a href="/terms-and-conditions.html">
                Terms &amp; Conditions
              </a>
            </div>
          </div>

          <div>
            <h4>CONTACT</h4>

            <div className="footer-links">
              <a href="mailto:yalerimatechnologies@gmail.com">
                Email us
              </a>

              <a href="tel:+2349115311509">
                +234 911 531 1509
              </a>

              <a href="tel:+2347074383791">
                +234 707 438 3791
              </a>

              <span>Garki, Abuja</span>
              <span>Damboa Road, Maiduguri</span>
              <span>Nigeria</span>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <span>
            © 2026 YALERIMA TECHNOLOGIES LIMITED
          </span>

          <span>
            Designed &amp; engineered in Nigeria
          </span>
        </div>
      </div>
    </footer>
  );
}

import { useEffect, useState } from "react";

export default function PageLoader() {
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    const timer = window.setTimeout(() => setHidden(true), 1100);
    return () => window.clearTimeout(timer);
  }, []);

  return (
    <div
      className={`page-loader ${hidden ? "page-loader-hidden" : ""}`}
      aria-hidden="true"
    >
      <div className="loader-content">
        <div className="loader-ring">
          <span />
          <i />
        </div>

        <div className="loader-logo">
          <img
            src="/logo.png"
            alt="Yalerima Technologies Limited"
          />
        </div>

        <div className="loader-name">
          YALERIMA TECHNOLOGIES LIMITED
        </div>

        <div className="loader-caption">
          Digital solutions for real organisations
        </div>
      </div>
    </div>
  );
}

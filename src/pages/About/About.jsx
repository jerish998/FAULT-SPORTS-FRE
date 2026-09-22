import React from "react";

const About = () => {
  return (
    <div className="about-page">
      {/* Hero Section */}
      <section className="about-hero">
        <div className="container">
          <span className="about-badge">About Us</span>

          <h1>
            Building simple solutions for
            <span> modern problems.</span>
          </h1>

          <p>
            We are focused on creating reliable, intuitive, and
            user-friendly digital experiences that make everyday tasks
            simpler and more efficient.
          </p>
        </div>
      </section>

      {/* About Section */}
      <section className="about-content">
        <div className="container about-grid">
          <div>
            <h2>Who We Are</h2>

            <p>
              Our application is designed with simplicity, performance,
              and usability in mind. We believe technology should solve
              problems without making things unnecessarily complicated.
            </p>

            <p>
              From the user interface to the underlying technology,
              every part of the application is built to provide a
              smooth and dependable experience.
            </p>
          </div>

          <div className="about-card">
            <h3>Our Mission</h3>

            <p>
              To build practical software that helps people accomplish
              more with less effort.
            </p>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features-section">
        <div className="container">
          <div className="section-heading">
            <span>What We Focus On</span>
            <h2>Designed with purpose</h2>
          </div>

          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">⚡</div>
              <h3>Performance</h3>
              <p>
                Fast and responsive experiences designed to keep your
                workflow moving.
              </p>
            </div>

            <div className="feature-card">
              <div className="feature-icon">🔒</div>
              <h3>Security</h3>
              <p>
                We take security seriously and follow responsible
                practices when handling application data.
              </p>
            </div>

            <div className="feature-card">
              <div className="feature-icon">✨</div>
              <h3>Simplicity</h3>
              <p>
                Clean interfaces and straightforward workflows that
                are easy to understand and use.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Technology Section */}
      <section className="technology-section">
        <div className="container">
          <h2>Built with modern technology</h2>

          <p>
            Our application uses modern technologies and development
            practices to deliver a maintainable, scalable, and reliable
            platform.
          </p>

          <div className="tech-list">
            <span>React</span>
            <span>JavaScript</span>
            <span>REST API</span>
            <span>Modern Web Technologies</span>
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="about-cta">
        <div className="container">
          <h2>Thanks for being here.</h2>

          <p>
            We are continuously improving the application and building
            new features to make your experience better.
          </p>

          <button onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
            Get Started
          </button>
        </div>
      </section>
    </div>
  );
};

export default About;

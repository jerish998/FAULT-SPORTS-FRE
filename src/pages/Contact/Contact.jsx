
import React, { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // TODO: Send formData to your API
    console.log("Contact form submitted:", formData);

    alert("Thank you! Your message has been sent.");

    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
  };

  return (
    <div className="contact-page">
      {/* Hero */}
      <section className="contact-hero">
        <div className="container">
          <span className="contact-badge">Contact Us</span>

          <h1>
            We'd love to
            <span> hear from you.</span>
          </h1>

          <p>
            Have a question, feedback, or need help? Send us a message
            and we'll get back to you as soon as possible.
          </p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="contact-content">
        <div className="container contact-grid">
          {/* Contact Information */}
          <div className="contact-info">
            <h2>Get in touch</h2>

            <p className="contact-description">
              Whether you have a question about the application, need
              assistance, or simply want to share your feedback, we're
              here to help.
            </p>

            <div className="contact-details">
              <div className="contact-detail">
                <div className="contact-icon">✉️</div>

                <div>
                  <h3>Email</h3>
                  <p>support@example.com</p>
                </div>
              </div>

              <div className="contact-detail">
                <div className="contact-icon">📞</div>

                <div>
                  <h3>Phone</h3>
                  <p>+91 98765 43210</p>
                </div>
              </div>

              <div className="contact-detail">
                <div className="contact-icon">📍</div>

                <div>
                  <h3>Address</h3>
                  <p>
                    123 Main Street
                    <br />
                    Kerala, India
                  </p>
                </div>
              </div>
            </div>

            <div className="contact-hours">
              <h3>Business Hours</h3>

              <p>Monday – Friday: 9:00 AM – 6:00 PM</p>
              <p>Saturday: 10:00 AM – 2:00 PM</p>
              <p>Sunday: Closed</p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="contact-form-card">
            <h2>Send us a message</h2>

            <form onSubmit={handleSubmit}>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="name">Name</label>

                  <input
                    id="name"
                    type="text"
                    name="name"
                    placeholder="Your name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="email">Email</label>

                  <input
                    id="email"
                    type="email"
                    name="email"
                    placeholder="you@example.com"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="subject">Subject</label>

                <input
                  id="subject"
                  type="text"
                  name="subject"
                  placeholder="How can we help?"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="message">Message</label>

                <textarea
                  id="message"
                  name="message"
                  rows="6"
                  placeholder="Write your message..."
                  value={formData.message}
                  onChange={handleChange}
                  required
                />
              </div>

              <button type="submit" className="submit-button">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* FAQ / Help Section */}
      <section className="contact-help">
        <div className="container">
          <h2>Need help?</h2>

          <p>
            Check our documentation or reach out to our support team if
            you need assistance with the application.
          </p>

          <div className="help-actions">
            <button
              onClick={() => {
                window.location.href = "/documentation";
              }}
            >
              View Documentation
            </button>

            <button
              className="secondary-button"
              onClick={() => {
                window.location.href = "mailto:support@example.com";
              }}
            >
              Email Support
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;

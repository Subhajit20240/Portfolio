import React, { useState, useRef, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Tilt from "react-parallax-tilt";
import {
  Mail,
  MapPin,
  Phone,
  Code2,
  Server,
  Database,
  Wrench,
  CheckCircle2,
  Award,
  GraduationCap,
  Send,
} from "lucide-react";

const Github = ({ size = 24 }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.03c3.15-.38 6.5-1.4 6.5-7.17a5.2 5.2 0 0 0-1.5-3.8 5.3 5.3 0 0 0-.15-3.8s-1.18-.38-3.9 1.47a13.3 13.3 0 0 0-7 0C5.18 2.5 4 2.9 4 2.9a5.3 5.3 0 0 0-.15 3.8A5.2 5.2 0 0 0 2.3 10.5c0 5.77 3.35 6.78 6.5 7.17A4.8 4.8 0 0 0 8 20.8V22"></path>
  </svg>
);

const Linkedin = ({ size = 24 }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
    <rect x="2" y="9" width="4" height="12"></rect>
    <circle cx="4" cy="4" r="2"></circle>
  </svg>
);
import "./App.css";
import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import { Typewriter } from "react-simple-typewriter";

function App() {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const formRef = useRef();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  // Initialize form state
  useEffect(() => {
    // No initialization needed for FormSubmit approach
  }, []);

  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch("https://formspree.io/f/mykvnvgn", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message,
        }),
      });

      if (response.ok) {
        setSubmitted(true);
        setFormData({ name: "", email: "", message: "" });
        setTimeout(() => setSubmitted(false), 4000);
      } else {
        throw new Error("Form submission failed");
      }
    } catch (error) {
      console.error("Failed to send message:", error);
      alert("Failed to send message. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="app-container">
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={{
          background: { color: { value: "transparent" } },
          fpsLimit: 120,
          interactivity: {
            events: {
              onHover: { enable: true, mode: "grab" },
              resize: true,
            },
            modes: { grab: { distance: 140, links: { opacity: 0.5 } } },
          },
          particles: {
            color: { value: ["#38bdf8", "#e879f9", "#818cf8"] },
            links: {
              color: "#ffffff",
              distance: 150,
              enable: true,
              opacity: 0.1,
              width: 1,
            },
            move: {
              direction: "none",
              enable: true,
              outModes: { default: "bounce" },
              random: false,
              speed: 1.5,
              straight: false,
            },
            number: { density: { enable: true, area: 800 }, value: 60 },
            opacity: { value: 0.5 },
            shape: { type: "circle" },
            size: { value: { min: 1, max: 3 } },
          },
          detectRetina: true,
        }}
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          zIndex: -5,
        }}
      />
      {/* Background Ornaments */}
      <motion.div style={{ y }} className="blob blob-1" />
      <motion.div
        style={{ y: useTransform(scrollYProgress, [0, 1], ["0%", "-50%"]) }}
        className="blob blob-2"
      />

      <div className="container">
        {/* Navigation */}
        <header>
          <div
            className="logo glow-text"
            style={{ fontSize: "1.5rem", fontWeight: "bold" }}
          >
            SM.
          </div>
          <nav className="nav-links">
            <a href="#about" className="nav-link">
              About
            </a>
            <a href="#skills" className="nav-link">
              Skills
            </a>
            <a href="#projects" className="nav-link">
              Projects
            </a>
            <a href="#education" className="nav-link">
              Education
            </a>
            <a href="#contact" className="nav-link">
              Contact
            </a>
          </nav>
        </header>

        {/* Hero Section */}
        <section className="hero" id="about">
          <div className="hero-wrapper">
            <motion.div
              className="hero-content"
              initial="hidden"
              animate="visible"
              variants={staggerContainer}
            >
              <motion.h1 className="hero-title" variants={fadeIn}>
                Hi, I'm <span className="gradient-text">Subhajit Mondal</span>
              </motion.h1>
              <motion.h2 className="hero-subtitle" variants={fadeIn}>
                <Typewriter
                  words={[
                    "Pre-final year B.Tech CSE student.",
                    "Passionate about Full Stack Web Development.",
                    "Building scalable and premium web applications.",
                  ]}
                  loop={true}
                  cursor
                  cursorStyle="|"
                  typeSpeed={50}
                  deleteSpeed={30}
                  delaySpeed={2000}
                />
              </motion.h2>

              <motion.div className="contact-info" variants={fadeIn}>
                <div className="contact-item">
                  <MapPin size={18} /> Durgapur, West Bengal
                </div>
                <a
                  href="mailto:subhajit4582@gmail.com"
                  className="contact-item"
                >
                  <Mail size={18} /> subhajit4582@gmail.com
                </a>
                <a href="tel:+917508585976" className="contact-item">
                  <Phone size={18} /> +91 7508585976
                </a>
              </motion.div>

              <motion.div className="social-links" variants={fadeIn}>
                <a
                  href="https://github.com/Subhajit20240"
                  target="_blank"
                  rel="noreferrer"
                  className="social-btn"
                >
                  <Github size={20} />
                </a>
                <a
                  href="https://linkedin.com/in/subhajit-mondal-574086296/"
                  target="_blank"
                  rel="noreferrer"
                  className="social-btn"
                >
                  <Linkedin size={20} />
                </a>
              </motion.div>
            </motion.div>

            <motion.div
              className="hero-photo-container"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            >
              {/* Floating Tech Orbs */}
              <motion.div
                className="orbit-icon"
                style={{
                  top: "10%",
                  left: "-5%",
                  position: "absolute",
                  zIndex: 20,
                }}
                animate={{ y: [0, -20, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
              >
                <div className="icon-glass">
                  <Code2 color="#38bdf8" />
                </div>
              </motion.div>
              <motion.div
                className="orbit-icon"
                style={{
                  top: "40%",
                  right: "-15%",
                  position: "absolute",
                  zIndex: 20,
                }}
                animate={{ y: [0, 20, 0] }}
                transition={{ duration: 5, repeat: Infinity }}
              >
                <div className="icon-glass">
                  <Server color="#e879f9" />
                </div>
              </motion.div>
              <motion.div
                className="orbit-icon"
                style={{
                  bottom: "10%",
                  left: "-10%",
                  position: "absolute",
                  zIndex: 20,
                }}
                animate={{ y: [0, -15, 0] }}
                transition={{ duration: 4.5, repeat: Infinity }}
              >
                <div className="icon-glass">
                  <Database color="#818cf8" />
                </div>
              </motion.div>

              <Tilt
                className="tilt-component"
                perspective={1000}
                glareEnable={true}
                glareMaxOpacity={0.3}
                scale={1.05}
                transitionSpeed={2500}
                tiltMaxAngleX={15}
                tiltMaxAngleY={15}
              >
                <div className="photo-glow" />
                <img
                  src="/profile.png"
                  alt="Subhajit Mondal"
                  className="hero-photo"
                />
              </Tilt>
            </motion.div>
          </div>
        </section>

        {/* Technical Skills Section */}
        <section className="section" id="skills">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            <motion.h3 className="section-title" variants={fadeIn}>
              Technical Arsenal
            </motion.h3>
            <div className="skills-grid">
              <Tilt
                className="skill-card-tilt"
                perspective={1500}
                scale={1.05}
                transitionSpeed={2000}
              >
                <motion.div
                  className="skill-card glass-panel"
                  variants={fadeIn}
                >
                  <div className="skill-card-inner">
                    <div className="skill-icon-wrapper">
                      <Code2 size={24} />
                    </div>
                    <h4 className="skill-title">Languages & Frontend</h4>
                    <ul className="skill-list">
                      <li>C, C++</li>
                      <li>JavaScript, SQL</li>
                      <li>HTML, CSS, React.js</li>
                      <li>Bootstrap, Tailwind CSS</li>
                    </ul>
                  </div>
                </motion.div>
              </Tilt>

              <Tilt
                className="skill-card-tilt"
                perspective={1500}
                scale={1.05}
                transitionSpeed={2000}
              >
                <motion.div
                  className="skill-card glass-panel"
                  variants={fadeIn}
                >
                  <div className="skill-card-inner">
                    <div className="skill-icon-wrapper">
                      <Server size={24} />
                    </div>
                    <h4 className="skill-title">Backend</h4>
                    <ul className="skill-list">
                      <li>Node.js</li>
                      <li>Express.js</li>
                      <li>REST APIs</li>
                    </ul>
                  </div>
                </motion.div>
              </Tilt>

              <Tilt
                className="skill-card-tilt"
                perspective={1500}
                scale={1.05}
                transitionSpeed={2000}
              >
                <motion.div
                  className="skill-card glass-panel"
                  variants={fadeIn}
                >
                  <div className="skill-card-inner">
                    <div className="skill-icon-wrapper">
                      <Database size={24} />
                    </div>
                    <h4 className="skill-title">Database & Tools</h4>
                    <ul className="skill-list">
                      <li>MongoDB, MySQL</li>
                      <li>Git, GitHub</li>
                      <li>VS Code</li>
                    </ul>
                  </div>
                </motion.div>
              </Tilt>
            </div>
          </motion.div>
        </section>

        {/* Projects Section */}
        <section className="section" id="projects">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            <motion.h3 className="section-title" variants={fadeIn}>
              Featured Projects
            </motion.h3>
            <div className="projects-grid">
              <Tilt
                className="project-card-tilt"
                perspective={1500}
                scale={1.02}
                transitionSpeed={2500}
                tiltMaxAngleX={5}
                tiltMaxAngleY={5}
              >
                <motion.div
                  className="project-card glass-panel"
                  variants={fadeIn}
                >
                  <div className="project-card-inner">
                    <div className="project-header">
                      <h4 className="project-title">
                        EcoSense – Personal Pollution Guardian
                      </h4>
                      <span className="project-date">Dec 2025 - Present</span>
                    </div>
                    <ul className="project-features">
                      <li>
                        <CheckCircle2 className="feature-icon" size={18} />{" "}
                        Built an application for real-time AQI tracking and
                        pollution alerts.
                      </li>
                      <li>
                        <CheckCircle2 className="feature-icon" size={18} />{" "}
                        Implemented route optimization and gamification
                        features.
                      </li>
                      <li>
                        <CheckCircle2 className="feature-icon" size={18} />{" "}
                        Visualized user data with extensive reports and
                        heatmaps.
                      </li>
                    </ul>
                  </div>
                </motion.div>
              </Tilt>

              <Tilt
                className="project-card-tilt"
                perspective={1500}
                scale={1.02}
                transitionSpeed={2500}
                tiltMaxAngleX={5}
                tiltMaxAngleY={5}
              >
                <motion.div
                  className="project-card glass-panel"
                  variants={fadeIn}
                >
                  <div className="project-card-inner">
                    <div className="project-header">
                      <h4 className="project-title">JOB BOARD PLATFORM</h4>
                      <span className="project-date">Jan 2024 - Present</span>
                    </div>
                    <ul className="project-features">
                      <li>
                        <CheckCircle2 className="feature-icon" size={18} />{" "}
                        Developed a full-stack job portal with authentication,
                        job posting, saving, and analytics.
                      </li>
                      <li>
                        <CheckCircle2 className="feature-icon" size={18} />{" "}
                        Implemented REST APIs using Node.js and Express.
                      </li>
                      <li>
                        <CheckCircle2 className="feature-icon" size={18} /> Used
                        MongoDB for efficient data management and scalable
                        storage.
                      </li>
                    </ul>
                  </div>
                </motion.div>
              </Tilt>
            </div>
          </motion.div>
        </section>

        {/* Education & Achievements Layout */}
        <section className="section" id="education">
          <div className="two-col">
            {/* Education */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={staggerContainer}
            >
              <motion.h3 className="section-title" variants={fadeIn}>
                Education
              </motion.h3>
              <div className="timeline">
                <motion.div className="timeline-item" variants={fadeIn}>
                  <div className="timeline-content glass-panel">
                    <div className="timeline-header">
                      <h4 className="timeline-title">
                        B.Tech in Computer Science Engineering
                      </h4>
                      <span className="timeline-date">
                        Graduation: May 2027
                      </span>
                    </div>
                    <div className="timeline-subtitle">
                      Swami Vivekanand Group of Institutes | Banur, Punjab
                    </div>
                    <div style={{ color: "var(--accent)", fontWeight: "bold" }}>
                      CGPA: 8.02
                    </div>
                  </div>
                </motion.div>

                <motion.div className="timeline-item" variants={fadeIn}>
                  <div className="timeline-content glass-panel">
                    <div className="timeline-header">
                      <h4 className="timeline-title">Class XII</h4>
                      <span className="timeline-date">2022 - 2023</span>
                    </div>
                    <div className="timeline-subtitle">Kendriya Vidyalaya</div>
                  </div>
                </motion.div>

                <motion.div className="timeline-item" variants={fadeIn}>
                  <div className="timeline-content glass-panel">
                    <div className="timeline-header">
                      <h4 className="timeline-title">Class X</h4>
                      <span className="timeline-date">2020 - 2021</span>
                    </div>
                    <div className="timeline-subtitle">
                      Police D.A.V Public School
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>

            {/* Achievements & Certifications */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={staggerContainer}
            >
              <motion.h3 className="section-title" variants={fadeIn}>
                Achievements & More
              </motion.h3>

              <div className="timeline">
                <motion.div className="timeline-item" variants={fadeIn}>
                  <div className="timeline-content glass-panel">
                    <div className="timeline-header">
                      <h4 className="timeline-title">
                        <Award
                          size={20}
                          className="inline mr-2"
                          style={{ verticalAlign: "sub" }}
                        />{" "}
                        Hackathons & Awards
                      </h4>
                    </div>
                    <ul className="skill-list" style={{ marginTop: "1rem" }}>
                      <li>
                        Secured 2nd position in National Level Hackathon –
                        Gulzar Group of Institutes
                      </li>
                      <li>
                        Secured 3rd position in Nirmaan Hackathon – CGC
                        Jhanjheri
                      </li>
                      <li>
                        Active member of Google Developer Student Club (GDSC)
                      </li>
                    </ul>
                  </div>
                </motion.div>

                <motion.div className="timeline-item" variants={fadeIn}>
                  <div className="timeline-content glass-panel">
                    <div className="timeline-header">
                      <h4 className="timeline-title">
                        <GraduationCap
                          size={20}
                          className="inline mr-2"
                          style={{ verticalAlign: "sub" }}
                        />{" "}
                        Certifications
                      </h4>
                    </div>
                    <ul className="skill-list" style={{ marginTop: "1rem" }}>
                      <li>
                        <div>
                          <strong>Fundamentals AI and ML</strong>
                          <br />
                          <span style={{ fontSize: "0.85rem" }}>
                            INFOSYS SPRINGBOARD (OCT 2024)
                          </span>
                        </div>
                      </li>
                      <li>
                        <div>
                          <strong>Frontend Development</strong>
                          <br />
                          <span style={{ fontSize: "0.85rem" }}>
                            HTML, CSS, JS, BOOTSTRAP, TAILWIND (MAR 2025)
                          </span>
                        </div>
                      </li>
                    </ul>
                  </div>
                </motion.div>

                <motion.div className="timeline-item" variants={fadeIn}>
                  <div className="timeline-content glass-panel">
                    <div className="timeline-header">
                      <h4 className="timeline-title">
                        <Wrench
                          size={20}
                          className="inline mr-2"
                          style={{ verticalAlign: "sub" }}
                        />{" "}
                        Additional Skills
                      </h4>
                    </div>
                    <ul className="skill-list" style={{ marginTop: "1rem" }}>
                      <li>Graphic Designing and UI/UX fundamentals</li>
                      <li>Strong problem-solving and teamwork abilities</li>
                    </ul>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Contact Section & Footer */}
        <section className="section contact-section" id="contact">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            <motion.h3 className="section-title" variants={fadeIn}>
              Get In Touch
            </motion.h3>
            <motion.p className="contact-subtitle" variants={fadeIn}>
              Have a question or want to work together? I'd love to hear from
              you!
            </motion.p>

            <motion.div
              className="contact-form-container glass-panel"
              variants={fadeIn}
              ref={formRef}
            >
              <form onSubmit={handleSubmit} className="contact-form">
                <div className="form-group">
                  <label htmlFor="name">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your Name"
                    required
                    className="form-input"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="your.email@example.com"
                    required
                    className="form-input"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="message">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Your message here..."
                    rows="5"
                    required
                    className="form-input form-textarea"
                  />
                </div>

                <motion.button
                  type="submit"
                  className="submit-btn"
                  disabled={loading}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {loading ? "Sending..." : "Send Message"}
                  <Send size={18} style={{ marginLeft: "8px" }} />
                </motion.button>

                {submitted && (
                  <motion.div
                    className="success-message"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                  >
                    ✓ Message sent successfully! I'll get back to you soon.
                  </motion.div>
                )}
              </form>
            </motion.div>
          </motion.div>
        </section>

        {/* Footer */}
        <footer className="footer">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="footer-content"
          >
            <motion.div className="footer-section" variants={fadeIn}>
              <h4>Subhajit Mondal</h4>
              <p>Full Stack Web Developer & Problem Solver</p>
            </motion.div>

            <motion.div className="footer-section" variants={fadeIn}>
              <h4>Quick Links</h4>
              <ul>
                <li>
                  <a href="#about">About</a>
                </li>
                <li>
                  <a href="#skills">Skills</a>
                </li>
                <li>
                  <a href="#projects">Projects</a>
                </li>
                <li>
                  <a href="#contact">Contact</a>
                </li>
              </ul>
            </motion.div>

            <motion.div className="footer-section" variants={fadeIn}>
              <h4>Connect</h4>
              <div className="footer-social">
                <a
                  href="https://github.com/Subhajit20240"
                  target="_blank"
                  rel="noreferrer"
                  className="footer-social-link"
                >
                  <Github size={20} />
                </a>
                <a
                  href="https://linkedin.com/in/subhajit-mondal-574086296/"
                  target="_blank"
                  rel="noreferrer"
                  className="footer-social-link"
                >
                  <Linkedin size={20} />
                </a>
                <a
                  href="mailto:subhajitmon01@gmail.com"
                  className="footer-social-link"
                >
                  <Mail size={20} />
                </a>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            className="footer-bottom"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            <p>&copy; 2026 Subhajit Mondal. All rights reserved.</p>
            <p style={{ fontSize: "0.85rem", marginTop: "0.5rem" }}>
              Contact: subhajitmon01@gmail.com
            </p>
          </motion.div>
        </footer>
      </div>
    </div>
  );
}

export default App;

import React from "react";
import "./App.css";

function App() {
  return (
    <div className="app">
      {/* Header / Navbar */}
      <header className="header">
        <div className="logo">
          <span className="name">Ioannis Filippidis</span>
          <span className="role">AI-Enhanced Web Developer</span>
        </div>
        <nav className="nav">
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="hero">
        <h1>Hello, I&apos;m Ioannis.</h1>
        <h2>Coding the future — one intelligent app at a time.</h2>
        <p>
          I&apos;m an AI-Enhanced Web Developer focusing on building real-world
          applications that combine modern web technologies with intelligent
          features. I enjoy turning ideas into working software that people can
          actually use.
        </p>
        <div className="hero-buttons">
          <a href="#projects" className="btn primary">
            View Projects
          </a>
          <a href="#contact" className="btn secondary">
            Contact Me
          </a>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="section">
        <h3>About Me</h3>
        <p>
          I&apos;m a junior developer with experience in Python, JavaScript, and
          Node.js, with a strong interest in AI-powered web applications.
          Recently, I developed an AI geography tutor as part of my postgraduate
          thesis, integrating ChatGPT and Google Maps to support natural
          dialogue and interactive learning.
        </p>
      </section>

      {/* Skills Section */}
      <section id="skills" className="section">
        <h3>Skills</h3>
        <div className="skills-grid">
          <div className="skill-card">
            <h4>Languages</h4>
            <ul>
              <li>Python</li>
              <li>JavaScript (ES6+)</li>
              <li>PHP (basic)</li>
            </ul>
          </div>
          <div className="skill-card">
            <h4>Web & Frameworks</h4>
            <ul>
              <li>React</li>
              <li>Node.js &amp; Express</li>
              <li>REST APIs</li>
            </ul>
          </div>
          <div className="skill-card">
            <h4>AI & APIs</h4>
            <ul>
              <li>OpenAI (ChatGPT) API</li>
              <li>Google Maps JavaScript API</li>
            </ul>
          </div>
          <div className="skill-card">
            <h4>Tools & Others</h4>
            <ul>
              <li>Git &amp; GitHub</li>
              <li>Vercel (deployment)</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="section">
        <h3>Projects</h3>

        <div className="project-card">
          <h4>Geography Learning Assistant (GLA)</h4>
          <p className="project-tags">
            React · Node.js · ChatGPT API · Google Maps API
          </p>
          <p>
            An AI-powered geography tutor that allows students to ask questions
            in natural language and receive intelligent responses with
            interactive map visualisation. Built as part of my postgraduate
            thesis and evaluated with real students in an experimental study.
          </p>
          <div className="project-links">
            <a
              href="https://art-gt-2-client.vercel.app"
              target="_blank"
              rel="noreferrer"
            >
              Live Demo
            </a>
            <a
              href="https://github.com/Ioannis-web/GLA"
              target="_blank"
              rel="noreferrer"
            >
              GitHub Repo
            </a>
          </div>
        </div>

        <div className="project-card">
          <h4>Project 2 (Coming Soon)</h4>
          <p className="project-tags">Python · API</p>
          <p>
            A small backend project using Python to expose a simple REST API.
            This will demonstrate clean code, routing, and basic data handling.
          </p>
          <div className="project-links">
            <span className="placeholder-link">In progress</span>
          </div>
        </div>

        <div className="project-card">
          <h4>Project 3 (Coming Soon)</h4>
          <p className="project-tags">React · Authentication</p>
          <p>
            A small React application with login/register functionality to show
            understanding of basic authentication flows and form handling.
          </p>
          <div className="project-links">
            <span className="placeholder-link">In progress</span>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section">
        <h3>Contact</h3>
        <p>
          If you&apos;d like to discuss a project, a junior position, or
          collaboration opportunities, feel free to reach out.
        </p>
        <ul className="contact-list">
          <li>
            📧 Email:{" "}
            <a href="mailto:i_filippidis@yahoo.co.uk">
              i_filippidis@yahoo.co.uk
            </a>
          </li>
          <li>
            💼 LinkedIn:{" "}
            <a
              href="https://www.linkedin.com"
              target="_blank"
              rel="noreferrer"
            >
              Add your LinkedIn profile here
            </a>
          </li>
          <li>
            🧑‍💻 GitHub:{" "}
            <a
              href="https://github.com/Ioannis-web"
              target="_blank"
              rel="noreferrer"
            >
              github.com/Ioannis-web
            </a>
          </li>
        </ul>
      </section>

      {/* Footer */}
      <footer className="footer">
        <span>© {new Date().getFullYear()} Ioannis Filippidis</span>
      </footer>
    </div>
  );
}

export default App;

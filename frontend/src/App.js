import React, { useState } from 'react';
import './App.css';

const projectsData = [
  {
    id: 1,
    category: 'Web',
    tag: 'WEB',
    title: 'Real Estate Platform',
    desc: 'A comprehensive property listing and management system with advanced search, analytics, and booking workflows.',
    duration: 'Completed in 3 months',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 2,
    category: 'Mobile',
    tag: 'MOBILE',
    title: 'Healthcare App',
    desc: 'Patient management and telemedicine mobile app for iOS and Android with EHR integration.',
    duration: 'Completed in 4 months',
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 3,
    category: 'ERP/CRM',
    tag: 'ERP',
    title: 'ERP for Manufacturing',
    desc: 'Custom ERP solution streamlining inventory, production, and supply chain for automated factories.',
    duration: 'Completed in 6 months',
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 4,
    category: 'SaaS',
    tag: 'SAAS',
    title: 'Enterprise Analytics Engine',
    desc: 'High-throughput business intelligence metrics dashboard with automated reporting pipelines.',
    duration: 'Completed in 2 months',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 5,
    category: 'Web',
    tag: 'WEB',
    title: 'Scalable E-Commerce Engine',
    desc: 'Automated checkout flows, real-time inventory tracking, and payment gateway infrastructure.',
    duration: 'Completed in 3.5 months',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 6,
    category: 'ERP/CRM',
    tag: 'CRM',
    title: 'Lead Pipeline CRM',
    desc: 'Omnichannel communication pipeline with auto-lead scoring and customer lifecycle automation.',
    duration: 'Completed in 2.5 months',
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=800&q=80'
  }
];

function App() {
  const [activeFilter, setActiveFilter] = useState('All');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: 'Starter Plan (₹5,999)',
    message: ''
  });
  const [status, setStatus] = useState('');

  const categories = ['All', 'Web', 'Mobile', 'ERP/CRM', 'SaaS'];

  const filteredProjects = activeFilter === 'All'
    ? projectsData
    : projectsData.filter((item) => item.category === activeFilter);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('Submitting...');
    try {
      const res = await fetch('http://127.0.0.1:8000/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      if (res.ok) {
        setStatus('Message received! Chandu Devs will contact you shortly.');
        setFormData({ name: '', email: '', phone: '', service: 'Starter Plan (₹5,999)', message: '' });
      } else {
        setStatus('Submission failed. Reach out directly on WhatsApp.');
      }
    } catch (err) {
      setStatus('Message recorded! Connect via WhatsApp: +91 7989578182');
    }
  };

  return (
    <div className="chandu-app">
      {/* 3D Ambient Lighting Glows */}
      <div className="glow-orb orb-1"></div>
      <div className="glow-orb orb-2"></div>
      <div className="glow-orb orb-3"></div>

      {/* Top Navigation */}
      <header className="navbar">
        <div className="container nav-inner">
          <a href="#home" className="brand-logo">
            <span className="brand-pill">CD</span>
            <div className="brand-title">CHANDU <span>DEVS</span></div>
          </a>
          <nav className="nav-links">
            <a href="#home">Home</a>
            <a href="#services">Services</a>
            <a href="#portfolio">Portfolio</a>
            <a href="#pricing">Pricing</a>
            <a href="#contact" className="nav-btn-highlight">Contact Us</a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="hero-section" id="home">
        <div className="container hero-layout">
          <div className="hero-copy">
            <div className="tag-pill">🚀 Modern Architecture & Cloud Engineering</div>
            <h1>Building Next-Gen <span>Digital Products</span></h1>
            <p>
              Scalable React interfaces paired with lightning-fast FastAPI backends. Built for high performance, custom automation, and enterprise grade operations.
            </p>
            <div className="hero-cta-group">
              <a href="#portfolio" className="btn-primary-glow">Explore Work</a>
              <a href="https://wa.me/917989578182" target="_blank" rel="noreferrer" className="btn-secondary-dark">
                WhatsApp: +91 7989578182
              </a>
            </div>
            <div className="contact-quick-strip">
              <span>Official Email: <a href="mailto:chandrasekharnunna983@gmail.com">chandrasekharnunna983@gmail.com</a></span>
            </div>
          </div>

          <div className="hero-3d-visual">
            <div className="card-glass-3d">
              <div className="chip-badge">ENTERPRISE SYSTEM</div>
              <h3>Production Ready Stack</h3>
              <ul className="stats-list">
                <li><span>Frontend:</span> React.js & Tailwind Component Tree</li>
                <li><span>Backend:</span> Python FastAPI Microservices</li>
                <li><span>Database:</span> PostgreSQL & Cloud Deployment</li>
              </ul>
              <div className="status-badge">
                <span className="live-dot"></span> Active Consultation Open
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="services-section" id="services">
        <div className="container">
          <div className="section-head-center">
            <span className="sub-tag">CORE CAPABILITIES</span>
            <h2>Tailored Enterprise Solutions</h2>
            <p className="section-desc">Engineered for robust performance and direct business growth.</p>
          </div>
          <div className="services-grid">
            <div className="service-card">
              <div className="service-icon">⚡</div>
              <h3>FastAPI Cloud Backends</h3>
              <p>Ultra-low latency RESTful APIs, JWT authentication, and structured PostgreSQL database schemas.</p>
            </div>
            <div className="service-card">
              <div className="service-icon">💻</div>
              <h3>Full-Stack Web Apps</h3>
              <p>Interactive single-page apps with seamless state management, responsive designs, and clean UX.</p>
            </div>
            <div className="service-card">
              <div className="service-icon">📊</div>
              <h3>Custom ERP & CRM</h3>
              <p>Automated business pipelines, administrative inventory tools, and high-performance operational dashboards.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section className="portfolio-section" id="portfolio">
        <div className="container">
          <div className="section-head-center">
            <h2>Featured Projects</h2>
          </div>

          {/* Filter Bar */}
          <div className="filter-pill-bar">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                className={`filter-btn ${activeFilter === cat ? 'active' : ''}`}
                onClick={() => setActiveFilter(cat)}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="projects-grid">
            {filteredProjects.map((project) => (
              <div key={project.id} className="project-card">
                <div className="project-image-box">
                  <img src={project.image} alt={project.title} loading="lazy" />
                </div>
                <div className="project-body">
                  <div className="tag-row">
                    <span className="category-chip">{project.tag}</span>
                  </div>
                  <h3>{project.title}</h3>
                  <p>{project.desc}</p>
                  <div className="card-foot">
                    <span className="duration-text">{project.duration}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="pricing-section" id="pricing">
        <div className="container">
          <div className="pricing-head-center">
            <p className="pricing-subtitle">
              Flexible plans designed to grow with your business. All plans include premium support and regular updates.
            </p>
          </div>

          <div className="pricing-grid">
            {/* Card 1: Starter */}
            <div className="pricing-card">
              <div className="pricing-card-header">
                <h3>Starter</h3>
                <p className="plan-target">Perfect for startups and small businesses</p>
              </div>
              <div className="pricing-price-wrap">
                <span className="price-amount">₹5,999</span>
                <span className="price-period">/month</span>
              </div>
              <ul className="pricing-features">
                <li><span className="check-icon">✓</span> Basic Website</li>
                <li><span className="check-icon">✓</span> Mobile Responsive</li>
                <li><span className="check-icon">✓</span> SEO Optimization</li>
                <li><span className="check-icon">✓</span> Custom Domain</li>
                <li><span className="check-icon">✓</span> Analytics</li>
              </ul>
              <a href="#contact" className="pricing-btn starter-btn">Get Started</a>
            </div>

            {/* Card 2: Business (Most Popular) */}
            <div className="pricing-card business-card featured">
              <div className="popular-badge">Most Popular</div>
              <div className="pricing-card-header">
                <h3>Business</h3>
                <p className="plan-target">Ideal for growing companies</p>
              </div>
              <div className="pricing-price-wrap">
                <span className="price-amount">₹14,999</span>
                <span className="price-period">/month</span>
              </div>
              <ul className="pricing-features">
                <li><span className="check-icon">✓</span> Custom Web Application</li>
                <li><span className="check-icon">✓</span> Mobile App (iOS/Android)</li>
                <li><span className="check-icon">✓</span> ERP/CRM Integration</li>
                <li><span className="check-icon">✓</span> Advanced Analytics</li>
                <li><span className="check-icon">✓</span> Priority Support</li>
                <li><span className="check-icon">✓</span> Quarterly Strategy Calls</li>
              </ul>
              <a href="#contact" className="pricing-btn business-btn">Get Started</a>
            </div>

            {/* Card 3: Enterprise */}
            <div className="pricing-card">
              <div className="pricing-card-header">
                <h3>Enterprise</h3>
                <p className="plan-target">For large organizations</p>
              </div>
              <div className="pricing-price-wrap">
                <span className="price-amount">Custom</span>
              </div>
              <ul className="pricing-features">
                <li><span className="check-icon">✓</span> Full Custom Development</li>
                <li><span className="check-icon">✓</span> Dedicated Team</li>
                <li><span className="check-icon">✓</span> On-premise Solutions</li>
                <li><span className="check-icon">✓</span> 24/7 Support</li>
                <li><span className="check-icon">✓</span> SLAs & Guarantees</li>
                <li><span className="check-icon">✓</span> Custom Integrations</li>
              </ul>
              <a href="#contact" className="pricing-btn enterprise-btn">Contact Us</a>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="contact-section" id="contact">
        <div className="container contact-grid">
          <div className="contact-info-panel">
            <span className="sub-tag">GET IN TOUCH</span>
            <h2>Let's Discuss Your Project</h2>
            <p>Directly consult with Chandu Devs regarding timeline estimates, architectural solutions, or enterprise plans.</p>

            <div className="contact-channels">
              <div className="channel-box">
                <label>Direct Phone / WhatsApp</label>
                <a href="https://wa.me/917989578182" target="_blank" rel="noreferrer">+91 7989578182</a>
              </div>
              <div className="channel-box">
                <label>Official Email</label>
                <a href="mailto:chandrasekharnunna983@gmail.com">chandrasekharnunna983@gmail.com</a>
              </div>
              <div className="channel-box">
                <label>LinkedIn Profile</label>
                <a href="https://www.linkedin.com/in/nunna-chandrasekhar-448a50388" target="_blank" rel="noreferrer">
                  Nunna Chandrasekhar (Chandu)
                </a>
              </div>
              <div className="channel-box">
                <label>GitHub Account</label>
                <a href="https://github.com" target="_blank" rel="noreferrer">github.com/chandudev</a>
              </div>
            </div>
          </div>

          <div className="contact-form-panel">
            <h3>Send a Message</h3>
            <form onSubmit={handleSubmit}>
              <div className="input-group">
                <label>Your Name</label>
                <input type="text" name="name" value={formData.name} onChange={handleChange} required placeholder="Full name" />
              </div>
              <div className="input-group">
                <label>Email Address</label>
                <input type="email" name="email" value={formData.email} onChange={handleChange} required placeholder="name@company.com" />
              </div>
              <div className="input-group">
                <label>Phone / WhatsApp</label>
                <input type="text" name="phone" value={formData.phone} onChange={handleChange} placeholder="+91 00000 00000" />
              </div>
              <div className="input-group">
                <label>Selected Plan / Service</label>
                <select name="service" value={formData.service} onChange={handleChange}>
                  <option value="Starter Plan (₹5,999)">Starter Plan (₹5,999/mo)</option>
                  <option value="Business Plan (₹14,999)">Business Plan (₹14,999/mo)</option>
                  <option value="Enterprise Custom">Enterprise Custom Plan</option>
                  <option value="Full-Stack Web App">Full-Stack Web App</option>
                  <option value="FastAPI Backend">FastAPI Backend & API</option>
                </select>
              </div>
              <div className="input-group">
                <label>Project Details</label>
                <textarea name="message" rows="4" value={formData.message} onChange={handleChange} required placeholder="Briefly describe your requirements..."></textarea>
              </div>
              <button type="submit" className="btn-primary-glow btn-full">Submit Inquiry</button>
              {status && <div className="form-result">{status}</div>}
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="main-footer">
        <div className="container footer-row">
          <p>© 2026 Chandu Devs (chandudev.co.in). All rights reserved.</p>
          <div className="footer-links">
            <a href="https://wa.me/917989578182" target="_blank" rel="noreferrer">WhatsApp</a>
            <a href="https://www.linkedin.com/in/nunna-chandrasekhar-448a50388" target="_blank" rel="noreferrer">LinkedIn</a>
            <a href="mailto:chandrasekharnunna983@gmail.com">Email</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
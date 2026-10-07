
import "./App.css";

function App() {
  return (
    <div className="app">
      {/* Header */}
      <header className="header">
        <h1>🚀 DevOps Learning Hub</h1>
        <p>Learn • Build • Deploy</p>
      </header>

      {/* Hero Section */}
      <section className="hero">
        <h2>Welcome to DevOps!</h2>
        <p>
          This React application is created as a hands-on DevOps demo.
          We will build, containerize, and deploy this application using
          Docker and AWS EC2.
        </p>

        <button>Start Learning</button>
      </section>

      {/* Topics */}
      <section className="topics">
        <h2>DevOps Journey</h2>

        <div className="cards">
          <div className="card">
            <div className="icon">🔧</div>
            <h3>Git & GitHub</h3>
            <p>
              Manage source code, create repositories, branches,
              commits and push code.
            </p>
          </div>

          <div className="card">
            <div className="icon">🐳</div>
            <h3>Docker</h3>
            <p>
              Build Docker images and run applications inside
              containers.
            </p>
          </div>

          <div className="card">
            <div className="icon">☁️</div>
            <h3>AWS EC2</h3>
            <p>
              Deploy and run applications on a cloud-based
              Ubuntu server.
            </p>
          </div>

          <div className="card">
            <div className="icon">🔄</div>
            <h3>CI/CD</h3>
            <p>
              Automate application build, testing and deployment
              using DevOps tools.
            </p>
          </div>
        </div>
      </section>

      {/* Deployment Status */}
      <section className="status">
        <h2>Deployment Status</h2>

        <div className="status-box">
          <span className="status-dot"></span>
          <div>
            <h3>Application Running</h3>
            <p>React application is ready for deployment 🚀</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer>
        <p>DevOps Demo Project | React + Docker + AWS EC2</p>
      </footer>
    </div>
  );
}

export default App;

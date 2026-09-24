 import "./App.css";
import RiskMap from "./RiskMap";

function App() {
  return (
    <div className="app">

      {/* SIDEBAR */}
      <aside className="sidebar">

        <div className="logo">
          <div className="logo-box">A</div>

          <div>
            <h2>APEX</h2>
            <p>Disaster Intelligence</p>
          </div>
        </div>

        <nav>
          <button className="nav-item active">
            Dashboard
          </button>

          <button className="nav-item">
            Risk Map
          </button>

          <button className="nav-item">
            Red Zones
          </button>

          <button className="nav-item">
            Vulnerable Population
          </button>

          <button className="nav-item">
            Safe Sites
          </button>

          <button className="nav-item">
            Relocation Plan
          </button>

          <button className="nav-item">
            Reports
          </button>
        </nav>

      </aside>


      {/* MAIN CONTENT */}
      <main className="main">

        {/* TOP BAR */}
        <header className="topbar">

          <div>
            <h1>Disaster Management Dashboard</h1>

            <p>
              Hazard-based risk analysis and intelligent
              relocation planning
            </p>
          </div>

          <div className="status">
            ● System Online
          </div>

        </header>


        {/* STATISTICS */}
        <section className="stats">

          <div className="stat-card">
            <span>Population at Risk</span>
            <strong>2,480</strong>
            <small>Across 12 habitations</small>
          </div>

          <div className="stat-card danger">
            <span>Red Zones</span>
            <strong>12</strong>
            <small>Immediate attention required</small>
          </div>

          <div className="stat-card">
            <span>Safe Sites</span>
            <strong>7</strong>
            <small>Safety verified</small>
          </div>

          <div className="stat-card success">
            <span>Available Capacity</span>
            <strong>3,250</strong>
            <small>770 capacity surplus</small>
          </div>

        </section>


        {/* MAP + PRIORITY */}
        <section className="content-grid">

          {/* REAL GIS MAP */}
          <div className="panel map-panel">

            <div className="panel-header">

              <div>
                <h2>Regional Risk Map</h2>
                <p>Current hazard assessment</p>
              </div>

              <button className="view-button">
                View Full Map
              </button>

            </div>

            <div className="map-placeholder">
              <RiskMap />
            </div>

          </div>


          {/* PRIORITY HABITATIONS */}
          <div className="panel">

            <div className="panel-header">

              <div>
                <h2>Priority Habitations</h2>
                <p>Relocation priority</p>
              </div>

            </div>

            <div className="priority-list">

              <div className="priority-item">

                <div>
                  <strong>Village A</strong>
                  <span>680 people</span>
                </div>

                <div className="priority immediate">
                  Immediate
                </div>

              </div>


              <div className="priority-item">

                <div>
                  <strong>Village B</strong>
                  <span>450 people</span>
                </div>

                <div className="priority short">
                  Short-term
                </div>

              </div>


              <div className="priority-item">

                <div>
                  <strong>Village C</strong>
                  <span>300 people</span>
                </div>

                <div className="priority medium">
                  Medium-term
                </div>

              </div>

            </div>

          </div>

        </section>


        {/* BOTTOM SECTION */}
        <section className="bottom-grid">

          {/* RELOCATION STATUS */}
          <div className="panel">

            <h2>Relocation Status</h2>

            <div className="progress-row">

              <div>
                <span>People requiring relocation</span>
                <strong>2,480</strong>
              </div>

              <div className="progress">
                <div className="progress-fill"></div>
              </div>

            </div>

          </div>


          {/* SYSTEM WORKFLOW */}
          <div className="panel">

            <h2>System Workflow</h2>

            <div className="workflow">

              <span>Hazard</span>
              →
              <span>Red Zone</span>
              →
              <span>Priority</span>
              →
              <span>Safe Site</span>
              →
              <span>Relocation</span>

            </div>

          </div>

        </section>

      </main>

    </div>
  );
}

export default App;
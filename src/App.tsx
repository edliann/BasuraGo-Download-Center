
import React from 'react'
import cityValley from './assets/basurago-city-valley.png'
import headerLogo from './assets/basurago-header.png'
import customerIcon from './assets/basurago-icon-app.png'
import riderIcon from './assets/rider-app-icon.png'
import staffIcon from './assets/staff-app-icon.png'

type AppCardProps = {
  kind: 'customer' | 'rider' | 'staff'
  title: string
  description: string
  label: string
  status: string
  icon: string
}

function AppIcon({ kind }: { kind: AppCardProps['kind'] }) {
  const icons = {
    customer: customerIcon,
    rider: riderIcon,
    staff: staffIcon,
  }

  return (
    <img
      src={icons[kind]}
      alt=""
      className="app-card-icon"
      aria-hidden="true"
    />
  )
}

function AppCard({
  kind,
  title,
  description,
  label,
  status,
  icon,
}: AppCardProps) {
  const isReady = false

  return (
    <article className={`app-card app-card--${kind}`}>
      <div className="card-topline">
        <div className="app-icon">
          <img src={icon} alt="" className="app-card-icon" />
        </div>

        <span className="platform-tag">
          {kind === 'staff' ? 'FACILITY APP' : 'ANDROID APK'}
        </span>
      </div>

      <div className="card-copy">
        <h2>{title}</h2>
        <p>{description}</p>
      </div>

      <div className="card-bottom">
        <span className="status">
          <span className="status-dot" />
          {status}
        </span>

        <button
          className={`card-action ${
            isReady ? '' : 'card-action--disabled'
          }`}
          disabled={!isReady}
          aria-label={`${title} — ${label}`}
        >
          {label}
          <span aria-hidden="true">
            {kind === 'staff' ? '↗' : '↓'}
          </span>
        </button>
      </div>
    </article>
  )
}

function App() {
  return (
    <main
      className="page"
      style={
        {
          '--city-background': `url("${cityValley}")`,
        } as React.CSSProperties
      }
    >
      <div className="scene-overlay" />

      <header className="site-header wrap">
        <a className="brand" href="#top" aria-label="BasuraGo home">
          <img
            src={headerLogo}
            alt="BasuraGo Download Center"
            className="header-logo"
          />
        </a>

        <span className="official-pill">
          <span />
          Official app downloads
        </span>
      </header>

      <section className="hero wrap" id="top">
        <div className="hero-content">
          <p className="eyebrow">
            <span />
            A CLEANER FUTURE STARTS HERE
          </p>

          <h1>
            Your city.
            <br />
            <span>Your waste.</span>
            <br />
            A better future.
          </h1>

          <p className="hero-description">
            Everything you need to get started with BasuraGo.
            Choose the app that fits your role and join us in
            building cleaner communities.
          </p>

          <a className="hero-link" href="#apps">
            Explore the apps <span aria-hidden="true">↓</span>
          </a>
        </div>

        <div
          className="hero-note"
          aria-label="BasuraGo mission statement"
        >
          <span className="note-icon">
            <AppIcon kind="customer" />
          </span>

          <span>
            <strong>Smarter waste collection</strong>
            <small>Better habits. Greener communities.</small>
          </span>
        </div>
      </section>

      <section className="apps-section wrap" id="apps">
        <div className="section-heading">
          <div>
            <p className="eyebrow eyebrow--dark">
              GET THE RIGHT APP
            </p>
            <h2>Welcome to BasuraGo</h2>
          </div>

          <p>
            Pick your experience below.
            <br />
            Downloads will be available soon.
          </p>
        </div>

        <div className="app-grid">
          <AppCard
            kind="customer"
            title="BasuraGo Customer"
            icon={customerIcon}
            description="Request waste pickups, manage your collection requests, and stay updated along the way."
            label="Download APK"
            status="Coming soon"
          />

          <AppCard
            kind="rider"
            title="BasuraGo Rider"
            icon={riderIcon}
            description="View assigned pickups, update collection progress, and keep daily operations moving."
            label="Download APK"
            status="Coming soon"
          />

          <AppCard
            kind="staff"
            title="BasuraGo Staff"
            icon={staffIcon}
            description="Manage facility operations, monitor incoming waste, and oversee waste processing activities."
            label="Portal coming soon"
            status="Coming soon"
          />
        </div>

        <div className="help-strip">
          <span className="help-symbol" aria-hidden="true">
            i
          </span>

          <p>
            <strong>Not sure which app to choose?</strong>{' '}
            Customers use the Customer App. Collection personnel
            use the Rider App. Facility staff use the Staff App.
          </p>
        </div>
      </section>

      <footer className="site-footer wrap">
        <a className="footer-brand" href="#top">
          BasuraGo
        </a>

        <span>Building a cleaner, greener community.</span>

        <span className="footer-status">
          <span />
          Download links will be added after release
        </span>
      </footer>
    </main>
  )
}

export default App

import Image from "next/image";
import Link from "next/link";

const APP_STORE_URL = "https://apps.apple.com/app/id6804373243";

const previews = [
  {
    src: "/app/home.png",
    label: "Home",
    title: "Your espresso home base",
    body: "Return to your machine, guides, cleaning, and shot tools without hunting through menus.",
  },
  {
    src: "/app/machines.png",
    label: "Machines",
    title: "Guidance that fits your setup",
    body: "Choose the equipment you actually own and start from a useful baseline.",
  },
  {
    src: "/app/analysis.png",
    label: "Shot analysis",
    title: "Turn a shot into a next step",
    body: "Share what happened and get a focused adjustment for the next pull.",
  },
  {
    src: "/app/cleaning.png",
    label: "Care",
    title: "Keep clean coffee tasting clean",
    body: "Find practical cleaning notes and machine-specific video searches in one place.",
  },
];

const steps = [
  {
    number: "01",
    title: "Choose your machine",
    body: "DialedIn starts with your espresso machine and grinder, not a generic recipe.",
  },
  {
    number: "02",
    title: "Pull and record",
    body: "Add dose, yield, time, roast, taste notes, or a shot video when you want deeper help.",
  },
  {
    number: "03",
    title: "Make one better change",
    body: "Get a clear recommendation, keep your history, and learn what moved the cup forward.",
  },
];

function AppStoreLink({ className = "" }: { className?: string }) {
  return (
    <a
      className={`store-button ${className}`}
      href={APP_STORE_URL}
      target="_blank"
      rel="noreferrer"
    >
      <span className="store-button-small">Download on the</span>
      <span className="store-button-main">App Store</span>
    </a>
  );
}

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <div className="header-inner">
          <Link className="brand" href="/" aria-label="DialedIn home">
            <Image src="/app/icon.png" alt="" width={42} height={42} priority />
            <span>DialedIn</span>
          </Link>

          <nav className="main-nav" aria-label="Main navigation">
            <a href="#features">Features</a>
            <a href="#how-it-works">How it works</a>
            <a href="#pro">DialedIn Pro</a>
          </nav>

          <a className="header-download" href={APP_STORE_URL} target="_blank" rel="noreferrer">
            Get the app
          </a>
        </div>
      </header>

      <section className="hero" aria-labelledby="hero-title">
        <Image
          className="hero-media"
          src="/app/espresso-hero.jpg"
          alt="Espresso pouring from a machine into a glass cup"
          fill
          priority
          sizes="100vw"
        />
        <div className="hero-shade" />

        <div className="hero-inner">
          <div className="hero-copy">
            <p className="eyebrow">ESPRESSO GUIDANCE FOR YOUR EQUIPMENT</p>
            <h1 id="hero-title">DialedIn</h1>
            <p className="hero-lede">
              Better espresso starts with one useful adjustment. DialedIn brings machine guides,
              cleaning help, shot history, and AI-assisted analysis into one focused iPhone app.
            </p>
            <div className="hero-actions">
              <AppStoreLink />
              <a className="quiet-link" href="#app-preview">See the app</a>
            </div>
          </div>

          <div className="hero-phone" aria-label="DialedIn app preview">
            <Image
              src="/app/home.png"
              alt="DialedIn home screen on iPhone"
              width={1284}
              height={2778}
              priority
              sizes="(max-width: 760px) 132px, 310px"
            />
          </div>
        </div>
      </section>

      <section className="value-strip" aria-label="DialedIn highlights">
        <div className="value-strip-inner">
          <p><strong>Machine-specific</strong><span>Guides and baselines</span></p>
          <p><strong>Shot by shot</strong><span>History and recommendations</span></p>
          <p><strong>Built for iPhone</strong><span>Simple, focused workflows</span></p>
        </div>
      </section>

      <section className="intro-band" id="features">
        <div className="section-inner intro-grid">
          <div>
            <p className="section-label">YOUR ESPRESSO COPILOT</p>
            <h2>Less guessing.<br />More repeatable coffee.</h2>
          </div>
          <div className="intro-copy">
            <p>
              Espresso changes with the machine, grinder, beans, dose, and time. DialedIn keeps
              those details together and helps you decide what to change next.
            </p>
            <p>
              Use it for a quick baseline, a stubborn shot, or the routine maintenance that keeps
              good beans from tasting flat.
            </p>
          </div>
        </div>
      </section>

      <section className="preview-section" id="app-preview" aria-labelledby="preview-title">
        <div className="section-inner">
          <div className="section-heading">
            <p className="section-label">INSIDE DIALEDIN</p>
            <h2 id="preview-title">The whole workflow, in your hand.</h2>
            <p>Real screens from the app. No mystery dashboard, just the tools you reach for while dialing in.</p>
          </div>

          <div className="preview-grid">
            {previews.map((preview) => (
              <article className="preview-item" key={preview.src}>
                <div className="phone-frame">
                  <Image
                    src={preview.src}
                    alt={`${preview.label} screen in the DialedIn app`}
                    width={1284}
                    height={2778}
                    sizes="(max-width: 700px) 230px, 25vw"
                  />
                </div>
                <p className="preview-label">{preview.label}</p>
                <h3>{preview.title}</h3>
                <p>{preview.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="workflow-section" id="how-it-works" aria-labelledby="workflow-title">
        <div className="section-inner">
          <div className="section-heading compact">
            <p className="section-label">A QUIETER WAY TO DIAL IN</p>
            <h2 id="workflow-title">Three steps. One variable at a time.</h2>
          </div>

          <div className="steps-grid">
            {steps.map((step) => (
              <article className="step" key={step.number}>
                <span>{step.number}</span>
                <h3>{step.title}</h3>
                <p>{step.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="pro-section" id="pro" aria-labelledby="pro-title">
        <div className="section-inner pro-grid">
          <div>
            <p className="section-label light">DIALEDIN PRO</p>
            <h2 id="pro-title">Keep learning from every shot.</h2>
            <p className="pro-lede">
              Pro keeps your shot history and recommendations together and includes up to 20
              AI-assisted shot analyses each month.
            </p>
          </div>
          <div className="pro-details">
            <p className="pro-price">Annual plan</p>
            <p>Localized pricing is shown in the App Store before purchase.</p>
            <AppStoreLink className="store-button-light" />
          </div>
        </div>
      </section>

      <section className="final-cta" aria-labelledby="final-title">
        <div className="section-inner final-cta-inner">
          <div>
            <p className="section-label">READY FOR THE NEXT SHOT?</p>
            <h2 id="final-title">Make the next adjustment count.</h2>
          </div>
          <AppStoreLink />
        </div>
      </section>

      <footer className="site-footer">
        <div className="section-inner footer-inner">
          <div className="footer-brand">
            <Image src="/app/icon.png" alt="" width={36} height={36} />
            <div><strong>DialedIn</strong><span>Your espresso copilot.</span></div>
          </div>
          <div className="footer-links">
            <Link href="/privacy">Privacy Policy</Link>
            <Link href="/terms">Terms of Use</Link>
            <a href="mailto:support@dialedin.me">Support</a>
          </div>
          <p className="copyright">Copyright {new Date().getFullYear()} DialedIn.</p>
        </div>
      </footer>
    </main>
  );
}

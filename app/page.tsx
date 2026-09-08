import Image from "next/image";
import Link from "next/link";
import MotionEffects from "./motion-effects";

const APP_STORE_URL = "https://apps.apple.com/app/id6804373243";

const features = [
  {
    number: "01",
    label: "YOUR EQUIPMENT",
    title: "Start with the machine you actually use.",
    body: "Browse espresso machines, choose your setup, and begin with guidance that accounts for its basket, pump, grinder needs, and pre-infusion.",
    detail: "Machine library",
    src: "/app/machines-v2.png",
    alt: "DialedIn machine browser showing the Ascaso Steel and Breville Bambino",
  },
  {
    number: "02",
    label: "YOUR SHOT",
    title: "Show DialedIn what happened.",
    body: "The espresso coach identifies your setup, gathers the important shot details, and keeps the conversation focused on the next useful move.",
    detail: "AI-assisted shot analysis",
    src: "/app/analysis-v2.png",
    alt: "DialedIn AI shot analysis conversation identifying an espresso machine",
  },
  {
    number: "03",
    label: "YOUR PROCESS",
    title: "Build a repeatable brewing routine.",
    body: "Use a practical baseline, then work through timing and taste one variable at a time. The guide stays useful while your coffee changes.",
    detail: "Brewing guide",
    src: "/app/guide-v2.png",
    alt: "DialedIn brewing guide showing a repeatable espresso workflow",
  },
  {
    number: "04",
    label: "YOUR CARE ROUTINE",
    title: "Keep clean coffee tasting clean.",
    body: "Daily, weekly, and monthly routines make maintenance easier to remember and help prevent dirty equipment from becoming a mystery variable.",
    detail: "Cleaning guide",
    src: "/app/cleaning-v2.png",
    alt: "DialedIn cleaning guide with daily, weekly, and monthly routines",
  },
];

const steps = [
  {
    number: "01",
    title: "Choose your machine",
    body: "Set the equipment you brew with and start from a relevant baseline.",
  },
  {
    number: "02",
    title: "Record the shot",
    body: "Add timing, dose, yield, taste notes, or a video when you want deeper help.",
  },
  {
    number: "03",
    title: "Change one thing",
    body: "Apply one clear recommendation and learn what moved the cup forward.",
  },
];

function AppleLogo() {
  return (
    <svg className="store-button-icon" viewBox="0 0 384 512" aria-hidden="true" focusable="false">
      <path
        fill="currentColor"
        d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-72.6-19.7-31.5.5-60.9 18.3-77.1 46.6-32.7 56.7-8.3 140.5 23.5 186.5 15.8 22.8 34.6 48.5 59.3 47.6 23.8-1 32.8-15.3 61.4-15.3 28.6 0 36.4 15.3 61.6 14.8 25.4-.5 41.5-22.8 55.3-45.7 29.1-47.6 32.7-93.7 32.7-95.8-.7-.3-62.7-24-62.9-95.3zM260.2 105c24.3-28.8 22.1-55 21.4-64.4-21.5 1.2-46.4 14.6-60.6 31.1-15.6 17.7-24.8 39.6-22.8 63.9 23.2 1.8 44.4-10.2 62-30.6z"
      />
    </svg>
  );
}

function AppStoreLink({ className = "" }: { className?: string }) {
  return (
    <a
      className={"store-button " + className}
      href={APP_STORE_URL}
      target="_blank"
      rel="noreferrer"
    >
      <AppleLogo />
      <span className="store-button-copy">
        <span className="store-button-small">Download on the</span>
        <span className="store-button-main">App Store</span>
      </span>
    </a>
  );
}

export default function Home() {
  return (
    <main>
      <MotionEffects />
      <div className="page-progress" aria-hidden="true" />

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
            <p className="eyebrow hero-enter hero-enter-1">ESPRESSO GUIDANCE FOR YOUR EQUIPMENT</p>
            <h1 id="hero-title" className="hero-enter hero-enter-2">DialedIn</h1>
            <p className="hero-lede hero-enter hero-enter-3">
              Machine-aware guidance, brewing routines, and AI-assisted shot analysis in one
              focused iPhone app.
            </p>
            <div className="hero-actions hero-enter hero-enter-4">
              <AppStoreLink />
              <a className="quiet-link" href="#features">Explore the app</a>
            </div>
          </div>

          <div className="hero-phone hero-enter hero-enter-3" aria-label="DialedIn app preview">
            <Image
              src="/app/home-v2.png"
              alt="DialedIn home screen on iPhone"
              width={1206}
              height={2622}
              priority
              sizes="(max-width: 760px) 132px, 310px"
            />
          </div>
        </div>

        <a className="scroll-cue" href="#intro" aria-label="Scroll to learn more">
          <span>Scroll</span>
          <i aria-hidden="true" />
        </a>
      </section>

      <section className="signal-rail" aria-label="DialedIn capabilities">
        <div className="signal-track">
          <span>MACHINE GUIDES</span><b>+</b>
          <span>SHOT ANALYSIS</span><b>+</b>
          <span>BREWING ROUTINES</span><b>+</b>
          <span>CLEANING CARE</span><b>+</b>
          <span>MACHINE GUIDES</span><b>+</b>
          <span>SHOT ANALYSIS</span><b>+</b>
          <span>BREWING ROUTINES</span><b>+</b>
          <span>CLEANING CARE</span>
        </div>
      </section>

      <section className="intro-band" id="intro">
        <div className="section-inner intro-grid">
          <div data-reveal="up">
            <p className="section-label">YOUR ESPRESSO COPILOT</p>
            <h2>Less guessing.<br />More repeatable coffee.</h2>
          </div>
          <div className="intro-copy" data-reveal="up" data-delay="1">
            <p>
              Espresso changes with the machine, grinder, beans, dose, and time. DialedIn keeps
              those details together so the next adjustment has a reason behind it.
            </p>
            <p>
              Open the app at the machine, get what you need, and get back to making coffee.
            </p>
          </div>
        </div>
      </section>

      <section className="feature-section" id="features" aria-labelledby="features-title">
        <div className="section-inner">
          <div className="section-heading" data-reveal="up">
            <p className="section-label">INSIDE DIALEDIN</p>
            <h2 id="features-title">Every screen earns its place.</h2>
            <p>Real screens, paired with the job they actually help you finish.</p>
          </div>

          <div className="feature-list">
            {features.map((feature, index) => (
              <article className={"feature-row " + (index % 2 ? "feature-row-reverse" : "")} key={feature.src}>
                <div className="feature-copy" data-reveal={index % 2 ? "right" : "left"}>
                  <div className="feature-index">
                    <span>{feature.number}</span>
                    <span>{feature.detail}</span>
                  </div>
                  <p className="section-label">{feature.label}</p>
                  <h3>{feature.title}</h3>
                  <p>{feature.body}</p>
                </div>

                <div className="screen-stage" data-reveal={index % 2 ? "left" : "right"}>
                  <div className="screen-line screen-line-top" aria-hidden="true" />
                  <div className="phone-frame">
                    <Image
                      src={feature.src}
                      alt={feature.alt}
                      width={1284}
                      height={2778}
                      sizes="(max-width: 700px) 68vw, 330px"
                    />
                  </div>
                  <div className="screen-line screen-line-bottom" aria-hidden="true" />
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="result-section" aria-labelledby="result-title">
        <div className="section-inner result-grid">
          <div className="result-copy" data-reveal="left">
            <p className="section-label light">FROM DATA TO DIRECTION</p>
            <h2 id="result-title">One clear move for the next shot.</h2>
            <p>
              DialedIn turns timing into a practical adjustment, explains why it made that call,
              and shows its confidence without pretending every grinder is identical.
            </p>
          </div>

          <div className="analysis-card" data-reveal="right" aria-label="Example shot analysis result">
            <div className="analysis-card-head">
              <div><span>Shot Analysis</span><small>medium confidence</small></div>
              <span className="analysis-close">&times;</span>
            </div>
            <div className="analysis-panel timing-panel">
              <span>Timing</span>
              <dl>
                <div><dt>Total</dt><dd>53.7s</dd></div>
                <div><dt>Start</dt><dd>1.92s</dd></div>
                <div><dt>Confidence</dt><dd>96%</dd></div>
              </dl>
            </div>
            <div className="analysis-panel recommendation-panel">
              <span>Recommendation</span>
              <strong>Grind Coarser</strong>
              <p>Move about 6 small steps coarser from your current setting.</p>
              <small>Shot ran slower than the target range.</small>
            </div>
            <div className="analysis-proof">
              <span>Why this setting</span>
              <p>Shot was 21.7s outside the 25-32s target range.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="workflow-section" id="how-it-works" aria-labelledby="workflow-title">
        <div className="section-inner">
          <div className="section-heading compact" data-reveal="up">
            <p className="section-label">A QUIETER WAY TO DIAL IN</p>
            <h2 id="workflow-title">Three steps. One variable at a time.</h2>
          </div>

          <div className="steps-grid">
            {steps.map((step, index) => (
              <article className="step" key={step.number} data-reveal="up" data-delay={String(index)}>
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
          <div className="pro-screen-wrap" data-reveal="left">
            <div className="phone-frame pro-phone" aria-label="DialedIn Pro subscription screen with annual pricing">
              <div className="pro-ui">
                <div className="pro-ui-bar"><strong>DialedIn</strong><span>PRO</span></div>
                <div className="pro-ui-body">
                  <span className="pro-ui-kicker">DIALEDIN PRO</span>
                  <h3>DialedIn Pro</h3>
                  <p>Keep dialing in without the free monthly limit.</p>
                  <ul>
                    <li>Up to 20 shot analyses each month</li>
                    <li>Keep history and recommendations together</li>
                    <li>Restore access on any device</li>
                  </ul>
                  <div className="pro-ui-price">69.90 ILS <small>/ year</small></div>
                  <div className="pro-ui-button">Start Pro</div>
                  <p className="pro-ui-restore">Restore purchases</p>
                </div>
              </div>
            </div>
          </div>

          <div className="pro-copy" data-reveal="right">
            <p className="section-label light">DIALEDIN PRO</p>
            <h2 id="pro-title">Keep learning from every shot.</h2>
            <p className="pro-lede">
              Keep your shot history and recommendations together, restore access on your
              devices, and use up to 20 AI-assisted analyses each month.
            </p>
            <div className="pro-meta">
              <div><span>Plan</span><strong>Annual</strong></div>
              <div><span>Pricing</span><strong>Localized by Apple</strong></div>
            </div>
            <AppStoreLink className="store-button-light" />
          </div>
        </div>
      </section>

      <section className="final-cta" aria-labelledby="final-title">
        <div className="section-inner final-cta-inner">
          <div data-reveal="left">
            <p className="section-label">READY FOR THE NEXT SHOT?</p>
            <h2 id="final-title">Make the next adjustment count.</h2>
          </div>
          <div data-reveal="right"><AppStoreLink /></div>
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

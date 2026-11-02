import Image from "next/image";
import Link from "next/link";
import MotionEffects from "./motion-effects";

const APP_STORE_URL = "https://apps.apple.com/app/id6804373243";
const GOOGLE_PLAY_URL = "https://play.google.com/store/apps/details?id=me.dialedin.mobile&hl=en";

const features = [
  {
    number: "01",
    label: "YOUR EQUIPMENT",
    title: "Guidance that starts with your setup.",
    body: "Find your espresso machine and grinder, then work from information that reflects the equipment on your counter instead of generic advice.",
    detail: "Equipment library",
    src: "/app/machines-v2.png",
    alt: "DialedIn machine browser showing the Ascaso Steel and Breville Bambino",
  },
  {
    number: "02",
    label: "YOUR SHOT",
    title: "Turn a difficult shot into a clear next step.",
    body: "Share your setup, timing, taste notes, or a shot video. DialChat keeps the conversation focused and returns a practical adjustment to try next.",
    detail: "AI-assisted shot analysis",
    src: "/app/analysis-v2.png",
    alt: "DialedIn AI shot analysis conversation identifying an espresso machine",
  },
  {
    number: "03",
    label: "YOUR PROCESS",
    title: "Build a routine you can repeat tomorrow.",
    body: "Use a practical baseline and work through dose, yield, timing, and taste one variable at a time. The guide keeps the process grounded.",
    detail: "Brewing guide",
    src: "/app/guide-v2.png",
    alt: "DialedIn brewing guide showing a repeatable espresso workflow",
  },
  {
    number: "04",
    label: "YOUR CARE ROUTINE",
    title: "Keep maintenance from becoming a mystery variable.",
    body: "Straightforward daily, weekly, and monthly routines make care easier to remember and help keep old coffee oils out of the cup.",
    detail: "Cleaning guide",
    src: "/app/cleaning-v2.png",
    alt: "DialedIn cleaning guide with daily, weekly, and monthly routines",
  },
];

const steps = [
  {
    number: "01",
    title: "Tell DialChat your setup",
    body: "Choose your machine and grinder, or share a photo when you need help identifying them.",
  },
  {
    number: "02",
    title: "Share what happened",
    body: "Add the shot time, dose, yield, taste notes, or a video for timing analysis.",
  },
  {
    number: "03",
    title: "Try one useful adjustment",
    body: "Get a clear recommendation, the reason behind it, and a focused change for the next shot.",
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
      aria-label="Download DialedIn on the App Store"
    >
      <AppleLogo />
      <span className="store-button-copy">
        <span className="store-button-small">Download on the</span>
        <span className="store-button-main">App Store</span>
      </span>
    </a>
  );
}

function GooglePlayLogo() {
  return (
    <svg
      className="store-button-icon google-play-icon"
      viewBox="0 0 512 512"
      aria-hidden="true"
      focusable="false"
    >
      <path fill="#00d2ff" d="M55 32 305 256 55 480Z" />
      <path fill="#00e676" d="m55 32 316 178-66 46Z" />
      <path fill="#ffea00" d="m305 256 66 46L55 480Z" />
      <path fill="#ff3d00" d="m371 210 90 51c23 13 23 47 0 60l-90 51-66-116Z" />
    </svg>
  );
}

function GooglePlayLink({ className = "" }: { className?: string }) {
  return (
    <a
      className={"store-button " + className}
      href={GOOGLE_PLAY_URL}
      target="_blank"
      rel="noreferrer"
      aria-label="Get DialedIn on Google Play"
    >
      <GooglePlayLogo />
      <span className="store-button-copy">
        <span className="store-button-small">GET IT ON</span>
        <span className="store-button-main">Google Play</span>
      </span>
    </a>
  );
}

function StoreLinks({ light = false }: { light?: boolean }) {
  const className = light ? "store-button-light" : "";

  return (
    <div className="store-links">
      <AppStoreLink className={className} />
      <GooglePlayLink className={className} />
    </div>
  );
}

export default function Home() {
  return (
    <main>
      <MotionEffects />
      <div className="page-progress" aria-hidden="true" />
      <a className="skip-link" href="#main-content">Skip to content</a>

      <header className="site-header">
        <div className="header-inner">
          <Link className="brand" href="/" aria-label="DialedIn home">
            <Image src="/app/icon.png" alt="" width={42} height={42} priority />
            <span>DialedIn</span>
          </Link>

          <nav className="main-nav" aria-label="Main navigation">
            <a href="#analysis">AI analysis</a>
            <a href="#features">Features</a>
            <a href="#pricing">Pricing</a>
          </nav>

          <a className="header-download" href="#download">
            Get the app
          </a>
        </div>
      </header>

      <section className="hero" id="main-content" aria-labelledby="hero-title">
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
            <p className="eyebrow hero-enter hero-enter-1">AI ESPRESSO COACH FOR HOME BARISTAS</p>
            <h1 id="hero-title" className="hero-enter hero-enter-2">DialedIn</h1>
            <p className="hero-promise hero-enter hero-enter-3">
              Better espresso, one adjustment at a time.
            </p>
            <p className="hero-lede hero-enter hero-enter-3">
              Analyze your shot, understand what changed, and get a practical recommendation
              for what to try next. Built around your machine, grinder, and coffee.
            </p>
            <div className="hero-actions hero-enter hero-enter-4" id="download">
              <StoreLinks />
              <a className="quiet-link" href="#analysis">See how it works</a>
            </div>
            <ul className="hero-proof hero-enter hero-enter-4" aria-label="Availability and plan highlights">
              <li>iOS and Android</li>
              <li>Free to start</li>
              <li>3 free analyses monthly</li>
            </ul>
          </div>

          <div className="hero-phone hero-enter hero-enter-3" aria-label="DialedIn app preview">
            <Image
              src="/app/analysis-v2.png"
              alt="DialedIn AI shot analysis conversation with an equipment photo and recommendation"
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
            <p className="section-label">MADE FOR THE HOME ESPRESSO ROUTINE</p>
            <h2>Your next shot should teach you something.</h2>
          </div>
          <div className="intro-copy" data-reveal="up" data-delay="1">
            <p>
              Espresso changes with the machine, grinder, beans, dose, yield, and time. DialedIn
              brings that context together so your next adjustment has a reason behind it.
            </p>
            <p>
              It is a focused companion for people learning their setup, not a replacement for
              tasting, experimenting, or building their own intuition.
            </p>
          </div>
        </div>
      </section>

      <section className="analysis-section" id="analysis" aria-labelledby="analysis-title">
        <div className="section-inner analysis-intro">
          <div className="analysis-copy" data-reveal="left">
            <p className="section-label light">AI-ASSISTED SHOT ANALYSIS</p>
            <h2 id="analysis-title">From &ldquo;what went wrong?&rdquo; to one useful next move.</h2>
            <p>
              DialChat gathers the details that matter, can analyze a shot video for timing, and
              turns the result into an actionable recommendation with a confidence level and a
              plain-language reason.
            </p>
            <div className="analysis-steps" aria-label="Shot analysis process">
              {steps.map((step) => (
                <div className="analysis-step" key={step.number}>
                  <span>{step.number}</span>
                  <div><strong>{step.title}</strong><p>{step.body}</p></div>
                </div>
              ))}
            </div>
          </div>

          <div className="analysis-demo" data-reveal="right">
            <div className="phone-frame analysis-phone">
              <Image
                src="/app/analysis-v2.png"
                alt="DialChat identifying an espresso machine and presenting a shot analysis recommendation"
                width={1206}
                height={2622}
                sizes="(max-width: 720px) 64vw, 290px"
              />
            </div>
            <div className="analysis-card" aria-label="Example shot analysis result">
              <div className="analysis-card-head">
                <div><span>Shot Analysis</span><small>medium confidence</small></div>
                <span className="analysis-close" aria-hidden="true">&times;</span>
              </div>
              <div className="analysis-panel timing-panel">
                <span>Timing</span>
                <dl>
                  <div><dt>Total</dt><dd>53.7s</dd></div>
                  <div><dt>Target</dt><dd>25-32s</dd></div>
                  <div><dt>Confidence</dt><dd>96%</dd></div>
                </dl>
              </div>
              <div className="analysis-panel recommendation-panel">
                <span>Recommendation</span>
                <strong>Grind Coarser</strong>
                <p>Move about 6 small steps coarser from your current setting.</p>
                <small>Shot ran slower than the target range.</small>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="feature-section" id="features" aria-labelledby="features-title">
        <div className="section-inner">
          <div className="section-heading" data-reveal="up">
            <p className="section-label">MORE THAN A SHOT TIMER</p>
            <h2 id="features-title">Useful before, during, and after the shot.</h2>
            <p>Real product screens, paired with the outcome each part of DialedIn helps you reach.</p>
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

      <section className="pro-section" id="pricing" aria-labelledby="pro-title">
        <div className="section-inner pro-grid">
          <div className="pro-copy" data-reveal="up">
            <p className="section-label light">DIALEDIN PLANS</p>
            <h2 id="pro-title">Start free. Go Pro when you need more analysis.</h2>
            <p className="pro-lede">
              The equipment library, brewing guidance, and cleaning routines are available to
              explore without a subscription. Monthly AI analysis limits depend on your plan.
            </p>
          </div>

          <div className="plan-grid">
            <article className="plan plan-free" data-reveal="left">
              <div className="plan-heading"><p>Free</p><strong>Get started</strong></div>
              <ul>
                <li>Up to 3 AI-assisted shot analyses each month</li>
                <li>Browse machine and grinder information</li>
                <li>Use brewing and cleaning guides</li>
              </ul>
            </article>
            <article className="plan plan-pro" data-reveal="right">
              <div className="plan-heading"><p>DialedIn Pro</p><strong>₪69.90 <small>/ year in Israel</small></strong></div>
              <ul>
                <li>Up to 20 AI-assisted shot analyses each month</li>
                <li>Keep shot history and recommendations together</li>
                <li>Restore Pro access on devices using your account</li>
              </ul>
              <p className="pricing-note">Annual subscription. Your local store shows the final price and applicable taxes before purchase.</p>
            </article>
          </div>

          <div className="pricing-download" data-reveal="up">
            <p>Download free on iOS or Android. Upgrade inside the app when you are ready.</p>
            <StoreLinks light />
          </div>
        </div>
      </section>

      <section className="final-cta" aria-labelledby="final-title">
        <div className="section-inner final-cta-inner">
          <div data-reveal="left">
            <p className="section-label">AVAILABLE NOW ON IOS AND ANDROID</p>
            <h2 id="final-title">Make the next shot count.</h2>
          </div>
          <div data-reveal="right"><StoreLinks /></div>
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

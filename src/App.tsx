import { useEffect, useRef } from 'react';
// @ts-ignore
import { GhostEngine } from './GhostEngine.js';

export function App() {
  const initialized = useRef(false);

  useEffect(() => {
    if (!initialized.current) {
      initialized.current = true;
      const engine = new GhostEngine();
      return () => engine.destroy();
    }
  }, []);

  return (
    <>
      {/* OVERLAYS */}
      <div id="arch-grid" aria-hidden="true">
        <div /><div /><div /><div />
        <div /><div /><div /><div />
        <div /><div /><div /><div />
      </div>
      <div id="grain-layer" aria-hidden="true" />
      <canvas id="bg-canvas" aria-hidden="true" />
      <canvas id="particle-canvas" aria-hidden="true" />
      <div className="bg-gradient-overlay" aria-hidden="true" />
      <div id="ambient-glow" aria-hidden="true" />

      {/* CURSOR */}
      <div id="cursor-ring" aria-hidden="true"><span id="cursor-label" /></div>
      <div id="cursor-dot" aria-hidden="true" />

      {/* HUD / NAV */}
      <header>
        <div className="hud hud-top-left magnetic-wrap" data-magnetic="link" data-label="HOME"
             onClick={() => window.scrollTo({top:0,behavior:'smooth'})} role="link" tabIndex={0}
             aria-label="BNDR LLC Home">
          <img
            src="https://www.dropbox.com/scl/fi/t1zxkjm4lq4sfveedn119/bndr26.png?rlkey=mc6decn5olct67crw7zmqp89g&st=f4ug8u31&raw=1&v=2"
            alt="BNDR LLC"
            referrerPolicy="no-referrer"
            crossOrigin="anonymous"
            onError={(e) => {
              (e.target as any).setAttribute('data-broken', '1');
              (e.target as any).insertAdjacentHTML('afterend', `<span style="font-family:var(--font-display);font-size:22px;font-weight:900;letter-spacing:-0.04em;color:var(--bone)">BNDR</span>`);
            }}
          />
        </div>
        <nav className="hud hud-top-right" aria-label="Main navigation">
          <div className="magnetic-wrap" data-magnetic="link" data-label="ABOUT">
            <a className="nav-link" href="#sec-about" data-target="#sec-about" role="button" tabIndex={0}>ABOUT</a>
          </div>
          <div className="magnetic-wrap" data-magnetic="link" data-label="VIEW">
            <a className="nav-link" href="#sec-work" data-target="#sec-work" role="button" tabIndex={0}>WORK</a>
          </div>
          <div className="magnetic-wrap" data-magnetic="link" data-label="RATE">
            <a className="nav-link" href="#sec-pricing" data-target="#sec-pricing" role="button" tabIndex={0}>PRICING</a>
          </div>
          <div className="magnetic-wrap" data-magnetic="link" data-label="CONNECT">
            <a className="nav-link nav-link-connect" id="nav-connect" role="button" tabIndex={0}>CONNECT</a>
          </div>
          <button className="theme-btn" id="theme-toggle" aria-label="Toggle light/dark mode">
            <svg id="theme-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                 strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z" />
            </svg>
          </button>
        </nav>
      </header>

      {/* FOOTER */}
      <footer aria-label="Site controls">
        <div className="footer-left">
          <span className="footer-brand">BNDR LLC</span>
          <span className="footer-meta">PHX, AZ · 2026</span>
        </div>
        <div className="footer-center">
          <a href="/privacy-policy">Privacy Policy</a>
        </div>
        <div className="footer-right">
          <span id="audio-toggle" role="button" tabIndex={0} aria-label="Toggle audio">AUDIO_OFF</span>
        </div>
      </footer>

      {/* PROGRESS BARS */}
      <div className="progress-bottom" aria-hidden="true"><div className="progress-bottom-fill" id="prog-b" /></div>
      <div className="progress-side" aria-hidden="true"><div className="progress-side-fill" id="prog-s" /></div>

      {/* PERSISTENT CONTACT BUTTON */}
      <div id="contact-btn-wrap">
        <button id="contact-btn" aria-label="Get in touch with BNDR LLC">
          <svg className="cbtn-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor"
               strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M5 19L19 5" /><path d="M9 5h10v10" /><path d="M3 21 Q3 16 7 12" />
          </svg>
          <span className="cbtn-text">Reach Out</span>
        </button>
      </div>

      {/* 3D CAROUSEL */}
      <div id="viewport-3d" aria-hidden="true">
        <div id="carousel-container" className="magnetic-wrap" data-magnetic="card" data-label="⟷" />
      </div>

      {/* MOBILE CAROUSEL NAV */}
      <div id="carousel-nav" aria-label="Carousel controls">
        <button id="carousel-prev" aria-label="Previous project" type="button">&#8592;</button>
        <button id="carousel-next" aria-label="Next project" type="button">&#8594;</button>
      </div>

      {/* MOBILE SECTION NAV */}
      <div id="section-nav" aria-label="Section navigation">
        <button id="sec-up" aria-label="Previous section" type="button">&#8593;</button>
        <button id="sec-dn" aria-label="Next section" type="button">&#8595;</button>
      </div>

      {/* CARD MODAL */}
      <div id="card-modal" role="dialog" aria-modal="true" aria-label="Project preview" aria-hidden="true">
        <div className="modal-bg" />
        <div className="modal-content">
          <iframe id="modal-frame" src="" sandbox="allow-scripts allow-same-origin allow-forms allow-popups"
                  loading="lazy" title="Project preview" />
          <div className="modal-nav">
            <button id="modal-expand" className="magnetic-wrap" data-magnetic="link" data-label="MAX">EXPAND</button>
            <button id="modal-window" className="magnetic-wrap" data-magnetic="link" data-label="LINK">OPEN SITE ↗</button>
            <button id="modal-close" className="magnetic-wrap" data-magnetic="link" data-label="EXIT">CLOSE [X]</button>
          </div>
        </div>
      </div>

      {/* CONTACT MODAL */}
      <div id="touch-modal" role="dialog" aria-modal="true" aria-label="Contact BNDR LLC" aria-hidden="true">
        <div className="modal-bg" />
        <div className="touch-inner">
          <button className="touch-close-x" id="touch-close-x" aria-label="Close">ESC</button>
          <p className="touch-eyebrow">Direct line — no gatekeeping</p>
          <h2 className="touch-title">Be in<br />Touch</h2>
          <form id="touch-form" action="https://formsubmit.co/bndr.labs@gmail.com" method="POST" noValidate>
            <input type="text" name="_honey" style={{ display: 'none' }} tabIndex={-1} autoComplete="off" />
            <input type="hidden" name="_captcha" value="false" />
            <div className="touch-field">
              <label htmlFor="t-name">Name</label>
              <input id="t-name" name="name" type="text" placeholder="Your name" autoComplete="name" required />
            </div>
            <div className="touch-field">
              <label htmlFor="t-email">Email</label>
              <input id="t-email" name="email" type="email" placeholder="your@email.com" autoComplete="email" required />
            </div>
            <div className="touch-field">
              <label htmlFor="t-msg">What do you need?</label>
              <textarea id="t-msg" name="message" placeholder="Brand, web, both — tell us." required />
            </div>
            <div className="touch-actions">
              <button type="submit" className="touch-submit">Send It →</button>
              <button type="button" className="touch-cancel" id="touch-cancel">Cancel</button>
            </div>
          </form>
        </div>
      </div>

      {/* MAIN CONTENT */}
      <main>
        <section id="sec-hero" aria-label="BNDR Unlimited Hero">
          <div className="content-block vel-skew">
            <div className="sec-title left"><span>01</span><div className="line" /></div>
            <h1 className="kinetic-text split-text">BNDR</h1>
            <h1 className="kinetic-text split-text">UNLIMITED</h1>
            <p className="hero-copy mt-4 text-lg">
              I work with 3 active clients at a time so every client gets the attention and time they deserve.
            </p>
            <p className="hero-copy mt-2 text-lg font-bold">
              $3,995/month<br/>
              <span className="font-normal text-sm">Unlimited requests. Unlimited revisions. Cancel anytime.</span>
            </p>
            <p className="hero-copy mt-4 text-sm opacity-80">
              Websites, Refinements on Existing Content, AI agents, Integrations, Branding, Data Analysis, Bottleneck Breakouts, Marketing Materials, Services, Graphic design, Dashboards, Web applications, and more..
            </p>
            <p className="hero-copy mt-6 text-sm">
              Email: bndr.labs@gmail.com<br/>
              Phone: 717-919-7731
            </p>
          </div>
        </section>

        <div className="marquee-container" data-speed="2" aria-hidden="true">
          <div className="marquee-track">
            <span>CLIENT SATISFACTION</span><span className="filled">BNDR LABS</span>
            <span>DIRECT CONTACT</span><span>BUILD TO BE REMEMBERED</span>
            <span className="filled">BNDR LLC</span><span>PAID CLIENT REFERRALS</span>
            <span>CLIENT SATISFACTION</span><span className="filled">BNDR LABS</span>
            <span>DIRECT CONTACT</span><span>BUILD TO BE REMEMBERED</span>
            <span className="filled">BNDR LLC</span><span>PAID CLIENT REFERRALS</span>
          </div>
        </div>

        <section id="sec-about" aria-label="The Partnership">
          <div className="content-block vel-skew">
            <div className="sec-title left"><span>02</span><div className="line" /></div>
            <h2 className="kinetic-text split-text">THE</h2>
            <h2 className="kinetic-text split-text">PARTNERSHIP</h2>
            <div className="about-copy mt-8">
              <p>The whole month is on me. You get back to your business without worrying about extra charges. We set the goals together, I focus on getting them done, and we adjust if or as needed. I’m here to share what I know works, what I know doesn’t, and use the right tools to find problems before they get expensive. I believe in building things right from the start. Mistakes cost money. I respect that.</p>
            </div>
          </div>
        </section>

        <section id="sec-background" aria-label="Background">
          <div className="content-block vel-skew">
            <div className="sec-title left"><span>03</span><div className="line" /></div>
            <h2 className="kinetic-text split-text">BACK</h2>
            <h2 className="kinetic-text split-text">GROUND</h2>
            <div className="about-copy mt-8">
              <p>I’ve spent nearly 20 years in sales, training, and management, learning what drives anybody to make decisions, what keeps them coming back as loyal clients, and what does the opposite. I’ve always valued the conversations I’ve had, especially with business owners – finding out what excites them about their business, what makes it worth the sacrifice, and what makes them trust what they’re doing with it and the directions that takes them. That experience, along with training courses and years of deep studying, shaped how I think, build, and solve problems.</p>
              <p>I’ve built my own frameworks to improve strategy over the years, ways to sharpen messaging so that both parties feel they’re in control, because they are. My belief is – doing the work as stated requires much less convincing, smoother flow, and better relationships long term, and for referral business. I can identify bottlenecks clearly. Many of these frameworks and methods have helped me reach top national sales positions in corporate environments.</p>
              <p>Now I carry the full burden of providing that same attention and care to my company’s clients, the same way that you do when you put something behind your name. BNDR blends a mix of creative design and applied psychology. I do this in websites, branding, and every other way that your business presents. If you want someone who pays attention to the details and understands what sets a business apart, you’ve found the right partner. Take a look through my links - note that not all work is complete, I’m just giving you a fair look at what interests me, browse different sites I have set up, and give me a shout. I’d love to talk. Until then - Take care,</p>
              <p>– Scott</p>
            </div>
          </div>
        </section>
        
        <div className="marquee-container" data-speed="-1.5" aria-hidden="true">
          <div className="marquee-track">
            <span className="filled">20yrs OBSERVING BUYER BEHAVIORS</span>
            <span>ASYMMETRIC DESIGNS BREAK THE MOLD</span>
            <span className="filled">YOU NEED TRUST — MADE SIMPLE</span>
            <span>DIRECT SUPPORT KEEPS YOUR BUSINESS OPTIMIZED</span>
            <span className="filled">20yrs OBSERVING BUYER BEHAVIORS</span>
            <span>ASYMMETRIC DESIGNS BREAK THE MOLD</span>
            <span className="filled">YOU NEED TRUST — MADE SIMPLE</span>
            <span>DIRECT SUPPORT KEEPS YOUR BUSINESS OPTIMIZED</span>
          </div>
        </div>

        <section id="sec-how" aria-label="How it works">
          <div className="content-block vel-skew">
            <div className="sec-title left"><span>04</span><div className="line" /></div>
            <h2 className="kinetic-text split-text">HOW IT</h2>
            <h2 className="kinetic-text split-text">WORKS</h2>
            <div className="about-copy mt-8">
              <p><strong>1. Request</strong><br/>Email-first. Send what you want built or improved. Links, notes, rough drafts—fine.</p>
              <p><strong>2. Priority</strong><br/>You set the priority. Keeping one request active at a time, we’ll queue up anything next in your pipeline, or we can pause and re-route to get something time sensitive completed.</p>
              <p><strong>3. Delivery + revisions</strong><br/>When a request goes active, it gets a clear delivery window. Larger items ship in checkpoints until complete. Revisions continue until it’s approved, then the next request goes active.</p>
              <p className="mt-8"><strong>Keeping everyone in the loop</strong><br/>Unlimited participants can be included. One point person approves final decisions.</p>
              <p><strong>Optional workflow</strong><br/>A shared request board can be added. A private ChatGPT space can be included for requests, iteration, and access to my custom-built AI systems that are not public.</p>
            </div>
          </div>
        </section>

        <section id="sec-work" aria-label="Work examples">
          <div className="content-block vel-skew">
            <div className="sec-title left"><span>05</span><div className="line" /></div>
            <h2 className="kinetic-text split-text">SELECTED</h2>
            <h2 className="kinetic-text split-text">WORK</h2>
            <p className="work-overline">Selected projects — click to preview</p>
            <div className="work-grid" id="work-grid" role="list" aria-label="Project examples" />
          </div>
        </section>

        <section id="sec-apps" aria-label="Web Apps">
          <div className="content-block vel-skew">
            <div className="sec-title left"><span>06</span><div className="line" /></div>
            <h2 className="kinetic-text split-text">WEB</h2>
            <h2 className="kinetic-text split-text">APPS</h2>
            <p className="work-overline">Web applications — click to preview</p>
            <div className="work-grid" id="apps-grid" role="list" aria-label="Web app examples" />
          </div>
        </section>

        <section id="sec-pricing" aria-label="Pricing">
          <div className="content-block vel-skew pin-reveal-wrap">
            <div className="sec-title left"><span>07</span><div className="line" /></div>
            <div className="pricing-block">
              <div className="pricing-eyebrow">BNDR Unlimited</div>
              <div className="pricing-amount">$3,995 <span>/ month</span></div>
              <div className="pricing-rule">Cancel anytime.</div>
              <div className="pricing-divider" />
              <div className="pricing-heading">Unlimited requests including:</div>
              <div className="pricing-tags">
                Branding · Websites · Web apps · Integrations · Dashboards · Data Analysis · Graphic design · Bottleneck Breaker · Marketing Materials · Convenience Services · Intelligent, Structured, AI-agents · Refinements on Existing Content
              </div>
              <div className="pricing-divider" />
              <ul className="pricing-ops">
                <li>No setup fee</li>
                <li>Cancel anytime</li>
                <li>Hosting included</li>
                <li>Unlimited revisions - one (sometimes two) at a time</li>
                <li>Delivery includes full setup and ongoing support</li>
              </ul>
            </div>
            <button className="pricing-cta" id="pricing-cta">Let's Talk →</button>
          </div>
        </section>

        <section id="sec-faq" aria-label="FAQ">
          <div className="content-block vel-skew">
            <div className="sec-title left"><span>08</span><div className="line" /></div>
            <h2 className="kinetic-text split-text">FAQ</h2>
            <div className="about-copy mt-8">
              <p><strong>What can be requested?</strong><br/>Unlimited requests including: Websites, Refinements on Existing Content, AI agents, Integrations, Branding, Data Analysis, Bottleneck Breakouts, Marketing Materials, Services, Graphic design, Dashboards, Web applications, and more..</p>
              <p><strong>How fast is delivery?</strong><br/>When a request goes active, it gets a stated delivery window. Larger requests ship in checkpoints until complete.</p>
              <p><strong>How do requests work?</strong><br/>Unlimited requests can be queued. One request is active at a time, if it’s something smaller, at times I may have the room to double-up, but not always.</p>
              <p><strong>How do revisions work?</strong><br/>Unlimited revisions. Notes come in, changes go out, then approval, then the next request goes active.</p>
              <p><strong>How does onboarding work?</strong><br/>A short alignment exchange by email: goals, priority, links/assets, and what “done” means to you for any given request. Then I get to work, and send you the results, and we go from there.</p>
              <p><strong>How do we communicate?</strong><br/>Call, Email, Text, whatever is easiest for you. A shared board can be added. Something like private ChatGPT space can be included.</p>
              <p><strong>Do you use AI?</strong><br/>Yes. AI is part of my workflow across web services, with a heavy human hand & eye in the loop</p>
              <p><strong>Do you build in Webflow?</strong><br/>Not at the moment. Looking for a good easy fit for both myself and my clients.</p>
              <p><strong>How many people from my team can be involved?</strong><br/>Unlimited participants. One designated approver signs off on final decisions.</p>
              <p><strong>What about images and visual assets?</strong><br/>Brand-matched visuals can be created and tailored to your style. Third-party assets can be licensed for your use, with the license details passed through.</p>
            </div>
          </div>
        </section>

        <section id="sec-connect" aria-label="Connect with BNDR LLC">
          <div className="content-block vel-skew">
            <div className="sec-title left"><span>09</span><div className="line" /></div>
            <h2 className="kinetic-text split-text">CONNECT</h2>
            <p className="social-overline">Direct lines — no gatekeeping</p>
            <div className="social-grid" id="social-grid" role="list" aria-label="Social media and contact links" />
          </div>
        </section>
      </main>
    </>
  );
}

export default App;

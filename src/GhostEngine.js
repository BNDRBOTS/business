import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Lenis from 'lenis';

export const PROJECTS = [
    { url: 'https://bndrbots.github.io/immersion/', label: 'IMMERSION' },
    { url: 'https://bndrbots.github.io/adrenaline_restraint/', label: 'ADRENALINE RESTRAINT' },
    { url: 'https://bndrbots.github.io/Evies_Cafe/', label: "EVIE'S CAFE" },
    { url: 'https://bndrbots.github.io/VenomCuts/', label: 'VENOM CUTS' },
    { url: 'https://bndrbots.github.io/demo/', label: 'DEMO' },
    { url: 'https://bndrbots.github.io/EpochAura/', label: 'EPOCH AURA' },
    { url: 'https://bndrbots.github.io/PrivateWealth/', label: 'PRIVATE WEALTH' },
    { url: 'https://bndrbots.github.io/raymarched/', label: 'RAYMARCHED' },
    { url: 'https://bndrbots.github.io/Sangredelsol/', label: 'SANGRE DEL SOL' },
    { url: 'https://bndrbots.github.io/verdict/', label: 'VERDICT' },
    { url: 'https://bndrbots.github.io/TheFeedUpraded/', label: 'THE FEED UPGRADED' },
    { url: 'https://bndrbots.github.io/auto_logistics/', label: 'AUTO LOGISTICS' },
    { url: 'https://bndrbots.github.io/distortion/', label: 'DISTORTION' },
    { url: 'https://bndrbots.github.io/Biltmore_Signal_Advisory/', label: 'BILTMORE SIGNAL ADVISORY' },
];

export const WEB_APPS = [
    { url: 'https://bndrbots.github.io/RogueRita_CyberArena_BossPack/', label: 'ROGUERITA CYBERARENA BOSSPACK' },
    { url: 'https://bndrbots.github.io/RogueRita_Vaporwave/', label: 'ROGUERITA VAPORWAVE' },
    { url: 'https://bndrbots.github.io/Rogue_Rita/', label: 'ROGUE RITA' },
    { url: 'https://bndrbots.github.io/transcriber/', label: 'TRANSCRIPTION' },
    { url: 'https://v0-image-analysis-three-chi-68.vercel.app/', label: 'QALM' },
    { url: 'https://bndrbots.github.io/apexsound-voice-engine/', label: 'APEXSOUND VOICE ENGINE' },
    { url: 'https://bndrbots.github.io/morph_black/', label: 'MORPH BLACK' },
    { url: 'https://bndrbots.github.io/BNDR_LifeMatrix/', label: 'BNDR LIFEMATRIX' },
    { url: 'https://bndrbots.github.io/BNDR-Dashboard/', label: 'BNDR DASHBOARD' },
    { url: 'https://bndrbots.github.io/Graffiti-Generator/', label: 'GRAFFITI GENERATOR' },
];

export const mshot = u => `https://s0.wordpress.com/mshots/v1/${encodeURIComponent(u)}?w=700&h=500`;

export const SOCIALS = [
    { href:'https://www.linkedin.com/in/bndrtech/', label:'LinkedIn', handle:'/in/bndrtech', color:'#0A66C2', svg:`<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>` },
    { href:'https://substack.com/@bndrllc', label:'Substack', handle:'@bndrllc', color:'#FF6719', svg:`<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M22.539 8.242H1.46V5.406h21.08v2.836zM1.46 10.812V24L12 18.11 22.54 24V10.812H1.46zM22.54 0H1.46v2.836h21.08V0z"/></svg>` },
    { href:'https://github.com/BNDRBOTS', label:'GitHub', handle:'BNDRBOTS', color:'#d0d0d0', svg:`<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/></svg>` },
    { href:'https://www.instagram.com/bndrllc', label:'Instagram', handle:'@bndrllc', color:'#E1306C', svg:`<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>` },
    { href:'https://www.facebook.com/BNDRLLC', label:'Facebook', handle:'BNDRLLC', color:'#1877F2', svg:`<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>` },
    { href:'https://buymeacoffee.com/bndr', label:'Coffee', handle:'bndr', color:'#FFDD00', svg:`<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M20.216 6.415l-.132-.666c-.119-.598-.388-1.163-1.001-1.379-.197-.069-.42-.098-.57-.241-.152-.143-.196-.366-.231-.572-.065-.378-.125-.756-.192-1.133-.057-.325-.102-.69-.25-.987-.195-.4-.597-.634-.996-.788a5.723 5.723 0 00-.626-.194c-1-.263-2.05-.36-3.077-.416a25.834 25.834 0 00-3.7.062c-.915.083-1.88.184-2.75.5-.318.116-.646.256-.888.501-.297.302-.393.77-.177 1.146.154.267.415.456.692.58.36.162.737.284 1.123.366 1.075.238 2.189.331 3.287.37 1.218.05 2.437.01 3.65-.118.299-.033.598-.073.896-.119.352-.054.578-.513.474-.834-.124-.383-.457-.531-.834-.473-.466.074-.96.108-1.382.146-1.177.08-2.358.082-3.536.006a22.228 22.228 0 01-1.157-.107c-.086-.01-.18-.025-.258-.036-.243-.036-.484-.08-.724-.13-.111-.027-.111-.185 0-.212h.005c.277-.06.557-.108.838-.147h.002c.131-.009.263-.032.394-.048a25.076 25.076 0 013.426-.12c.674.019 1.347.067 2.017.144l.228.031c.267.04.533.088.798.145.392.085.895.113 1.07.542.055.137.08.288.111.431l.319 1.484a.237.237 0 01-.199.284h-.003c-.037.006-.075.01-.112.015a36.704 36.704 0 01-4.743.295 37.059 37.059 0 01-4.699-.304c-.14-.017-.293-.042-.417-.06-.326-.048-.649-.108-.973-.161-.393-.065-.768.25-.768.648v.639c0 .291.222.535.512.57l.062.008c.607.083 1.224.135 1.84.17 1.403.082 2.81.063 4.211-.039.751-.055 1.501-.147 2.247-.28.124-.022.244-.054.364-.079l.436-.09c.176-.037.354-.073.532-.109.176-.036.353-.072.53-.108.176-.036.353-.072.53-.108.353-.073.713-.132 1.063-.142.346-.01.688.02 1.027.063.44.054.878.13 1.312.218.207.041.413.085.618.128.217.046.434.093.65.14.176.036.353.072.529.108a.78.78 0 00.143.019c.214.002.404-.126.479-.326l.043-.116c.1-.27.04-.572-.157-.762z"/></svg>` },
    { href:'https://bndrllc.gumroad.com/', label:'Gumroad', handle:'bndrllc', color:'#FF90E8', svg:`<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 0C5.372 0 0 5.373 0 12s5.372 12 12 12 12-5.373 12-12S18.628 0 12 0zm3.994 17.016H12c-3.514 0-6.219-2.25-6.219-5.016S8.486 6.984 12 6.984h3.994v2.25H12c-1.989 0-3.717 1.125-3.717 2.766S10.011 14.766 12 14.766h.684v-2.016H15v4.266h-.006z"/></svg>` },
    { href:'https://promptbase.com/profile/bndrllc', label:'PromptBase', handle:'bndrllc', color:'#6366F1', svg:`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="2" y="3" width="20" height="14" rx="2"/><polyline points="8 21 12 17 16 21"/><line x1="7" y1="8" x2="10" y2="8"/><line x1="7" y1="12" x2="17" y2="12"/><path d="M13 8l2 2-2 2"/></svg>` },
    { href:'mailto:bndr.labs@gmail.com', label:'Email', handle:'bndr.labs@gmail.com', color:'#00F3FF', svg:`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>` },
    { href:'tel:7179197731', label:'Phone', handle:'717-919-7731', color:'#00FF66', svg:`<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/></svg>` },
];

export const splitText = () => {
    document.querySelectorAll('.split-text').forEach(el => {
        const txt = el.innerText;
        el.innerHTML = '';
        txt.split(' ').forEach(word => {
            if (!word) return;
            const w = document.createElement('span');
            w.className = 'word';
            word.split('').forEach(ch => {
                const c = document.createElement('span');
                c.className = 'char';
                c.innerText = ch;
                w.appendChild(c);
            });
            el.appendChild(w);
            el.innerHTML += ' ';
        });
    });
};

export class GhostEngine {
    constructor() {
        this.isMobile = window.innerWidth <= 768;
        this.isCoarse = window.matchMedia('(pointer:coarse)').matches;
        this.carouselOffset = 0;
        this.cards = [];
        this.audio = { ctx:null, enabled:false };
        this.lastTick = 0;
        this.grainFrames = 0;
        this.boundRender = this.render.bind(this);
        this.boundResize = this.onResize.bind(this);

        splitText();
        this.initTheme();
        this.initDOM();
        this.initLenisGSAP();
        if (!this.isMobile) { this.initGrain(); this.initCanvases(); }
        this.initCards();
        this.initWork();
        this.initApps();
        this.initSocials();
        this.initModals();
        if (!this.isCoarse) this.initCursor();
        this.initMagnetics();
        this.initAudio();
        this.initNav();
        this.initScrollTriggers();
        this.initMobileNav();

        window.addEventListener('resize', this.boundResize, { passive:true });
    }

    destroy() {
        window.removeEventListener('resize', this.boundResize);
        if (this.lenis) this.lenis.destroy();
        gsap.ticker.remove(this.boundRender);
    }

    onResize() {
        this.isMobile = window.innerWidth <= 768;
        if (this.bgC) {
            this.bgC.width = this.pC.width = window.innerWidth;
            this.bgC.height = this.pC.height = window.innerHeight;
        }
    }

    initTheme() {
        const btn = document.getElementById('theme-toggle');
        const icon = document.getElementById('theme-icon');
        const MOON = `<path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z"/>`;
        const SUN  = `<circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>`;

        const apply = (theme) => {
            document.documentElement.setAttribute('data-theme', theme);
            localStorage.setItem('bndr-theme', theme);
            if(icon) icon.innerHTML = theme === 'dark' ? MOON : SUN;
            if(btn) btn.setAttribute('aria-label', theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode');
        };

        const cur = document.documentElement.getAttribute('data-theme') || 'dark';
        if(icon) icon.innerHTML = cur === 'dark' ? MOON : SUN;
        if(btn) btn.addEventListener('click', () => {
            apply(document.documentElement.getAttribute('data-theme') === 'dark' ? 'light' : 'dark');
        });
    }

    initDOM() {
        this.dom = {
            progB:      document.getElementById('prog-b'),
            progS:      document.getElementById('prog-s'),
            carousel:   document.getElementById('carousel-container'),
            viewport3d: document.getElementById('viewport-3d'),
            skews:      document.querySelectorAll('.vel-skew'),
            marquees:   document.querySelectorAll('.marquee-container'),
            contactBtnWrap: document.getElementById('contact-btn-wrap')
        };
    }

    initLenisGSAP() {
        gsap.registerPlugin(ScrollTrigger);

        this.lenis = new Lenis({
            duration: 1.2,
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
            smooth: true
        });

        this.lenis.on('scroll', ScrollTrigger.update);

        gsap.ticker.add((time) => {
            this.lenis.raf(time * 1000);
            this.render(time);
        });
        gsap.ticker.lagSmoothing(0);

        if (!this.isMobile) {
            gsap.to("html", {
                "--float-y": "-15px",
                duration: 2.4,
                ease: "sine.inOut",
                yoyo: true,
                repeat: -1
            });
        }
    }

    initGrain() {
        const oc = document.createElement('canvas');
        oc.width = oc.height = 200;
        const cx = oc.getContext('2d');
        const id = cx.createImageData(200,200);
        const buf = new Uint32Array(id.data.buffer);
        for (let i = 0; i < buf.length; i++) buf[i] = (Math.random()*255) << 24;
        cx.putImageData(id,0,0);
        this.grainEl = document.getElementById('grain-layer');
        if(this.grainEl) this.grainEl.style.backgroundImage = `url(${oc.toDataURL()})`;
    }

    initCanvases() {
        this.bgC = document.getElementById('bg-canvas');
        if(!this.bgC) return;
        this.bgX = this.bgC.getContext('2d',{alpha:false});
        this.pC  = document.getElementById('particle-canvas');
        this.pX  = this.pC.getContext('2d');
        this.pts = [];
        this.bgC.width = this.pC.width = window.innerWidth;
        this.bgC.height = this.pC.height = window.innerHeight;
        for (let i = 0; i < 50; i++) {
            this.pts.push({
                x:Math.random()*window.innerWidth, y:Math.random()*window.innerHeight,
                vx:(Math.random()-.5)*.5,   vy:(Math.random()-.5)*.5,
                s:Math.random()*1.5,
            });
        }
    }

    drawCanvases() {
        if (!this.bgC) return;
        const w = this.bgC.width, h = this.bgC.height;
        const sy = this.lenis.scroll || 0;
        const luma = 2 + Math.sin(sy*.005)*3;
        this.bgX.fillStyle = `hsl(0,0%,${luma}%)`;
        this.bgX.fillRect(0,0,w,h);
        this.pX.clearRect(0,0,w,h);
        this.pX.fillStyle = 'rgba(255,255,255,0.4)';
        const vd = (this.lenis.velocity || 0)*.1;
        
        const rootStyles = getComputedStyle(document.documentElement);
        const mx = parseFloat(rootStyles.getPropertyValue('--mouse-x')) || w/2;
        const my = parseFloat(rootStyles.getPropertyValue('--mouse-y')) || h/2;

        for (let i = 0; i < this.pts.length; i++) {
            const p = this.pts[i];
            p.y -= vd; p.x += p.vx; p.y += p.vy;
            const dx = mx - p.x, dy = my - p.y;
            if (dx*dx+dy*dy < 10000){ p.x-=dx*.02; p.y-=dy*.02; }
            if (p.y<0) p.y=h; if (p.y>h) p.y=0;
            if (p.x<0) p.x=w; if (p.x>w) p.x=0;
            this.pX.beginPath(); this.pX.arc(p.x,p.y,p.s,0,6.2832); this.pX.fill();
        }
    }

    initCursor() {
        this.cDot   = document.getElementById('cursor-dot');
        this.cRing  = document.getElementById('cursor-ring');
        this.cLabel = document.getElementById('cursor-label');
        this.glow   = document.getElementById('ambient-glow');

        if(!this.cDot) return;

        this.xDot = gsap.quickTo(this.cDot, "x", {duration: 0.05, ease: "power2.out"});
        this.yDot = gsap.quickTo(this.cDot, "y", {duration: 0.05, ease: "power2.out"});
        this.xRing = gsap.quickTo(this.cRing, "x", {duration: 0.3, ease: "power3.out"});
        this.yRing = gsap.quickTo(this.cRing, "y", {duration: 0.3, ease: "power3.out"});
        this.xGlow = gsap.quickTo(this.glow, "x", {duration: 0.6, ease: "power3.out"});
        this.yGlow = gsap.quickTo(this.glow, "y", {duration: 0.6, ease: "power3.out"});

        window.addEventListener('mousemove', e => {
            this.xDot(e.clientX); this.yDot(e.clientY);
            this.xRing(e.clientX); this.yRing(e.clientY);
            this.xGlow(e.clientX); this.yGlow(e.clientY);
            document.documentElement.style.setProperty('--mouse-x', e.clientX+'px');
            document.documentElement.style.setProperty('--mouse-y', e.clientY+'px');
        }, {passive:true});
    }

    initMagnetics() {
        if (this.isCoarse) return;
        document.querySelectorAll('[data-magnetic]').forEach(el => {
            let rect=null;
            const target = el.querySelector('a') || el;
            const isLink = el.getAttribute('data-magnetic') === 'link';
            el.addEventListener('mouseenter', () => {
                document.body.classList.add('cursor-hover');
                if (this.cLabel) this.cLabel.innerText = el.getAttribute('data-label')||'';
                rect = el.getBoundingClientRect();
                if (isLink) target.style.transition = 'color .3s ease';
            });
            el.addEventListener('mousemove', e => {
                if (!rect) return;
                const cx=rect.left+rect.width/2, cy=rect.top+rect.height/2;
                if (isLink) target.style.transform = `translate(${(e.clientX-cx)*.3}px,${(e.clientY-cy)*.3}px)`;
            },{passive:true});
            el.addEventListener('mouseleave', () => {
                document.body.classList.remove('cursor-hover');
                rect = null;
                if (isLink) {
                    target.style.transition = 'transform .8s cubic-bezier(.34,1.56,.64,1), color .3s ease';
                    target.style.transform = '';
                    setTimeout(() => { target.style.transition='color .3s ease'; }, 850);
                }
            });
        });
    }

    initCards() {
        if(!this.dom.carousel) return;
        const count = this.isMobile ? 12 : PROJECTS.length;
        const list = PROJECTS.slice(0, count);
        
        const w = this.isMobile ? 160 : 240;
        const h = this.isMobile ? 225 : 320;
        const radius = (w / 2) / Math.tan(Math.PI / count);

        gsap.set(this.dom.carousel, {
            z: -radius 
        });

        list.forEach((project, i) => {
            const card = document.createElement('div');
            card.className = 'card';
            card.setAttribute('role','button');
            card.setAttribute('tabindex','0');
            card.setAttribute('aria-label',`View ${project.label}`);
            
            card.style.width = `${w}px`;
            card.style.height = `${h}px`;
            card.style.marginLeft = `${-w/2}px`;
            card.style.marginTop = `${-h/2}px`;

            const angle = (i / count) * 360;
            card.style.transform = `rotateY(${angle}deg) translateZ(${radius}px)`;

            const inner = document.createElement('div');
            inner.className = 'card-inner';

            const img = document.createElement('img');
            img.className='card-shot'; img.src=mshot(project.url);
            img.alt=project.label; img.loading='lazy'; img.decoding='async';
            
            const vig = document.createElement('div'); vig.className='card-vignette';
            const lbl = document.createElement('div'); lbl.className='card-label'; lbl.textContent=project.label;
            const hint = document.createElement('div'); hint.className='card-click-hint'; hint.textContent='VIEW ↗';
            
            inner.appendChild(img); inner.appendChild(vig); inner.appendChild(lbl); inner.appendChild(hint);
            card.appendChild(inner);

            const open = () => this.openCardModal(project.url, i);
            card.addEventListener('click',open);
            card.addEventListener('keydown',e=>{ if(e.key==='Enter'||e.key===' ') open(); });
            
            this.dom.carousel.appendChild(card);
            this.cards.push(card);
        });
    }

    openCardModal(url, index) {
        const modal = document.getElementById('card-modal');
        const frame = document.getElementById('modal-frame');
        this.activeUrl = url;
        frame.src = url;
        modal.setAttribute('aria-hidden','false');
        modal.classList.add('active');
    }

    initWork() {
        const grid = document.getElementById('work-grid');
        if(!grid) return;
        PROJECTS.forEach(project => {
            const item = document.createElement('div');
            item.className='work-item';
            item.setAttribute('role','listitem');
            item.setAttribute('tabindex','0');
            item.setAttribute('aria-label',`Preview ${project.label}`);
            const img = document.createElement('img');
            img.src=mshot(project.url); img.alt=project.label; img.loading='lazy'; img.decoding='async';
            const lbl = document.createElement('div'); lbl.className='work-item-label'; lbl.textContent=project.label;
            item.appendChild(img); item.appendChild(lbl);
            item.addEventListener('click', () => {
                img.style.transition='none';
                img.style.filter='grayscale(0%) brightness(1.6)';
                img.offsetHeight;
                img.style.transition='filter .4s ease';
                img.style.filter='grayscale(0%) brightness(1)';
                this.openCardModal(project.url);
            });
            item.addEventListener('keydown',e=>{
                if(e.key==='Enter'||e.key===' '){ e.preventDefault(); this.openCardModal(project.url); }
            });
            grid.appendChild(item);
        });
    }

    initApps() {
        const grid = document.getElementById('apps-grid');
        if(!grid) return;
        WEB_APPS.forEach(project => {
            const item = document.createElement('div');
            item.className='work-item';
            item.setAttribute('role','listitem');
            item.setAttribute('tabindex','0');
            item.setAttribute('aria-label',`Preview ${project.label}`);
            const img = document.createElement('img');
            img.src=mshot(project.url); img.alt=project.label; img.loading='lazy'; img.decoding='async';
            const lbl = document.createElement('div'); lbl.className='work-item-label'; lbl.textContent=project.label;
            item.appendChild(img); item.appendChild(lbl);
            item.addEventListener('click', () => {
                img.style.transition='none';
                img.style.filter='grayscale(0%) brightness(1.6)';
                img.offsetHeight;
                img.style.transition='filter .4s ease';
                img.style.filter='grayscale(0%) brightness(1)';
                this.openCardModal(project.url);
            });
            item.addEventListener('keydown',e=>{
                if(e.key==='Enter'||e.key===' '){ e.preventDefault(); this.openCardModal(project.url); }
            });
            grid.appendChild(item);
        });
    }

    initSocials() {
        const grid = document.getElementById('social-grid');
        if(!grid) return;
        this.socialLinks = [];
        SOCIALS.forEach((s,i) => {
            const a = document.createElement('a');
            a.className='social-link'; a.href=s.href;
            a.target=(s.href.startsWith('mailto:')||s.href.startsWith('tel:')) ? '_self' : '_blank';
            a.rel='noopener noreferrer';
            a.setAttribute('role','listitem');
            a.setAttribute('aria-label',`${s.label}: ${s.handle}`);
            a.style.setProperty('--brand',s.color);
            a.style.transform='translateY(-80px)'; a.style.opacity='0';
            a.innerHTML=`<span class="s-idx">${String(i+1).padStart(2,'0')}</span>
                <span class="si">${s.svg}</span>
                <span class="s-name">${s.label}</span>
                <span class="s-handle">${s.handle}</span>
                <span class="s-arr">↗</span>`;
            grid.appendChild(a);
            this.socialLinks.push(a);
        });
    }

    initModals() {
        const cardModal = document.getElementById('card-modal');
        const frame = document.getElementById('modal-frame');

        document.getElementById('modal-expand')?.addEventListener('click', () => {
            const target = document.querySelector('.modal-content');
            try { (target.requestFullscreen||target.webkitRequestFullscreen||(() =>{})).call(target); } catch(_) {}
        });
        document.getElementById('modal-window')?.addEventListener('click', () => {
            if (this.activeUrl) window.open(this.activeUrl,'_blank','noopener');
        });
        const closeCard = () => {
            cardModal.classList.remove('active');
            cardModal.setAttribute('aria-hidden','true');
            setTimeout(()=>{ frame.src=''; }, 420);
        };
        document.getElementById('modal-close')?.addEventListener('click', closeCard);
        cardModal?.querySelector('.modal-bg')?.addEventListener('click', closeCard);

        const touchModal = document.getElementById('touch-modal');
        const closeTouch = () => {
            touchModal.classList.remove('active');
            touchModal.setAttribute('aria-hidden','true');
        };

        const openTouchModal = () => {
            touchModal.classList.add('active');
            touchModal.setAttribute('aria-hidden','false');
            document.getElementById('t-name').focus();
        };

        document.getElementById('contact-btn')?.addEventListener('click', openTouchModal);
        document.getElementById('pricing-cta')?.addEventListener('click', openTouchModal);
        document.getElementById('nav-connect')?.addEventListener('click', (e) => { e.preventDefault(); openTouchModal(); });
        document.getElementById('touch-close-x')?.addEventListener('click', closeTouch);
        document.getElementById('touch-cancel')?.addEventListener('click', closeTouch);
        touchModal?.querySelector('.modal-bg')?.addEventListener('click', closeTouch);

        window.addEventListener('keydown', e => {
            if (e.key!=='Escape') return;
            closeTouch(); closeCard();
        });

        document.getElementById('touch-form')?.addEventListener('submit', async e => {
            e.preventDefault();
            const name  = document.getElementById('t-name').value.trim();
            const email = document.getElementById('t-email').value.trim();
            const msg   = document.getElementById('t-msg').value.trim();
            if (!name || !email || !msg) return;

            const btn = e.target.querySelector('.touch-submit');
            const orig = btn.textContent;
            btn.textContent = 'Sending…';
            btn.disabled = true;

            try {
                const res = await fetch('https://formsubmit.co/ajax/bndr.labs@gmail.com', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
                    body: JSON.stringify({ name, email, message: msg, _subject: `BNDR inquiry — ${name}` })
                });
                const data = await res.json();
                if (data.success === 'true' || data.success === true) {
                    btn.textContent = 'Sent ✓';
                    setTimeout(() => { closeTouch(); e.target.reset(); btn.textContent = orig; btn.disabled = false; }, 2000);
                } else { throw new Error('not ok'); }
            } catch { btn.textContent = 'Try Again'; btn.disabled = false; }
        });
    }

    initAudio() {
        const toggle = document.getElementById('audio-toggle');
        if(!toggle) return;
        const unlock = () => {
            if (!this.audio.ctx) {
                const AC = window.AudioContext||window.webkitAudioContext;
                this.audio.ctx = new AC();
            }
            if (this.audio.ctx.state==='suspended' && this.audio.enabled) this.audio.ctx.resume();
            window.removeEventListener('pointerdown',unlock); window.removeEventListener('keydown',unlock);
        };
        window.addEventListener('pointerdown',unlock); window.addEventListener('keydown',unlock);
        toggle.addEventListener('click', () => {
            if (!this.audio.ctx) unlock();
            this.audio.enabled = !this.audio.enabled;
            if (this.audio.ctx) { this.audio.enabled ? this.audio.ctx.resume() : this.audio.ctx.suspend(); }
            toggle.innerText = this.audio.enabled ? 'AUDIO_ON' : 'AUDIO_OFF';
        });
    }

    playTick(vel) {
        if (!this.audio.enabled || !this.audio.ctx || vel < 3) return;
        const now = performance.now();
        const interval = this.isMobile ? 250 : 50;
        if (now-this.lastTick < interval) return;
        this.lastTick = now;
        try {
            const t = this.audio.ctx.currentTime;
            const osc = this.audio.ctx.createOscillator();
            const gain = this.audio.ctx.createGain();
            osc.connect(gain); gain.connect(this.audio.ctx.destination);
            osc.type='sine';
            osc.frequency.setValueAtTime(100+vel*2,t);
            osc.frequency.exponentialRampToValueAtTime(20,t+.1);
            gain.gain.setValueAtTime(Math.min(.1,vel/1000),t);
            gain.gain.exponentialRampToValueAtTime(.001,t+.05);
            osc.start(t); osc.stop(t+.1);
        } catch(_) {}
    }

    initNav() {
        document.querySelectorAll('.nav-link:not(.nav-link-connect)').forEach(link => {
            link.addEventListener('click', e => {
                e.preventDefault();
                const t = document.querySelector(link.getAttribute('data-target'));
                if (t) this.lenis.scrollTo(t);
            });
        });
    }

    initMobileNav() {
        const step = 360 / this.cards.length;
        const offsetMod = (dir) => {
            gsap.to(this, {
                carouselOffset: this.carouselOffset + (dir * step),
                duration: 0.8, ease: "power3.inOut"
            });
        };

        document.getElementById('carousel-next')?.addEventListener('click', () => offsetMod(-1));
        document.getElementById('carousel-prev')?.addEventListener('click', () => offsetMod(1));

        const vp = document.getElementById('viewport-3d');
        if(vp) {
            let tx0=0, ty0=0;
            vp.addEventListener('touchstart', e=>{ tx0=e.touches[0].clientX; ty0=e.touches[0].clientY; },{passive:true});
            vp.addEventListener('touchend', e=>{
                const dx=e.changedTouches[0].clientX-tx0;
                const dy=Math.abs(e.changedTouches[0].clientY-ty0);
                if(Math.abs(dx)>38 && Math.abs(dx)>dy) offsetMod(dx>0 ? 1 : -1);
            },{passive:true});
        }

        const sections = Array.from(document.querySelectorAll('section'));
        document.getElementById('sec-dn')?.addEventListener('click', () => {
            let currentIdx = sections.findIndex(s => s.getBoundingClientRect().top > 50);
            if (currentIdx === -1) return;
            this.lenis.scrollTo(sections[currentIdx]);
        });
        document.getElementById('sec-up')?.addEventListener('click', () => {
            let prev = sections.slice().reverse().find(s => s.getBoundingClientRect().top < -50);
            if (prev) this.lenis.scrollTo(prev);
            else this.lenis.scrollTo(0);
        });
    }

    initScrollTriggers() {
        gsap.utils.toArray('.split-text').forEach(el => {
            gsap.to(el.querySelectorAll('.char'), {
                y: '0%',
                stagger: 0.02,
                duration: 1,
                ease: "power4.out",
                scrollTrigger: { trigger: el, start: "top 90%" }
            });
        });

        gsap.utils.toArray('.sec-title .line').forEach(el => {
            gsap.fromTo(el, { scaleX: 0 }, {
                scaleX: 1, duration: 1.2, ease: "power3.inOut",
                scrollTrigger: { trigger: el, start: "top 95%" }
            });
        });

        ScrollTrigger.create({
            trigger: '.pin-reveal-wrap',
            start: "top 85%",
            onEnter: () => document.querySelector('.pin-reveal-wrap')?.classList.add('revealed'),
            once: true
        });

        ScrollTrigger.create({
            trigger: '#sec-pricing',
            start: "top 70%",
            onEnter: () => document.querySelector('#sec-pricing .vel-skew')?.classList.add('pricing-hud-on')
        });

        if (this.dom.viewport3d) {
            gsap.to(this.dom.viewport3d, {
                autoAlpha: 0,
                duration: 0.5,
                scrollTrigger: {
                    trigger: "#sec-pricing",
                    start: "top 80%",
                    toggleActions: "play none none reverse"
                }
            });
        }

        ScrollTrigger.create({
            trigger: '#sec-connect',
            start: "top 85%",
            onEnter: () => {
                if(!this.socialLinks) return;
                const step = 700 / this.socialLinks.length;
                this.socialLinks.forEach((link, i) => {
                    setTimeout(() => {
                        link.style.transition = 'transform 1.1s cubic-bezier(.16,1,.3,1), opacity 1.1s cubic-bezier(.16,1,.3,1)';
                        link.style.transform = 'translateY(0)'; link.style.opacity = '1';
                        setTimeout(()=>{ link.style.transition = ''; }, 1200);
                    }, i * step);
                });
            },
            once: true
        });
    }

    render(time) {
        if (!this.isMobile && this.grainEl) {
            if (this.grainFrames++ % 3 === 0) {
                this.grainEl.style.transform = `translate(${Math.floor(Math.random()*-10)}%,${Math.floor(Math.random()*-10)}%)`;
            }
            this.drawCanvases();
        }

        const sy = this.lenis?.scroll || 0;
        const sh = document.body.scrollHeight - window.innerHeight;
        const progress = sh > 0 ? sy / sh : 0;
        const vel = this.lenis?.velocity || 0;

        if (this.dom.progB) this.dom.progB.style.transform = `scaleX(${progress})`;
        if (this.dom.progS) this.dom.progS.style.transform = `scaleY(${progress})`;

        const skew = Math.min(Math.max(vel * 0.1, -12), 12);
        if (this.dom.skews) this.dom.skews.forEach(el => el.style.transform = `skewY(${skew}deg)`);

        if (this.dom.marquees) {
            this.dom.marquees.forEach(m => {
                const speed = parseFloat(m.getAttribute('data-speed'));
                const track = m.firstElementChild;
                const base = (time * 15 * speed) + (sy * speed * 0.08);
                let offset = base % 50;
                if (offset > 0) offset -= 50;
                track.style.transform = `translateX(${offset}%)`;
            });
        }

        const scrollAngle = (sy * 0.05) + this.carouselOffset;
        if (this.dom.carousel) this.dom.carousel.style.transform = `rotateY(${scrollAngle}deg)`;

        if (Math.abs(vel) > 8) this.playTick(Math.abs(vel));
    }
}

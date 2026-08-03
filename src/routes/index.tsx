import { createFileRoute } from "@tanstack/react-router";
import logo from "@/assets/hustlegym.jpg";
import heroImg from "@/assets/hero-gym.jpg";
import facWeights from "@/assets/facility-weights.jpg";
import facCardio from "@/assets/facility-cardio.jpg";
import facFunc from "@/assets/facility-functional.jpg";
import facStrength from "@/assets/facility-strength.jpg";
import trainerRohit from "@/assets/trainer-rohit.jpg";
import trainerMahesh from "@/assets/trainer-mahesh.jpg";

export const Route = createFileRoute("/")({
  component: Landing,
  head: () => ({
    meta: [
      { title: "Hustle Gym Kharadi — Pune's Bold 7,000 sq ft Fitness Floor" },
      {
        name: "description",
        content:
          "Hustle Gym in Kharadi, Pune — 7,000+ sq ft of cardio, free weights, strength & functional training with hands-on coaches. Book your free trial today.",
      },
      { property: "og:title", content: "Hustle Gym Kharadi — Pune's Bold 7,000 sq ft Fitness Floor" },
      {
        property: "og:description",
        content:
          "Hustle Gym in Kharadi, Pune — 7,000+ sq ft of cardio, free weights, strength & functional training with hands-on coaches. Book your free trial today.",
      },
      { property: "og:url", content: "/" },
      { name: "twitter:title", content: "Hustle Gym Kharadi — Pune's Bold 7,000 sq ft Fitness Floor" },
      {
        name: "twitter:description",
        content:
          "Hustle Gym in Kharadi, Pune — 7,000+ sq ft of cardio, free weights, strength & functional training with hands-on coaches. Book your free trial today.",
      },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "HealthClub",
          name: "Hustle Gym",
          image: "https://hustlegym.example/og.jpg",
          address: {
            "@type": "PostalAddress",
            streetAddress:
              "Marvel Edge, Office No. 109-110, 1st Floor, next to Zensar Technologies, Kharadi",
            addressLocality: "Pune",
            addressRegion: "Maharashtra",
            postalCode: "411014",
            addressCountry: "IN",
          },
          telephone: "+917276263946",
          openingHours: "Mo-Su 06:00-22:00",
          aggregateRating: { "@type": "AggregateRating", ratingValue: "4.7", reviewCount: "240" },
        }),
      },
    ],
  }),
});

const PHONE = "+91 72762 63946";
const PHONE_TEL = "+917276263946";
const INSTAGRAM = "https://instagram.com/hustlegymofficial";
const MAPS = "https://www.google.com/maps/search/?api=1&query=Hustle+Gym+Marvel+Edge+Kharadi+Pune";

function Landing() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Nav />
      <Hero />
      <Marquee />
      <About />
      <Facilities />
      <Programs />
      <Trainers />
      <Testimonials />
      <Pricing />
      <Contact />
      <Footer />
    </div>
  );
}

function Nav() {
  return (
    <header className="fixed top-0 inset-x-0 z-50 backdrop-blur-md bg-background/70 border-b border-border/60">
      <div className="container-x flex items-center justify-between h-16">
        <a href="#top" className="flex items-center gap-2">
          <img src={logo} alt="Hustle Gym" className="h-9 w-9 rounded-sm object-cover" />
          <span className="display text-lg font-bold tracking-wider">Hustle<span className="text-primary">.</span>Gym</span>
        </a>
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
          {[
            ["About", "#about"],
            ["Facilities", "#facilities"],
            ["Programs", "#programs"],
            ["Trainers", "#trainers"],
            ["Pricing", "#pricing"],
            ["Contact", "#contact"],
          ].map(([l, h]) => (
            <a key={h} href={h} className="text-muted-foreground hover:text-foreground transition-colors uppercase tracking-wider text-xs">
              {l}
            </a>
          ))}
        </nav>
        <a href="#pricing" className="btn-blood !py-2.5 !px-4 text-xs">Free Trial</a>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className="relative min-h-screen flex items-center pt-24 pb-16 overflow-hidden" style={{ background: "var(--gradient-hero)" }}>
      <div className="absolute inset-0 bg-grid opacity-40" />
      <img
        src={heroImg}
        alt="Athlete lifting heavy in a dark red-lit gym"
        width={1920}
        height={1280}
        className="absolute inset-0 w-full h-full object-cover object-center opacity-40 mix-blend-luminosity"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />

      <div className="container-x relative z-10 grid lg:grid-cols-12 gap-10 items-center">
        <div className="lg:col-span-8 rise">
          <div className="inline-flex items-center gap-2 border border-primary/40 bg-primary/10 px-3 py-1.5 rounded-sm mb-6">
            <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
            <span className="text-xs uppercase tracking-[0.2em] text-primary font-semibold">Kharadi, Pune · Open 6 AM – 10 PM</span>
          </div>
          <h1 className="display font-bold leading-[0.9] text-[clamp(3rem,9vw,7.5rem)]">
            Train Loud.<br />
            <span className="text-stroke">Train</span> <span className="text-primary">Hard.</span>
          </h1>
          <p className="mt-6 max-w-xl text-lg text-muted-foreground leading-relaxed">
            7,000+ square feet of serious iron, cardio and functional space in the heart of Kharadi.
            Named coaches. Real programs. Zero fluff.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#pricing" className="btn-blood">Book a Free Trial</a>
            <a href={MAPS} target="_blank" rel="noopener" className="btn-ghost">Visit the Floor</a>
          </div>

          <div className="mt-14 grid grid-cols-3 gap-6 max-w-lg">
            {[
              ["7,000+", "SQ FT FLOOR"],
              ["4.7★", "240+ RATINGS"],
              ["16 HRS", "OPEN DAILY"],
            ].map(([n, l]) => (
              <div key={l} className="border-l-2 border-primary pl-4">
                <div className="display text-3xl font-bold">{n}</div>
                <div className="text-[10px] tracking-[0.2em] text-muted-foreground mt-1">{l}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="lg:col-span-4 hidden lg:flex justify-end">
          <div className="relative p-6 bg-card/70 backdrop-blur border border-border rounded-sm max-w-xs" style={{ boxShadow: "var(--shadow-hard)" }}>
            <div className="text-[10px] tracking-[0.25em] text-primary font-bold">TODAY'S BUZZ</div>
            <p className="display text-2xl leading-tight mt-3">"New place of fitness worship."</p>
            <p className="text-sm text-muted-foreground mt-3">— Member, 8 months in.</p>
            <div className="mt-6 pt-4 border-t border-border flex items-center justify-between">
              <span className="text-xs text-muted-foreground">Quieter hours</span>
              <span className="display text-sm text-foreground">11 AM – 5 PM</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Marquee() {
  const items = ["Bodybuilding", "Weight Loss", "Muscle Gain", "Functional", "Strength", "Cardio", "Personal Training", "Nutrition"];
  return (
    <div className="border-y border-border bg-secondary/30 overflow-hidden py-5">
      <div className="ticker flex gap-16 whitespace-nowrap">
        {[...items, ...items, ...items].map((it, i) => (
          <span key={i} className="display text-3xl md:text-4xl font-bold text-muted-foreground/60 flex items-center gap-16">
            {it}
            <span className="text-primary">✕</span>
          </span>
        ))}
      </div>
    </div>
  );
}

function About() {
  return (
    <section id="about" className="py-24 md:py-32">
      <div className="container-x grid lg:grid-cols-12 gap-12">
        <div className="lg:col-span-5">
          <div className="text-xs tracking-[0.3em] text-primary font-bold mb-4">/ 01 — WHO WE ARE</div>
          <h2 className="display text-5xl md:text-6xl font-bold leading-[0.95]">
            Built for people<br />who actually<br />
            <span className="text-primary">show up.</span>
          </h2>
        </div>
        <div className="lg:col-span-7 space-y-6 text-lg text-muted-foreground leading-relaxed">
          <p>
            Hustle Gym is a full-service fitness center in Kharadi, Pune — engineered for lifters, chasers, beginners and everyone in between.
            Over 7,000 square feet of well-kept equipment, thoughtful zoning and coaches who know your name by week two.
          </p>
          <p>
            Whether the goal is bodybuilding, functional strength, fat loss or your first pull-up, you'll get programming, nutrition guidance
            and a floor that respects the work.
          </p>
          <div className="grid sm:grid-cols-2 gap-4 pt-4">
            {[
              ["Hands-on coaching", "Named trainers, not floor watchers."],
              ["Kept-up equipment", "Free weights, strength, cardio, functional."],
              ["Open 16 hours", "6 AM – 10 PM, every single day."],
              ["Programs that fit", "From cut to comp-prep."],
            ].map(([t, d]) => (
              <div key={t} className="p-5 border border-border bg-card/50 rounded-sm">
                <div className="display font-bold text-foreground">{t}</div>
                <div className="text-sm text-muted-foreground mt-1">{d}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Facilities() {
  const items = [
    { img: facStrength, title: "Strength Racks", note: "Squat cages, olympic bars, deadlift platforms." },
    { img: facWeights, title: "Free Weights", note: "Deep dumbbell racks & full bench setups." },
    { img: facCardio, title: "Cardio Zone", note: "Treadmills, bikes & climbers with airflow." },
    { img: facFunc, title: "Functional Floor", note: "Ropes, plyo, kettlebells, sled space." },
  ];
  return (
    <section id="facilities" className="py-24 md:py-32 bg-secondary/20 border-y border-border relative">
      <div className="absolute inset-0 bg-noise opacity-[0.03] pointer-events-none" />
      <div className="container-x relative">
        <div className="flex flex-wrap items-end justify-between gap-6 mb-14">
          <div>
            <div className="text-xs tracking-[0.3em] text-primary font-bold mb-4">/ 02 — THE FLOOR</div>
            <h2 className="display text-5xl md:text-6xl font-bold leading-[0.95]">Four zones.<br /><span className="text-primary">One mission.</span></h2>
          </div>
          <p className="max-w-sm text-muted-foreground">Every square foot of the 7,000 is planned — no cramming, no waiting on the only bar in the room.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          {items.map((it, i) => (
            <article key={it.title} className="group relative overflow-hidden aspect-[3/4] rounded-sm border border-border">
              <img src={it.img} alt={it.title} width={1200} height={900} loading="lazy" className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
              <div className="absolute top-4 left-4 text-[10px] display font-bold text-primary tracking-[0.25em]">0{i + 1}</div>
              <div className="absolute bottom-0 p-5">
                <h3 className="display text-2xl font-bold">{it.title}</h3>
                <p className="text-sm text-muted-foreground mt-1">{it.note}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Programs() {
  const progs = [
    { tag: "PT-01", title: "Bodybuilding", desc: "Hypertrophy blocks, split programming, physique-focused nutrition." },
    { tag: "PT-02", title: "Strength", desc: "Compound-driven cycles, progressive overload, form dialed in." },
    { tag: "PT-03", title: "Fat Loss", desc: "Conditioning circuits, structured cardio, calorie coaching." },
    { tag: "PT-04", title: "Functional", desc: "Movement, mobility, sport-carry-over — kettlebells to sled." },
    { tag: "PT-05", title: "Beginner On-Ramp", desc: "First-30-days plan, coach walkthroughs, zero intimidation." },
    { tag: "PT-06", title: "1-on-1 Coaching", desc: "Personal trainer + nutrition, tracked weekly progress." },
  ];
  return (
    <section id="programs" className="py-24 md:py-32">
      <div className="container-x">
        <div className="mb-14">
          <div className="text-xs tracking-[0.3em] text-primary font-bold mb-4">/ 03 — PROGRAMS</div>
          <h2 className="display text-5xl md:text-6xl font-bold leading-[0.95] max-w-3xl">Pick a lane. Or run <span className="text-primary">all of them.</span></h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-border rounded-sm overflow-hidden">
          {progs.map((p) => (
            <div key={p.title} className="bg-background p-8 hover:bg-card transition-colors group">
              <div className="flex items-start justify-between mb-6">
                <span className="text-xs tracking-widest text-primary font-mono">{p.tag}</span>
                <span className="h-8 w-8 rounded-full border border-border flex items-center justify-center text-muted-foreground group-hover:bg-primary group-hover:text-primary-foreground group-hover:border-primary transition-all">→</span>
              </div>
              <h3 className="display text-2xl font-bold mb-3">{p.title}</h3>
              <p className="text-muted-foreground">{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Trainers() {
  const trainers = [
    {
      img: trainerRohit,
      name: "Rohit More",
      role: "Strength & Nutrition",
      bio: "Builds custom strength cycles paired with realistic nutrition. Members credit him with better sleep, cleaner eating and inches off the waist.",
      tags: ["Strength", "Nutrition", "Transformation"],
    },
    {
      img: trainerMahesh,
      name: "Mahesh Sathe",
      role: "Head Coach",
      bio: "Deep programming knowledge and the kind of day-one guidance that keeps long-time members coming back. Hands-on, patient, technical.",
      tags: ["Coaching", "Programming", "Onboarding"],
    },
  ];
  return (
    <section id="trainers" className="py-24 md:py-32 bg-secondary/20 border-y border-border">
      <div className="container-x">
        <div className="flex flex-wrap items-end justify-between gap-6 mb-14">
          <div>
            <div className="text-xs tracking-[0.3em] text-primary font-bold mb-4">/ 04 — COACHES</div>
            <h2 className="display text-5xl md:text-6xl font-bold leading-[0.95]">Coaches who<br /><span className="text-primary">actually coach.</span></h2>
          </div>
          <p className="max-w-sm text-muted-foreground">You're not a card swipe here. Our trainers program, correct and check in — that's the whole point.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {trainers.map((t) => (
            <article key={t.name} className="group relative bg-card border border-border rounded-sm overflow-hidden">
              <div className="grid grid-cols-5">
                <div className="col-span-2 relative aspect-[3/4] md:aspect-auto overflow-hidden">
                  <img src={t.img} alt={t.name} width={900} height={1100} loading="lazy" className="absolute inset-0 h-full w-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" />
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent to-card/60" />
                </div>
                <div className="col-span-3 p-6 md:p-8 flex flex-col">
                  <div className="text-xs tracking-[0.25em] text-primary font-bold">{t.role}</div>
                  <h3 className="display text-4xl font-bold mt-2">{t.name}</h3>
                  <p className="text-muted-foreground mt-4 flex-1">{t.bio}</p>
                  <div className="flex flex-wrap gap-2 mt-6">
                    {t.tags.map((tag) => (
                      <span key={tag} className="text-[10px] tracking-widest uppercase border border-border px-2.5 py-1 rounded-sm text-muted-foreground">{tag}</span>
                    ))}
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Testimonials() {
  const t = [
    {
      quote: "This gym feels like a new place of fitness worship. Eight months in and the progress hasn't stalled — the trainers know what they're doing and it shows.",
      name: "Long-time member",
      meta: "8 months at Hustle",
    },
    {
      quote: "Been coming here over a year. Wonderful experience — the trainers are friendly and gave me strong guidance from day one.",
      name: "Regular member",
      meta: "1+ year at Hustle",
    },
    {
      quote: "Rohit's strength & nutrition plan changed how I sleep and eat. I've dropped four inches off my waist and I'm lifting heavier than ever.",
      name: "Coached by Rohit More",
      meta: "Transformation client",
    },
  ];
  return (
    <section className="py-24 md:py-32">
      <div className="container-x">
        <div className="text-xs tracking-[0.3em] text-primary font-bold mb-4">/ 05 — RECEIPTS</div>
        <h2 className="display text-5xl md:text-6xl font-bold leading-[0.95] max-w-3xl mb-14">
          Rated <span className="text-primary">4.7★</span> across 240+ reviews.
        </h2>
        <div className="grid md:grid-cols-3 gap-4">
          {t.map((it, i) => (
            <blockquote key={i} className="p-8 border border-border bg-card/50 rounded-sm flex flex-col">
              <div className="text-primary display text-6xl leading-none mb-4">"</div>
              <p className="text-lg leading-relaxed flex-1">{it.quote}</p>
              <footer className="mt-6 pt-6 border-t border-border">
                <div className="display font-bold">{it.name}</div>
                <div className="text-xs text-muted-foreground mt-1 tracking-wider uppercase">{it.meta}</div>
              </footer>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}

function Pricing() {
  return (
    <section id="pricing" className="py-24 md:py-32 relative overflow-hidden" style={{ background: "var(--gradient-hero)" }}>
      <div className="absolute inset-0 bg-grid opacity-30" />
      <div className="container-x relative">
        <div className="max-w-3xl">
          <div className="text-xs tracking-[0.3em] text-primary font-bold mb-4">/ 06 — GET IN</div>
          <h2 className="display text-6xl md:text-8xl font-bold leading-[0.9]">
            Your first session<br />is on <span className="text-primary">us.</span>
          </h2>
          <p className="mt-6 text-lg text-muted-foreground max-w-xl">
            Walk the 7,000 sq ft floor, meet the coaches, try a workout. Then decide.
            No pushy sales — the equipment does the talking.
          </p>
        </div>

        <div className="mt-16 grid md:grid-cols-3 gap-4">
          {[
            { name: "Trial", price: "Free", note: "1 session", perks: ["Full floor access", "Coach walkthrough", "No commitment"] },
            { name: "Monthly", price: "Ask", note: "Best for starters", perks: ["Unlimited access", "Group guidance", "Nutrition tips"], featured: true },
            { name: "Personal Training", price: "Custom", note: "1-on-1 with Rohit / Mahesh", perks: ["Programmed sessions", "Custom nutrition plan", "Weekly progress reviews"] },
          ].map((p) => (
            <div
              key={p.name}
              className={`p-8 rounded-sm border relative ${p.featured ? "border-primary bg-card" : "border-border bg-card/50"}`}
              style={p.featured ? { boxShadow: "var(--shadow-blood)" } : undefined}
            >
              {p.featured && <div className="absolute -top-3 left-8 bg-primary text-primary-foreground text-[10px] font-bold tracking-[0.2em] px-2 py-1 rounded-sm">MOST POPULAR</div>}
              <div className="display text-sm tracking-widest text-primary">{p.name.toUpperCase()}</div>
              <div className="display text-5xl font-bold mt-3">{p.price}</div>
              <div className="text-xs text-muted-foreground tracking-widest uppercase mt-1">{p.note}</div>
              <ul className="mt-8 space-y-3">
                {p.perks.map((perk) => (
                  <li key={perk} className="flex items-start gap-3 text-sm">
                    <span className="text-primary mt-0.5">✕</span> {perk}
                  </li>
                ))}
              </ul>
              <a href={`tel:${PHONE_TEL}`} className={`mt-8 w-full ${p.featured ? "btn-blood" : "btn-ghost"}`}>
                {p.featured ? "Claim Free Trial" : "Talk to us"}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="py-24 md:py-32 border-t border-border">
      <div className="container-x grid lg:grid-cols-2 gap-12">
        <div>
          <div className="text-xs tracking-[0.3em] text-primary font-bold mb-4">/ 07 — FIND US</div>
          <h2 className="display text-5xl md:text-6xl font-bold leading-[0.95] mb-8">
            Marvel Edge.<br />1st floor.<br /><span className="text-primary">Kharadi.</span>
          </h2>
          <div className="space-y-6 text-lg">
            <div>
              <div className="text-xs tracking-widest uppercase text-muted-foreground mb-1">Address</div>
              <div>Marvel Edge, Office No. 109-110, 1st Floor,<br />next to Zensar Technologies, Kharadi,<br />Pune, Maharashtra 411014</div>
            </div>
            <div className="grid sm:grid-cols-2 gap-6">
              <div>
                <div className="text-xs tracking-widest uppercase text-muted-foreground mb-1">Call</div>
                <a href={`tel:${PHONE_TEL}`} className="display text-2xl font-bold hover:text-primary transition-colors">{PHONE}</a>
              </div>
              <div>
                <div className="text-xs tracking-widest uppercase text-muted-foreground mb-1">Hours</div>
                <div className="display text-2xl font-bold">6 AM – 10 PM<br /><span className="text-sm text-muted-foreground font-normal normal-case tracking-normal">Every day</span></div>
              </div>
            </div>
            <div>
              <div className="text-xs tracking-widest uppercase text-muted-foreground mb-1">Instagram</div>
              <a href={INSTAGRAM} target="_blank" rel="noopener" className="text-lg hover:text-primary transition-colors">@hustlegymofficial ↗</a>
            </div>
          </div>
          <div className="mt-10 flex flex-wrap gap-3">
            <a href={MAPS} target="_blank" rel="noopener" className="btn-blood">Get Directions</a>
            <a href={`tel:${PHONE_TEL}`} className="btn-ghost">Call the Floor</a>
          </div>
        </div>

        <div className="relative aspect-square lg:aspect-auto min-h-[420px] rounded-sm overflow-hidden border border-border">
          <iframe
            title="Hustle Gym location map"
            src="https://www.google.com/maps?q=Marvel+Edge+Kharadi+Pune&output=embed"
            className="absolute inset-0 h-full w-full grayscale contrast-125"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
          <div className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-primary/20" />
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border py-12 bg-secondary/20">
      <div className="container-x flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-3">
          <img src={logo} alt="Hustle Gym logo" className="h-10 w-10 rounded-sm object-cover" />
          <div>
            <div className="display font-bold text-lg tracking-wider">HUSTLE GYM</div>
            <div className="text-xs text-muted-foreground">Kharadi, Pune · Est. training since day one.</div>
          </div>
        </div>
        <div className="text-xs text-muted-foreground tracking-wider uppercase">
          © {new Date().getFullYear()} Hustle Gym. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

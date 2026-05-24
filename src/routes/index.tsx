import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X, ArrowRight, Linkedin, Mail, Phone } from "lucide-react";

export const Route = createFileRoute("/")({
  component: Index,
});

const EMAIL = "karen@firstfloor.be";
const PHONE = "+32 475 00 00 00";

const NAV = [
  { href: "#over", label: "Over" },
  { href: "#directies", label: "Directies" },
  { href: "#leiders", label: "Leiders" },
  { href: "#keynotes", label: "Keynotes" },
  { href: "#schrijven", label: "Schrijven" },
  { href: "#contact", label: "Contact" },
];

function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 8);
    on();
    window.addEventListener("scroll", on);
    return () => window.removeEventListener("scroll", on);
  }, []);
  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? "backdrop-blur-md bg-white/80 border-b border-border" : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 md:py-5">
        <a href="#hero" className="font-display text-base font-bold tracking-tight text-foreground">
          Karen Van der Aa
        </a>
        <nav className="hidden md:flex items-center gap-7 text-sm">
          {NAV.map((n) => (
            <a key={n.href} href={n.href} className="text-muted-foreground hover:text-foreground transition-colors">
              {n.label}
            </a>
          ))}
        </nav>
        <button
          aria-label="Menu"
          className="md:hidden text-foreground"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>
      {open && (
        <div className="md:hidden border-t border-border bg-background">
          <div className="flex flex-col px-6 py-4">
            {NAV.map((n) => (
              <a
                key={n.href}
                href={n.href}
                onClick={() => setOpen(false)}
                className="py-3 text-base text-foreground border-b border-border last:border-0"
              >
                {n.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}

function SoftContact({ tone = "default" }: { tone?: "default" | "muted" }) {
  const bg = tone === "muted" ? "" : "";
  return (
    <div className={`mt-20 ${bg}`}>
      <p className="font-display text-xl md:text-2xl text-foreground max-w-2xl">
        Een gesprek begint met een vraag.{" "}
        <a href={`mailto:${EMAIL}`} className="text-[color:var(--brand-blue)] underline underline-offset-4 decoration-1 hover:decoration-2">
          Mail me.
        </a>
      </p>
      <div className="mt-3 flex flex-wrap gap-x-6 gap-y-1 text-sm text-muted-foreground">
        <a href={`mailto:${EMAIL}`} className="hover:text-foreground">{EMAIL}</a>
        <a href={`tel:${PHONE.replace(/\s/g, "")}`} className="hover:text-foreground">{PHONE}</a>
      </div>
    </div>
  );
}

function SectionLabel({ children, color = "var(--brand-blue)" }: { children: React.ReactNode; color?: string }) {
  return (
    <div className="flex items-center gap-3 mb-8">
      <span className="h-px w-10" style={{ background: color }} />
      <span className="font-display text-xs uppercase tracking-[0.18em]" style={{ color }}>
        {children}
      </span>
    </div>
  );
}

function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex flex-col justify-center pt-28 pb-16">
      <div className="mx-auto w-full max-w-7xl px-6">
        <div className="max-w-5xl">
          <p className="font-display text-xs uppercase tracking-[0.22em] text-[color:var(--brand-blue)] mb-8">
            Karen Van der Aa
          </p>
          <h1 className="font-display font-bold leading-[1.05] text-[2rem] sm:text-[2.6rem] md:text-[3.4rem] lg:text-[4.1rem] tracking-tight text-[#111]">
            De kloof tussen strategie en resultaat
            <br className="hidden md:block" />{" "}
            <span className="text-foreground/60">zit zelden in het plan.</span>{" "}
            Die zit in de mensen die het moeten waarmaken. En als je daar écht naar kijkt, kom je altijd uit bij dezelfde plek:{" "}
            <span className="relative inline-block">
              <span className="relative z-10">de leider zelf.</span>
              <span className="absolute inset-x-0 bottom-1 h-3 -z-0" style={{ background: "var(--brand-yellow)" }} />
            </span>
          </h1>
          <p className="mt-10 max-w-2xl text-lg md:text-xl text-muted-foreground leading-relaxed">
            Ik werk met directies aan wat strategie écht in beweging brengt.
            En met CEO's aan wat ze daarbij dragen — vaak alleen.
            Geen coachingtaal. Geen modellen. Wel scherpte, en de bereidheid om te kijken.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-5">
          <a
            href="#directies"
            className="group relative overflow-hidden rounded-xl border border-border bg-white p-8 md:p-10 transition-all hover:border-[color:var(--brand-blue)] hover:-translate-y-0.5"
          >
            <span className="absolute top-6 right-6 font-display text-xs tracking-widest text-muted-foreground">DEUR 1</span>
            <h3 className="font-display text-2xl md:text-3xl font-bold leading-tight text-[#111] max-w-sm">
              Je organisatie levert niet wat ze belooft.
            </h3>
            <p className="mt-4 text-muted-foreground max-w-md">
              Strategie zit vast in de uitvoering. Wij stappen binnen, naast de directie, tot het houdt.
            </p>
            <span className="mt-8 inline-flex items-center gap-2 font-display text-sm font-semibold text-[color:var(--brand-blue)]">
              Bekijk hoe ik met directies werk
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
            </span>
            <span className="absolute left-0 bottom-0 h-1 w-0 bg-[color:var(--brand-blue)] transition-all duration-500 group-hover:w-full" />
          </a>

          <a
            href="#leiders"
            className="group relative overflow-hidden rounded-xl border border-border bg-white p-8 md:p-10 transition-all hover:border-[color:var(--brand-purple)] hover:-translate-y-0.5"
          >
            <span className="absolute top-6 right-6 font-display text-xs tracking-widest text-muted-foreground">DEUR 2</span>
            <h3 className="font-display text-2xl md:text-3xl font-bold leading-tight text-[#111] max-w-sm">
              Je functioneert. Maar je draagt te veel.
            </h3>
            <p className="mt-4 text-muted-foreground max-w-md">
              Kleine groepen voor CEO's. Eerlijke gesprekken, lichaamswerk, ruimte om eens niet te moeten.
            </p>
            <span className="mt-8 inline-flex items-center gap-2 font-display text-sm font-semibold text-[color:var(--brand-purple)]">
              Ontdek de CEO-groepen
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
            </span>
            <span className="absolute left-0 bottom-0 h-1 w-0 bg-[color:var(--brand-purple)] transition-all duration-500 group-hover:w-full" />
          </a>
        </div>

        <div className="mt-20 grid grid-cols-1 md:grid-cols-2 gap-10 border-t border-border pt-12">
          <a href="#schrijven" className="group block">
            <p className="font-display text-xs uppercase tracking-[0.18em] text-[color:var(--brand-cyan)] mb-3">Recente column</p>
            <h4 className="font-display text-xl md:text-2xl font-semibold text-[#111] leading-snug group-hover:underline underline-offset-4 decoration-1">
              "Waarom uw nieuwe strategie waarschijnlijk strandt op de tweede verdieping."
            </h4>
            <p className="mt-3 text-sm text-muted-foreground">De Tijd — april 2025</p>
          </a>
          <a href="#keynotes" className="group block">
            <p className="font-display text-xs uppercase tracking-[0.18em] text-[color:var(--brand-pink)] mb-3">Keynote</p>
            <h4 className="font-display text-xl md:text-2xl font-semibold text-[#111] leading-snug group-hover:underline underline-offset-4 decoration-1">
              De Generatieconfrontatie — wat als de jongste in de zaal gelijk heeft?
            </h4>
            <p className="mt-3 text-sm text-muted-foreground">Leiderschap · 45–60 min · NL/EN</p>
          </a>
        </div>

        <SoftContact />
      </div>
    </section>
  );
}

function Over() {
  return (
    <section id="over" className="py-28 md:py-36 bg-[color:var(--brand-bg)]">
      <div className="mx-auto max-w-7xl px-6">
        <SectionLabel>Over Karen</SectionLabel>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
          <div className="md:col-span-7 space-y-6 text-lg md:text-xl leading-relaxed text-foreground/90">
            <p className="font-display text-2xl md:text-3xl font-semibold text-[#111] leading-snug">
              Het begon met geschiedenis. Niet omdat het netjes was, maar omdat ik wilde begrijpen waarom mensen
              telkens dezelfde fouten maken — en het toch elke keer anders noemen.
            </p>
            <p>
              Daarna kwam het ondernemen. Tien jaar zelf een bedrijf bouwen leert je iets dat je in geen enkel boek
              vindt: hoe eenzaam het is om bovenaan te staan, en hoe makkelijk je jezelf voor de gek houdt.
            </p>
            <p>
              Daarom ben ik psychotherapie gaan studeren. Niet om te genezen. Om te kunnen luisteren naar wat onder
              de woorden ligt — bij mezelf eerst, dan bij anderen.
            </p>
            <p>
              Vandaag werk ik als strategisch adviseur met directies, en in kleine groepen met CEO's. Tussendoor
              schrijf ik. Een column, een boek. Niet om mooi te zijn, maar om iets recht te zetten.
            </p>
            <p className="text-foreground/70">
              Ik geloof niet in modellen die alles verklaren. Ik geloof in mensen die durven kijken.
            </p>
          </div>

          <div className="md:col-span-5">
            <div className="aspect-[4/5] w-full rounded-xl bg-gradient-to-br from-[color:var(--brand-pink)]/40 via-white to-[color:var(--brand-cyan)]/30 border border-border flex items-end p-6">
              <span className="font-display text-xs uppercase tracking-[0.18em] text-foreground/60">
                Portret — Karen Van der Aa
              </span>
            </div>
          </div>
        </div>

        <div className="mt-24 border-t border-border pt-10">
          <p className="font-display text-xs uppercase tracking-[0.18em] text-muted-foreground mb-6">De feiten</p>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-3 text-sm text-foreground/80 max-w-3xl">
            <li>— Master Geschiedenis, KU Leuven</li>
            <li>— Postgraduaat Psychotherapie</li>
            <li>— 10+ jaar ondernemer</li>
            <li>— Oprichter First Floor</li>
            <li>— Auteur "De Generatieconfrontatie" (Lannoo, 2024)</li>
            <li>— Spreker NL/EN, sinds 2018</li>
          </ul>
        </div>

        <SoftContact />
      </div>
    </section>
  );
}

function Directies() {
  return (
    <section id="directies" className="py-28 md:py-36 bg-white">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-end mb-16">
          <div className="md:col-span-8">
            <SectionLabel color="var(--brand-blue)">Deur 1 · Werken met directies</SectionLabel>
            <h2 className="font-display text-3xl md:text-5xl font-bold leading-tight text-[#111] max-w-3xl">
              De strategie ligt er. De executie hapert.
              <span className="text-foreground/50"> Daar begint ons werk.</span>
            </h2>
          </div>
          <div className="md:col-span-4 md:text-right">
            <p className="font-display text-sm tracking-widest text-muted-foreground">FIRST FLOOR</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-12 mb-24">
          <div>
            <p className="font-display text-5xl font-bold text-[color:var(--brand-blue)] mb-4">01</p>
            <h3 className="font-display text-xl font-semibold text-[#111] mb-3">De middle layer haakt af</h3>
            <p className="text-muted-foreground leading-relaxed">
              De directie weet waar het heen moet. De vloer doet zijn werk. Maar de laag daartussen
              vertaalt niet. Niet uit onwil — uit overlevingsmodus.
            </p>
          </div>
          <div>
            <p className="font-display text-5xl font-bold text-[color:var(--brand-blue)] mb-4">02</p>
            <h3 className="font-display text-xl font-semibold text-[#111] mb-3">Vergaderingen zonder beslissingen</h3>
            <p className="text-muted-foreground leading-relaxed">
              Iedereen knikt. Niemand committeert. Drie maanden later staat dezelfde discussie
              opnieuw op de agenda.
            </p>
          </div>
          <div>
            <p className="font-display text-5xl font-bold text-[color:var(--brand-blue)] mb-4">03</p>
            <h3 className="font-display text-xl font-semibold text-[#111] mb-3">De cijfers liegen niet</h3>
            <p className="text-muted-foreground leading-relaxed">
              Targets schuiven. Turnover loopt op. En in de wandelgangen zegt iedereen al maanden
              hetzelfde — alleen niet aan tafel.
            </p>
          </div>
        </div>

        <div className="rounded-2xl bg-[color:var(--brand-bg)] p-10 md:p-16 mb-24">
          <p className="font-display text-xs uppercase tracking-[0.18em] text-[color:var(--brand-blue)] mb-6">De aanpak</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div>
              <h4 className="font-display text-2xl font-semibold text-[#111] mb-3">Met jullie. Niet voor jullie.</h4>
              <p className="text-foreground/80 leading-relaxed">
                We nemen niets over. We werken naast de directie, totdat de verandering bij jullie zit —
                niet bij ons. Daarna gaan we weg.
              </p>
            </div>
            <div>
              <h4 className="font-display text-2xl font-semibold text-[#111] mb-3">In fases. Met seniors.</h4>
              <p className="text-foreground/80 leading-relaxed">
                Geen junior consultants met sjablonen. Een klein team van mensen die zelf hebben geleid,
                ingebed tot het houdt.
              </p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-24">
          <div className="p-8 border border-border rounded-xl">
            <p className="font-display text-xs uppercase tracking-[0.18em] text-[color:var(--brand-blue)] mb-4">Voor wie dit is</p>
            <ul className="space-y-3 text-foreground/85">
              <li>— Directies die hun strategie zien stranden in de uitvoering</li>
              <li>— Organisaties waar de cultuur de plannen begint te overrulen</li>
              <li>— CEO's die bereid zijn naar zichzelf te kijken, niet enkel naar het team</li>
            </ul>
          </div>
          <div className="p-8 border border-border rounded-xl">
            <p className="font-display text-xs uppercase tracking-[0.18em] text-muted-foreground mb-4">En voor wie niet</p>
            <ul className="space-y-3 text-foreground/60">
              <li>— Wie een rapport wil dat in de la kan</li>
              <li>— Wie zoekt naar bevestiging in plaats van scherpte</li>
              <li>— Wie verwacht dat verandering iemand anders' werk is</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border pt-12">
          <h3 className="font-display text-2xl md:text-3xl font-semibold text-[#111] max-w-2xl">
            Vertel me waar jullie tegenaan lopen.
          </h3>
          <div className="mt-6 flex flex-wrap gap-4">
            <a
              href={`mailto:${EMAIL}`}
              className="inline-flex items-center gap-2 rounded-full bg-[color:var(--brand-blue)] px-6 py-3 text-white font-display text-sm font-semibold hover:opacity-90 transition"
            >
              Plan een gesprek <ArrowRight size={16} />
            </a>
            <a
              href={`tel:${PHONE.replace(/\s/g, "")}`}
              className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 font-display text-sm font-semibold text-foreground hover:border-foreground transition"
            >
              {PHONE}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function Leiders() {
  return (
    <section id="leiders" className="py-28 md:py-36 relative overflow-hidden" style={{ background: "linear-gradient(180deg, #FFF7F2 0%, #FDEFF3 100%)" }}>
      <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-[color:var(--brand-pink)]/40 blur-3xl" />
      <div className="absolute -bottom-32 -left-32 w-96 h-96 rounded-full bg-[color:var(--brand-purple)]/20 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-6">
        <SectionLabel color="var(--brand-purple)">Deur 2 · Werken met leiders</SectionLabel>

        <h2 className="font-display text-3xl md:text-5xl font-bold leading-tight text-[#111] max-w-4xl">
          Je bedrijf draait. Je agenda klopt.
          <br className="hidden md:block" />
          <span className="text-foreground/55">En toch.</span>
        </h2>

        <p className="mt-10 max-w-2xl text-lg md:text-xl text-foreground/85 leading-relaxed">
          Er is iets dat niet helemaal klopt en dat je tegen niemand zegt.
          Niet tegen je raad van bestuur. Niet tegen je partner. Soms niet eens tegen jezelf.
          Dit is voor die plek.
        </p>

        <div className="mt-20 grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="bg-white/70 backdrop-blur rounded-2xl p-8 md:p-10 border border-white">
            <h3 className="font-display text-2xl font-semibold text-[#111] mb-4">Wat dit is</h3>
            <p className="text-foreground/80 leading-relaxed">
              Kleine groepen van zes tot acht CEO's. Geen mastermind. Geen pitches. Geen LinkedIn-verhalen.
              Wel: eerlijke gesprekken, lichaamswerk, psychotherapeutisch werk, en de tijd om iets niet meteen te moeten oplossen.
            </p>
          </div>
          <div className="bg-white/70 backdrop-blur rounded-2xl p-8 md:p-10 border border-white">
            <h3 className="font-display text-2xl font-semibold text-[#111] mb-4">Hoe het loopt</h3>
            <ul className="space-y-3 text-foreground/80">
              <li>— Zes dagen verspreid over één jaar</li>
              <li>— Buiten Brussel, in een huis met ruimte</li>
              <li>— Begeleid door Karen, met externe experts wanneer nodig</li>
              <li>— Vertrouwelijk. Altijd.</li>
            </ul>
          </div>
        </div>

        <div className="mt-20 border-t border-foreground/10 pt-12 max-w-3xl">
          <p className="font-display text-xl md:text-2xl text-[#111] leading-snug">
            De volgende groep start in <span className="text-[color:var(--brand-purple)]">september</span>.
            Plaatsen zijn beperkt — we werken met maximaal acht.
          </p>
          <div className="mt-6 flex flex-wrap gap-4">
            <a
              href={`mailto:${EMAIL}?subject=CEO-groep`}
              className="inline-flex items-center gap-2 rounded-full bg-[color:var(--brand-purple)] px-6 py-3 text-white font-display text-sm font-semibold hover:opacity-90 transition"
            >
              Laat een mailadres achter <ArrowRight size={16} />
            </a>
            <a
              href={`mailto:${EMAIL}`}
              className="inline-flex items-center gap-2 rounded-full border border-foreground/20 px-6 py-3 font-display text-sm font-semibold text-foreground hover:border-foreground transition"
            >
              Stel een vraag
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function Keynotes() {
  const themes = [
    {
      color: "var(--brand-blue)",
      title: "De Generatieconfrontatie",
      desc: "Wat als de jongste in de zaal gelijk heeft? Over de spanning tussen wat we bouwden en wat de volgende generatie weigert te erven.",
    },
    {
      color: "var(--brand-cyan)",
      title: "Leiderschap zonder masker",
      desc: "Waarom de meeste 'authentieke leiders' nog steeds een rol spelen — en wat het kost om dat eindelijk los te laten.",
    },
    {
      color: "var(--brand-yellow)",
      title: "Strategie is mensenwerk",
      desc: "Waarom executie zelden een planningsprobleem is, en bijna altijd een vertrouwensprobleem.",
    },
  ];

  return (
    <section id="keynotes" className="py-28 md:py-36 bg-white">
      <div className="mx-auto max-w-7xl px-6">
        <SectionLabel color="var(--brand-cyan)">Keynotes & spreken</SectionLabel>
        <h2 className="font-display text-3xl md:text-5xl font-bold leading-tight text-[#111] max-w-3xl">
          Geen TED-talk. Een gesprek met een zaal.
        </h2>

        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8">
          {themes.map((t) => (
            <div key={t.title} className="group border-t-2 pt-6" style={{ borderColor: t.color }}>
              <h3 className="font-display text-xl md:text-2xl font-semibold text-[#111] leading-snug mb-3">
                {t.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">{t.desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-20 grid grid-cols-1 md:grid-cols-12 gap-10">
          <div className="md:col-span-7">
            <div className="aspect-video rounded-xl bg-[#111] relative overflow-hidden flex items-center justify-center">
              <div className="absolute inset-0 bg-gradient-to-br from-[color:var(--brand-blue)]/20 to-[color:var(--brand-purple)]/30" />
              <button
                aria-label="Speel fragment"
                className="relative z-10 w-20 h-20 rounded-full bg-white/95 flex items-center justify-center hover:scale-105 transition-transform"
              >
                <span className="ml-1 w-0 h-0 border-y-[10px] border-y-transparent border-l-[16px] border-l-[#111]" />
              </button>
              <span className="absolute bottom-4 left-5 text-white/70 font-display text-xs tracking-widest uppercase">
                Fragment — VOKA · 2024
              </span>
            </div>
          </div>
          <div className="md:col-span-5 space-y-8">
            <figure>
              <blockquote className="font-display text-xl md:text-2xl text-[#111] leading-snug">
                "Karen schudt een zaal niet wakker met een trucje. Ze stelt één vraag, en plots zit iedereen rechtop."
              </blockquote>
              <figcaption className="mt-3 text-sm text-muted-foreground">— CEO, beursgenoteerde groep</figcaption>
            </figure>
            <figure>
              <blockquote className="font-display text-xl md:text-2xl text-[#111] leading-snug">
                "Eindelijk een spreker zonder slides vol open deuren."
              </blockquote>
              <figcaption className="mt-3 text-sm text-muted-foreground">— Organisator leiderschapscongres</figcaption>
            </figure>
          </div>
        </div>

        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-6 border-t border-border pt-12">
          <div>
            <p className="font-display text-xs uppercase tracking-[0.18em] text-muted-foreground mb-2">Talen</p>
            <p className="text-foreground">Nederlands · English</p>
          </div>
          <div>
            <p className="font-display text-xs uppercase tracking-[0.18em] text-muted-foreground mb-2">Formats</p>
            <p className="text-foreground">Keynote · Workshop · Panel</p>
          </div>
          <div>
            <p className="font-display text-xs uppercase tracking-[0.18em] text-muted-foreground mb-2">Duur</p>
            <p className="text-foreground">30 — 90 minuten</p>
          </div>
        </div>

        <div className="mt-16">
          <h3 className="font-display text-2xl md:text-3xl font-semibold text-[#111]">
            Bel of mail me. We bekijken samen wat past.
          </h3>
          <div className="mt-6 flex flex-wrap gap-4">
            <a href={`mailto:${EMAIL}`} className="inline-flex items-center gap-2 rounded-full bg-[#111] px-6 py-3 text-white font-display text-sm font-semibold hover:opacity-90 transition">
              Mail me <ArrowRight size={16} />
            </a>
            <a href={`tel:${PHONE.replace(/\s/g, "")}`} className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 font-display text-sm font-semibold text-foreground hover:border-foreground transition">
              {PHONE}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function Schrijven() {
  const groups = [
    {
      theme: "Leiderschap",
      color: "var(--brand-blue)",
      articles: [
        { title: "De eenzaamheid bovenaan is geen mythe.", source: "De Tijd · 2025" },
        { title: "Waarom je executive team niet eerlijk is — en jij dat zelf veroorzaakt.", source: "Bloovi · 2024" },
      ],
    },
    {
      theme: "Strategie & Executie",
      color: "var(--brand-cyan)",
      articles: [
        { title: "Strategie strandt op de tweede verdieping.", source: "De Tijd · 2025" },
        { title: "De vergadering als verzet.", source: "Knack · 2024" },
      ],
    },
    {
      theme: "Generaties & Werk",
      color: "var(--brand-purple)",
      articles: [
        { title: "Wat als de jongste in de zaal gelijk heeft?", source: "De Standaard · 2024" },
        { title: "Stop met 'engaging' Gen Z. Begin met luisteren.", source: "Trends · 2024" },
      ],
    },
  ];

  return (
    <section id="schrijven" className="py-28 md:py-36 bg-[color:var(--brand-bg)]">
      <div className="mx-auto max-w-7xl px-6">
        <SectionLabel color="var(--brand-purple)">Schrijven & denken</SectionLabel>
        <h2 className="font-display text-3xl md:text-5xl font-bold leading-tight text-[#111] max-w-3xl">
          Wat ik denk, voor ik het zeg.
        </h2>

        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-12">
          {groups.map((g) => (
            <div key={g.theme}>
              <p className="font-display text-xs uppercase tracking-[0.18em] mb-6" style={{ color: g.color }}>
                {g.theme}
              </p>
              <ul className="space-y-6">
                {g.articles.map((a) => (
                  <li key={a.title}>
                    <a href="#" className="group block">
                      <h4 className="font-display text-lg md:text-xl font-semibold text-[#111] leading-snug group-hover:underline underline-offset-4 decoration-1">
                        {a.title}
                      </h4>
                      <p className="mt-2 text-sm text-muted-foreground">{a.source}</p>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-24 grid grid-cols-1 md:grid-cols-12 gap-10 items-center bg-white rounded-2xl p-8 md:p-12 border border-border">
          <div className="md:col-span-4">
            <div className="aspect-[3/4] rounded-lg bg-gradient-to-br from-[color:var(--brand-yellow)] via-[color:var(--brand-pink)] to-[color:var(--brand-purple)]/70 flex items-end p-6 shadow-xl">
              <span className="font-display text-white text-lg leading-tight">
                De<br />Generatie-<br />confrontatie
              </span>
            </div>
          </div>
          <div className="md:col-span-8">
            <p className="font-display text-xs uppercase tracking-[0.18em] text-[color:var(--brand-blue)] mb-4">Het boek</p>
            <h3 className="font-display text-2xl md:text-4xl font-bold text-[#111] leading-tight mb-5">
              De Generatieconfrontatie
            </h3>
            <p className="text-foreground/80 leading-relaxed mb-6 max-w-xl">
              Over wat de volgende generatie weigert te erven, en waarom dat een geschenk is —
              als we het tenminste durven uitpakken. Verschenen bij Lannoo, 2024.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="#" className="inline-flex items-center gap-2 rounded-full bg-[#111] px-6 py-3 text-white font-display text-sm font-semibold hover:opacity-90 transition">
                Koop het boek <ArrowRight size={16} />
              </a>
              <a href="#" className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 font-display text-sm font-semibold text-foreground hover:border-foreground transition">
                Lees een fragment
              </a>
            </div>
          </div>
        </div>

        <div className="mt-20 border-t border-border pt-12 flex flex-wrap items-center justify-between gap-6">
          <p className="font-display text-lg md:text-xl text-foreground max-w-xl">
            Wil je weten wat er volgt? Volg mee op LinkedIn of via de occasionele brief.
          </p>
          <div className="flex gap-3">
            <a href="#" className="inline-flex items-center gap-2 rounded-full border border-border px-5 py-2.5 font-display text-sm font-semibold text-foreground hover:border-foreground transition">
              <Linkedin size={16} /> LinkedIn
            </a>
            <a href={`mailto:${EMAIL}?subject=Mailing`} className="inline-flex items-center gap-2 rounded-full bg-[color:var(--brand-blue)] px-5 py-2.5 text-white font-display text-sm font-semibold hover:opacity-90 transition">
              Schrijf me in
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer id="contact" className="bg-[#111] text-white/90 py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
          <div className="md:col-span-6">
            <p className="font-display text-xs uppercase tracking-[0.22em] text-white/50 mb-4">Contact</p>
            <h3 className="font-display text-3xl md:text-5xl font-bold leading-tight text-white max-w-xl">
              Een gesprek begint met een vraag.
            </h3>
            <a href={`mailto:${EMAIL}`} className="mt-6 inline-block font-display text-xl text-[color:var(--brand-cyan)] underline underline-offset-4 decoration-1 hover:decoration-2">
              {EMAIL}
            </a>
          </div>
          <div className="md:col-span-3">
            <p className="font-display text-xs uppercase tracking-[0.18em] text-white/40 mb-3">Direct</p>
            <ul className="space-y-2 text-white/80">
              <li className="flex items-center gap-2"><Mail size={14} /> <a href={`mailto:${EMAIL}`}>{EMAIL}</a></li>
              <li className="flex items-center gap-2"><Phone size={14} /> <a href={`tel:${PHONE.replace(/\s/g, "")}`}>{PHONE}</a></li>
              <li className="flex items-center gap-2"><Linkedin size={14} /> <a href="#">LinkedIn</a></li>
            </ul>
          </div>
          <div className="md:col-span-3">
            <p className="font-display text-xs uppercase tracking-[0.18em] text-white/40 mb-3">First Floor</p>
            <p className="text-white/70 text-sm leading-relaxed">
              Strategisch werk met directies. Persoonlijk werk met leiders.
            </p>
          </div>
        </div>
        <div className="mt-16 pt-8 border-t border-white/10 flex flex-wrap items-center justify-between gap-4 text-sm text-white/40">
          <p>© {new Date().getFullYear()} Karen Van der Aa · First Floor</p>
          <p>Antwerpen · België</p>
        </div>
      </div>
    </footer>
  );
}

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Nav />
      <main>
        <Hero />
        <Over />
        <Directies />
        <Leiders />
        <Keynotes />
        <Schrijven />
      </main>
      <Footer />
    </div>
  );
}

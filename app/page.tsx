import Signal from "@/components/Signal";

const portals = [
  {
    index: "01",
    label: "trades",
    note: "positions, theses, outcomes",
  },
  {
    index: "02",
    label: "builds",
    note: "experiments becoming products",
  },
  {
    index: "03",
    label: "log",
    note: "the record, kept in public",
  },
];

export default function Home() {
  return (
    <main>
      <Signal />

      <section className="hero" aria-labelledby="mandate-title">
        <div className="topbar">
          <a className="micro-mark" href="#top" aria-label="Mandate home">
            m.
          </a>

          <div className="system-state" aria-label="System status">
            <span className="pulse" />
            <span>building</span>
          </div>

          <div className="version">v0.1 / 2026</div>
        </div>

        <div className="hero-core" id="top">
          <p className="eyebrow">the internet home of</p>
          <h1 id="mandate-title">mandate.</h1>
          <p className="manifesto">trading. building. documenting.</p>
        </div>

        <div className="hero-footer">
          <p>something is being built here.</p>
          <a href="#index" className="enter-link">
            enter
            <span aria-hidden="true">↘</span>
          </a>
        </div>
      </section>

      <section className="index" id="index" aria-labelledby="index-title">
        <div className="section-kicker">
          <span>index</span>
          <span>001—003</span>
        </div>

        <h2 id="index-title" className="sr-only">
          Mandate index
        </h2>

        <div className="portal-list">
          {portals.map((portal) => (
            <article className="portal" key={portal.label}>
              <span className="portal-index">{portal.index}</span>
              <div className="portal-name">{portal.label}</div>
              <p>{portal.note}</p>
              <span className="portal-state">not ready for you yet</span>
            </article>
          ))}
        </div>
      </section>

      <section className="statement" aria-label="Mandate statement">
        <p className="statement-small">this is not a portfolio.</p>
        <p className="statement-large">
          it is a living record of what happens when curiosity becomes
          conviction.
        </p>
      </section>

      <footer className="footer">
        <span>mandate.</span>
        <span>est. 2026</span>
        <a href="https://x.com/mandatefamily" target="_blank" rel="noreferrer">
          x / @mandatefamily
        </a>
      </footer>
    </main>
  );
}

import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const scriptDir = path.dirname(fileURLToPath(import.meta.url));
const root = process.argv[2]
  ? path.resolve(process.cwd(), process.argv[2])
  : path.resolve(scriptDir, "..", "dist");

function walk(directory) {
  return fs.readdirSync(directory, { withFileTypes: true }).flatMap((entry) => {
    const absolute = path.join(directory, entry.name);
    return entry.isDirectory() ? walk(absolute) : [absolute];
  });
}

function relativeUrl(fromFile, toFile) {
  return path.relative(path.dirname(fromFile), toFile).split(path.sep).join("/");
}

const homeMain = String.raw`<main id="mainContent" class="michaelis-home">
  <div class="michaelis-shell">
    <section class="michaelis-intro" aria-labelledby="home-title">
      <div>
        <span class="michaelis-kicker">Kirke på den folkelige måde</span>
        <h1 id="home-title">Velkommen til Hannerup Kirke</h1>
      </div>
      <p>Vi skaber nærvær i kirkens fællesskaber, så den enkelte føler sig set, hørt og rummet.</p>
    </section>

    <section class="portal-grid" aria-label="Genveje til Hannerup Kirke">
      <a class="portal-card portal-card--lead" href="gudstjenester.html" style="background-image:url('fileadmin/_processed_/c/1/csm_hannerupkirkeguds_a82a0f63fd.jpeg')">
        <span class="michaelis-kicker">Søndag 6. september · kl. 10.00</span>
        <h2>Gudstjenester</h2>
        <p>Et åbent kirkerum med salmer, eftertanke og fællesskab.</p>
        <span class="card-link">Se gudstjenester</span>
      </a>

      <a class="portal-card portal-card--medium portal-card--brick portal-card--plain" href="kalender.html">
        <span class="michaelis-kicker">Det sker</span>
        <h2>Kalender</h2>
        <p>Gudstjenester, café, kor, foredrag og fællesskab — samlet ét sted.</p>
        <span class="card-link">Se kalenderen</span>
      </a>

      <a class="portal-card portal-card--medium" href="aktiviteter.html" style="background-image:url('fileadmin/_processed_/5/5/csm_jettescafe_4805283936.jpg')">
        <span class="michaelis-kicker">Kom indenfor</span>
        <h2>Fællesskaber</h2>
        <span class="card-link">Find din aktivitet</span>
      </a>

      <a class="portal-card portal-card--small" href="aktiviteter/babysalmesang.html" style="background-image:url('fileadmin/_processed_/2/f/csm_babysalmesang2024b_8a8be3cfd1.jpg')">
        <span class="michaelis-kicker">For de mindste</span>
        <h2>Børn og familie</h2>
        <span class="card-link">Læs mere</span>
      </a>

      <a class="portal-card portal-card--small portal-card--ochre portal-card--plain" href="livets-begivenheder.html">
        <span class="michaelis-kicker">Fra vugge til grav</span>
        <h2>Livets begivenheder</h2>
        <p>Dåb, konfirmation, bryllup og begravelse.</p>
        <span class="card-link">Få overblik</span>
      </a>

      <a class="portal-card portal-card--small" href="kontakt.html" style="background-image:url('fileadmin/_processed_/1/6/csm_kirkekontor_6eb6a48dbb.jpg')">
        <span class="michaelis-kicker">Vi er her</span>
        <h2>Kontakt</h2>
        <span class="card-link">Find os</span>
      </a>
    </section>

    <section class="portal-section" aria-labelledby="events-heading">
      <div class="portal-section__heading">
        <h2 id="events-heading">De næste begivenheder</h2>
        <a href="kalender.html">Hele kalenderen</a>
      </div>
      <div class="event-board">
        <a class="event-card" href="cal/begivenhed/6-9-2026-gudstjeneste-julesoendag-69578.html">
          <span class="event-card__date"><span class="event-card__day">06</span><span class="event-card__month">sep.</span><span class="event-card__time">10.00</span></span>
          <span class="event-card__body"><span class="michaelis-kicker">Kirken</span><h3>Gudstjeneste</h3><p>14. søndag efter trinitatis med salmer fra “151 salmer”.</p></span>
        </a>
        <a class="event-card" href="cal/begivenhed/8-9-2026-cafe-hannerup-1-71563.html">
          <span class="event-card__date"><span class="event-card__day">08</span><span class="event-card__month">sep.</span><span class="event-card__time">10.00</span></span>
          <span class="event-card__body"><span class="michaelis-kicker">Sognegården</span><h3>Café Hannerup</h3><p>Åben café med gratis kaffe og to lyttende ører.</p></span>
        </a>
        <a class="event-card" href="cal/begivenhed/8-9-2026-sognecafe-hver-tirsdag-11963.html">
          <span class="event-card__date"><span class="event-card__day">08</span><span class="event-card__month">sep.</span><span class="event-card__time">14.30</span></span>
          <span class="event-card__body"><span class="michaelis-kicker">Sognecafé</span><h3>Spejlbilledet ved siden af mig</h3><p>Bitten Spicker fortæller om livet som enægget tvilling.</p></span>
        </a>
        <a class="event-card" href="cal/begivenhed/9-9-2026-litteraturkreds-1-78618.html">
          <span class="event-card__date"><span class="event-card__day">09</span><span class="event-card__month">sep.</span><span class="event-card__time">16.30</span></span>
          <span class="event-card__body"><span class="michaelis-kicker">Nyt fællesskab</span><h3>Litteraturkreds</h3><p>En god bog, fælles læseoplevelser og samtale.</p></span>
        </a>
      </div>
    </section>

    <section class="portal-section" aria-labelledby="news-heading">
      <div class="portal-section__heading">
        <h2 id="news-heading">Aktuelt i Hannerup</h2>
      </div>
      <div class="story-board">
        <a class="story-card" href="voksne/litteraturkreds.html">
          <img src="fileadmin/_processed_/0/a/csm_bittenlitteratur_b813d10539.jpeg" alt="Litteraturkreds i Hannerup Kirke" loading="lazy">
          <span class="story-card__body"><span class="michaelis-kicker">Nyt tilbud</span><h3>Litteraturkreds</h3><p>Dyk ned i en god bog og del læseoplevelsen med andre.</p><span class="card-link">Læs mere</span></span>
        </a>
        <a class="story-card" href="livets-begivenheder/konfirmation.html">
          <img src="fileadmin/_processed_/8/b/csm_konfirmation23_ca89a7515f.jpg" alt="Konfirmander ved Hannerup Kirke" loading="lazy">
          <span class="story-card__body"><span class="michaelis-kicker">2026 / 2027</span><h3>Konfirmationsforberedelse</h3><p>Information om tilmelding, datoer og det første møde.</p><span class="card-link">Læs mere</span></span>
        </a>
        <a class="story-card" href="kirkeblad.html">
          <img src="fileadmin/_processed_/a/2/csm_kirkeblad2023_a728f322b2.jpg" alt="Hannerup Kirkeblad" loading="lazy">
          <span class="story-card__body"><span class="michaelis-kicker">Kirkeblad</span><h3>Nyt fra kirken</h3><p>Læs om mennesker, aktiviteter og livet omkring Hannerup Kirke.</p><span class="card-link">Åbn kirkebladet</span></span>
        </a>
      </div>
    </section>
  </div>
</main>`;

const htmlFiles = walk(root).filter((file) => file.endsWith(".html"));

for (const file of htmlFiles) {
  let source = fs.readFileSync(file, "utf8");
  const stylesheet = relativeUrl(file, path.join(root, "clone", "michaelis.css"));

  source = source
    .replace(/<link rel="stylesheet" href="[^"]*clone\/michaelis\.css">\s*/gi, "")
    .replace(/<body([^>]*?)class="([^"]*)"([^>]*)>/i, (_match, before, classes, after) => {
      const classList = new Set(classes.split(/\s+/).filter(Boolean));
      classList.add("michaelis-redesign");
      return `<body${before}class="${[...classList].join(" ")}"${after}>`;
    })
    .replace(/Hannerup-logo-lys\.svg/g, "hannerupkirke-logo-ny.svg")
    .replace(/<\/head>/i, `<link rel="stylesheet" href="${stylesheet}">\n</head>`);

  if (file === path.join(root, "index.html")) {
    source = source
      .replace(/<title>[^<]*<\/title>/i, "<title>Hannerup Kirke — Michaelis-inspireret arbejdsudgave</title>")
      .replace(/<div id="mainContent"><\/div>\s*/i, "")
      .replace(/<main[\s\S]*?<\/main>/i, homeMain);
  }

  fs.writeFileSync(file, source);
}

console.log(`Tilføjede Michaelis-designet til ${htmlFiles.length} HTML-sider.`);

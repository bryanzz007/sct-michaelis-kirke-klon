# Hannerup Kirke — Michaelis-inspireret designklon

Denne repository er en arbejds- og demonstrationskopi af den offentlige hjemmeside
`https://www.hannerup-kirke.dk/`.

Formålet er at afprøve en gennemgribende, rubrikbaseret forside inspireret af
Sct. Michaelis Kirkes modulære "spillebræt". Hannerups eget indhold, billeder,
undersider og kalender er bevaret, mens den fælles visuelle skal og forsiden er
ombygget. Den publicerede udgave bygges udelukkende fra mappen `dist/`.

Øjebliksbilledet blev taget 5. september 2026 og omfatter 91 HTML-sider samt de
tilhørende billeder, dokumenter, stylesheets og scripts. Interne links er gjort
relative, så siden også virker under et GitHub Pages-projektnavn.

## Vigtige begrænsninger

- Klonen viser et øjebliksbillede af det offentlige indhold.
- Formularer og TYPO3-funktioner kan ikke gemme data på en statisk GitHub Pages-side.
- Eksterne tjenester og dokumentlinks kan fortsat pege på den oprindelige hjemmeside.
- Produktionssiden ændres ikke af dette projekt.

## Kontrol

```sh
node scripts/check-links.mjs
node scripts/smoke-http.mjs
```

Klonen er markeret `noindex,nofollow`, formularer er deaktiveret, og en lille
arbejdsudgave-markering gør den tydeligt forskellig fra produktionssiden.

## Designlag

Det særskilte stylesheet `dist/clone/michaelis.css` indeholder redesignets farver,
typografi, header, footer, kort, kalenderfelter og responsive regler. Scriptet
`scripts/apply-michaelis-design.mjs` kan genanvende designlaget på hele klonen.

## Udgivelse på GitHub Pages

Repositoryet indeholder det lette Michaelis-designlag. Ved hver udgivelse henter
GitHub Actions den komplette Hannerup-grundklon fra release `clone-v1` i
`bryanzz007/hannerup-kirke-klon`, kontrollerer filens SHA-256, påfører
redesignet og publicerer resultatet. Grundklonens store billeder og PDF-filer
behøver derfor ikke at ligge dobbelt i dette repository.

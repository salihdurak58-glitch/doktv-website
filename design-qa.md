# DokTV Startseite – Design QA

## Vergleichsbasis

- Source visual truth path: `/var/folders/80/j_5d1njd7kscgf0qn84_h3wc0000gn/T/codex-clipboard-95417869-c4cf-4ba2-8e00-35060ff9bda0.png`
- Source pixels: 3680 × 2170. Der eigentliche Landingpage-Entwurf liegt als verkleinerte Bildansicht innerhalb eines Browser-Screenshots; Browser-Chrome und schwarze Außenfläche wurden bei der visuellen Bewertung ignoriert.
- Implementation screenshot: Codex In-app Browser, Tab 4, `http://127.0.0.1:3000/`, inline CUA-Capture. Die Browser-API liefert JPEG-Bilddaten, aber keinen Dateipfad zum Speichern. Letzter Viewport-Capture: 1440 × 900 CSS px; ergänzend 390 × 844 CSS px mobil.
- State: Startseite, helles Desktop-Layout; Desktop-Menü geschlossen, mobil zusätzlich geöffnet geprüft.
- Density/normalization: Browser-Capture ungefähr 1×. Die eingebettete Vorlage wurde nach ihrem sichtbaren Seitenbereich und ihrer Desktop-Proportion verglichen; keine pixelgenaue Messung aus dem 60-%-Screenshot abgeleitet.

## Full-view comparison

Vorlage und finale Umsetzung wurden im selben Browser-Vergleichsdurchgang geöffnet. Header, zweifarbige H1, Apotheke mit Display rechts, zwei CTAs, vier USP-Punkte, schmale Vertrauenszeile, vier Lösungskarten, Referenz und mintfarbener Abschluss folgen derselben visuellen Hierarchie. Die Umsetzung ist etwas länger, weil ein funktionsfähiger Ablaufabschnitt und ein transparenter Preisüberblick ergänzt wurden. Unbelegte Zahlen, Zitat und Stadtliste der Vorlage wurden bewusst nicht übernommen.

## Focused regions

- Hero bei 1280 px: Apotheke und Display scharf und passend zugeschnitten; Text auf der hellen linken Bildhälfte lesbar. Die Bildfläche wurde nach dem ersten Vergleich um 19 % nach rechts gesetzt, weil die H1 zuvor zu weit ins Motiv lief. Zweiter Browser-Capture zeigte freie Textfläche.
- Lösungskarten und Referenz bei 1280 px: vier gleichmäßig ausgerichtete Karten; reale Kudamm-Fotografie und drei nachprüfbare Installationsfakten statt illustrativer Erfolgszahlen.
- Finale Desktop-Prüfung bei 1440 px: Hero-Typografie, Weiß-/Mint-/Teal-Palette, Displaymotiv und CTA-Proportionen mit der Vorlage gemeinsam betrachtet. Die neue Preiszeile nutzt dieselben hellen Karten und zeigt 649 €, 799 €, 69 €/Monat sowie den optionalen Netto-Zuschlag von 10 €.
- Mobile bei 390 px: H1, CTAs, USP-Raster, Bild und Karten stapeln ohne horizontalen Überlauf; das mobile Menü öffnet und zeigt die Lösungslinks.

## Pflichtprüfung

| Fläche | Ergebnis |
| --- | --- |
| Typografie | Kräftige, eng gesetzte Navy-/Teal-Hierarchie wie in der Vorlage. Bestehende Avenir-Next-Schriftkette bleibt erhalten; kein abgeschnittener Text im geprüften Desktop- oder Mobilzustand. |
| Abstände/Layout | Hero, Vertrauenszeile und Karten bleiben klar getrennt. Desktop 1280 px und Mobil 390 px ohne seitlichen Überlauf. |
| Farben/Tokens | Weiß, sehr helles Mint, tiefes Navy und DokTV-Teal entsprechen der Vorlage; CTA-Kontrast und Fokuszustände sind sichtbar. |
| Bildqualität | Hero ist eine ausdrücklich gekennzeichnete Visualisierung, als optimiertes JPEG eingebunden. Referenzbild ist eine vorhandene echte Installation; der bisher falsche Tageslicht-Alt-Text wurde korrigiert. |
| Copy/Inhalt | Eine H1, die beauftragte Hero-Unterzeile, sinnvolle H2/H3, korrekte Preise, interne Links und neue Metadaten. Künftige individuelle SEO-Eingaben im Adminbereich bleiben wirksam. Erfundenes Mockup-Zitat, Kundenzahl, Partnerlogos, Prozentwerte und Stadtliste wurden nicht übernommen. |
| Icons | Einheitliche Icons aus der vorhandenen Bibliothek, keine Emoji- oder CSS-Ersatzgrafiken. |
| Verhalten | Desktop-Lösungsmenü öffnet und führt zum Notdienstanzeiger. Mobile Navigation öffnet. Beratungs-CTA führt zur Kontaktseite; Lösungs-CTA zum Anker. Acht relevante lokale Routen inklusive Sitemap lieferten HTTP 200. Browserkonsole des Produktions-Builds ohne Warnungen/Fehler. Canonical im Browser-Head exakt `https://doktv.de/`. |

## Findings

Keine verbleibenden P0/P1/P2-Abweichungen im geprüften Umfang.

## Vergleichshistorie

1. Erster Desktop-Capture: [P2] Hero-Text ragte zu weit in das Apothekenmotiv. Fix: Bildansatz auf Desktop um 19 % nach rechts versetzt.
2. Zweiter Desktop-Capture: Textfeld frei, Apotheke und Display weiterhin groß sichtbar; P2 behoben.
3. Erweiterung des Auftrags: Preisüberblick, exakte Hero-Copy und Entfernung der Stadtliste eingebaut. Finale Captures bei 1440 × 900 und 390 × 844 zeigen keine neuen P0/P1/P2-Abweichungen oder horizontalen Überlauf.

## Open Questions

- Die Bildvorlage enthält nicht belegte Zahlen und ein Zitat. Diese wurden bewusst durch reale, im Projekt dokumentierte Installationsfakten ersetzt.
- Der Screenshot der Umsetzung ist als inline CUA-Browseraufnahme verfügbar; die verwendete Browser-API stellte keinen persistenten Screenshot-Dateipfad bereit.

## Follow-up Polish

- [P3] Ein späteres echtes, helles Foto einer DokTV-Installation könnte die gekennzeichnete Hero-Visualisierung ersetzen.

## Implementation Checklist

- [x] Helles Premium-Layout aus der Vorlage übertragen
- [x] Responsive Desktop-/Mobilzustände geprüft
- [x] Menü, CTAs und Zielrouten geprüft
- [x] Meta Title, Description, Canonical mit Root-Slash und eine H1 geprüft
- [x] Beauftragten Preisüberblick und Netto-Hinweis geprüft
- [x] Produktions-Build erfolgreich

## Siteweite Vereinheitlichung – 10. Oktober 2026

### Vergleichsbasis und Captures

- Visuelle Referenz ist die bereits umgesetzte helle Startseite; ihr finaler lokaler Desktop-Capture liegt unter `/private/tmp/doktv-local-final-home-desktop.jpg`.
- Implementierung: `/private/tmp/doktv-local-final-{schaufenster,preise,notdienst,kontakt}-{desktop,mobile}.jpg` sowie Home-Desktop/Mobil-Captures. CUA-Browseraufnahmen bei 1440 × 900 bzw. 390 × 844 CSS px, ungefähr 1× Pixeldichte. Die Startseite und jede Unterseite wurden im selben Browserzustand verglichen.
- Ergänzende Layoutprüfung bei 768 × 1024 und 1024 × 768 CSS px; Beispiel-Captures `/private/tmp/doktv-local-schaufenster-768.jpg` und `/private/tmp/doktv-local-notdienst-1024.jpg`.

### Full-view comparison und Fokusregionen

- Der gemeinsame Header übernimmt Logo, helle Fläche, Lösungsauswahl, Linkhierarchie und türkisfarbene Beratungs-CTA der Startseite. Jede öffentliche Route zeigt genau einen Header, einen Main und einen gemeinsamen hellen Footer; Admin/Login zeigen keinen Public-Header oder -Footer.
- Schaufenster, Preise, Notdienst und Kontakt folgen nun derselben Weiß-/Mint-/Teal-/Navy-Palette, denselben Containerbreiten, Card-Radien und Button-Zuständen. Bestehende Produktfotos und fachliche Inhalte bleiben erhalten.
- Auf Mobilgeräten bleibt die Sticky-Beratungsleiste vom Seiteninhalt und Menü getrennt. Das Menü enthält sämtliche sechs Lösungen und die primären Navigationsziele. Desktop-Disclosure und Mobile-Menü schließen bei Linkauswahl, Escape und Außenklick; Tastaturfokus bleibt nachvollziehbar.
- Kontakt: Die Notdienst-Lösung wird mit `/kontakt?display=notdienst#anfrage` weiterhin im unveränderten Formular vorausgewählt. Es wurde kein echtes Formular abgeschickt.

### Pflichtprüfung

| Fläche | Ergebnis |
| --- | --- |
| Typografie und Copy | Hierarchie und Zeilenlängen über fünf repräsentative Seiten konsistent; individuelle Seitentitel/H1 bleiben erhalten. |
| Layout und Abstände | 23 statische öffentliche Routen bei 1440 px ohne Dokument-Überlauf; fünf repräsentative Routen zusätzlich bei 390, 768 und 1024 px ohne Überlauf. |
| Farben und Tokens | Gemeinsame `--doktv-*`-Tokens für öffentliche Seiten; Akzent, Flächen, Buttons und Fokuszustände an die Startseite angeglichen. |
| Bilder und Icons | Bestehende echte Produkt-/Referenzbilder bleiben erhalten; keine neuen unbelegten Visuals oder Icons. |
| Verhalten | Navigation Start → Schaufenster → Preise → Referenzen → Notdienst → Kontakt → Ablauf → Start funktioniert. Menüs öffnen und schließen per Maus, Touch und Tastatur. |
| SEO und Routen | Alle 23 statischen Routen erreichbar, individuelle Canonicals auf `https://doktv.de/`; Sitemap enthält diese Routen ohne www. Blog-Karten führen zu vorhandenen Artikeln. Admin bleibt außerhalb des öffentlichen Layouts. |
| Build und Konsole | Next.js-Produktions-Build und TypeScript erfolgreich; Lint ohne Fehler, drei vorbestehende `<img>`-Warnungen im Adminbereich. Browserkonsole ohne Fehler/Warnungen. |

### Vergleichshistorie und Restpunkte

1. Erstes Mobil-Capture des Notdienstanzeigers: [P1] lange H1 innerhalb des Hero abgeschnitten, obwohl das Dokument keinen horizontalen Überlauf meldete.
2. H1 mit semantischer Umbruchstelle und Grid-Korrektur behoben; nachfolgendes 390-px-Capture zeigte den gesamten Titel. CTA-Abstand zur Sticky-Leiste danach korrigiert und erneut geprüft (CTA y=662–716, Leiste ab y=738).
3. Finale lokale Prüfung: keine offenen P0/P1/P2-Abweichungen auf den geprüften Seiten und Viewports.
4. Production-Captures nach dem Release: `/Users/salihdurak/.codex/visualizations/2026/10/10/01a12751-b9ae-7b20-89f4-26f30bd38cd3/doktv-live/doktv-live-unified-{startseite,schaufenster,preise,notdienst,kontakt}-{desktop,mobile}.jpg`. Die fünf sichtbaren Seiten wurden bei 1440 × 900 und 390 × 844 CSS px erneut verglichen; alle sichtbaren Bilder waren geladen, alle Seiten ohne horizontalen Überlauf.
5. Live-Navigation inklusive mobilem Menü und `/#ablauf` geprüft, Browserkonsole ohne Warnungen/Fehler. 23/23 Sitemap-URLs: HTTP 200, genau eine H1, jeweils eigener Canonical ohne `noindex`. Sitemap: 23 eindeutige Apex-URLs, kein www. `www` leitet mit 308 in einem Schritt und mit Pfad/Query weiter.

final result: passed

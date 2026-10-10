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

final result: passed

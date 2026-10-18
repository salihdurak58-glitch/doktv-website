import { formatEuro, pricing } from "@/app/lib/pricing";

export type EditorialPageData = {
  route: string;
  metaTitle: string;
  metaDescription: string;
  eyebrow: string;
  title: string;
  intro: string;
  overview: { title: string; text: string; items: { title: string; text: string }[] };
  image?: { src: string; alt: string };
  sections: { id: string; title: string; paragraphs: string[]; image?: { src: string; alt: string } }[];
  faqs: { question: string; answer: string }[];
  links: { href: string; label: string }[];
};

const displayCosts = `${formatEuro(pricing.displays[55].price)} für 55 Zoll oder ${formatEuro(pricing.displays[65].price)} für 65 Zoll, jeweils einmalig für die Hardware`;
const serviceCosts = `${formatEuro(pricing.service.price)} netto monatlich`;
const emergencyCosts = `${formatEuro(pricing.emergencyDisplay.price)} netto monatlich`;

export const editorialPages = {
  "/arztpraxen": {
    route: "/arztpraxen",
    metaTitle: "Digitale Patienteninformation für Arztpraxen | DokTV",
    metaDescription: "Praxisleistungen, Vorsorge und Abläufe verständlich zeigen: digitale Patienteninformation für Arztpraxen mit Gestaltung und Betreuung von DokTV.",
    eyebrow: "Für Arztpraxen",
    title: "Digitale Patienteninformation für Ihre Arztpraxis.",
    intro: "Was sollen Patienten über Ihre Praxis wissen? DokTV macht aus Ihren Leistungen, organisatorischen Hinweisen und freigegebenen Gesundheitsthemen ein gut lesbares Bildschirmprogramm. Ihre Praxis entscheidet über die Inhalte; wir übernehmen Gestaltung und laufende Betreuung.",
    overview: {
      title: "Informationen, die zu Ihrer Praxis passen",
      text: "Planen Sie das Programm aus Sicht Ihrer Patienten: Was hilft bei der Orientierung, was erklärt eine Leistung und was erleichtert den nächsten Besuch?",
      items: [
        { title: "Praxisleistungen", text: "Eigene Angebote verständlich erklären, ohne individuelle Beratung durch pauschale Aussagen zu ersetzen." },
        { title: "Vorsorge und Prävention", text: "Fachlich freigegebene Themen auswählen, die für die Patientengruppe Ihrer Praxis relevant sind." },
        { title: "Praxisabläufe", text: "Sprechzeiten, Terminvorbereitung und organisatorische Hinweise an einem sichtbaren Ort bündeln." },
        { title: "Team und Praxis", text: "Ansprechpartner und Zuständigkeiten vorstellen, damit Patienten sich leichter orientieren können." },
        { title: "Saisonale Hinweise", text: "Zeitlich passende Informationen vorbereiten und nach Ablauf wieder aus dem Programm nehmen." },
        { title: "Individuelle Schwerpunkte", text: "Inhalte auf Fachrichtung, Wartebereich und Informationsbedarf abstimmen statt ein beliebiges Standardprogramm zu zeigen." },
      ],
    },
    sections: [
      { id: "inhaltsplanung", title: "Welche Fragen soll Ihre Patienteninformation beantworten?", paragraphs: ["Starten Sie mit Fragen, die im Praxisalltag tatsächlich auftreten: Welche Unterlagen sollen Patienten zum Termin mitbringen? Wie funktioniert eine Rezeptanfrage? Welche Sprechzeiten gelten? Ein kurzer Hinweis mit einem klaren nächsten Schritt ist oft hilfreicher als eine lange Liste aller Praxisleistungen.", "Für medizinische Themen legt das Praxisteam Inhalt und Aussage fest. DokTV bereitet die freigegebenen Informationen für das Display auf. Der Bildschirm ergänzt das persönliche Gespräch; er stellt keine Diagnose und gibt keine individuellen Behandlungsempfehlungen."] },
      { id: "lesbarkeit", title: "Patientengerecht gestalten statt den Bildschirm überfüllen", paragraphs: ["Im Wartezimmer wird nicht wie auf einer Webseite gelesen. Planen Sie pro Motiv eine Hauptaussage, eine kurze Erklärung und ausreichend Zeit zum Erfassen. Kontraste, Schriftgröße und Betrachtungsabstand sollten gemeinsam beurteilt werden. Wichtige Hinweise dürfen nicht allein über Ton oder kleine Textzeilen verständlich sein.", "Auch die Reihenfolge zählt: Wechseln Sie organisatorische Informationen mit einer Praxisvorstellung oder einem fachlich freigegebenen Thema ab. So entsteht ein ruhiger Ablauf, der zur Atmosphäre Ihrer Praxis passt."] },
      { id: "zusammenarbeit", title: "So bleiben Aufgaben und Freigaben übersichtlich", paragraphs: ["Benennen Sie in der Praxis einen Ansprechpartner für Inhalte und Änderungen. Hilfreich sind Ihr Logo, vorhandene Gestaltungsvorgaben, ein Überblick über die gewünschten Themen und die jeweiligen Gültigkeitszeiträume. Vor einer Veröffentlichung sollten insbesondere Namen, Sprechzeiten und fachliche Aussagen kontrolliert werden.", "Bei Änderungen im Praxisbetrieb melden Sie die aktualisierten Angaben an DokTV. Umfang, Abstimmungsweg und gewünschte Termine werden gemeinsam geklärt. Eine Bildschirminformation ist nur dann hilfreich, wenn sie auch nach der Einrichtung gepflegt wird."] },
      { id: "technik-und-kosten", title: "Display und Betreuung getrennt betrachten", paragraphs: [`Die veröffentlichten Hardwarepreise betragen ${displayCosts}. Der Content-Service kostet ${serviceCosts}. Alle genannten Preise verstehen sich netto. Welche Größe sinnvoll ist, hängt von Platz, Sichtachsen und Entfernung der Sitzplätze ab – nicht allein von der Raumfläche.`, "Prüfen Sie vor der Entscheidung Stromversorgung, Internetverbindung und die vorgesehene Befestigung. Montage, technische Voraussetzungen und Vertragsdetails sollten im individuellen Angebot eindeutig beschrieben sein. Auf der Wartezimmer-TV-Seite finden Sie die produktbezogenen Planungsschritte; hier steht die inhaltliche Nutzung in Ihrer Praxis im Mittelpunkt."] },
    ],
    faqs: [
      { question: "Wer entscheidet, welche Inhalte Patienten sehen?", answer: "Ihre Praxis legt Themen und Aussagen fest und gibt die Inhalte frei. DokTV übernimmt deren Gestaltung und Betreuung. Fachliche Informationen sollten vor der Veröffentlichung von einer dafür verantwortlichen Person in Ihrer Praxis geprüft werden." },
      { question: "Ist Patienteninformation nur für große Praxen sinnvoll?", answer: "Entscheidend sind Informationsbedarf und eine geeignete Position des Displays. Auch ein kleiner Wartebereich kann passende Sichtachsen bieten. Die Auswahl der Inhalte und die Lesbarkeit sollten deshalb vor der Bildschirmgröße geplant werden." },
      { question: "Müssen wir fertige Werbegrafiken liefern?", answer: "DokTV erstellt die Display-Inhalte im Rahmen des vereinbarten Content-Service. Für die Abstimmung helfen korrekte Texte, Logo, gegebenenfalls eigene Bilder und ein klar benannter Ansprechpartner für die Freigabe." },
    ],
    links: [{ href: "/wartezimmer-tv-praxen", label: "Wartezimmer-TV und Technik planen" }, { href: "/preise", label: "Displaygrößen und Preise vergleichen" }, { href: "/kontakt", label: "Patienteninformation für Ihre Praxis besprechen" }],
  },
  "/wartezimmer-tv-praxen": {
    route: "/wartezimmer-tv-praxen",
    metaTitle: "Wartezimmer-TV für Arztpraxen: Technik & Inhalte | DokTV",
    metaDescription: "Wartezimmer-TV für Arztpraxen planen: Displaygröße, Standort, Inhalte und laufende Betreuung. 55 und 65 Zoll vergleichen und Beratung anfragen.",
    eyebrow: "Digital Signage für Praxen",
    title: "Wartezimmer-TV für Arztpraxen – verständlich statt überladen.",
    intro: "Ein Wartezimmer-Display soll Ihre Patienten informieren und sich unaufdringlich in den Praxisalltag einfügen. DokTV verbindet Bildschirm, individuell gestaltete Inhalte und laufende Betreuung. Sie legen fest, welche Informationen in Ihrer Praxis gezeigt werden.",
    overview: { title: "Drei Entscheidungen vor der Einrichtung", text: "Ein gutes Wartezimmer-TV beginnt mit dem Einsatzort und dem Programm, nicht mit einer möglichst langen Funktionsliste.", items: [
      { title: "Blickrichtung", text: "Welche Sitzplätze haben freie Sicht? Türbereiche, Spiegelungen und Gegenlicht bei der Positionierung berücksichtigen." },
      { title: "Programm", text: "Praxisleistungen, Vorbereitungshinweise und organisatorische Informationen auf die Patientengruppe abstimmen." },
      { title: "Betreuung", text: "Freigaben, Aktualisierungen und technische Fragen mit einem festen Ansprechpartner koordinieren." },
    ] },
    sections: [
      { id: "bildschirmgroesse", title: "55 oder 65 Zoll: Welche Größe passt ins Wartezimmer?", paragraphs: ["Ein größeres Display bietet mehr Fläche, ersetzt aber keine gut lesbare Gestaltung. Vergleichen Sie die Position des Bildschirms mit den tatsächlichen Sitzabständen. Ein 55-Zoll-Gerät kann für eine kompaktere Situation passen; 65 Zoll bietet mehr Darstellungsfläche für einen größeren Betrachtungsbereich. Die Entscheidung sollte anhand des Raums erfolgen.", "Vor einer Montage sind die Abmessungen des konkreten Geräts, der Untergrund und eine passende Befestigung zu prüfen. Planen Sie außerdem einen sicheren Verlauf der Kabel und Zugang für Wartungsarbeiten ein. Verbindliche Geräteeigenschaften werden im Angebot geklärt."] },
      { id: "betrieb", title: "Was vor dem Start technisch geklärt werden sollte", paragraphs: ["Für die Standortplanung sind Stromversorgung und eine geeignete Internetverbindung wichtig. Halten Sie fest, wann die Praxis geöffnet ist und wann das Programm benötigt wird. So können Einrichtung und Betrieb auf Ihren Alltag abgestimmt werden, statt erst nach der Installation offene Fragen zu entdecken.", "Ein bereits vorhandener Fernseher ist nicht automatisch für jede Ausspielung geeignet. Modell, Anschlüsse, Auflösung und Einbauort sollten vorab geprüft werden. Aussagen zu Dauerbetrieb, Helligkeit oder speziellen Schnittstellen lassen sich nur für das tatsächlich angebotene Gerät treffen."] },
      { id: "programmablauf", title: "Ein Programm, das auch ohne Ton verständlich bleibt", paragraphs: ["Wartezimmer-TV muss kein klassisches Fernsehprogramm sein. Kurze Motive können Ihre Praxis vorstellen, einen Terminablauf erklären oder auf eine angebotene Leistung aufmerksam machen. Inhalt, Darstellung und Anzeigedauer sollten so zusammenpassen, dass Patienten die Aussage ohne Eile erfassen können.", "Ein möglicher Ablauf beginnt mit einem Willkommen, zeigt anschließend einen organisatorischen Hinweis und stellt dann eine Praxisleistung vor. Das ist ein Planungsbeispiel, kein festes Programmpaket. Medizinische Aussagen werden von Ihrer Praxis freigegeben; persönliche Patientendaten gehören nicht auf eine allgemein sichtbare Informationsfläche."] },
      { id: "kosten", title: "Was kostet Wartezimmer-TV bei DokTV?", paragraphs: [`Für die Hardware gelten ${displayCosts}. Der DokTV Content-Service kostet ${serviceCosts}. Die Apotheke oder Praxis entscheidet über das Programm; DokTV erstellt und betreut die vereinbarten Inhalte. Die Hardwarepreise sind ebenfalls Nettopreise.`, "Vergleichen Sie Angebote nach Hardware, Inhaltserstellung und laufender Betreuung. Lassen Sie zusätzlich klären, welche Montagearbeiten, vorhandenen Geräte und Vertragsbedingungen für Ihren Standort berücksichtigt werden. Der öffentlich ausgewiesene Hardwarepreis allein beschreibt nicht jeden individuellen Installationsfall."] },
    ],
    faqs: [
      { question: "Braucht das Wartezimmer-TV Ton?", answer: "Die Inhalte sollten auch ohne Ton verständlich sein. Gut lesbare Texte, klare Bilder und eine ruhige Abfolge lassen sich besser auf unterschiedliche Situationen im Wartebereich abstimmen. Ob Audio sinnvoll ist, sollte Ihre Praxis bewusst entscheiden." },
      { question: "Können wir Praxisinformationen später austauschen?", answer: "Aktualisierung gehört zum Konzept des DokTV Content-Service. Melden Sie Änderungen und die gewünschten Gültigkeitszeiträume an Ihren Ansprechpartner. Der konkrete Ablauf und der vereinbarte Leistungsumfang werden im Angebot festgehalten." },
      { question: "Ist die Lösung nur für Hausarztpraxen gedacht?", answer: "Das Programm lässt sich auch für Facharzt- und Zahnarztpraxen, MVZ oder andere geeignete Wartebereiche planen. Entscheidend ist, dass Inhalte, Fachrichtung und Informationsbedarf zusammenpassen. Gezeigte Apothekenreferenzen sind dabei keine Praxisreferenzen." },
    ],
    links: [{ href: "/arztpraxen", label: "Patienteninformation inhaltlich planen" }, { href: "/preise", label: "Preise für 55 und 65 Zoll" }, { href: "/kontakt", label: "Wartezimmer-TV anfragen" }],
  },
  "/werbung-apotheke-display": {
    route: "/werbung-apotheke-display",
    metaTitle: "Digitale Apothekenwerbung: Inhalte fürs Display | DokTV",
    metaDescription: "Werbeinhalte für Apotheken-Displays: Angebote, Services und saisonale Motive. DokTV gestaltet und betreut das Programm, Ihre Apotheke gibt es frei.",
    eyebrow: "Werbung auf Apotheken-Displays",
    title: "Digitale Apothekenwerbung, die Ihre Inhalte klar auf den Punkt bringt.",
    intro: "Ein Display ist nur so hilfreich wie das Programm darauf. Zeigen Sie Monatsangebote, eigene Services und passende saisonale Themen statt einer Sammlung überladener Motive. DokTV erstellt die Werbeinhalte und betreut die Ausspielung; Ihre Apotheke entscheidet, was erscheint.",
    image: { src: "/referenzen/sky-apotheke-wedding-1.jpg", alt: "Digitales Werbedisplay in der Sky Apotheke Wedding" },
    overview: { title: "Welche Inhalte auf ein Apotheken-Display passen", text: "Jedes Motiv sollte eine Aufgabe erfüllen: informieren, ein Angebot erklären oder einen konkreten nächsten Schritt zeigen.", items: [
      { title: "Monatsangebote", text: "Produkt, Preis und Gültigkeit übersichtlich darstellen und rechtzeitig aktualisieren." },
      { title: "Eigene Services", text: "Auf tatsächlich angebotene Leistungen und den passenden Ansprechpartner hinweisen." },
      { title: "Kosmetik und Pflege", text: "Produktbilder und kurze Aussagen zu einer verständlichen Botschaft verbinden." },
      { title: "Saisonale Themen", text: "Inhalte vorausschauend planen und nach Ende der Aktion aus dem Programm nehmen." },
      { title: "Notdienstinformation", text: "Die optionale Notdienstanzeige getrennt von normalen Werbemotiven planen." },
      { title: "Herstellerinhalte", text: "Nur Motive ausspielen, die mit Ihrer Apotheke abgestimmt und freigegeben wurden." },
    ] },
    sections: [
      { id: "schaufenster-und-verkaufsraum", title: "Schaufensterwerbung und Werbung im Verkaufsraum unterscheiden", paragraphs: ["Vor einem Schaufenster bleibt meist nur ein kurzer Blick auf die Botschaft. Ein Motiv sollte deshalb schnell erkennen lassen, worum es geht. Eine große Hauptaussage, ein passendes Bild und wenige zusätzliche Angaben sind ein sinnvoller Ausgangspunkt. Prüfen Sie die Wirkung aus der tatsächlichen Blickrichtung außerhalb der Apotheke.", "Im Verkaufsraum darf eine Information etwas mehr erklären: etwa wie Kunden einen Service anfragen oder wo sie Beratung erhalten. Das gleiche Motiv muss deshalb nicht an jedem Bildschirm unverändert laufen. Entscheidend ist der jeweilige Informationsmoment."] },
      { id: "briefing-und-freigabe", title: "Von Ihrer Idee zum freigegebenen Werbemotiv", paragraphs: ["Für ein klares Briefing helfen das gewünschte Thema, freigegebene Produktbilder, korrekte Preisangaben und ein Gültigkeitszeitraum. Bei eigenen Services sollten nur Leistungen genannt werden, die Ihre Apotheke tatsächlich anbietet. DokTV gestaltet daraus eine Bildschirmdarstellung, die zu Ihrem Auftritt passt.", "Prüfen Sie vor der Freigabe insbesondere Preise, Produktbezeichnungen, Schreibweisen und die inhaltlichen Aussagen. Werberechtliche oder fachliche Fragen müssen von den dafür verantwortlichen Personen geklärt werden. Die Gestaltung eines Motivs ersetzt diese Prüfung nicht."] },
      { id: "redaktionsplan", title: "Ein einfacher Redaktionsplan für Ihre Apotheke", paragraphs: ["Notieren Sie für jedes Thema einen Verantwortlichen, den gewünschten Start und das geplante Ende. Ergänzen Sie, welche Bilder oder Texte noch fehlen und wer die finale Freigabe erteilt. So lassen sich saisonale Motive vorbereiten, ohne kurzfristig zwischen Beratung, Warenwirtschaft und Werbegestaltung wechseln zu müssen.", "Ein Beispiel: Ein Monat kann ein aktuelles Angebot, einen eigenen Service und eine saisonale Information enthalten. Umfang und Wechsel werden nach Bedarf vereinbart. Das Beispiel beschreibt eine mögliche Planung, keine garantierte Anzahl an Motiven im Tarif."] },
      { id: "content-service", title: "Content-Service, Display und Notdienstanzeige getrennt planen", paragraphs: [`Der DokTV Content-Service kostet ${serviceCosts}. Die Hardware wird einmalig berechnet: ${displayCosts}. Die optionale Notdienstanzeige kostet zusätzlich ${emergencyCosts}. Auch die Hardwarepreise sind netto.`, "Für einen sauberen Vergleich sollten Sie nicht nur die Displaygröße betrachten, sondern auch den vereinbarten Umfang der Inhaltserstellung und Betreuung. Auf der Apotheken-Seite erklären wir die gesamte Displaylösung; diese Seite konzentriert sich auf die Gestaltung und Pflege Ihres Werbeprogramms."] },
    ],
    faqs: [
      { question: "Wer erstellt die Werbung für unsere Apotheke?", answer: "DokTV erstellt die vereinbarten Display-Inhalte im Content-Service. Ihre Apotheke liefert die benötigten Angaben und entscheidet über die Veröffentlichung. Logo, korrekte Preise und vorhandene Bildmaterialien erleichtern die Abstimmung." },
      { question: "Werden Herstellerkampagnen automatisch eingeblendet?", answer: "Die Apotheke entscheidet, welche Werbung gezeigt wird. Herstellerinhalte werden mit dem jeweiligen Standort abgestimmt; aus der Nutzung eines Displays folgt keine pauschale Freigabe beliebiger Kampagnen." },
      { question: "Ist der Notdienstanzeiger im Content-Service enthalten?", answer: `Die Notdienstanzeige ist eine optionale Zusatzleistung für ${emergencyCosts}. Funktionsumfang und Einrichtung sollten zusammen mit Ihrer Displaylösung abgestimmt werden.` },
    ],
    links: [{ href: "/apotheken", label: "Digital Signage für Apotheken ansehen" }, { href: "/apotheken-notdienst-anzeiger", label: "Optionale Notdienstanzeige kennenlernen" }, { href: "/preise", label: "Hardware und monatliche Kosten vergleichen" }],
  },
  "/hersteller": {
    route: "/hersteller",
    metaTitle: "Digitales Marketing für Gesundheitsmarken | DokTV",
    metaDescription: "Digitale Kommunikation für Gesundheitsmarken: passende Apothekenstandorte, relevante Inhalte und abgestimmte Freigaben mit DokTV planen.",
    eyebrow: "Für Hersteller",
    title: "Digitales Marketing für Gesundheitsmarken – passend zum Standort.",
    intro: "Gesundheitsprodukte brauchen einen passenden Kommunikationsrahmen. DokTV plant Herstellerinhalte für ausgewählte Apotheken und geeignete Praxisumfelder. Im Mittelpunkt stehen die Relevanz für den Standort, eine klare Botschaft und nachvollziehbare Freigaben.",
    image: { src: "/referenzen/sky-apotheke-wedding-1.jpg", alt: "DokTV Display am Referenzstandort Sky Apotheke Wedding" },
    overview: { title: "Welche Themen gemeinsam geprüft werden können", text: "Eine Produktkategorie allein entscheidet noch nicht über die Eignung einer Kampagne. Inhalt und Umfeld werden vorab abgestimmt.", items: [
      { title: "OTC- und Gesundheitsprodukte", text: "Produktkommunikation auf das Sortiment und den jeweiligen Standort abstimmen." },
      { title: "Kosmetik und Pflege", text: "Markenauftritt, Produktbild und lesbare Botschaft miteinander verbinden." },
      { title: "Saisonale Kampagnen", text: "Thema, Zeitraum und regionale Auswahl gemeinsam planen." },
    ] },
    sections: [
      { id: "eignung", title: "Passt Ihr Kommunikationsziel zum Gesundheitsumfeld?", paragraphs: ["Beginnen Sie mit einer konkreten Aufgabe: Soll ein vorhandenes Produkt vorgestellt, eine Aktion begleitet oder ein erklärungsbedürftiges Angebot verständlicher gemacht werden? Je klarer dieses Ziel ist, desto besser lässt sich beurteilen, welcher Standort und welche Darstellung dazu passen.", "Ein Apotheken-Display und eine Informationsfläche im Wartezimmer sind unterschiedliche Kontaktpunkte. Sortiment, Situation der Besucher und Erwartungen an den Inhalt unterscheiden sich. Die Auswahl sollte deshalb nicht allein auf möglichst vielen Bildschirmen beruhen."] },
      { id: "verantwortung", title: "Freigaben sind Teil der Kampagnenplanung", paragraphs: ["Für Gesundheitsmarken ist eine nachvollziehbare Abstimmung besonders wichtig. Stellen Sie freigegebene Aussagen, nutzbare Bilddateien und die für die Gestaltung erforderlichen Hinweise bereit. Zuständigkeiten für inhaltliche und rechtliche Prüfung sollten vor dem geplanten Start geklärt sein.", "DokTV koordiniert die Darstellung und Ausspielung der vereinbarten Motive. Der teilnehmende Standort entscheidet mit, welche Inhalte in seinem Umfeld erscheinen. Eine Zusammenarbeit ist keine allgemeine Zusage zur Veröffentlichung jedes Produkts oder jeder Werbeaussage."] },
      { id: "referenzen-und-netzwerk", title: "Reale Installationen statt pauschaler Reichweitenversprechen", paragraphs: ["Die DokTV-Referenzen zeigen Installationen in der Sky Apotheke Wedding, der Sky Apotheke Kudamm und der Sky Apotheke Kreuzberg. Diese Bilder dokumentieren reale Einsatzorte. Sie belegen nicht automatisch eine aktuelle Werbeverfügbarkeit, eine bestimmte Besucherzahl oder eine Wirkung Ihrer Kampagne.", "Für Ihre Planung werden gewünschte Region, geeignete Standorte und der Zeitraum gesondert abgestimmt. Weitere Orte oder Praxisflächen sollten erst eingeplant werden, wenn deren Verfügbarkeit konkret bestätigt ist."] },
      { id: "anfrage", title: "Was zu einer hilfreichen Herstelleranfrage gehört", paragraphs: ["Nennen Sie Marke oder Produkt, Ziel der Kommunikation, gewünschte Region und den geplanten Zeitraum. Ergänzen Sie, ob bereits freigegebene Motive vorliegen oder eine Aufbereitung benötigt wird. Auch ein Budgetrahmen hilft dabei, die Anfrage einzuordnen, ohne vorschnell eine ungeeignete Auswahl zu treffen.", "Die Preise für Hardware und den Content-Service einer einzelnen Apotheke sind nicht automatisch die Konditionen einer Herstellerkampagne. Kampagnenumfang, Standortauswahl und Laufzeit werden individuell besprochen. Der nächste Schritt ist eine abgestimmte Planung, nicht eine Buchung auf Basis unbestätigter Reichweiten."] },
    ],
    faqs: [
      { question: "Ist jede Gesundheitsmarke für jeden Standort geeignet?", answer: "Nein. Produkt, Aussage und Umfeld müssen zusammenpassen. Eine Anfrage wird anhand des Kommunikationsziels und der verfügbaren, teilnehmenden Standorte abgestimmt. Die Standortfreigabe bleibt Teil der Planung." },
      { question: "Können Hersteller eigene Werbemotive liefern?", answer: "Vorhandene, freigegebene Motive können als Grundlage der Abstimmung dienen. Format, Auflösung, Nutzungsrechte und Lesbarkeit sollten vorab geklärt werden. Notwendige Anpassungen und deren Umfang gehören ins Angebot." },
      { question: "Wie wird aus einer ersten Anfrage eine konkrete Kampagne?", answer: "Zunächst werden Ziel, Region und Zeitraum eingegrenzt. Danach werden verfügbare Flächen, Inhalte, Freigaben und Konditionen konkret abgestimmt. Den Ablauf erläutert die Seite zur Herstellerwerbung ausführlicher." },
    ],
    links: [{ href: "/hersteller-werbung", label: "Eine Herstellerkampagne konkret planen" }, { href: "/referenzen", label: "Reale DokTV-Installationen ansehen" }, { href: "/standorte", label: "Standorte und Verfügbarkeit anfragen" }],
  },
  "/hersteller-werbung": {
    route: "/hersteller-werbung",
    metaTitle: "Herstellerwerbung in Apotheken: Kampagnen planen | DokTV",
    metaDescription: "Herstellerwerbung in Apotheken mit DokTV planen: Standorte, Laufzeit, Motive und Freigaben abstimmen. Individuelle Kampagne im Gesundheitsumfeld anfragen.",
    eyebrow: "Kampagnen im Gesundheitsumfeld",
    title: "Herstellerwerbung in Apotheken: von der Idee zur abgestimmten Kampagne.",
    intro: "Sie möchten eine Produktaktion oder Markenbotschaft auf geeigneten digitalen Flächen zeigen? DokTV unterstützt die Planung von Standortauswahl, Motiven und Ausspielung. Region, Laufzeit, Freigaben und Konditionen werden vor dem Start konkret abgestimmt.",
    image: { src: "/referenzen/sky-apotheke-wedding-1.jpg", alt: "DokTV Werbedisplay in der Sky Apotheke Wedding als reales Installationsbeispiel" },
    overview: { title: "Die Bausteine Ihrer Kampagne", text: "Ein nachvollziehbarer Ablauf hilft, Erwartungen auf beiden Seiten klar zu halten.", items: [
      { title: "Ziel und Region", text: "Festlegen, welche Botschaft in welchem Gebiet und für welchen Zeitraum gezeigt werden soll." },
      { title: "Standorte und Motive", text: "Geeignete Flächen und freigegebene Inhalte gemeinsam abstimmen." },
      { title: "Start und Betreuung", text: "Ausspielung, Änderungen und das Ende der Kampagne vorab organisieren." },
    ] },
    sections: [
      { id: "kampagnenbriefing", title: "Ein gutes Briefing macht Ihre Anfrage konkret", paragraphs: ["Beschreiben Sie Produkt oder Marke, das Ziel der Aktion und den gewünschten Kampagnenzeitraum. Hilfreich sind außerdem die Zielregion, vorhandene Bild- und Videodateien sowie Vorgaben zur Darstellung. Bei zeitlich gebundenen Angeboten sollten Gültigkeit und geplantes Ende von Anfang an feststehen.", "Benennen Sie einen Ansprechpartner für die Freigabe. Liegen mehrere Motivvarianten vor, sollte klar sein, welche davon tatsächlich eingesetzt werden dürfen. Diese Vorbereitung reduziert Rückfragen und verhindert, dass unterschiedliche Dateistände miteinander verwechselt werden."] },
      { id: "standortplanung", title: "Standortauswahl: Eignung und Verfügbarkeit getrennt prüfen", paragraphs: ["Eine sichtbare Installation ist zunächst eine Referenz. Ob dort im gewünschten Zeitraum Herstellerwerbung möglich ist, wird gesondert geklärt. Bei der Auswahl zählen neben der Region auch das Umfeld des Displays und die Zustimmung des teilnehmenden Standorts.", "Planen Sie keine zusätzlichen Apotheken oder Praxen allein deshalb ein, weil eine Stadt oder ein Bezirk auf der Webseite erwähnt wird. Auf der Standortseite können Sie eine Auswahl anfragen; verfügbare Flächen und verbindliche Konditionen werden persönlich bestätigt."] },
      { id: "motive", title: "Motive für den Bildschirm aufbereiten", paragraphs: ["Ein Displaymotiv sollte aus der vorgesehenen Entfernung erfassbar sein. Prüfen Sie eine klare Hauptaussage, ausreichende Schriftgröße, gut erkennbare Produktbilder und eine übersichtliche Darstellung notwendiger Angaben. Ein dicht gestalteter Druckflyer lässt sich nicht immer unverändert auf einem Bildschirm einsetzen.", "Technisches Format, Bildmaterial und erlaubte Aussagen werden vorab abgestimmt. Der Hersteller muss die erforderlichen Rechte und Freigaben für gelieferte Inhalte klären. Eine gestalterische Anpassung ist keine medizinische oder rechtliche Freigabe."] },
      { id: "angebot-und-auswertung", title: "Angebot, Betreuung und Auswertung nachvollziehbar vereinbaren", paragraphs: ["Das Kampagnenangebot sollte zeigen, welche Standorte, welche Laufzeit und welche Leistungen vereinbart sind. Halten Sie fest, wie Motivwechsel angefragt werden und welche Informationen zur Ausspielung bereitgestellt werden können. So werden Erwartungen nicht erst nach dem Start geklärt.", "Die Hardwarepreise und der monatliche Content-Service für eine einzelne Apotheke sind kein pauschaler Hersteller-Mediatarif. Ebenso ist die Anzahl von Displays nicht gleichbedeutend mit nachgewiesenen Sichtkontakten. Besucherzahlen, Reichweite oder Verkaufseffekte sollten nur dann als Ergebnis genannt werden, wenn dafür eine geeignete Datengrundlage vorliegt."] },
    ],
    faqs: [
      { question: "Was kostet eine Herstellerkampagne bei DokTV?", answer: "Die Konditionen werden anhand der abgestimmten Standorte, Laufzeit und Leistungen angeboten. Die auf der Preisseite genannten Hardware- und Content-Service-Preise ersetzen kein individuelles Kampagnenangebot." },
      { question: "Lässt sich die Kampagne auf eine Region beschränken?", answer: "Eine gewünschte Region kann in der Anfrage genannt werden. Welche Auswahl tatsächlich möglich ist, hängt von geeigneten und verfügbaren Standorten ab. Eine Nennung von Orten auf der Webseite ist keine Verfügbarkeitsgarantie." },
      { question: "Sind alle Referenzstandorte sofort buchbar?", answer: "Nein. Referenzfotos dokumentieren Installationen. Aktuelle Werbeverfügbarkeit, Standortfreigabe und Konditionen werden vor einer Buchung gesondert bestätigt." },
    ],
    links: [{ href: "/standorte", label: "Passende Standorte anfragen" }, { href: "/hersteller", label: "Eignung Ihrer Gesundheitsmarke prüfen" }, { href: "/kontakt", label: "Kampagnenbriefing an DokTV senden" }],
  },
  "/digital-signage-berlin": {
    route: "/digital-signage-berlin",
    metaTitle: "Digital Signage Berlin für Apotheken & Praxen | DokTV",
    metaDescription: "Digital Signage in Berlin: Displays, individuelle Inhalte und Betreuung für Apotheken und Praxen. Reale Installationen ansehen und Standortberatung anfragen.",
    eyebrow: "DokTV in Berlin",
    title: "Digital Signage in Berlin für Apotheken und Arztpraxen.",
    intro: "DokTV verbindet digitale Displays mit individuell erstellten Inhalten und persönlicher Betreuung. Für Berliner Apotheken und Praxen planen wir die Lösung passend zum Einsatzort: vom Schaufenster über den Verkaufsbereich bis zur Patienteninformation im Wartezimmer.",
    image: { src: "/referenzen/sky-apotheke-kudamm-1.jpg", alt: "Digital-Signage-Installation von DokTV in der Sky Apotheke Kudamm in Berlin" },
    overview: { title: "Welcher Einsatzort soll informiert werden?", text: "Die gleiche Technik kann unterschiedliche Aufgaben erfüllen. Entscheidend sind Blickrichtung, Informationsbedarf und das passende Programm.", items: [
      { title: "Apotheken-Schaufenster", text: "Angebote und Services so präsentieren, dass die Hauptaussage auch im Vorbeigehen verständlich wird." },
      { title: "Verkaufsraum", text: "Beratungsthemen, eigene Leistungen und freigegebene Produktinformationen sichtbar machen." },
      { title: "Wartezimmer", text: "Praxisleistungen und organisatorische Hinweise ruhig und gut lesbar darstellen." },
    ] },
    sections: [
      { id: "standortcheck", title: "Digital Signage beginnt mit Ihrem konkreten Standort", paragraphs: ["Bei einer Berliner Apotheke mit straßenseitigem Schaufenster stellen sich andere Fragen als in einer Praxis in einem Obergeschoss. Woher kommen die Besucher? Wie weit ist die typische Blickposition entfernt? Wie wirkt Tageslicht auf die geplante Fläche? Diese Punkte helfen bei der Entscheidung über Position, Größe und Gestaltung.", "Ein Foto des Einsatzorts und Angaben zu Strom, Internet sowie vorhandener Befestigung erleichtern das Erstgespräch. Technische Eigenschaften wie Helligkeit und Betriebsdauer sollten für das konkrete Gerät geklärt werden, nicht pauschal für jedes Display."] },
      { id: "berliner-referenzen", title: "DokTV-Referenzen in Wedding, am Kurfürstendamm und in Kreuzberg", paragraphs: ["Auf unserer Referenzseite zeigen wir reale Installationen in der Sky Apotheke Wedding, der Sky Apotheke Kudamm und der Sky Apotheke Kreuzberg. Die Bilder machen unterschiedliche Einbausituationen nachvollziehbar und können als Ausgangspunkt für Ihre eigene Planung dienen.", "Diese Apothekenreferenzen sind weder ein Nachweis für bereits ausgestattete Arztpraxen noch eine Zusage aktueller Werbeverfügbarkeit. Benötigen Sie Flächen für eine Herstellerkampagne, stimmen wir die Auswahl getrennt von einer eigenen Displayinstallation ab."] },
      { id: "inhalte-und-betreuung", title: "Technik und Inhalte gemeinsam planen", paragraphs: ["DokTV erstellt und betreut die vereinbarten Werbe- oder Informationsinhalte. Ihre Apotheke oder Praxis entscheidet, was gezeigt wird. Für einen guten Start helfen ein Logo, die gewünschten Themen und eine verantwortliche Person für Freigaben. Zeitlich begrenzte Motive sollten einen klaren Gültigkeitszeitraum haben.", "Im Schaufenster sind kurze Botschaften gefragt; im Wartebereich stehen verständliche Praxisinformationen im Vordergrund. Ein abgestimmtes Programm ist deshalb mehr als eine unveränderte Präsentation auf mehreren Bildschirmen."] },
      { id: "preise-und-anfrage", title: "Kosten für Ihr Berliner Displayprojekt einordnen", paragraphs: [`Die veröffentlichten Hardwarepreise betragen ${displayCosts}. Der Content-Service kostet ${serviceCosts}; eine optionale Apotheken-Notdienstanzeige zusätzlich ${emergencyCosts}. Sämtliche genannten Preise sind netto.`, "Montage, Standortvoraussetzungen und Vertragsdetails werden im Angebot konkretisiert. Beschreiben Sie in Ihrer Anfrage, ob Sie eine eigene Informationsfläche ausstatten oder eine Herstellerkampagne auf vorhandenen Flächen planen. Dadurch lässt sich Ihr Anliegen direkt dem passenden Leistungsbereich zuordnen."] },
    ],
    faqs: [
      { question: "Welche Berliner Standorte sind als Referenz dokumentiert?", answer: "DokTV zeigt Installationen in der Sky Apotheke Wedding, der Sky Apotheke Kudamm und der Sky Apotheke Kreuzberg. Die Referenzseite enthält die zugehörigen Fotos. Für andere Orte werden keine nicht belegten Installationen behauptet." },
      { question: "Berät DokTV auch zu Projekten außerhalb Berlins?", answer: "Projekte außerhalb Berlins werden abhängig von Standort und Anforderung angefragt und individuell geplant. Eine bundesweite Ortsnennung bedeutet nicht, dass vor Ort bereits eine Installation oder sofort verfügbare Werbefläche besteht." },
      { question: "Soll ich zuerst eine Displaygröße auswählen?", answer: "Beschreiben Sie zuerst Einsatzort, Blickabstand und gewünschte Inhalte. Danach lässt sich die Auswahl zwischen 55 und 65 Zoll sinnvoll einordnen. Fotos und vorhandene technische Angaben erleichtern die Abstimmung." },
    ],
    links: [{ href: "/apotheke-werbung-berlin", label: "Apothekenwerbung in Berlin planen" }, { href: "/arztpraxis-werbung-berlin", label: "Praxiskommunikation in Berlin planen" }, { href: "/referenzen", label: "Berliner DokTV-Referenzen ansehen" }],
  },
  "/apotheke-werbung-berlin": {
    route: "/apotheke-werbung-berlin",
    metaTitle: "Apothekenwerbung Berlin: Schaufenster & Displays | DokTV",
    metaDescription: "Digitale Apothekenwerbung in Berlin: Schaufenster-Displays, Angebote und Services mit DokTV gestalten. Reale Beispiele und transparente Preise ansehen.",
    eyebrow: "Für Berliner Apotheken",
    title: "Apothekenwerbung in Berlin: sichtbar im Schaufenster und vor Ort.",
    intro: "Welche Botschaft sollen Menschen vor Ihrer Apotheke mitnehmen? DokTV gestaltet digitale Apothekenwerbung für Schaufenster und Verkaufsräume. Im Mittelpunkt stehen Ihre tatsächlichen Angebote und Services, eine gut erkennbare Darstellung und ein aktuell gehaltenes Programm.",
    image: { src: "/referenzen/sky-apotheke-kreuzberg-2.jpg", alt: "DokTV Display in der Sky Apotheke Kreuzberg in Berlin" },
    overview: { title: "Kommunikation passend zur jeweiligen Situation", text: "Ein Display kann verschiedene Inhalte zeigen. Die Auswahl sollte zum Standort und zum jeweiligen Informationsbedarf passen.", items: [
      { title: "Angebote erklären", text: "Produkt, Preis und Zeitraum klar zusammen darstellen und vor Veröffentlichung kontrollieren." },
      { title: "Services sichtbar machen", text: "Eigene Leistungen vorstellen und zeigen, wie Kunden dazu Beratung erhalten." },
      { title: "Aktuell bleiben", text: "Saisonale Motive vorbereiten, Änderungen abstimmen und abgelaufene Aktionen ersetzen." },
    ] },
    sections: [
      { id: "schaufensterplanung", title: "Das Schaufenster aus Sicht der Passanten betrachten", paragraphs: ["Prüfen Sie die geplante Displayposition von draußen: Ist die Fläche aus der üblichen Gehrichtung erkennbar? Verdecken Aufbauten oder vorhandene Dekoration die Sicht? Wie verändern Spiegelungen und Tageslicht die Lesbarkeit? Ein Foto von innen allein beantwortet diese Fragen häufig nicht.", "Die Gestaltung sollte zur tatsächlichen Betrachtungssituation passen. Eine klare Hauptaussage ist hilfreicher als mehrere gleich große Botschaften auf einem Motiv. Ob 55 oder 65 Zoll sinnvoll sind, ergibt sich aus Fläche, Abstand und technischer Eignung."] },
      { id: "lokale-inhalte", title: "Lokale Relevanz entsteht durch konkrete Informationen", paragraphs: ["Zeigen Sie, was Ihre Apotheke tatsächlich anbietet und wie Kunden den nächsten Schritt machen können. Ein zutreffender Servicehinweis mit Ansprechpartner ist konkreter als ein austauschbarer Werbespruch. Verwenden Sie Öffnungszeiten, Termine und Aktionszeiträume nur in ihrer aktuellen, freigegebenen Fassung.", "Für Apotheken in unterschiedlichen Berliner Lagen können Blickrichtung und Besuchersituation verschieden sein. Daraus folgt aber nicht automatisch ein bestimmter Umsatz- oder Reichweiteneffekt. Die Standortplanung sollte reale Gegebenheiten berücksichtigen, statt pauschale Erfolgszahlen zu versprechen."] },
      { id: "beispiele", title: "Berliner Apothekeninstallationen als Planungshilfe", paragraphs: ["Die Referenzfotos der Sky Apotheke Wedding, der Sky Apotheke Kudamm und der Sky Apotheke Kreuzberg zeigen reale DokTV-Einsatzorte. Vergleichen Sie auf den Bildern Einbauposition, Ausrichtung und Umfeld des Displays mit Ihrer eigenen Situation.", "Die Fotos dienen als Anschauung. Sie sind keine Aussage darüber, welche Herstellerkampagnen dort aktuell buchbar sind oder welche Geschäftsergebnisse ein Display erzielt. Für eine eigene Installation und für eine Werbeflächenanfrage gelten unterschiedliche Planungsschritte."] },
      { id: "betreuung-und-kosten", title: "Werbung erstellen lassen und die Kosten nachvollziehen", paragraphs: [`DokTV erstellt und betreut die vereinbarten Inhalte für ${serviceCosts}. Ihre Apotheke entscheidet über die Veröffentlichung. Für die Hardware gelten ${displayCosts}; optional kommt der Notdienstanzeiger für ${emergencyCosts} hinzu. Die Hardwarepreise verstehen sich netto.`, "Klären Sie im Angebot neben der Größe auch Standortvoraussetzungen, Montage und den Umfang der Betreuung. Ein guter Einstieg ist eine Liste mit den wichtigsten Angeboten und Services, die auf Ihrem Bildschirm erscheinen sollen, ergänzt um Fotos der vorgesehenen Fläche."] },
    ],
    faqs: [
      { question: "Was unterscheidet Apothekenwerbung von einer Herstellerkampagne?", answer: "Bei Ihrer eigenen Displaylösung planen Sie das Programm Ihrer Apotheke und beauftragen Hardware sowie Betreuung. Eine Herstellerkampagne betrifft Werbung auf abgestimmten, verfügbaren Fremdflächen und erhält gesonderte Konditionen." },
      { question: "Können Schaufenster und Verkaufsraum unterschiedliche Inhalte zeigen?", answer: "Die Inhalte sollten auf den jeweiligen Einsatzort abgestimmt werden. Welche technische Ausspielung und welches Programm vorgesehen sind, wird im konkreten Projekt geklärt. Planen Sie unterschiedliche Informationssituationen bereits im Briefing ein." },
      { question: "Wo sehe ich Beispiele aus Berlin?", answer: "Auf der Referenzseite finden Sie die dokumentierten DokTV-Installationen in Wedding, am Kurfürstendamm und in Kreuzberg. Die Beispiele lassen sich zur Vorbereitung einer Beratung nutzen." },
    ],
    links: [{ href: "/apotheken", label: "Apotheken-Displays und Einsatzbereiche" }, { href: "/werbung-apotheke-display", label: "Werbeinhalte und Redaktionsplanung" }, { href: "/blog/apotheken-marketing-berlin", label: "Ratgeber zu Apotheken-Marketing in Berlin" }],
  },
  "/arztpraxis-werbung-berlin": {
    route: "/arztpraxis-werbung-berlin",
    metaTitle: "Praxiskommunikation Berlin: Wartezimmer-Displays | DokTV",
    metaDescription: "Digitale Praxiskommunikation in Berlin: Leistungen, Abläufe und Patienteninformationen mit DokTV verständlich auf Wartezimmer-Displays darstellen.",
    eyebrow: "Für Berliner Arztpraxen",
    title: "Digitale Praxiskommunikation in Berlin – Informationen, die zur Praxis passen.",
    intro: "Wartezimmer-Displays können Ihre Praxisleistungen, Abläufe und fachlich freigegebenen Themen übersichtlich darstellen. DokTV unterstützt Berliner Praxen bei der Planung von Bildschirm, Gestaltung und Betreuung. Ihr Praxisteam legt die Aussagen fest und entscheidet über die Veröffentlichung.",
    overview: { title: "Wobei ein Praxisdisplay unterstützen kann", text: "Planen Sie Inhalte nach dem tatsächlichen Informationsbedarf – nicht nach einer möglichst großen Anzahl an Folien.", items: [
      { title: "Orientierung", text: "Ansprechpartner, Sprechzeiten und organisatorische Abläufe verständlich erklären." },
      { title: "Leistungen", text: "Tatsächlich angebotene Praxisleistungen sachlich vorstellen und zum persönlichen Gespräch überleiten." },
      { title: "Terminvorbereitung", text: "Allgemeine Hinweise zeigen, die Patienten bei der Vorbereitung ihres nächsten Besuchs helfen." },
    ] },
    sections: [
      { id: "praxisalltag", title: "Mit den Fragen Ihrer Patienten beginnen", paragraphs: ["Sammeln Sie wiederkehrende organisatorische Fragen aus dem Praxisalltag. Daraus entsteht eine erste Themenliste: Terminvorbereitung, Kontaktwege, Rezeptanfragen oder eine Vorstellung des Teams. Entscheidend ist, dass jeder Hinweis zu den tatsächlichen Abläufen Ihrer Praxis passt.", "Bei medizinischen Inhalten bleibt die fachliche Prüfung beim Praxisteam. Allgemeine Informationen auf dem Display ergänzen die persönliche Beratung, ersetzen sie aber nicht. Aussagen sollten verständlich sein und keine pauschalen Behandlungserfolge versprechen."] },
      { id: "raumplanung", title: "Den Wartebereich vor der Gerätewahl prüfen", paragraphs: ["Ein Berliner Praxisstandort kann einen kompakten Wartebereich, mehrere Sitzgruppen oder eine längere Sichtachse haben. Prüfen Sie die geplante Position aus Patientensicht. Gegenlicht, Blickwinkel und Betrachtungsabstand beeinflussen, wie groß Schrift und Motive angelegt werden sollten.", "Halten Sie außerdem fest, wo Strom und Internet verfügbar sind und ob eine Befestigung am vorgesehenen Untergrund möglich ist. Erst danach sollte die Auswahl zwischen den angebotenen Displaygrößen und die technische Umsetzung konkretisiert werden."] },
      { id: "abstimmung", title: "Inhalte und Zuständigkeiten verbindlich abstimmen", paragraphs: ["Für die Zusammenarbeit helfen Logo, Gestaltungsvorgaben und korrekte Textbausteine. Eine benannte Person in der Praxis sollte Änderungen sammeln und Freigaben koordinieren. Gültigkeitszeiträume sind besonders bei geänderten Sprechzeiten oder zeitlich begrenzten Hinweisen wichtig.", "Die Gestaltung durch DokTV ist keine fachliche oder rechtliche Prüfung von Praxiswerbung. Verantwortliche sollten Aussagen, Bildrechte und gegebenenfalls erforderliche Angaben vor der Veröffentlichung klären. Persönliche Patientendaten gehören nicht in ein allgemein sichtbares Programm."] },
      { id: "angebot", title: "Kosten und Referenzen richtig einordnen", paragraphs: [`Die Hardwarepreise sind ${displayCosts}. Der DokTV Content-Service kostet ${serviceCosts}. Sämtliche genannten Preise sind netto. Umfang der Betreuung, Montage und weitere Projektbedingungen werden im individuellen Angebot beschrieben.`, "Unsere öffentlich gezeigten Berliner Installationen sind Apothekenreferenzen. Wir stellen sie nicht als bereits umgesetzte Arztpraxisprojekte dar. Beschreiben Sie für Ihre Anfrage die Fachrichtung, den geplanten Einsatzort und die gewünschten Inhalte, damit wir die Lösung auf Ihre Praxis abstimmen können."] },
    ],
    faqs: [
      { question: "Ist ein Display in der Praxis für Werbung oder Information gedacht?", answer: "Das hängt vom freigegebenen Programm ab. Organisatorische Hinweise, eine sachliche Vorstellung eigener Leistungen und allgemeine Patienteninformationen erfüllen unterschiedliche Aufgaben. Die Praxis sollte Zweck und Inhalt jedes Motivs bewusst festlegen." },
      { question: "Gibt es veröffentlichte Berliner Arztpraxisreferenzen?", answer: "Die derzeit auf der DokTV-Referenzseite dokumentierten Installationen zeigen Apotheken. Daraus leiten wir keine nicht belegten Praxisreferenzen ab. Ihr konkreter Praxisstandort wird separat geplant." },
      { question: "Welche Angaben helfen für die erste Beratung?", answer: "Nennen Sie Praxisart, Adresse, geplanten Bildschirmplatz und die wichtigsten Themen. Fotos des Wartebereichs sowie Angaben zu Strom und Internet helfen, die technische und inhaltliche Planung einzuordnen." },
    ],
    links: [{ href: "/arztpraxen", label: "Digitale Patienteninformation planen" }, { href: "/wartezimmer-tv-praxen", label: "Wartezimmer-TV: Technik und Betrieb" }, { href: "/kontakt", label: "Beratung für Ihre Berliner Praxis anfragen" }],
  },
  "/ueber-uns": {
    route: "/ueber-uns",
    metaTitle: "Über DokTV: Displaytechnik, Inhalte & Betreuung",
    metaDescription: "DokTV aus Berlin verbindet digitale Displays, individuell gestaltete Inhalte und persönliche Betreuung für Apotheken und Praxen. Unsere Arbeitsweise kennenlernen.",
    eyebrow: "Über DokTV",
    title: "DokTV: Displays, Werbeinhalte und persönliche Betreuung.",
    intro: "DokTV ist in Berlin zuhause und auf digitale Kommunikation im Gesundheitsumfeld ausgerichtet. Wir verbinden Displaytechnik, individuell gestaltete Inhalte und laufende Betreuung. Die Apotheke oder Praxis entscheidet, was gezeigt wird – wir begleiten die Umsetzung.",
    image: { src: "/referenzen/sky-apotheke-kudamm-1.jpg", alt: "DokTV Installation in der Sky Apotheke Kudamm" },
    overview: { title: "Unsere Arbeitsweise", text: "Eine sinnvolle Lösung beginnt mit Ihrem Alltag und endet nicht mit dem Einschalten eines Bildschirms.", items: [
      { title: "Verstehen", text: "Einsatzort, Zielgruppe und Informationsbedarf gemeinsam betrachten." },
      { title: "Umsetzen", text: "Geeignete Technik mit einem übersichtlichen, freigegebenen Programm verbinden." },
      { title: "Betreuen", text: "Inhaltsänderungen und laufende Ausspielung im vereinbarten Umfang begleiten." },
    ] },
    sections: [
      { id: "warum-doktv", title: "Warum ein Bildschirm allein noch keine gute Kommunikation ist", paragraphs: ["Viele Apotheken und Praxen haben wichtige Informationen und besondere Leistungen. Die Herausforderung besteht darin, diese im passenden Moment verständlich zu zeigen. Dafür müssen Einsatzort, Blickwinkel und Inhalt zusammen betrachtet werden.", "DokTV verfolgt deshalb keinen reinen Hardwareansatz. Ein Display im Schaufenster braucht eine andere Botschaft als ein Bildschirm im Wartezimmer. Wir planen mit Ihnen, welche Aufgaben die Fläche übernehmen soll und welche Informationen tatsächlich benötigt werden."] },
      { id: "zusammenarbeit", title: "Ihre Inhalte bleiben Ihre Entscheidung", paragraphs: ["Ihre Apotheke oder Praxis bestimmt Themen, Angebote und Aussagen. DokTV übernimmt die Gestaltung und Betreuung der vereinbarten Inhalte. Ein klar benannter Ansprechpartner auf beiden Seiten erleichtert Abstimmungen und verhindert, dass veraltete Angaben im Programm bleiben.", "Fachliche und rechtliche Fragen sollten vor der Veröffentlichung von den dafür verantwortlichen Personen geklärt werden. Wir versprechen keine automatische Umsatzsteigerung, keine pauschale Reichweite und keine Wirkung, die nicht nachvollziehbar belegt ist."] },
      { id: "reale-projekte", title: "Reale Berliner Installationen als Einblick in unsere Arbeit", paragraphs: ["Unsere Referenzseite zeigt DokTV-Installationen in der Sky Apotheke Wedding, der Sky Apotheke Kudamm und der Sky Apotheke Kreuzberg. Die Fotos geben Einblick in konkrete Einbausituationen und die Einbindung digitaler Displays in das Apothekenumfeld.", "Weitere Projekte werden abhängig von Standort und Anforderung geplant, auch über Berlin hinaus. Wir unterscheiden dokumentierte Referenzen von angefragten Projekten und aktueller Werbeverfügbarkeit. Eine Stadt- oder Branchenangabe ersetzt keinen Nachweis einer bereits realisierten Installation."], image: { src: "/referenzen/sky-apotheke-kreuzberg-2.jpg", alt: "DokTV Display in der Sky Apotheke Kreuzberg als dokumentierte Referenz" } },
      { id: "kennenlernen", title: "So bereiten Sie ein Gespräch mit DokTV vor", paragraphs: ["Für den Einstieg genügen eine Beschreibung Ihres Standorts und der geplanten Nutzung. Fotos des Schaufensters oder Wartebereichs, gewünschte Inhalte und Angaben zu vorhandener Technik machen die Beratung konkreter. Sie müssen dafür keine fertige Präsentation erstellen.", "Im nächsten Schritt werden Displaygröße, Inhaltserstellung, Betreuung und Projektbedingungen besprochen. Die veröffentlichten Preise helfen bei der Orientierung; das individuelle Angebot klärt die konkrete Umsetzung. Kontaktdaten und Anbieterangaben finden Sie auf unserer Kontaktseite und im Impressum."] },
    ],
    faqs: [
      { question: "Worauf ist DokTV spezialisiert?", answer: "DokTV verbindet digitale Displays mit Gestaltung und Betreuung von Inhalten für Apotheken und Praxen. Daneben können Herstellerkampagnen für geeignete, verfügbare Standorte angefragt werden." },
      { question: "Wo lässt sich die Arbeit von DokTV ansehen?", answer: "Auf der Referenzseite finden Sie Fotos dokumentierter Berliner Apothekeninstallationen. Die Bilder zeigen reale Einsatzorte; sie werden nicht als Beleg für nicht dokumentierte Projekte oder Geschäftsergebnisse verwendet." },
      { question: "Wo finde ich Preise und einen Ansprechpartner?", answer: "Die Preisseite trennt Hardware, monatlichen Content-Service und optionale Notdienstanzeige. Über die Kontaktseite können Sie Ihr Vorhaben beschreiben. Anbieterangaben stehen im Impressum." },
    ],
    links: [{ href: "/referenzen", label: "Reale Projekte ansehen" }, { href: "/preise", label: "Leistungen und Preise einordnen" }, { href: "/kontakt", label: "DokTV kennenlernen" }, { href: "/impressum", label: "Anbieterangaben im Impressum" }],
  },
} satisfies Record<string, EditorialPageData>;

# C#-Website

Schulprojekt im Fach WMC (2. Jahrgang, HTL Donaustadt, Schuljahr 2025/26).

**Live ansehen:** https://uzair1160.github.io/csharp-website/seiten/index.html

## Was ist das?
Wir sollten eine HTML-Webseite zu einem technischen Thema erstellen.
Weil wir in der Schule mit C# programmieren, habe ich mich für C# als Thema entschieden.

## Wie ist die Seite entstanden?
- **1. Halbjahr:** Die Seite durfte nur mit HTML gebaut werden.
- **2. Halbjahr:** Relaunch mit CSS und JavaScript, inklusive einem Barrierefrei-Modus
  (Button in der Navigation, schaltet auf hohen Kontrast und größere Schrift um).

## Verwendung von KI
Für das `script.js` sollten wir selbst recherchieren und KI verwenden,
weil wir JavaScript damals noch nicht gelernt hatten.

## Überarbeitung (November 2026)
Inzwischen haben wir JavaScript im Unterricht gelernt. Deshalb habe ich das Skript überarbeitet:
- `const` und `let` statt `var`
- den Button mit `addEventListener` verbinden statt mit `onclick` im HTML (Skript dafür mit `defer` geladen)
- `for...of` statt einer Schleife mit Index
- Template Literals statt Strings mit `+`
- Fehler im `catch` mit `console.error` ausgeben statt sie zu ignorieren
- Arrow-Funktion beim `pageshow`-Listener
- das `<html>`-Element einmal in einer Variable gespeichert statt viermal `document.documentElement`
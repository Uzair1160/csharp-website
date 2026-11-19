// Barrierefrei-Modus ueber die Klasse "barrierefrei" am <html>-Element.
// Zustand wird ueber den URL-Parameter ?bf=1 von Seite zu Seite weitergegeben.

// Liest aus der URL, ob der Modus an sein soll.
function barrierefreiIstAn() {
    return new URLSearchParams(window.location.search).get("bf") === "1";
}

// Sofort (noch im <head>) die Klasse am <html>-Element setzen, damit es kein
// Aufblitzen gibt. <html> existiert hier schon.
document.documentElement.classList.toggle("barrierefrei", barrierefreiIstAn());

// Haengt den aktuellen Zustand an alle Navigations-Links an.
function navLinksAktualisieren(an) {
    const links = document.querySelectorAll("#navigation a");
    for (let i = 0; i < links.length; i++) {
        const basis = links[i].getAttribute("href").split("?")[0];
        links[i].setAttribute("href", basis + "?bf=" + (an ? "1" : "0"));
    }
}

// Wird bei JEDER Anzeige der Seite ausgefuehrt - auch wenn Firefox die Seite
// beim Zurueck-/Vor-Blaettern aus dem Cache holt. So passt der Zustand immer
// zur URL und die Links werden korrekt gesetzt.
window.addEventListener("pageshow", function () {
    const an = barrierefreiIstAn();
    document.documentElement.classList.toggle("barrierefrei", an);
    navLinksAktualisieren(an);
});

// Wird vom Button aufgerufen und schaltet den Modus um.
function toggleBarrierefreiheit() {
    const neuerZustand = !document.documentElement.classList.contains("barrierefrei");

    document.documentElement.classList.toggle("barrierefrei", neuerZustand);
    navLinksAktualisieren(neuerZustand);

    // URL der aktuellen Seite aktualisieren, damit der Zustand auch beim
    // Neuladen erhalten bleibt. Faellt still aus, falls vom Browser blockiert.
    try {
        const url = window.location.href.split("?")[0] + "?bf=" + (neuerZustand ? "1" : "0");
        window.history.replaceState(null, "", url);
    } catch (e) {
        // bewusst ignoriert
    }
}
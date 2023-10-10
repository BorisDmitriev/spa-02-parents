# Parents list

[![Statusübersicht-Badge](../../blob/badges/.github/badges/autograding/badge.svg)](#Ergebnisse)

Lass uns alle Elemente, die Eltern des Elements `cite` sind, auf der Konsole ausgeben.

Wir wollen sie als String in folgendem Format ausgeben:

```
html > body > main > section > blockquote > footer > cite
```

_Vergewissere dich, dass der Ausdruck als String in Kleinbuchstaben erfolgt und vergiss nicht das Trennzeichen "`>`" zwischen den Zeilen_

Wir wollen, dass die Zeichenkette beim äußersten Elternteil des Elements cite beginnt, mit dem wir begonnen haben.

<!-- Extra: Kannst du auch die Klassen, die jeder Parent hat, in denselben String einfügen, zum Beispiel: `section.page > blockquote`. -->

[//]: # 'autograding info start'

## Ergebnisse

### ## Elternliste prüfen

|                               Status                                | Prüfen                                         |
| :-----------------------------------------------------------------: | :--------------------------------------------- |
| ![Status](../../blob/badges/.github/badges/autograding/status0.svg) | Sollte Elternteil des Elements `cite` drucken. |

[🔬 Ergebnisdetails](https://github.com/DigitalCareerInstitute/Browser-DOM-traversing-parents-list/actions)

[📢 Feedback geben oder Problem melden](https://docs.google.com/forms/d/e/1FAIpQLSfS8wPh6bCMTLF2wmjiE5_UhPiOEnubEwwPLN_M8zTCjx5qbg/viewform?usp=pp_url&entry.652569746=Browser-DOM-traversing-parents-list&entry.2115011968=https%3A%2F%2Fgithub.com%2FDigitalCareerInstitute%2FBrowser-DOM-traversing-parents-list)

### Debugging deines Codes

> [Lesen der Testausgaben](https://github.com/DCI-EdTech/autograding-setup/wiki/Reading-test-outputs)

Es gibt zwei Möglichkeiten, um herauszufinden, warum Aufgaben nicht erledigt werden können:

#### 1. Tests lokal ausführen

- Führe `npm install` aus
- Führe `npm test` im Terminal aus. Du wirst sehen, wo deine Lösung vom erwarteten Ergebnis abweicht.

#### 2. Überprüfen der Testausgabe auf GitHub

- Gehe auf die [Registerkarte Aktionen deines Übungsrepos](https://github.com/DigitalCareerInstitute/Browser-DOM-traversing-parents-list/actions)
- Dort siehst du eine Liste mit den Testläufen. Klicke auf den obersten.
- Klicke auf "Autograding".
- Erweitere den Punkt 'Run DCI-EdTech/autograding-action@main'
- Hier siehst du alle Ausgaben des Testlaufs

[//]: # 'autograding info end'

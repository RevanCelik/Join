# Join

Join ist eine webbasierte Kanban-Board-Anwendung zur Organisation von Aufgaben, Kontakten und Team-Workflows. Die App bietet Anmeldung, Gast-Login, Aufgabenverwaltung, Kontaktverwaltung, ein Drag-and-Drop-Board und eine Summary-Seite mit wichtigen Projektkennzahlen.

Das Projekt wurde im Rahmen der Developer Akademie umgesetzt und nutzt Firebase fuer Authentifizierung und Datenspeicherung.

## Live-Demo

Die Anwendung kann hier direkt im Browser geoeffnet werden:

[Live-Demo](https://join.revan-celik.de)

## Features

- Registrierung und Login mit Firebase Authentication
- Gast-Login
- Geschuetzter Member-Bereich
- Kanban-Board mit den Spalten:
  - To do
  - In Progress
  - Await Feedback
  - Done
- Aufgaben erstellen, bearbeiten, loeschen und verschieben
- Drag-and-Drop fuer Statuswechsel auf dem Board
- Aufgaben mit Titel, Beschreibung, Faelligkeitsdatum, Prioritaet, Kategorie, zugewiesenen Kontakten und Subtasks
- Kontaktverwaltung mit Erstellen, Bearbeiten und Loeschen
- Kontakte koennen Aufgaben zugewiesen werden
- Summary-Seite mit Aufgabenstatistiken
- Responsive Layout fuer Desktop und mobile Ansichten

## Tech Stack

- HTML
- CSS
- JavaScript
- Firebase Authentication
- Firebase Realtime Database

## Projektstruktur

```text
Join/
|-- index.html
|-- login/
|   |-- auth-check.js
|   |-- auth-guard.js
|   `-- login.js
|-- member/
|   |-- add-task.html
|   |-- board.html
|   |-- contacts.html
|   |-- summary.html
|   |-- css/
|   `-- js/
|-- public/
|   |-- signup.html
|   |-- css/
|   `-- js/
|-- scripts/
|   `-- firebase/
|       |-- firebase.js
|       |-- get-firebase.js
|       |-- push-contact.js
|       `-- push-task.js
|-- styles/
|-- assets/
`-- README.md
```

## Firebase Setup

Fuer dieses Projekt wird ein Firebase-Projekt mit folgenden Diensten benoetigt:

1. Firebase Authentication
2. E-Mail/Passwort als Anmeldemethode
3. Firebase Realtime Database

Die Firebase-Konfiguration liegt in:

```text
scripts/firebase/firebase.js
```

Wenn du dieses Repository forkst oder klonst, solltest du ein eigenes Firebase-Projekt erstellen und die Firebase-Konfiguration durch deine eigenen Projektwerte ersetzen.

Die Realtime Database verwendet hauptsaechlich folgende Bereiche:

```text
contacts
tasks
users
```

Damit angemeldete Nutzer Aufgaben und Kontakte laden und speichern koennen, muessen die Datenbankregeln Lese- und Schreibzugriff fuer authentifizierte Nutzer erlauben.

## Installation und Start

1. Repository klonen:

```bash
git clone <repository-url>
```

2. Projektordner oeffnen.

3. Firebase-Projekt in der Firebase Console erstellen.

4. Firebase Authentication aktivieren.

5. Anmeldemethode E-Mail/Passwort aktivieren.

6. Firebase Realtime Database erstellen.

7. Firebase-Konfiguration in folgender Datei eintragen:

```text
scripts/firebase/firebase.js
```

8. Projekt mit einem lokalen Webserver starten, zum Beispiel mit der VS Code Extension "Live Server".

9. Anwendung im Browser oeffnen:

```text
http://127.0.0.1:5500/
```

## Nutzung

Nach dem Start koennen Nutzer ein Konto erstellen, sich mit einem bestehenden Konto anmelden oder den Gast-Login verwenden.

Im Member-Bereich koennen Nutzer:

- die Summary-Seite ansehen
- Kontakte erstellen und verwalten
- neue Aufgaben erstellen
- Kontakte Aufgaben zuweisen
- Aufgaben auf dem Board verschieben
- bestehende Aufgaben bearbeiten oder loeschen

## Hinweise

- Die Anwendung ist ein statisches Frontend-Projekt und benoetigt keinen eigenen Backend-Server.
- Firebase uebernimmt Authentifizierung und Datenspeicherung.
- Die Firebase-Konfiguration sollte bei jedem Fork durch eigene Firebase-Daten ersetzt werden.
- Die Datenbankregeln sollten vor einem produktiven Einsatz geprueft und abgesichert werden.

## Lizenz

Es wurde noch keine Lizenz angegeben.

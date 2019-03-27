# APP

Dies ist Boilerplate.  
Es ist meine Version einer React-App

## vorbereitung

Kopieren. Anpassen. Los.

## Development

### dev-build

```cmd
npm run build
```

Die [index.html](./index.html) verwendet die `app-mock.js` und kann für die lokale Entwicklung verwendet werden.

### dev-build mit Lokalem Server

```cmd
npm start
```

Dieses Kommando erstellt das Paket im `--watch`-Modus, startet einen lokalen Entwicklungsserver und öffnet einen Browser.
Auch dieser Befehl verwendet die `*mock*.js` und die `index.html` zur lokalen Entwicklung.

TODO: Hot-Reloading fehlt noch!

## Release-Build

```cmd
npm run dist
```

im Verzeichis `dist/` werden `app-prod.js[.map]` und `app-mock.js[.map]` erstellt.  
Die Dateien `*mock*.js` dienen nur der lokalen entwicklung und können ignoriert werden.
Die Dateien `app-prod.js` und `app-prod.js.map` können dann deployed werden.

# CZ Customize — HTML Photo Catalogue (no login)

This is a standalone HTML app. No ChatGPT, GitHub or other account is needed to use it.

Fields: product photo, product name, RM price, size, customer name and category. Add your own categories and search for a returning customer to find the saved photo and price.

## On a phone

Open the published website link. Tap Install app for instructions:
- iPhone: open in Safari → Share → Add to Home Screen → Add.
- Android: Chrome → menu → Install app / Add to Home screen.

Use that same address/home-screen icon each time. A downloaded HTML viewed inside iPhone Files is not a substitute for a hosted web app.

## On a laptop

Open CZ-Customize.html directly in a modern browser, or open the website link. On Chrome/Edge, use the install option if offered, or bookmark it.

## Where records go

The catalogue and original photos are saved in this browser on this device. They are not public, are not committed to GitHub, and are not automatically synced to another device. The HTML source contains only the supplied shop logo, never saved customer records.

Download full backups from Backup regularly. JSON includes photos, products and categories. On another device choose Backup → Restore. Restoring replaces that device's catalogue; it does not merge simultaneous edits.

Keep the website address and browser consistent. Changing domains, opening a downloaded file instead of the website, clearing browser data, private browsing or losing the device may separate/remove records. A phone Home Screen installation may use a different storage container from the browser on some systems; install first, then add your records, or restore your backup in the installed app.

Photos: JPG, PNG, GIF or WebP up to 8 MB each. Backup import maximum 200 MB. Prices use integer sen. Backup restore validates the complete file before replacing existing records in one transaction. Stale edits from other tabs are rejected.

## Hosting / GitHub Pages

Publish the contents of this folder on any static HTTPS host. There is no build step and no backend. index.html includes all CSS, application JavaScript and the original shop image. Keep sw.js, manifest.webmanifest and icon files beside it for phone installation/offline caching. Paths are relative so this folder works under /cz-catalogue/ on GitHub Pages.

The service worker controls only this folder and never the parent LTL application. The CZ database is separate from LTL.

## Earlier cloud version

This HTML does not read or expose the earlier cloud catalogue. Cloud records remain private in the previous backend. To bring a cloud catalogue into the HTML app, restore a full JSON backup exported from that version with original photos. The earlier device-only CZ catalogue is reopened automatically when the origin and browser storage container match.

## Verification

Syntax, embedded asset references, price/backup logic and the production build are checked. Installation and browser interactions still need checking on the client's actual devices.

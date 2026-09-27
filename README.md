# Order-Up

Order-Up is a mobile-first restaurant ordering PWA with a customer storefront and an owner control room.

## Owner dashboard

The owner/admin area now includes:

- One-time owner setup on the first device: owner profile, password, payment number, payment recipient, payment network and one payment-verification document.
- Persistent owner session on that device until the owner signs out.
- Dashboard KPIs for completed revenue, average order value and open queue.
- Full order search/filtering and status control.
- Product create/edit, pricing, availability and catalog metadata.
- Financial/payment breakdowns and CSV payment reports.
- Downloadable order, menu and business backups.
- Locally stored payment/business verification documents with download/delete controls.
- Business contact lines: email, phone, WhatsApp, payment number, payment recipient, payment network, address, hours and delivery fee.
- Location/hub management.
- Neumorphic responsive customer UI, cart, checkout, order tracking and PWA support.

## Important prototype security note

This GitHub build uses browser-local storage and IndexedDB for the owner account, orders, settings and documents. The password is stored as a SHA-256 hash, not plaintext, but this is **not production-grade authentication or cloud financial storage**. A public production deployment should move authentication, authorization, business data and documents to a server/database/object-storage layer, use HTTPS, enforce server-side admin roles, and use a verified payment gateway. Do not upload card PINs, bank passwords or other credentials into the document vault.

## Client/reference baseline

The public Wrap n' Roll reference was used for the menu/location/ordering concept. Public-facing prices and owner-specific details remain editable instead of being invented.

## Run locally

    npm install
    npm run dev
    npm run build
    npm run preview

Repo: **jark-zenith/Order-Up**

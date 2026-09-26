# Order-Up

**Order-Up** is a mobile-first restaurant ordering PWA prototype built for a Wrap n' Roll ordering challenge.

## MVP foundation

- Neumorphic responsive customer UI
- Menu categories and search
- Cart with quantity controls
- Pickup or delivery checkout
- MoMo payment-reference capture
- Customer order history and status tracking
- Admin controls for product pricing and availability
- Order status progression: Pending → Confirmed → Preparing → Ready → Completed
- WhatsApp handoff for customer support/order confirmation
- PWA manifest and auto-update service worker foundation
- Local storage persistence for rapid prototype testing

## Research baseline

The public Wrap n' Roll reference currently presents wraps, bowls, tacos, bakery, breakfast and kids items. The current ordering flow supports pickup/delivery and uses WhatsApp for confirmation, delivery details and payment. Locations are shown as Asafo, KNUST Campus and mobile vans in Kumasi, with 8am–11pm service messaging on the main/order pages.

Prices are **not hard-coded from assumptions**. The admin panel intentionally keeps pricing editable until the client confirms the real menu prices.

## Demo access

Customer demo:
- customer@order-up.demo
- demo123

Admin demo:
- admin@order-up.demo
- admin123

These are prototype-only credentials and are not production authentication.

## Local development

    npm install
    npm run dev

    npm run build
    npm run preview

## Production work remaining

Replace placeholder food media with the client's approved images, confirm prices, connect real authentication and a server-side database, enforce secure admin authorization, verify MoMo payments through an appropriate payment provider, persist orders server-side, and add deployment environment variables.

## Project identity

App name: **Order-Up**  
Repo: **jark-zenith/Order-Up**

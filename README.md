# Sport Mini Gear — Website

A dark, sports-focused website with a product catalog, cart, and QR-code checkout — built to run entirely as static files (no server needed), so you can host it for free.

## What's included
- `index.html` — homepage
- `products.html` — full catalog with search + category filter
- `product.html` — product detail page (works for every product automatically)
- `cart.html` — shopping cart
- `checkout.html` — delivery details form + payment QR code + "Send order on WhatsApp" button
- `contact.html` — contact info
- `css/style.css` — all styling
- `js/products-data.js` — **your products and site settings live here**
- `js/main.js` — site logic (cart, search, filters, order messages)
- `images/products/` — put your product photos here
- `images/payment-qr.png` — **replace this with your real bank/eSewa/Fonepay QR code image** (keep the same filename, or update the path in `js/products-data.js`)

## 1. Add your real details
Open `js/products-data.js` in any text editor and update:
- `SITE_CONFIG.whatsappNumber` — your WhatsApp number, country code first, no `+` or spaces (e.g. `9779812345678`)
- `SITE_CONFIG.email`
- `SITE_CONFIG.bankDetails` — your bank/account info shown next to the QR code
- The `PRODUCTS` array — send me your product list (name, category, price, description, photos) any time and I'll fill this in properly, or you can copy the pattern of an existing product and edit it yourself.

## 2. Add product photos
Save images into `images/products/` using the filenames already referenced in `products-data.js` (e.g. `fb-001.jpg`). If a photo is missing, the site automatically shows a neat placeholder instead of a broken image — so the site works fine even before every photo is ready.

## 3. How checkout works
There's no payment gateway wired in (that normally requires a business bank/merchant account and a paid integration). Instead, checkout works the simple way many small Nepali shops use:
1. Customer fills in their name, phone, and address, and reviews their order.
2. They click **"Send order on WhatsApp"** — this opens WhatsApp with the order pre-typed, ready to send to your number.
3. They scan your QR code (shown right next to the form) to pay, then send you a payment screenshot.
4. You confirm the order once payment is received.

You can swap in a real payment gateway (eSewa, Khalti, Fonepay merchant API) later if you register as a merchant with them — just let me know if you'd like help with that when you're ready.

## 4. Hosting it for free
Any of these work well with this site (it's plain HTML/CSS/JS, no build step):

**Netlify (easiest)**
1. Go to netlify.com → sign up free.
2. Drag the whole website folder onto the "Deploy" area.
3. Once live, go to Domain settings → Add custom domain → enter `sportminigear.com`.
4. Netlify will show you DNS records to add at your domain registrar (where you bought sportminigear.com) — usually an A record or CNAME.

**GitHub Pages**
1. Create a free GitHub account and a new repository.
2. Upload all these files to the repository.
3. In repo Settings → Pages, enable Pages for the main branch.
4. Add a `CNAME` file containing `sportminigear.com`, and point your domain's DNS to GitHub Pages' addresses (GitHub's docs list the exact IPs).

Either way, connecting your existing domain just means updating DNS records at wherever you registered sportminigear.com — I'm happy to walk you through those exact steps once you pick a host.

## Notes
- The cart is stored in the visitor's browser (localStorage), so it's per-device, not shared across a database — normal for a site without a backend.
- To add more categories, add the name to the `CATEGORIES` array in `products-data.js` and use it in your product entries.

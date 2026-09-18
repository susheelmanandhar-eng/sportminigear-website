/* =========================================================================
   SPORT MINI GEAR — main.js
   Shared logic used across all pages: rendering products, cart (localStorage),
   filtering/search, and checkout order building.
   ========================================================================= */

const CART_KEY = "smg_cart";

/* ---------------------------- Image helpers ---------------------------- */

function getProductImages(product) {
  if (!product) return [];
  if (Array.isArray(product.images) && product.images.length > 0) return product.images;
  if (product.image) return [product.image];
  return [];
}

/* ---------------------------- Color helpers ---------------------------- */

// Returns an array of color options for a product, e.g.:
//   colors: [
//     { name: "Red", image: "images/products/horn-red.jpg" },
//     { name: "Blue", image: "images/products/horn-blue.jpg" },
//     { name: "Black" }  // image is optional per color
//   ]
function getProductColors(product) {
  if (!product) return [];
  return Array.isArray(product.colors) ? product.colors : [];
}

const COLOR_SWATCH_HEX = {
  red: "#E4675A", blue: "#3E5C76", black: "#111111", white: "#F5F5F0",
  green: "#7FBF8F", yellow: "#F4C95D", orange: "#E8935A", grey: "#9AA5B8",
  gray: "#9AA5B8", pink: "#E58FB0", purple: "#8B6FB3", brown: "#8B5E3C",
  navy: "#1D2740", silver: "#C7CCD6",
};
function colorSwatchHex(name) {
  return COLOR_SWATCH_HEX[String(name).trim().toLowerCase()] || "#5C6B84";
}

/* ---------------------------- Stock helpers ---------------------------- */

function getStock(product, colorName = null) {
  if (!product) return 0;
  const colors = getProductColors(product);
  if (colorName && colors.length > 0) {
    const match = colors.find((c) => c.name === colorName);
    if (match && typeof match.stock === "number") return match.stock;
  }
  if (typeof product.stock === "number") return product.stock;
  return product.inStock ? Infinity : 0;
}
/* ---------------------------- Cart helpers ---------------------------- */
// Cart lines are matched by BOTH id and color, so different colors of the
// same product sit as separate lines in the cart (e.g. Red horn x2, Blue horn x1).

function getCart() {
  try {
    return JSON.parse(localStorage.getItem(CART_KEY)) || [];
  } catch (e) {
    return [];
  }
}

function saveCart(cart) {
  localStorage.setItem(CART_KEY, JSON.stringify(cart));
  updateCartBadge();
}

function sameLine(item, id, color) {
  return item.id === id && (item.color || null) === (color || null);
}

// Adds qty of a product (optionally a specific color) to the cart, but never
// lets the total for that line exceed available stock.
function addToCart(id, qty = 1, color = null) {
  const product = PRODUCTS.find((p) => p.id === id);
   const max = getStock(product, color);
  const cart = getCart();
  const existing = cart.find((item) => sameLine(item, id, color));
  const currentQty = existing ? existing.qty : 0;
  const newQty = Math.min(currentQty + qty, max);

  if (newQty <= 0) return 0;

  if (existing) {
    existing.qty = newQty;
  } else {
    const entry = { id, qty: newQty };
    if (color) entry.color = color;
    cart.push(entry);
  }
  saveCart(cart);
  return newQty - currentQty;
}

// Sets a cart line to an exact quantity, clamped between 0 and available stock.
function updateCartQty(id, qty, color = null) {
  const product = PRODUCTS.find((p) => p.id === id);
   const max = getStock(product, color);
  const clamped = Math.min(qty, max);

  let cart = getCart();
  if (clamped <= 0) {
    cart = cart.filter((item) => !sameLine(item, id, color));
  } else {
    const existing = cart.find((item) => sameLine(item, id, color));
    if (existing) existing.qty = clamped;
  }
  saveCart(cart);
}

function removeFromCart(id, color = null) {
  const cart = getCart().filter((item) => !sameLine(item, id, color));
  saveCart(cart);
}

function cartCount() {
  return getCart().reduce((sum, item) => sum + item.qty, 0);
}

function cartItemsWithProducts() {
  const cart = getCart();
  return cart
    .map((item) => {
      const product = PRODUCTS.find((p) => p.id === item.id);
      return product ? { ...product, qty: item.qty, color: item.color || null } : null;
    })
    .filter(Boolean);
}

function cartTotal() {
  return cartItemsWithProducts().reduce((sum, item) => sum + item.price * item.qty, 0);
}

function updateCartBadge() {
  document.querySelectorAll("[data-cart-count]").forEach((el) => {
    el.textContent = cartCount();
  });
}

/* ---------------------------- Formatting ---------------------------- */
/* ---------------------------- Delivery charge ---------------------------- */

const VALLEY_DISTRICTS = ["Kathmandu", "Lalitpur", "Bhaktapur"];

function getDeliveryCharge(district) {
  return VALLEY_DISTRICTS.includes(district) ? 50 : 150;
}
function formatRs(amount) {
  return "Rs. " + Number(amount).toLocaleString("en-IN");
}

function getInitials(name) {
  return name
    .split(" ")
    .slice(0, 2)
    .map((w) => w[0])
    .join("")
    .toUpperCase();
}

/* ---------------------------- Rendering: product card ---------------------------- */

function productCardHTML(product) {
  const images = getProductImages(product);
  const thumbSrc = images[0] || "";
  const stock = getStock(product);
  const inStock = stock > 0;
  const lowStock = inStock && stock !== Infinity && stock <= 5;
  const hasColors = getProductColors(product).length > 0;

  let badge = "";
  if (product.badge) {
    badge = `<span class="badge">${product.badge}</span>`;
  } else if (lowStock) {
    badge = `<span class="badge" style="background:var(--danger);color:#fff;">Only ${stock} left</span>`;
  }

  const oldPrice = product.oldPrice
    ? `<span class="price-old">${formatRs(product.oldPrice)}</span>`
    : "";
  const stockDisabled = inStock ? "" : "disabled";
  const btnLabel = inStock ? "Add to cart" : "Out of stock";

  // Products with color options go to the product page to pick a color first,
  // instead of adding a default color straight from the grid.
  const actionButton = hasColors
    ? `<a href="product.html?id=${product.id}" class="btn btn-primary btn-block">Choose options</a>`
    : `<button class="btn btn-primary btn-block" ${stockDisabled}
        onclick="const added = addToCart('${product.id}', 1); this.textContent = added > 0 ? 'Added ✓' : 'Limit reached'; setTimeout(() => this.textContent='${btnLabel}', 1200);">
        ${btnLabel}
      </button>`;

  return `
    <div class="product-card">
      <a href="product.html?id=${product.id}">
        <div class="product-thumb">
          ${badge}
          <img src="${thumbSrc}" alt="${product.name}"
               onerror="this.closest('.product-thumb').classList.add('img-fallback')" />
          <span class="thumb-fallback">${getInitials(product.name)}</span>
        </div>
      </a>
      <div class="product-info">
        <span class="product-cat">${product.category}</span>
        <a href="product.html?id=${product.id}">
          <h3 class="product-name">${product.name}</h3>
        </a>
        <div class="product-price-row">
          <span class="price">${formatRs(product.price)}</span>
          ${oldPrice}
        </div>
        ${actionButton}
      </div>
    </div>
  `;
}

function renderProductGrid(containerId, products) {
  const el = document.getElementById(containerId);
  if (!el) return;
  if (products.length === 0) {
    el.innerHTML = `<div class="empty-state">No products match your search yet. Try a different keyword or category.</div>`;
    return;
  }
  el.innerHTML = products.map(productCardHTML).join("");
}

/* ---------------------------- WhatsApp order link ---------------------------- */

function buildOrderMessage(customer) {
  const items = cartItemsWithProducts();
  const delivery = getDeliveryCharge(customer.district);
  const lines = [
    `New order from ${customer.name}`,
    `Phone: ${customer.phone}`,
    `Address: ${customer.address}`,
    `District: ${customer.district || "N/A"}`,
    "",
    "Order:",
  ];
  items.forEach((item) => {
    const colorText = item.color ? ` (${item.color})` : "";
    lines.push(`- ${item.name}${colorText} x${item.qty} = ${formatRs(item.price * item.qty)}`);
  });
  lines.push("");
  lines.push(`Subtotal: ${formatRs(cartTotal())}`);
  lines.push(`Delivery (${customer.district || "N/A"}): ${formatRs(delivery)}`);
  lines.push(`Total: ${formatRs(cartTotal() + delivery)}`);
  if (customer.note) {
    lines.push("");
    lines.push(`Note: ${customer.note}`);
  }
  return lines.join("\n");
}
function whatsappOrderLink(customer) {
  const text = encodeURIComponent(buildOrderMessage(customer));
  return `https://wa.me/${SITE_CONFIG.whatsappNumber}?text=${text}`;
}

function mailtoOrderLink(customer) {
  const subject = encodeURIComponent(`New order from ${customer.name}`);
  const body = encodeURIComponent(buildOrderMessage(customer));
  return `mailto:${SITE_CONFIG.email}?subject=${subject}&body=${body}`;
}

/* ---------------------------- Init on every page ---------------------------- */

document.addEventListener("DOMContentLoaded", () => {
  updateCartBadge();

  const toggle = document.querySelector(".nav-toggle");
  const nav = document.querySelector(".main-nav");
  if (toggle && nav) {
    toggle.addEventListener("click", () => nav.classList.toggle("open"));
  }

  const socialCol = document.getElementById("footer-social-col");
  if (socialCol && typeof SITE_CONFIG !== "undefined") {
    const links = [
      { key: "facebook", id: "footer-facebook" },
      { key: "instagram", id: "footer-instagram" },
      { key: "tiktok", id: "footer-tiktok" },
    ];
    let anyVisible = false;
    links.forEach(({ key, id }) => {
      const el = document.getElementById(id);
      if (el && SITE_CONFIG[key]) {
        el.href = SITE_CONFIG[key];
        el.style.display = "block";
        anyVisible = true;
      }
    });
    if (anyVisible) socialCol.style.display = "block";
  }
});

/* =========================================================================
 SPORT MINI GEAR — main.js
   Shared logic used across all pages: rendering products, cart (localStorage),
   filtering/search, and checkout order building.
   ========================================================================= */

const CART_KEY = "smg_cart";

/* ---------------------------- Stock helpers ---------------------------- */

// Returns the number of units available for a product.
// Supports two styles in products-data.js:
//   stock: 12        -> exact quantity tracking (recommended)
//   inStock: true     -> unlimited (no quantity limit)
//   inStock: false    -> treated as 0 (out of stock)
function getStock(product) {
  if (!product) return 0;
  if (typeof product.stock === "number") return product.stock;
  return product.inStock ? Infinity : 0;
}

/* ---------------------------- Cart helpers ---------------------------- */

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

// Adds qty of a product to the cart, but never lets the total exceed
// available stock. Returns the quantity actually added (useful for messages).
function addToCart(id, qty = 1) {
  const product = PRODUCTS.find((p) => p.id === id);
  const max = getStock(product);
  const cart = getCart();
  const existing = cart.find((item) => item.id === id);
  const currentQty = existing ? existing.qty : 0;
  const newQty = Math.min(currentQty + qty, max);

  if (newQty <= 0) return 0;

  if (existing) {
    existing.qty = newQty;
  } else {
    cart.push({ id, qty: newQty });
  }
  saveCart(cart);
  return newQty - currentQty;
}

// Sets a cart line to an exact quantity, clamped between 0 and available stock.
function updateCartQty(id, qty) {
  const product = PRODUCTS.find((p) => p.id === id);
  const max = getStock(product);
  const clamped = Math.min(qty, max);

  let cart = getCart();
  if (clamped <= 0) {
    cart = cart.filter((item) => item.id !== id);
  } else {
    const existing = cart.find((item) => item.id === id);
    if (existing) existing.qty = clamped;
  }
  saveCart(cart);
}

function removeFromCart(id) {
  const cart = getCart().filter((item) => item.id !== id);
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
      return product ? { ...product, qty: item.qty } : null;
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
  const stock = getStock(product);
  const inStock = stock > 0;
  const lowStock = inStock && stock !== Infinity && stock <= 5;

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

  return `
    <div class="product-card">
      <a href="product.html?id=${product.id}">
        <div class="product-thumb">
          ${badge}
          <img src="${product.image}" alt="${product.name}"
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
        <button class="btn btn-primary btn-block" ${stockDisabled}
          onclick="const added = addToCart('${product.id}', 1); this.textContent = added > 0 ? 'Added ✓' : 'Limit reached'; setTimeout(() => this.textContent='${btnLabel}', 1200);">
          ${btnLabel}
        </button>
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
  const lines = [
    `New order from ${customer.name}`,
    `Phone: ${customer.phone}`,
    `Address: ${customer.address}`,
    "",
    "Order:",
  ];
  items.forEach((item) => {
    lines.push(`- ${item.name} x${item.qty} = ${formatRs(item.price * item.qty)}`);
  });
  lines.push("");
  lines.push(`Total: ${formatRs(cartTotal())}`);
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

  // Mobile nav toggle
  const toggle = document.querySelector(".nav-toggle");
  const nav = document.querySelector(".main-nav");
  if (toggle && nav) {
    toggle.addEventListener("click", () => nav.classList.toggle("open"));
  }
});

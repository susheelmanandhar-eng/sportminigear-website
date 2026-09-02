/* =========================================================================
   SPORT MINI GEAR — SITE CONFIG & PRODUCT DATA
   -------------------------------------------------------------------------
   This is the ONLY file you need to edit to run your shop:
     1. Update SITE_CONFIG below with your real WhatsApp number, email,
        bank details, and QR code image.
     2. Add/edit products in the PRODUCTS array further down.
     3. Product images go in the /images/products/ folder. If an image
        is missing or the filename is wrong, the site automatically shows
        a neat placeholder instead of a broken image icon — so it's safe
        to add products before you have final photos.
   ========================================================================= */

const SITE_CONFIG = {
  // Shown in the footer and used to build order links
  whatsappNumber: "9779861549926",
  email: "sportminigear@gmail.com",
  address: "Kathmandu, Nepal",
  pan: "118788144",

  // Payment QR — put your bank/eSewa/Fonepay QR image at this path
  bankQrImage: "images/payment-qr.png",
  bankDetails:
    "Bank: [NIMB Bank]\nAccount Name: Sport Mini Gear\nAccount No: [13201040252317]\nBranch: [Thamel]",

  // Social links (leave blank "" to hide)
  facebook: "",
  instagram: "",
  tiktok: "",
};

// Category list used for filters/nav. Keep names consistent with product "category" fields below.
const CATEGORIES = [
  "Football",
  "Travel Gear",
  "Cricket",
  "Running",
  "Gym & Fitness",
  "Cycling",
  "Accessories",
];

/* -------------------------------------------------------------------------
   PRODUCTS
   Add as many as you like — the catalog page auto-updates.
   Fields:
     id          unique short code, no spaces (e.g. "fb-001")
     name        product name
     category    must match one of CATEGORIES above
     price       number, in Rs. (no commas)
     oldPrice    optional — set to a number to show a strikethrough price
     image       path under images/products/ (fine to leave as-is for now)
     badge       optional small tag e.g. "New", "Bestseller" (or "" for none)
     stock       NUMBER of units available (e.g. 12). Set to 0 for out of stock.
                 The site automatically shows "In stock", "Only X left"
                 (when 5 or fewer remain), or "Out of stock" based on this number.
     description short paragraph shown on the product detail page.
   ------------------------------------------------------------------------- */
const PRODUCTS = [
  {
    id: "fb-001",
    name: "Deluxe 18-in-1 Outdoor Multifunctional Survival Gear Kit for Adventure Disaster Preparedness and Emergency Aid ",
    category: "Travel Gear",
    price: 3000,
    oldPrice: 3500,
     images: [
      "images/products/fb-001-1.jpg",
      "images/products/fb-001-2.jpg",
      "images/products/fb-001-3.jpg"
    ],
    badge: "Bestseller",
    stock: 5,
    description:
      "Accessory Part - Butterfly handle large flint Multifunctional Scraper - Including Scraper, Bottle Opener, Hexagon Wrench, Scale High Frequency Double Hole Whistle Strong Flashlight Multifunctional Knife Multifunctional Saber Card - Including Bottle Opener, Can Opener, Box Opener, Box Opener, Flat Screwdriver, Adjustable Wrench, Positioning Wrench, Scale, Protractor, Sawtooth Keyhole Compass Portable Key Lamp Tungsten Steel Broken Window Defense Pen Waterproof and Shockproof Storage Box Kettle Buckle Survival Bracelet Screwdriver (one type) Screwdrive (other type) Wire Saw Emergency Blanket Kettle Buckle Absorbent, Alcohol Pad, Styptic Bandage",
  },

 {
    id: "fb-002-new",
    name: "Travel Camping Accessories Multifunctional Hiking Emergency Survival Kit SOS Outdoor Survival Kit Set ",
    category: "Travel Gear",
    price: 1500,
    oldPrice: 1850,
     images: [
      "images/products/fb-002-new-1.jpg",
      "images/products/fb-002-new-2.jpg",
      "images/products/fb-002-new-3.jpg"
    ],
    badge: "Bestseller",
    stock: 5,
    description:
      "Accessory Parts - Butterfly handle large flint; Multifunctional Scraper - Including Scraper, Bottle Opener, Hexagon Wrench, Scale; High-Frequency Double Hole Whistle; Strong Flashlight; Multifunctional Knife; Multifunctional Saber Card - Including Bottle Opener, Can Opener, Box Opener, Box Opener, Flat Screwdriver, Adjustable Wrench, Positioning Wrench, Scale, Protractor, Sawtooth, Keyhole; Compass; Portable Key Lamp; Tungsten Steel Broken Window Defense Pen; Waterproof and Shockproof Storage Box",
  },


  {
    id: "fb-003-new",
    name: "New Style Water Purifier Hiking Camping Survival Water Filter Straw Popular Camping Water purifier",
    category: "Travel Gear",
    price: 1500,
    old price: 1750
    images: [
      "images/products/fb-003-new-1.jpg",
      "images/products/fb-003-new-2.jpg",
      "images/products/fb-003-new-3.jpg"
    badge: "",
    stock: 3,
    description:
      "It is a new outdoor portable water filter for travel, hiking, and camping.Product Name - Camping Water Purifier Compatibility - Easy to carry Type - Survival Multifunctional Tool Style - Modern Capacity - 1500 L Purpose - Outdoor Emergency Use Feature - Light Weight Function - Portable Survival ToolUsage - Outdoor Camping Hiking Travelling Beach",
  },

  {
    id: "fb-003",
    name: "Goalkeeper Gloves",
    category: "Football",
    price: 1450,
    image: "images/products/fb-003.jpg",
    badge: "New",
    stock: 25,
    description:
      "Padded palm goalkeeper gloves with adjustable wrist strap for a secure, confident grip.",
  },
  {
    id: "ck-001",
    name: "Cricket Bat (Kashmir Willow)",
    category: "Cricket",
    price: 3500,
    image: "images/products/ck-001.jpg",
    badge: "",
    stock: 25,
    description:
      "Full-size Kashmir willow bat with a balanced pick-up, suited for club and street cricket.",
  },
  {
    id: "ck-002",
    name: "Cricket Ball (Leather, Red)",
    category: "Cricket",
    price: 650,
    image: "images/products/ck-002.jpg",
    badge: "",
    stock: 25,
    description: "Traditional leather cricket ball, hand-stitched seam for consistent swing and bounce.",
  },
  {
    id: "ck-003",
    name: "Batting Gloves",
    category: "Cricket",
    price: 1200,
    image: "images/products/ck-003.jpg",
    badge: "",
    stock: 0,
    description: "Protective batting gloves with foam padding across the fingers and thumb.",
  },
  {
    id: "rn-001",
    name: "Runner Pro Shoes",
    category: "Running",
    price: 4200,
    oldPrice: 4900,
    image: "images/products/rn-001.jpg",
    badge: "Bestseller",
    stock: 25,
    description:
      "Lightweight running shoes with breathable mesh upper and cushioned sole for daily training runs.",
  },
  {
    id: "rn-002",
    name: "Reflective Running Vest",
    category: "Running",
    price: 850,
    image: "images/products/rn-002.jpg",
    badge: "",
    stock: 25,
    description: "High-visibility vest with reflective strips, built for early morning or evening runs.",
  },
  {
    id: "gy-001",
    name: "Adjustable Dumbbell Set",
    category: "Gym & Fitness",
    price: 5200,
    image: "images/products/gy-001.jpg",
    badge: "",
    stock: 25,
    description: "Pair of adjustable dumbbells, 2–10kg per hand, for home strength training.",
  },
  {
    id: "gy-002",
    name: "Yoga Mat (6mm)",
    category: "Gym & Fitness",
    price: 1100,
    image: "images/products/gy-002.jpg",
    badge: "New",
    stock: 25,
    description: "Non-slip 6mm yoga mat with carry strap, suitable for yoga, stretching, and floor workouts.",
  },
  {
    id: "gy-003",
    name: "Resistance Bands (Set of 5)",
    category: "Gym & Fitness",
    price: 750,
    image: "images/products/gy-003.jpg",
    badge: "",
    stock: 25,
    description: "Five resistance levels for mobility work, warm-ups, and strength training on the go.",
  },
  {
    id: "cy-001",
    name: "Cycling Helmet",
    category: "Cycling",
    price: 1800,
    image: "images/products/cy-001.jpg",
    badge: "",
    stock: 25,
    description: "Ventilated cycling helmet with adjustable fit dial and rear safety light mount.",
  },
  {
    id: "cy-002",
    name: "Cycling Gloves",
    category: "Cycling",
    price: 650,
    image: "images/products/cy-002.jpg",
    badge: "",
    stock: 25,
    description: "Padded half-finger cycling gloves for grip and comfort on longer rides.",
  },
  {
    id: "ac-001",
    name: "Sports Duffel Bag",
    category: "Accessories",
    price: 1650,
    image: "images/products/ac-001.jpg",
    badge: "",
    stock: 25,
    description: "Spacious duffel bag with separate shoe compartment, built for daily training kit.",
  },
  {
    id: "ac-002",
    name: "Insulated Water Bottle (750ml)",
    category: "Accessories",
    price: 550,
    image: "images/products/ac-002.jpg",
    badge: "",
    stock: 25,
    description: "Double-wall insulated bottle that keeps drinks cold through a full training session.",
  },
  {
    id: "ac-003",
    name: "Sports Socks (3 Pairs)",
    category: "Accessories",
    price: 450,
    image: "images/products/ac-003.jpg",
    badge: "",
    stock: 25,
    description: "Cushioned, breathable sports socks — pack of 3 pairs.",
  },
];

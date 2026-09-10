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
  facebook: "https://www.facebook.com/profile.php?id=61565026031468",
  instagram: "https://www.instagram.com/sport.minigear/",
  tiktok: "",
};

// Category list used for filters/nav. Keep names consistent with product "category" fields below.
const CATEGORIES = [
  "Travel Gear",
  "Camping Cookware",
  "Utility Tools",
  "Running and Hike",
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
     badge       optional small tag e.g. "New", "Bestseller", "Free Delivery" (or "" for none)
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
    id: "fb-002",
    name: "Travel Camping Accessories Multifunctional Hiking Emergency Survival Kit SOS Outdoor Survival Kit Set ",
    category: "Travel Gear",
    price: 1500,
    oldPrice: 1850,
     images: [
      "images/products/fb-002-1.jpg",
      "images/products/fb-002-2.jpg",
      "images/products/fb-002-3.jpg"
    ],
    badge: "Bestseller",
    stock: 5,
    description:
      "Accessory Parts - Butterfly handle large flint; Multifunctional Scraper - Including Scraper, Bottle Opener, Hexagon Wrench, Scale; High-Frequency Double Hole Whistle; Strong Flashlight; Multifunctional Knife; Multifunctional Saber Card - Including Bottle Opener, Can Opener, Box Opener, Box Opener, Flat Screwdriver, Adjustable Wrench, Positioning Wrench, Scale, Protractor, Sawtooth, Keyhole; Compass; Portable Key Lamp; Tungsten Steel Broken Window Defense Pen; Waterproof and Shockproof Storage Box",
  },


  {
    id: "fb-003",
    name: "New Style Water Purifier Hiking Camping Survival Water Filter Straw Popular Camping Water purifier",
    category: "Travel Gear",
    price: 1500,
    oldPrice: 1750,
    images: [
      "images/products/fb-003-1.jpg",
      "images/products/fb-003-2.jpg",
      "images/products/fb-003-3.jpg"
    ],
    badge: "",
    stock: 3,
    description:
      "It is a new outdoor portable water filter for travel, hiking, and camping. Product Name - Camping Water Purifier Compatibility - Easy to carry Type - Survival Multifunctional Tool Style - Modern Capacity - 1500 L Purpose - Outdoor Emergency Use Feature - Light Weight Function - Portable Survival Tool Usage - Outdoor Camping Hiking Travelling Beach",
  },

 {
    id: "fb-004",
    name: "New Product Emergency Camping Tools Camping Kits Survival Kits",
    category: "Travel Gear",
    price: 1350,
    oldPrice: 2000,
    images: [
      "images/products/fb-004-1.jpg",
      "images/products/fb-004-2.jpg",
      "images/products/fb-004-3.jpg"
    ],
    badge: "",
    stock: 10,
    description:
      "Usage - Outdoor Camping Hiking Travelling Color - Red Material - Stainless steel Packing - Opp Bag Single Gross Weight - 0.300 Kg. This compact and portable survival kit is made of durable stainless steel, designed for outdoor camping, hiking, and traveling. This is easy to carry and highly functional for outdoor activities like climbing and water sports.",
  },

    {
    id: "co-001",
    name: "Lightweight Camping Accessories Equipment Backpacking Supplies Survival Gear Cooking Set Outdoor Cook Gear for Family Hiking",
    category: "Camping Cookware",
    price: 3250,
    oldPrice: 3500,
    images: [
      "images/products/co-001-1.jpg",
      "images/products/co-001-2.jpg",
      "images/products/co-001-3.jpg"
    ],

    badge: "",
    stock: 2,
    description:
      "Product Name: Camping cookware set with kettle, Material: Aluminum alloy, Hard anodized Using: 2~3person outdoor camping and picnic Inner: 1. Cauldron: 170 * 95MM 2. Tea pot: 1.1L 150 * 80MM 3. frying pan: 180 * 44MM 4. bowl: 3pcs 5. bamboo spoon: 1pc 6. rice shovel: 1 pc 7. Round Sponge: 1 pc 8. Lid:1PC 9. Carry bag:1pc 10. Capacity - 3-4 L Package: 1.1 Set in a Carry bag, then in a color box. 2. Color Box: 18.5x13x18.5CM",
  },
  {
    id: "co-002",
    name: "Ultralight Camping Cookware Set Pots and Pans Set with Mini Stove Non-Stick Cooking Backpacking with Folding Knife and Fork Set",
    category: "Camping Cookware",
    price: 3450,
    oldPrice: 3700,
    images: [
      "images/products/co-002-1.jpg",
      "images/products/co-002-2.jpg",
      "images/products/co-002-3.jpg"
    ],

    badge: "Bestseller",
    stock: 5,
    description: 
      "Pans Type - Frying Pans & Skillets Material - Aluminium Alloy, Hard Anodized Size - 1. big pot:12*10.50(h)cm 2. small pot:11*6.0(h)cm Usage - 1~2person Outdoor Camping Function - Portable Survival Tool Single Gross Weight - 1kg Applicable Stove - General Use for Gas and Induction Cooker Capacity - 1-2L Parts 1. Big pot:12*10.50(h)cm 2. Small pot:11*6.0(h)cm 3. Climbing hook:1PC 4. Folding Stove:1PC 5. Bowl: 3pcs 6. Bamboo spoon: 1pc 7. Folk spoon knife: 1 set 8. Wool ball:1 pc 9. Spoon:1pc 10. Carry bag:1PC Package - 1 set in a mesh bag and in a color box",
  },
 {
   id: "co-003",
    name: "Outdoor hiking Camping Cookware Set 1-2 Person Outdoor Lightweight Cooking Pots",
    category: "Camping Cookware",
    price: 1950,
    oldPrice: 2450,
    images: [
      "images/products/co-003-1.jpg",
      "images/products/co-003-2.jpg",
      "images/products/co-003-3.jpg"
    ],

    badge: "Free Delivery",
    stock: 5,
    description: 
      "Product Name - Camping Picnic Cookware Set Material - Metal Metal Type - Aluminum Applicable Stove - General Use for Gas and Induction Cooker Pot Cover Type -Stainless Steel Cover Pot Cover - With Pot Cover Capacity - 1-2L Size - 1. big pot:12*10.50(h)cm 2. small pot:11*6.0(h)cm Use - 1~2person Outdoor Camping Function - Portable Survival Tools",
  },
  
 {
    id: "co-004",
    name: "Portable 5800W Camping Stove Windproof Backpacking Stove with Piezo Ignition Folding Lightweight Stove for Outdoor",
    category: "Camping Cookware",
    price: 3200,
    oldPrice: 4200,
    images: [
      "images/products/co-004-1.jpg",
      "images/products/co-004-2.jpg",
      "images/products/co-004-3.jpg"
    ],

    badge: "Free Delivery",
    stock: 3,
    description: 
      "Product - Camping Gas Stove Material - Stainless Steel Type - Stove Burner Structure - Foldable With Ignition Device - Yes Feature - Lightweight Stove Fuel - Butane, Propane, Isobutane Gas Mixture, Gas Net Weight - 380 g Feature - Portable, Foldable, Lightweight Unfold Size - 9.5*16CM Package Size - 9*9*10CM Packing - 1PC/Plastic Box Application - Outdoor Equipment Hiking Camping",
  },

 {
    id: "co-005",
    name: "Portable Camping Stoves Ultralight Backpacking Stove Fuel Burner with Piezo Ignition Stable Support Wind-Resistance for Outdoor",
    category: "Camping Cookware",
    price: 1000,
    oldPrice: 1250,
    images: [
      "images/products/co-005-1.jpg",
      "images/products/co-005-2.jpg",
      "images/products/co-005-3.jpg"
    ],

    badge: "Bestseller",
    stock: 7,
    description: 
      "Product - Camping Gas Stove Material - Stainless Steel Type - Stove Burner Structure - Foldable With Ignition Device - Yes Feature - Lightweight Stove Fuel - Butane, Propane, Isobutane Gas Mixture, Gas Net Weight - 380 g Feature - Portable, Foldable, Lightweight Unfold Size - 9.5*16CM Package Size - 9*9*10CM Packing - 1PC/Plastic Box Application - Outdoor Equipment Hiking Camping",
  },

  {
    id: "ut-001",
    name: "Emergency Multi Tools 20 in 1 Multifunction Hammer Pliers Multi Tool",
    category: "Utility Tools",
    price: 2850,
    oldPrice: 3200,
   images: [
      "images/products/ut-001-1.jpg",
      "images/products/ut-001-2.jpg",
      "images/products/ut-001-3.jpg"
  ],
    badge: "New",
    stock: 5,
    description:
      "Product Name - 20 in 1 Multifunction Hammer Pliers Multi Tool Material - Stainless Steel Color - Black/Blue Advantage - Quality + Competitive Type - Survival Multifunctional Tool Material -Stainless Steel + ABS Application -- Travel and Trek Feature 1. Premium steel 2. long lifetime Size 17.5*8CM Weight 425g Packing Color box",
  },

  {
    id: "ut-002",
    name: "EDC Stainless Steel Multifunction Hammer Pliers DIY Hand Tools for Camping Pocket Knife for Outdoor Use",
    category: "Utility Tools",
    price: 1650,
    oldPrice: 1850,
   images: [
      "images/products/ut-002-1.jpg",
      "images/products/ut-002-2.jpg",
      "images/products/ut-002-3.jpg"
  ],
    badge: "Bestseller",
    stock: 5,
    description:
      "Product Name - Multifunctional Hammer Color - Blue/Black/Red/Grey Packing - Pouch and Box Material - Stainless Steel Usage - Promotion/Business gift, daily usage, outdoor/indoor tools, bottle opener, screwdriver, hex wrench. Handle Material - Aluminum Bronze Application - Claw Hammer",
  },

  {
    id: "ut-003",
    name: "13-in-1 Portable Stainless Steel Hammer Multi-Function Survival Gear Pliers Multi-Tool Hammer",
    category: "Utility Tools",
    price: 1450,
    oldPrice: 1600,
   images: [
      "images/products/ut-003-1.jpg",
      "images/products/ut-003-2.jpg",
      "images/products/ut-003-3.jpg"
  ],
    badge: "Free Delivery",
    stock: 5,
    description:
      "Handle Material - Aluminum Bronze Application - Claw Hammer Size - 14*75*2.5cm Packing - Pouch and Box Application - Claw Hammer Color - Black Weight - 260 grams Usage - Promotion/Business gift, daily usage, outdoor/indoor tools, bottle opener, screwdriver, hex wrench.",
  },
     {
    id: "cy-001",
    name: "Ultra Bright 350lm USB Rechargeable Waterproof Motion Sensor Bicycle Lights",
    category: "Cycling",
    price: 2150,
    oldPrice: 2450,
    images: [
      "images/products/cy-001-1.jpg",
      "images/products/cy-001-2.jpg",
      "images/products/cy-001-3.jpg"
  ],

    badge: "Bestseller",
    stock: 7,
    description: 
"Product Name - Bicycle Front Light Power Supply - Battery Battery - 2000mAh Color - Black Feature - Waterproof Brand Name - Quanxin Type - LEDs Single Gross Weight - 0.150 KG Single Package Size - 15X12X10 cm",
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

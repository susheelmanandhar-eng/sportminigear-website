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
    id: "fb-005",
    name: "Portable Outdoor Survival Folding Knife Combo Tool with Stainless Steel",
    category: "Travel Gear",
    price: 975,
    oldPrice: 1250,
    images: [
      "images/products/fb-005-1.jpg",
      "images/products/fb-005-2.jpg",
      "images/products/fb-005-3.jpg"
    ],
    badge: "Bestseller",
    stock: 10,
    description:
      "Function - DIY - Daily Use Blade Material - Stainless Steel Handle Material - Aluminium Application - Multifunctional Knife Usage - Blade, Bottle Opener - Multifunction Use",
  },

{
    id: "fb-006",
    name: "Lightweight Mylar Emergency Thermal Bivy Camping Outdoor Sleeping Bag with Drawstring",
    category: "Travel Gear",
    price: 675,
    images: [
      "images/products/fb-006-1.jpg",
      "images/products/fb-006-2.jpg",
      "images/products/fb-006-3.jpg"
    ],
    badge: "New",
    stock: 10,
    description:
      "Product Name - Outdoor Emergency Sleeping Bag Fabric - Polyethylene Fabric Usage - Camping, Hiking, Travel Feature - Lightweight and Portable Season - All Season Weight - 137 g Feature - Portable/Waterproof/Washable Applicable - Unisex Length - Standard (Suitable for 1.8 m Height and below) Single package size - 12X7X7 cm",
  },
{
    id: "fb-007",
    name: "USB Rechargeable LED Mini COB Headlamp White & Red Outdoor Night Running Light Portable with Built-in Battery",
    category: "Travel Gear",
    price: 875,
    oldPrice: 1050,
    images: [
      "images/products/fb-007-1.jpg",
      "images/products/fb-007-2.jpg",
      "images/products/fb-007-3.jpg"
    ],
    badge: "New",
    stock: 5,
    description:
      "This USB rechargeable LED mini COB headlamp features a built-in lithium-ion battery, offering 3W power and up to 4 hours of runtime. It offers three lighting modes—white high, red high, and alternating flash—and is IP65 waterproof, making it ideal for outdoor activities such as camping, hiking, and nighttime running. Compact and portable at 4.5 × 4 × 3 cm and weighing just 47g, it includes a button switch and micro-USB charging for convenience. Feature - Portable, Super Bright ; Battery Type - Lithium-Ion ; Color - Black, Yellow ; 3 Modes - White high/red high/white and red flash alternately ; Battery - Built-in battery ; Light Source - LED ; Battery - 2000mAh ; Size - 4.5*4*3CM ; Charging - micro usb ; charging Material - Aluminum ; Switch Mode - Button switch",
  },

{
    id: "fb-008",
    name: "LED Motion Sensor Rechargeable Headlamp Lightweight Waterproof Silicone USB Hands-Free Headband 5 Modes for Camping",
    category: "Travel Gear",
    price: 999,
    oldPrice: 1250,
    images: [
      "images/products/fb-008-1.jpg",
      "images/products/fb-008-2.jpg",
      "images/products/fb-008-3.jpg"
    ],
    badge: "New",
    stock: 10,
    description:
      "Lighting Period (h)-6 ; Color Temperature(CCT) - 4100K (Neutral White) ; IP Rating - IXP45 ; Power Source - Rechargeable Battery ; Color - black ; LED lamp beads - 3W led COB ; Working voltage - 3.0V-4.5V ; Charging time - 4 Hours ; lighting time - 2-3Hour ; Size - 32x3.1x3.1cm ; Battery capacity - 800mAH ; Weight - 120g ; Function - Camping Activity",
  },

{
    id: "fb-009",
    name: "Folding  First Aid Life Saving Survival Rescue Lander Emergency Blankets Folding Thermal Blanket Wrap",
    category: "Travel Gear",
    price: 450,
    images: [
      "images/products/fb-009-1.jpg",
      "images/products/fb-009-2.jpg",
      "images/products/fb-009-3.jpg"
    ],
    badge: "New",
    stock: 10,
    description:
      "Feature - Lightweight, Portable Type - Survival Kit Printing Method - Silk Screen Print, Roller Print, Heat Transfer Print Single Gross Weight - 0.060 KG Dimensions - 210x160cm Usage - Outdoor Activity (Hike, Travel, Climb, Trek)",
  },

{
    id: "fb-010",
    name: "Butterfly-Shape Flint Steel Fire Starter Magnesium Stick with Scraper Big Size for Outdoor Survival Camping Picnic BBQ",
    category: "Travel Gear",
    price: 1150,
    oldPrice: 1500,
    images: [
      "images/products/fb-010-1.jpg",
      "images/products/fb-010-2.jpg",
      "images/products/fb-010-3.jpg"
    ],
    badge: "Bestseller",
    stock: 4,
    description:
      'This tool is necessary for outdoor experts, anglers and campers Usage - Camping, Hiking, Survival, Indoor and Outdoor Use Packing Detail - OPP BagWeight - 0.1 kg
Material - Aluminium Alloy, Magnesium. This outdoor survival camping and hiking tool is necessary to make your travel adventurous and fun loving. Product Name - Butterfly shape flint with Scraper Big Size Usage - Any climate and environmental condition Material - Waterproof Lenght of Magnesium Rod - 6.8cm Lenght - 11cm Diameter of Magnesium Rod - 8mm`,
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
    id: "co-006",
    name: "Fire Maple Camping 230g Gas",
    category: "Camping Cookware",
    price: 875,
    oldPrice: 950,
    images: [
      "images/products/co-006-1.jpg",
      "images/products/co-006-2.jpg",
      "images/products/co-006-3.jpg"
    ],

    badge: "Bestseller",
    stock: 5,
    description: 
      "It weighs 230 Grams. Filled with propane and Isobutane mixed gas. It is suitable for high Altitude and low temperature environment. Ingredients : isobutane and propane ; Threaded gas cylinder ; Net Weight : 230g ; Total Weight : 365g ; Package Dimensions : 92 x 110 x 110 mm ; Suitable for use in any season",
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
    name: "Durable Metal Outdoor Hiking Bike Tools Mini Pocket Cycling Bike Repair Multi Tool",
    category: "Cycling",
    price: 705,
    images: [
      "images/products/cy-002-1.jpg",
      "images/products/cy-002-2.jpg",
      "images/products/cy-002-3.jpg"
  ],

    badge: "Bestseller",
    stock: 5,
    description: 
"Product Name - This mini pocket cycling bike repair multi-tool is made of durable ABS and metal materials, featuring a compact size of 9*2.5*4.5CM. Made with high-quality stainless steel tools and a sturdy ABS body, it combines strength, portability, and convenience. The tool includes multiple hex keys, screwdrivers, spoke wrenches, and other essential functions needed for roadside fixes. Its foldable design makes it easy to carry in your pocket, saddlebag, or toolkit, ensuring you’re always prepared for unexpected repairs during rides. Perfect for cyclists, mountain bikers, and daily commuters who value reliability and efficiency.  Product Name - Bike Repair Tool Material - ABS + Metal Size - 9*2.5*4.5CM.  Weight - 300 gm Feature - High quality, heavy stainless steel,  Usage - Promotion/Business gift, dailiy usage, outdoor/indoor tools, bottle opener, screwdriver, hex wrench.",
  },

   {
    id: "ac-001",
    name: "Silicone Reusable Collapsible Foldable 1 liter Travel Sports Water Bottle",
    category: "Accessories",
    price: 850,
    oldPrice: 975,
    images: [
      "images/products/ac-001-1.jpg",
      "images/products/ac-001-2.jpg",
      "images/products/ac-001-3.jpg"
  ],

    badge: "New",
    stock: 5,
    description: 
"Material - Silicone Type - Sports Water Bottle Accessories - With LID, With Straw Style - Classic Water Flowing Method - Straw Type Usage - Outdoor Activities Advantage - Lightweight Capacity - 1000 ml Function - Leakproof Shape - Ball shape Feature - BPA-Free Keywords - Unbreakable Available color - Football",
  },


   {
    id: "ac-002",
    name: "Silicone Reusable Collapsible Foldable 1 liter Travel Sports Water Bottle",
    category: "Accessories",
    price: 850,
    oldPrice: 975,
    images: [
      "images/products/ac-002-1.jpg",
      "images/products/ac-002-2.jpg",
      "images/products/ac-002-3.jpg"
  ],

    badge: "New",
    stock: 5,
    description: 
"Material - Silicone Type - Sports Water Bottle Accessories - With LID, With Straw Style - Classic Water Flowing Method - Straw Type Usage - Outdoor Activities Advantage - Lightweight Capacity - 1000 ml Function - Leakproof Shape - Ball shape Feature - BPA-Free Keywords - Unbreakable Available color - Black",
  },

  {
    id: "ac-003",
    name: "Silicone Reusable Collapsible Foldable 1 liter Travel Sports Water Bottle",
    category: "Accessories",
    price: 850,
    oldPrice: 975,
    images: [
      "images/products/ac-003-1.jpg",
      "images/products/ac-003-2.jpg",
      "images/products/ac-003-3.jpg"
  ],

    badge: "New",
    stock: 5,
    description: 
"Material - Silicone Type - Sports Water Bottle Accessories - With LID, With Straw Style - Classic Water Flowing Method - Straw Type Usage - Outdoor Activities Advantage - Lightweight Capacity - 1000 ml Function - Leakproof Shape - Ball shape Feature - BPA-Free Keywords - Unbreakable Available color - Basketball",
  },

{
    id: "ac-004",
    name: "Silicone Reusable Collapsible Foldable 550 ml Travel Sports Water Bottle",
    category: "Accessories",
    price: 650,
    oldPrice: 790,
    images: [
      "images/products/ac-004-1.jpg",
      "images/products/ac-004-2.jpg",
      "images/products/ac-004-3.jpg"
  ],

    badge: "New",
    stock: 5,
    description: 
"Material - Silicone Type - Sports Water Bottle Accessories - With LID, With Straw Style - Classic Water Flowing Method - Straw Type Usage - Outdoor Activities Advantage - Lightweight Capacity - 550 ml Function - Leakproof Shape - Ball shape Feature - BPA-Free Keywords - Unbreakable Single Gross Weight - 0.400 kg Color - Football",
  },

{
    id: "ac-005",
    name: "Silicone Reusable Collapsible Foldable 550 ml Travel Sports Water Bottle",
    category: "Accessories",
    price: 650,
    oldPrice: 790,
    images: [
      "images/products/ac-005-1.jpg",
      "images/products/ac-005-2.jpg",
      "images/products/ac-005-3.jpg"
  ],

    badge: "New",
    stock: 5,
    description: 
"Material - Silicone Type - Sports Water Bottle Accessories - With LID, With Straw Style - Classic Water Flowing Method - Straw Type Usage - Outdoor Activities Advantage - Lightweight Capacity - 550 ml Function - Leakproof Shape - Ball shape Feature - BPA-Free Keywords - Unbreakable Single Gross Weight - 0.400 kg Color - Basketball",
  },

{
    id: "ac-006",
    name: "Silicone Reusable Collapsible Foldable 550 ml Travel Sports Water Bottle",
    category: "Accessories",
    price: 650,
    oldPrice: 790,
    images: [
      "images/products/ac-006-1.jpg",
      "images/products/ac-006-2.jpg",
      "images/products/ac-006-3.jpg"
  ],

    badge: "New",
    stock: 5,
    description: 
"Material - Silicone Type - Sports Water Bottle Accessories - With LID, With Straw Style - Classic Water Flowing Method - Straw Type Usage - Outdoor Activities Advantage - Lightweight Capacity - 550 ml Function - Leakproof Shape - Ball shape Feature - BPA-Free Keywords - Unbreakable Single Gross Weight - 0.400 kg Color - Black",
  },


];

export type Place = {
  name: string;
  slug: string;
  division: string;
  description: string;
  longDescription: string;
  image: string;
  gallery: string[];
  rating: number;
  bestTime: string;
  location: string;
  highlights: { icon: string; title: string; detail: string }[];
};

export type TourPackage = {
  title: string;
  type: string;
  duration: string;
  groupSize: string;
  price: number;
  oldPrice?: number;
  image: string;
  highlights: string[];
  popular?: boolean;
};

export type TourType = {
  name: string;
  description: string;
  icon: string;
};

export type ScheduleItem = {
  date: string;
  title: string;
  destination: string;
  duration: string;
  spotsLeft: number;
  price: number;
};

const base = "https://images.unsplash.com/photo-";

export const places: Place[] = [
  {
    name: "Cox's Bazar",
    slug: "coxs-bazar",
    division: "Chattogram",
    description:
      "The world's longest unbroken sandy sea beach stretching over 120 km along the Bay of Bengal, perfect for sunsets and seafood.",
    longDescription:
      "Cox's Bazar is a city situated on the southeastern coast of Bangladesh, home to the world's longest unbroken sandy sea beach stretching 120 kilometres along the Bay of Bengal. The golden sands, gentle waves, and breathtaking sunsets make it the most popular tourist destination in the country. Beyond the beach, you can explore the Inani Beach with its unique rock and coral formations, take a scenic Marine Drive through lush green hills, visit the Himchari National Park for its waterfalls, and indulge in the freshest seafood at local shacks. The vibrant sea shell crafts and tribal cultural experiences add to the charm of this coastal paradise.",
    image: `${base}1507525428034-b723cf961d3e?w=800&q=80`,
    gallery: [
      `${base}1507525428034-b723cf961d3e?w=1200&q=80`,
      `${base}1519046904884-53103b34b206?w=800&q=80`,
      `${base}1504681869696-d977211a5f4c?w=800&q=80`,
      `${base}1530053969600-caed2396652a?w=800&q=80`,
    ],
    rating: 4.9,
    bestTime: "Nov - Mar",
    location: "Cox's Bazar District, Chattogram Division",
    highlights: [
      { icon: "🏖️", title: "120 km Sea Beach", detail: "Walk along the world's longest unbroken natural sandy beach" },
      { icon: "🌅", title: "Sunset at Inani", detail: "Witness mesmerising sunset views with coral rock formations" },
      { icon: "🚗", title: "Marine Drive", detail: "A scenic 20 km coastal road between Cox's Bazar and Inani" },
      { icon: "🌊", title: "Himchari Waterfalls", detail: "A lush national park with a stunning waterfall meeting the sea" },
      { icon: "🦞", title: "Seafood Feast", detail: "Enjoy freshly caught crab, shrimp, and fish at beachside stalls" },
      { icon: "🐚", title: "Shell Crafts", detail: "Browse unique handmade shell souvenirs at the beach market" },
    ],
  },
  {
    name: "Sundarbans",
    slug: "sundarbans",
    division: "Khulna",
    description:
      "The largest mangrove forest in the world and home to the majestic Royal Bengal Tiger. Explore the delta by boat.",
    longDescription:
      "The Sundarbans, meaning 'Beautiful Forest', is the largest contiguous mangrove forest in the world, spanning across the delta of the Ganges, Brahmaputra, and Meghna rivers on the Bay of Bengal. Designated a UNESCO World Heritage Site, this UNESCO Biosphere Reserve is the last stronghold of the Royal Bengal Tiger in the wild. Navigate the labyrinth of tidal waterways, mudflats, and small islands of salt-tolerant mangrove forests on a traditional boat. The forest is also home to Ganges river dolphins, saltwater crocodiles, spotted deer, and hundreds of bird species. The experience of gliding through silent creeks at dawn, with the sounds of the wild all around, is truly unforgettable.",
    image: `${base}1470071459604-3b5ec3a7fe05?w=800&q=80`,
    gallery: [
      `${base}1470071459604-3b5ec3a7fe05?w=1200&q=80`,
      `${base}1441974231531-c6227db76b6e?w=800&q=80`,
      `${base}1472214103451-9374bd1c798e?w=800&q=80`,
      `${base}1505228395891-9a51e7e86bf6?w=800&q=80`,
    ],
    rating: 4.8,
    bestTime: "Oct - Mar",
    location: "Khulna & Satkhira Districts, Khulna Division",
    highlights: [
      { icon: "🐅", title: "Royal Bengal Tiger", detail: "Spot the elusive king of the Sundarbans on a guided safari" },
      { icon: "🛶", title: "Creek Boat Safari", detail: "Glide through narrow tidal waterways deep into the forest" },
      { icon: "🐒", title: "Spotted Deer Herds", detail: "Watch herds of chital deer graze along the forest edges" },
      { icon: "🐬", title: "River Dolphins", detail: "See the rare Ganges river dolphins surface in the channels" },
      { icon: "🏕️", title: "Overnight Camp", detail: "Stay at forest rest houses under a blanket of stars" },
      { icon: "🌿", title: "Mangrove Ecology", detail: "Learn about the unique flora that thrives in saltwater" },
    ],
  },
  {
    name: "Srimangal",
    slug: "srimangal",
    division: "Sylhet",
    description:
      "The tea capital of Bangladesh, with rolling green tea gardens, lemon orchards, and the famous Seven Layers Tea.",
    longDescription:
      "Srimangal is known as the Tea Capital of Bangladesh, a serene town in the Sylhet Division surrounded by endless rolling hills of emerald-green tea plantations. The landscape is a patchwork of tea gardens, rubber plantations, pineapple groves, and orange orchards stretching as far as the eye can see. Visit the world-famous Lawachara National Park for a chance to spot hoolock gibbons, explore the unique Ratargul freshwater swamp forest by boat, and don't miss tasting the legendary Seven Layers Tea — a colourful layered drink that is a local specialty. The warm hospitality of the Manipuri and Tripuri tribal communities adds cultural richness to the natural beauty.",
    image: `${base}1501854140801-50d01698950b?w=800&q=80`,
    gallery: [
      `${base}1501854140801-50d01698950b?w=1200&q=80`,
      `${base}1470071459604-3b5ec3a7fe05?w=800&q=80`,
      `${base}1441974231531-c6227db76b6e?w=800&q=80`,
      `${base}1447752875215-b2761acb3c5d?w=800&q=80`,
    ],
    rating: 4.7,
    bestTime: "Feb - Apr",
    location: "Srimangal, Moulvibazar District, Sylhet Division",
    highlights: [
      { icon: "🍵", title: "Seven Layers Tea", detail: "Sip the iconic layered tea — a rainbow in a glass" },
      { icon: "🌿", title: "Tea Garden Walk", detail: "Stroll through carpet-like tea estates at golden hour" },
      { icon: "🐒", title: "Lawachara Forest", detail: "Trek through a tropical rainforest home to hoolock gibbons" },
      { icon: "🌳", title: "Ratargul Swamp", detail: "Boat through a magical freshwater swamp forest" },
      { icon: "🍍", title: "Citrus Orchards", detail: "Visit pineapple and lemon plantations in the hills" },
      { icon: "🎭", title: "Tribal Villages", detail: "Experience Manipuri and Tripuri culture and weaving" },
    ],
  },
  {
    name: "Bandarban",
    slug: "bandarban",
    division: "Chattogram",
    description:
      "Mountain paradise of the Chittagong Hill Tracts with lush green hills, waterfalls, and indigenous communities.",
    longDescription:
      "Bandarban is the crown jewel of the Chittagong Hill Tracts, a land of rolling emerald hills, cascading waterfalls, and vibrant indigenous culture. As the most mountainous district in Bangladesh, it offers some of the most dramatic landscapes in the country — misty valleys, winding rivers, and the towering peak of Tahjindong (1,280m), the highest point in Bangladesh. The region is home to a mosaic of ethnic communities including the Marma, Chakma, Bawm, and Mro tribes, each with their own distinct traditions, beadwork, and weaving. Visit the golden Buddha statue at Golden Temple, trek to Nafakhum waterfall, and experience a night in a tribal village homestay under a sky full of stars.",
    image: `${base}1441974231531-c6227db76b6e?w=800&q=80`,
    gallery: [
      `${base}1441974231531-c6227db76b6e?w=1200&q=80`,
      `${base}1472214103451-9374bd1c798e?w=800&q=80`,
      `${base}1505228395891-9a51e7e86bf6?w=800&q=80`,
      `${base}1470071459604-3b5ec3a7fe05?w=800&q=80`,
    ],
    rating: 4.8,
    bestTime: "Nov - Feb",
    location: "Bandarban District, Chattogram Division",
    highlights: [
      { icon: "⛰️", title: "Tahjindong Peak", detail: "Conquer Bangladesh's highest peak at 1,280 metres" },
      { icon: "💧", title: "Nafakhum Waterfall", detail: "Trek to the most powerful waterfall in the country" },
      { icon: "🛕", title: "Golden Temple", detail: "Visit the stunning golden Buddha statue atop a hill" },
      { icon: "🏕️", title: "Boga Lake Camp", detail: "Camp beside the serene Boga Lake at 1,200 feet elevation" },
      { icon: "🧵", title: "Tribal Crafts", detail: "Shop for handwoven shawls, bead necklaces, and bamboo baskets" },
      { icon: "🌄", title: "Nilgiri Sunrise", detail: "Wake up to panoramic mountain views from Nilgiri Hills" },
    ],
  },
  {
    name: "Saint Martin's Island",
    slug: "saint-martins-island",
    division: "Chattogram",
    description:
      "Bangladesh's only coral island offering crystal-clear turquoise waters and serene beaches at the southern tip.",
    longDescription:
      "Saint Martin's Island is Bangladesh's only coral island, a tiny tropical paradise floating in the crystal-clear turquoise waters of the Bay of Bengal at the country's southernmost tip. The island is just 8 square kilometres and transforms into a completely different world from the mainland — pristine white-sand beaches, vibrant coral reefs visible through transparent water, and a pace of life that slows to the rhythm of the waves. Take a boat to the uninhabited Chetra Dwip for untouched beauty, go snorkelling among the corals, feast on freshly grilled seafood under the stars, and witness the magical bioluminescence that appears on moonless nights. The island closes to visitors during the monsoon, making it an exclusive winter-only gem.",
    image: `${base}1506929562872-bb421503ef21?w=800&q=80`,
    gallery: [
      `${base}1506929562872-bb421503ef21?w=1200&q=80`,
      `${base}1507525428034-b723cf961d3e?w=800&q=80`,
      `${base}1504681869696-d977211a5f4c?w=800&q=80`,
      `${base}1530053969600-caed2396652a?w=800&q=80`,
    ],
    rating: 4.6,
    bestTime: "Nov - Apr",
    location: "Teknaf Upazila, Cox's Bazar District",
    highlights: [
      { icon: "🐠", title: "Coral Snorkelling", detail: "Explore vibrant coral reefs in crystal-clear waters" },
      { icon: "🏝️", title: "Chetra Dwip", detail: "Take a boat trip to the pristine uninhabited island" },
      { icon: "🦞", title: "Beach BBQ", detail: "Grill fresh lobster and fish on the sand under the stars" },
      { icon: "🌊", title: "Turquoise Waters", detail: "Swim in the clearest sea water Bangladesh has to offer" },
      { icon: "✨", title: "Bioluminescence", detail: "See the sea glow on dark moonless nights" },
      { icon: "🛶", title: "Traditional Boat Ride", detail: "Cross the Naf River on a local wooden trawler" },
    ],
  },
  {
    name: "Rangamati",
    slug: "rangamati",
    division: "Chattogram",
    description:
      "The lake district of the hill tracts with the vast Kaptai Lake, hanging bridges, and tribal culture.",
    longDescription:
      "Rangamati, the 'Lake City' of Bangladesh, is a mesmerising district built around the vast Kaptai Lake — the largest artificial lake in the country, spanning across rolling green hills. The town is the cultural heartland of the Chittagong Hill Tracts, home to 13 distinct tribal communities including the Chakma, Marma, Tripura, and Pangkhua peoples. Cross the iconic Hanging Bridge (Jhulonto Bridge) swaying over the emerald lake, visit the Tribal Cultural Institute to learn about indigenous heritage, and take a boat cruise through the serene waterways dotted with tiny islands. The Shapla Square, Rajbari Palace, and vibrant weekly bazaars offer unique cultural experiences found nowhere else in Bangladesh.",
    image: `${base}1472214103451-9374bd1c798e?w=800&q=80`,
    gallery: [
      `${base}1472214103451-9374bd1c798e?w=1200&q=80`,
      `${base}1441974231531-c6227db76b6e?w=800&q=80`,
      `${base}1447752875215-b2761acb3c5d?w=800&q=80`,
      `${base}1505228395891-9a51e7e86bf6?w=800&q=80`,
    ],
    rating: 4.5,
    bestTime: "Oct - Mar",
    location: "Rangamati District, Chattogram Division",
    highlights: [
      { icon: "🌉", title: "Hanging Bridge", detail: "Walk across the iconic swaying bridge over Kaptai Lake" },
      { icon: "⛵", title: "Lake Cruise", detail: "Boat across the vast emerald waters surrounded by hills" },
      { icon: "🏘️", title: "Tribal Villages", detail: "Visit indigenous communities and learn their traditions" },
      { icon: "🎭", title: "Cultural Institute", detail: "Explore the history and art of the Hill Tracts peoples" },
      { icon: "🏛️", title: "Rajbari Palace", detail: "See the historic palace of the Chakma kings" },
      { icon: "🧶", title: "Handloom Weaving", detail: "Watch artisans weave intricate tribal textiles" },
    ],
  },
  {
    name: "Jaflong",
    slug: "jaflong",
    division: "Sylhet",
    description:
      "Famous for its stone collection and scenic beauty on the banks of the river Piyain, with the Dauki waterfalls nearby.",
    longDescription:
      "Jaflong is a picturesque hill station nestled at the foot of the Meghalaya hills on the Bangladesh-India border, famous for its pristine natural beauty and the crystal-clear Piyain River. The area is known for its unique stone collection — workers haul smooth river stones from the riverbed — and the dramatic Dauki Waterfalls cascading down from the Indian hills. The landscape is a stunning mix of rolling tea gardens, bamboo groves, rocky riverbeds, and lush subtropical forests. You can wade through the shallow, boulder-strewn river, visit the cross-border bridge at Tamabil, and enjoy the cool mountain mist that rolls down the valleys each morning.",
    image: `${base}1505228395891-9a51e7e86bf6?w=800&q=80`,
    gallery: [
      `${base}1505228395891-9a51e7e86bf6?w=1200&q=80`,
      `${base}1501854140801-50d01698950b?w=800&q=80`,
      `${base}1470071459604-3b5ec3a7fe05?w=800&q=80`,
      `${base}1447752875215-b2761acb3c5d?w=800&q=80`,
    ],
    rating: 4.4,
    bestTime: "Nov - Feb",
    location: "Gowainghat Upazila, Sylhet District",
    highlights: [
      { icon: "💧", title: "Dauki Waterfalls", detail: "Watch water cascade dramatically from the Meghalaya hills" },
      { icon: "🪨", title: "Piyain River Stones", detail: "See the unique stone-collecting process in the river" },
      { icon: "🍵", title: "Tea Gardens", detail: "Walk through misty tea estates at the foot of the hills" },
      { icon: "🌊", title: "Crystal River", detail: "Wade through the shallow, crystal-clear Piyain River" },
      { icon: " bamboo", title: "Bamboo Forests", detail: "Explore dense bamboo groves along the riverbanks" },
      { icon: "🏔️", title: "Cross-Border View", detail: "See the India-Bangladesh border at Tamabil crossing" },
    ],
  },
  {
    name: "Ratargul",
    slug: "ratargul",
    division: "Sylhet",
    description:
      "A unique freshwater swamp forest where the trees grow from the water, best explored by rowboat.",
    longDescription:
      "Ratargul is a one-of-a-kind freshwater swamp forest — one of the only ones in South Asia — where towering trees rise directly from the still, mirror-like waters of the Gowainghat River. During the monsoon, the entire forest floor is submerged, creating a magical world where you can row a boat through submerged tree trunks and lush green canopies reflected perfectly on the water's surface. The forest is home to diverse aquatic life, water snakes, kingfishers, and other bird species. The experience of drifting silently through this flooded forest, with shafts of light filtering through the canopy above, is ethereal and unlike anything else in Bangladesh.",
    image: `${base}1447752875215-b2761acb3c5d?w=800&q=80`,
    gallery: [
      `${base}1447752875215-b2761acb3c5d?w=1200&q=80`,
      `${base}1470071459604-3b5ec3a7fe05?w=800&q=80`,
      `${base}1501854140801-50d01698950b?w=800&q=80`,
      `${base}1472214103451-9374bd1c798e?w=800&q=80`,
    ],
    rating: 4.3,
    bestTime: "Monsoon",
    location: "Gowainghat Upazila, Sylhet District",
    highlights: [
      { icon: "🚣", title: "Boat Through Trees", detail: "Row through a forest where trees grow from the water" },
      { icon: "🪞", title: "Mirror Reflections", detail: "See the canopy perfectly reflected on the still water" },
      { icon: "🦅", title: "Birdwatching", detail: "Spot kingfishers, herons, and other water birds" },
      { icon: "🐍", title: "Aquatic Wildlife", detail: "Observe water snakes and fish from your boat" },
      { icon: "🌧️", title: "Monsoon Magic", detail: "Visit during rains when the forest is fully submerged" },
      { icon: "🌿", title: "Submerged Canopy", detail: "Drift under a lush green ceiling of ancient trees" },
    ],
  },
  {
    name: "Kuakata",
    slug: "kuakata",
    division: "Barishal",
    description:
      "Rare panoramic beach where you can watch both the sunrise and sunset over the Bay of Bengal.",
    longDescription:
      "Kuakata is one of the rarest panoramic beaches in the world — a 18-kilometre-long stretch of golden sand where you can watch both the sunrise and sunset over the Bay of Bengal without moving from your spot. The beach is flanked by the RF Coconut Plantation and Rakhine (Mog) tribal villages, adding a unique cultural dimension to the natural beauty. The Rakhine people have lived here for centuries and maintain their distinct Buddhist traditions, festivals, and cuisine. Kuakata is also home to the murky green Kuakata Lake, the mystical Gangamati and Fatrar Char (coastal forests), and a vivid night sky that makes it perfect for stargazing. The sunrise from the eastern end and sunset from the western end are both iconic experiences.",
    image: `${base}1507525428034-b723cf961d3e?w=800&q=80`,
    gallery: [
      `${base}1507525428034-b723cf961d3e?w=1200&q=80`,
      `${base}1519046904884-53103b34b206?w=800&q=80`,
      `${base}1530053969600-caed2396652a?w=800&q=80`,
      `${base}1504681869696-d977211a5f4c?w=800&q=80`,
    ],
    rating: 4.5,
    bestTime: "Nov - Mar",
    location: "Kuakata, Patuakhali District, Barishal Division",
    highlights: [
      { icon: "🌅", title: "Sunrise & Sunset", detail: "Watch both from the same 18 km stretch of beach" },
      { icon: "🌴", title: "Gangamati Char", detail: "Explore the mystical coastal forest of driftwood" },
      { icon: "🏚️", title: "Rakhine Village", detail: "Visit Buddhist villages with ancient cultural traditions" },
      { icon: "🥥", title: "Coconut Plantation", detail: "Walk through the endless RF Coconut groves lining the beach" },
      { icon: "🌙", title: "Night Sky", detail: "Stargaze on the dark, pollution-free beach at night" },
      { icon: "🐟", title: "Fresh Seafood", detail: "Enjoy authentic Rakhine-style seafood dishes" },
    ],
  },
  {
    name: "Bagerhat",
    slug: "bagerhat",
    division: "Khulna",
    description:
      "Home to the historic Sixty Dome Mosque, a UNESCO World Heritage site of medieval architecture.",
    longDescription:
      "Bagerhat is a treasure trove of medieval Islamic architecture, best known as the home of the iconic Sixty Dome Mosque (Shat Gombuj Masjid) — a UNESCO World Heritage Site and one of the largest mosques from the Sultanate period in Bengal. Founded in the 15th century by Khan Jahan Ali, a legendary saint and ruler, the city is dotted with over 360 historic structures including mosques, tombs, bridges, and ponds. The Sixty Dome Mosque, despite its name, actually has 77 domes and 60 stone pillars, all built without mortar. Visit the serene tomb of Khan Jahan Ali surrounded by a sacred tank, explore the remote mosques hidden in the mangrove-fringed countryside, and witness the blend of history and faith that defines this ancient city.",
    image: `${base}1477959858617-67f85cf4f1df?w=800&q=80`,
    gallery: [
      `${base}1477959858617-67f85cf4f1df?w=1200&q=80`,
      `${base}1518005020951-eccb494ad742?w=800&q=80`,
      `${base}1500530855697-b586d89ba3ee?w=800&q=80`,
      `${base}1470071459604-3b5ec3a7fe05?w=800&q=80`,
    ],
    rating: 4.6,
    bestTime: "Nov - Feb",
    location: "Bagerhat District, Khulna Division",
    highlights: [
      { icon: "🕌", title: "Sixty Dome Mosque", detail: "Marvel at the UNESCO World Heritage Sultanate-era mosque" },
      { icon: "🛕", title: "Khan Jahan Ali Tomb", detail: "Visit the sacred tomb surrounded by a giant stone tank" },
      { icon: "🏛️", title: "360+ Monuments", detail: "Explore centuries-old mosques and historic structures" },
      { icon: "🌉", title: "Rupbati Bridge", detail: "See the medieval stone bridge over the river" },
      { icon: "🐊", title: "Riverside Mangroves", detail: "Take a boat trip through the Sundarbans fringe" },
      { icon: "📿", title: "Living Heritage", detail: "Experience centuries of unbroken Islamic scholarly tradition" },
    ],
  },
  {
    name: "Lalbagh Fort",
    slug: "lalbagh-fort",
    division: "Dhaka",
    description:
      "An incomplete 17th-century Mughal fort complex in the heart of Old Dhaka, a must-visit history landmark.",
    longDescription:
      "Lalbagh Fort is a stunning 17th-century Mughal fortification standing proudly in the heart of Old Dhaka, a testament to the grandeur of Mughal architecture in Bengal. Commissioned in 1678 by Prince Muhammad Azam and later completed under Governor Shaista Khan, the fort remains officially incomplete — legend says it was abandoned after the mysterious death of Pari Bibi (the governor's daughter), whose ornate marble tomb remains the centrepiece of the complex. Within the massive walls you'll find the Diwan-i-Aam (Hall of Audience), the Hammam (royal bath), two mosques, and beautifully maintained gardens with fountains. The fort offers a fascinating window into Mughal court life and is a photographer's paradise, especially during the golden hour when the terracotta walls glow in warm light.",
    image: `${base}1518005020951-eccb494ad742?w=800&q=80`,
    gallery: [
      `${base}1518005020951-eccb494ad742?w=1200&q=80`,
      `${base}1477959858617-67f85cf4f1df?w=800&q=80`,
      `${base}1500530855697-b586d89ba3ee?w=800&q=80`,
      `${base}1472214103451-9374bd1c798e?w=800&q=80`,
    ],
    rating: 4.4,
    bestTime: "All Year",
    location: "Lalbagh, Old Dhaka, Dhaka Division",
    highlights: [
      { icon: "🏰", title: "Mughal Architecture", detail: "Explore the red sandstone walls and ornate carvings" },
      { icon: "🗼", title: "Pari Bibi's Tomb", detail: "See the stunning white marble tomb at the fort's heart" },
      { icon: "🚿", title: "Royal Hammam", detail: "Tour the elaborately designed Mughal royal bath" },
      { icon: "🕌", title: "Two Mosques", detail: "Visit the South and North mosques within the fort walls" },
      { icon: "🌿", title: "Fort Gardens", detail: "Stroll through manicured Mughal-style gardens" },
      { icon: "📸", title: "Golden Hour", detail: "Photograph the terracotta walls glowing at sunset" },
    ],
  },
  {
    name: "Paharpur",
    slug: "paharpur",
    division: "Rajshahi",
    description:
      "The ancient Buddhist vihara of Somapura Mahavihara, one of the most important archaeological sites in South Asia.",
    longDescription:
      "Paharpur is home to the magnificent Somapura Mahavihara, a UNESCO World Heritage Site and one of the most important archaeological discoveries in South Asia. Built in the 8th century by the Pala king Dharmapala, this was the largest Buddhist monastery south of the Himalayas — a sprawling complex of 177 monks' cells arranged around a central courtyard, with a towering 100-foot cruciform temple at its heart. The intricate terracotta plaques depicting Buddhist, Hindu, and Jain themes cover every surface of the temple, offering a remarkable window into the religious and artistic traditions of ancient Bengal. Standing on the summit of this ancient structure, gazing over the surrounding paddy fields and red-brick ruins, you can feel the immense weight of over a thousand years of spiritual history.",
    image: `${base}1500530855697-b586d89ba3ee?w=800&q=80`,
    gallery: [
      `${base}1500530855697-b586d89ba3ee?w=1200&q=80`,
      `${base}1518005020951-eccb494ad742?w=800&q=80`,
      `${base}1477959858617-67f85cf4f1df?w=800&q=80`,
      `${base}1470071459604-3b5ec3a7fe05?w=800&q=80`,
    ],
    rating: 4.5,
    bestTime: "Nov - Feb",
    location: "Naogaon District, Rajshahi Division",
    highlights: [
      { icon: "🏛️", title: "Somapura Vihara", detail: "Explore the ruins of the largest Buddhist monastery in South Asia" },
      { icon: "🎨", title: "Terracotta Art", detail: "Admire thousands of intricate plaques on every temple surface" },
      { icon: "🕍", title: "177 Monk Cells", detail: "Walk through the remains of the monks' quarters" },
      { icon: "📊", title: "Museum", detail: "See artefacts discovered during the archaeological excavation" },
      { icon: "🌾", title: "Paddy Fields", detail: "Enjoy panoramic views of the rural Bangladeshi countryside" },
      { icon: " UNESCO", title: "World Heritage", detail: "Learn about the site's significance in world history" },
    ],
  },
];

export const tourTypes: TourType[] = [
  {
    name: "Beach & Coastal",
    description: "Relax on pristine beaches from Cox's Bazar to Saint Martin's Island.",
    icon: "🏖️",
  },
  {
    name: "Adventure & Trekking",
    description: "Trek through the green hills and trails of the Chittagong Hill Tracts.",
    icon: "🥾",
  },
  {
    name: "Nature & Wildlife",
    description: "Encounter Bengal tigers, forests, and unique ecosystems in the Sundarbans.",
    icon: "🐅",
  },
  {
    name: "Tea & Hill Stations",
    description: "Wander through endless tea gardens and misty hills of Sylhet.",
    icon: "🍃",
  },
  {
    name: "Heritage & Culture",
    description: "Step back in time at mosques, temples, forts, and archaeological wonders.",
    icon: "🏛️",
  },
  {
    name: "River & Cruise",
    description: "Cruise the mighty rivers and understand life along Bangladesh's waterways.",
    icon: "🛶",
  },
];

export const packages: TourPackage[] = [
  {
    title: "Classic Cox's Bazar Getaway",
    type: "Beach & Coastal",
    duration: "3 Days / 2 Nights",
    groupSize: "2 - 20 people",
    price: 8500,
    oldPrice: 10500,
    image: `${base}1507525428034-b723cf961d3e?w=800&q=80`,
    highlights: ["World's longest sea beach", "Himchori waterfalls", "Inani beach sunset", "Marine drive cruise"],
    popular: true,
  },
  {
    title: "Sundarbans Safari Expedition",
    type: "Nature & Wildlife",
    duration: "4 Days / 3 Nights",
    groupSize: "4 - 12 people",
    price: 16500,
    image: `${base}1470071459604-3b5ec3a7fe05?w=800&q=80`,
    highlights: ["Royal Bengal Tiger spotting", "Boat cruise on canals", "Kotka & Katka beaches", "Guided forest walk"],
    popular: true,
  },
  {
    title: "Sylhet Tea Valley Escape",
    type: "Tea & Hill Stations",
    duration: "3 Days / 2 Nights",
    groupSize: "2 - 15 people",
    price: 9800,
    image: `${base}1501854140801-50d01698950b?w=800&q=80`,
    highlights: ["Seven Layers Tea tasting", "Ratargul swamp forest", "Jaflong & Dauki falls", "Lawachara rainforest"],
  },
  {
    title: "Bandarban Hills Trek",
    type: "Adventure & Trekking",
    duration: "4 Days / 3 Nights",
    groupSize: "4 - 10 people",
    price: 14500,
    image: `${base}1441974231531-c6227db76b6e?w=800&q=80`,
    highlights: ["Nilgiri viewpoint", "Nafakhum waterfall", "Boga lake", "Bawm village culture"],
    popular: true,
  },
  {
    title: "Heritage Trail: Dhaka & Bagerhat",
    type: "Heritage & Culture",
    duration: "2 Days / 1 Night",
    groupSize: "2 - 25 people",
    price: 7200,
    image: `${base}1477959858617-67f85cf4f1df?w=800&q=80`,
    highlights: ["Lalbagh Fort", "Sixty Dome Mosque", "Star Mosque", "Ahsan Manzil tour"],
  },
  {
    title: "Saint Martin's Island Retreat",
    type: "Beach & Coastal",
    duration: "3 Days / 2 Nights",
    groupSize: "2 - 12 people",
    price: 12400,
    image: `${base}1506929562872-bb421503ef21?w=800&q=80`,
    highlights: ["Coral island beaches", "Snorkeling & boat tour", "Chetra Dwip visit", "Fresh seafood BBQ"],
  },
];

export const schedules: ScheduleItem[] = [
  { date: "Sep 12, 2026", title: "Sundarbans Safari", destination: "Sundarbans, Khulna", duration: "4D / 3N", spotsLeft: 6, price: 16500 },
  { date: "Sep 20, 2026", title: "Cox's Bazar Getaway", destination: "Cox's Bazar", duration: "3D / 2N", spotsLeft: 12, price: 8500 },
  { date: "Oct 05, 2026", title: "Sylhet Tea Valley", destination: "Srimangal, Sylhet", duration: "3D / 2N", spotsLeft: 9, price: 9800 },
  { date: "Oct 18, 2026", title: "Bandarban Hills Trek", destination: "Bandarban", duration: "4D / 3N", spotsLeft: 4, price: 14500 },
  { date: "Nov 02, 2026", title: "Heritage Trail", destination: "Dhaka & Bagerhat", duration: "2D / 1N", spotsLeft: 18, price: 7200 },
  { date: "Nov 15, 2026", title: "Saint Martin's Retreat", destination: "Saint Martin's Island", duration: "3D / 2N", spotsLeft: 7, price: 12400 },
  { date: "Dec 01, 2026", title: "Rangamati Lake Cruise", destination: "Rangamati", duration: "3D / 2N", spotsLeft: 15, price: 11200 },
  { date: "Dec 25, 2026", title: "Christmas Beach Special", destination: "Cox's Bazar", duration: "4D / 3N", spotsLeft: 10, price: 11800 },
];

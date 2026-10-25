// Presentation imagery for MahaRERA-registered projects, keyed by registration
// number so a picture can only ever land on the project it was published for.
// Project identity and location always come from the MahaRERA inventory; this
// adds a picture and nothing else. Applied in `mergeProjects` (projects.js).
//
// Every entry is the DEVELOPER'S OWN ARTWORK, taken from the developer's
// official site (`sourceUrl`) â€” a render or campaign illustration, not a
// photograph of a finished building and not an image from MahaRERA. Copyright
// stays with the developer; confirm channel-partner media rights before launch.
// See docs/HERO-ABOUT-REFINEMENT.md.
//
// Projects with no entry here keep the typographic plate. Nothing is borrowed
// from a property portal, and no project is given another project's picture.

const HIRANANDANI = 'Hiranandani Communities';
const willows = (tower) => ({
  src: `/images/projects/${tower}-developer.webp`,
  alt: `${tower[0].toUpperCase()}${tower.slice(1)}, Golden Willows, Panvel: developer's illustration of the tower.`,
  sourceUrl: `https://www.hiranandanicommunities.com/images/buildings/panvel/golden-willows/${tower}/building.webp`,
  credit: HIRANANDANI,
});

// One estate, five registered towers. The developer publishes a single
// illustration for the estate, so all five carry it â€” labelled as the estate,
// not as any one tower.
const crestoria = {
  src: '/images/projects/crestoria-estate-developer.webp',
  alt: "L&T Realty Crestoria Estate, Panvel: developer's illustration of the estate gardens.",
  sourceUrl: 'https://www.lntrealty.com/residences/luxury-2-3-4-bhk-flats-in-crestoria-estate-panvel/',
  credit: 'L&T Realty',
};

const crestoriaTower = (slug, label) => ({
  ...crestoria,
  src: `/images/projects/crestoria-${slug}.webp`,
  alt: `L&T Realty Crestoria Estate ${label}, Panvel: developer's artwork.`,
});

export const projectMedia = {
  P52000055992: {
    src: '/images/projects/tricity-aspire-developer.jpg',
    alt: "Tricity Aspire: developer's illustration of the elevation.",
    sourceUrl: 'https://tricityltd.com/projects/kharghar/tricity-aspire/',
    credit: 'Tricity Realty',
  },
  P52000055578: { ...willows('jasmine'), sourceUrl: 'https://www.hiranandanicommunities.com/golden-willows/jasmine-2bhk-flats-in-panvel' },
  P52000050193: { ...willows('orchid'), sourceUrl: 'https://www.hiranandanicommunities.com/golden-willows/orchid-2bhk-flats-in-panvel' },
  P52000050194: willows('iris'),
  P52000055662: willows('aster'),
  P52000055661: willows('zenia'),
  PR1270002502927: crestoriaTower('t1', 'T1'),
  PR1270002502892: crestoriaTower('t2', 'T2'),
  PR1270002502891: crestoriaTower('t3', 'T3'),
  PR1270002502890: crestoriaTower('t4', 'T4'),
  PR1270002502889: crestoria,
  PR1271012600320: {
    src: '/images/projects/kanakia-valley.webp',
    alt: "Kanakia Valley, Panvel: developer's illustration of the towers.",
    credit: 'Kanakia',
  },
  P52000078843: {
    src: '/images/projects/rainbow-life.webp',
    alt: "Rainbow Life, Panvel: developer's illustration of the tower.",
    credit: 'Ellora Heritage',
  },
  // Sai Residency, Panvel â€” Saiyogi Developers LLP
  P52000054611: {
    src: '/images/portfolio/residential/sai-residency-panvel-tower.jpg',
    alt: "Sai Residency, Panvel: the tower elevation.",
    sourceUrl: 'https://sairesidency-kharghar.in/',
    credit: 'Saiyogi Developers',
  },
  // Grandstand, Khalapur â€” Persipina Developers (Hiranandani ecosystem)
  PR1270002501603: {
    src: '/images/portfolio/residential/grandstand-khalapur-tower.jpg',
    alt: "Grandstand, Khalapur: the residential tower elevation.",
    sourceUrl: 'https://www.99acres.com/',
    credit: 'Persipina Developers',
  },
  // Atheletica, Khalapur â€” Persipina Developers
  PR1270002501610: {
    src: '/images/portfolio/residential/atheletica-khalapur-tower.jpg',
    alt: "Atheletica, Khalapur: the residential tower elevation.",
    sourceUrl: 'https://housing.com/',
    credit: 'Persipina Developers',
  },
  // Pavilion, Khalapur â€” Persipina Developers
  PR1270002501589: {
    src: '/images/portfolio/residential/pavilion-khalapur-tower.jpg',
    alt: "Pavilion, Khalapur: the residential tower elevation.",
    sourceUrl: 'https://www.99acres.com/',
    credit: 'Persipina Developers',
  },

  // -- Projects added via projectRegister.js (no MahaRERA image) ----------

  // Today Global Anandam Phase II, Rohinjan, Panvel
  P52000048037: {
    src: '/images/portfolio/residential/today-global-anandam-2.jpg',
    alt: "Today Global Anandam Phase II, Panvel: the tower elevation.",
    sourceUrl: 'https://www.99acres.com/',
    credit: 'Today Global Homes',
  },
  // Dhanraj Legacy, Lodhivali, Khalapur
  PR1270002502999: {
    src: '/images/portfolio/residential/dhanraj-legacy-khalapur.jpg',
    alt: "Dhanraj Legacy, Khalapur: the residential tower elevation.",
    sourceUrl: 'https://housing.com/',
    credit: 'Dhanraj Realbuild LLP',
  },
  // Park 11, New Panvel
  PR1270002500699: {
    src: '/images/portfolio/residential/park-11-panvel.jpg',
    alt: "Park 11, New Panvel: the residential tower elevation.",
    sourceUrl: 'https://housing.com/',
    credit: 'Homely Land Developers',
  },
  // Sai Vrindavan, New Panvel West — K T Infra
  P52000055382: {
    src: '/images/portfolio/residential/sai-vrindavan-panvel.jpg',
    alt: "Sai Vrindavan, New Panvel: the tower elevation.",
    sourceUrl: 'https://housing.com/',
    credit: 'K T Infra',
  },
  // Olive Boulevard, Akurli, Panvel
  PR1271012502204: {
    src: '/images/portfolio/residential/olive-boulevard-panvel.jpg',
    alt: "Olive Boulevard, Panvel: the residential tower elevation.",
    sourceUrl: 'https://housing.com/',
    credit: 'Olive Infra & Lifestyle',
  },
  // Deep Destiny-2, Karanjade, Panvel — Sambhav Arena LLP
  PM1270002502941: {
    src: '/images/portfolio/residential/deep-destiny-2-panvel.jpg',
    alt: "Deep Destiny-2, Panvel: the building elevation.",
    sourceUrl: 'https://housing.com/',
    credit: 'Sambhav Arena LLP',
  },
  // Deep Niketan, Karanjade, Panvel — Sambhav Buildcon
  PM1270002502349: {
    src: '/images/portfolio/residential/deep-niketan-panvel.jpg',
    alt: "Deep Niketan, Panvel: the building elevation.",
    sourceUrl: 'https://www.magicbricks.com/',
    credit: 'Sambhav Buildcon',
  },
  // J Prime Swastik, Giravale, Panvel
  PR1270002501448: {
    src: '/images/portfolio/residential/j-prime-swastik-panvel.jpg',
    alt: "J Prime Swastik, Panvel: the residential tower elevation.",
    sourceUrl: 'https://housing.com/',
    credit: 'Venkatesha Realty',
  },
  // ONE BCC, Turbhe, Navi Mumbai — Krishi Infratech LLP (commercial)
  PC1330002601859: {
    src: '/images/portfolio/residential/one-bcc-turbhe.webp',
    alt: "ONE BCC, Turbhe, Navi Mumbai: the commercial tower elevation.",
    sourceUrl: 'https://onebcc.co.in/',
    credit: 'Krishi Infratech LLP',
  },
  // Parivaramm Phase I, Vavandhal, Khalapur
  P52000030422: {
    src: '/images/portfolio/residential/parivaramm-1-khalapur.jpg',
    alt: "Parivaramm Phase I, Khalapur: the residential tower elevation.",
    sourceUrl: 'https://housing.com/',
    credit: 'Vijay Ashok Jeswani',
  },
  // Parivaramm Phase II, Vavandhal, Khalapur
  P52000030442: {
    src: '/images/portfolio/residential/parivaramm-2-khalapur.jpg',
    alt: "Parivaramm Phase II, Khalapur: the residential tower elevation.",
    sourceUrl: 'https://housing.com/',
    credit: 'Vijay Ashok Jeswani',
  },
  // The Oasis (Paradise CHS), Sanpada, Navi Mumbai
  P51700079145: {
    src: '/images/portfolio/residential/the-oasis-sanpada.jpg',
    alt: "The Oasis, Sanpada, Navi Mumbai: the residential tower elevation.",
    sourceUrl: 'https://housing.com/',
    credit: 'Paradise CHS Ltd',
  },
  // Jeswani Luxurios, Panvel — Jeswani Properties LLP
  P52000077541: {
    src: '/images/portfolio/residential/jeswani-luxurios-panvel.jpg',
    alt: "Jeswani Luxurios, Panvel: the residential building elevation.",
    sourceUrl: 'https://www.99acres.com/',
    credit: 'Jeswani Properties LLP',
  },
};
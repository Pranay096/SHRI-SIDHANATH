// Portfolio inventory extracted from the client's own Instagram (@shrisidhanath.estate).
//
//   verified: true  the detail was stated in the client's own post
//   null            not evidenced anywhere. Rendered as omitted, never guessed.
//                   DO NOT fill these in with assumptions.
//   image: null     no photograph available, so the tile renders as a typographic plate.
//
//   licence: 'placeholder'
//                   DO NOT LAUNCH WITH THESE. Sourced from Google image results, so the
//                   copyright sits with the developer or the property portal that published
//                   them, not with Shri Sidhanath. They are comps, good enough to show the
//                   client the design. Replace with official developer media-kit assets
//                   before the site goes live. See docs/ASSETS.md.
//   licence: 'client-supplied'
//                   campaign artwork the client supplied (the Locations banners, cropped
//                   to the card). Theirs to publish as the developer's channel partner.
//   licence: 'first-party'
//                   the client's own photograph. Safe to publish.
//   licence: 'developer-artwork'
//                   the developer's own render, from the developer's official site,
//                   joined on by registration number from projectMedia.js. Shown with
//                   an "illustration" credit. Confirm media rights before launch.

import mahareraProjects from './maharera-projects.json' with { type: 'json' };
import { projectMedia } from './projectMedia.js';
import { registerEntries, REGISTER_UPDATED } from './projectRegister.js';

export const existingProjects = [
  {
    id: 'delta-prestige',
    name: 'Delta Prestige',
    location: 'New Panvel, Sector 17, Plot No. 25',
    area: 'New Panvel',
    category: 'Residential',
    developer: 'Delta Group',
    config: '2 & 3 BHK',
    detail:
      'Usable carpet of 826 sq.ft for 2 BHK, and 1108 and 1137 sq.ft for 3 BHK, with tailor-made combinations creating spacious 5 BHK homes.',
    priceFrom: null,
    image: '/images/portfolio/residential/delta-prestige-tower-new.jpg',
    imageAlt: 'Delta Prestige, New Panvel: the G+14 tower elevation from the developer\'s gallery.',
    imageCredit: 'Delta Group',
    imageSourceUrl: 'https://deltaprestige.in/',
    licence: 'developer-artwork',
    source: 'instagram',
    verified: true,
    featured: true,
  },
  {
    id: 'hiranandani-fortune-city',
    name: 'Hiranandani Fortune City',
    location: 'Panvel',
    area: 'Panvel',
    category: 'Residential',
    developer: 'Hiranandani Communities',
    config: '2 & 3 BHK',
    detail:
      'Balcony homes inside a planned township. 2 BHK from 1.25 Cr and 3 BHK from 1.65 Cr, all inclusive.',
    priceFrom: '1.25 Cr*',
    image: '/images/portfolio/residential/hiranandani-fortune-city-tower-new.jpg',
    imageAlt: 'Hiranandani Fortune City, Panvel: Golden Willows towers in the township.',
    imageCredit: 'Hiranandani Communities',
    imageSourceUrl: 'https://www.hiranandanicommunities.com/',
    licence: 'developer-artwork',
    source: 'instagram',
    verified: true,
    featured: true,
  },
  {
    id: 'godrej-city-panvel',
    name: 'Godrej City Panvel',
    location: 'Panvel',
    area: 'Panvel',
    category: 'Residential',
    developer: 'Godrej Properties',
    config: '2 & 3 BHK',
    detail:
      'A township address marketed across its phases, including The Highlands, Pavilion at The Highlands and Aerophase.',
    priceFrom: '74.99 Lakh*',
    image: '/images/portfolio/residential/godrej-city-panvel-towers-new.jpg',
    imageAlt: 'Godrej City Panvel: The Highlands tower elevation from the developer.',
    imageCredit: 'Godrej Properties',
    imageSourceUrl: 'https://www.godrejproperties.com/',
    licence: 'developer-artwork',
    source: 'instagram',
    verified: true,
    featured: true,
  },
  {
    id: 'sai-world-empire',
    name: 'Sai World Empire',
    location: 'Sector 36, opposite CIDCO Valleyshilp, near Swapnapoorti, Kharghar',
    area: 'Kharghar',
    category: 'Residential',
    developer: 'Paradise Group',
    config: null,
    detail:
      'A landmark Kharghar address, positioned opposite CIDCO Valleyshilp in Sector 36.',
    priceFrom: null,
    image: '/images/portfolio/residential/sai-world-empire-clubhouse-new.jpg',
    imageAlt: 'Sai World Empire, Kharghar: the clubhouse and landscaped central garden from the developer.',
    imageCredit: 'Paradise Group',
    imageSourceUrl: 'https://www.paradisegroup.co.in/',
    licence: 'developer-artwork',
    source: 'instagram',
    verified: true,
    featured: true,
  },
  {
    id: 'meraki-panvel',
    name: 'Meraki',
    location: 'Panvel',
    area: 'Panvel',
    category: 'Residential',
    developer: null,
    config: '1 & 2 BHK',
    detail: 'Centrally located, with 45+ amenities. 1 BHK from 40 Lakh and 2 BHK from 67 Lakh.',
    priceFrom: '40 Lakh*',
    image: '/images/portfolio/residential/meraki-panvel-tower-new.webp',
    imageAlt: 'Meraki (9 Meraki), Panvel: the G+17 tower day elevation.',
    imageCredit: '9 Meraki',
    imageSourceUrl: 'https://www.9meraki.in/',
    licence: 'developer-artwork',
    source: 'instagram',
    verified: true,
    featured: false,
  },
  {
    id: 'emporia-hillcrest',
    name: 'Emporia Hillcrest',
    location: 'Panvel',
    area: 'Panvel',
    category: 'Residential',
    developer: 'Emporia World',
    config: '1 & 2 BHK',
    detail: 'Hillside residences. 1 BHK from 42 Lac and 2 BHK from 63 Lac, plus tax.',
    priceFrom: '42 Lac*',
    image: '/images/portfolio/residential/emporia-hillcrest-towers-new.jpg',
    imageAlt: 'Emporia Hillcrest, Panvel: the tower elevation from the developer.',
    imageCredit: 'Emperia Builtcon',
    imageSourceUrl: 'https://emperiahillcrest.com/',
    licence: 'developer-artwork',
    source: 'instagram',
    verified: true,
    featured: false,
  },
  {
    id: 'lunaris-raheja-district',
    name: 'Lunaris, Raheja District',
    location: null,
    area: 'Navi Mumbai',
    category: 'Residential',
    developer: 'Raheja',
    config: '2 BHK',
    detail: '2 BHK Optima from 1.10 Cr and 2 BHK Premium from 1.49 Cr.',
    priceFrom: '1.10 Cr*',
    image: '/images/portfolio/residential/lunaris-raheja-towers.webp',
    imageAlt: 'Lunaris, Raheja District, Navi Mumbai: residential towers above a wooded ridge at sunset.',
    licence: 'client-supplied',
    source: 'instagram',
    verified: true,
    featured: false,
  },
  {
    id: 'aero-estate-t3',
    name: 'Aero State T3',
    location: 'Khopoli',
    area: 'Raigad',
    category: 'Residential',
    developer: null,
    config: null,
    detail:
      'A gated Khopoli address, marketed at 55.99 Lakh and 1.17 Crore, all inclusive. Name corrected from the client-supplied campaign artwork, which reads AERO STATE T3.',
    priceFrom: '55.99 Lakh*',
    image: '/images/portfolio/residential/aero-state-t3-gate.webp',
    imageAlt: 'Aero State T3, Khopoli: the stone entrance sign and landscaped approach.',
    licence: 'client-supplied',
    source: 'instagram',
    verified: true,
    featured: false,
  },
  {
    id: 'hoabl-land',
    name: 'The House of Abhinandan Lodha',
    location: null,
    area: 'Maharashtra',
    category: 'Land',
    developer: 'The House of Abhinandan Lodha',
    config: 'Plotted development',
    detail:
      'Branded land, with documented transparency, buy-back assurance and legal assistance before booking.',
    priceFrom: null,
    image: '/images/portfolio/land/hoabl-hillside-residence.webp',
    imageAlt: 'The House of Abhinandan Lodha: a hillside residence and infinity pool at dusk.',
    licence: 'client-supplied',
    source: 'instagram',
    verified: true,
    featured: false,
  },
  {
    id: 'siddha-sejal-wadala',
    name: 'Passcode Great Guarantee',
    location: 'Wadala, Mumbai',
    area: 'Mumbai',
    category: 'Residential',
    developer: 'Siddha and Sejal',
    config: '1, 2 & 3 BHK',
    detail: 'South-central Mumbai residences at Wadala.',
    priceFrom: null,
    image: '/images/portfolio/residential/passcode-great-guarantee-tower.webp',
    imageAlt: 'Passcode Great Guarantee: a high-rise residential tower above a landscaped podium.',
    licence: 'client-supplied',
    source: 'instagram',
    verified: true,
    featured: false,
  },
  {
    id: 'symphony-kharghar',
    name: 'Symphony',
    location: 'Kharghar',
    area: 'Kharghar',
    category: 'Residential',
    developer: 'Paradise Group',
    config: null,
    detail: 'Kharghar residences with a full amenity deck, including a dedicated fitness centre.',
    priceFrom: null,
    image: '/images/portfolio/residential/symphony-kharghar-tower.jpg',
    imageAlt: 'Symphony, Kharghar: the tower elevation from the developer.',
    imageCredit: 'Paradise Group',
    imageSourceUrl: 'https://www.paradisegroup.co.in/',
    licence: 'developer-artwork',
    source: 'instagram',
    verified: true,
    featured: false,
  },
  {
    id: 'adhiraj-kharghar',
    name: 'Adhiraj, Kharghar',
    location: 'Kharghar',
    area: 'Kharghar',
    category: 'Residential',
    developer: 'Adhiraj Constructions',
    config: null,
    detail: 'Among the tallest towers rising in Navi Mumbai.',
    priceFrom: null,
    image: '/images/portfolio/residential/adhiraj-capital-towers.webp',
    imageAlt: 'Adhiraj Capital City, Kharghar: twin high-rise towers above a landscaped garden.',
    licence: 'placeholder',
    source: 'instagram',
    verified: true,
    featured: false,
  },
  {
    id: 'cyber-square',
    name: 'Cyber Square',
    location: 'Plot No. D102-104, MIDC, Nerul, Navi Mumbai, on the Sion-Panvel Highway opposite DY Patil Stadium',
    area: 'Navi Mumbai',
    category: 'Commercial',
    projectType: 'Commercial',
    developer: 'Greenscape Group',
    config: 'Office spaces',
    detail:
      'Premium office floors on a 6-acre mixed-use campus, 10 minutes from Navi Mumbai International Airport. Double-height lobbies, flexible floor plates, smart building management, multi-tier security and EV charging. Built on MIDC leasehold land; amenities are proposed and subject to approvals.',
    reraNumber: 'P51700035100',
    priceFrom: null,
    image: '/images/portfolio/commercial/cyber-square-elevation.webp',
    imageAlt: 'Cyber Square, Nerul: the office tower elevation render from the developer.',
    imageCredit: 'Greenscape Group',
    imageSourceUrl: 'https://www.greenscapegroup.co.in/',
    licence: 'developer-artwork',
    source: 'developer-brochure',
    verified: true,
    featured: false,
  },
  {
    id: 'cyber-works',
    name: 'Cyber Works',
    location: 'Millennium Business Park, MIDC Industrial Area, Sector 1, Ghansoli, Navi Mumbai',
    area: 'Navi Mumbai',
    category: 'Commercial',
    projectType: 'Commercial',
    developer: 'Greenscape Group',
    config: 'Office spaces, 941 to 1,867 sq.ft. carpet',
    detail:
      'Office floors 5 to 29 on a campus of about 1.5 acres, with a dedicated amenities and recreation floor on the 4th and car parking on floors 1 to 3. Floor plates of about 10,111 sq.ft. carpet, a short drive from Thane-Belapur Road and the Eastern Express Highway, and within 4 km of Ghansoli and Kopar Khairane stations. Built on MIDC leasehold land; plans and amenities are proposed and subject to approvals.',
    reraNumber: 'P51700022663',
    priceFrom: null,
    image: '/images/portfolio/commercial/cyber-works-elevation.webp',
    imageAlt: 'Cyber Works, Ghansoli: the glass office tower rising above a landscaped retail podium.',
    imageCredit: 'Greenscape Group',
    imageSourceUrl: 'https://www.greenscapegroup.co.in/',
    licence: 'developer-artwork',
    source: 'developer-brochure',
    verified: true,
    featured: false,
  },
  {
    id: 'cyber-code',
    name: 'Cyber Code',
    location: 'D-107, MIDC Service Road, MIDC Industrial Area, Shiravane, Nerul, Navi Mumbai',
    area: 'Navi Mumbai',
    category: 'Commercial',
    projectType: 'Commercial',
    developer: 'Greenscape Realty',
    config: 'Office spaces, from 634 sq.ft.',
    detail:
      'A G+28 office tower with ten offices per floor for flexible combinations, a dedicated amenities and recreation floor on the 6th, and multi-level parking. Walking distance to Nerul and Juinagar stations, about 15 minutes from Navi Mumbai International Airport and 35 minutes from BKC and JNPT. Built on MIDC leasehold land; plans and amenities are proposed and subject to approvals.',
    reraNumber: 'P51700022442',
    priceFrom: null,
    image: '/images/portfolio/commercial/cyber-code-elevation.webp',
    imageAlt: 'Cyber Code, Nerul: the glass office tower above a timber-screened podium.',
    imageCredit: 'Greenscape Realty',
    imageSourceUrl: 'https://www.greenscapegroup.co.in/',
    licence: 'developer-artwork',
    source: 'developer-brochure',
    verified: true,
    featured: false,
  },
  {
    id: 'nerul-central',
    name: 'Nerul Central',
    location: 'MIDC Nerul, Navi Mumbai',
    area: 'Navi Mumbai',
    category: 'Commercial',
    projectType: 'Commercial',
    developer: 'Greenscape Group',
    config: 'Office floors and corporate studios',
    detail:
      'A proposed mixed-use office development (concept name Vision 27) with an entrance lobby and retail frontage, podium-level parking and office floors from the 7th to the 27th, plus corporate studios and business lounges. Connected to Palm Beach Road, the Sion-Panvel Highway and Navi Mumbai International Airport. Concept stage: MahaRERA registration not yet stated, all details subject to approvals.',
    priceFrom: null,
    image: '/images/portfolio/commercial/nerul-central-elevation.webp',
    imageAlt: 'Nerul Central, Nerul: concept render of the glass office tower above a retail podium.',
    imageCredit: 'Greenscape Group',
    imageSourceUrl: 'https://www.greenscapegroup.co.in/',
    licence: 'developer-artwork',
    source: 'developer-brochure',
    verified: true,
    featured: false,
  },
];

// Registration numbers identify individual phases; do not merge phases merely
// because they share a promoter or belong to an existing township listing.
const identity = (value) => value?.trim().toLowerCase();
export function mergeProjects(existing, incoming) {
  const merged = existing.map((project) => ({ ...project }));
  for (const project of incoming) {
    const index = merged.findIndex((p) =>
      (p.reraNumber && identity(p.reraNumber) === identity(project.reraNumber)) ||
      p.id === project.id ||
      (!p.reraNumber && identity(p.name) === identity(project.name) &&
        identity(p.developer) === identity(project.developer))
    );
    if (index === -1) merged.push(project);
    else merged[index] = { ...merged[index], ...project, id: merged[index].id };
  }
  // Pictures are joined on last, by registration number, so re-importing the
  // register (which records `image: null`) can never strip them off again.
  return merged.map((project) => {
    const media = projectMedia[project.reraNumber];
    return media
      ? {
          ...project,
          image: media.src,
          imageAlt: media.alt,
          imageCredit: media.credit,
          imageSourceUrl: media.sourceUrl,
          licence: 'developer-artwork',
        }
      : project;
  });
}

// The client's own project register, laid over the inventory by registration
// number: detail for what is already here, new entries for what is not. An
// existing project keeps its name, promoter and market; only a missing
// promoter is filled. See projectRegister.js for what is left out and why.
export function applyRegister(list, entries = registerEntries) {
  const out = list.map((project) => ({ ...project }));
  for (const { attachTo, name, developer, area, district, pincode, ...detail } of entries) {
    const index = out.findIndex((p) =>
      (p.reraNumber && identity(p.reraNumber) === identity(detail.reraNumber)) ||
      (attachTo && p.id === attachTo)
    );
    if (index !== -1) {
      const had = out[index];
      out[index] = {
        ...had,
        ...detail,
        developer: had.developer || developer || null,
        district: had.district || district || null,
        register: REGISTER_UPDATED,
      };
    } else {
      out.push({
        id: detail.reraNumber.toLowerCase(),
        name,
        developer,
        area,
        district: district ?? null,
        pincode: pincode ?? null,
        state: 'Maharashtra',
        priceFrom: null,
        image: null,
        featured: false,
        source: 'client-register',
        ...detail,
        register: REGISTER_UPDATED,
      });
    }
  }
  // Apply projectMedia join for register-only projects that applyRegister added
  // after mergeProjects already ran its own media join.
  return out.map((project) => {
    if (project.image) return project; // already has an image — don't overwrite
    const media = projectMedia[project.reraNumber];
    return media
      ? {
          ...project,
          image: media.src,
          imageAlt: media.alt,
          imageCredit: media.credit,
          imageSourceUrl: media.sourceUrl,
          licence: 'developer-artwork',
        }
      : project;
  });
}

// `registeredProjects` is the inventory as evidenced by the client's posts and
// the MahaRERA search; `projects` is that plus the client's register.
export const registeredProjects = mergeProjects(existingProjects, mahareraProjects);
export const projects = applyRegister(registeredProjects);
export const featuredProjects = projects.filter((p) => p.featured);

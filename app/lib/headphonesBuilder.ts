/**
 * Static configuration + pricing engine for the Headphones Builder funnel.
 *
 * This is the TS/Hydrogen equivalent of the Liquid "store builder" section:
 * a multi-step configurator whose selections drive a live price and, on the
 * final step, a Shopify cart line carrying every choice as a line attribute.
 *
 * Everything here is self-contained demo data — no store setup required.
 * Prices are in whole currency units (USD).
 */

const IMG = '/HOME - Headphones Shop';

export type Option = {
  id: string;
  name: string;
  desc: string;
  /** Price added to the running total when selected (USD). */
  price: number;
  image?: string;
  /** Small color swatch for the color step. */
  swatch?: string;
  badge?: string;
};

export type ProductType = Option & {
  /** Original "was" price used to show savings. */
  compareAt: number;
};

/* --------------------------- STEP 1 · Headphone type --------------------------- */
export const PRODUCT_TYPES: ProductType[] = [
  {
    id: 'over-ear',
    name: 'Over-Ear Headphones',
    desc: 'Full-size comfort with room-filling, immersive sound.',
    price: 99,
    compareAt: 139,
    image: `${IMG}/imgi_3_headphones.png`,
  },
  {
    id: 'in-ear',
    name: 'In-Ear Earbuds',
    desc: 'Pocketable true-wireless buds with a secure, all-day fit.',
    price: 79,
    compareAt: 109,
    image: `${IMG}/imgi_49_img-7-400x400.png`,
  },
  {
    id: 'gaming',
    name: 'Gaming Headset',
    desc: 'Low-latency audio and a detachable boom mic for the win.',
    price: 119,
    compareAt: 169,
    image: `${IMG}/imgi_9_img-1.png`,
  },
  {
    id: 'wireless-pro',
    name: 'Wireless Pro Edition',
    desc: 'Our flagship — adaptive ANC, spatial audio and 30h battery.',
    price: 149,
    compareAt: 209,
    image: `${IMG}/imgi_20_headphones-600x637.png`,
    badge: 'Best Seller',
  },
];

/* ------------------------------ STEP 2 · Color ------------------------------ */
export const COLORS: Option[] = [
  {
    id: 'matte-black',
    name: 'Matte Black',
    desc: 'Classic stealth finish.',
    price: 0,
    swatch: '#141414',
    image: `${IMG}/imgi_3_headphones.png`,
  },
  {
    id: 'rose-gold',
    name: 'Rose Gold',
    desc: 'Warm premium accent.',
    price: 15,
    swatch: '#d9a441',
    image: `${IMG}/imgi_27_gold-1.jpg`,
  },
  {
    id: 'forest-green',
    name: 'Forest Green',
    desc: 'Muted, modern tone.',
    price: 10,
    swatch: '#4c8f6b',
    image: `${IMG}/imgi_33_green-1.jpg`,
  },
  {
    id: 'crimson-red',
    name: 'Crimson Red',
    desc: 'Bold signature colour.',
    price: 10,
    swatch: '#e6362a',
    image: `${IMG}/imgi_39_red-1.jpg`,
  },
  {
    id: 'royal-violet',
    name: 'Royal Violet',
    desc: 'Limited edition finish.',
    price: 15,
    swatch: '#8a63d2',
    image: `${IMG}/imgi_45_violet-1.jpg`,
    badge: 'Limited',
  },
];

/* --------------------------- STEP 3 · Sound profile --------------------------- */
export const SOUND_PROFILES: Option[] = [
  {
    id: 'balanced',
    name: 'Balanced',
    desc: 'Natural, reference-grade tuning for everything.',
    price: 0,
  },
  {
    id: 'bass-boost',
    name: 'Bass Boost',
    desc: 'Deep, punchy low-end for hip-hop and EDM.',
    price: 10,
  },
  {
    id: 'studio',
    name: 'Studio / Professional',
    desc: 'Flat, detailed response for mixing and mastering.',
    price: 20,
  },
  {
    id: 'gaming-surround',
    name: 'Gaming Surround 7.1',
    desc: 'Virtual surround for pinpoint positional audio.',
    price: 25,
  },
  {
    id: 'anc-pro',
    name: 'Noise Cancellation Pro',
    desc: 'Adaptive ANC that erases the world around you.',
    price: 30,
    badge: 'Popular',
  },
];

/* ---------------------------- STEP 4 · Accessories ---------------------------- */
export const ACCESSORIES: Option[] = [
  {
    id: 'ear-cushions',
    name: 'Extra Ear Cushions',
    desc: 'A spare set of memory-foam cushions.',
    price: 15,
  },
  {
    id: 'carry-case',
    name: 'Premium Carrying Case',
    desc: 'Hard-shell travel case with cable pocket.',
    price: 25,
  },
  {
    id: 'charging-dock',
    name: 'Wireless Charging Dock',
    desc: 'Drop-and-charge desktop dock.',
    price: 35,
  },
  {
    id: 'warranty',
    name: 'Extended Warranty (2 Years)',
    desc: 'Full coverage for two extra years.',
    price: 20,
  },
  {
    id: 'fast-delivery',
    name: 'Fast Delivery',
    desc: 'Priority express shipping.',
    price: 12,
  },
];

export const STEPS = [
  {id: 1, label: 'Type'},
  {id: 2, label: 'Color'},
  {id: 3, label: 'Sound'},
  {id: 4, label: 'Add-ons'},
  {id: 5, label: 'Review'},
] as const;

export type BuilderSelection = {
  typeId: string;
  colorId: string;
  soundId: string;
  addonIds: string[];
};

export const DEFAULT_SELECTION: BuilderSelection = {
  typeId: PRODUCT_TYPES[0].id,
  colorId: COLORS[0].id,
  soundId: SOUND_PROFILES[0].id,
  addonIds: [],
};

export function findType(id: string) {
  return PRODUCT_TYPES.find((t) => t.id === id) ?? PRODUCT_TYPES[0];
}
export function findColor(id: string) {
  return COLORS.find((c) => c.id === id) ?? COLORS[0];
}
export function findSound(id: string) {
  return SOUND_PROFILES.find((s) => s.id === id) ?? SOUND_PROFILES[0];
}

export type PriceBreakdown = {
  base: number;
  color: number;
  sound: number;
  addons: number;
  total: number;
  compareAt: number;
  savings: number;
};

/** total = base + color + sound + Σ add-ons  (mirrors the Liquid pricing engine) */
export function computePrice(sel: BuilderSelection): PriceBreakdown {
  const type = findType(sel.typeId);
  const color = findColor(sel.colorId);
  const sound = findSound(sel.soundId);
  const addons = sel.addonIds.reduce((sum, id) => {
    const a = ACCESSORIES.find((x) => x.id === id);
    return sum + (a?.price ?? 0);
  }, 0);

  const base = type.price;
  const total = base + color.price + sound.price + addons;
  // Keep the original discount margin from the base product on the full build.
  const compareAt = total + (type.compareAt - type.price);

  return {
    base,
    color: color.price,
    sound: sound.price,
    addons,
    total,
    compareAt,
    savings: Math.max(0, compareAt - total),
  };
}

export const money = (n: number) => `$${n.toFixed(2)}`;

/** Flatten the current selection into Shopify cart line attributes. */
export function selectionToAttributes(sel: BuilderSelection) {
  const type = findType(sel.typeId);
  const color = findColor(sel.colorId);
  const sound = findSound(sel.soundId);
  const addonNames = sel.addonIds
    .map((id) => ACCESSORIES.find((a) => a.id === id)?.name)
    .filter(Boolean)
    .join(', ');
  const {total} = computePrice(sel);

  return [
    {key: 'Headphone Type', value: type.name},
    {key: 'Color', value: color.name},
    {key: 'Sound Profile', value: sound.name},
    {key: 'Accessories', value: addonNames || 'None'},
    {key: 'Configured Total', value: money(total)},
  ];
}

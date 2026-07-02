import {useLoaderData, Link} from 'react-router';
import type {Route} from './+types/_index';
import {useEffect, useRef} from 'react';
import type {FeaturedCollectionFragment} from 'storefrontapi.generated';
import landingStyles from '~/styles/landing.css?url';
import {
  IconSurround,
  IconPosition,
  IconHandsFree,
  IconVoice,
  IconBattery,
  IconWater,
  IconTouch,
  IconWave,
  IconComfort,
  IconCall,
  IconFinger,
  IconPlay,
  IconStar,
  IconCart,
  IconArrow,
  IconTruck,
  IconGlobe,
  IconReturn,
} from '~/components/LandingIcons';

/** Local imagery lives in /public/HOME - Headphones Shop */
const IMG = '/HOME - Headphones Shop';

export const meta: Route.MetaFunction = () => {
  return [
    {title: 'Sound Pro — TWS Air 5 | Premium Wireless Headphones'},
    {
      name: 'description',
      content:
        'Experience wireless freedom and great sound in silence with the Sound Pro TWS Air 5. Up to 30 hours battery, active noise cancelling and fingertip control.',
    },
  ];
};

export function links() {
  return [
    {rel: 'preconnect', href: 'https://fonts.googleapis.com'},
    {
      rel: 'preconnect',
      href: 'https://fonts.gstatic.com',
      crossOrigin: 'anonymous',
    },
    {
      rel: 'stylesheet',
      href: 'https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700;800&display=swap',
    },
    {rel: 'stylesheet', href: landingStyles},
  ];
}

export async function loader(args: Route.LoaderArgs) {
  // The landing page is fully self-contained with local assets, so the
  // storefront query is optional — never let it block or break the render.
  const featuredCollection = await args.context.storefront
    .query(FEATURED_COLLECTION_QUERY)
    .then((res) => res?.collections?.nodes?.[0] ?? null)
    .catch(() => null);

  return {featuredCollection};
}

/**
 * Lightweight scroll-reveal — a single IntersectionObserver watches every
 * element tagged `.reveal` and adds `.is-in` once. No animation library,
 * no per-element listeners, unobserved after firing. Cheap and smooth.
 */
function useReveal() {
  const root = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scope = root.current;
    if (!scope) return;

    const targets = scope.querySelectorAll<HTMLElement>('.reveal');

    if (
      typeof IntersectionObserver === 'undefined' ||
      window.matchMedia('(prefers-reduced-motion: reduce)').matches
    ) {
      targets.forEach((el) => el.classList.add('is-in'));
      return;
    }

    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-in');
            io.unobserve(entry.target);
          }
        }
      },
      {threshold: 0.15, rootMargin: '0px 0px -8% 0px'},
    );

    targets.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  return root;
}

export default function Homepage() {
  const {featuredCollection} = useLoaderData<typeof loader>();
  const root = useReveal();
  const shopHref = featuredCollection
    ? `/collections/${featuredCollection.handle}`
    : '/collections';

  return (
    <div className="lp" ref={root}>
      <Hero shopHref={shopHref} />
      <Ticker />
      <ColorPicker shopHref={shopHref} />
      <FeatureCards />
      <ShowcaseBand />
      <MainFeatures />
      <SmarterBand />
      <TalkAtTouch shopHref={shopHref} />
      <LogoStrip />
      <Reviews />
      <BigBeats />
      <FinalCta shopHref={shopHref} />
      <PerksStrip />
    </div>
  );
}

/* ---------------------------------- Hero ---------------------------------- */
function Hero({shopHref}: {shopHref: string}) {
  return (
    <section className="lp-hero">
      <div className="lp-hero-cut" aria-hidden="true" />
      <div className="lp-hero-dots" aria-hidden="true">
        {Array.from({length: 36}).map((_, i) => (
          <span key={i} />
        ))}
      </div>

      <div className="lp-hero-grid">
        <div className="lp-hero-copy">
          <span className="lp-hero-badge">
            <span className="dot" /> New Drop · 2026
          </span>
          <h1>
            Sound Pro
            <span>TWS Air 5</span>
          </h1>
          <p>
            Wireless freedom and immersive, studio-grade sound in absolute
            silence. Adaptive noise cancelling, 30 hours of battery and
            fingertip control — engineered to move with you.
          </p>
          <div className="lp-hero-cta">
            <Link className="lp-btn" to={shopHref}>
              Shop Now <IconArrow />
            </Link>
            <a className="lp-btn ghost" href="#features">
              Explore Features
            </a>
          </div>
          <div className="lp-hero-stats">
            <div>
              <b>30h</b>
              <small>Battery Life</small>
            </div>
            <div>
              <b>ANC</b>
              <small>Noise Cancel</small>
            </div>
            <div>
              <b>4.9★</b>
              <small>2k+ Reviews</small>
            </div>
          </div>
        </div>

        <div className="lp-hero-visual">
          <div className="lp-hero-halo" aria-hidden="true" />
          <div className="lp-hero-ring" aria-hidden="true" />
          <img
            className="lp-hero-headphones"
            src={`${IMG}/imgi_3_headphones.png`}
            alt="Sound Pro TWS Air 5 wireless headphones"
            width={520}
            height={560}
            // React 18 emits the attribute lowercase
            {...{fetchpriority: 'high'}}
            decoding="async"
          />
        </div>
      </div>

      <div className="lp-scroll-cue" aria-hidden="true" />
    </section>
  );
}

/* --------------------------------- Ticker --------------------------------- */
function Ticker() {
  const items = [
    'Free Worldwide Shipping',
    'Active Noise Cancelling',
    '30 Hours Playtime',
    'Water Resistant',
    'One Touch Listening',
    '2 Year Warranty',
  ];
  const loop = [...items, ...items];
  return (
    <div className="lp-ticker" aria-hidden="true">
      <div className="lp-ticker-track">
        {loop.map((t, i) => (
          <span key={i}>{t}</span>
        ))}
      </div>
    </div>
  );
}

/* ------------------------------ Color picker ------------------------------ */
const COLORS = [
  {
    name: 'Gold Headphones TWS',
    price: '$99.00',
    swatch: '#d9a441',
    img: 'imgi_4_gold-1-300x300.jpg',
  },
  {
    name: 'Green Headphones TWS',
    price: '$99.00',
    swatch: '#4c8f6b',
    img: 'imgi_5_green-1-300x300.jpg',
  },
  {
    name: 'Headphones Red TWS',
    price: '$99.00',
    swatch: '#e6362a',
    img: 'imgi_6_red-1-300x300.jpg',
  },
  {
    name: 'Violet Headphones TWS',
    price: '$94.00',
    swatch: '#8a63d2',
    img: 'imgi_7_violet-1-300x300.jpg',
  },
];

function ColorPicker({shopHref}: {shopHref: string}) {
  return (
    <section className="lp-section">
      <div className="lp-wrap">
        <div className="lp-section-head lp-center reveal">
          <span className="lp-eyebrow">Shop Headphones</span>
          <h2 className="lp-title">
            Choose Your <span className="lp-gradient-text">Color</span>
          </h2>
        </div>
        <div className="lp-colors">
          {COLORS.map((c, i) => (
            <article
              key={c.name}
              className="lp-color-card reveal"
              style={{['--reveal-delay' as string]: `${i * 90}ms`}}
            >
              <span className="swatch" style={{background: c.swatch}} />
              <div className="img-wrap">
                <img
                  src={`${IMG}/${c.img}`}
                  alt={c.name}
                  width={300}
                  height={300}
                  loading="lazy"
                  decoding="async"
                />
              </div>
              <h4>{c.name}</h4>
              <div className="price">{c.price}</div>
              <Link className="lp-btn add" to={shopHref}>
                <IconCart /> Add to Cart
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ------------------------------ Feature cards ----------------------------- */
const FEATURES = [
  {
    icon: <IconSurround />,
    title: 'Surround Sounds',
    text: 'Immersive 360° spatial audio that places you at the centre of every track.',
  },
  {
    icon: <IconPosition />,
    title: 'Position Control',
    text: 'Adaptive drivers auto-tune to your head position for a perfect stage.',
  },
  {
    icon: <IconHandsFree />,
    title: 'Hands-Free',
    text: 'Crystal-clear calls with dual-mic beamforming and echo cancellation.',
  },
  {
    icon: <IconVoice />,
    title: 'Voice Assistant',
    text: 'Summon your assistant instantly with a single touch — no phone needed.',
  },
];

function FeatureCards() {
  return (
    <section className="lp-section" id="features" style={{paddingTop: 0}}>
      <div className="lp-wrap">
        <div className="lp-section-head lp-center reveal">
          <span className="lp-eyebrow">Shop Headphones</span>
          <h2 className="lp-title">
            More Power Even <span className="lp-gradient-text">Less Noise</span>
          </h2>
        </div>
        <div className="lp-features">
          {FEATURES.map((f, i) => (
            <article
              key={f.title}
              className="lp-feature reveal"
              style={{['--reveal-delay' as string]: `${i * 90}ms`}}
            >
              <div className="ic">{f.icon}</div>
              <h4>{f.title}</h4>
              <p>{f.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ------------------------------ Showcase band ----------------------------- */
function ShowcaseBand() {
  return (
    <section className="lp-section" style={{paddingTop: 0}}>
      <div className="lp-wrap reveal">
        <div className="lp-showcase">
          <img
            src={`${IMG}/imgi_51_sound-5-1024x663.jpg`}
            alt="Woman enjoying wireless headphones"
            width={1024}
            height={663}
            loading="lazy"
            decoding="async"
          />
          <div className="lp-showcase-inner">
            <h3>Wireless Freedom, Great Sound in Silence.</h3>
            <button className="lp-play" type="button" aria-label="Play video">
              <IconPlay />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------ Main features ----------------------------- */
const MAIN_FEATURES = [
  {
    icon: <IconBattery />,
    title: 'Up to 30 Hours of Battery Life',
    text: 'All-day power with a fast 10-minute charge for 3 extra hours.',
  },
  {
    icon: <IconWave />,
    title: 'HD Noise Cancelling Processor',
    text: 'A dedicated chip erases the world so only your music remains.',
  },
  {
    icon: <IconTouch />,
    title: 'Control Everything You Like',
    text: 'Play, skip, call and summon your assistant with a tap.',
  },
];

function MainFeatures() {
  return (
    <section className="lp-section" style={{paddingTop: 0}}>
      <div className="lp-wrap">
        <div className="lp-split">
          <div className="lp-split-media contain reveal">
            <div className="blob" aria-hidden="true" />
            <img
              src={`${IMG}/imgi_49_img-7-400x400.png`}
              alt="Side profile of the Sound Pro headphones"
              width={400}
              height={400}
              loading="lazy"
              decoding="async"
            />
          </div>
          <div className="lp-split-copy reveal">
            <span className="lp-eyebrow">Shop Headphones</span>
            <h2 className="lp-title">
              Main <span className="lp-gradient-text">Features</span>
            </h2>
            <ul className="lp-flist">
              {MAIN_FEATURES.map((f) => (
                <li key={f.title}>
                  <span className="ic">{f.icon}</span>
                  <div>
                    <h5>{f.title}</h5>
                    <p>{f.text}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------- Smarter band ----------------------------- */
const TRIO = [
  {
    img: 'imgi_9_img-1.png',
    title: 'Total Comfort',
    text: 'Memory-foam ear cushions stay cloud-soft through the longest sessions.',
  },
  {
    img: 'imgi_10_img2.png',
    title: 'Cleared Calling',
    text: 'Beamforming mics isolate your voice so every call comes through clean.',
  },
  {
    img: 'imgi_11_img-3.png',
    title: 'Fingertip Control',
    text: 'Intuitive touch panels put your entire playlist under one finger.',
  },
];

function SmarterBand() {
  return (
    <section className="lp-section" style={{paddingTop: 0}}>
      <div className="lp-wrap">
        <div className="lp-band reveal">
          <div className="lp-section-head lp-center" style={{marginBottom: 0}}>
            <span className="lp-eyebrow on-dark">Shop Headphones</span>
            <h2 className="lp-title" style={{color: '#fff'}}>
              Smarter Than Your Average Headphones
            </h2>
          </div>
          <div className="lp-trio">
            {TRIO.map((t, i) => (
              <article
                key={t.title}
                className="lp-trio-card"
                style={{['--reveal-delay' as string]: `${i * 90}ms`}}
              >
                <img
                  src={`${IMG}/${t.img}`}
                  alt={t.title}
                  loading="lazy"
                  decoding="async"
                />
                <h4>{t.title}</h4>
                <p>{t.text}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------ Talk at a touch --------------------------- */
function TalkAtTouch({shopHref}: {shopHref: string}) {
  return (
    <section className="lp-section">
      <div className="lp-wrap">
        <div className="lp-split reverse">
          <div className="lp-split-media reveal">
            <div className="blob" aria-hidden="true" />
            <img
              src={`${IMG}/imgi_51_sound-5-1024x663.jpg`}
              alt="Person using touch controls on headphones"
              width={1024}
              height={663}
              loading="lazy"
              decoding="async"
            />
          </div>
          <div className="lp-split-copy reveal">
            <span className="lp-eyebrow">Shop Headphones</span>
            <h2 className="lp-title">
              Talk at a Touch With{' '}
              <span className="lp-gradient-text">Quick Attention</span>
            </h2>
            <p style={{color: 'var(--lp-muted)'}}>
              Lower the volume and lean into a conversation without lifting a
              finger from your side. Quick Attention mode brings the outside
              world back in an instant, then restores your soundstage the moment
              you let go.
            </p>
            <div className="lp-mini-stats">
              <div>
                <b>0.1s</b>
                <small>Touch Response</small>
              </div>
              <div>
                <b>2×</b>
                <small>Mic Clarity</small>
              </div>
              <div>
                <b>IPX5</b>
                <small>Water Rating</small>
              </div>
            </div>
            <div style={{marginTop: '2rem'}}>
              <Link className="lp-btn" to={shopHref}>
                Shop Now <IconArrow />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* -------------------------------- Logo strip ------------------------------ */
function LogoStrip() {
  const logos = [
    'imgi_13_logoipsum-logo-52.svg',
    'imgi_14_logoipsum-logo-53.svg',
    'imgi_15_logoipsum-logo-54.svg',
    'imgi_16_logoipsum-logo-55.svg',
  ];
  const loop = [...logos, ...logos, ...logos];
  return (
    <div className="lp-logos" aria-hidden="true">
      <div className="lp-logos-track">
        {loop.map((l, i) => (
          <img key={i} src={`${IMG}/${l}`} alt="" loading="lazy" />
        ))}
      </div>
    </div>
  );
}

/* --------------------------------- Reviews -------------------------------- */
const REVIEWS = [
  {
    title: 'Better Than Expected',
    text: 'The sound is huge and the noise cancelling is unreal on my commute. Battery genuinely lasts all week.',
    name: 'Jimmy Case',
    role: 'Verified Buyer',
    avatar: 'imgi_17_customer-1.png',
  },
  {
    title: 'Love the Sound of Headphones',
    text: 'Deep bass, crisp highs and the most comfortable cushions I have ever worn. Worth every cent.',
    name: 'Lena Stevens',
    role: 'Verified Buyer',
    avatar: 'imgi_18_customer-2.png',
  },
  {
    title: 'Great Noise Cancellation',
    text: 'I can finally focus in a busy office. One tap for quick attention is a game changer for meetings.',
    name: 'John Doe',
    role: 'Verified Buyer',
    avatar: 'imgi_17_customer-1.png',
  },
  {
    title: 'Perfect and Light Design',
    text: 'So light I forget I am wearing them. The touch controls are intuitive and the app is excellent.',
    name: 'Penny Smith',
    role: 'Verified Buyer',
    avatar: 'imgi_18_customer-2.png',
  },
];

function Reviews() {
  return (
    <section className="lp-section">
      <div className="lp-wrap">
        <div className="lp-section-head lp-center reveal">
          <span className="lp-eyebrow">Customer Reviews</span>
          <h2 className="lp-title">
            What Do <span className="lp-gradient-text">They Say</span>
          </h2>
        </div>
        <div className="lp-reviews">
          {REVIEWS.map((r, i) => (
            <article
              key={r.title}
              className="lp-review reveal"
              style={{['--reveal-delay' as string]: `${(i % 2) * 90}ms`}}
            >
              <div className="lp-stars">
                {Array.from({length: 5}).map((_, s) => (
                  <IconStar key={s} />
                ))}
              </div>
              <h4>{r.title}</h4>
              <p>{r.text}</p>
              <div className="lp-review-author">
                <img
                  src={`${IMG}/${r.avatar}`}
                  alt={r.name}
                  width={46}
                  height={46}
                  loading="lazy"
                  decoding="async"
                />
                <div>
                  <b>{r.name}</b>
                  <small>{r.role}</small>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* -------------------------------- Big beats ------------------------------- */
const BEATS = [
  {icon: <IconBattery />, label: '30 Hours Battery Life'},
  {icon: <IconWater />, label: 'Water Resistant'},
  {icon: <IconTouch />, label: 'One Touch Listening'},
  {icon: <IconWave />, label: 'Deep Sounds'},
];

function BigBeats() {
  return (
    <section className="lp-section" style={{paddingTop: 0}}>
      <div className="lp-wrap">
        <div className="lp-band reveal">
          <div className="lp-section-head lp-center" style={{marginBottom: 0}}>
            <span className="lp-eyebrow on-dark">Get Yours Now</span>
            <h2 className="lp-title" style={{color: '#fff'}}>
              Big Beats on the Go
            </h2>
          </div>
          <div className="lp-beats">
            {BEATS.map((b, i) => (
              <div
                key={b.label}
                className="lp-beat"
                style={{['--reveal-delay' as string]: `${i * 90}ms`}}
              >
                <div className="ic">{b.icon}</div>
                <span>{b.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------- Final CTA -------------------------------- */
function FinalCta({shopHref}: {shopHref: string}) {
  return (
    <section className="lp-section" style={{paddingTop: 0}}>
      <div className="lp-wrap">
        <div className="lp-cta reveal">
          <div className="lp-cta-media">
            <img
              src={`${IMG}/imgi_3_headphones.png`}
              alt="Sound Pro TWS Air 5"
              width={360}
              height={388}
              loading="lazy"
              decoding="async"
            />
          </div>
          <div>
            <span className="lp-eyebrow on-dark">Shop Headphones</span>
            <h2>Big Beats on the Go</h2>
            <p style={{color: 'rgba(255,255,255,0.75)'}}>
              Get 15% off on orders over $200. Free express delivery and a
              2-year warranty on every pair.
            </p>
            <div className="price-row">
              <span className="price-now">$99</span>
              <span className="price-was">$139</span>
            </div>
            <Link className="lp-btn" to={shopHref}>
              <IconCart /> Add to Cart
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------- Perks strip ------------------------------ */
function PerksStrip() {
  const perks = [
    {icon: <IconTruck />, label: 'Free Shipping'},
    {icon: <IconGlobe />, label: 'Worldwide Delivery'},
    {icon: <IconReturn />, label: 'Money Return'},
  ];
  return (
    <section className="lp-section" style={{paddingBottom: '5rem'}}>
      <div className="lp-wrap">
        <div className="lp-perks reveal">
          {perks.map((p) => (
            <div className="lp-perk" key={p.label}>
              <span className="ic">{p.icon}</span>
              {p.label}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const FEATURED_COLLECTION_QUERY = `#graphql
  fragment FeaturedCollection on Collection {
    id
    title
    handle
  }
  query FeaturedCollection($country: CountryCode, $language: LanguageCode)
    @inContext(country: $country, language: $language) {
    collections(first: 1, sortKey: UPDATED_AT, reverse: true) {
      nodes {
        ...FeaturedCollection
      }
    }
  }
` as const;

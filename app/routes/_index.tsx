import {Await, Link, useLoaderData} from 'react-router';
import type {Route} from './+types/_index';
import {Suspense, useEffect, useRef} from 'react';
import {Image, Money} from '@shopify/hydrogen';
import type {HomeProductsQuery} from 'storefrontapi.generated';
import landingStyles from '~/styles/landing.css?url';
import {
  IconStar,
  IconArrow,
  IconTruck,
  IconReturn,
  IconShield,
  IconSparkle,
} from '~/components/LandingIcons';
import GridMotion from '~/components/GridMotion';

export const meta: Route.MetaFunction = () => {
  return [
    {title: 'Aurelle — Elegant Watches & Smartwatches for Women'},
    {
      name: 'description',
      content:
        'Aurelle curates elegant watches, smartwatches and interchangeable bands for the modern woman. Free worldwide shipping and easy returns.',
    },
  ];
};

export function links() {
  return [{rel: 'stylesheet', href: landingStyles}];
}

export async function loader(args: Route.LoaderArgs) {
  return loadDeferredData(args);
}

/** The product grid. Deferred so it never blocks TTFB. */
function loadDeferredData({context}: Route.LoaderArgs) {
  const products = context.storefront
    .query(HOME_PRODUCTS_QUERY)
    .catch((error: Error) => {
      console.error(error);
      return null;
    });

  return {products};
}

/**
 * Lightweight scroll-reveal — a single IntersectionObserver adds `.is-in`
 * once per `.reveal` element and unobserves it. No animation library.
 */
function useReveal() {
  const root = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const scope = root.current;
    if (!scope) return;

    const revealAll = () =>
      scope
        .querySelectorAll<HTMLElement>('.reveal')
        .forEach((el) => el.classList.add('is-in'));

    // No IntersectionObserver support or reduced motion → just show everything.
    if (
      typeof IntersectionObserver === 'undefined' ||
      window.matchMedia('(prefers-reduced-motion: reduce)').matches
    ) {
      revealAll();
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
      {threshold: 0.12, rootMargin: '0px 0px -6% 0px'},
    );

    const observeNew = () =>
      scope
        .querySelectorAll<HTMLElement>('.reveal:not(.is-in)')
        .forEach((el) => io.observe(el));

    observeNew();

    // Deferred sections (e.g. the product grid) mount AFTER this effect runs,
    // so watch for new nodes and observe them too — otherwise they'd stay
    // stuck at opacity:0 and appear "missing".
    const mo = new MutationObserver(observeNew);
    mo.observe(scope, {childList: true, subtree: true});

    return () => {
      io.disconnect();
      mo.disconnect();
    };
  }, []);
  return root;
}

export default function Homepage() {
  const {products} = useLoaderData<typeof loader>();
  const root = useReveal();

  return (
    <div className="lp" ref={root}>
      <Hero />
      <Marquee />
      <FeaturedProducts products={products} />
      <Editorial />
      <Reviews />
      <Perks />
    </div>
  );
}

/* ---------------------------------- Hero ---------------------------------- */
function Hero() {
  return (
    <section className="lp-hero">
      <div className="lp-hero-bg" aria-hidden="true">
        <GridMotion
          items={heroMotionItems}
          gradientColor="rgba(201, 138, 122, 0.34)"
        />
      </div>
      <div className="lp-hero-inner">
        <div className="lp-hero-copy">
          <span className="lp-hero-badge">New Season · 2026</span>
          <h1>
            Timeless elegance,
            <span>on your wrist.</span>
          </h1>
          <p>
            Discover Aurelle&apos;s curated edit of refined watches,
            smartwatches and interchangeable bands — crafted to move with the
            modern woman.
          </p>
          <div className="lp-hero-cta">
            <Link className="lp-btn" to="/collections">
              Shop the Collection <IconArrow />
            </Link>
            <Link className="lp-btn ghost" to="/collections/all">
              View All Watches
            </Link>
          </div>
          <div className="lp-hero-stats">
            <div>
              <b>4.9★</b>
              <small>Loved by 10k+</small>
            </div>
            <div>
              <b>Free</b>
              <small>Worldwide Shipping</small>
            </div>
            <div>
              <b>30-Day</b>
              <small>Easy Returns</small>
            </div>
          </div>
        </div>
        <div className="lp-hero-clock" aria-hidden="true">
          <div className="lp-hero-orb" />
          <div className="lp-hero-ring" />
          <div className="lp-hero-dial">
            <span className="lp-hero-hand hour" />
            <span className="lp-hero-hand minute" />
            <span className="lp-hero-pin" />
            {Array.from({length: 12}).map((_, i) => (
              <span
                key={i}
                className="lp-hero-tick"
                style={{transform: `rotate(${i * 30}deg) translateY(-118px)`}}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

const heroMotionItems = Array.from({length: 28}, (_, index) => {
  const items = [
    'Rose gold finish',
    'Elegant daily wear',
    'Interchangeable bands',
    'Gift ready',
    'Water resistant',
    'Smartwatch edit',
    'Classic dials',
    'Free shipping',
    '30 day returns',
    '2 year warranty',
    'Modern silhouettes',
    'Curated for women',
  ];

  return (
    <span className="grid-motion__chip">
      <strong>{items[index % items.length]}</strong>
    </span>
  );
});

/* --------------------------------- Marquee -------------------------------- */
function Marquee() {
  const items = [
    'Free Worldwide Shipping',
    'Interchangeable Bands',
    '2-Year Warranty',
    'Water Resistant',
    'Gift Ready Packaging',
    '30-Day Returns',
  ];
  const loop = [...items, ...items];
  return (
    <div className="lp-marquee" aria-hidden="true">
      <div className="lp-marquee-track">
        {loop.map((t, i) => (
          <span key={i}>
            <IconSparkle /> {t}
          </span>
        ))}
      </div>
    </div>
  );
}

/* ----------------------------- Featured products -------------------------- */
function FeaturedProducts({
  products,
}: {
  products: Promise<HomeProductsQuery | null>;
}) {
  return (
    <section className="lp-section lp-section-soft">
      <div className="lp-wrap">
        <div className="lp-head lp-center reveal">
          <span className="lp-eyebrow">Best Sellers</span>
          <h2 className="lp-title">Most Loved This Season</h2>
        </div>
        <Suspense fallback={<ProductGridSkeleton />}>
          <Await resolve={products}>
            {(res) => (
              <div className="lp-products">
                {res?.products?.nodes?.map((p, i) => (
                  <ProductCard key={p.id} product={p} index={i} />
                )) ?? null}
              </div>
            )}
          </Await>
        </Suspense>
        <div className="lp-center" style={{marginTop: '2.6rem'}}>
          <Link className="lp-btn" to="/collections/all">
            View All Watches <IconArrow />
          </Link>
        </div>
      </div>
    </section>
  );
}

function ProductCard({
  product,
  index,
}: {
  product: HomeProductsQuery['products']['nodes'][number];
  index: number;
}) {
  const price = product.priceRange.minVariantPrice;
  const compareAt = product.compareAtPriceRange?.minVariantPrice;
  const onSale =
    compareAt && Number(compareAt.amount) > Number(price.amount);

  return (
    <Link
      to={`/products/${product.handle}`}
      className="lp-product reveal"
      prefetch="intent"
      style={{['--reveal-delay' as string]: `${(index % 4) * 70}ms`}}
    >
      <div className="lp-product-media">
        {onSale ? <span className="lp-product-tag">Sale</span> : null}
        {product.featuredImage ? (
          <Image
            data={product.featuredImage}
            aspectRatio="1/1"
            sizes="(min-width: 45em) 300px, 45vw"
            loading="lazy"
          />
        ) : (
          <div className="lp-collection-placeholder" />
        )}
      </div>
      <div className="lp-product-info">
        <h3>{product.title}</h3>
        <div className="lp-product-price">
          <Money data={price} />
          {onSale ? (
            <s>
              <Money data={compareAt} />
            </s>
          ) : null}
        </div>
      </div>
    </Link>
  );
}

function ProductGridSkeleton() {
  return (
    <div className="lp-products">
      {Array.from({length: 8}).map((_, i) => (
        <div key={i} className="lp-product is-skeleton">
          <div className="lp-product-media" />
          <div className="lp-product-info">
            <span className="lp-skel-line" />
            <span className="lp-skel-line short" />
          </div>
        </div>
      ))}
    </div>
  );
}

/* -------------------------------- Editorial ------------------------------- */
function Editorial() {
  return (
    <section className="lp-section">
      <div className="lp-wrap">
        <div className="lp-editorial reveal">
          <div className="lp-editorial-copy">
            <span className="lp-eyebrow">The Aurelle Promise</span>
            <h2 className="lp-title">
              Designed to be worn, made to be treasured.
            </h2>
            <p>
              Every Aurelle timepiece is finished by hand and built to last —
              from surgical-grade cases to interchangeable bands that let you
              restyle your wrist in seconds. Elegant enough for the office,
              effortless enough for everyday.
            </p>
            <ul className="lp-editorial-list">
              <li>
                <IconSparkle /> Premium stainless steel &amp; mineral crystal
              </li>
              <li>
                <IconShield /> 2-year international warranty
              </li>
              <li>
                <IconReturn /> 30-day no-questions returns
              </li>
            </ul>
            <Link className="lp-btn" to="/pages/about">
              Our Story <IconArrow />
            </Link>
          </div>
          <div className="lp-editorial-art" aria-hidden="true">
            <div className="lp-editorial-blob" />
            <div className="lp-hero-dial small">
              <span className="lp-hero-hand hour" />
              <span className="lp-hero-hand minute" />
              <span className="lp-hero-pin" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* --------------------------------- Reviews -------------------------------- */
const REVIEWS = [
  {
    title: 'My new everyday watch',
    text: 'Elegant, lightweight and the rose-gold band goes with everything. I get compliments constantly.',
    name: 'Sophia R.',
  },
  {
    title: 'Better than expected',
    text: 'The build quality feels far more expensive than the price. Shipping was fast and gift packaging was gorgeous.',
    name: 'Amelia K.',
  },
  {
    title: 'Love the swappable bands',
    text: 'Changed from the steel band to silicone for the gym in seconds. So versatile and comfortable.',
    name: 'Hannah L.',
  },
];

function Reviews() {
  return (
    <section className="lp-section lp-section-soft">
      <div className="lp-wrap">
        <div className="lp-head lp-center reveal">
          <span className="lp-eyebrow">Customer Love</span>
          <h2 className="lp-title">What Women Are Saying</h2>
        </div>
        <div className="lp-reviews">
          {REVIEWS.map((r, i) => (
            <article
              key={r.title}
              className="lp-review reveal"
              style={{['--reveal-delay' as string]: `${i * 80}ms`}}
            >
              <div className="lp-stars">
                {Array.from({length: 5}).map((_, s) => (
                  <IconStar key={s} />
                ))}
              </div>
              <h4>{r.title}</h4>
              <p>{r.text}</p>
              <b>— {r.name}</b>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------------------------- Perks --------------------------------- */
function Perks() {
  const perks = [
    {icon: <IconTruck />, t: 'Free Worldwide Shipping', s: 'On every order'},
    {icon: <IconReturn />, t: '30-Day Returns', s: 'Shop with confidence'},
    {icon: <IconShield />, t: '2-Year Warranty', s: 'On all timepieces'},
    {icon: <IconSparkle />, t: 'Gift Ready', s: 'Beautiful packaging'},
  ];
  return (
    <section className="lp-section">
      <div className="lp-wrap">
        <div className="lp-perks reveal">
          {perks.map((p) => (
            <div className="lp-perk" key={p.t}>
              <span className="ic">{p.icon}</span>
              <div>
                <b>{p.t}</b>
                <small>{p.s}</small>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* --------------------------------- Queries -------------------------------- */
const HOME_PRODUCTS_QUERY = `#graphql
  fragment HomeMoney on MoneyV2 {
    amount
    currencyCode
  }
  fragment HomeProduct on Product {
    id
    title
    handle
    featuredImage {
      id
      altText
      url
      width
      height
    }
    priceRange {
      minVariantPrice {
        ...HomeMoney
      }
    }
    compareAtPriceRange {
      minVariantPrice {
        ...HomeMoney
      }
    }
  }
  query HomeProducts($country: CountryCode, $language: LanguageCode)
    @inContext(country: $country, language: $language) {
    products(first: 8, sortKey: BEST_SELLING) {
      nodes {
        ...HomeProduct
      }
    }
  }
` as const;

import {Suspense} from 'react';
import {Await, NavLink, useAsyncValue} from 'react-router';
import {
  type CartViewPayload,
  useAnalytics,
  useOptimisticCart,
} from '@shopify/hydrogen';
import type {HeaderQuery, CartApiQueryFragment} from 'storefrontapi.generated';
import {useAside} from '~/components/Aside';
import {IconSearch, IconUser, IconCart} from '~/components/LandingIcons';

interface HeaderProps {
  header: HeaderQuery;
  cart: Promise<CartApiQueryFragment | null>;
  isLoggedIn: Promise<boolean>;
  publicStoreDomain: string;
}

/** Primary navigation — fixed to match the Aurelle store design. */
const NAV_LINKS = [
  {label: 'Home', to: '/', end: true},
  {label: 'Shop', to: '/collections', end: false},
  {label: 'About', to: '/about', end: false},
  {label: 'Reviews', to: '/reviews', end: false},
  {label: 'Contact', to: '/contact', end: false},
];

export function Header({isLoggedIn, cart}: HeaderProps) {
  return (
    <header className="site-header">
      <div className="site-header-inner">
        <NavLink prefetch="intent" to="/" className="site-logo" end>
          <span className="site-logo-mark" aria-hidden="true" />
          <strong>Aurelle</strong>
        </NavLink>

        <nav className="site-nav" role="navigation">
          {NAV_LINKS.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.end}
              prefetch="intent"
              className="site-nav-link"
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        <div className="site-header-ctas">
          <SearchToggle />
          <NavLink to="/account" prefetch="intent" className="site-icon-btn">
            <IconUser />
            <span className="sr-only">Account</span>
          </NavLink>
          <CartToggle cart={cart} />
          <NavLink to="/account" className="site-signup">
            <Suspense fallback="Sign Up">
              <Await resolve={isLoggedIn} errorElement="Sign Up">
                {(loggedIn) => (loggedIn ? 'Account' : 'Sign Up')}
              </Await>
            </Suspense>
          </NavLink>
          <HeaderMenuMobileToggle />
        </div>
      </div>
    </header>
  );
}

/**
 * Kept for the mobile menu Aside (PageLayout renders this in the drawer).
 * Uses the same fixed nav links as the desktop bar.
 */
export function HeaderMenu({viewport}: {viewport: 'desktop' | 'mobile'}) {
  const className = `header-menu-${viewport}`;
  const {close} = useAside();
  return (
    <nav className={className} role="navigation">
      {NAV_LINKS.map((item) => (
        <NavLink
          key={item.to}
          to={item.to}
          end={item.end}
          onClick={close}
          prefetch="intent"
          className="header-menu-item"
        >
          {item.label}
        </NavLink>
      ))}
    </nav>
  );
}

function HeaderMenuMobileToggle() {
  const {open} = useAside();
  return (
    <button
      className="site-icon-btn site-menu-toggle"
      onClick={() => open('mobile')}
      aria-label="Open menu"
    >
      <span>☰</span>
    </button>
  );
}

function SearchToggle() {
  const {open} = useAside();
  return (
    <button
      className="site-icon-btn"
      onClick={() => open('search')}
      aria-label="Search"
    >
      <IconSearch />
    </button>
  );
}

function CartBadge({count}: {count: number | null}) {
  const {open} = useAside();
  const {publish, shop, cart, prevCart} = useAnalytics();

  return (
    <a
      className="site-icon-btn site-cart"
      href="/cart"
      onClick={(e) => {
        e.preventDefault();
        open('cart');
        publish('cart_viewed', {
          cart,
          prevCart,
          shop,
          url: window.location.href || '',
        } as CartViewPayload);
      }}
      aria-label="Open cart"
    >
      <IconCart />
      {count !== null && count > 0 ? (
        <span className="site-cart-badge">{count}</span>
      ) : null}
    </a>
  );
}

function CartToggle({cart}: Pick<HeaderProps, 'cart'>) {
  return (
    <Suspense fallback={<CartBadge count={null} />}>
      <Await resolve={cart}>
        <CartBanner />
      </Await>
    </Suspense>
  );
}

function CartBanner() {
  const originalCart = useAsyncValue() as CartApiQueryFragment | null;
  const cart = useOptimisticCart(originalCart);
  return <CartBadge count={cart?.totalQuantity ?? 0} />;
}

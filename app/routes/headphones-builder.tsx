import {useMemo, useState} from 'react';
import type {Route} from './+types/headphones-builder';
import {AddToCartButton} from '~/components/AddToCartButton';
import {IconCheck, IconArrow} from '~/components/LandingIcons';
import builderStyles from '~/styles/builder.css?url';
import {
  ACCESSORIES,
  COLORS,
  DEFAULT_SELECTION,
  PRODUCT_TYPES,
  SOUND_PROFILES,
  STEPS,
  computePrice,
  findColor,
  findSound,
  findType,
  money,
  selectionToAttributes,
  type BuilderSelection,
  type Option,
} from '~/lib/headphonesBuilder';

export const meta: Route.MetaFunction = () => {
  return [
    {title: 'Build Your Headphones | Sound Pro'},
    {
      name: 'description',
      content:
        'Configure your perfect pair — choose type, color, sound profile and accessories with live pricing.',
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
    {rel: 'stylesheet', href: builderStyles},
  ];
}

/**
 * Grab any real product variant to use as the cart line's merchandise, so the
 * configured build lands in a working Shopify cart. If the store has no
 * products yet, the builder still works — the final step just explains that a
 * base product is needed to complete checkout.
 */
export async function loader({context}: Route.LoaderArgs) {
  const baseVariantId = await context.storefront
    .query(BUILDER_BASE_PRODUCT_QUERY)
    .then((res) => res?.products?.nodes?.[0]?.variants?.nodes?.[0]?.id ?? null)
    .catch(() => null);

  return {baseVariantId};
}

export default function HeadphonesBuilder({
  loaderData,
}: Route.ComponentProps) {
  const {baseVariantId} = loaderData;
  const [step, setStep] = useState(1);
  const [maxReached, setMaxReached] = useState(1);
  const [sel, setSel] = useState<BuilderSelection>(DEFAULT_SELECTION);

  const price = useMemo(() => computePrice(sel), [sel]);
  const type = findType(sel.typeId);
  const color = findColor(sel.colorId);
  const sound = findSound(sel.soundId);

  const goTo = (n: number) => {
    const next = Math.min(Math.max(n, 1), STEPS.length);
    setStep(next);
    setMaxReached((m) => Math.max(m, next));
    if (typeof window !== 'undefined') {
      window.scrollTo({top: 0, behavior: 'smooth'});
    }
  };

  const toggleAddon = (id: string) =>
    setSel((s) => ({
      ...s,
      addonIds: s.addonIds.includes(id)
        ? s.addonIds.filter((a) => a !== id)
        : [...s.addonIds, id],
    }));

  return (
    <div className="hb">
      <div className="hb-container">
        <div className="hb-header">
          <span className="hb-eyebrow">Headphones Builder</span>
          <h1>Build Your Perfect Pair</h1>
          <p>Configure it your way — the price updates as you go.</p>
        </div>

        {/* -------- Left: steps -------- */}
        <div className="hb-left">
          <Progress step={step} maxReached={maxReached} onJump={goTo} />

          {step === 1 && (
            <StepShell
              title="Choose Your Headphone Type"
              sub="Every build starts with a base model."
            >
              <div className="hb-cards">
                {PRODUCT_TYPES.map((t) => (
                  <SelectCard
                    key={t.id}
                    option={t}
                    selected={sel.typeId === t.id}
                    control="radio"
                    showImage
                    priceLabel={money(t.price)}
                    priceSub="base"
                    onSelect={() => setSel((s) => ({...s, typeId: t.id}))}
                  />
                ))}
              </div>
            </StepShell>
          )}

          {step === 2 && (
            <StepShell
              title="Pick a Color"
              sub="Some finishes are a small premium."
            >
              <div className="hb-cards">
                {COLORS.map((c) => (
                  <SelectCard
                    key={c.id}
                    option={c}
                    selected={sel.colorId === c.id}
                    control="swatch"
                    priceLabel={c.price ? `+${money(c.price)}` : 'Free'}
                    onSelect={() => setSel((s) => ({...s, colorId: c.id}))}
                  />
                ))}
              </div>
            </StepShell>
          )}

          {step === 3 && (
            <StepShell
              title="Select Your Sound Profile"
              sub="Tune the signature to how you listen."
            >
              <div className="hb-cards">
                {SOUND_PROFILES.map((p) => (
                  <SelectCard
                    key={p.id}
                    option={p}
                    selected={sel.soundId === p.id}
                    control="radio"
                    priceLabel={p.price ? `+${money(p.price)}` : 'Free'}
                    onSelect={() => setSel((s) => ({...s, soundId: p.id}))}
                  />
                ))}
              </div>
            </StepShell>
          )}

          {step === 4 && (
            <StepShell
              title="Add Accessories"
              sub="Optional extras — pick as many as you like."
            >
              <div className="hb-cards">
                {ACCESSORIES.map((a) => (
                  <SelectCard
                    key={a.id}
                    option={a}
                    selected={sel.addonIds.includes(a.id)}
                    control="check"
                    priceLabel={`+${money(a.price)}`}
                    onSelect={() => toggleAddon(a.id)}
                  />
                ))}
              </div>
            </StepShell>
          )}

          {step === 5 && (
            <StepShell
              title="Review Your Build"
              sub="Everything look good? Add it to your cart."
            >
              <ReviewList
                type={type}
                color={color}
                sound={sound}
                addonIds={sel.addonIds}
              />
            </StepShell>
          )}

          <div className="hb-actions">
            {step > 1 ? (
              <button
                type="button"
                className="hb-btn hb-btn-ghost"
                onClick={() => goTo(step - 1)}
              >
                Back
              </button>
            ) : null}
            {step < STEPS.length ? (
              <button
                type="button"
                className={`hb-btn hb-btn-primary ${step === 1 ? 'hb-first-btn' : ''}`}
                onClick={() => goTo(step + 1)}
              >
                Continue <IconArrow />
              </button>
            ) : null}
          </div>
        </div>

        {/* -------- Right: live summary -------- */}
        <aside className="hb-right">
          <div className="hb-preview">
            <img src={color.image || type.image} alt={`${type.name} preview`} />
          </div>

          <div className="hb-price-head">
            <span className="hb-total">{money(price.total)}</span>
            {price.compareAt > price.total ? (
              <span className="hb-compare">{money(price.compareAt)}</span>
            ) : null}
          </div>
          {price.savings > 0 ? (
            <span className="hb-save">You save {money(price.savings)}</span>
          ) : null}

          <div className="hb-summary">
            <h3>Your Build</h3>
            <ul>
              <li>
                <span className="k">Type</span>
                <span className="v">{type.name}</span>
              </li>
              <li>
                <span className="k">Color</span>
                <span className="v">{color.name}</span>
              </li>
              <li>
                <span className="k">Sound</span>
                <span className="v">{sound.name}</span>
              </li>
              <li>
                <span className="k">Add-ons</span>
                <span className="v">
                  {sel.addonIds.length
                    ? sel.addonIds
                        .map((id) => ACCESSORIES.find((a) => a.id === id)?.name)
                        .join(', ')
                    : 'None'}
                </span>
              </li>
            </ul>
          </div>

          <div className="hb-breakdown">
            <div className="row">
              <span>Base ({type.name})</span>
              <span>{money(price.base)}</span>
            </div>
            <div className="row">
              <span>Color ({color.name})</span>
              <span>{price.color ? `+${money(price.color)}` : '—'}</span>
            </div>
            <div className="row">
              <span>Sound ({sound.name})</span>
              <span>{price.sound ? `+${money(price.sound)}` : '—'}</span>
            </div>
            <div className="row">
              <span>Accessories</span>
              <span>{price.addons ? `+${money(price.addons)}` : '—'}</span>
            </div>
            <div className="row total">
              <span>Total</span>
              <span>{money(price.total)}</span>
            </div>
          </div>

          {step === STEPS.length ? (
            <div className="hb-addcart-form">
              {baseVariantId ? (
                <AddToCartButton
                  lines={[
                    {
                      merchandiseId: baseVariantId,
                      quantity: 1,
                      attributes: selectionToAttributes(sel),
                    },
                  ]}
                >
                  Add to Cart · {money(price.total)}
                </AddToCartButton>
              ) : (
                <button type="button" className="hb-btn hb-btn-primary" disabled>
                  Add to Cart · {money(price.total)}
                </button>
              )}
              {!baseVariantId ? (
                <p className="hb-cart-note">
                  Connect a Shopify product to enable checkout. Your build is
                  ready — {selectionToAttributes(sel).length} details captured.
                </p>
              ) : (
                <p className="hb-cart-note">
                  Your configuration is attached to the cart item.
                </p>
              )}
            </div>
          ) : null}
        </aside>
      </div>
    </div>
  );
}

/* ------------------------------ Sub-components ------------------------------ */

function Progress({
  step,
  maxReached,
  onJump,
}: {
  step: number;
  maxReached: number;
  onJump: (n: number) => void;
}) {
  const fill = ((step - 1) / (STEPS.length - 1)) * 100;
  return (
    <div className="hb-progress">
      <div className="hb-progress-line">
        <div className="hb-progress-fill" style={{width: `${fill}%`}} />
      </div>
      {STEPS.map((s) => {
        const state = s.id === step ? 'active' : s.id < step ? 'done' : '';
        return (
          <button
            key={s.id}
            type="button"
            className={`hb-step ${state}`}
            disabled={s.id > maxReached}
            onClick={() => onJump(s.id)}
          >
            <span className="hb-step-circle">
              {s.id < step ? <IconCheck /> : s.id}
            </span>
            <span className="hb-step-label">{s.label}</span>
          </button>
        );
      })}
    </div>
  );
}

function StepShell({
  title,
  sub,
  children,
}: {
  title: string;
  sub: string;
  children: React.ReactNode;
}) {
  return (
    <div className="hb-fade" key={title}>
      <h2 className="hb-step-title">{title}</h2>
      <p className="hb-step-sub">{sub}</p>
      {children}
    </div>
  );
}

function SelectCard({
  option,
  selected,
  control,
  showImage,
  priceLabel,
  priceSub,
  onSelect,
}: {
  option: Option;
  selected: boolean;
  control: 'radio' | 'check' | 'swatch';
  showImage?: boolean;
  priceLabel: string;
  priceSub?: string;
  onSelect: () => void;
}) {
  const isFree = priceLabel === 'Free';
  return (
    <button
      type="button"
      className={`hb-card ${selected ? 'selected' : ''}`}
      onClick={onSelect}
      aria-pressed={selected}
    >
      {option.badge ? <span className="hb-card-badge">{option.badge}</span> : null}

      {control === 'swatch' ? (
        <span className="hb-swatch" style={{background: option.swatch}} />
      ) : null}
      {control === 'radio' ? <span className="hb-radio" /> : null}
      {control === 'check' ? (
        <span className="hb-check">
          <IconCheck />
        </span>
      ) : null}

      {showImage && option.image ? (
        <img
          className="hb-card-img"
          src={option.image}
          alt={option.name}
          loading="lazy"
          decoding="async"
        />
      ) : null}

      <span className="hb-card-body">
        <h4>{option.name}</h4>
        <p>{option.desc}</p>
      </span>

      <span className="hb-card-price">
        {isFree ? (
          <span className="free">Free</span>
        ) : (
          <>
            {priceLabel}
            {priceSub ? <small>{priceSub}</small> : null}
          </>
        )}
      </span>
    </button>
  );
}

function ReviewList({
  type,
  color,
  sound,
  addonIds,
}: {
  type: Option;
  color: Option;
  sound: Option;
  addonIds: string[];
}) {
  const rows = [
    {k: 'Headphone Type', v: type.name, p: money(type.price)},
    {k: 'Color', v: color.name, p: color.price ? `+${money(color.price)}` : 'Free'},
    {k: 'Sound Profile', v: sound.name, p: sound.price ? `+${money(sound.price)}` : 'Free'},
    ...addonIds.map((id) => {
      const a = ACCESSORIES.find((x) => x.id === id)!;
      return {k: 'Accessory', v: a.name, p: `+${money(a.price)}`};
    }),
  ];
  return (
    <div className="hb-cards">
      {rows.map((r, i) => (
        <div className="hb-card selected" key={i} style={{cursor: 'default'}}>
          <span className="hb-check">
            <IconCheck />
          </span>
          <span className="hb-card-body">
            <h4>{r.v}</h4>
            <p>{r.k}</p>
          </span>
          <span className="hb-card-price">{r.p}</span>
        </div>
      ))}
    </div>
  );
}

const BUILDER_BASE_PRODUCT_QUERY = `#graphql
  query BuilderBaseProduct($country: CountryCode, $language: LanguageCode)
    @inContext(country: $country, language: $language) {
    products(first: 1) {
      nodes {
        id
        variants(first: 1) {
          nodes {
            id
          }
        }
      }
    }
  }
` as const;

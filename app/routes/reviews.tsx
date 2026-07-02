import type {Route} from './+types/reviews';

export const meta: Route.MetaFunction = () => {
  return [
    {title: 'Reviews | Aurelle'},
    {name: 'description', content: 'What our customers say about Aurelle.'},
  ];
};

const REVIEWS = [
  {
    title: 'My new everyday watch',
    text: 'Elegant, lightweight and the rose-gold band goes with everything. I get compliments constantly.',
    name: 'Sophia R.',
  },
  {
    title: 'Better than expected',
    text: 'The build quality feels far more expensive than the price. Shipping was fast and the gift packaging was gorgeous.',
    name: 'Amelia K.',
  },
  {
    title: 'Love the swappable bands',
    text: 'Changed from the steel band to silicone for the gym in seconds. So versatile and comfortable.',
    name: 'Hannah L.',
  },
  {
    title: 'Perfect gift',
    text: 'Bought the smartwatch for my mum and she adores it. Easy to set up and beautiful on the wrist.',
    name: 'Grace M.',
  },
];

export default function Reviews() {
  return (
    <div className="simple-page">
      <div className="simple-page-inner">
        <span className="simple-eyebrow">Customer Reviews</span>
        <h1>What Women Are Saying</h1>
        <p>
          Over 10,000 women rate Aurelle an average of 4.9 out of 5 stars.
          Here is a selection of what our customers are saying.
        </p>

        {REVIEWS.map((r) => (
          <div className="simple-card" key={r.title}>
            <b style={{color: '#c9a24b', letterSpacing: '2px'}}>★★★★★</b>
            <h2 style={{marginTop: '0.4rem'}}>{r.title}</h2>
            <p>{r.text}</p>
            <p style={{margin: 0, fontWeight: 700, color: '#2b2622'}}>
              — {r.name}, Verified Buyer
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

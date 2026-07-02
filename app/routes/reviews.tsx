import type {Route} from './+types/reviews';

export const meta: Route.MetaFunction = () => {
  return [
    {title: 'Reviews | Sound Pro'},
    {name: 'description', content: 'What our customers say about Sound Pro.'},
  ];
};

const REVIEWS = [
  {
    title: 'Better Than Expected',
    text: 'The sound is huge and the noise cancelling is unreal on my commute. Battery genuinely lasts all week.',
    name: 'Jimmy Case',
  },
  {
    title: 'Love the Sound of Headphones',
    text: 'Deep bass, crisp highs and the most comfortable cushions I have ever worn. Worth every cent.',
    name: 'Lena Stevens',
  },
  {
    title: 'Great Noise Cancellation',
    text: 'I can finally focus in a busy office. One tap for quick attention is a game changer for meetings.',
    name: 'John Doe',
  },
  {
    title: 'Perfect and Light Design',
    text: 'So light I forget I am wearing them. The touch controls are intuitive and the app is excellent.',
    name: 'Penny Smith',
  },
];

export default function Reviews() {
  return (
    <div className="simple-page">
      <div className="simple-page-inner">
        <span className="simple-eyebrow">Customer Reviews</span>
        <h1>What They Say</h1>
        <p>
          Over 2,000 verified customers rate Sound Pro an average of 4.9 out of
          5 stars. Here is a selection of what people are saying.
        </p>

        {REVIEWS.map((r) => (
          <div className="simple-card" key={r.title}>
            <b style={{color: '#f4b740', letterSpacing: '2px'}}>★★★★★</b>
            <h2 style={{marginTop: '0.4rem'}}>{r.title}</h2>
            <p>{r.text}</p>
            <p style={{margin: 0, fontWeight: 700, color: '#14110f'}}>
              — {r.name}, Verified Buyer
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

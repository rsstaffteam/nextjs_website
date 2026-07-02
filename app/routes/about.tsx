import type {Route} from './+types/about';

export const meta: Route.MetaFunction = () => {
  return [
    {title: 'About | Aurelle'},
    {name: 'description', content: 'The story behind Aurelle watches.'},
  ];
};

export default function About() {
  return (
    <div className="simple-page">
      <div className="simple-page-inner">
        <span className="simple-eyebrow">About Us</span>
        <h1>About Aurelle</h1>

        <p>
          Aurelle was founded on a simple belief: a beautiful watch is more than
          a way to tell time — it&apos;s a signature. We curate elegant
          timepieces, smartwatches and interchangeable bands designed for the
          modern woman who values craftsmanship as much as style.
        </p>

        <h2>Our Story</h2>
        <p>
          What began as a small studio sourcing refined watch bands has grown
          into a destination for women&apos;s watches loved by thousands
          worldwide. Every piece in our collection is chosen by hand and held to
          the same standard: it has to be something we&apos;d wear ourselves,
          every single day.
        </p>

        <h2>What We Stand For</h2>
        <p>
          Effortless elegance, honest quality and versatility. From
          surgical-grade stainless steel cases to bands you can swap in seconds,
          Aurelle is made to move from the office to the evening without missing
          a beat.
        </p>

        <div className="simple-card">
          <h2 style={{marginTop: 0}}>Why Choose Aurelle</h2>
          <ul>
            <li>Hand-finished cases with mineral-crystal glass</li>
            <li>Interchangeable bands for endless styling</li>
            <li>Water-resistant everyday and smart designs</li>
            <li>Free worldwide shipping and a 2-year warranty</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

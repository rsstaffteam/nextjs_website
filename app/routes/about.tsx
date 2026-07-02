import type {Route} from './+types/about';

export const meta: Route.MetaFunction = () => {
  return [
    {title: 'About | Sound Pro'},
    {name: 'description', content: 'Learn about Sound Pro headphones.'},
  ];
};

export default function About() {
  return (
    <div className="simple-page">
      <div className="simple-page-inner">
        <span className="simple-eyebrow">About Us</span>
        <h1>About Sound Pro</h1>

        <p>
          Sound Pro builds premium wireless headphones for people who take their
          audio seriously. From the studio to the street, our mission is simple:
          deliver rich, honest sound with all-day comfort and battery life you
          never have to think about.
        </p>

        <h2>Our Story</h2>
        <p>
          What started as a small team of audio engineers and music lovers has
          grown into a brand trusted by thousands of listeners worldwide. Every
          pair of Sound Pro headphones is tuned by ear and tested in the real
          world before it ever reaches you.
        </p>

        <h2>What We Stand For</h2>
        <p>
          We believe great sound should be effortless. That means adaptive noise
          cancelling that just works, fingertip controls that feel natural, and
          a design that disappears the moment you put it on.
        </p>

        <div className="simple-card">
          <h2 style={{marginTop: 0}}>Why Choose Us</h2>
          <ul>
            <li>Up to 30 hours of battery on a single charge</li>
            <li>HD active noise cancelling processor</li>
            <li>Memory-foam cushions for total comfort</li>
            <li>Free worldwide shipping and a 2-year warranty</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

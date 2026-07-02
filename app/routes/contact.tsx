import type {Route} from './+types/contact';

export const meta: Route.MetaFunction = () => {
  return [
    {title: 'Contact | Aurelle'},
    {name: 'description', content: 'Get in touch with the Aurelle team.'},
  ];
};

export default function Contact() {
  return (
    <div className="simple-page">
      <div className="simple-page-inner">
        <span className="simple-eyebrow">Get In Touch</span>
        <h1>Contact Us</h1>

        <p>
          Have a question about your order, a product, or a warranty claim? Our
          support team is here to help and usually replies within one business
          day.
        </p>

        <div className="simple-contact-grid">
          <div className="simple-card">
            <b>Email</b>
            hello@aurelle.example
          </div>
          <div className="simple-card">
            <b>Phone</b>
            +1 (555) 013-2020
          </div>
          <div className="simple-card">
            <b>Address</b>
            220 Redibud Drive, Whitestone, NY 11357
          </div>
        </div>

        <h2>Business Hours</h2>
        <p>
          Monday to Friday, 9:00 AM – 6:00 PM (EST). We are closed on weekends
          and public holidays, but you can email us any time.
        </p>

        <h2>Support</h2>
        <p>
          For help with an existing order, please include your order number so
          we can assist you faster. For press and partnership enquiries, reach
          out to the email above and we will route your message to the right
          team.
        </p>
      </div>
    </div>
  );
}

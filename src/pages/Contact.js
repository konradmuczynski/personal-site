import React from 'react';
import { Link } from 'react-router-dom';

import Main from '../layouts/Main';
import EmailLink from '../components/Contact/EmailLink';
import ContactIcons from '../components/Contact/ContactIcons';

const Contact = () => (
  <Main
    title="Contact"
    description="Contact Konrad Muczyński via email @ hi@muczynski.info"
  >
    <article className="post" id="contact">
      <header>
        <div className="title">
          <h2>
            <Link to="/contact">Contact</Link>
          </h2>
        </div>
      </header>
      <div className="email-at">
        <p>Feel free to get in touch. You can email me at: </p>
        <EmailLink />
        <br />
        <p>I am currently working on a contact form -
          at the moment you can also drop me a personal email at muczynskik@gmail.com
        </p>
      </div>
      <ContactIcons />
    </article>
  </Main>
);

export default Contact;

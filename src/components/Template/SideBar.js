import React from 'react';
import { Link } from 'react-router-dom';

import ContactIcons from '../Contact/ContactIcons';

const { PUBLIC_URL } = process.env; // set automatically from package.json:homepage

const SideBar = () => (
  <section id="sidebar">
    <section id="intro">
      <Link to="/" className="logo">
        <img src={`${PUBLIC_URL}/images/me.jpg`} alt="" />
      </Link>
      <header>
        <h2>Konrad Muczyński</h2>
        <p>
          <a href="mailto:hello@muczynski.info">hello@muczynski.info</a>
        </p>
      </header>
    </section>

    <section className="blurb">
      <h2>About</h2>
      <p>
        Hi, I&apos;m Konrad! I graduated from <a href="https://www.surrey.ac.uk/">Surrey University</a>,
        and I&apos;m currently working as a data analyst with plans to become a data engineer.
        This portfolio goes beyond a typical CV.
        It’s a place where I can showcase my work, skills, and things I do outside of work.
      </p>
      <ul className="actions">
        <li>
          {!window.location.pathname.includes('/resume') ? (
            <Link to="/resume" className="button">
              Learn More
            </Link>
          ) : (
            <Link to="/about" className="button">
              About Me
            </Link>
          )}
        </li>
      </ul>
    </section>

    <section id="footer">
      <ContactIcons />
      <p className="copyright">
        &copy; Konrad Muczyński <Link to="/">muczynski.info</Link>.
      </p>
    </section>
  </section>
);

export default SideBar;

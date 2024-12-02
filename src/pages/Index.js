import React from 'react';
import { Link } from 'react-router-dom';

import Main from '../layouts/Main';

const Index = () => (
  <Main
    description={
      "Konrad's personal website. Gdańsk based, University of Surrey Graduate. "
      + 'Data Analyst by profession, aspiring Data Engineer to be.'
    }
  >
    <article className="post" id="index">
      <header>
        <div className="title">
          <h2>
            <Link to="/">About this site</Link>
          </h2>
          <p>
            A modern, responsive React application developed using modern JavaScript.
            Hosted and managed using AWS Amplify.
          </p>
          <p>
            Polish language version coming soon.
          </p>
        </div>
      </header>
      <p>
        {' '}
        Welcome to my portfolio website. Please feel free to read more{' '}
        <Link to="/about">about me</Link>, or check out my{' '}
        <Link to="/resume">resume</Link>, <Link to="/projects">projects</Link>,{' '}
        <Link to="/contact">or get in contact</Link> with me.
      </p>

    </article>
  </Main>
);

export default Index;

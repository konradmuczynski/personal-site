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
            A modern, responsive React application developed using modern JavaScript,
            with a Flask backend to handle server-side functionality,
            hosted and managed on AWS Amplify.
            The architecture leverages AWS Lambda for efficient serverless computing,
            and S3 for reliable and scalable static file storage and delivery.

            Polish language version coming soon.
          </p>
        </div>
      </header>
      <p>
        {' '}
        Welcome to my website. Please feel free to read more{' '}
        <Link to="/about">about me</Link>, or you can check out my{' '}
        <Link to="/resume">resume</Link>, <Link to="/projects">projects</Link>,{' '}
        <Link to="/contact">contact</Link> me.
      </p>
      <p>
        {' '}
        Source available{' '}
        <a href="https://github.com/konradmuczynski/personal-site">here</a>.
      </p>
    </article>
  </Main>
);

export default Index;

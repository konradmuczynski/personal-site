import React from 'react';
import { Link } from 'react-router-dom';
import Main from '../layouts/Main';

const About = () => {
  // Inline the content of the "About" section as plain text or JSX
  const markdownContent = `
  ## About Me
  Hi, I'm Konrad Muczynski, a passionate developer with a love for coding and solving problems.
  
  I specialize in front-end development and enjoy creating clean, efficient, and user-friendly applications.
  
  When I'm not coding, I spend time exploring new technologies, reading books, or hiking.
  `;

  // Count words for the summary
  const wordCount = markdownContent
    .split(/\s+/)
    .map((s) => s.replace(/\W/g, ''))
    .filter((s) => s.length).length;

  return (
    <Main title="About" description="Learn about Konrad Muczynski">
      <article className="post markdown" id="about">
        <header>
          <div className="title">
            <h2>
              <Link to="/about">About Me</Link>
            </h2>
            <p>(in about {wordCount} words)</p>
          </div>
        </header>
        <div className="markdown">
          <h2>Intro</h2>
          <p>
            Hi, Im Konrad Muczynski, a passionate developers
            with a love for coding and solving problems.
          </p>
          <p>
            I specialize in front-end development
            and enjoy creating clean, efficient, and user-friendly applications.
          </p>
          <p>
            When Im not coding, I spend time exploring new technologies, r
            eading books, or hiking.
          </p>
        </div>
      </article>
    </Main>
  );
};

export default About;

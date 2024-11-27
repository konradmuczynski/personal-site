import React from 'react';
import { Link } from 'react-router-dom';
import Main from '../layouts/Main';

const About = () => {
  const markdownContent = `
  ## About Me

  Hi! My name is Konrad, at the time of writing this intro section I am 27 years-old,and I&apos;ve been a data-analyst for the last six years. I worked in number of industries, from fashion, and e-commerce to gambling and fast-moving-consumer-goods.I like to analyse large datasets, create Python applications, and learn new technologies that are beneficial to my personal & professional development.

  In my spare time, I enjoy helping others by teaching English for free on Discord and in person here in Poland, focusing on supporting individuals/groups who want to improve their language skills. In the future, I hope to open an online school where I can continue offering free education, funded through donations. If you're interested in learning or collaborating, feel free to get in touch!

  ## Some History

  - My parents brought a first computer into our living room back in 2003, when I was 6. It was a PC that was running a pirated copy of Windows XP.
  - They also subscribed to Neostrada (internet provider), which ran at a blazing speed of 40kb/s that had to be reset every hour or so. The first thing I did was buy a copy of Hitman: Blood Money because it looked cool. Thankfully I picked the option to choose cash-on-delivery otherwise my parents would have been short 300zł (around £60). No, I didn't get the game.
  - At the age of 6, we left for the UK, where I've been living on and off for the last 21 years.
  - At the age of 11, I developed my first software using Scratch.
  - At the age of 12, I built my first online website using Serif WebPlus. It was terrible.
  - At 12, I went abroad for the first time and promised myself I would travel to all of Europe before turning 35. So far, I've been to 28 of 51 countries. Mallorca, Spain and Sardinia, Italy are my favorites. I've travelled outside of Europe as well.
  - At 13, I was almost expelled from school for turning off the internet firewall by editing system registry keys to unblock coolmathgames.com and miniclip.com and sharing the workaround with everyone -- except for the teachers.
  - Here's where I started to dabble in programming languages such as JavaScript, Python, and SQL.
  - Between 13 and 17, I played a lot of video games. My favourites were Counter Strike: Global Offensive, Battlefield Bad Company 2, Halo 3, and Call of Duty Modern Warfare 2. Today, I mostly play Stellaris, Crusader Kings III & Football Manager. 
  - At 16, I started giving my first English tutoring lessons to adults and children alike in the UK.
  - At 18, I started university, and launched my first business.

  Ask me in person for other stories that I'm afraid to share with the internet.

  ## I like

  - Running. Ok, I don't but I need to lose some kilograms. Love what you hate.
  - Boxing
  - Space
  - Spring & Summer
  - Football (especially Arsenal)
  - Science-Fiction books and everything related
  - Cooking! I specialise in Italian, French and Indian cuisines
  - Good designed websites
  - Websites that let you decline all cookies at once

  ## Travel & Geography

  - I am originally from Grajewo, Poland. It is near Belarusian & Russian border. I have since lived in London, Paris, Warsaw, Palma De Mallorca and Gdańsk.
  - I've been approximately to 35 countries, many of which I would like to revisit once again.
  - In 2016, I've been to France, Spain, Portugal, Germany, Italy, Switzerland, Monaco, Luxembourg, Ireland, Northern-Ireland, Wales, Scotland, Sweden, Norway, Denmark, Belgium & Netherlands. Definitely not in correct order.
  - In 2017, I've been to Croatia, Czech Republic, Greece, Montenegro, Albania, Slovenia, Slovakia, Italy & Vatican City.
  - In 2018, when I received my driver licence I rented a car and drove solo from Eastern border of Poland all the way to south of France through Germany & Switzerland. I lost my deposit.
  - In 2019, I travelled to Latvia & Estonia. I run out of savings by then from working part-time jobs.
  - In 2020, I travelled to my grocery shop and back. I stayed in Gdańsk then.
  - In 2021, I travelled across Poland. I fell in love with the mountains to the south, and the Mazurian regions in the north.
  - Since 2021, I've been to UAE, Singapore, Korea & China. In the future I want to visit Canada, USA, Australia & New Zealand.

  ## Fun Facts

  - I operate a small investment portfolio with terrible (but positive) returns. Except for 2021 and 2024. Those years were great.
  - I rank every book that I read, and every movie that I watch. I also publish anonymous reviews for every restaurant I've eaten at.
  - I added this section because my friends complained that my site was just my resume.
  `;

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
          <h3>Intro</h3>
          <p>
            Hi! My name is Konrad, at the time of writing this intro section I am 27 years-old,
            and I&apos;ve been a data-analyst for the last six years.
            I worked in number of industries, from fashion and e-commerce
            to gambling and fast-moving-consumer-goods.
            I like to analyse large datasets, create Python applications,
            and learn new technologies that are beneficial to my personal
            & professional development.
          </p>
          <br />
          <p>
            In my spare time, I enjoy helping others by teaching English for free on Discord,
            and in person here in Poland, focusing on supporting individuals/groups who want
            to improve their language skills. In the future, I hope to open an online school
            where I can continue offering free education, funded through donations. If you&apos;re
            interested in learning or collaborating, feel free to get in touch!
          </p>
          <br />
          <h3>Some History</h3>
          <ul>
            <li>
              My parents brought a first computer into our living room back in 2003, when I was 6.
              It was a PC that was running a pirated copy of Windows XP.
            </li>
            <li>
              They also subscribed to Neostrada (internet provider), which ran at a blazing
              speed of 40kb/s that had to be reset every hour or so.
              The first thing I did was buy a copy of Hitman: Blood Money because
              it looked cool.
              Thankfully I picked the option to choose cash-on-delivery
              otherwise my parents would have been short 300zł(around £60).
              No, I didn&apos;t get the game.
            </li>
            <li>
              At the age of 6, we left for the UK, where I&apos;ve been living on and off for the
              last 21 years.
            </li>
            <li>
              At the age of 11, I developed my first software using Scratch.
            </li>
            <li>
              At the age of 12, I built my first online website using Serif WebPlus.
              It was terrible.
            </li>
            <li>
              At 12, I went abroad for the first time, and I promised myself I would travel to all
              of Europe before turning 35. So far, I&apos;ve been
              to 28 of 51 countries. Mallorca, Spain and Sardinia, Italy
              are my favorites.
              I&apos;ve travelled outside of Europe as well.
            </li>
            <li>
              At 13, I was almost expelled from school for turning off the internet firewall by
              editing system registry keys to unblock coolmathgames.com and miniclip.com.
              and sharing the workaround with everyone -- except for the teachers.
            </li>
            <li>
              Here&apos;s where I started to dabble in programming languages such as JavaScript,
              Python, and SQL.
            </li>
            <li>
              Between 13 and 17, I played a lot of video games. My favourites were Counter Strike:
              Global Offensive, Battlefield Bad Company 2,
              Halo 3, and Call of Duty Modern Warfare 2.
              Today, I mostly play Stellaris, Crusader Kings III, and Football Manager.
            </li>
            <li>
              At 16, I started giving my first English tutoring lessons to adults and children
              alike in the UK.
            </li>
            <li>
              At 18, I started university, and launched my first business.
            </li>
          </ul>
          <p>Ask me in person for other stories that I&apos;m afraid to share with the internet.</p>
          <br />
          <h3>I like</h3>
          <ul>
            <li>Running.</li>
            <li>Boxing</li>
            <li>Space</li>
            <li>Spring & Summer</li>
            <li>Football (especially Arsenal)</li>
            <li>Science-Fiction books and everything related to Science-Fiction</li>
            <li>Cooking - I specialise in Italian, French, and Indian cuisines</li>
            <li>Good designed websites</li>
            <li>Websites that let you decline all cookies at once</li>
          </ul>
          <h3>Travel & Geography</h3>
          <ul>
            <li>
              I am originally from Grajewo, Poland. It is near Belarusian & Russian border.
              I have since lived in London, Paris, Warsaw, Palma De Mallorca and Gdańsk.
            </li>
            <li>
              I&apos;ve been approximately to 35 countries, many of which
              I would like to revisit once again in the near future.
            </li>
            <li>
              In 2016, I&apos;ve been to France, Spain, Portugal,
              Germany, Italy, Switzerland, Monaco, Luxembourg,
              Ireland, Northern-Ireland, Wales, Scotland,
              Denmark, Belgium & Netherlands.
              Definitely not in correct order.
            </li>
            <li>
              In 2017, I&apos;ve been to Croatia, Czech Republic,
              Greece, Montenegro, Albania,
              Slovenia, Slovakia, Italy & Vatican City.
            </li>
            <li>
              In 2018, when I received my driver&apos;s licence I rented a car
              , and drove solo from Eastern border of Poland
              all the way to south of France through Germany
              & Switzerland. I lost my deposit.
            </li>
            <li>
              In 2019, I travelled to Latvia & Estonia.
              I run out of savings by then.
            </li>
            <li>
              In 2020, I travelled to my grocery shop and back. I stayed in Gdańsk then.
            </li>
            <li>
              In 2021, I travelled across Poland. I fell in love with
              the mountains to the south,
              and the Mazurian regions in the north.
            </li>
            <li>
              Since 2021, I&apos;ve been to UAE, Singapore, Korea & China.
              In the future I want to visit Canada, USA, Australia & New Zealand.
            </li>
          </ul>
          <h3>Fun Facts</h3>
          <ul>
            <li>
              I operate a small investment portfolio with terrible (but positive) returns.
              Except for 2021 and 2024. Those years were great.
            </li>
            <li>
              I rank every book that I read, and every movie that I watch.
              I also publish anonymous reviews
              for every restaurant I&apos;ve eaten at.
            </li>
            <li>
              I added this section because my friends complained
              that my site was just my resume.
            </li>
          </ul>
        </div>
      </article>
    </Main>
  );
};

export default About;

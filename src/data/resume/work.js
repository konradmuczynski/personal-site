/**
 * @typedef {Object} Position
 * Conforms to https://jsonresume.org/schema/
 *
 * @property {string} name - Name of the company
 * @property {string} position - Position title
 * @property {string} location - Location of the office
 * @property {string} url - Company website
 * @property {string} startDate - Start date of the position in YYYY-MM-DD format
 * @property {string|undefined} endDate - End date of the position in YYYY-MM-DD format.
 * If undefined, the position is still active.
 * @property {string|undefined} summary - html/markdown summary of the position
 * @property {string[]} highlights - plain text highlights of the position (bulleted list)
 */
const work = [
  {
    name: 'Amway Corporation',
    position: 'Senior Data Analyst',
    location: 'Cracow, Poland',
    url: 'https://www.amway.com',
    startDate: '2024-10-01',
    endDate: '2025-08-01',
    summary: 'Amway is a global company that manufactures and sells health, beauty, and home care products through a direct selling model, operating in over 100 countries.',
    highlights: [
      'Led a project with three team members to migrate local-market datasets into a unified global dataset, resolving issues with outdated code, unmaintained repositories, and unreliable data. The migration improved data quality and enabled consistent global reporting.',
      'Utilized BigQuery to analyze large-scale datasets across multiple business units, identifying trends, fixing bugs, and modyfing existing queries to make them more efficient.',
      'Collobarated with the the engineering team(s) to create and implement new data-pipelines using SQL and Python.',
      'Worked closely with internal teams to assess the performance of independent Amway Business Owners (ABOs), uncovering sales trends and highlighting areas for growth and support.',
      'Implemented Agile methodologies, introduced structured weekly sprints, and set-up task tracking and project managing in JIRA to improve upon team collaboration',
      'Estabilished Confluence as a documentation and knowledge sharing hub, to help with onboarding support, and general knowledge sharing for interested stakeholders',
      'Implemented GitHub for version control of scripts and queries, transitioning from a production-level environment to a structured and reviewable workflow.',
      'Mentored and onboarded two new analysts by showcasing them our data-models, business processes, and other internal tools that we were using on a day-to-day basis.',
    ],
  },
  {
    name: 'Fitness Authority',
    position: 'Data Analyst',
    location: 'Gdansk, Poland',
    url: 'https://www.fasklep.pl',
    startDate: '2023-06-01',
    endDate: '2024-09-01',
    summary: 'Fitness Authority is a Polish brand that specializes in producing and selling dietary supplements, sports nutrition products, and fitness accessories.',
    highlights: [
      'Developed a full-stack web app using QlikSense, SQL, and Python to monitor inventory levels, identify products nearing expiration, track low-demand items, and apply dynamic pricing to all products.',
      'Created a new inventory model using Python that dynamically adjusted inventory levels based on historical sales data, optimizing stock management and minimizing waste.',
      'Collaborated with different departments to design and implement new processes using BPMN, streamlining workflows and improving overall efficiency across the organization.',
      'Introduced agile project management practices within the sales department, ensuring visibility into employee tasks and progress, and improving efficiency and adaptability.',
      'Presented detailed results using historical and current data to the board of directors on a monthly and quarterly basis, offering insights into performance, key achievements, and areas for improvement.',
    ],
  },
  {
    name: 'JohnnyBros',
    position: 'Marketing Analyst',
    location: 'Gdansk, Poland',
    url: 'https://www.johnnybros.pl',
    startDate: '2022-04-01',
    endDate: '2023-05-01',
    summary: 'JohnnyBros is a Polish digital marketing agency that specializes in SEO, SEM, and performance marketing for clients across various industries.',
    highlights: [
      'Analyzed marketing performance data using Google Analytics and Google Data Studio, generating insights and reports for internal teams and clients.',
      'Conducted small-scale A/B tests to selected user-groups, experimenting with small changes such as moving the CTA button to different places on web/mobile pages.',
      'Redirected development priorities from web to mobile platforms after identifying that the majority of users were engaging via mobile devices.',
      'Supported hiring decisions by identifying the most profitable—rather than simply the most popular—market segments, helping to improve conversion rates and ROI in high-performing areas.',
      'Delivered weekly, monthly, and quarterly performance reports and presentations to SEO teams and upper management, providing insights into business and campaign performance.',
    ],
  },
  {
    name: 'Smarkets',
    position: 'Insight Analyst',
    location: 'London, UK',
    url: 'https://www.smarkets.com',
    startDate: '2021-09-01',
    endDate: '2022-03-01',
    summary: 'Smarkets is a UK-based online betting exchange where users bet against each other on events like sports and politics.',
    highlights: [
      'Analysed customer behaviour, transaction patterns, and game performance to identify trends and opportunities for business growth.',
      'Generated detailed reports and dashboards using Sisense to track KPIs, such as customer retention, conversion rates, and revenue generation.',
      'Conducted A/B testing and other data experiments to inform decisions on promotions, product offerings, and user interface optimizations.',
      'Developed ETL pipelines and data processing scripts for large-scale data in an agile environment.',
      'Used Redshift for data-analysis, and Django framework for back-end development.',
    ],
  },
  {
    name: 'LPP SA / Sinsay',
    position: 'Junior Data Analyst',
    url: 'https://www.sinsay.com/pl/pl/',
    startDate: '2019-06-01',
    endDate: '2021-07-01',
    summary: 'Sinsay is a Polish fashion brand that offers clothing, accessories, and home decor for a young audience. As a Junior Data Analyst, I supported data-driven decision-making by analyzing sales data, conducting A/B tests, and creating dashboards to provide insights across the business.',
    highlights: [
      'Developed and optimized SQL queries to extract and analyse sales data across 15+ countries where the Sinsay brand was present, providing actionable insights to support business decisions.',
      'Conducted small-scale A/B tests on selected user groups, experimenting with changes such as price font and colour to assess impact.',
      'Created interactive dashboards using Google Data Studio (Looker) for marketing, sales and other departments',
      'Authored a comprehensive white paper detailing 50+ A/B testing concepts, with 4 ideas successfully implemented in 2021.',
      'Performed simple data analysis using Pandas to extract insights, presenting findings to management through detailed Excel reports and presentations.',
    ],
  },
  {
    name: 'Argos',
    position: 'Customer Assistant (part-time)',
    url: 'https://www.argos.co.uk/',
    startDate: '2016-10-01',
    endDate: '2019-04-01',
    summary: 'Part-time job whilst at university involving customer service, restocking inventory, and training new employees in a high-turnover environment.',
    highlights: [
      'Providing customer service by helping them with product buying.',
      'Restocking inventory in the magazine to optimal levels',
      'Trained new employees in high-turnover environment.',
    ],
  },
  {
    name: 'Lushurious',
    position: 'Founder',
    startDate: '2016-11-01',
    endDate: '2017-06-01',
    summary: 'Lushurious was a dropshipping business that imported hand cosmetics, candles, and room perfumes from manufacturers in China. These products were then packaged into wooden baskets and sold locally at the Guildford market.',
    highlights: [
      'Launched a dropshipping business during university with an initial investment of £10,000.',
      'Sourced and imported products directly from Chinese manufacturers for resale in the UK market.',
      'Led a team of 10, achieving a total revenue of £55,000 and a net profit of ~£8,000, with a profit margin of 14.55%.',
      'Successfully concluded operations as part of a university initiative, with profits distributed equally among the team.',
    ],
  },
  {
    name: 'Waitrose',
    position: 'Customer Assistant (part-time)',
    url: 'https://www.waitrose.com/',
    startDate: '2015-02-01',
    endDate: '2016-08-01',
    summary: 'Balanced a part-time role as a customer assistant with full-time sixth-form studies.',
    highlights: [
      'Providing customer service to clients by helping them find products, and pointing them in right directions',
      'Restocking shelves to optimal levels',
      'Ensured the store remained presentable, and clean to customers',
    ],
  },
  {
    name: 'Starbucks',
    position: 'Marketing Analyst Summer Intern',
    url: 'https://www.starbucks.co.uk/',
    startDate: '2014-07-01',
    endDate: '2014-09-01',
    summary: 'Completed a summer internship during sixth form, supporting the marketing analytics team.',
    highlights: [
      'Tracked and gathered performance data from Facebook, Google, and Twitter ad campaigns.',
      'Assisted full-time analysts by organizing social media metrics and creating basic performance reports.',
      'Contributed to insights on campaign effectiveness and customer engagement trends.',
    ],
  },
];
export default work;

import { faGithub } from '@fortawesome/free-brands-svg-icons/faGithub';
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons/faLinkedinIn';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons/faEnvelope';
// See https://fontawesome.com/icons?d=gallery&s=brands,regular&m=free
// to add other icons.

const data = [
  {
    link: 'https://github.com/konradmuczynski',
    label: 'Github',
    icon: faGithub,
  },
  {
    link: 'https://www.linkedin.com/in/konradmuczynski',
    label: 'LinkedIn',
    icon: faLinkedinIn,
  },
  {
    link: 'mailto:hello@muczynski.info',
    label: 'Email',
    icon: faEnvelope,
  },
];

export default data;

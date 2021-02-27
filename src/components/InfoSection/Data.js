import imgCar from '../../images/svg-1.svg';
import imgSavings from '../../images/svg-2.svg';
import imgWallet from '../../images/svg-3.svg';

export const homeObjOne = {
  id: 'about',
  lightBg: true,
  lightText: false,
  lightTextDesc: false,
  topLine: 'Premium Bank',
  headline: 'Unlimited Transactions with zero fees',
  description: 'Get access to our exclusive app that allows you to send unlimited transactions without getting charged any fees.',
  buttonLabel: 'Get started',
  imgStart: false,
  img: imgCar,
  alt: 'Car',
  dark: false,
  primary: false,
  darkText: true
};


export const homeObjTwo = {
  id: 'discover',
  lightBg: false,
  lightText: true,
  lightTextDesc: true,
  topLine: 'Unlimited Access',
  headline: 'Login to your account at any time',
  description: 'We have you covered no matter where you are located. All you need is an internet connection and a phone or computer.',
  buttonLabel: 'Learn More',
  imgStart: true,
  img: imgSavings,
  alt: 'PiggyBank',
  dark: true,
  primary: true,
  darkText: false
};

export const homeObjThree = {
  id: 'signup',
  lightBg: true,
  lightText: false,
  lightTextDesc: false,
  topLine: 'Join our Team',
  headline: 'Creating an account is extremely easy',
  description: 'Get everything set up and ready in under 10 minutes. All you need to do is your information and you\'re ready to go.',
  buttonLabel: 'Start Now',
  imgStart: false,
  img: imgWallet,
  alt: 'Paper',
  dark: false,
  primary: false,
  darkText: true
};

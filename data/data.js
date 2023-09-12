export const schoolData = [
  {
    id: 0,
    name: 'Bedminster',
    location: {
      address: 'Holy Cross Primary School, Dean Ln, Bedminster, BS3 1DB',
      lat: 51.44317,
      lng: -2.59923,
    },
    content: 'content',
    socialMedia: 'https://www.facebook.com/PolskaSzkolaJezykaiKulturyHolyCross',
    topBarClass: 'bg-btn1-clr',
    cardIcon: '/logo-holy-cross.webp',
    tel: '07307069563',
    mail: 'polishschoolbristol2@gmail.com',
  },
  {
    id: 1,
    name: 'Oasis',
    location: {
      address: 'Oasis Academy Bank Leaze, Corbet Close, BS11 0SN',
      lat: 51.50663,
      lng: -2.64926,
    },
    content: 'content',
    socialMedia: 'https://www.facebook.com/PolishSchoolBristol',
    topBarClass: 'bg-btn2-clr',
    cardIcon: '/logo-oasis.webp',
    tel: '07749651740',
    mail: 'polishschoolbristol@gmail.com',
  },
];

export const generalFees = [
  { id: 1, price: '£16 za pierwsze dziecko' },
  { id: 2, price: '£12 za drugie dziecko' },
  { id: 3, price: '£9 za trzecie dziecko' },
  { id: 4, price: '£0 za czwarte dziecko' },
];

const fourSaturdays = '4 Soboty';
const threeSaturdays = '3 Soboty';
const twoSaturdays = '2 Soboty';
const oneSaturday = '1 Sobota';

export const feesOasis = [
  { id: 11, paymentDate: '30 września 2023', period: twoSaturdays },
  { id: 12, paymentDate: '7 października 2023', period: threeSaturdays },
  { id: 13, paymentDate: '4 listopada 2023', period: fourSaturdays },
  { id: 14, paymentDate: '2 grudnia 2023', period: threeSaturdays },
  { id: 15, paymentDate: '6 stycznia 2024', period: fourSaturdays },
  { id: 16, paymentDate: '3 lutego 2024', period: threeSaturdays },
  { id: 17, paymentDate: '2 marca 2024', period: fourSaturdays },
  { id: 18, paymentDate: '20 kwietnia 2024', period: twoSaturdays },
  { id: 19, paymentDate: '4 maja 2024', period: fourSaturdays },
  { id: 20, paymentDate: '8 czerwca 2024', period: fourSaturdays },
];

export const feesHolyCross = [
  { id: 12, paymentDate: '23 września 2023', period: threeSaturdays },
  { id: 13, paymentDate: '7 października 2023', period: threeSaturdays },
  { id: 14, paymentDate: '4 listopada 2023', period: fourSaturdays },
  { id: 15, paymentDate: '2 grudnia 2023', period: threeSaturdays },
  { id: 16, paymentDate: '6 stycznia 2024', period: fourSaturdays },
  { id: 17, paymentDate: '3 lutego 2024', period: threeSaturdays },
  { id: 18, paymentDate: '2 marca 2024', period: fourSaturdays },
  { id: 19, paymentDate: '20 kwietnia 2024', period: twoSaturdays },
  { id: 20, paymentDate: '4 maja 2024', period: fourSaturdays },
  { id: 21, paymentDate: '8 czerwca 2024', period: fourSaturdays },
  { id: 22, paymentDate: '6 lipca 2024', period: oneSaturday },
];

export const staffOasis = [
  {
    id: 1,
    name: 'Patrycja Sikorska',
    desc: 'Patrycja .......',
    role: 'Head Teacher',
    photo: '/staff/teacher-Patrycja Sikorska.jpg',
  },
];

export const staffBedminister = [{ id: 1, name: '', desc: '', photo: '' }];

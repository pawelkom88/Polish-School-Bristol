export const schoolData = [
  {
    id: 'Bedminister',
    name: 'Holy Cross (Bedminster)',
    link: 'bedminister',
    location: {
      address: 'Holy Cross Primary School, Dean Ln, Bedminster, BS3 1DB',
      lat: 51.44317,
      lng: -2.59923,
    },
    content: 'content',
    socialMedia: 'https://www.facebook.com/PolskaSzkolaJezykaiKulturyHolyCross',
    topBarClass: 'bg-btn1-clr',
    cardIcon: '/logo-holy-cross.webp',
  },
  {
    id: 'Lawrence Weston',
    name: 'Oasis Academy Bank Leaze (Lawrence Weston)',
    link: 'oasis',
    location: {
      address: 'Oasis Academy Bank Leaze, Corbet Close, BS11 0SN',
      lat: 51.50663,
      lng: -2.64926,
    },
    content: 'content',
    socialMedia: 'https://www.facebook.com/PolishSchoolBristol',
    topBarClass: 'bg-btn2-clr',
    cardIcon: '/logo-oasis.webp',
  },
];

const fourSaturdays = '4 Soboty';

const threeSaturdays = '3 Soboty';

const twoSaturdays = '2 Soboty';

export const feesOasis = [
  { id: 1, paymentDate: '1 października 2022', period: fourSaturdays },
  { id: 2, paymentDate: '6 listopada 2022', period: fourSaturdays },
  { id: 3, paymentDate: '4 grudnia 2022', period: threeSaturdays },
  { id: 4, paymentDate: '8 stycznia 2023  ', period: threeSaturdays },
  { id: 5, paymentDate: '5 lutego 2023', period: threeSaturdays },
  { id: 6, paymentDate: '5 marca 2023', period: fourSaturdays },
  { id: 7, paymentDate: '2 kwietnia 2023', period: threeSaturdays },
  { id: 8, paymentDate: '7 maja 2023', period: fourSaturdays },
  { id: 9, paymentDate: '11 czerwca 2023', period: fourSaturdays },
  { id: 10, paymentDate: '2 lipca 2023', period: threeSaturdays },
];

export const feesHolyCross = [
  { id: 1, paymentDate: '17 września 2022', period: threeSaturdays },
  { id: 2, paymentDate: '1 października 2022', period: fourSaturdays },
  { id: 3, paymentDate: '6 listopada 2022', period: fourSaturdays },
  { id: 4, paymentDate: '4 grudnia 2022  ', period: threeSaturdays },
  { id: 5, paymentDate: '8 stycznia 2023', period: threeSaturdays },
  { id: 6, paymentDate: '5 lutego 2023', period: threeSaturdays },
  { id: 7, paymentDate: '5 marca 2023', period: fourSaturdays },
  { id: 8, paymentDate: '2 kwietnia 2023', period: threeSaturdays },
  { id: 9, paymentDate: '7 maja 2023', period: fourSaturdays },
  { id: 10, paymentDate: '11 czerwca 2023', period: fourSaturdays },
  { id: 11, paymentDate: '2 lipca 2023', period: twoSaturdays },
];

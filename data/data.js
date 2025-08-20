export const schoolData = [
  {
    id: 0,
    name: 'Bedminster',
    location: {
      address: 'Holy Cross Catholic Primary School, Dean Ln, Bedminster, BS3 1DB',
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
  { id: 1, price: '£17 za pierwsze dziecko' },
  { id: 2, price: '£30 za dwoje dzieci' },
  { id: 3, price: '£40 za troje i więcej dzieci' },
  // { id: 4, price: '£0 za czwarte dziecko' },
];

const fiveSaturdays = '5 Sobót';
const fourSaturdays = '4 Soboty';
const threeSaturdays = '3 Soboty';
const twoSaturdays = '2 Soboty';
const oneSaturday = '1 Sobota';

export const feesHolyCross = [
  { id: 1, paymentDate: '27 września 2025', period: twoSaturdays },
  { id: 2, paymentDate: '4 października 2025', period: fourSaturdays },
  { id: 3, paymentDate: '8 listopada 2025', period: fourSaturdays },
  { id: 4, paymentDate: '6 grudnia 2025', period: threeSaturdays },
  { id: 5, paymentDate: '10 stycznia 2026', period: fourSaturdays },
  { id: 6, paymentDate: '7 lutego 2026', period: threeSaturdays },
  { id: 7, paymentDate: '7 marca 2026', period: fourSaturdays },
  { id: 8, paymentDate: '18 kwietnia 2026', period: twoSaturdays },
  { id: 9, paymentDate: '9 maja 2026', period: threeSaturdays },
  { id: 10, paymentDate: '6 czerwca 2026', period: oneSaturday },
  { id: 1, paymentDate: '4 lipca 2026', period: oneSaturday },
];

export const feesOasis = [
  { id: 1, paymentDate: '27 września 2025', period: twoSaturdays },
  { id: 2, paymentDate: '4 października 2025', period: fourSaturdays },
  { id: 3, paymentDate: '8 listopada 2025', period: fourSaturdays },
  { id: 4, paymentDate: '6 grudnia 2025', period: threeSaturdays },
  { id: 5, paymentDate: '10 stycznia 2026', period: fourSaturdays },
  { id: 6, paymentDate: '7 lutego 2026', period: threeSaturdays },
  { id: 7, paymentDate: '7 marca 2026', period: fourSaturdays },
  { id: 8, paymentDate: '18 kwietnia 2026', period: twoSaturdays },
  { id: 9, paymentDate: '9 maja 2026', period: threeSaturdays },
  { id: 10, paymentDate: '6 czerwca 2026', period: fourSaturdays },
  { id: 11, paymentDate: '4 lipca 2026', period: oneSaturday },
];

const staffImageProps = {
  placeholder: 'blur',
  blurDataURL:
    'data:image/webp;base64,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',
};

export const staffBedminister = [
  {
    id: 1,
    name: 'Patrycja Sikorska',
    role: 'Dyrektor',
    photo: '/staff/PatrycjaSikorska.jpg',
    photo2: '/staff/PatrycjaSikorska2.jpg',
  },
  {
    id: 11,
    name: 'Patrycja Przygodzka',
    role: 'Dyrektor',
    photo: '/staff/PatrycjaPrzygodzka.jpg',
    photo2: '/staff/PatrycjaPrzygodzka2.jpg',
  },
  {
    id: 2,
    name: 'Luiza Parol',
    role: 'Manager Szkoły',
    photo: '/staff/LuizaParol.jpg',
    photo2: '/staff/LuizaParol2.jpg',
  },
  {
    id: 22,
    name: 'Marta Jóźwiak',
    role: 'Przedszkole',
    photo: '/staff/MartaJóźwiak.jpg',
    photo2: '/staff/MartaJóźwiak2.jpg',
  },
  {
    id: 33,
    name: 'Monika Grabowska',
    role: 'Asystentka nauczyciela',
    photo: '/staff/MonikaGrabowska.jpg',
  },
  {
    id: 44,
    name: 'Justyna Małek',
    role: 'Asystentka nauczyciela',
  },
  {
    id: 3,
    name: 'Magdalena Shad',
    role: 'Klasa "0"',
    photo: '/staff/MagdaShad.jpg',
    photo2: '/staff/MagdaShad2.jpg',
  },
  {
    id: 99,
    name: 'Joanna Michańska',
    role: '1 - Klasa',
    photo: '/staff/JoannaMichańska.jpg',
    photo2: '/staff/JoannaMichańska2.jpg',
  },
  {
    id: 4,
    name: 'Monika Jurgiel',
    role: '2 - Klasa',
    photo: '/staff/MonikaJurgiel.jpg',
    photo2: '/staff/MonikaJurgiel2.jpg',
  },
  {
    id: 5,
    name: 'Sylwia Łakoma',
    role: '3 - Klasa',
    photo: '/staff/SylwiaŁakoma.jpg',
    photo2: '/staff/SylwiaŁakoma2.jpg',
  },
  {
    id: 7,
    name: 'Małgorzata Kislingbury',
    role: '4 - Klasa',
    photo: '/staff/MałgorzataKislingbury.jpg',
    photo2: '/staff/MałgorzataKislingbury2.jpg',
  },
  {
    id: 8,
    name: 'Joanna Alankowicz',
    role: 'Klasa gimnazjalna',
  },
  {
    id: 9,
    name: 'Barbara Studzienna',
    role: 'Klasa GCSE',
  },
].map((x) => ({ ...x, ...staffImageProps }));

export const staffOasis = [
  {
    id: 1,
    name: 'Patrycja Przygodzka',
    role: 'Dyrektor',
    photo: '/staff/PatrycjaPrzygodzka.jpg',
    photo2: '/staff/PatrycjaPrzygodzka2.jpg',
  },
  {
    id: 11,
    name: 'Patrycja Sikorska',
    role: 'Dyrektor',
    photo: '/staff/PatrycjaSikorska.jpg',
    photo2: '/staff/PatrycjaSikorska2.jpg',
  },
  {
    id: 8,
    name: 'Magdalena Jurgielewicz',
    role: 'Manager Szkoły',
  },
  {
    id: 2,
    name: 'Krystyna Wójtowicz',
    role: 'Młodsze Przedszkole',
    photo: '/staff/KrystynaWójtowicz.jpg',
  },
  {
    id: 11,
    name: 'Magdalena Bednarska',
    role: 'asystent nauczyciela',
  },
  {
    id: 12,
    name: 'Weronika Buczyńska',
    role: 'asystent nauczyciela',
  },
  {
    id: 13,
    name: 'Urszula Wiśniewska',
    role: 'asystent nauczyciela',
  },
  {
    id: 14,
    name: 'Łukasz Płonka',
    role: 'asystent nauczyciela',
  },
  {
    id: 3,
    name: 'Magda Marcinkowska',
    role: 'Klasa "0"',
    photo: '/staff/MagdaMarcinkowska.jpg',
    photo2: '/staff/MagdaMarcinkowska2.jpg',
  },
  {
    id: 15,
    name: 'Ewelina Niedzielska',
    role: '1 - Klasa',
  },
  {
    id: 6,
    name: 'Brygida Warych',
    role: '2 - Klasa',
    photo: '/staff/BrygidaWarych.jpg',
    photo2: '/staff/BrygidaWarych2.jpg',
  },
  {
    id: 7,
    name: 'Katarzyna Skrzypacz',
    role: '3 - Klasa',
  },
  {
    id: 9,
    name: 'Marta Gancarek',
    role: '5 - Klasa',
    photo: '/staff/MartaGancarek.jpg',
    photo2: '/staff/MartaGancarek2.jpg',
  },
  {
    id: 10,
    name: 'Sylwia Sikocińska',
    role: 'Klasa GCSE',
    photo: '/staff/SylwiaSikocińska.jpg',
    photo2: '/staff/SylwiaSikocińska2.jpg',
  },
].map((x) => ({ ...x, ...staffImageProps }));

export const tableDataOasis = [
  'Anders Army Polish School',
  '20-18-17',
  '63620956',
  'Imię i nazwisko dziecka\noraz numer miesiąca („Jan Kowalski 09”)',
];

export const tableDataBedminister = [
  'Anders Army Polish School',
  '20-18-17',
  '63493776',
  'Imię i nazwisko dziecka\noraz numer miesiąca („Jan Kowalski 09”)',
];
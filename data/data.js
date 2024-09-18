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

export const feesOasis = [
  { id: 1, paymentDate: '28 września 2024', period: twoSaturdays },
  { id: 2, paymentDate: '5 października 2024', period: fourSaturdays },
  { id: 3, paymentDate: '9 listopada 2024', period: fourSaturdays },
  { id: 4, paymentDate: '7 grudnia 2024', period: twoSaturdays },
  { id: 5, paymentDate: '11 stycznia 2025', period: threeSaturdays },
  { id: 6, paymentDate: '1 lutego 2025', period: threeSaturdays },
  { id: 7, paymentDate: '1 marca 2025', period: fiveSaturdays },
  { id: 8, paymentDate: '5 kwietnia 2025', period: twoSaturdays },
  { id: 9, paymentDate: '3 maja 2025', period: fourSaturdays },
  { id: 10, paymentDate: '7 czerwca 2025', period: fourSaturdays },
];

export const feesHolyCross = [
  { id: 1, paymentDate: '28 września 2024', period: twoSaturdays },
  { id: 2, paymentDate: '5 października 2024', period: fourSaturdays },
  { id: 3, paymentDate: '9 listopada 2024', period: fourSaturdays },
  { id: 4, paymentDate: '7 grudnia 2024', period: twoSaturdays },
  { id: 5, paymentDate: '11 stycznia 2025', period: threeSaturdays },
  { id: 6, paymentDate: '1 lutego 2025', period: threeSaturdays },
  { id: 7, paymentDate: '1 marca 2025', period: fiveSaturdays },
  { id: 8, paymentDate: '5 kwietnia 2025', period: twoSaturdays },
  { id: 9, paymentDate: '3 maja 2025', period: fourSaturdays },
  { id: 10, paymentDate: '7 czerwca 2025', period: fourSaturdays },
  { id: 11, paymentDate: '5 lipca 2025', period: oneSaturday },
];

export const staffBedminister = [
  {
    id: 1,
    name: 'Patrycja Sikorska',
    // desc: 'Patrycja .......',
    role: 'Dyrektor',
    photo: '/staff/teacher-Patrycja Sikorska.jpg',
  },
  {
    id: 11,
    name: 'Patrycja Przygodzka',
    // desc: '',
    role: 'Dyrektor',
    // photo: '/staff/teacher-Patrycja-Przygodzka.jpg',
  },
  {
    id: 2,
    name: 'Luiza Parol',
    // desc: 'Brak podręcznika – Opłata £10 na poczet przyborów szkolnych i craftowych',
    role: 'Przedszkole',
    // photo: '/staff/teacher-Luiza-Marta.jpg',
  },
  {
    id: 22,
    name: 'Marta Jóźwiak',
    // desc: 'Brak podręcznika – Opłata £10 na poczet przyborów szkolnych i craftowych',
    role: 'Przedszkole',
    // photo: '/staff/teacher-Luiza-Marta.jpg',
  },
  {
    id: 33,
    name: 'Monika Grabowska',
    // desc: 'Brak podręcznika – Opłata £10 na poczet przyborów szkolnych i craftowych',
    role: 'Asystentka nauczyciela',
    // photo: '/staff/teacher-Luiza-Marta.jpg',
  },
  {
    id: 44,
    name: 'Justyna Małek',
    // desc: 'Brak podręcznika – Opłata £10 na poczet przyborów szkolnych i craftowych',
    role: 'Asystentka nauczyciela',
    // photo: '/staff/teacher-Luiza-Marta.jpg',
  },
  {
    id: 3,
    name: 'Magdalena Shad',
    // desc: '„Mój Pierwszy Elementarz. Czytamy metodą sylabową (wydawnictwo GREG)” oraz opłata na poczet materiałów dodatkowych.',
    role: 'Klasa “0”',
    // photo: '/staff/teacher-Magdalena-Shad.jpg',
  },
  {
    id: 4,
    name: 'Monika Jurgiel',
    // desc: '„Elementarz Dla Dzieci Polonijnych. Klasa 1” Podręcznik i Ćwiczenia (Małgorzata Pawlusiewicz)',
    role: '1 - Klasa',
    // photo: '/staff/teacher-Monika-Jurgiel.jpg',
  },
  {
    id: 5,
    name: 'Sylwia Łakoma',
    // desc: '„Druga klaso – jestem gotowy!” Podręcznik i Ćwiczenia (Eliza Skiba)',
    role: '2 - Klasa',
    // photo: '/staff/teacher-Sylwia-Lakoma.jpg',
  },
  {
    id: 6,
    name: 'Joanna Michańska',
    // desc: '„Z Anią przez Polskę – Poziom II” (Kenbooks)',
    role: '3 - Klasa',
    // photo: '/staff/teacher-Joanna-Michanska.jpg',
  },
  {
    id: 7,
    name: 'Małgorzata Kislingbury',
    // desc: '„Polski Krok po Kroku – Junior 1” Podręcznik (Glossa)',
    role: '4 - Klasa',
    // photo: '/staff/teacher-Malgorzata-Kislingbury.jpg',
  },
  {
    id: 8,
    name: 'Joanna Alankowicz',
    // desc: '„Polski Krok po Kroku – Junior 1” Podręcznik (Glossa)',
    role: '5 - Klasa',
    // photo: '/staff/teacher-Joanna-Alankowicz.jpg',
  },
  {
    id: 9,
    name: 'Barbara Studzienna',
    // desc: 'Klasa GCSE',
    role: 'Klasa GCSE',
    // photo: '/staff/teacher-Barbara-Studzienna.jpg',
  },
];

export const staffOasis = [
  {
    id: 1,
    name: 'Patrycja Przygodzka',
    // desc: '',
    role: 'Dyrektor',
    // photo: '/staff/teacher-Patrycja-Przygodzka.jpg',
  },
  {
    id: 11,
    name: 'Patrycja Sikorska',
    // desc: 'Patrycja .......',
    role: 'Dyrektor',
    photo: '/staff/teacher-Patrycja Sikorska.jpg',
  },
  {
    id: 2,
    name: 'Krystyna Wójtowicz',
    // desc: '',
    role: 'Młodsze Przedszkole',
    // photo: '/staff/teacher-Magdalena-Shad.jpg',
  },
  {
    id: 3,
    name: 'Magda Marcinkowska',
    // desc: '',
    role: 'Starsze Przedszkole',
    // photo: '/staff/teacher-Magdalena-Shad.jpg',
  },
  {
    id: 4,
    name: 'Justyna Ciołek',
    // desc: '',
    role: 'Klasa “0”',
    // photo: '/staff/teacher-Magdalena-Shad.jpg',
  },

  {
    id: 5,
    name: 'Marzena Pluta',
    // desc: '',
    role: '1 - Klasa',
    // photo: '/staff/teacher-Magdalena-Shad.jpg',
  },
  {
    id: 56,
    name: 'Marzena Kalinowska',
    // desc: '',
    role: '1 - Klasa',
    // photo: '/staff/teacher-Magdalena-Shad.jpg',
  },

  {
    id: 6,
    name: 'Brygida Warych',
    // desc: '',
    role: '2 - Klasa',
    // photo: '/staff/teacher-Magdalena-Shad.jpg',
  },

  {
    id: 7,
    name: 'Katarzyna Skrzypacz',
    // desc: '',
    role: '3 - Klasa',
    // photo: '/staff/teacher-Magdalena-Shad.jpg',
  },
  {
    id: 8,
    name: 'Magdalena Jurgielewicz',
    // desc: '',
    role: '4 - Klasa',
    // photo: '/staff/teacher-Magdalena-Shad.jpg',
  },

  {
    id: 9,
    name: 'Marta Gancarek',
    // desc: '',
    role: '6 - Klasa',
    // photo: '/staff/teacher-Magdalena-Shad.jpg',
  },

  {
    id: 10,
    name: 'Sylwia Sikocińska',
    // desc: '',
    role: 'Klasa GCSE',
    // photo: '/staff/teacher-Magdalena-Shad.jpg',
  },
  {
    id: 11,
    name: 'Magdalena Bednarska',
    // desc: 'Klasa GCSE',
    role: 'asystent nauczyciela',
    // photo: '/staff/teacher-Barbara-Studzienna.jpg',
  },
  {
    id: 12,
    name: 'Weronika Buczyńska',
    // desc: 'Klasa GCSE',
    role: 'asystent nauczyciela',
    // photo: '/staff/teacher-Barbara-Studzienna.jpg',
  },
  {
    id: 13,
    name: 'Urszula Wiśniewska',
    // desc: 'Klasa GCSE',
    role: 'asystent nauczyciela',
    // photo: '/staff/teacher-Barbara-Studzienna.jpg',
  },
  {
    id: 14,
    name: 'Łukasz Płonka',
    // desc: 'Klasa GCSE',
    role: 'asystent nauczyciela',
    // photo: '/staff/teacher-Barbara-Studzienna.jpg',
  },
  {
    id: 15,
    name: 'Dominika Kruszyńska',
    // desc: 'Klasa GCSE',
    role: 'asystent nauczyciela',
    // photo: '/staff/teacher-Barbara-Studzienna.jpg',
  },

  {
    id: 16,
    name: 'Bartosz Kruszyński ',
    // desc: 'Klasa GCSE',
    role: 'asystent nauczyciela',
    // photo: '/staff/teacher-Barbara-Studzienna.jpg',
  },
];


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
/**
 * RAJWADA CLIENT CONFIGURATION
 * Duplicate this file for each client. Client content stays here; layout and interactions stay reusable.
 */
export const weddingConfig = {
meta: {
  templateName: "Royal Heritage",
  slug: "aaradhya-and-vivaan",
  language: "en",
  passwordProtected: false,
},

  couple: {
    brideName: "Zoya Khan",
    brideParents: "Daughter of Rashid Khan & Farida Begum",
    shortNameBride: "Zoya",
    groomName: "Shaikh Zaid",
    groomParents: "Son of Shaikh Tariq & Shabana Begum",
    shortNameGroom: "Zaid",
    monogram: "Z · Z",
  },

  copy: {
  heroMantra: "",

  heroKicker: "Together with their families",

  heroInvitationLineOne:
    "",

  heroInvitationLineTwo:
    "request the honour of your presence, as they begin a beautiful new chapter together",

  heroClosingLine:
    "Join us for an evening of love, laughter, treasured traditions, and royal hospitality.",

  welcomeKicker: "A Royal Celebration",

  welcomeTitle:
    "We are delighted to welcome you",

  welcomeBody:
    "Aaradhya Mehta and Vivaan Rathore warmly invite you to celebrate their marriage and share in the joy of two families coming together. Your presence will make this beautiful occasion even more meaningful.",

  dateIntro:
    "A royal date awaits",

  datePrompt:
    "Scratch the gilded seal",

  dateRevealed:
    "Save the Date",

  galleryKicker:
    "Captured Moments",

  galleryTitle:
    "A glimpse of their journey",

  countdownKicker:
    "The celebration approaches",

  countdownTitle:
    "Counting down to forever",

  timelineKicker:
    "The Celebration",

  timelineTitle:
    "The evening’s festivities",

  venueKicker:
    "The Royal Setting",

  venueTitle:
    "Where we will celebrate",

  dressCodeKicker:
    "Dress Code",

  dressCodeTitle:
    "Elegant Festive",

  preWeddingKicker:
    "The festivities begin",

  preWeddingTitle:
    "Celebrate with us",

  giftsTitle:
    "Your presence is our greatest gift",

  giftsBody:
    "Your presence at our celebration is the greatest gift we could ask for. Your love, blessings, and warm wishes mean the world to us.",

  rsvpTitle:
    "Will you be joining us?",

  rsvpSubtitle:
    "Kindly reply by November 10, 2027.",

  closingKicker:
    "With joyful hearts",

  closingTitle:
    "We look forward to celebrating with you",

  closingBody:
    "Thank you for being part of this beautiful chapter in our lives. We cannot wait to create unforgettable memories together.",
},

  wedding: {
    isoDateTime: "2027-11-28T17:30:00+05:30",
    timezone: "Asia/Kolkata",
    displayDate: "November 28, 2027",
    day: "Sunday",
    time: "5:30 PM",
    endIsoDateTime: "2027-11-29T00:30:00+05:30",
  },

  media: {
    introVideo: "./assets/video/rajwada-intro-placeholder.mp4",
    introPoster: "./assets/video/rajwada-intro-poster.webp",
    backgroundMusic: "./bismillah.mp3",
    gallery: [
      { src: "./assets/gallery/gallery-01.jpg", alt: "Royal wedding gallery placeholder one" },
      { src: "./assets/gallery/gallery-02.jpg", alt: "Royal wedding gallery placeholder two" },
      { src: "./assets/gallery/gallery-03.jpg", alt: "Royal wedding gallery placeholder three" },
      { src: "./assets/gallery/gallery-04.jpg", alt: "Royal wedding gallery placeholder four" },
      { src: "./assets/gallery/gallery-05.jpg", alt: "Royal wedding gallery placeholder five" },
    ],
  },

  experience: {
    introEnabled: true,
    namesAppearAtSeconds: 5,
    unlockScrollOnTap: true,
    musicButtonVisibleFromStart: true,
  },

  galleryOptions: {
    autoplay: true,
    intervalMs: 4000,
    pauseAfterInteractionMs: 5000,
  },

  venue: {
  name: "Noor Invites",

  address:
    "Mahal, Nagpur",

  mapsUrl:
    "https://www.google.com/maps/search/?api=1&query=Mahal+Nagpur",

  note:
    "Please arrive by 5:00 PM so the welcome and wedding celebrations can begin on time.",
},

  dressCode: {
  title: "Elegant Festive",

  description:
    "We invite you to join us in refined festive attire featuring rich colors, elegant silhouettes, and celebratory details.",

  palette: [
    "#651620",
    "#b18a46",
    "#1f5a4a",
    "#263b63",
    "#dfcdb0",
  ],
},

  preWeddingEvents: [
  {
    title: "Welcome Celebration",

    date: "November 26, 2027",

    time: "6:30 PM",

    venue: "The Palace Courtyard",

    note:
      "An intimate evening of warm welcomes, conversation, music, and celebration.",
  },

  {
    title: "Family Evening",

    date: "November 27, 2027",

    time: "7:00 PM",

    venue: "The Grand Hall",

    note:
      "An evening filled with dinner, music, laughter, and cherished moments with family and friends.",
  },
],

  program: [
  {
    time: "5:00 PM",
    title: "Guest Arrival",
    detail: "Welcome refreshments will be served",
  },

  {
    time: "5:30 PM",
    title: "Wedding Ceremony",
    detail: "The couple begins their new journey together",
  },

  {
    time: "6:30 PM",
    title: "Greetings and Photographs",
    detail: "A moment for warm wishes and photographs",
  },

  {
    time: "7:30 PM",
    title: "Dinner Reception",
    detail: "A celebratory dinner with family and friends",
  },

  {
    time: "9:00 PM",
    title: "Music and Celebration",
    detail: "An evening of music, laughter, and memorable moments",
  },
],

  rsvp: {
    deadlineIso: "2027-11-10T23:59:59+05:30",
    endpoint: "",
    previewStorageKey: "rajwada-template-rsvps",
    mealOptions: ["Vegetarian", "Jain", "Vegan", "No preference"],
  },

  sections: {
    welcome: true,
    scratchReveal: true,
    gallery: true,
    countdown: true,
    timeline: true,
    venue: true,
    dressCode: true,
    preWeddingEvents: true,
    gifts: true,
    rsvp: false,
    closing: true,
  },

  theme: {
    name: "Royal Heritage",
    colors: {
  maroon: "#641520",
  maroonDeep: "#33080d",
  vermilion: "#8f3c42",
  ivory: "#fbf1dc",
  parchment: "#ead8b5",
  gold: "#d3a43c",
  goldDeep: "#94651d",
  saffron: "#b88948",
  emerald: "#255447",
  ink: "#2f1714",
  muted: "#80685d",
},
    fonts: {
      mantra: '"Tiro Devanagari Hindi", serif',
      names: '"Italiana", Georgia, serif',
      display: '"Cinzel Decorative", "Times New Roman", serif',
      body: '"Manrope", Arial, sans-serif',
    },
    revealEffect: "rose-petals",
  },
};

/**
 * RAJWADA CLIENT CONFIGURATION
 * Duplicate this file for each client. Client content stays here; layout and interactions stay reusable.
 */
export const weddingConfig = {
  meta: {
    templateName: "Royal Heritage",
    slug: "abhilasha-and-rahul",
    language: "en",
    passwordProtected: false,
  },

  site: {
    title: "Abhilasha & Rahul — Wedding Invitation",
    description:
      "You are warmly invited to celebrate the Wedding of Abhilasha and Rahul.",
  },

  couple: {
    brideName: "Abhilasha Dhabarde",
    brideParents: "D/O Anil Dhabarde",
    shortNameBride: "Abhilasha",
    brideInitial: "A",
    groomName: "Rahul Sahakate",
    groomParents: "S/O Santosh Sahakate",
    shortNameGroom: "Rahul",
    groomInitial: "R",
    monogram: "A · R",
    bride: {
      name: "Abhilasha Dhabarde",
      shortName: "Abhilasha",
      relation: "D/O",
      parents: "Anil Dhabarde",
    },
    groom: {
      name: "Rahul Sahakate",
      shortName: "Rahul",
      relation: "S/O",
      parents: "Santosh Sahakate",
    },
  },

  copy: {
    heroMantra: "",

    heroKicker: "Together with their families",

    heroInvitationLineOne: "",

    heroInvitationLineTwo:
      "request the honour of your presence, as they begin a beautiful new chapter together",

    heroClosingLine:
      "Join us for an evening of love, laughter, treasured traditions, and warm hospitality.",

    welcomeKicker: "A Joyful Celebration",

    welcomeTitle: "We are delighted to welcome you",

    welcomeBody:
      "Abhilasha and Rahul warmly invite you to celebrate their marriage and share in the joy of two families coming together. Your presence will make this beautiful occasion even more meaningful.",

    dateIntro: "A special date awaits",

    datePrompt: "Scratch the gilded seal",

    dateRevealed: "Save the Date",

    galleryKicker: "Captured Moments",

    galleryTitle: "A glimpse of their journey",

    countdownKicker: "Until the Wedding",

    countdownTitle: "Counting down to forever",

    timelineKicker: "The Celebration",

    timelineTitle: "Wedding Celebrations",

    venueKicker: "The Royal Setting",

    venueTitle: "Where we will celebrate",

    dressCodeKicker: "Dress Code",

    dressCodeTitle: "Elegant Festive",

    preWeddingKicker: "The Festivities Begin",

    preWeddingTitle: "Celebrate with us",

    giftsTitle: "Your presence is our greatest gift",

    giftsBody:
      "Your presence at our celebration is the greatest gift we could ask for. Your love, blessings, and warm wishes mean the world to us.",

    rsvpTitle: "Will you be joining us?",

    rsvpSubtitle: "Kindly reply by November 15, 2026.",

    closingKicker: "With joyful hearts",

    closingTitle: "We look forward to celebrating with you",

    closingBody:
      "Thank you for being part of this beautiful chapter in our lives. We cannot wait to create unforgettable memories together.",
  },

  wedding: {
    isoDate: "2026-11-23T19:00:00+05:30",
    isoDateTime: "2026-11-23T19:00:00+05:30",
    timezone: "IST",
    displayDate: "November 23, 2026",
    date: "November 23, 2026",
    day: "Monday",
    time: "7:00 PM",
    endIsoDateTime: "2026-11-24T00:30:00+05:30",
  },

  media: {
    introVideo: "./assets/video/rajwada-intro-placeholder.mp4",
    introPoster: "./assets/video/rajwada-intro-poster.webp",
    backgroundMusic: "./assets/audio/rajwada-ambient-placeholder.mp3",
    gallery: [
      { src: "./assets/gallery/Romantic Garden Evening Glow.png", alt: "Romantic Garden Evening Glow" },
      { src: "./assets/gallery/Candlelit Fairy Light Romance.png", alt: "Candlelit Fairy Light Romance" },
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
    name: "Kalode Lawn",
    address:
      "Tukdoji Ward, Sant Tukdoji Ward, Hinganghat, Maharashtra - 442301",
    mapsUrl:
      "https://www.google.com/maps/search/Kalode+Lawn+Sant+Tukdoji+Ward+Hinganghat+442301",
    mapLink:
      "https://www.google.com/maps/search/Kalode+Lawn+Sant+Tukdoji+Ward+Hinganghat+442301",
    mapUrl:
      "https://www.google.com/maps/search/Kalode+Lawn+Sant+Tukdoji+Ward+Hinganghat+442301",
    note:
      "Please join us to celebrate and bless the couple as they begin their sacred journey together.",
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
      title: "Marriage Ceremony (Shubha Vivah)",
      name: "Marriage Ceremony (Shubha Vivah)",
      date: "November 23, 2026",
      time: "07:00 PM",
      venue: "Kalode Lawn, Hinganghat",
      location: "Kalode Lawn, Hinganghat",
      note: "",
      mapLink: "",
    },
  ],

  program: [
    {
      date: "21 Nov",
      time: "",
      title: "Haldi Ceremony",
      detail: "Saturday, November 21, 2026",
      note: "Saturday, November 21, 2026",
    },
    {
      date: "23 Nov",
      time: "07:00 PM",
      title: "Marriage Ceremony (Shubha Vivah)",
      detail:
        "Monday, November 23, 2026 at 07:00 PM\nKalode Lawn, Tukdoji Ward, Sant Tukdoji Ward, Hinganghat, Maharashtra - 442301",
      note:
        "Monday, November 23, 2026 at 07:00 PM\nKalode Lawn, Tukdoji Ward, Sant Tukdoji Ward, Hinganghat, Maharashtra - 442301",
    },
  ],

  rsvp: {
    deadlineIso: "2026-11-15T23:59:59+05:30",
    endpoint: "",
    previewStorageKey: "rahulabhilasha-rsvps",
    mealOptions: ["Vegetarian", "Jain", "Vegan", "No preference"],
  },

  sections: {
    welcome: true,
    scratchReveal: true,
    gallery: true,
    countdown: true,
    timeline: true,
    venue: true,
    dressCode: false,
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

if (typeof window !== "undefined") {
  window.INVITATION_CONFIG = weddingConfig;
}

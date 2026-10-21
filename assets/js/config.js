/**
 * CLIENT CONFIGURATION
 * --------------------
 * Wedding of Abhilasha & Rahul
 */

window.INVITATION_CONFIG = {
  site: {
    title: "Abhilasha & Rahul — Wedding Invitation",
    description:
      "You are warmly invited to celebrate the Wedding of Abhilasha and Rahul.",
  },

  couple: {
    brideInitial: "A",
    groomInitial: "R",
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
    bismillah: "",
    bismillahTranslation: "",
    welcomeLine: "With the Blessings of\nOur Parents and Elders\n\nWe joyfully invite you to\ncelebrate the Wedding of",
    invitation: "",
    heroClosing: "Please join us as we begin\nour new journey together.",
    welcomeTitle: "A Beautiful Beginning",
    welcomeBody:
      "Abhilasha and Rahul warmly invite you to celebrate their marriage and share in the joy of two families coming together. Your presence will make this beautiful occasion even more meaningful.",
    gifts:
      "Your love, blessings, and presence are the greatest gifts we could ever ask for.",
    closing: "We can't wait to celebrate with you.",
    dua: "",
    duaTranslation: "",
  },

  wedding: {
    // Use a valid ISO date with the local UTC offset for an accurate countdown.
    isoDate: "2026-11-23T19:00:00+05:30",
    date: "November 23, 2026",
    day: "Monday",
    time: "7:00 PM",
    timezone: "IST",
  },

  media: {
    introVideo: "./assets/video/rajwada-intro-placeholder.mp4",
    introPoster: "./assets/video/rajwada-intro-poster.webp",
    music: "./assets/audio/rajwada-ambient-placeholder.mp3",
    gallery: [
      {
        src: "./assets/gallery/Romantic Garden Evening Glow.png",
        alt: "Romantic Garden Evening Glow",
        caption: "",
      },
      {
        src: "./assets/gallery/Candlelit Fairy Light Romance.png",
        alt: "Candlelit Fairy Light Romance",
        caption: "",
      },
    ],
  },

  program: [
    {
      date: "21 Nov",
      time: "",
      title: "Haldi Ceremony",
      note: "Saturday, November 21, 2026",
    },
    {
      date: "23 Nov",
      time: "07:00 PM",
      title: "Marriage Ceremony (Shubha Vivah)",
      note:
        "Monday, November 23, 2026 at 07:00 PM\nKalode Lawn, Tukdoji Ward, Sant Tukdoji Ward, Hinganghat, Maharashtra - 442301",
    },
  ],

  venue: {
    name: "Kalode Lawn",
    address:
      "Tukdoji Ward, Sant Tukdoji Ward, Hinganghat, Maharashtra - 442301",
    mapLink:
      "https://www.google.com/maps/search/Kalode+Lawn+Sant+Tukdoji+Ward+Hinganghat+442301",
    mapUrl:
      "https://www.google.com/maps/search/Kalode+Lawn+Sant+Tukdoji+Ward+Hinganghat+442301",
  },

  dressCode: null,

  preWeddingEvents: [
    {
      name: "Marriage Ceremony (Shubha Vivah)",
      title: "Marriage Ceremony (Shubha Vivah)",
      date: "November 23, 2026",
      time: "07:00 PM",
      location: "Kalode Lawn, Hinganghat",
      venue: "Kalode Lawn, Hinganghat",
      mapLink: "",
    },
  ],

  rsvp: {
    deadline: "November 15, 2026",
    contact: "",
    fields: {
      name: "Your full name",
      email: "Email address",
      attendance: ["Joyfully accepts", "Regretfully declines"],
      guests: ["1 guest", "2 guests", "3 guests", "4 guests"],
      note: "Dietary notes or a message for the couple",
    },
  },

  theme: {
    ivory: "#F1E3CE",       /* warm candlelit cream */
    plum: "#3A070C",        /* deepest burgundy */
    lavender: "#6F0B17",    /* wine red */
    mauve: "#A51520",       /* rose/crimson accent */
    lilac: "#D0B294",       /* warm nude / muted beige */
    champagne: "#C9A35F",   /* antique gold */
  },
};

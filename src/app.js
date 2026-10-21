import { weddingConfig as config } from "./config.js";
import { renderInvitation } from "./components/render.js";
import { initializeScratchCard } from "./lib/scratch.js";
import { showerPetals } from "./lib/petals.js";

const app = document.querySelector("#app");
app.innerHTML = renderInvitation(config);

const root = document.documentElement;
Object.entries(config.theme.colors).forEach(([key, value]) => {
  const cssName = key.replace(/[A-Z]/g, (letter) => `-${letter.toLowerCase()}`);
  root.style.setProperty(`--${cssName}`, value);
});
root.style.setProperty("--font-mantra", config.theme.fonts.mantra);
root.style.setProperty("--font-names", config.theme.fonts.names);
root.style.setProperty("--font-display", config.theme.fonts.display);
root.style.setProperty("--font-body", config.theme.fonts.body);

document.title = `${config.couple.shortNameBride || config.couple.brideName} & ${config.couple.shortNameGroom || config.couple.groomName} — Wedding Invitation`;

export function setName(element, personConfig) {
  if (!element || !personConfig) return;
  const fullName = typeof personConfig === "string" ? personConfig : personConfig.name || "";
  const shortName = (typeof personConfig === "object" && personConfig.shortName) ? personConfig.shortName : fullName.split(" ")[0];

  const shortNameIndex = fullName.indexOf(shortName);
  if (shortNameIndex !== -1) {
    const prefix = fullName.slice(0, shortNameIndex).trim();
    const suffix = fullName.slice(shortNameIndex + shortName.length).trim();
    
    const shortNameElement = document.createElement("span");
    shortNameElement.textContent = shortName;
    const nodes = [];
    if (prefix) nodes.push(document.createTextNode(`${prefix} `));
    nodes.push(shortNameElement);
    if (suffix) nodes.push(document.createTextNode(` ${suffix}`));
    element.replaceChildren(...nodes);
  } else {
    const span = document.createElement("span");
    span.textContent = fullName;
    element.replaceChildren(span);
  }
}

export function renderProgram() {
  const timeline = document.querySelector("#programTimeline");
  if (!timeline || !config.program) return;
  timeline.innerHTML = "";

  config.program.forEach((item, index) => {
    const article = document.createElement("article");
    article.className = "timeline__item";

    const marker = document.createElement("div");
    marker.className = "timeline__marker";
    const markerSpan = document.createElement("span");
    markerSpan.textContent = String(index + 1);
    marker.append(markerSpan);

    const content = document.createElement("div");
    content.className = "timeline__content";

    const time = document.createElement("time");
    if (item.date && item.time) {
      time.innerHTML = `<span class="timeline-date">${item.date}</span><span class="timeline-hour">${item.time}</span>`;
    } else if (item.date) {
      time.innerHTML = `<span class="timeline-date">${item.date}</span>`;
    } else {
      time.innerHTML = `<span class="timeline-hour">${item.time || ""}</span>`;
    }

    const title = document.createElement("h3");
    title.textContent = item.title || "";

    const note = document.createElement("p");
    note.style.whiteSpace = "pre-line";
    note.textContent = item.note || item.detail || "";

    content.append(time, title, note);

    if (item.mapLink) {
      const mapLink = document.createElement("a");
      mapLink.className = "button button--light event-map-link";
      mapLink.textContent = "View on Google Maps ↗";
      mapLink.href = item.mapLink;
      mapLink.target = "_blank";
      mapLink.rel = "noreferrer";
      mapLink.style.marginTop = "12px";
      mapLink.style.display = "inline-block";
      content.append(mapLink);
    }

    article.append(marker, content);
    timeline.append(article);
  });
}

export function renderPreWeddingEvents() {
  const eventList = document.querySelector("#preWeddingEvents");
  if (!eventList || !config.preWeddingEvents) return;
  eventList.innerHTML = "";

  config.preWeddingEvents.forEach((event) => {
    const article = document.createElement("article");
    article.className = "event-card";

    const crest = document.createElement("span");
    crest.className = "event-card__crest";
    crest.setAttribute("aria-hidden", "true");
    crest.textContent = "✦";
    article.append(crest);

    const title = document.createElement("h3");
    title.textContent = event.title || event.name || "";
    article.append(title);

    if (event.date) {
      const datePara = document.createElement("p");
      datePara.className = "event-card__date";
      datePara.textContent = event.date;
      article.append(datePara);
    }

    const metaParts = [];
    if (event.time && event.time.trim()) metaParts.push(event.time.trim());
    if ((event.venue || event.location) && (event.venue || event.location).trim()) {
      metaParts.push((event.venue || event.location).trim());
    }

    if (metaParts.length > 0) {
      const metaPara = document.createElement("p");
      metaPara.textContent = metaParts.join(" · ");
      article.append(metaPara);
    }

    if (event.note && event.note.trim()) {
      const noteElem = document.createElement("small");
      noteElem.style.whiteSpace = "pre-line";
      noteElem.textContent = event.note;
      article.append(noteElem);
    }

    if (event.mapLink && event.mapLink.trim()) {
      const mapLink = document.createElement("a");
      mapLink.className = "button button--light event-map-link";
      mapLink.textContent = "View on Google Maps ↗";
      mapLink.href = event.mapLink;
      mapLink.target = "_blank";
      mapLink.rel = "noreferrer";
      mapLink.style.marginTop = "10px";
      mapLink.style.display = "inline-block";
      article.append(mapLink);
    }

    eventList.append(article);
  });
}

if (typeof window !== "undefined") {
  window.setName = setName;
  window.renderProgram = renderProgram;
  window.renderPreWeddingEvents = renderPreWeddingEvents;
}

document.addEventListener("contextmenu", (event) => {
  event.preventDefault();
});

document.addEventListener("dragstart", (event) => {
  if (event.target instanceof HTMLImageElement) {
    event.preventDefault();
  }
});

const video = document.querySelector("#intro-video");
const posterFrame = document.querySelector("#hero-poster-frame");
const music = document.querySelector("#background-music");
const openingGate = document.querySelector("#opening-gate");
const musicControl = document.querySelector("#music-control");
const musicLabel = musicControl?.querySelector(".music-control__label");
const heroContent = document.querySelector("#hero-content");
const scrollCue = document.querySelector("#scroll-cue");

let experienceOpened = false;
let soundEnabled = true;
let namesShown = false;
let namesTimer = null;

function setMusicUi() {
  if (!musicControl || !musicLabel) return;
  musicControl.classList.toggle("is-muted", !soundEnabled);
  musicControl.setAttribute("aria-label", soundEnabled ? "Turn music off" : "Turn music on");
  musicLabel.textContent = experienceOpened
    ? (soundEnabled ? "Sound on" : "Sound off")
    : (soundEnabled ? "Sound ready" : "Sound muted");
}

function hidePosterAfterFirstVideoFrame() {
  if (!posterFrame || !video) return;

  const hidePoster = () => {
    window.requestAnimationFrame(() => posterFrame.classList.add("is-hidden"));
  };

  if (typeof video.requestVideoFrameCallback === "function") {
    video.requestVideoFrameCallback(hidePoster);
    return;
  }

  video.addEventListener(
    "playing",
    () => window.requestAnimationFrame(() => window.requestAnimationFrame(hidePoster)),
    { once: true },
  );
}

function startMedia() {
  if (!video || !music) return;

  video.muted = true;
  video.volume = 0;
  video.currentTime = 0;
  hidePosterAfterFirstVideoFrame();

  const videoPromise = video.play();
  videoPromise?.catch((error) => console.warn("Video could not start", error));

  if (soundEnabled) {
    music.volume = 0.34;
    const musicPromise = music.play();
    musicPromise?.catch((error) => console.warn("Music could not start", error));
  }
}

function showNames() {
  if (namesShown) return;
  namesShown = true;
  heroContent?.classList.add("is-visible");
  heroContent?.setAttribute("aria-hidden", "false");
  scrollCue?.classList.add("is-visible");
}

function unlockPage() {
  document.body.classList.remove("scroll-locked");
  document.documentElement.classList.remove("scroll-locked");
  document.body.classList.add("experience-open");
}

function openExperience() {
  if (experienceOpened) return;
  experienceOpened = true;

  openingGate?.classList.add("is-opening");
  if (config.experience.unlockScrollOnTap !== false) unlockPage();
  setMusicUi();
  startMedia();

  namesTimer = window.setTimeout(
    showNames,
    Number(config.experience.namesAppearAtSeconds || 0) * 1000,
  );

  window.setTimeout(() => openingGate?.setAttribute("hidden", ""), 220);
}

if (config.experience.introEnabled === false) {
  experienceOpened = true;
  openingGate?.remove();
  video?.pause();
  unlockPage();
  showNames();
  setMusicUi();
} else {
  openingGate?.addEventListener("click", openExperience);
}

musicControl?.addEventListener("click", (event) => {
  event.stopPropagation();

  if (!experienceOpened && config.experience.introEnabled !== false) {
    openExperience();
    return;
  }

  soundEnabled = !soundEnabled;

  if (soundEnabled) {
    music.volume = 0.34;
    const musicPromise = music.play();
    musicPromise?.catch((error) => console.warn(error));
  } else {
    music.pause();
  }

  setMusicUi();
});
setMusicUi();

video?.addEventListener("timeupdate", () => {
  if (video.currentTime >= Number(config.experience.namesAppearAtSeconds || 0)) {
    window.clearTimeout(namesTimer);
    showNames();
  }
});
video?.addEventListener("ended", showNames);

const scratchCanvas = document.querySelector("#scratch-canvas");
if (scratchCanvas) {
  const dateHeading = document.querySelector("#date-heading");
  const dateKicker = document.querySelector("#date-kicker");
  const scratchWrap = document.querySelector("#scratch-wrap");
  const petalLayer = document.querySelector("#petal-layer");

  initializeScratchCard({
    canvas: scratchCanvas,
    container: scratchWrap,
    threshold: 0.55,
    surfaceTitle: "SCRATCH THE GILDED SEAL",
    surfaceSubtitle: "A royal date awaits",
    onReveal: () => {
      if (dateHeading) dateHeading.textContent = config.copy.dateRevealed;
      if (dateKicker) dateKicker.textContent = "Save the royal date";
      if (petalLayer) showerPetals(petalLayer, 72);
    },
  });
}

const gallery = document.querySelector("#gallery-slider");
if (gallery) {
  const slides = [...gallery.querySelectorAll(".gallery__slide")];
  const dots = [...gallery.querySelectorAll(".gallery__dots button")];

  let active = 0;
  let touchStart = 0;
  let autoplayTimer = null;
  let restartTimer = null;
  let galleryIsVisible = false;

  const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const autoplayEnabled = config.galleryOptions?.autoplay !== false && !prefersReducedMotion;
  const autoplayDelay = Number(config.galleryOptions?.intervalMs) || 4200;
  const restartDelay = Number(config.galleryOptions?.pauseAfterInteractionMs) || 5000;

  function showSlide(index) {
    if (!slides.length) return;
    active = (index + slides.length) % slides.length;

    slides.forEach((slide, slideIndex) => {
      const isActive = slideIndex === active;
      slide.classList.toggle("is-active", isActive);
      slide.setAttribute("aria-hidden", isActive ? "false" : "true");
    });

    dots.forEach((dot, dotIndex) => {
      const isActive = dotIndex === active;
      dot.classList.toggle("is-active", isActive);
      dot.setAttribute("aria-current", isActive ? "true" : "false");
    });
  }

  function stopAutoplay() {
    window.clearInterval(autoplayTimer);
    autoplayTimer = null;
  }

  function startAutoplay() {
    stopAutoplay();
    if (!autoplayEnabled || !galleryIsVisible || document.hidden || slides.length < 2) return;
    autoplayTimer = window.setInterval(() => showSlide(active + 1), autoplayDelay);
  }

  function restartAutoplayLater() {
    stopAutoplay();
    window.clearTimeout(restartTimer);
    restartTimer = window.setTimeout(startAutoplay, restartDelay);
  }

  dots.forEach((dot) => {
    dot.addEventListener("click", () => {
      showSlide(Number(dot.dataset.slide));
      restartAutoplayLater();
    });
  });

  gallery.addEventListener(
    "touchstart",
    (event) => {
      touchStart = event.touches[0].clientX;
      stopAutoplay();
    },
    { passive: true },
  );

  gallery.addEventListener(
    "touchend",
    (event) => {
      const distance = event.changedTouches[0].clientX - touchStart;
      if (Math.abs(distance) > 45) showSlide(active + (distance < 0 ? 1 : -1));
      restartAutoplayLater();
    },
    { passive: true },
  );

  document.addEventListener("visibilitychange", () => {
    if (document.hidden) stopAutoplay();
    else startAutoplay();
  });

  const galleryObserver = new IntersectionObserver(
    ([entry]) => {
      galleryIsVisible = entry.isIntersecting;
      if (galleryIsVisible) startAutoplay();
      else stopAutoplay();
    },
    { threshold: 0.35 },
  );

  galleryObserver.observe(gallery);
  showSlide(0);
}

const countdown = document.querySelector("#countdown-clock");
if (countdown) {
  const target = new Date(countdown.dataset.target).getTime();
  const units = {
    days: countdown.querySelector('[data-unit="days"]'),
    hours: countdown.querySelector('[data-unit="hours"]'),
    minutes: countdown.querySelector('[data-unit="minutes"]'),
    seconds: countdown.querySelector('[data-unit="seconds"]'),
  };

  const tick = () => {
    const remaining = Math.max(0, target - Date.now());
    const days = Math.floor(remaining / 86400000);
    const hours = Math.floor((remaining % 86400000) / 3600000);
    const minutes = Math.floor((remaining % 3600000) / 60000);
    const seconds = Math.floor((remaining % 60000) / 1000);

    units.days.textContent = String(days).padStart(2, "0");
    units.hours.textContent = String(hours).padStart(2, "0");
    units.minutes.textContent = String(minutes).padStart(2, "0");
    units.seconds.textContent = String(seconds).padStart(2, "0");

    if (remaining === 0) {
      countdown.closest(".section__inner")?.querySelector("h2").replaceChildren("Today is the day");
    }
  };

  tick();
  window.setInterval(tick, 1000);
}

const rsvpForm = document.querySelector("#rsvp-form");
if (rsvpForm) {
  const status = document.querySelector("#form-status");

  rsvpForm.addEventListener("submit", async (event) => {
    event.preventDefault();
    if (!rsvpForm.reportValidity()) return;

    const data = new FormData(rsvpForm);
    const payload = {
      guestName: data.get("guestName"),
      attendance: data.get("attendance"),
      guestCount: Number(data.get("guestCount")),
      events: data.getAll("events"),
      mealPreference: data.get("mealPreference"),
      dietaryRestrictions: data.get("dietaryRestrictions"),
      message: data.get("message"),
      submittedAt: new Date().toISOString(),
      invitationSlug: config.meta.slug,
    };

    const submitButton = rsvpForm.querySelector('button[type="submit"]');
    submitButton.disabled = true;
    submitButton.textContent = "Sending…";
    status.textContent = "";

    try {
      if (config.rsvp.endpoint) {
        const response = await fetch(config.rsvp.endpoint, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        });
        if (!response.ok) throw new Error("RSVP request failed");
      } else {
        const stored = JSON.parse(localStorage.getItem(config.rsvp.previewStorageKey) || "[]");
        stored.push(payload);
        localStorage.setItem(config.rsvp.previewStorageKey, JSON.stringify(stored));
      }

      status.textContent = payload.attendance?.startsWith("Yes")
        ? "Thank you. Your response has been received — we cannot wait to celebrate with you."
        : "Thank you for letting us know. You will be warmly remembered on our special day.";
      status.classList.add("is-success");
      rsvpForm.reset();
    } catch (error) {
      console.error(error);
      status.textContent = "Something went wrong. Please try again.";
      status.classList.remove("is-success");
    } finally {
      submitButton.disabled = false;
      submitButton.textContent = "Send RSVP";
    }
  });
}

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.15 },
);

document.querySelectorAll(".reveal-on-scroll").forEach((element) => observer.observe(element));

window.addEventListener("beforeunload", () => {
  video?.pause();
  music?.pause();
});

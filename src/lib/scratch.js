export function initializeScratchCard({
  canvas,
  container,
  onReveal,
  threshold = 0.55,
  surfaceTitle = "SCRATCH THE GILDED SEAL",
  surfaceSubtitle = "A royal date awaits",
}) {
  const context = canvas.getContext("2d", { willReadFrequently: true });
  let drawing = false;
  let revealed = false;
  let previous = null;

  const resize = () => {
    if (revealed) return;

    const rect = container.getBoundingClientRect();
    const ratio = Math.min(window.devicePixelRatio || 1, 2);
    canvas.width = Math.max(1, Math.round(rect.width * ratio));
    canvas.height = Math.max(1, Math.round(rect.height * ratio));
    canvas.style.width = `${rect.width}px`;
    canvas.style.height = `${rect.height}px`;
    context.setTransform(ratio, 0, 0, ratio, 0, 0);

    const styles = getComputedStyle(document.documentElement);
    const maroon = styles.getPropertyValue("--maroon").trim() || "#641520";
    const maroonDeep = styles.getPropertyValue("--maroon-deep").trim() || "#33080d";
    const gold = styles.getPropertyValue("--gold").trim() || "#d3a43c";
    const goldDeep = styles.getPropertyValue("--gold-deep").trim() || "#94651d";
    const ivory = styles.getPropertyValue("--ivory").trim() || "#fbf1dc";

    const gradient = context.createLinearGradient(0, 0, rect.width, rect.height);
    gradient.addColorStop(0, maroonDeep);
    gradient.addColorStop(0.38, maroon);
    gradient.addColorStop(0.66, goldDeep);
    gradient.addColorStop(1, maroonDeep);

    context.globalCompositeOperation = "source-over";
    context.fillStyle = gradient;
    context.fillRect(0, 0, rect.width, rect.height);

    context.globalAlpha = 0.16;
    for (let i = 0; i < 110; i += 1) {
      context.fillStyle = i % 3 ? gold : ivory;
      const x = Math.random() * rect.width;
      const y = Math.random() * rect.height;
      const size = Math.random() * 2.2 + 0.5;
      context.save();
      context.translate(x, y);
      context.rotate(Math.PI / 4);
      context.fillRect(-size, -size, size * 2, size * 2);
      context.restore();
    }

    context.globalAlpha = 1;
    context.fillStyle = ivory;
    context.textAlign = "center";
    context.font = `700 ${Math.max(13, Math.min(20, rect.width / 21))}px Manrope, system-ui`;
    context.fillText(surfaceTitle, rect.width / 2, rect.height / 2 - 4);
    context.font = `400 ${Math.max(10, Math.min(13, rect.width / 34))}px Manrope, system-ui`;
    context.fillText(surfaceSubtitle, rect.width / 2, rect.height / 2 + 25);
  };

  const position = (event) => {
    const rect = canvas.getBoundingClientRect();
    const point = event.touches?.[0] || event;
    return { x: point.clientX - rect.left, y: point.clientY - rect.top };
  };

  const scratch = (from, to) => {
    const rect = canvas.getBoundingClientRect();
    context.globalCompositeOperation = "destination-out";
    context.lineCap = "round";
    context.lineJoin = "round";
    context.lineWidth = Math.max(34, Math.min(58, rect.width / 8));
    context.beginPath();
    context.moveTo(from.x, from.y);
    context.lineTo(to.x, to.y);
    context.stroke();
    context.beginPath();
    context.arc(to.x, to.y, context.lineWidth / 2, 0, Math.PI * 2);
    context.fill();
  };

  const scratchedRatio = () => {
    const image = context.getImageData(0, 0, canvas.width, canvas.height).data;
    let transparent = 0;
    let sampled = 0;
    const step = 48;

    for (let index = 3; index < image.length; index += step) {
      sampled += 1;
      if (image[index] < 30) transparent += 1;
    }

    return transparent / sampled;
  };

  const finish = () => {
    if (revealed) return;
    revealed = true;
    canvas.style.transition = "opacity 700ms ease, transform 700ms ease";
    canvas.style.opacity = "0";
    canvas.style.transform = "scale(1.03)";
    canvas.style.pointerEvents = "none";
    onReveal?.();
  };

  const start = (event) => {
    event.preventDefault();
    drawing = true;
    previous = position(event);
    scratch(previous, previous);
  };

  const move = (event) => {
    if (!drawing || revealed) return;
    event.preventDefault();
    const current = position(event);
    scratch(previous, current);
    previous = current;
  };

  const end = () => {
    if (!drawing || revealed) return;
    drawing = false;
    previous = null;
    if (scratchedRatio() >= threshold) finish();
  };

  canvas.addEventListener("pointerdown", start);
  canvas.addEventListener("pointermove", move);
  window.addEventListener("pointerup", end);
  canvas.addEventListener("touchstart", start, { passive: false });
  canvas.addEventListener("touchmove", move, { passive: false });
  window.addEventListener("touchend", end);
  window.addEventListener("resize", resize);

  resize();
  return { reveal: finish };
}

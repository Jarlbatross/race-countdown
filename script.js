const RACE_DATE = new Date('2029-06-09T00:00:00+02:00');
const BET_START = new Date('2026-06-06T00:00:00+02:00');

const QUIPS = [
  'Vesterålen venter.',
  'Øya løper ikke seg selv.',
  'Hadseløya måler nøyaktig 42 km. Tilfeldig? Nei.',
  'Nord-Norge ringte. Mari tok telefonen.',
  'Ett maraton, én øy, null unnskyldninger.',
  'Nordlyset trener allerede.',
  '42,195 km med «jeg sa det jo».',
  'Pakk lag på lag. Pakk viljestyrke.',
  'Mer enn bare et løp — mer enn bare et veddemål.',
  'Havet på den ene siden, fjellene på den andre, Mari i midten.',
];

const daysEl = document.getElementById('days');
const hoursEl = document.getElementById('hours');
const minutesEl = document.getElementById('minutes');
const secondsEl = document.getElementById('seconds');
const quipEl = document.getElementById('quip');
const progressFill = document.getElementById('progress-fill');
const progressPercent = document.getElementById('progress-percent');
const trainingRunsEl = document.getElementById('training-runs');
const countdownEl = document.getElementById('countdown');

let quipIndex = 0;
let quipTimer = 0;

function pad(n) {
  return String(n).padStart(2, '0');
}

function updateCountdown() {
  const now = new Date();
  const diff = RACE_DATE - now;

  if (diff <= 0) {
    daysEl.textContent = '00';
    hoursEl.textContent = '00';
    minutesEl.textContent = '00';
    secondsEl.textContent = '00';
    trainingRunsEl.textContent = '0';
    progressFill.style.width = '100%';
    progressPercent.textContent = '100%';
    quipEl.textContent = 'Hun klarte det! Mari erobret Arctic Run!';
    countdownEl.classList.add('finished');
    return;
  }

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((diff / (1000 * 60)) % 60);
  const seconds = Math.floor((diff / 1000) % 60);

  daysEl.textContent = pad(days);
  hoursEl.textContent = pad(hours);
  minutesEl.textContent = pad(minutes);
  secondsEl.textContent = pad(seconds);
  trainingRunsEl.textContent = days.toLocaleString('nb-NO');

  const total = RACE_DATE - BET_START;
  const elapsed = now - BET_START;
  const percent = Math.min(100, Math.max(0, (elapsed / total) * 100));
  progressFill.style.width = percent.toFixed(1) + '%';
  progressPercent.textContent = percent.toFixed(1) + '%';
}

function rotateQuip() {
  quipTimer++;
  if (quipTimer < 10) return;
  quipTimer = 0;

  quipEl.classList.add('fade');
  setTimeout(() => {
    quipIndex = (quipIndex + 1) % QUIPS.length;
    quipEl.textContent = QUIPS[quipIndex];
    quipEl.classList.remove('fade');
  }, 400);
}

function tick() {
  updateCountdown();
  rotateQuip();
}

tick();
setInterval(tick, 1000);


document.addEventListener('visibilitychange', () => {
  if (!document.hidden) tick();
});

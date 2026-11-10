import { getRelease, releasesPage } from './releases.js';

const motion = matchMedia('(prefers-reduced-motion: reduce)');
let paused = false;
const staticPlayback = () => motion.matches || paused;

/* ---------- Downloads: newest release, preferred platform first ---------- */
const links = [...document.querySelectorAll('[data-platform]')];
const platform = navigator.userAgentData?.platform || navigator.platform || '';
if (/^win/i.test(platform)) for (const group of document.querySelectorAll('.downloads')) group.classList.add('prefer-win');
const version = document.querySelector('[data-version]');
const fallback = {
  version: version?.textContent ?? '',
  mac: links.find(link => link.dataset.platform === 'mac')?.href,
  win: links.find(link => link.dataset.platform === 'win')?.href,
};
getRelease(fallback).then(release => {
  if (version && release.version) version.textContent = release.version;
  for (const link of links) link.href = release[link.dataset.platform] ?? releasesPage;
});

/* ---------- Reveal on scroll ---------- */
const reveals = document.querySelectorAll('.reveal');
if (motion.matches || !('IntersectionObserver' in window)) for (const el of reveals) el.classList.add('in');
else {
  const io = new IntersectionObserver(entries => {
    for (const entry of entries) if (entry.isIntersecting) { entry.target.classList.add('in'); io.unobserve(entry.target); }
  }, { rootMargin: '0px 0px -10% 0px' });
  for (const el of reveals) io.observe(el);
}

/* ---------- Hero depth: pointer parallax and window tilt ---------- */
const stage = document.querySelector('.hero-stage');
const wrap = document.querySelector('.window-wrap');
if (stage && wrap) {
  let ticking = false;
  const tilt = () => {
    ticking = false;
    if (motion.matches) return;
    const top = wrap.getBoundingClientRect().top;
    const progress = Math.min(1, Math.max(0, 1 - (top - innerHeight * .18) / (innerHeight * .55)));
    wrap.style.setProperty('--tilt', `${(1 - progress) * 14}deg`);
    wrap.style.setProperty('--scale', (.94 + progress * .06).toFixed(4));
  };
  addEventListener('scroll', () => { if (!ticking) { ticking = true; requestAnimationFrame(tilt); } }, { passive: true });
  motion.addEventListener('change', tilt);
  tilt();
}

/* ---------- Theme: follow the system until the visitor chooses ---------- */
const root = document.documentElement;
const systemDark = matchMedia('(prefers-color-scheme: dark)');
systemDark.addEventListener?.('change', event => { if (!localStorage.getItem('botogether-theme')) root.dataset.theme = event.matches ? 'dark' : 'light'; });
document.querySelector('.theme-toggle')?.addEventListener('click', () => {
  const next = root.dataset.theme === 'dark' ? 'light' : 'dark';
  root.dataset.theme = next;
  localStorage.setItem('botogether-theme', next);
});

/* ---------- Relay: a task card hands off from station to station ---------- */
const relayStage = document.querySelector('[data-relay]');
const refreshRelay = relayStage && runRelay(relayStage);

function runRelay(stage) {
  const viewport = stage.parentElement;
  const fit = () => viewport.style.setProperty('--k', Math.min(1, viewport.clientWidth / 1180).toFixed(4));
  fit();
  addEventListener('resize', fit, { passive: true });
  const task = stage.querySelector('[data-task]');
  const state = stage.querySelector('[data-state]');
  const lit = stage.querySelector('.relay-track .lit');
  const stations = [...stage.querySelectorAll('[data-station]')];
  const texts = [...document.querySelectorAll('[data-step-text]')];
  const chips = JSON.parse(stage.dataset.chips || '[]');
  const W = 1180, H = 480, CW = 300;
  const place = i => {
    const s = stations[i];
    const x = parseFloat(s.style.left) / 100 * W, y = parseFloat(s.style.top) / 100 * H;
    const above = y > H / 2;
    task.style.left = `${Math.min(W - CW - 8, Math.max(8, x - CW / 2))}px`;
    task.style.top = `${above ? y - 300 : y + 128}px`;
  };
  const set = i => {
    task.dataset.s = String(i);
    if (chips[i]) state.textContent = chips[i];
    stations.forEach((s, j) => { s.classList.toggle('on', j === i); s.classList.toggle('done', j < i); });
    texts.forEach((el, j) => el.classList.toggle('on', j <= i));
    lit.style.strokeDashoffset = String(100 - i / (stations.length - 1) * 100);
  };
  let token = 0;
  let visible = true;
  if ('IntersectionObserver' in window) {
    new IntersectionObserver(([entry]) => { visible = entry.isIntersecting; }, { threshold: .2 }).observe(stage);
  }
  const sleep = (ms, mine) => new Promise((resolve, reject) => {
    let left = ms;
    const tick = () => {
      if (mine !== token) return reject(new Error('cancelled'));
      if (visible && !document.hidden) left -= 100;
      if (left <= 0) resolve(); else setTimeout(tick, 100);
    };
    setTimeout(tick, 100);
  });
  return async () => {
    const mine = ++token;
    if (staticPlayback()) {
      const last = stations.length - 1;
      task.classList.remove('hidden', 'moving');
      place(last);
      set(last);
      return;
    }
    try {
      for (;;) {
        task.classList.add('hidden'); place(0); set(0); await sleep(500, mine);
        task.classList.remove('hidden'); await sleep(2600, mine);
        for (let i = 1; i < stations.length; i++) {
          task.classList.add('moving'); place(i); await sleep(1100, mine);
          task.classList.remove('moving'); set(i);
          await sleep(i === stations.length - 1 ? 3600 : 2800, mine);
        }
      }
    } catch (error) {
      if (mine === token) throw error;
    }
  };
}

/* ---------- Scripted demo ---------- */
const demo = document.querySelector('[data-demo]');
const refreshDemo = demo && runDemo(demo);

function runDemo(demo) {
  const tabs = [...demo.querySelectorAll('.scene-strip [data-scene]')];
  const side = [...demo.querySelectorAll('.chats [data-scene]')];
  const sidebar = demo.querySelector('.sidebar');
  const templates = [...demo.querySelectorAll('[data-scene-template]')];
  const messages = demo.querySelector('#messages');
  const who = demo.querySelector('#chat-who');
  const to = demo.querySelector('#composer-to');
  const model = demo.querySelector('#composer-model');
  const send = demo.querySelector('.send');
  const chats = side;
  for (const chat of chats) { const el = chat.querySelector('[data-preview]'); el.dataset.original = el.textContent; }
  let token = 0;
  let visible = true;
  let current = 0;

  const loadImages = root => {
    for (const img of root.querySelectorAll('img[data-src]')) {
      const frame = img.closest('.image-frame');
      img.addEventListener('load', () => frame?.classList.add('loaded'), { once: true });
      img.src = img.dataset.src;
      img.removeAttribute('data-src');
      if (img.complete) frame?.classList.add('loaded');
    }
  };

  const show = index => {
    const template = templates[index];
    current = index;
    tabs.forEach((tab, i) => { tab.setAttribute('aria-pressed', String(i === index)); tab.style.setProperty('--progress', '0%'); });
    for (const chat of chats) {
      const el = chat.querySelector('[data-preview]');
      el.textContent = el.dataset.original; el.classList.remove('typing');
      const on = chat.dataset.chat === template.dataset.chat;
      chat.classList.toggle('active', on);
      chat.setAttribute('aria-selected', String(on));
      if (on) chat.classList.add('seen');
    }
    messages.classList.remove('switching'); void messages.offsetWidth; messages.classList.add('switching');
    who.innerHTML = template.dataset.who;
    to.textContent = template.dataset.to;
    to.classList.remove('filled');
    send.classList.remove('ready');
    model.textContent = template.dataset.model;
    messages.innerHTML = template.innerHTML;
    messages.scrollTop = 0;
    return template;
  };

  // Pause while off-screen or in a background tab.
  if ('IntersectionObserver' in window) new IntersectionObserver(([entry]) => { visible = entry.isIntersecting; }, { threshold: .15 }).observe(demo);
  const wait = (ms, mine) => new Promise((resolve, reject) => {
    let left = ms;
    const tickMs = 50;
    const loop = () => {
      if (mine !== token) return reject(new Error('cancelled'));
      if (visible && !document.hidden) left -= tickMs;
      if (left <= 0) resolve(); else setTimeout(loop, tickMs);
    };
    setTimeout(loop, tickMs);
  });
  const bottom = () => { messages.scrollTop = messages.scrollHeight; };
  const preview = (chatId, text, typing = false) => {
    const el = chats.find(chat => chat.dataset.chat === chatId)?.querySelector('[data-preview]');
    if (!el) return;
    el.textContent = text;
    el.classList.toggle('typing', typing);
  };

  async function stream(span, full, mine) {
    const parts = /\s/.test(full) ? full.split(/(\s+)/) : [...full];
    const step = /\s/.test(full) ? 1 : 2;
    span.textContent = '';
    for (let i = 0; i < parts.length; i += step) {
      span.textContent += parts.slice(i, i + step).join('');
      bottom();
      await wait(/\s/.test(full) ? 38 : 30, mine);
    }
  }

  async function play(index, mine) {
    const template = show(index);
    const chatId = template.dataset.chat;
    const steps = [...messages.querySelectorAll('.msg')];
    for (const step of steps) step.classList.add('pending');
    const total = steps.length;
    await wait(500, mine);
    for (let k = 0; k < total; k++) {
      const step = steps[k];
      const span = step.querySelector('[data-text]');
      const full = span?.textContent ?? '';
      if (step.classList.contains('you')) {
        // Type into the composer, then send.
        const placeholder = to.textContent;
        to.textContent = '';
        to.classList.add('filled');
        for (let i = 0; i <= full.length; i += /\s/.test(full) ? 3 : 2) { to.textContent = full.slice(0, i); await wait(24, mine); }
        to.textContent = full;
        send.classList.add('ready');
        await wait(380, mine);
        send.classList.remove('ready');
        to.textContent = placeholder;
        to.classList.remove('filled');
        step.classList.remove('pending');
        step.classList.add('enter');
        bottom();
        await wait(500, mine);
      } else if (step.classList.contains('bot')) {
        const name = step.querySelector('.meta b')?.textContent ?? '';
        const cards = [...step.querySelectorAll('.card')];
        for (const card of cards) card.hidden = true;
        // Typing indicator from the same speaker.
        const typing = document.createElement('div');
        typing.className = 'msg bot enter';
        typing.innerHTML = `${step.querySelector('.paper').outerHTML}<div class="msg-body"><div class="meta"><b></b></div><div class="bubble"><span class="dots"><i></i><i></i><i></i></span></div></div>`;
        typing.querySelector('.meta b').textContent = name;
        step.before(typing);
        preview(chatId, `${name}: ${demo.dataset.typing}`, true);
        bottom();
        await wait(950, mine);
        typing.remove();
        step.classList.remove('pending');
        step.classList.add('enter');
        if (span) await stream(span, full, mine);
        for (const card of cards) {
          card.hidden = false;
          if (card.classList.contains('image')) {
            const frame = card.querySelector('.image-frame');
            frame.dataset.label = demo.dataset.generating;
            bottom();
            await wait(1500, mine);
            loadImages(card);
          }
          if (card.classList.contains('check')) {
            for (const li of card.querySelectorAll('li')) { bottom(); await wait(420, mine); li.classList.add('on'); }
          }
          bottom();
          await wait(350, mine);
        }
        preview(chatId, `${name}: ${full}`);
        await wait(650, mine);
      } else {
        step.classList.remove('pending');
        step.classList.add('enter');
        bottom();
        await wait(600, mine);
      }
      tabs[index].style.setProperty('--progress', `${Math.round((k + 1) / total * 100)}%`);
    }
    await wait(3800, mine);
  }

  async function cycle(start) {
    const mine = ++token;
    let index = start;
    try {
      for (;;) { await play(index, mine); index = (index + 1) % templates.length; }
    } catch { /* superseded by a newer run */ }
  }

  const select = index => {
    if (!staticPlayback()) return cycle(index);
    token++;
    show(index);
    loadImages(messages);
    for (const card of messages.querySelectorAll('.card.check')) card.classList.add('done');
  };
  for (const button of [...tabs, ...side]) button.addEventListener('click', () => {
    if (side.includes(button)) sidebar.classList.add('used');
    select(+button.dataset.scene);
  });
  return () => select(current);
}

const playback = demo?.querySelector('[data-playback]');
function refreshPlayback() {
  if (playback) {
    playback.hidden = motion.matches;
    playback.textContent = paused ? playback.dataset.play : playback.dataset.pause;
  }
  refreshRelay?.();
  refreshDemo?.();
}
motion.addEventListener('change', refreshPlayback);
playback?.addEventListener('click', () => {
  paused = !paused;
  refreshPlayback();
});
refreshPlayback();

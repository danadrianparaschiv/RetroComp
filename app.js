const ui = {
  en: {
    cabinetNav: 'Cabinet', aboutNav: 'About', kicker: 'Interactive exhibition',
    title: 'The Retro<br><em>Cabinet<span>.</span></em>', page: 'The Retro Cabinet',
    introduction: 'A personal collection of home computers, game consoles and their modern revivals.',
    indexBtn: 'Object index', figure: 'Fig. 01', caption: 'Proposed cabinet layout',
    hint: 'Select an object to explore', markers: 'Markers', close: 'Close',
    object: 'Object', objects: 'objects', note: 'Collection note', detail: 'Detail from the cabinet concept',
    previous: 'Previous', next: 'Next', reference: 'Model history', cabinetAlt: 'Concept rendering of a black two-column cabinet with seven retro computing objects on warmly lit shelves.',
    indexLabel: 'Exhibition catalogue', aboutLabel: 'Exhibition notes', aboutTitle: 'About the cabinet',
    about: 'RetroComp brings a personal collection of computers, consoles and accessories together in a planned black IKEA TROFAST display. The AI-generated cabinet study sketches one possible arrangement of the seven objects in the project notes.',
    recordsTitle: 'Reading the object notes',
    records: 'Each entry tells the history of the model and records what is known about the individual piece. The two mini consoles are modern recreations. The Famicom is listed as ordered. Exact variants, condition and final shelf positions are still being checked.',
    guideTitle: 'The planned audio guide',
    guide: 'The physical display is designed to have a Romanian and English voice guide. Visitors would press a talk button and speak into a HyperX QuadCast S. A Raspberry Pi 5 would handle the conversation, with replies played through a Google Home Mini.',
    nav: 'Main navigation', language: 'Language'
  },
  ro: {
    cabinetNav: 'Vitrină', aboutNav: 'Despre', kicker: 'Expoziție interactivă',
    title: 'Vitrina<br><em>retro<span>.</span></em>', page: 'Vitrina retro',
    introduction: 'O colecție personală de calculatoare, console de jocuri și recreări moderne ale acestora.',
    indexBtn: 'Catalog', figure: 'Fig. 01', caption: 'Amenajare propusă',
    hint: 'Selectează un obiect pentru a-l explora', markers: 'Marcaje', close: 'Închide',
    object: 'Obiect', objects: 'obiecte', note: 'Despre exemplar', detail: 'Detaliu din ilustrația vitrinei',
    previous: 'Înapoi', next: 'Înainte', reference: 'Istoria modelului', cabinetAlt: 'Ilustrația unei vitrine negre cu două coloane și șapte obiecte retro pe rafturi luminate în tonuri calde.',
    indexLabel: 'Catalogul expoziției', aboutLabel: 'Despre expoziție', aboutTitle: 'Despre vitrină',
    about: 'RetroComp reunește o colecție personală de calculatoare, console și accesorii într-o vitrină neagră IKEA TROFAST, aflată în stadiul de proiect. Ilustrația generată cu IA prezintă o posibilă dispunere a celor șapte obiecte menționate în proiect.',
    recordsTitle: 'Cum se citesc fișele',
    records: 'Fiecare fișă prezintă istoria modelului și detaliile cunoscute despre exemplar. Cele două miniconsole sunt recreări moderne. Famicom figurează ca fiind comandat. Variantele exacte, starea exemplarelor și pozițiile finale pe rafturi urmează să fie confirmate.',
    guideTitle: 'Ghidul audio propus',
    guide: 'Proiectul vitrinei fizice include un ghid vocal în română și engleză. Vizitatorii ar apăsa un buton pentru a vorbi la un microfon HyperX QuadCast S. Un Raspberry Pi 5 ar gestiona conversația, iar răspunsurile s-ar auzi printr-un Google Home Mini.',
    nav: 'Navigare principală', language: 'Limbă'
  }
};

const panel = document.querySelector('#panel');
const panelBody = document.querySelector('#panel-body');
const panelLabel = document.querySelector('#panel-label');
const closeButton = document.querySelector('.close-button');
const markerToggle = document.querySelector('.marker-toggle');
const artboard = document.querySelector('.artboard');
const objects = document.querySelector('#objects');
let language = 'en';
try { if (localStorage.getItem('retrocomp-language') === 'ro') language = 'ro'; } catch {}
const number = index => String(index + 1).padStart(2, '0');
const local = value => Array.isArray(value) ? value[language === 'ro' ? 1 : 0] : value;
const icon = (name, extra = '') => '<svg class="icon ' + extra + '" aria-hidden="true"><use href="#' + name + '"/></svg>';
const objectPhoto = item => './assets/objects/' + item.id + '.jpg';
const objectRoute = item => '#object/' + item.id;

function drawObjects() {
  objects.replaceChildren();
  exhibits.forEach((item, i) => {
    const [x, y, w, h] = item.area;
    const link = document.createElement('a');
    link.className = 'object';
    link.href = objectRoute(item);
    link.style.left = (100 * x / 1672) + '%';
    link.style.top = (100 * y / 941) + '%';
    link.style.width = (100 * w / 1672) + '%';
    link.style.height = (100 * h / 941) + '%';
    link.style.setProperty('--pin-x', (100 * (item.pin[0] - x) / w) + '%');
    link.style.setProperty('--pin-y', (100 * (item.pin[1] - y) / h) + '%');
    link.setAttribute('aria-label', number(i) + ' · ' + local(item.name));
    link.innerHTML = '<span class="marker" aria-hidden="true">' + number(i) + '</span><span class="tip" aria-hidden="true">' + local(item.name) + '</span>';
    objects.append(link);
  });
}

function objectIndex() {
  const t = ui[language];
  panelLabel.textContent = t.indexLabel;
  const rows = exhibits.map((item, i) => `
    <li><a href="${objectRoute(item)}">
      <span class="list-number">${number(i)}</span>
      <img src="${objectPhoto(item)}" width="56" height="40" alt="">
      <span class="list-name">${local(item.name)}</span>
      <span class="list-year">${item.year || '—'}</span>${icon('arrow')}
    </a></li>`).join('');
  return `<section class="panel-content"><div class="index-head"><h2 id="panel-title">${t.indexBtn}</h2>
    <span class="count">${exhibits.length} ${t.objects}</span></div><ol class="object-list">${rows}</ol></section>`;
}

function aboutPanel() {
  const t = ui[language];
  panelLabel.textContent = t.aboutLabel;
  return `<section class="panel-content about-content"><h2 id="panel-title">${t.aboutTitle}</h2>
    <p>${t.about}</p><h3>${t.recordsTitle}</h3><p>${t.records}</p><h3>${t.guideTitle}</h3><p>${t.guide}</p></section>`;
}

function objectRecord(item, i) {
  const t = ui[language];
  const prev = exhibits[(i - 1 + exhibits.length) % exhibits.length];
  const next = exhibits[(i + 1) % exhibits.length];
  panelLabel.textContent = t.object + ' ' + number(i) + ' / ' + number(exhibits.length - 1);
  return `<article class="panel-content"><div class="record-main">
    <figure class="record-picture"><img src="${objectPhoto(item)}" alt="${local(item.name)}"><figcaption>${t.detail}</figcaption></figure>
    <div><div class="record-type">${local(item.category)}${item.year ? ' · ' + item.year : ''}</div>
    <h2 id="panel-title">${local(item.name)}</h2><p>${local(item.history)}</p></div></div>
    <section class="record-note"><h3>${t.note}</h3><p>${local(item.note)}</p>
    <a class="source" href="${item.source[1]}" target="_blank" rel="noopener noreferrer">${t.reference} · ${item.source[0]} ${icon('external')}</a></section>
    </article><div class="panel-nav"><a href="${objectRoute(prev)}">${icon('arrow', 'back-arrow')} ${t.previous}</a>
    <a href="#index">${icon('list')} ${t.indexBtn}</a><a href="${objectRoute(next)}">${t.next} ${icon('arrow')}</a></div>`;
}

function renderRoute() {
  const hash = location.hash;
  const index = exhibits.findIndex(item => hash === objectRoute(item));
  const t = ui[language];
  let content;
  if (index >= 0) content = objectRecord(exhibits[index], index);
  else if (hash === '#index') content = objectIndex();
  else if (hash === '#about') content = aboutPanel();
  if (!content) {
    if (panel.open) panel.close();
    document.title = t.page + ' · RetroComp';
    return;
  }
  panelBody.innerHTML = content;
  document.title = document.querySelector('#panel-title').textContent + ' · RetroComp';
  if (!panel.open) panel.showModal();
  closeButton.focus({preventScroll:true});
  panel.scrollTop = 0;
}

function renderLanguage() {
  const t = ui[language];
  document.documentElement.lang = language;
  document.querySelectorAll('[data-ui]').forEach(el => el.textContent = t[el.dataset.ui]);
  document.querySelectorAll('[data-lang]').forEach(el => el.setAttribute('aria-pressed', String(el.dataset.lang === language)));
  document.querySelector('#title').innerHTML = t.title;
  document.querySelector('#main-nav').setAttribute('aria-label', t.nav);
  document.querySelector('.languages').setAttribute('aria-label', t.language);
  document.querySelector('.cabinet-art').alt = t.cabinetAlt;
  closeButton.setAttribute('aria-label', t.close);
  drawObjects();
  renderRoute();
}

function closePanel() {
  if (history.state?.cabinetPanel) history.back();
  else {
    history.replaceState(null, '', location.pathname + location.search);
    renderRoute();
  }
}

document.addEventListener('click', event => {
  const languageButton = event.target.closest('[data-lang]');
  if (languageButton) {
    language = languageButton.dataset.lang;
    try { localStorage.setItem('retrocomp-language', language); } catch {}
    renderLanguage();
    return;
  }
  const link = event.target.closest('a[href^="#"]');
  if (!link || event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
  event.preventDefault();
  if (link.hash === '#cabinet') {
    if (panel.open) closePanel();
    return;
  }
  // Keep a single history entry for the open viewer so Back returns to the cabinet.
  if (panel.open) history.replaceState(history.state, '', link.hash);
  else history.pushState({cabinetPanel:true}, '', link.hash);
  renderRoute();
});
markerToggle.addEventListener('click', () => {
  const hidden = artboard.classList.toggle('hide-markers');
  markerToggle.setAttribute('aria-checked', String(!hidden));
});
panel.addEventListener('cancel', event => { event.preventDefault(); closePanel(); });
panel.addEventListener('click', event => {
  if (event.target !== panel) return;
  const r = panel.getBoundingClientRect();
  if (event.clientX < r.left || event.clientX > r.right || event.clientY < r.top || event.clientY > r.bottom) closePanel();
});
closeButton.addEventListener('click', closePanel);
window.addEventListener('hashchange', renderRoute);
window.addEventListener('popstate', renderRoute);
renderLanguage();

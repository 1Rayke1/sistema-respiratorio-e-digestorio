/* ═══════════ ANATOMIA HUMANA — LÓGICA DO JOGO ═══════════ */
(function () {
'use strict';

/* ---------- persistência ---------- */
const LS_KEY = 'anatomia-game-v1';
function defaultState() {
  return {
    bestScore: 0,
    totalAnswered: 0,
    totalCorrect: 0,
    structs: {},   // id -> { seen, hit, miss }
    flags: {},     // id -> true (marcado "preciso revisar")
  };
}
let S = defaultState();
try {
  const raw = localStorage.getItem(LS_KEY);
  if (raw) S = Object.assign(defaultState(), JSON.parse(raw));
} catch (e) { /* localStorage indisponível */ }
function save() {
  try { localStorage.setItem(LS_KEY, JSON.stringify(S)); } catch (e) {}
}
function statOf(id) {
  if (!S.structs[id]) S.structs[id] = { seen: 0, hit: 0, miss: 0 };
  return S.structs[id];
}

/* ---------- utilidades ---------- */
const $ = id => document.getElementById(id);
function shuffle(a) {
  const arr = a.slice();
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}
function titleCase(s) {
  return s.toLowerCase().replace(/(^|[\s(\-.])([a-zà-ú])/g, (m, p, c) => p + c.toUpperCase());
}
function fmtTime(sec) {
  const m = String(Math.floor(sec / 60)).padStart(2, '0');
  const s = String(sec % 60).padStart(2, '0');
  return `${m}:${s}`;
}

function showScreen(id) {
  document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
  $(id).classList.add('active');
  window.scrollTo({ top: 0, behavior: 'instant' in window ? 'instant' : 'auto' });
}

/* ---------- diagrama + marcador ---------- */
/* Renderiza o SVG da região e coloca um marcador numerado na estrutura alvo. */
function renderDiagram(container, diagramKey, target, opts = {}) {
  container.innerHTML = DIAGRAMS[diagramKey];
  const svg = container.querySelector('svg');
  if (!svg || !target) return;
  const g = document.createElementNS('http://www.w3.org/2000/svg', 'g');
  g.setAttribute('class', 'marker-dot');
  const label = opts.label || '?';
  g.innerHTML = `
    <circle class="pulse" cx="${target.x}" cy="${target.y}" r="24" fill="none" stroke="#ffd54f" stroke-width="3"/>
    <circle cx="${target.x}" cy="${target.y}" r="15" fill="#ffd54f" stroke="#7a5c00" stroke-width="2.5" opacity="0.95"/>
    <circle cx="${target.x}" cy="${target.y}" r="3.2" fill="#7a5c00"/>
    <line x1="${target.x}" y1="${target.y - 15}" x2="${target.x}" y2="${target.y - 26}" stroke="#ffd54f" stroke-width="3"/>
    <text x="${target.x}" y="${target.y - 32}" text-anchor="middle" font-family="Sora,Inter,sans-serif" font-weight="800"
      font-size="17" fill="#ffd54f" stroke="#0b1220" stroke-width="3.5" paint-order="stroke">${label}</text>`;
  svg.appendChild(g);
}

/* Diagrama do modo aprender: todos os pontos clicáveis + destaque no atual */
function renderLearnDiagram(container, region, currentIdx) {
  container.innerHTML = DIAGRAMS[region.diagram];
  const svg = container.querySelector('svg');
  if (!svg) return;
  region.structures.forEach((st, i) => {
    const g = document.createElementNS('http://www.w3.org/2000/svg', 'g');
    const active = i === currentIdx;
    g.setAttribute('class', 'hotspot' + (active ? ' marker-dot' : ''));
    g.innerHTML = `
      ${active ? `<circle class="pulse" cx="${st.x}" cy="${st.y}" r="22" fill="none" stroke="#4fd1c5" stroke-width="3"/>` : ''}
      <circle cx="${st.x}" cy="${st.y}" r="${active ? 13 : 10}" fill="${active ? '#4fd1c5' : '#16233c'}"
        stroke="${active ? '#0b3a35' : '#4fd1c5'}" stroke-width="2" opacity="${active ? 1 : 0.88}"/>
      <text x="${st.x}" y="${st.y + 3.5}" text-anchor="middle" font-family="Sora,Inter,sans-serif" font-weight="700"
        font-size="10.5" fill="${active ? '#06231f' : '#9fe8e1'}">${i + 1}</text>`;
    g.addEventListener('click', () => Learn.goto(i));
    svg.appendChild(g);
  });
}

/* ---------- HOME ---------- */
function refreshHome() {
  $('stat-best').textContent = S.bestScore;
  $('stat-answered').textContent = S.totalAnswered;
  $('stat-accuracy').textContent = S.totalAnswered
    ? Math.round(100 * S.totalCorrect / S.totalAnswered) + '%' : '—';
  const n = reviewCandidates().length;
  $('review-count-label').textContent = n
    ? `${n} estrutura${n > 1 ? 's' : ''} para revisar`
    : 'Estruturas que você mais errou';
}

/* ---------- MODO APRENDER ---------- */
const Learn = {
  sys: 'resp', region: null, idx: 0,

  openSystems() {
    $('learn-count-resp').textContent = SYSTEMS.resp.regions.reduce((a, r) => a + r.structures.length, 0) + ' estruturas · ' + SYSTEMS.resp.regions.length + ' regiões';
    $('learn-count-dig').textContent = SYSTEMS.dig.regions.reduce((a, r) => a + r.structures.length, 0) + ' estruturas · ' + SYSTEMS.dig.regions.length + ' regiões';
    showScreen('screen-learn-systems');
  },

  openRegions(sys) {
    this.sys = sys;
    const sysData = SYSTEMS[sys];
    $('learn-regions-title').textContent = `${sysData.icon} ${titleCase(sysData.name)}`;
    const list = $('region-list');
    list.innerHTML = '';
    sysData.regions.forEach(reg => {
      const b = document.createElement('button');
      b.className = 'region-item';
      b.innerHTML = `<span class="ri-icon">${reg.icon}</span>
        <span class="ri-name">${titleCase(reg.name)}</span>
        <span class="ri-count">${reg.structures.length}</span>`;
      b.addEventListener('click', () => this.openRegion(reg));
      list.appendChild(b);
    });
    showScreen('screen-learn-regions');
  },

  openRegion(region, idx = 0) {
    this.region = region;
    this.idx = idx;
    $('learn-view-title').textContent = `${region.icon} ${titleCase(region.name)}`;
    $('learn-back-btn').onclick = () => this.openRegions(this.sys);
    this.render();
    showScreen('screen-learn-view');
  },

  goto(i) { this.idx = i; this.render(); },
  next() { this.idx = (this.idx + 1) % this.region.structures.length; this.render(); },
  prev() { this.idx = (this.idx - 1 + this.region.structures.length) % this.region.structures.length; this.render(); },

  render() {
    const st = this.region.structures[this.idx];
    renderLearnDiagram($('learn-diagram'), this.region, this.idx);
    $('learn-num').textContent = this.idx + 1;
    $('learn-name').textContent = st.name;
    $('learn-desc').textContent = st.desc || '';
    $('learn-counter').textContent = `${this.idx + 1}/${this.region.structures.length}`;
    const fb = $('learn-flag');
    const flagged = !!S.flags[st.id];
    fb.classList.toggle('flagged', flagged);
    fb.textContent = flagged ? '🚩 Marcada para revisar ✓' : '🚩 Preciso revisar';
  },

  toggleFlag() {
    const st = this.region.structures[this.idx];
    if (S.flags[st.id]) delete S.flags[st.id];
    else S.flags[st.id] = true;
    save();
    this.render();
    refreshHome();
  },
};

/* ---------- SELEÇÃO PONDERADA DE QUESTÕES ---------- */
/* Estruturas com mais erros ganham peso maior → aparecem mais. */
function weightOf(st) {
  const rec = S.structs[st.id];
  let w = 1;
  if (rec && rec.seen > 0) {
    const missRate = rec.miss / rec.seen;
    w += missRate * 3;              // até +3 por taxa de erro
    if (rec.seen < 2) w += 0.5;     // levemente favorece pouco vistas
  } else {
    w += 1;                          // nunca vistas: prioridade
  }
  if (S.flags[st.id]) w += 1.5;      // marcadas "preciso revisar"
  return w;
}
function weightedSample(pool, n) {
  const chosen = [];
  const items = pool.map(st => ({ st, w: weightOf(st) }));
  while (chosen.length < n && items.length > 0) {
    const total = items.reduce((a, it) => a + it.w, 0);
    let r = Math.random() * total;
    let idx = 0;
    for (let i = 0; i < items.length; i++) { r -= items[i].w; if (r <= 0) { idx = i; break; } }
    chosen.push(items[idx].st);
    items.splice(idx, 1); // sem repetição na mesma sessão
  }
  return chosen;
}

/* distratores: mesma região primeiro, depois mesmo sistema */
function buildOptions(target) {
  const sameRegion = ALL_STRUCTURES.filter(s =>
    s.sys === target.sys && s.regionId === target.regionId &&
    s.id !== target.id && s.name !== target.name);
  const sameSystem = ALL_STRUCTURES.filter(s =>
    s.sys === target.sys && s.regionId !== target.regionId && s.name !== target.name);
  const picked = [];
  const names = new Set([target.name]);
  for (const s of shuffle(sameRegion)) {
    if (picked.length >= 3) break;
    if (!names.has(s.name)) { picked.push(s.name); names.add(s.name); }
  }
  for (const s of shuffle(sameSystem)) {
    if (picked.length >= 3) break;
    if (!names.has(s.name)) { picked.push(s.name); names.add(s.name); }
  }
  return shuffle([target.name, ...picked]);
}

/* ---------- QUIZ (treino / desafio / revisão) ---------- */
const Quiz = {
  mode: 'treino',      // 'treino' | 'desafio' | 'revisao'
  questions: [], idx: 0, score: 0, correct: 0,
  wrongList: [],       // estruturas erradas (primeira tentativa)
  answeredFirstTry: false, locked: false,
  timerOn: false, timerId: null, seconds: 0,
  lastId: null,

  start(mode, opts = {}) {
    this.mode = mode;
    this.idx = 0; this.score = 0; this.correct = 0;
    this.wrongList = []; this.seconds = 0;
    clearInterval(this.timerId); this.timerId = null;

    let pool, count;
    if (mode === 'desafio') {
      pool = ALL_STRUCTURES;
      count = 20;
      this.timerOn = !!opts.timer;
    } else if (mode === 'revisao') {
      pool = opts.pool;
      count = Math.min(10, pool.length);
      this.timerOn = false;
    } else {
      pool = ALL_STRUCTURES.filter(s => s.sys === opts.sys);
      count = 10;
      this.timerOn = false;
      this.sys = opts.sys;
    }
    let qs = weightedSample(pool, count);
    // evita repetir imediatamente a última questão da sessão anterior
    if (qs.length > 1 && this.lastId && qs[0].id === this.lastId) {
      [qs[0], qs[1]] = [qs[1], qs[0]];
    }
    this.questions = qs.map(st => ({ st, options: buildOptions(st) }));

    const badge = $('quiz-mode-badge');
    if (mode === 'desafio') { badge.textContent = '🔥 DESAFIO'; badge.style.color = '#ff8f7a'; }
    else if (mode === 'revisao') { badge.textContent = '🚩 REVISÃO'; badge.style.color = '#f9c74f'; }
    else { badge.textContent = (opts.sys === 'resp' ? '🫁' : '🍽️') + ' TREINO'; badge.style.color = ''; }

    const timerEl = $('quiz-timer');
    timerEl.hidden = !this.timerOn;
    if (this.timerOn) {
      timerEl.textContent = '⏱ 00:00';
      this.timerId = setInterval(() => {
        this.seconds++;
        timerEl.textContent = '⏱ ' + fmtTime(this.seconds);
      }, 1000);
    }

    showScreen('screen-quiz');
    this.renderQuestion();
  },

  renderQuestion() {
    const q = this.questions[this.idx];
    const st = q.st;
    this.answeredFirstTry = false;
    this.locked = false;
    this.lastId = st.id;

    $('quiz-score').textContent = '⭐ ' + this.score;
    $('quiz-counter').textContent = `Questão ${this.idx + 1} de ${this.questions.length} · ${titleCase(st.regionName)}`;
    $('quiz-progress').style.width = (100 * this.idx / this.questions.length) + '%';
    $('quiz-feedback').hidden = true;

    renderDiagram($('quiz-diagram'), st.diagram, st, { label: '?' });

    const wrap = $('quiz-options');
    wrap.innerHTML = '';
    const letters = ['A', 'B', 'C', 'D'];
    q.options.forEach((name, i) => {
      const b = document.createElement('button');
      b.className = 'opt-btn';
      b.innerHTML = `<span class="opt-letter">${letters[i]}</span><span>${titleCase(name)}</span>`;
      b.addEventListener('click', () => this.answer(b, name));
      wrap.appendChild(b);
    });
  },

  answer(btn, name) {
    if (this.locked) return;
    const q = this.questions[this.idx];
    const st = q.st;
    const isCorrect = name === st.name;
    const firstTry = !this.answeredFirstTry;

    if (firstTry) {
      this.answeredFirstTry = true;
      const rec = statOf(st.id);
      rec.seen++;
      S.totalAnswered++;
      if (isCorrect) { rec.hit++; S.totalCorrect++; }
      else { rec.miss++; this.wrongList.push({ st, chosen: name }); }
      save();
      refreshHome();
    }

    const fb = $('quiz-feedback');
    const banner = $('fb-banner');
    const detail = $('fb-detail');
    const actions = $('fb-actions');
    fb.hidden = false;

    if (isCorrect) {
      this.locked = true;
      btn.classList.add('correct');
      document.querySelectorAll('#quiz-options .opt-btn').forEach(b => {
        b.disabled = true;
        if (b !== btn) b.classList.add('dim');
      });
      if (firstTry) {
        this.correct++;
        this.score += 10;
        $('quiz-score').textContent = '⭐ ' + this.score;
        banner.className = 'fb-banner ok';
        banner.textContent = '✅ CORRETO! +10 pontos';
      } else {
        banner.className = 'fb-banner ok';
        banner.textContent = '✅ Agora sim! (sem pontos)';
      }
      detail.innerHTML = `<strong>${titleCase(st.name)}</strong>` +
        (st.desc ? ` — ${st.desc}` : '') +
        `<br><small style="color:#7f8db0">📍 ${titleCase(st.regionName)} · ${SYSTEMS[st.sys].icon} ${titleCase(SYSTEMS[st.sys].name)}</small>`;
      actions.innerHTML = '';
      const nx = document.createElement('button');
      nx.className = 'nav-btn primary wide';
      nx.textContent = this.idx + 1 < this.questions.length ? 'Próxima ›' : 'Ver resultado 🏁';
      nx.addEventListener('click', () => this.next());
      actions.appendChild(nx);
      // marca no diagrama
      renderDiagram($('quiz-diagram'), st.diagram, st, { label: '✓' });
    } else {
      btn.classList.add('wrong');
      btn.disabled = true;
      banner.className = 'fb-banner bad';
      banner.textContent = '❌ INCORRETO!';

      if (this.mode === 'desafio') {
        // prova: sem segunda tentativa
        this.locked = true;
        document.querySelectorAll('#quiz-options .opt-btn').forEach(b => {
          b.disabled = true;
          const label = b.querySelector('span:last-child').textContent;
          if (label.toUpperCase() === st.name.toUpperCase()) b.classList.add('correct');
          else if (b !== btn) b.classList.add('dim');
        });
        detail.innerHTML = `A resposta correta era: <strong>${titleCase(st.name)}</strong>` +
          (st.desc ? `<br>${st.desc}` : '');
        actions.innerHTML = '';
        const nx = document.createElement('button');
        nx.className = 'nav-btn primary wide';
        nx.textContent = this.idx + 1 < this.questions.length ? 'Próxima ›' : 'Ver resultado 🏁';
        nx.addEventListener('click', () => this.next());
        actions.appendChild(nx);
      } else {
        // treino/revisão: mostrar a correta, permitir tentar de novo OU avançar
        detail.innerHTML = `A resposta correta era: <strong>${titleCase(st.name)}</strong>` +
          (st.desc ? `<br>${st.desc}` : '') +
          `<br><small style="color:#7f8db0">Você pode tentar clicar na alternativa certa ou avançar.</small>`;
        actions.innerHTML = '';
        const nx = document.createElement('button');
        nx.className = 'nav-btn primary wide';
        nx.textContent = this.idx + 1 < this.questions.length ? 'Próxima ›' : 'Ver resultado 🏁';
        nx.addEventListener('click', () => this.next());
        actions.appendChild(nx);
      }
    }
  },

  next() {
    this.idx++;
    if (this.idx >= this.questions.length) this.finish();
    else this.renderQuestion();
  },

  finish() {
    clearInterval(this.timerId); this.timerId = null;
    const total = this.questions.length;
    const wrong = total - this.correct;
    const pct = total ? Math.round(100 * this.correct / total) : 0;

    let grade, emoji, color;
    if (pct >= 90)      { grade = 'EXCELENTE';        emoji = '🏆'; color = '#f9c74f'; }
    else if (pct >= 75) { grade = 'MUITO BOM';        emoji = '🟢'; color = '#34d399'; }
    else if (pct >= 60) { grade = 'BOM';              emoji = '🟡'; color = '#facc15'; }
    else if (pct >= 40) { grade = 'PRECISA REVISAR';  emoji = '🟠'; color = '#fb923c'; }
    else                { grade = 'ESTUDE NOVAMENTE'; emoji = '🔴'; color = '#f87171'; }

    $('res-emoji').textContent = emoji;
    $('res-grade').textContent = `${emoji} ${grade}`;
    $('res-grade').style.color = color;
    $('res-correct').textContent = `${this.correct}/${total}`;
    $('res-wrong').textContent = `${wrong}/${total}`;
    $('res-pct').textContent = pct + '%';
    $('res-score').textContent = this.score;
    $('res-correct').style.color = '#34d399';
    $('res-wrong').style.color = '#f87171';
    $('res-pct').style.color = color;
    $('res-score').style.color = '#f9c74f';

    const timeEl = $('res-time');
    timeEl.hidden = !this.timerOn;
    if (this.timerOn) timeEl.textContent = `⏱️ Tempo total: ${fmtTime(this.seconds)}`;

    const nb = $('res-newbest');
    nb.hidden = true;
    if (this.mode === 'desafio' && this.score > S.bestScore) {
      S.bestScore = this.score;
      save();
      nb.hidden = false;
    }

    const wrap = $('res-wrong-wrap');
    const list = $('res-wrong-list');
    if (this.wrongList.length) {
      wrap.hidden = false;
      list.innerHTML = '';
      this.wrongList.forEach(w => {
        const d = document.createElement('div');
        d.className = 'rw-item';
        d.innerHTML = `<strong>${titleCase(w.st.name)}</strong>
          <small>📍 ${titleCase(w.st.regionName)} · ${SYSTEMS[w.st.sys].icon} ${titleCase(SYSTEMS[w.st.sys].name)}
          ${w.chosen ? ` · você marcou: ${titleCase(w.chosen)}` : ''}</small>`;
        list.appendChild(d);
      });
    } else {
      wrap.hidden = true;
    }

    const retry = $('res-retry-btn');
    retry.onclick = () => {
      if (this.mode === 'desafio') Quiz.start('desafio', { timer: this.timerOn });
      else if (this.mode === 'revisao') App.startRevisao();
      else Quiz.start('treino', { sys: this.sys });
    };

    refreshHome();
    showScreen('screen-results');
  },

  quit() {
    clearInterval(this.timerId); this.timerId = null;
    App.goHome();
  },
};

/* ---------- PRECISO REVISAR ---------- */
function reviewCandidates() {
  const items = [];
  for (const st of ALL_STRUCTURES) {
    const rec = S.structs[st.id];
    const flagged = !!S.flags[st.id];
    const miss = rec ? rec.miss : 0;
    if (miss > 0 || flagged) {
      const seen = rec ? rec.seen : 0;
      const pct = seen ? Math.round(100 * (rec.hit / seen)) : null;
      items.push({ st, miss, seen, pct, flagged });
    }
  }
  items.sort((a, b) => (b.miss - a.miss) || ((a.pct ?? 101) - (b.pct ?? 101)));
  return items;
}

function openReview() {
  const items = reviewCandidates();
  const list = $('review-list');
  const empty = $('review-empty');
  const btn = $('review-train-btn');
  list.innerHTML = '';
  if (!items.length) {
    empty.hidden = false;
    btn.style.display = 'none';
  } else {
    empty.hidden = true;
    btn.style.display = '';
    items.slice(0, 25).forEach((it, i) => {
      const d = document.createElement('div');
      d.className = 'review-item';
      const pctTxt = it.pct === null ? '—' : it.pct + '%';
      const pctColor = it.pct === null ? '#9aa8c2' : it.pct >= 75 ? '#34d399' : it.pct >= 50 ? '#facc15' : '#f87171';
      d.innerHTML = `<span class="rv-rank">${i + 1}º</span>
        <span class="rv-info">
          <div class="rv-name">${titleCase(it.st.name)} ${it.flagged ? '<span class="rv-flag">🚩</span>' : ''}</div>
          <div class="rv-meta">📍 ${titleCase(it.st.regionName)} · viu ${it.seen}× · errou ${it.miss}×</div>
        </span>
        <span class="rv-pct" style="color:${pctColor}">${pctTxt}</span>`;
      list.appendChild(d);
    });
  }
  showScreen('screen-review');
}

/* ---------- API pública ---------- */
window.App = {
  goHome() { refreshHome(); showScreen('screen-home'); },
  startTreino(sys) { Quiz.start('treino', { sys }); },
  openDesafioSetup() { showScreen('screen-desafio-setup'); },
  startDesafio() { Quiz.start('desafio', { timer: $('timer-toggle').checked }); },
  openLearnSystems() { Learn.openSystems(); },
  openLearnRegions(sys) { Learn.openRegions(sys); },
  learnNext() { Learn.next(); },
  learnPrev() { Learn.prev(); },
  toggleFlag() { Learn.toggleFlag(); },
  openReview,
  startRevisao() {
    const pool = reviewCandidates().map(it => it.st);
    if (!pool.length) return;
    Quiz.start('revisao', { pool });
  },
  quitQuiz() { Quiz.quit(); },
};

/* init */
refreshHome();
})();

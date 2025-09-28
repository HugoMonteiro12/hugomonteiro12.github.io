const phrases = [
  {
    id: 'bom-dia',
    category: 'Alltag',
    portuguese: 'Bom dia!',
    phonetic: "bohm DJEE-ah",
    german: 'Guten Morgen!',
    note: 'Nutze es bis zum Mittag – danach sagt man "Boa tarde".',
  },
  {
    id: 'boa-tarde',
    category: 'Alltag',
    portuguese: 'Boa tarde!',
    phonetic: 'BOH-ah TAR-d(ə)',
    german: 'Guten Tag! / Guten Nachmittag!',
    note: 'Für die Zeit nach dem Mittagessen bis zum frühen Abend.',
  },
  {
    id: 'boa-noite',
    category: 'Alltag',
    portuguese: 'Boa noite!',
    phonetic: 'BOH-ah NOY-t(ə)',
    german: 'Guten Abend! / Gute Nacht!',
    note: 'Je nach Kontext Begrüßung am Abend oder zum Schlafengehen.',
  },
  {
    id: 'como-estas',
    category: 'Small Talk',
    portuguese: 'Como estás?',
    phonetic: 'KOH-moo esh-TASH',
    german: 'Wie geht es dir?',
    note: 'Für Freunde und Familie (duzen). Höflich: "Como está?"',
  },
  {
    id: 'obrigada',
    category: 'Alltag',
    portuguese: 'Obrigada!',
    phonetic: 'oh-bree-GAH-dah',
    german: 'Danke! (von einer Frau)',
    note: 'Männer sagen "Obrigado" – achte auf die letzte Silbe.',
  },
  {
    id: 'por-favor',
    category: 'Alltag',
    portuguese: 'Por favor.',
    phonetic: 'poor fah-VOHR',
    german: 'Bitte.',
    note: 'Funktioniert als Bitte und als höfliche Erwiderung auf Danke.',
  },
  {
    id: 'desculpa',
    category: 'Alltag',
    portuguese: 'Desculpa!',
    phonetic: 'd(ih)-SCOOL-pah',
    german: 'Entschuldigung! / Tut mir leid!',
    note: 'Für kleine Missgeschicke. Sehr höflich: "Peço desculpa".',
  },
  {
    id: 'onde-esta',
    category: 'Unterwegs',
    portuguese: 'Onde é a estação?',
    phonetic: 'ON-d(ə) eh ah es-tah-SOWN',
    german: 'Wo ist der Bahnhof?',
    note: '"Estação" endet nasal – der Klang geht durch die Nase.',
  },
  {
    id: 'quanto-custa',
    category: 'Essen & Einkaufen',
    portuguese: 'Quanto custa?',
    phonetic: 'KWAN-too COOSH-tah',
    german: 'Wie viel kostet das?',
    note: 'Perfekt beim Marktbesuch oder im Café.',
  },
  {
    id: 'um-cafe',
    category: 'Essen & Einkaufen',
    portuguese: 'Queria um café, por favor.',
    phonetic: 'keh-REE-ah oong kah-FEH, poor fah-VOHR',
    german: 'Ich hätte gerne einen Kaffee, bitte.',
    note: 'In Portugal bestellt man häufig mit "Queria …" (Konjunktiv).',
  },
  {
    id: 'agua',
    category: 'Essen & Einkaufen',
    portuguese: 'Uma água sem gás.',
    phonetic: 'OO-mah AH-gwah seng gahsh',
    german: 'Ein Wasser ohne Kohlensäure.',
    note: 'Mit Kohlensäure: "com gás" (sprich: kohn gahsh).',
  },
  {
    id: 'gosto',
    category: 'Gefühle & Beziehungen',
    portuguese: 'Gosto muito de ti.',
    phonetic: 'GOH-stoo MOOY-too d(ih) tee',
    german: 'Ich mag dich sehr.',
    note: 'Noch stärker: "Amo-te" – ich liebe dich.',
  },
  {
    id: 'saudades',
    category: 'Gefühle & Beziehungen',
    portuguese: 'Tenho saudades tuas.',
    phonetic: 'TEHN-yoo sah-ooh-DAH-d(ə)sh TOO-ash',
    german: 'Ich vermisse dich.',
    note: '"Saudade" beschreibt eine tiefe, warme Sehnsucht – typisch portugiesisch.',
  },
  {
    id: 'parabens',
    category: 'Feiern',
    portuguese: 'Parabéns!',
    phonetic: 'pah-rah-BANGSH',
    german: 'Herzlichen Glückwunsch! / Gratuliere!',
    note: 'Das "ns" am Ende klingt wie "sch".',
  },
  {
    id: 'onde-banho',
    category: 'Unterwegs',
    portuguese: 'Onde fica a casa de banho?',
    phonetic: 'ON-d(ə) FEE-kah ah KAH-zah d(ih) BAH-nyoo',
    german: 'Wo ist die Toilette?',
    note: 'Wörtlich "Badezimmer" – portugiesische Toiletten-Schilder tragen oft ein Duschsymbol.',
  },
  {
    id: 'conta-por-favor',
    category: 'Essen & Einkaufen',
    portuguese: 'A conta, por favor.',
    phonetic: 'ah KON-tah, poor fah-VOHR',
    german: 'Die Rechnung, bitte.',
    note: 'Deutlich artikulieren: das "r" in "por" wird leicht gerollt.',
  },
  {
    id: 'muito-prazer',
    category: 'Small Talk',
    portuguese: 'Muito prazer!',
    phonetic: 'MOOY-too prah-ZEHR',
    german: 'Sehr erfreut!',
    note: 'Sag das, wenn du jemandem neu vorgestellt wirst.',
  },
  {
    id: 'ate-logo',
    category: 'Alltag',
    portuguese: 'Até logo!',
    phonetic: 'ah-TEH LAW-goo',
    german: 'Bis später!',
    note: 'Sehr portugiesisch: sag es mit einem warmen Lächeln.',
  },
  {
    id: 'ate-ja',
    category: 'Alltag',
    portuguese: 'Até já!',
    phonetic: 'ah-TEH ZHAH',
    german: 'Bis gleich!',
    note: 'Wenn ihr euch bald wieder seht – z. B. noch am selben Tag.',
  },
  {
    id: 'estou-aprender',
    category: 'Small Talk',
    portuguese: 'Estou a aprender português.',
    phonetic: 'esh-TOH ah ah-prehn-DEHR poor-too-GEHZ',
    german: 'Ich lerne gerade Portugiesisch.',
    note: 'Bonus: "Sou austríaca" (Sohn owsh-TREE-ah-kah) = Ich bin Österreicherin.',
  },
  {
    id: 'posso-ajudar',
    category: 'Alltag',
    portuguese: 'Posso ajudar?',
    phonetic: 'POS-soh ah-zhoo-DAR',
    german: 'Kann ich helfen?',
    note: 'Freundliche Frage, wenn jemand Hilfe gebrauchen koennte.',
  },
  {
    id: 'pode-falar-devagar',
    category: 'Small Talk',
    portuguese: 'Pode falar mais devagar?',
    phonetic: 'POH-d(ih) fah-LAR MAISH duh-vah-GAR',
    german: 'Koennen Sie bitte langsamer sprechen?',
    note: 'Spart Stress in Gespraechen; das portugiesische "mais" klingt wie "maish".',
  },
  {
    id: 'qual-wifi',
    category: 'Unterwegs',
    portuguese: 'Qual é a password do Wi-Fi?',
    phonetic: 'KWAL EH ah PAHS-word doo WEE-FEE',
    german: 'Wie lautet das WLAN-Passwort?',
    note: 'Cafes nutzen oft "password"; alternativ hoerst du auch "codigo".',
  },
  {
    id: 'mesa-dois',
    category: 'Essen & Einkaufen',
    portuguese: 'Uma mesa para dois, por favor.',
    phonetic: 'OO-mah MEH-zah PAH-rah DOYSH, poor fah-VOHR',
    german: 'Einen Tisch fuer zwei Personen, bitte.',
    note: 'Passe es an: "para tres" fuer drei, "para quatro" fuer vier.',
  },
  {
    id: 'vamos-brindar',
    category: 'Feiern',
    portuguese: 'Vamos brindar!',
    phonetic: 'VAH-moosh breen-DAR',
    german: 'Lass uns anstossen!',
    note: 'Sag es beim Anheben der Glaeser; das s in "vamos" klingt wie "sch".',
  }
];

const grammarTips = [
  {
    title: 'Eu sou / Tu és / Ele é',
    body:
      'Im Präsens verändern sich die Endungen stark. Merke dir die Musik: eu <strong>sou</strong>, tu <strong>és</strong>, ele/ela <strong>é</strong>.',
  },
  {
    title: 'nasal + ão',
    body:
      'Die Nase schwingt mit: Bei Wörtern wie "estação" endet das "ão" wie ein langes deutsches "aun".',
  },
  {
    title: 'eu falo, tu falas',
    body:
      'Regelmäßige Verben auf -ar: eu falo, tu falas, ele fala. Im Portugal-Portugiesisch wird das "s" am Ende oft weich wie "sch" ausgesprochen.',
  },
  {
    title: 'Artikel sind wichtig',
    body:
      'Die Portugiesen lieben Artikel: Man bestellt "<em>um café</em>" (einen Kaffee) oder fragt nach "<em>a conta</em>" (der Rechnung).',
  },
  {
    title: 'Bitte & Danke',
    body:
      'Frauen sagen <em>obrigada</em>, Männer <em>obrigado</em>. Antwortest du auf ein Dankeschön, sag freundlich: "de nada".',
  }
];

const flashcardDeck = phrases.filter((phrase) => !['ate-ja'].includes(phrase.id));

const favoritesKey = 'pt-pt-favorites';
const knownKey = 'pt-pt-known';
const plannerKey = 'pt-pt-planner';

const state = {
  favorites: loadSet(favoritesKey),
  knownFlashcards: loadSet(knownKey),
  currentFlashcardIndex: 0,
  revealTranslation: false,
  quizScore: { correct: 0, total: 0 },
};

function loadSet(key) {
  try {
    const raw = localStorage.getItem(key);
    if (!raw) return new Set();
    const parsed = JSON.parse(raw);
    return new Set(Array.isArray(parsed) ? parsed : []);
  } catch (error) {
    console.error('Fehler beim Laden', error);
    return new Set();
  }
}

function saveSet(key, set) {
  try {
    localStorage.setItem(key, JSON.stringify(Array.from(set)));
  } catch (error) {
    console.error('Fehler beim Speichern', error);
  }
}

function pickRandom(array) {
  return array[Math.floor(Math.random() * array.length)];
}

function shuffle(array) {
  const copy = [...array];
  for (let i = copy.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

const elements = {
  dailyPortuguese: document.getElementById('dailyPortuguese'),
  dailyPhonetic: document.getElementById('dailyPhonetic'),
  dailyGerman: document.getElementById('dailyGerman'),
  playDaily: document.getElementById('playDaily'),
  favoriteDaily: document.getElementById('favoriteDaily'),
  startLesson: document.getElementById('startLesson'),
  searchInput: document.getElementById('searchInput'),
  categoryFilter: document.getElementById('categoryFilter'),
  phraseList: document.getElementById('phraseList'),
  favoriteList: document.getElementById('favoriteList'),
  flashcard: document.getElementById('flashcard'),
  flashcardCategory: document.getElementById('flashcardCategory'),
  flashcardPortuguese: document.getElementById('flashcardPortuguese'),
  flashcardPhonetic: document.getElementById('flashcardPhonetic'),
  flashcardGerman: document.getElementById('flashcardGerman'),
  flashcardReveal: document.getElementById('flashcardReveal'),
  flashcardKnown: document.getElementById('flashcardKnown'),
  flashcardNext: document.getElementById('flashcardNext'),
  flashcardProgress: document.getElementById('flashcardProgress'),
  quizQuestion: document.getElementById('quizQuestion'),
  quizOptions: document.getElementById('quizOptions'),
  quizFeedback: document.getElementById('quizFeedback'),
  nextQuiz: document.getElementById('nextQuiz'),
  quizScore: document.getElementById('quizScore'),
  grammarList: document.getElementById('grammarList'),
  goalInput: document.getElementById('goalInput'),
  minutesInput: document.getElementById('minutesInput'),
  saveProgress: document.getElementById('saveProgress'),
  plannerFeedback: document.getElementById('plannerFeedback'),
  streakInfo: document.getElementById('streakInfo'),
};

let currentDailyPhrase = null;
let flashcardOrder = shuffle(flashcardDeck.map((p) => p.id));

function displayDailyPhrase() {
  currentDailyPhrase = pickRandom(phrases);
  elements.dailyPortuguese.textContent = currentDailyPhrase.portuguese;
  elements.dailyPhonetic.textContent = currentDailyPhrase.phonetic;
  elements.dailyGerman.textContent = currentDailyPhrase.german;
  updateFavoriteButton(elements.favoriteDaily, currentDailyPhrase.id);
}

function updateFavoriteButton(button, phraseId) {
  if (!button) return;
  const isFavorite = state.favorites.has(phraseId);
  button.classList.toggle('is-favorite', isFavorite);
  button.textContent = isFavorite ? '⭐ gespeichert' : '⭐ merken';
}

function speakPortuguese(text) {
  if (!('speechSynthesis' in window)) {
    alert('Sprachausgabe wird von diesem Browser nicht unterstützt.');
    return;
  }
  const utterance = new SpeechSynthesisUtterance(text);
  utterance.lang = 'pt-PT';
  utterance.rate = 1;
  utterance.pitch = 1;
  const voice = speechSynthesis
    .getVoices()
    .find((v) => v.lang === 'pt-PT' || v.lang === 'pt_PT');
  if (voice) {
    utterance.voice = voice;
  }
  speechSynthesis.cancel();
  speechSynthesis.speak(utterance);
}

function initCategoryFilter() {
  const categories = Array.from(new Set(phrases.map((phrase) => phrase.category)));
  elements.categoryFilter.innerHTML = ['Alle Kategorien', ...categories]
    .map((category, index) => {
      const value = index === 0 ? '' : category;
      return `<option value="${value}">${category}</option>`;
    })
    .join('');
}

function renderPhraseList() {
  const searchValue = elements.searchInput.value.trim().toLowerCase();
  const category = elements.categoryFilter.value;

  const filtered = phrases.filter((phrase) => {
    const matchesCategory = !category || phrase.category === category;
    const matchesSearch =
      !searchValue ||
      phrase.portuguese.toLowerCase().includes(searchValue) ||
      phrase.german.toLowerCase().includes(searchValue) ||
      phrase.phonetic.toLowerCase().includes(searchValue);
    return matchesCategory && matchesSearch;
  });

  if (filtered.length === 0) {
    elements.phraseList.innerHTML =
      '<div class="empty-state">Keine Treffer – probiere ein anderes Wort.</div>';
    return;
  }

  elements.phraseList.innerHTML = filtered
    .map(
      (phrase) => `
        <article class="phrase-item" data-id="${phrase.id}">
          <div class="phrase-item__header">
            <div>
              <div class="phrase-item__portuguese">${phrase.portuguese}</div>
              <div class="phrase-item__meta">
                <span>${phrase.phonetic}</span>
                <span>·</span>
                <span>${phrase.category}</span>
              </div>
            </div>
            <div class="phrase-item__actions">
              <button class="icon-button js-speak" title="Anhören">🔊</button>
              <button class="icon-button js-favorite" title="Merken">
                ${state.favorites.has(phrase.id) ? '⭐' : '☆'}
              </button>
            </div>
          </div>
          <p>${phrase.german}</p>
          <p class="phrase-item__note">${phrase.note}</p>
        </article>
      `
    )
    .join('');
}

function updateFavoritesSection() {
  if (state.favorites.size === 0) {
    elements.favoriteList.classList.add('empty-state');
    elements.favoriteList.innerHTML =
      'Noch keine Favoriten. Tippe auf ⭐, um Sätze zu speichern.';
    return;
  }

  elements.favoriteList.classList.remove('empty-state');
  const favoritePhrases = phrases.filter((phrase) => state.favorites.has(phrase.id));
  elements.favoriteList.innerHTML = favoritePhrases
    .map(
      (phrase) => `
        <article class="phrase-item" data-id="${phrase.id}">
          <div class="phrase-item__header">
            <div>
              <div class="phrase-item__portuguese">${phrase.portuguese}</div>
              <div class="phrase-item__meta">
                <span>${phrase.phonetic}</span>
                <span>·</span>
                <span>${phrase.category}</span>
              </div>
            </div>
            <div class="phrase-item__actions">
              <button class="icon-button js-speak" title="Anhören">🔊</button>
              <button class="icon-button js-favorite" title="Merken">⭐</button>
            </div>
          </div>
          <p>${phrase.german}</p>
          <p class="phrase-item__note">${phrase.note}</p>
        </article>
      `
    )
    .join('');
}

function toggleFavorite(id) {
  if (state.favorites.has(id)) {
    state.favorites.delete(id);
  } else {
    state.favorites.add(id);
  }
  saveSet(favoritesKey, state.favorites);
  renderPhraseList();
  updateFavoritesSection();
  if (currentDailyPhrase) {
    updateFavoriteButton(elements.favoriteDaily, currentDailyPhrase.id);
  }
}

function setupPhraseListEvents() {
  elements.phraseList.addEventListener('click', (event) => {
    const item = event.target.closest('.phrase-item');
    if (!item) return;
    const id = item.dataset.id;
    const phrase = phrases.find((entry) => entry.id === id);
    if (!phrase) return;

    if (event.target.closest('.js-speak')) {
      speakPortuguese(phrase.portuguese);
    }

    if (event.target.closest('.js-favorite')) {
      toggleFavorite(id);
    }
  });

  elements.favoriteList.addEventListener('click', (event) => {
    const item = event.target.closest('.phrase-item');
    if (!item) return;
    const id = item.dataset.id;
    const phrase = phrases.find((entry) => entry.id === id);
    if (!phrase) return;

    if (event.target.closest('.js-speak')) {
      speakPortuguese(phrase.portuguese);
    }

    if (event.target.closest('.js-favorite')) {
      toggleFavorite(id);
    }
  });
}

function currentFlashcard() {
  const currentId = flashcardOrder[state.currentFlashcardIndex % flashcardOrder.length];
  return phrases.find((phrase) => phrase.id === currentId) || flashcardDeck[0];
}

function renderFlashcard() {
  const card = currentFlashcard();
  elements.flashcardCategory.textContent = card.category;
  elements.flashcardPortuguese.textContent = card.portuguese;
  elements.flashcardPhonetic.textContent = card.phonetic;
  elements.flashcardGerman.textContent = card.german;
  elements.flashcardGerman.classList.toggle('visible', state.revealTranslation);
  elements.flashcardReveal.textContent = state.revealTranslation
    ? 'Übersetzung verbergen'
    : 'Übersetzung anzeigen';
  const known = state.knownFlashcards.size;
  elements.flashcardProgress.textContent = `Schon ${known} von ${flashcardDeck.length} Karten gemeistert.`;
  elements.flashcardKnown.textContent = state.knownFlashcards.has(card.id)
    ? 'Noch einmal üben'
    : 'Kann ich schon';
}

function goToNextFlashcard() {
  state.currentFlashcardIndex += 1;
  if (state.currentFlashcardIndex >= flashcardOrder.length) {
    flashcardOrder = shuffle(flashcardDeck.map((p) => p.id));
    state.currentFlashcardIndex = 0;
  }
  state.revealTranslation = false;
  renderFlashcard();
}

function toggleFlashcardKnown() {
  const card = currentFlashcard();
  if (state.knownFlashcards.has(card.id)) {
    state.knownFlashcards.delete(card.id);
  } else {
    state.knownFlashcards.add(card.id);
  }
  saveSet(knownKey, state.knownFlashcards);
  renderFlashcard();
}

function renderGrammarTips() {
  elements.grammarList.innerHTML = grammarTips
    .map(
      (tip) => `
        <li class="grammar-item">
          <strong>${tip.title}</strong><br />
          <span>${tip.body}</span>
        </li>
      `
    )
    .join('');
}

function setupDailyPhraseActions() {
  elements.playDaily.addEventListener('click', () => {
    if (currentDailyPhrase) {
      speakPortuguese(currentDailyPhrase.portuguese);
    }
  });

  elements.favoriteDaily.addEventListener('click', () => {
    if (currentDailyPhrase) {
      toggleFavorite(currentDailyPhrase.id);
    }
  });

  elements.startLesson.addEventListener('click', () => {
    document.getElementById('dailyPhrase').scrollIntoView({ behavior: 'smooth' });
  });
}

function generateQuizQuestion() {
  const question = pickRandom(phrases);
  const correct = question.german;
  const options = new Set([correct]);
  while (options.size < 4) {
    options.add(pickRandom(phrases).german);
  }
  const shuffled = shuffle(Array.from(options));
  elements.quizQuestion.innerHTML = `Was bedeutet <strong>${question.portuguese}</strong>?`;
  elements.quizOptions.innerHTML = shuffled
    .map(
      (option) => `
        <button class="quiz__option" data-correct="${option === correct}">
          ${option}
        </button>
      `
    )
    .join('');
  elements.quizFeedback.textContent = '';
  elements.quizOptions.dataset.answer = correct;
}

function setupQuiz() {
  generateQuizQuestion();
  elements.quizScore.textContent = 'Noch keine Antworten – leg los!';
  elements.quizOptions.addEventListener('click', (event) => {
    const button = event.target.closest('.quiz__option');
    if (!button || button.classList.contains('answered')) return;
    const isCorrect = button.dataset.correct === 'true';
    Array.from(elements.quizOptions.querySelectorAll('.quiz__option')).forEach((option) => {
      option.classList.add('answered');
      if (option.dataset.correct === 'true') {
        option.classList.add('correct');
      } else if (option === button) {
        option.classList.add('incorrect');
      }
    });

    state.quizScore.total += 1;
    if (isCorrect) {
      state.quizScore.correct += 1;
      elements.quizFeedback.textContent = 'Richtig! Muito bem!';
    } else {
      const answer = elements.quizOptions.dataset.answer;
      elements.quizFeedback.textContent = `Fast! Richtig ist: ${answer}`;
    }
    elements.quizScore.textContent = `${state.quizScore.correct} von ${state.quizScore.total} richtig.`;
  });

  elements.nextQuiz.addEventListener('click', () => {
    generateQuizQuestion();
  });
}

function loadPlanner() {
  try {
    const raw = localStorage.getItem(plannerKey);
    if (!raw) return;
    const data = JSON.parse(raw);
    if (data.goal) {
      elements.goalInput.value = data.goal;
    }
    if (data.today) {
      elements.minutesInput.value = data.today;
    }
    if (data.streak) {
      elements.streakInfo.textContent = `Aktuelle Serie: ${data.streak} Tag(e).`;
    }
  } catch (error) {
    console.error('Planner konnte nicht geladen werden', error);
  }
}

function savePlanner(goal, todayMinutes) {
  try {
    const now = new Date();
    const todayKey = now.toISOString().slice(0, 10);
    const stored = JSON.parse(localStorage.getItem(plannerKey) || '{}');
    const previousDate = stored?.lastDate;
    let streak = stored?.streak || 0;

    if (stored.lastDate === todayKey) {
      streak = stored.streak || 0;
    } else if (previousDate) {
      const yesterday = new Date(now);
      yesterday.setDate(now.getDate() - 1);
      const yesterdayKey = yesterday.toISOString().slice(0, 10);
      if (previousDate === yesterdayKey) {
        streak += 1;
      } else {
        streak = todayMinutes >= goal ? 1 : 0;
      }
    } else {
      streak = todayMinutes >= goal ? 1 : 0;
    }

    const payload = {
      goal,
      today: todayMinutes,
      streak,
      lastDate: todayKey,
    };

    localStorage.setItem(plannerKey, JSON.stringify(payload));
    elements.streakInfo.textContent = `Aktuelle Serie: ${payload.streak} Tag(e).`;
  } catch (error) {
    console.error('Planner konnte nicht gespeichert werden', error);
  }
}

function setupPlanner() {
  loadPlanner();
  elements.saveProgress.addEventListener('click', () => {
    const goal = Number(elements.goalInput.value || 0);
    const todayMinutes = Number(elements.minutesInput.value || 0);
    if (!goal || goal < 5) {
      elements.plannerFeedback.textContent = 'Setze ein realistisch erreichbares Ziel (mind. 5 Minuten).';
      return;
    }
    savePlanner(goal, todayMinutes);
    if (todayMinutes >= goal) {
      elements.plannerFeedback.textContent = 'Fantástico! Du hast dein Ziel erreicht.';
    } else {
      const diff = goal - todayMinutes;
      elements.plannerFeedback.textContent = `Es fehlen nur ${diff} Minute(n). Kleiner Spaziergang mit Kopfhörern?`;
    }
  });
}

function init() {
  displayDailyPhrase();
  initCategoryFilter();
  renderPhraseList();
  updateFavoritesSection();
  setupPhraseListEvents();
  setupDailyPhraseActions();
  renderFlashcard();
  elements.flashcardReveal.addEventListener('click', () => {
    state.revealTranslation = !state.revealTranslation;
    renderFlashcard();
  });
  elements.flashcardKnown.addEventListener('click', toggleFlashcardKnown);
  elements.flashcardNext.addEventListener('click', goToNextFlashcard);
  renderGrammarTips();
  setupQuiz();
  setupPlanner();
  elements.searchInput.addEventListener('input', renderPhraseList);
  elements.categoryFilter.addEventListener('change', renderPhraseList);
}

document.addEventListener('DOMContentLoaded', init);
(function () {
  if (typeof elements !== 'object') {
    return;
  }

  elements.customText = document.getElementById('customText');
  elements.speakCustom = document.getElementById('speakCustom');
  elements.speakStatus = document.getElementById('speakStatus');
  elements.trainerPhrase = document.getElementById('trainerPhrase');
  elements.trainerPhonetic = document.getElementById('trainerPhonetic');
  elements.trainerGerman = document.getElementById('trainerGerman');
  elements.trainerPlay = document.getElementById('trainerPlay');
  elements.trainerListen = document.getElementById('trainerListen');
  elements.trainerSkip = document.getElementById('trainerSkip');
  elements.trainerStatus = document.getElementById('trainerStatus');
  elements.challengeSubtitle = document.getElementById('challengeSubtitle');
  elements.challengePrompt = document.getElementById('challengePrompt');
  elements.challengePortuguese = document.getElementById('challengePortuguese');
  elements.challengePhonetic = document.getElementById('challengePhonetic');
  elements.challengeGerman = document.getElementById('challengeGerman');
  elements.challengeOptions = document.getElementById('challengeOptions');
  elements.challengeAction = document.getElementById('challengeAction');
  elements.challengeRefresh = document.getElementById('challengeRefresh');
  elements.challengeComplete = document.getElementById('challengeComplete');
  elements.challengeStatus = document.getElementById('challengeStatus');
  elements.challengeContent = document.getElementById('challengeContent');

  let cachedPortugueseVoice = null;
  let isSpeechPrimed = false;
  let speechPrimePromise = null;
  const microphonePermissionState = { granted: false, promise: null };

  const trainerState = {
    recognitionSupported: 'SpeechRecognition' in window || 'webkitSpeechRecognition' in window,
    currentPhrase: null,
    isListening: false,
    lastResultHandled: false,
    activeRecognition: null,
  };

  const challengeState = {
    todayKey: new Date().toISOString().slice(0, 10),
    seedOffset: 0,
    completed: false,
    current: null,
  };

  const challengeStorageKey = 'pt-pt-daily-challenge';
  const challengeTypes = ['pronounce', 'quiz'];

  const originalSpeakPortuguese = typeof window.speakPortuguese === 'function' ? window.speakPortuguese : null;
  function getPortugueseVoice() {
    if (!('speechSynthesis' in window)) {
      return null;
    }
    const voices = speechSynthesis.getVoices();
    if (cachedPortugueseVoice) {
      const stillAvailable = voices.some((voice) => voice.lang === cachedPortugueseVoice.lang && voice.name === cachedPortugueseVoice.name);
      if (stillAvailable) {
        return cachedPortugueseVoice;
      }
    }
    cachedPortugueseVoice = voices.find((voice) => voice.lang && voice.lang.toLowerCase().startsWith('pt')) || null;
    return cachedPortugueseVoice;
  }

  function speakPortugueseEnhanced(text) {
    if (!('speechSynthesis' in window)) {
      if (originalSpeakPortuguese) {
        return originalSpeakPortuguese(text);
      }
      alert('Sprachausgabe wird von diesem Browser nicht unterstuetzt.');
      return null;
    }
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = 'pt-PT';
    utterance.rate = 1;
    utterance.pitch = 1;
    const voice = getPortugueseVoice();
    if (voice) {
      utterance.voice = voice;
    }
    speechSynthesis.cancel();
    speechSynthesis.speak(utterance);
    return utterance;
  }

  window.speakPortuguese = speakPortugueseEnhanced;

  function primeSpeechSynthesis() {
    if (!('speechSynthesis' in window)) {
      isSpeechPrimed = true;
      return Promise.resolve();
    }
    if (isSpeechPrimed) {
      return Promise.resolve();
    }
    if (speechPrimePromise) {
      return speechPrimePromise;
    }

    speechPrimePromise = new Promise((resolve) => {
      let resolved = false;

      const markReady = () => {
        if (resolved) return;
        resolved = true;
        isSpeechPrimed = true;
        resolve();
      };

      const warmup = () => {
        if (isSpeechPrimed) {
          markReady();
          return;
        }
        const utterance = new SpeechSynthesisUtterance(' ');
        const voice = getPortugueseVoice();
        utterance.volume = 0;
        utterance.rate = 1;
        utterance.pitch = 1;
        utterance.lang = voice && voice.lang ? voice.lang : 'pt-PT';
        if (voice) {
          utterance.voice = voice;
        }
        const timer = setTimeout(markReady, 1200);
        const finish = () => {
          clearTimeout(timer);
          markReady();
        };
        utterance.onend = finish;
        utterance.onerror = finish;
        try {
          speechSynthesis.speak(utterance);
        } catch (error) {
          clearTimeout(timer);
          markReady();
        }
      };

      const voices = speechSynthesis.getVoices();
      if (voices.length > 0) {
        warmup();
      } else {
        const handleVoicesChanged = () => {
          speechSynthesis.removeEventListener('voiceschanged', handleVoicesChanged);
          warmup();
        };
        speechSynthesis.addEventListener('voiceschanged', handleVoicesChanged);
        setTimeout(() => {
          if (!isSpeechPrimed) {
            warmup();
          }
        }, 800);
      }
    });

    return speechPrimePromise;
  }

  function speakPortugueseAfterPrime(text) {
    return primeSpeechSynthesis().then(() => speakPortugueseEnhanced(text));
  }

  function ensureMicrophonePermission() {
    if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) {
      return Promise.resolve();
    }
    if (microphonePermissionState.granted) {
      return Promise.resolve();
    }
    if (microphonePermissionState.promise) {
      return microphonePermissionState.promise;
    }
    microphonePermissionState.promise = navigator.mediaDevices
      .getUserMedia({ audio: true })
      .then((stream) => {
        microphonePermissionState.granted = true;
        if (stream && typeof stream.getTracks === 'function') {
          stream.getTracks().forEach((track) => track.stop());
        }
      })
      .catch((error) => {
        microphonePermissionState.granted = false;
        throw error;
      })
      .finally(() => {
        microphonePermissionState.promise = null;
      });
    return microphonePermissionState.promise;
  }

  function setupSpeakLab() {
    if (!elements.customText || !elements.speakCustom) {
      return;
    }

    const setStatus = (message, tone) => {
      if (!elements.speakStatus) return;
      elements.speakStatus.textContent = message || '';
      elements.speakStatus.classList.remove('is-good', 'is-warning', 'is-error');
      if (tone) {
        elements.speakStatus.classList.add(tone);
      }
    };

    const handleSpeak = () => {
      const value = elements.customText.value.trim();
      if (!value) {
        setStatus('Schreibe zuerst einen Satz.', 'is-warning');
        elements.customText.focus();
        return;
      }
      setStatus('Wird vorgelesen ...', '');
      speakPortugueseAfterPrime(value).then((utterance) => {
        if (utterance) {
          utterance.onend = () => setStatus('Bereit fuer den naechsten Satz!', 'is-good');
          utterance.onerror = () => setStatus('Sprachausgabe leider fehlgeschlagen.', 'is-error');
        }
      });
    };

    elements.speakCustom.addEventListener('click', (event) => {
      event.preventDefault();
      handleSpeak();
    });

    elements.customText.addEventListener('keydown', (event) => {
      if ((event.ctrlKey || event.metaKey) && event.key === 'Enter') {
        event.preventDefault();
        handleSpeak();
      }
    });

    primeSpeechSynthesis().then(() => {
      if (elements.speakStatus && !elements.speakStatus.textContent) {
        setStatus('Bereit zum Vorlesen!', '');
      }
    });
  }

  function selectTrainerPhrase(previousId) {
    if (!phrases.length) {
      return null;
    }
    let candidate = pickRandom(phrases);
    if (previousId && phrases.length > 1) {
      let attempts = 0;
      while (candidate.id === previousId && attempts < 10) {
        candidate = pickRandom(phrases);
        attempts += 1;
      }
    }
    return candidate;
  }

  function setTrainerPhrase(phrase) {
    if (!phrase || !elements.trainerPhrase) {
      return;
    }
    trainerState.currentPhrase = phrase;
    elements.trainerPhrase.textContent = phrase.portuguese;
    elements.trainerPhonetic.textContent = phrase.phonetic || '';
    elements.trainerGerman.textContent = phrase.german || '';
  }

  function normalizeUtteranceText(value) {
    return (value || '')
      .toLowerCase()
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '')
      .replace(/[^a-z\s]/g, ' ')
      .replace(/\s+/g, ' ')
      .trim();
  }

  function calculatePronunciationScore(expected, attempt) {
    const expectedWords = normalizeUtteranceText(expected).split(' ').filter(Boolean);
    const attemptWords = normalizeUtteranceText(attempt).split(' ').filter(Boolean);
    if (!expectedWords.length || !attemptWords.length) {
      return 0;
    }
    let matches = 0;
    const attemptCopy = [...attemptWords];
    expectedWords.forEach((word) => {
      const index = attemptCopy.indexOf(word);
      if (index > -1) {
        matches += 1;
        attemptCopy.splice(index, 1);
      }
    });
    const precision = matches / attemptWords.length;
    const recall = matches / expectedWords.length;
    if (!Number.isFinite(precision) || !Number.isFinite(recall) || matches === 0) {
      return 0;
    }
    const f1 = (2 * precision * recall) / (precision + recall);
    if (!Number.isFinite(f1)) {
      return 0;
    }
    return Math.max(0, Math.min(100, Math.round(f1 * 100)));
  }

  function evaluatePronunciation(expected, attempts) {
    if (!attempts || !attempts.length) {
      return { score: 0, transcript: '' };
    }
    return attempts.reduce(
      (best, attempt) => {
        const score = calculatePronunciationScore(expected, attempt);
        if (score > best.score) {
          return { score, transcript: attempt };
        }
        return best;
      },
      { score: 0, transcript: attempts[0] || '' }
    );
  }

  function updateTrainerStatus(message, tone) {
    if (!elements.trainerStatus) return;
    elements.trainerStatus.textContent = message || '';
    elements.trainerStatus.classList.remove('is-good', 'is-warning', 'is-error');
    if (tone) {
      elements.trainerStatus.classList.add(tone);
    }
  }

  function startTrainerListening() {
    if (trainerState.isListening) {
      return;
    }
    if (!trainerState.recognitionSupported) {
      updateTrainerStatus('Aufnahme wird von diesem Browser nicht unterstuetzt.', 'is-warning');
      return;
    }
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (!SpeechRecognition) {
      updateTrainerStatus('Aufnahme wird von diesem Browser nicht unterstuetzt.', 'is-warning');
      return;
    }
    if (trainerState.activeRecognition) {
      try {
        trainerState.activeRecognition.stop();
      } catch (error) {
        // ignore
      }
    }

    const restoreButton = () => {
      if (elements.trainerListen) {
        elements.trainerListen.disabled = false;
        elements.trainerListen.textContent = 'Aufnehmen';
      }
    };

    const beginRecognition = () => {
      const recognition = new SpeechRecognition();
      recognition.lang = 'pt-PT';
      recognition.interimResults = false;
      recognition.maxAlternatives = 3;
      trainerState.isListening = true;
      trainerState.lastResultHandled = false;
      trainerState.activeRecognition = recognition;
      if (elements.trainerListen) {
        elements.trainerListen.disabled = true;
        elements.trainerListen.textContent = 'Hoeren ...';
      }
      updateTrainerStatus('Wir hoeren genau hin ...', '');
      recognition.onresult = (event) => {
        trainerState.isListening = false;
        trainerState.lastResultHandled = true;
        trainerState.activeRecognition = null;
        restoreButton();
        const transcripts = [];
        for (let i = 0; i < event.results.length; i += 1) {
          const result = event.results[i];
          for (let j = 0; j < result.length; j += 1) {
            transcripts.push(result[j].transcript.trim());
          }
        }
        const expected = trainerState.currentPhrase ? trainerState.currentPhrase.portuguese : '';
        const evaluation = evaluatePronunciation(expected, transcripts);
        let tone = 'is-error';
        let feedback = `Noch nicht ganz (${evaluation.score}%). Versuche es gleich nochmal.`;
        if (evaluation.score >= 85) {
          tone = 'is-good';
          feedback = `Fantastico! ${evaluation.score}% Treffer. Erkannt: "${evaluation.transcript}"`;
        } else if (evaluation.score >= 60) {
          tone = 'is-warning';
          feedback = `Schon nah dran (${evaluation.score}%). Hoere dir den Satz noch einmal an.`;
        }
        updateTrainerStatus(feedback, tone);
        const isPronounceChallenge =
          challengeState.current &&
          challengeState.current.type === 'pronounce' &&
          trainerState.currentPhrase &&
          challengeState.current.phraseId === trainerState.currentPhrase.id;
        if (evaluation.score >= 85 && isPronounceChallenge && !challengeState.completed) {
          markChallengeCompleted('Challenge gemeistert! Muito bem!');
        }
      };
      recognition.onerror = (event) => {
        trainerState.isListening = false;
        trainerState.activeRecognition = null;
        const errorType = event && event.error ? event.error : '';
        if (errorType === 'not-allowed') {
          updateTrainerStatus('Mikrofonzugriff verweigert. Bitte erlauben und erneut versuchen.', 'is-error');
        } else if (errorType === 'no-speech') {
          updateTrainerStatus('Keine Stimme erkannt. Versuch es nochmal.', 'is-warning');
        } else {
          updateTrainerStatus('Aufnahme fehlgeschlagen. Bitte erneut versuchen.', 'is-error');
        }
        restoreButton();
      };
      recognition.onend = () => {
        const wasHandled = trainerState.lastResultHandled;
        trainerState.isListening = false;
        trainerState.activeRecognition = null;
        if (!wasHandled) {
          updateTrainerStatus('Keine Stimme erkannt. Versuch es nochmal.', 'is-warning');
        }
        restoreButton();
      };
      try {
        recognition.start();
      } catch (error) {
        trainerState.isListening = false;
        trainerState.activeRecognition = null;
        updateTrainerStatus('Aufnahme konnte nicht gestartet werden.', 'is-error');
        restoreButton();
      }
    };

    if (elements.trainerListen) {
      elements.trainerListen.disabled = true;
      elements.trainerListen.textContent = microphonePermissionState.granted ? 'Hoeren ...' : 'Mikro wird geweckt...';
    }

    if (!microphonePermissionState.granted) {
      updateTrainerStatus('Mikrofon wird vorbereitet ...', '');
    }

    ensureMicrophonePermission()
      .then(() => {
        beginRecognition();
      })
      .catch((error) => {
        trainerState.isListening = false;
        trainerState.activeRecognition = null;
        if (error && (error.name === 'NotAllowedError' || error.name === 'SecurityError')) {
          updateTrainerStatus('Bitte erlaube den Mikrofonzugriff im Browser und versuche es erneut.', 'is-error');
        } else {
          updateTrainerStatus('Mikrofon konnte nicht aktiviert werden.', 'is-error');
        }
        restoreButton();
      });
  }

  function setupPronunciationTrainer() {
    if (!elements.trainerPhrase) {
      return;
    }
    const initial = selectTrainerPhrase();
    if (initial) {
      setTrainerPhrase(initial);
    }
    updateTrainerStatus('Bereit fuer deine Stimme. Druecke Aufnehmen.', '');
    if (elements.trainerListen) {
      elements.trainerListen.disabled = !trainerState.recognitionSupported;
      elements.trainerListen.textContent = 'Aufnehmen';
    }
    if (!trainerState.recognitionSupported) {
      updateTrainerStatus('Aufnahme wird von diesem Browser nicht unterstuetzt.', 'is-warning');
    }
    elements.trainerPlay?.addEventListener('click', () => {
      if (!trainerState.currentPhrase) {
        return;
      }
      speakPortugueseAfterPrime(trainerState.currentPhrase.portuguese);
    });
    elements.trainerListen?.addEventListener('click', () => {
      startTrainerListening();
    });
    elements.trainerSkip?.addEventListener('click', () => {
      if (trainerState.isListening && trainerState.activeRecognition) {
        try {
          trainerState.activeRecognition.stop();
        } catch (error) {
          // ignore
        }
      }
      const currentId = trainerState.currentPhrase ? trainerState.currentPhrase.id : null;
      const nextPhrase = selectTrainerPhrase(currentId);
      if (nextPhrase) {
        setTrainerPhrase(nextPhrase);
        updateTrainerStatus('Neue Uebung bereit. Hoere zu und sprich nach!', '');
      }
    });
  }

  function getStringHash(value) {
    return Array.from(value || '').reduce((acc, char) => {
      return (acc * 31 + char.charCodeAt(0)) & 0x7fffffff;
    }, 7);
  }

  function updateChallengeStatus(message, tone) {
    if (!elements.challengeStatus) return;
    elements.challengeStatus.textContent = message || '';
    elements.challengeStatus.classList.remove('is-good', 'is-warning', 'is-error');
    if (tone) {
      elements.challengeStatus.classList.add(tone);
    }
  }

  function renderPronounceChallenge(baseHash) {
    const phraseIndex = (baseHash + challengeState.seedOffset * 13) % phrases.length;
    const phrase = phrases[phraseIndex];
    challengeState.current = { type: 'pronounce', phraseId: phrase ? phrase.id : null };
    elements.challengeSubtitle.textContent = 'Sprich diesen Satz laut aus.';
    elements.challengePrompt.textContent = 'Hoere dir den Satz an und uebe ihn im Wiederhol-Trainer.';
    elements.challengePortuguese.textContent = phrase ? phrase.portuguese : '';
    elements.challengePhonetic.textContent = phrase ? phrase.phonetic : '';
    elements.challengeGerman.textContent = phrase ? phrase.german : '';
    if (elements.challengeGerman) { elements.challengeGerman.classList.remove('is-hidden'); }
    if (elements.challengeOptions) {
      elements.challengeOptions.innerHTML = '';
      elements.challengeOptions.classList.add('is-hidden');
    }
    if (elements.challengeAction) {
      elements.challengeAction.classList.remove('is-hidden');
      elements.challengeAction.textContent = 'Im Trainer ueben';
      elements.challengeAction.disabled = false;
      elements.challengeAction.onclick = () => {
        if (!phrase) {
          return;
        }
        setTrainerPhrase(phrase);
        speakPortugueseAfterPrime(phrase.portuguese);
        updateTrainerStatus('Hoere zu und sprich nach!', '');
        const trainerSection = document.getElementById('pronunciationTrainer');
        if (trainerSection) {
          trainerSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      };
    }
  }

  function renderQuizChallenge(baseHash) {
    const phraseIndex = (baseHash + challengeState.seedOffset * 17) % phrases.length;
    const phrase = phrases[phraseIndex];
    challengeState.current = { type: 'quiz', phraseId: phrase ? phrase.id : null };
    elements.challengeSubtitle.textContent = 'Mini-Quiz fuer unterwegs.';
    elements.challengePrompt.textContent = 'Welche Uebersetzung passt am besten?';
    elements.challengePortuguese.textContent = phrase ? phrase.portuguese : '';
    elements.challengePhonetic.textContent = phrase ? phrase.phonetic : '';
    elements.challengeGerman.textContent = '';
    if (elements.challengeGerman) { elements.challengeGerman.classList.add('is-hidden'); }
    if (elements.challengeAction) {
      elements.challengeAction.classList.add('is-hidden');
      elements.challengeAction.onclick = null;
    }
    if (elements.challengeOptions) {
      elements.challengeOptions.classList.remove('is-hidden');
      elements.challengeOptions.innerHTML = '';
      const pool = phrases.filter((entry) => entry.id !== (phrase ? phrase.id : null));
      const distractors = shuffle(pool).slice(0, 2);
      const options = shuffle([
        { text: phrase ? phrase.german : '', correct: true },
        ...distractors.map((item) => ({ text: item.german, correct: false })),
      ]);
      const buttons = [];
      options.forEach((option) => {
        const button = document.createElement('button');
        button.type = 'button';
        button.className = 'challenge__option';
        button.textContent = option.text;
        button.dataset.correct = option.correct ? 'true' : 'false';
        button.addEventListener('click', () => {
          if (buttons.some((item) => item.disabled)) {
            return;
          }
          buttons.forEach((item) => {
            item.disabled = true;
            if (item.dataset.correct === 'true') {
              item.classList.add('is-correct');
            } else {
              item.classList.add('is-incorrect');
            }
          });
          if (option.correct) {
            markChallengeCompleted('Richtig! Challenge geschafft.');
          } else {
            updateChallengeStatus('Fast! Hoere dir den Satz nochmal an und versuche es erneut.', 'is-warning');
          }
        });
        elements.challengeOptions.appendChild(button);
        buttons.push(button);
      });
    }
  }

  function renderDailyChallenge() {
    if (!elements.challengeContent) {
      return;
    }
    if (!phrases.length) {
      elements.challengeSubtitle.textContent = 'Keine Daten verfuegbar';
      elements.challengePrompt.textContent = 'Fuelle zuerst ein paar Saetze hinzu.';
      updateChallengeStatus('', '');
      return;
    }
    const baseHash = getStringHash(`${challengeState.todayKey}:${challengeState.seedOffset}`);
    const type = challengeTypes[(baseHash + challengeState.seedOffset) % challengeTypes.length];
    if (type === 'pronounce') {
      renderPronounceChallenge(baseHash);
    } else {
      renderQuizChallenge(baseHash);
    }
    if (challengeState.completed) {
      updateChallengeStatus('Challenge bereits erledigt. Stark!', 'is-good');
    } else {
      updateChallengeStatus('', '');
    }
    if (elements.challengeComplete) {
      elements.challengeComplete.disabled = challengeState.completed;
      elements.challengeComplete.textContent = challengeState.completed ? 'Schon geschafft' : 'Abgehakt!';
    }
  }

  function saveChallengeCompletion(completed) {
    try {
      localStorage.setItem(
        challengeStorageKey,
        JSON.stringify({ date: challengeState.todayKey, completed: Boolean(completed) })
      );
    } catch (error) {
      console.error('Challenge konnte nicht gespeichert werden', error);
    }
  }

  function markChallengeCompleted(message) {
    challengeState.completed = true;
    saveChallengeCompletion(true);
    updateChallengeStatus(message || 'Challenge fuer heute abgehakt. Muito bem!', 'is-good');
    if (elements.challengeComplete) {
      elements.challengeComplete.disabled = true;
      elements.challengeComplete.textContent = 'Schon geschafft';
    }
  }

  function setupDailyChallenge() {
    if (!elements.challengeContent) {
      return;
    }
    try {
      const raw = localStorage.getItem(challengeStorageKey);
      if (raw) {
        const stored = JSON.parse(raw);
        if (stored && stored.date === challengeState.todayKey) {
          challengeState.completed = Boolean(stored.completed);
        }
      }
    } catch (error) {
      console.error('Challenge konnte nicht geladen werden', error);
    }
    renderDailyChallenge();
    elements.challengeRefresh?.addEventListener('click', () => {
      challengeState.seedOffset += 1;
      challengeState.completed = false;
      saveChallengeCompletion(false);
      if (elements.challengeComplete) {
        elements.challengeComplete.disabled = false;
        elements.challengeComplete.textContent = 'Abgehakt!';
      }
      renderDailyChallenge();
      updateChallengeStatus('Neue Aufgabe bereit. Viel Erfolg!', '');
    });
    elements.challengeComplete?.addEventListener('click', () => {
      markChallengeCompleted('Challenge fuer heute abgehakt. Muito bem!');
    });
  }

  const originalSetupPlanner = typeof window.setupPlanner === 'function' ? window.setupPlanner : null;
  window.setupPlanner = function setupPlannerOverride() {
    if (originalSetupPlanner) {
      try {
        originalSetupPlanner();
      } catch (error) {
        console.warn('Original Study Buddy wurde uebersprungen:', error);
      }
    }
    setupSpeakLab();
    setupPronunciationTrainer();
    setupDailyChallenge();
  };

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
      primeSpeechSynthesis();
    });
  } else {
    primeSpeechSynthesis();
  }
})();
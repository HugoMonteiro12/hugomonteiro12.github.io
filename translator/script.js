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
  customText: document.getElementById('customText'),
  speakCustom: document.getElementById('speakCustom'),
  speakStatus: document.getElementById('speakStatus'),
};

let currentDailyPhrase = null;
let flashcardOrder = shuffle(flashcardDeck.map((p) => p.id));
let cachedPortugueseVoice = null;
let isSpeechPrimed = false;
let speechPrimePromise = null;

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
  const voice = getPortugueseVoice();
  if (voice) {
    utterance.voice = voice;
  }
  speechSynthesis.cancel();
  speechSynthesis.speak(utterance);
  return utterance;
}

function getPortugueseVoice() {
  if (!('speechSynthesis' in window)) {
    return null;
  }

  const voices = speechSynthesis.getVoices();
  if (cachedPortugueseVoice) {
    const stillAvailable = voices.some(
      (voice) =>
        voice.name === cachedPortugueseVoice.name && voice.lang === cachedPortugueseVoice.lang
    );
    if (stillAvailable) {
      return cachedPortugueseVoice;
    }
  }

  cachedPortugueseVoice =
    voices.find((voice) => voice.lang && voice.lang.toLowerCase().startsWith('pt')) || null;

  return cachedPortugueseVoice;
}



function speakPortugueseAfterPrime(text) {
  return primeSpeechSynthesis().then(() => speakPortuguese(text));
}

function setupSpeakLab() {
  if (!elements.customText || !elements.speakCustom) {
    return;
  }

  const speakStatus = elements.speakStatus;
  const updateStatus = (message) => {
    if (!speakStatus) return;
    speakStatus.textContent = message;
  };

  const isSpeechSupported =
    'speechSynthesis' in window && 'SpeechSynthesisUtterance' in window;

  if (!isSpeechSupported) {
    elements.speakCustom.disabled = true;
    updateStatus('Sprachausgabe wird von diesem Browser nicht unterstuetzt.');
    return;
  }

  const hasPortugueseVoice = () => Boolean(getPortugueseVoice());

  primeSpeechSynthesis().then(() => {
    if (speakStatus && !speakStatus.textContent) {
      updateStatus('Bereit zum Vorlesen!');
    }
  });

  const handleSpeak = () => {
    const textToSpeak = elements.customText.value.trim();
    if (!textToSpeak) {
      updateStatus('Schreibe zuerst einen Satz.');
      elements.customText.focus();
      return;
    }

    updateStatus('Wird vorgelesen ...');
    speakPortugueseAfterPrime(textToSpeak).then((utterance) => {
      if (utterance) {
        utterance.onend = () => updateStatus('Bereit fuer den naechsten Satz!');
        utterance.onerror = () => updateStatus('Sprachausgabe leider fehlgeschlagen.');
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

  if (!hasPortugueseVoice()) {
    const handleVoicesChanged = () => {
      if (hasPortugueseVoice()) {
        updateStatus('Portugiesische Stimme geladen.');
        window.speechSynthesis.removeEventListener('voiceschanged', handleVoicesChanged);
      }
    };

    window.speechSynthesis.addEventListener('voiceschanged', handleVoicesChanged);
  }
}


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

      const fallbackTimer = setTimeout(markReady, 1200);
      const handleFinish = () => {
        clearTimeout(fallbackTimer);
        markReady();
      };

      utterance.onend = handleFinish;
      utterance.onerror = handleFinish;

      try {
        speechSynthesis.speak(utterance);
      } catch (error) {
        clearTimeout(fallbackTimer);
        markReady();
      }
    };

    const voices = speechSynthesis.getVoices();
    if (voices.length > 0) {
      warmup();
    } else {
      const handleVoices = () => {
        speechSynthesis.removeEventListener('voiceschanged', handleVoices);
        warmup();
      };

      speechSynthesis.addEventListener('voiceschanged', handleVoices);
      setTimeout(() => {
        if (!isSpeechPrimed) {
          warmup();
        }
      }, 800);
    }
  });

  return speechPrimePromise;
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
      speakPortugueseAfterPrime(phrase.portuguese);
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
      speakPortugueseAfterPrime(phrase.portuguese);
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
      speakPortugueseAfterPrime(currentDailyPhrase.portuguese);
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

function init() {
  primeSpeechSynthesis();
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
  setupSpeakLab();
  elements.searchInput.addEventListener('input', renderPhraseList);
  elements.categoryFilter.addEventListener('change', renderPhraseList);
}

document.addEventListener('DOMContentLoaded', init);






















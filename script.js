const menuButton = document.querySelector('[data-menu-button]');
const nav = document.querySelector('[data-nav]');

menuButton?.addEventListener('click', () => {
  const open = nav?.classList.toggle('open');
  menuButton.setAttribute('aria-expanded', String(Boolean(open)));
});

nav?.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    nav.classList.remove('open');
    menuButton?.setAttribute('aria-expanded', 'false');
  });
});

document.querySelectorAll('[data-year]').forEach(node => {
  node.textContent = String(new Date().getFullYear());
});

const featureIntro = document.querySelector('#features.intro-section');
const legacyFeatureBand = document.querySelector('.feature-band');

if (featureIntro && legacyFeatureBand) {
  featureIntro.classList.add('feature-carousel-section');
  featureIntro.innerHTML = `
    <div class="feature-carousel-heading">
      <div>
        <span class="eyebrow">BUILT FOR THE FULL TRAINING LOOP</span>
        <h2>THE LEVEL UP APP <span>INCLUDES</span></h2>
      </div>
      <span class="feature-carousel-arrow" aria-hidden="true">↘</span>
    </div>`;

  legacyFeatureBand.className = 'feature-carousel';
  legacyFeatureBand.setAttribute('aria-label', 'Level Up app features');
  legacyFeatureBand.innerHTML = `
    <div class="feature-carousel-viewport" data-feature-swipe tabindex="0" aria-label="Swipe or use arrow keys to explore Level Up features">
      <div class="feature-carousel-track" data-feature-track>
        <article class="feature-carousel-card is-active" data-feature-card aria-label="1 of 5: Programs built around you">
          <span class="feature-card-kicker">SMART PROGRAMMING</span>
          <div class="feature-carousel-icon" aria-hidden="true">
            <svg viewBox="0 0 64 64"><rect x="11" y="13" width="42" height="40" rx="5"/><path d="M19 9v9M45 9v9M11 24h42"/><path d="m22 38 6 6 14-16"/></svg>
          </div>
          <h3>Programs built around you</h3>
          <p>Choose your training days, session length, muscle priorities and exercise preferences. Level Up turns those choices into a practical starting plan.</p>
        </article>

        <article class="feature-carousel-card" data-feature-card aria-label="2 of 5: Progression based on performance">
          <span class="feature-card-kicker">PERFORMANCE-BASED PROGRESSION</span>
          <div class="feature-carousel-icon" aria-hidden="true">
            <svg viewBox="0 0 64 64"><path d="M8 34h8M48 34h8"/><rect x="16" y="27" width="7" height="14" rx="2"/><rect x="41" y="27" width="7" height="14" rx="2"/><path d="M23 34h18"/><path d="M20 19h25M39 13l6 6-6 6"/></svg>
          </div>
          <h3>Know when it’s actually time to add weight</h3>
          <p>Level Up compares your completed sets with the programmed rep range and previous performance to recommend when to progress, hold or back off.</p>
        </article>

        <article class="feature-carousel-card" data-feature-card aria-label="3 of 5: Weight and calorie coaching">
          <span class="feature-card-kicker">TREND-BASED NUTRITION</span>
          <div class="feature-carousel-icon" aria-hidden="true">
            <svg viewBox="0 0 64 64"><path d="M14 18h36l-3 35H17l-3-35Z"/><path d="M23 18a9 9 0 0 1 18 0"/><path d="M24 38h6l5-8 5 5 7-11"/><path d="m43 24 4 0 0 4"/></svg>
          </div>
          <h3>Keep nutrition aligned with your goal</h3>
          <p>Track your weight trend against your target rate and get calorie adjustments when enough data supports making a change.</p>
        </article>

        <article class="feature-carousel-card" data-feature-card aria-label="4 of 5: Muscle volume and recovery">
          <span class="feature-card-kicker">MUSCLE VOLUME + RECOVERY</span>
          <div class="feature-carousel-icon" aria-hidden="true">
            <svg viewBox="0 0 64 64"><circle cx="32" cy="12" r="7"/><path d="M23 24c3-3 15-3 18 0l5 9-6 4-4-7v23M28 53V34l-4 4-6-6 5-8"/><path d="M28 34h8M26 53h12"/></svg>
          </div>
          <h3>See where your training is actually going</h3>
          <p>Visualize weekly muscle volume, primary and secondary set credits, and recovery across the body without jumping between separate tools.</p>
        </article>

        <article class="feature-carousel-card" data-feature-card aria-label="5 of 5: Exercise library and form guides">
          <span class="feature-card-kicker">EXERCISE GUIDANCE</span>
          <div class="feature-carousel-icon" aria-hidden="true">
            <svg viewBox="0 0 64 64"><path d="M7 32h8M49 32h8"/><rect x="15" y="24" width="7" height="16" rx="2"/><rect x="42" y="24" width="7" height="16" rx="2"/><path d="M22 32h20"/><circle cx="32" cy="13" r="5"/><path d="m29 11 6 2-6 3Z"/></svg>
          </div>
          <h3>Exercise guidance when you need it</h3>
          <p>Browse the exercise library, see targeted muscles and open form guidance without leaving the workout you are currently logging.</p>
        </article>
      </div>
    </div>
    <div class="feature-carousel-controls">
      <button class="feature-carousel-button" type="button" data-feature-prev aria-label="Previous feature">‹</button>
      <span class="feature-carousel-count"><strong data-feature-current>1</strong> / 5</span>
      <button class="feature-carousel-button" type="button" data-feature-next aria-label="Next feature">›</button>
    </div>
    <p class="feature-carousel-hint">Swipe or use the arrows to explore</p>`;

  const featureViewport = legacyFeatureBand.querySelector('[data-feature-swipe]');
  const featureTrack = legacyFeatureBand.querySelector('[data-feature-track]');
  const featureCards = Array.from(legacyFeatureBand.querySelectorAll('[data-feature-card]'));
  const featureCurrent = legacyFeatureBand.querySelector('[data-feature-current]');
  const featurePrev = legacyFeatureBand.querySelector('[data-feature-prev]');
  const featureNext = legacyFeatureBand.querySelector('[data-feature-next]');
  let activeFeature = 0;
  let featureTouchStartX = null;

  function positionFeatureCards() {
    const card = featureCards[activeFeature];
    if (!card || !featureViewport || !featureTrack) return;
    const center = card.offsetLeft + (card.offsetWidth / 2);
    const translate = (featureViewport.clientWidth / 2) - center;
    featureTrack.style.transform = `translate3d(${translate}px,0,0)`;
  }

  function showFeature(index) {
    if (!featureCards.length) return;
    activeFeature = (index + featureCards.length) % featureCards.length;
    featureCards.forEach((card, cardIndex) => {
      const active = cardIndex === activeFeature;
      card.classList.toggle('is-active', active);
      card.setAttribute('aria-hidden', String(!active));
    });
    if (featureCurrent) featureCurrent.textContent = String(activeFeature + 1);
    requestAnimationFrame(positionFeatureCards);
  }

  featurePrev?.addEventListener('click', () => showFeature(activeFeature - 1));
  featureNext?.addEventListener('click', () => showFeature(activeFeature + 1));

  featureViewport?.addEventListener('keydown', event => {
    if (!['ArrowLeft', 'ArrowRight', 'Home', 'End'].includes(event.key)) return;
    event.preventDefault();
    if (event.key === 'ArrowLeft') showFeature(activeFeature - 1);
    if (event.key === 'ArrowRight') showFeature(activeFeature + 1);
    if (event.key === 'Home') showFeature(0);
    if (event.key === 'End') showFeature(featureCards.length - 1);
  });

  featureViewport?.addEventListener('touchstart', event => {
    featureTouchStartX = event.changedTouches[0]?.clientX ?? null;
  }, { passive: true });

  featureViewport?.addEventListener('touchend', event => {
    if (featureTouchStartX === null) return;
    const endX = event.changedTouches[0]?.clientX ?? featureTouchStartX;
    const delta = endX - featureTouchStartX;
    featureTouchStartX = null;
    if (Math.abs(delta) < 42) return;
    showFeature(activeFeature + (delta < 0 ? 1 : -1));
  }, { passive: true });

  window.addEventListener('resize', () => requestAnimationFrame(positionFeatureCards));
  showFeature(0);
}

const appTabs = Array.from(document.querySelectorAll('[data-app-tab]'));
const appScreens = Array.from(document.querySelectorAll('[data-app-screen]'));
const appSwipeArea = document.querySelector('[data-app-swipe]');
const appScreenOrder = appTabs.map(tab => tab.dataset.appTab);
let activeAppScreen = appScreenOrder[0] || 'dashboard';

function showAppScreen(name, { focus = false } = {}) {
  if (!appScreenOrder.includes(name)) return;
  activeAppScreen = name;

  appScreens.forEach(screen => {
    screen.classList.toggle('is-active', screen.dataset.appScreen === name);
  });

  appTabs.forEach(tab => {
    const active = tab.dataset.appTab === name;
    tab.classList.toggle('is-active', active);
    tab.setAttribute('aria-selected', String(active));
    tab.tabIndex = active ? 0 : -1;
    if (active && focus) tab.focus();
  });
}

appTabs.forEach(tab => {
  tab.addEventListener('click', () => showAppScreen(tab.dataset.appTab));
  tab.addEventListener('keydown', event => {
    if (!['ArrowLeft', 'ArrowRight', 'Home', 'End'].includes(event.key)) return;
    event.preventDefault();
    const currentIndex = appScreenOrder.indexOf(activeAppScreen);
    let nextIndex = currentIndex;
    if (event.key === 'ArrowRight') nextIndex = (currentIndex + 1) % appScreenOrder.length;
    if (event.key === 'ArrowLeft') nextIndex = (currentIndex - 1 + appScreenOrder.length) % appScreenOrder.length;
    if (event.key === 'Home') nextIndex = 0;
    if (event.key === 'End') nextIndex = appScreenOrder.length - 1;
    showAppScreen(appScreenOrder[nextIndex], { focus: true });
  });
});

let touchStartX = null;
appSwipeArea?.addEventListener('touchstart', event => {
  touchStartX = event.changedTouches[0]?.clientX ?? null;
}, { passive: true });

appSwipeArea?.addEventListener('touchend', event => {
  if (touchStartX === null) return;
  const touchEndX = event.changedTouches[0]?.clientX ?? touchStartX;
  const delta = touchEndX - touchStartX;
  touchStartX = null;
  if (Math.abs(delta) < 42) return;

  const currentIndex = appScreenOrder.indexOf(activeAppScreen);
  const direction = delta < 0 ? 1 : -1;
  const nextIndex = (currentIndex + direction + appScreenOrder.length) % appScreenOrder.length;
  showAppScreen(appScreenOrder[nextIndex]);
}, { passive: true });

showAppScreen(activeAppScreen);

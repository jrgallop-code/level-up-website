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

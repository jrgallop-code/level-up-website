const appDemoV2Markup = `
  <section id="app-tour" class="app-demo-section app-demo-v2" aria-labelledby="app-demo-title">
    <div class="app-demo-inner">
      <div class="app-demo-copy">
        <span class="eyebrow">SEE LEVEL UP IN ACTION</span>
        <h2 id="app-demo-title">The whole training loop.<br><em>In one app.</em></h2>
        <p>Build the program, see what you actually did, track the trend, and understand when your training or nutrition needs an adjustment. These are real Level Up beta screens — not mockups.</p>
        <div class="app-demo-points">
          <div class="app-demo-point"><strong>Smart Build</strong><span>Goal, schedule, priorities, experience and equipment.</span></div>
          <div class="app-demo-point"><strong>Dashboard insights</strong><span>Calories, protein, sets, recovery, volume and weight trend.</span></div>
          <div class="app-demo-point"><strong>Progress you can see</strong><span>Weight trends, strength index and exercise-level estimated 1RM.</span></div>
          <div class="app-demo-point"><strong>Recovery + volume</strong><span>See what you trained, where the work went and how recovered each muscle is.</span></div>
        </div>
        <div class="app-demo-note"><i></i><span>Real Level Up beta screens · automatically cycling</span></div>
      </div>
      <div class="app-demo-visual">
        <div class="app-demo-glow" aria-hidden="true"></div>
        <div class="app-demo-phone" aria-label="Animated tour of real Level Up app screens">
          <div class="app-demo-side-button app-demo-side-button-one" aria-hidden="true"></div>
          <div class="app-demo-side-button app-demo-side-button-two" aria-hidden="true"></div>
          <div class="app-demo-camera" aria-hidden="true"><span></span></div>
          <div class="app-demo-screen">
            <div class="app-demo-loading"><b>LEVEL UP</b><span>Loading app tour…</span></div>
            <img data-app-demo-image alt="Animated tour showing Level Up dashboard, weight and strength progress, recovery and Smart Build screens">
          </div>
        </div>
        <div class="app-demo-caption"><strong>REAL APP SCREENS</strong><span>Level Up beta</span></div>
      </div>
    </div>
  </section>`;

const appDemoV2Styles = `
  .app-demo-section{position:relative;overflow:hidden;padding:118px 24px 124px;border-top:1px solid rgba(255,255,255,.08);border-bottom:1px solid rgba(255,255,255,.08);background:radial-gradient(circle at 76% 48%,rgba(241,58,48,.14),transparent 33%),linear-gradient(180deg,#09090a 0%,#050506 100%)}
  .app-demo-section:before{content:"";position:absolute;inset:0;pointer-events:none;background:linear-gradient(120deg,transparent 0 58%,rgba(255,255,255,.018) 58% 58.2%,transparent 58.2% 100%)}
  .app-demo-inner{position:relative;z-index:1;width:min(var(--max),100%);margin:0 auto;display:grid;grid-template-columns:minmax(0,.9fr) minmax(360px,1fr);gap:clamp(42px,6vw,92px);align-items:center}
  .app-demo-copy{max-width:650px}
  .app-demo-copy h2{font-size:clamp(48px,6.2vw,82px);line-height:.94;letter-spacing:-.06em;margin:16px 0 24px}
  .app-demo-copy h2 em{color:var(--red);font-style:normal}
  .app-demo-copy>p{max-width:610px;margin:0;color:#9a9996;font-size:15px;line-height:1.75}
  .app-demo-points{display:grid;grid-template-columns:1fr 1fr;gap:1px;margin-top:30px;background:rgba(255,255,255,.10);border:1px solid rgba(255,255,255,.10)}
  .app-demo-point{padding:18px;background:#0b0b0c;display:grid;gap:6px;min-height:90px}
  .app-demo-point strong{font-size:13px;color:#fff}.app-demo-point span{font-size:11px;line-height:1.5;color:#777673}
  .app-demo-note{margin-top:18px;display:flex;align-items:center;gap:9px;color:#777673;font-size:10px;letter-spacing:.02em}
  .app-demo-note i{width:7px;height:7px;border-radius:50%;background:var(--red);box-shadow:0 0 16px rgba(241,58,48,.75);animation:app-demo-pulse 1.8s ease-in-out infinite}
  .app-demo-visual{position:relative;display:flex;flex-direction:column;align-items:center;justify-content:center;padding:16px 0}
  .app-demo-glow{position:absolute;left:50%;top:48%;width:560px;height:560px;transform:translate(-50%,-50%);border-radius:50%;background:radial-gradient(circle,rgba(241,58,48,.18),rgba(241,58,48,.05) 38%,transparent 69%);filter:blur(18px);pointer-events:none}
  .app-demo-phone{position:relative;width:min(430px,94vw);padding:8px;border-radius:58px;background:linear-gradient(145deg,#3d3d42 0%,#101012 12%,#020203 86%,#333338 100%);box-shadow:0 38px 90px rgba(0,0,0,.68),0 0 0 1px rgba(255,255,255,.15),inset 0 0 0 1px rgba(255,255,255,.07),0 0 95px rgba(241,58,48,.09);transform:none;transition:transform .3s ease}
  .app-demo-phone:hover{transform:translateY(-3px)}
  .app-demo-side-button{position:absolute;left:-5px;width:5px;border-radius:5px 0 0 5px;background:linear-gradient(#303035,#111114);box-shadow:-1px 0 0 rgba(255,255,255,.12)}
  .app-demo-side-button-one{top:155px;height:70px}.app-demo-side-button-two{top:242px;height:112px}
  .app-demo-camera{position:absolute;z-index:6;top:18px;left:50%;transform:translateX(-50%);width:31%;height:27px;border-radius:99px;background:#030303;box-shadow:inset 0 0 0 1px rgba(255,255,255,.04)}
  .app-demo-camera span{position:absolute;right:12px;top:9px;width:8px;height:8px;border-radius:50%;background:#090b11;box-shadow:inset 0 0 0 2px #11172a,0 0 5px rgba(62,94,164,.25)}
  .app-demo-screen{position:relative;width:100%;aspect-ratio:944/2048;overflow:hidden;border-radius:50px;background:#111114;box-shadow:inset 0 0 0 1px rgba(255,255,255,.06)}
  .app-demo-screen:after{content:"";position:absolute;z-index:4;inset:0;pointer-events:none;background:linear-gradient(115deg,rgba(255,255,255,.025),transparent 18% 82%,rgba(255,255,255,.012));border-radius:inherit}
  .app-demo-screen img{position:absolute;z-index:2;inset:0;width:100%;height:100%;display:block;object-fit:contain;object-position:center;background:#111114;opacity:0;transition:opacity .38s ease}
  .app-demo-phone.is-loaded .app-demo-screen img{opacity:1}.app-demo-phone.is-loaded .app-demo-loading{opacity:0;visibility:hidden}
  .app-demo-loading{position:absolute;z-index:1;inset:0;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:7px;background:#111114;transition:opacity .35s ease,visibility .35s ease}
  .app-demo-loading b{font-size:15px;letter-spacing:.15em;color:#fff}.app-demo-loading span{font-size:10px;color:#727176}
  .app-demo-caption{position:relative;z-index:2;width:min(430px,94vw);display:flex;justify-content:space-between;gap:12px;padding:13px 10px 0}
  .app-demo-caption strong{font-size:9px;letter-spacing:.12em;color:#fff}.app-demo-caption span{font-size:9px;color:#777673}
  @keyframes app-demo-pulse{0%,100%{opacity:.45;transform:scale(.8)}50%{opacity:1;transform:scale(1)}}
  @media(max-width:900px){.app-demo-inner{grid-template-columns:1fr;gap:46px}.app-demo-copy{max-width:720px}.app-demo-visual{padding-top:0}}
  @media(max-width:600px){.app-demo-section{padding:84px 10px 90px}.app-demo-copy{padding:0 8px}.app-demo-copy h2{font-size:clamp(45px,14vw,64px)}.app-demo-copy>p{font-size:14px}.app-demo-points{grid-template-columns:1fr}.app-demo-point{min-height:0;padding:16px}.app-demo-phone{width:min(390px,96vw);padding:7px;border-radius:54px}.app-demo-screen{border-radius:47px}.app-demo-camera{top:17px;height:24px}.app-demo-caption{width:min(390px,96vw)}.app-demo-glow{width:420px;height:420px}}
  @media(prefers-reduced-motion:reduce){.app-demo-note i{animation:none}.app-demo-phone{transition:none}.app-demo-screen img{transition:none}}
`;

function mountAppDemoV2() {
  const featureBand = document.querySelector('.feature-band');
  if (!featureBand || document.querySelector('#app-tour')) return;

  const style = document.createElement('style');
  style.setAttribute('data-app-demo-v2-styles', '');
  style.textContent = appDemoV2Styles;
  document.head.appendChild(style);
  featureBand.insertAdjacentHTML('afterend', appDemoV2Markup);

  const image = document.querySelector('[data-app-demo-image]');
  const phone = image?.closest('.app-demo-phone');
  if (!image || !phone) return;

  let started = false;
  const loadTour = async () => {
    if (started) return;
    started = true;
    const parts = Array.from({ length: 10 }, (_, index) =>
      `assets/app-demo/part-${String(index).padStart(2, '0')}.txt?v=app-tour-2`
    );

    try {
      const chunks = await Promise.all(parts.map(async url => {
        const response = await fetch(url);
        if (!response.ok) throw new Error(`Failed to load ${url}`);
        return response.text();
      }));
      const encoded = chunks.join('').replace(/\s+/g, '');
      const binary = atob(encoded);
      const bytes = new Uint8Array(binary.length);
      for (let index = 0; index < binary.length; index += 1) bytes[index] = binary.charCodeAt(index);
      const blobUrl = URL.createObjectURL(new Blob([bytes], { type: 'image/webp' }));
      image.addEventListener('load', () => phone.classList.add('is-loaded'), { once: true });
      image.src = blobUrl;
    } catch (error) {
      console.warn('Level Up app tour could not load.', error);
      const loading = phone.querySelector('.app-demo-loading span');
      if (loading) loading.textContent = 'Open Level Up to explore the app';
    }
  };

  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver(entries => {
      if (!entries.some(entry => entry.isIntersecting)) return;
      observer.disconnect();
      loadTour();
    }, { rootMargin: '600px 0px' });
    observer.observe(phone);
  } else loadTour();
}

mountAppDemoV2();

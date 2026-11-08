(() => {
  const reduceMotion = matchMedia('(prefers-reduced-motion: reduce)').matches;
  const finePointer = matchMedia('(pointer: fine)').matches;
  document.querySelectorAll('#year').forEach((node) => { node.textContent = new Date().getFullYear(); });

  const menuButton = document.querySelector('.menu-toggle');
  const mobileNav = document.querySelector('.mobile-nav');
  if (menuButton && mobileNav) {
    const setMenu = (open) => {
      menuButton.classList.toggle('open', open);
      mobileNav.classList.toggle('open', open);
      menuButton.setAttribute('aria-expanded', String(open));
      menuButton.setAttribute('aria-label', open ? '关闭菜单' : '打开菜单');
    };
    menuButton.addEventListener('click', () => setMenu(!mobileNav.classList.contains('open')));
    mobileNav.addEventListener('click', (event) => { if (event.target.closest('a')) setMenu(false); });
  }

  const heroTrack = document.querySelector('#hero-track');
  if (heroTrack) {
    const slides = [...heroTrack.querySelectorAll('.hero-slide')];
    const dots = [...document.querySelectorAll('#hero-dots button')];
    const count = document.querySelector('#hero-count');
    const hero = document.querySelector('.hero');
    let current = 0;
    let timer;
    let touchStart = null;
    const show = (next) => {
      current = (next + slides.length) % slides.length;
      slides.forEach((slide, index) => {
        const active = index === current;
        slide.classList.toggle('is-active', active);
        slide.setAttribute('aria-hidden', String(!active));
        slide.inert = !active;
      });
      dots.forEach((dot, index) => {
        dot.classList.toggle('is-active', index === current);
        if (index === current) dot.setAttribute('aria-current', 'true');
        else dot.removeAttribute('aria-current');
      });
      count.textContent = `${String(current + 1).padStart(2, '0')} / ${String(slides.length).padStart(2, '0')}`;
    };
    const restart = () => {
      clearInterval(timer);
      if (!reduceMotion) timer = setInterval(() => { if (!document.hidden) show(current + 1); }, 6500);
    };
    document.querySelector('#hero-prev').addEventListener('click', () => { show(current - 1); restart(); });
    document.querySelector('#hero-next').addEventListener('click', () => { show(current + 1); restart(); });
    dots.forEach((dot, index) => dot.addEventListener('click', () => { show(index); restart(); }));
    hero.addEventListener('touchstart', (event) => { touchStart = event.touches[0].clientX; }, { passive: true });
    hero.addEventListener('touchend', (event) => {
      if (touchStart === null) return;
      const delta = event.changedTouches[0].clientX - touchStart;
      if (Math.abs(delta) > 45) { show(current + (delta < 0 ? 1 : -1)); restart(); }
      touchStart = null;
    }, { passive: true });
    hero.addEventListener('mouseenter', () => clearInterval(timer));
    hero.addEventListener('mouseleave', restart);
    hero.addEventListener('focusin', () => clearInterval(timer));
    hero.addEventListener('focusout', (event) => { if (!hero.contains(event.relatedTarget)) restart(); });
    show(0); restart();
  }

  const capabilityGrid = document.querySelector('#capability-grid');
  if (capabilityGrid && window.PORTFOLIO_DATA) {
    window.PORTFOLIO_DATA.capabilities.forEach((item, index) => {
      const card = document.createElement('article');
      card.className = 'capability-card';
      card.innerHTML = `<div class="capability-visual"><span aria-hidden="true">0${index + 1}</span></div><div class="capability-body"><small>STEP 0${index + 1} / 06</small><h3></h3><p></p><div class="capability-tags"></div></div>`;
      card.querySelector('h3').textContent = item.title;
      card.querySelector('p').textContent = item.description;
      item.tags.forEach((tag) => { const el = document.createElement('span'); el.textContent = tag; card.querySelector('.capability-tags').append(el); });
      capabilityGrid.append(card);
    });
  }

  if (!reduceMotion && 'IntersectionObserver' in window) {
    const revealTargets = document.querySelectorAll('.profile-inner,.section-title,.capability-card,.works-intro,.work-ring,.modular-block,.tile-heading,.closing-copy,.closing-stack');
    const reveal = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      });
    }, { threshold: .08, rootMargin: '0px 0px 60px 0px' });
    revealTargets.forEach((target) => { target.classList.add('will-reveal'); reveal.observe(target); });
  }

  const ring = document.querySelector('#work-ring');
  if (ring) {
    const cardsRoot = document.querySelector('#ring-cards');
    const entries = [
      { title: 'CUN.com 平台运营', image: 'assets/cun/halloween-campaign.jpg', href: 'cun.html', type: 'CASE 01' },
      { title: '香水宣传片', image: 'assets/posters/perfume.png', href: 'videos.html#perfume', type: 'VIDEO 01' },
      { title: 'AI 概念视觉', image: 'assets/posters/portfolio/1030  4k.mp4.png', href: 'videos.html#visual-road', type: 'VIDEO 02' },
      { title: 'CUN.com IP 形象', image: 'assets/cun/ip-02.jpg', href: 'cun.html#assets', type: 'VISUAL 01' },
      { title: '汽水广告片', image: 'assets/posters/soda.png', href: 'videos.html#soda', type: 'VIDEO 02' },
      { title: '动漫概念实验', image: 'assets/posters/portfolio/黑红动漫风.mov.png', href: 'videos.html#anime-red', type: 'VIDEO 03' },
      { title: 'CUN.com IP 形象', image: 'assets/cun/ip-03.jpg', href: 'cun.html#assets', type: 'VISUAL 02' },
      { title: '剧情短片', image: 'assets/posters/short-film.png', href: 'videos.html#short-film', type: 'VIDEO 03' },
      { title: 'Alice 创意短片', image: 'assets/posters/portfolio/Alice.mp4.png', href: 'videos.html#visual-alice', type: 'VIDEO 04' },
      { title: 'CUN.com 活动视觉', image: 'assets/cun/ip-04.jpg', href: 'cun.html#assets', type: 'VISUAL 03' }
    ];
    const cards = entries.map((entry) => {
      const card = document.createElement('a');
      card.href = entry.href;
      card.className = `ring-card${entry.abstract ? ' abstract' : ''}${entry.second ? ' second' : ''}`;
      card.setAttribute('aria-label', `查看${entry.title}`);
      if (entry.image) { const img = document.createElement('img'); img.src = entry.image; img.alt = ''; img.loading = 'lazy'; card.append(img); }
      else { const art = document.createElement('div'); art.className = 'abstract-art'; art.setAttribute('aria-hidden', 'true'); card.append(art); }
      const label = document.createElement('span');
      label.innerHTML = '<small></small>';
      label.querySelector('small').textContent = entry.type;
      label.append(document.createTextNode(entry.title));
      card.append(label); cardsRoot.append(card); return card;
    });
    let angleOffset = 0;
    let drag = null;
    let moved = false;
    const position = () => cards.forEach((card, index) => {
      const angle = index / cards.length * Math.PI * 2 + angleOffset;
      card.style.left = `${50 + Math.sin(angle) * 43}%`;
      card.style.top = `${50 - Math.cos(angle) * 34}%`;
      card.style.setProperty('--rot', `${Math.sin(angle) * 7}deg`);
      card.style.zIndex = String(10 + Math.round(Math.sin(angle) * 3));
    });
    position();
    ring.addEventListener('pointerdown', (event) => { if (event.target.closest('a')) return; drag = { x: event.clientX, start: angleOffset }; moved = false; ring.setPointerCapture(event.pointerId); });
    ring.addEventListener('pointermove', (event) => {
      if (!drag) return;
      const delta = event.clientX - drag.x;
      if (Math.abs(delta) > 6) moved = true;
      angleOffset = drag.start + delta * .005;
      position();
    });
    ring.addEventListener('pointerup', () => { drag = null; setTimeout(() => { moved = false; }, 80); });
    ring.addEventListener('pointercancel', () => { drag = null; moved = false; });
    cardsRoot.addEventListener('click', (event) => { if (moved) event.preventDefault(); });
    document.querySelector('#ring-prev').addEventListener('click', () => { angleOffset -= Math.PI / 5; position(); });
    document.querySelector('#ring-next').addEventListener('click', () => { angleOffset += Math.PI / 5; position(); });
  }

  const tileGrid = document.querySelector('#tile-grid');
  if (tileGrid) {
    const visuals = ['assets/cun/halloween-campaign.jpg', 'assets/posters/perfume.png', 'assets/cun/ip-01.jpg', 'assets/posters/soda.png', 'assets/cun/ip-02.jpg', 'assets/posters/short-film.png', 'assets/cun/ip-03.jpg', 'assets/posters/alice.png', 'assets/cun/ip-04.jpg'];
    [...tileGrid.children].forEach((tile, index) => {
      tile.style.setProperty('--tilt', `${(index % 3 - 1) * 2}deg`);
      tile.style.setProperty('--tile-image', `url("${visuals[index % visuals.length]}")`);
    });
    if (finePointer && !reduceMotion) tileGrid.addEventListener('pointermove', (event) => {
      const rect = tileGrid.getBoundingClientRect();
      tileGrid.style.transform = `perspective(800px) rotateY(${((event.clientX - rect.left) / rect.width - .5) * 3}deg)`;
    });
    tileGrid.addEventListener('pointerleave', () => { tileGrid.style.transform = ''; });
  }

  if (finePointer && !reduceMotion) {
    const cursor = document.querySelector('.cursor-indicator');
    window.addEventListener('pointermove', (event) => {
      if (cursor) { cursor.style.left = `${event.clientX}px`; cursor.style.top = `${event.clientY}px`; cursor.classList.add('active'); }
    }, { passive: true });
    document.addEventListener('pointerover', (event) => { if (cursor) cursor.classList.toggle('hover', !!event.target.closest('a,button')); });
  }

  const videoPlayer = document.querySelector('#video-player');
  if (videoPlayer) {
    const videos = [
      { id: 'perfume', title: '香水宣传片', type: '广告 / 产品视觉', file: 'assets/videos/portfolio/香水宣传片-web.mp4', poster: 'assets/posters/portfolio/香水宣传片.mp4.png', category: '广告视觉' },
      { id: 'soda', title: '汽水广告宣传片', type: '广告 / 产品视觉', file: 'assets/videos/portfolio/汽水广告宣传片-web.mp4', poster: 'assets/posters/portfolio/汽水广告宣传片.mp4.png', category: '广告视觉' },
      { id: 'chocolate', title: '巧克力宣传片', type: '广告 / 分镜提案', file: 'assets/videos/portfolio/巧克力宣传已改动.mp4', poster: 'assets/posters/portfolio/巧克力宣传已改动.mov.png', category: '广告视觉' },
      { id: 'short-film', title: '邻家妹妹', type: '剧情 / 生活叙事', file: 'assets/videos/portfolio/【短片】邻家妹妹-web.mp4', poster: 'assets/posters/portfolio/【短片】邻家妹妹.mp4.png', category: '剧情叙事' },
      { id: 'king', title: '国王', type: '品牌叙事 / CUN.com', file: 'assets/videos/portfolio/国王.mp4', poster: 'assets/posters/portfolio/国王.mov.png', category: '剧情叙事' },
      { id: 'taxi', title: '纽约出租车', type: '剧情视觉 / 城市片段', file: 'assets/videos/portfolio/9月2日素材_副本-web.mp4', poster: 'assets/posters/portfolio/9月2日素材_副本.mp4.png', category: '剧情叙事' },
      { id: 'anime-red', title: '黑红动漫风', type: '动漫 / 风格实验', file: 'assets/videos/portfolio/黑红动漫风.mp4', poster: 'assets/posters/portfolio/黑红动漫风.mov.png', category: '动漫概念' },
      { id: 'anime-pink', title: '粉发角色实验', type: '动漫 / 动作镜头', file: 'assets/videos/portfolio/0828IG-web.mp4', poster: 'assets/posters/portfolio/0828IG.MP4.png', category: '动漫概念' },
      { id: 'anime-school', title: '校园角色设定', type: '动漫 / 角色视觉', file: 'assets/videos/portfolio/08eb672e-a488-43dc-b059-8c88a8ec3f38_generated-web.mp4', poster: 'assets/posters/portfolio/08eb672e-a488-43dc-b059-8c88a8ec3f38_generated.mp4.png', category: '动漫概念' },
      { id: 'visual-eye', title: '瞳孔微距', type: '视觉实验 / 美妆', file: 'assets/videos/portfolio/1028.sd-web.mp4', poster: 'assets/posters/portfolio/1028.sd.mp4.png', category: '视觉实验' },
      { id: 'visual-road', title: '粉色公路', type: '视觉实验 / 场景生成', file: 'assets/videos/portfolio/1030  4k-web.mp4', poster: 'assets/posters/portfolio/1030  4k.mp4.png', category: '视觉实验' },
      { id: 'visual-ancient', title: '古风市集', type: '视觉实验 / 世界构建', file: 'assets/videos/portfolio/2e54a2f2-4dd4-40b9-9c42-6222e22db405_generated-web.mp4', poster: 'assets/posters/portfolio/2e54a2f2-4dd4-40b9-9c42-6222e22db405_generated.mp4.png', category: '视觉实验' },
      { id: 'visual-bread', title: '烘焙产品镜头', type: '视觉实验 / 产品镜头', file: 'assets/videos/portfolio/36ae28a1-2fad-4cd9-8dbe-96ed3cd05213_generated-web.mp4', poster: 'assets/posters/portfolio/36ae28a1-2fad-4cd9-8dbe-96ed3cd05213_generated.mp4.png', category: '视觉实验' },
      { id: 'visual-alice', title: 'Alice', type: '创意短片 / AIGC 实验', file: 'assets/videos/portfolio/Alice-web.mp4', poster: 'assets/posters/portfolio/Alice.mp4.png', category: '视觉实验' },
      { id: 'visual-road-2', title: '城市道路生成', type: '视觉实验 / 运动镜头', file: 'assets/videos/portfolio/08482439-58ba-4627-9319-86dc6d6697d7_generated-web.mp4', poster: 'assets/posters/portfolio/08482439-58ba-4627-9319-86dc6d6697d7_generated.mp4.png', category: '视觉实验' }
    ];
    const list = document.querySelector('#video-list');
    const filters = document.querySelector('#video-filters');
    const title = document.querySelector('#video-title');
    const type = document.querySelector('#video-type');
    let activeCategory = '全部';
    const renderList = () => {
      list.replaceChildren();
      videos.filter((video) => activeCategory === '全部' || video.category === activeCategory).forEach((video) => {
        const index = videos.indexOf(video);
        const item = document.createElement('button'); item.type = 'button'; item.className = 'video-item'; item.dataset.id = video.id;
        item.innerHTML = `<img src="${video.poster}" alt=""><span><small>${String(index + 1).padStart(2, '0')} / ${String(videos.length).padStart(2, '0')} · ${video.category}</small><strong></strong><em></em></span><b aria-hidden="true">↗</b>`;
        item.querySelector('strong').textContent = video.title; item.querySelector('em').textContent = video.type;
        item.addEventListener('click', () => choose(video.id, true)); list.append(item);
      });
      [...list.children].forEach((item) => item.classList.toggle('active', item.dataset.id === location.hash.slice(1)));
    };
    ['全部', ...new Set(videos.map((video) => video.category))].forEach((category) => {
      const button = document.createElement('button'); button.type = 'button'; button.textContent = category;
      button.addEventListener('click', () => {
        activeCategory = category;
        [...filters.children].forEach((item) => item.setAttribute('aria-pressed', String(item === button)));
        renderList();
      });
      button.setAttribute('aria-pressed', String(category === activeCategory)); filters.append(button);
    });
    const choose = (id, play = false) => {
      const video = videos.find((item) => item.id === id) || videos[0];
      videoPlayer.pause(); videoPlayer.src = video.file; videoPlayer.poster = video.poster; videoPlayer.load();
      title.textContent = video.title; type.textContent = video.type;
      if (activeCategory !== '全部' && activeCategory !== video.category) {
        activeCategory = video.category;
        [...filters.children].forEach((item) => item.setAttribute('aria-pressed', String(item.textContent === activeCategory)));
        renderList();
      }
      history.replaceState(null, '', `#${video.id}`);
      [...list.children].forEach((item) => item.classList.toggle('active', item.dataset.id === video.id));
      if (play) videoPlayer.play().catch(() => {});
    };
    renderList();
    const deepLink = location.hash.slice(1);
    choose(location.hash.slice(1));
    if (deepLink) requestAnimationFrame(() => document.querySelector('#screening').scrollIntoView());
    window.addEventListener('hashchange', () => choose(location.hash.slice(1)));
  }
})();

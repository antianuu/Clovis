// Minimal interactions for Clovis landing
const $ = (s, ctx=document) => ctx.querySelector(s);
const $$ = (s, ctx=document) => Array.from(ctx.querySelectorAll(s));

// Year stamp
$('#year').textContent = new Date().getFullYear();

// Background video toggle (if video present)
const vid = $('#bgvid');
const toggleBtn = $('#toggleVideo');
if (vid && toggleBtn) {
  const update = () => toggleBtn.textContent = vid.paused ? 'Play Video' : 'Pause Video';
  toggleBtn.addEventListener('click', () => { vid.paused ? vid.play() : vid.pause(); update(); });
  vid.addEventListener('play', update); vid.addEventListener('pause', update);
  // Try auto-play muted
  vid?.play?.().catch(()=>{});
}

// Lightbox for gallery
const box = $('#lightbox');
const boxImg = box?.querySelector('img');
$('#closeBox')?.addEventListener('click', () => box.close());

$$('.gallery a').forEach(a => {
  a.addEventListener('click', (e) => {
    e.preventDefault();
    if (!box || !boxImg) return;
    boxImg.src = a.href;
    if (typeof box.showModal === 'function') box.showModal();
  });
});

// Smooth anchor scrolling
$$('a[href^="#"]').forEach(a => {
  a.addEventListener('click', (e) => {
    const id = a.getAttribute('href').slice(1);
    const target = document.getElementById(id);
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});

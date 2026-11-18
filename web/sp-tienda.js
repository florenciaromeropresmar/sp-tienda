/* SP Connect Argentina · ajustes de la tienda (categorías, fichas de producto y video del carrusel).
   Va dentro de un bloque "Personalizada > Código" del tema, así no depende de GTM
   y no lo cortan los bloqueadores de anuncios. Las imágenes y videos se sirven desde
   GitHub (florluuucia/sp-tienda) por jsDelivr. */
(function () {
  if (window.__spTienda) return;
  window.__spTienda = true;

  var CDN = 'https://cdn.jsdelivr.net/gh/florluuucia/sp-tienda@main/';

  /* ---------- estilos ---------- */
  var CSS = [
    ':root{--sp-bg:#EDF0F3;--sp-paper:#F8F9FB;--sp-ink:#0C0D0F;--sp-ink2:#2A2E34;--sp-mute:#5E6670;--sp-line:#E4E8EC;--sp-line2:#CFD5DC}',

    /* categoría: banner */
    '.sp-banner{position:relative;overflow:hidden;font-family:Montserrat,system-ui,sans-serif;color:var(--sp-ink)}',
    '.sp-banner--foto{height:min(560px,72vh);background:var(--sp-ink);color:var(--sp-paper)}',
    '.sp-banner--foto picture,.sp-banner--foto img.sp-banner-img{position:absolute;inset:0;width:100%;height:100%;object-fit:cover;display:block}',
    '.sp-banner--foto:after{content:"";position:absolute;inset:0;background:linear-gradient(90deg,rgba(12,13,15,.72) 0%,rgba(12,13,15,.38) 42%,rgba(12,13,15,0) 72%)}',
    '.sp-banner-txt{position:relative;z-index:1;box-sizing:border-box;display:flex;flex-direction:column;gap:20px;max-width:760px}',
    '.sp-banner--foto .sp-banner-txt{height:100%;justify-content:flex-end;padding:0 clamp(20px,6vw,96px) clamp(40px,6vw,72px)}',
    '.sp-banner--papel{background:var(--sp-bg);display:flex;flex-wrap:wrap;align-items:flex-end;gap:40px;padding:clamp(40px,6vw,72px) clamp(20px,6vw,96px);box-sizing:border-box;min-height:min(560px,72vh)}',
    '.sp-banner--papel .sp-banner-txt{flex:1 1 440px}',
    '.sp-banner-fotos{flex:1 1 420px;display:flex;justify-content:flex-end;align-items:flex-end;gap:8px}',
    '.sp-banner-fotos img{display:block;height:auto;mix-blend-mode:multiply}',
    '.sp-banner-kicker{margin:0;font-size:15px;font-weight:600}',
    '.sp-banner-titulo{margin:0;font-size:clamp(40px,5.4vw,80px);line-height:1.04;font-weight:700;letter-spacing:-.02em}',
    '.sp-banner-bajada{margin:0;font-size:clamp(17px,1.4vw,19px);line-height:1.5;max-width:36ch}',
    '.sp-banner--foto .sp-banner-bajada{color:#E4E8EC}.sp-banner--papel .sp-banner-bajada{color:var(--sp-ink2)}',

    /* categoría: chips y grilla */
    '.sp-cat #ns-section-heading .page-header{display:none}',
    '.sp-cat #ns-section-heading{margin:0;padding:0}',
    '.sp-chips{display:flex;flex-wrap:wrap;gap:8px;margin:0 0 32px;font-family:Montserrat,system-ui,sans-serif}',
    '.sp-chips a{display:inline-flex;align-items:center;height:44px;padding:0 18px;border-radius:22px;border:1px solid var(--sp-line2);background:var(--sp-paper);color:var(--sp-ink);font-size:14px;font-weight:500;text-decoration:none}',
    '.sp-chips a.sp-on{background:var(--sp-ink);border-color:var(--sp-ink);color:var(--sp-paper)}',
    '@media (min-width:768px){.sp-cat .filters-controls-content{display:none!important}.sp-cat .section-main-products-grid .grid.grid-md-auto-4{display:block!important}}',
    '.sp-cat .section-main-products-grid{padding-top:40px}',
    '.sp-cat .js-product-table{column-gap:32px!important;row-gap:56px!important}',
    '.sp-cat .product-item-information{padding-top:16px}',
    '.sp-cat .product-item .js-item-submit-container{display:none!important}',
    '.sp-tipo{display:block;font-size:13px;font-weight:400;color:var(--sp-mute);margin-bottom:6px}',
    '.sp-modelo{display:block;font-size:18px;font-weight:600;line-height:1.3;color:var(--sp-ink)}',
    '.sp-cat .product-item-price{font-size:16px!important;font-weight:500!important;color:var(--sp-ink2)!important}',
    '.sp-cat .product-item-name{font-family:Montserrat,system-ui,sans-serif;-webkit-line-clamp:unset!important;max-height:none!important;overflow:visible!important}',

    /* ficha de producto */
    '@media (min-width:768px){',
    ' .sp-prod .product-columns{display:grid!important;grid-template-columns:minmax(0,1fr) minmax(360px,440px);column-gap:clamp(48px,6vw,112px);max-width:1440px;margin:0 auto;padding:40px clamp(20px,5vw,80px) 0;box-sizing:border-box;align-items:start}',
    ' .sp-prod #ns-block-product_media,.sp-prod #ns-block-product_info{width:auto!important;max-width:none!important;flex:none!important;padding:0!important}',
    ' .sp-prod #ns-block-product_info{position:sticky;top:96px;align-self:start}',
    '}',
    '.sp-prod .product-info{gap:32px;font-family:Montserrat,system-ui,sans-serif}',
    '.sp-prod .breadcrumbs{font-size:13px;color:var(--sp-mute);margin-bottom:24px}',
    '.sp-prod .product-sku{display:none}',
    '.sp-prod .sp-kicker{margin:0 0 10px;font-size:15px;font-weight:500;color:var(--sp-mute)}',
    '.sp-prod h1.product-name{font-size:clamp(36px,3.4vw,48px)!important;line-height:1.05!important;font-weight:700!important;letter-spacing:-.02em;margin:0 0 20px!important}',
    '.sp-prod .product-price-display{font-size:32px!important;font-weight:600!important;letter-spacing:-.01em}',
    '.sp-prod .product-form{margin-top:28px}',
    '.sp-prod .product-actions .btn-primary,.sp-prod .js-addtocart{height:56px!important;border-radius:28px!important;font-family:Montserrat,system-ui,sans-serif!important;font-size:16px!important;font-weight:600!important;letter-spacing:0!important;text-transform:none!important}',
    '.sp-prod .product-purchase-info{display:none!important}',
    '.sp-prod #ns-section-product_description{display:none!important}',
    '.sp-prod .product-info-description{border-top:1px solid var(--sp-line);padding-top:28px;font-size:16px;line-height:1.6;color:var(--sp-ink2)}',
    '.sp-prod .section-related-products{padding-top:120px}',

    /* video en el carrusel */
    '.sp-video-slide .sp-video-box{position:relative;display:block;padding-bottom:100%;background:#fff;overflow:hidden}',
    '.sp-video-slide video{position:absolute;inset:0;width:100%;height:100%;object-fit:cover;display:block}',
    '.sp-video-thumb .sp-video-box{position:relative;display:block;padding-bottom:100%;background:#111;overflow:hidden}',
    '.sp-video-thumb video{position:absolute;inset:0;width:100%;height:100%;object-fit:cover;pointer-events:none}',
    '.sp-video-thumb .sp-play{position:absolute;left:50%;top:50%;width:0;height:0;margin:-9px 0 0 -6px;border-style:solid;border-width:9px 0 9px 15px;border-color:transparent transparent transparent #fff;filter:drop-shadow(0 0 3px rgba(0,0,0,.7));pointer-events:none}'
  ].join('\n');

  /* ---------- datos ---------- */
  var BANNERS = {
    bici: { tipo: 'foto', img: 'web/banners/bici.jpg', imgCel: 'web/banners/bici-cel.jpg', alt: 'Ciclista con su bici en la montaña',
      kicker: 'Bici', titulo: 'El recorrido, siempre a la vista.', bajada: 'Apoyás, girás 90° y queda trabado sobre el manubrio, la potencia o el cuadro.' },
    moto: { tipo: 'foto', img: 'web/banners/moto.jpg', imgCel: 'web/banners/moto-cel.jpg', alt: 'Moto con soporte SP Connect en el manubrio',
      kicker: 'Moto', titulo: 'La ruta no lo suelta.', bajada: 'Manubrio, tija, espejo o freno: el mismo anclaje SPC+ en cada moto.' },
    auto: { tipo: 'papel', kicker: 'Auto y escritorio', titulo: 'Cambia el soporte, no el celular.', bajada: 'De la moto a la rejilla, al escritorio o al cargador, con la misma funda.',
      fotos: [['web/banners/auto-1.jpg', 'Office Stand', '46%'], ['web/banners/auto-2.jpg', 'Vent Mount', '34%']] },
    todos: { tipo: 'papel', kicker: 'Todo el sistema', titulo: 'Una funda. Todos tus lugares.', bajada: 'Fundas, soportes, cabezales y accesorios del sistema SP Connect.',
      fotos: [['web/banners/todos-1.jpg', 'Funda Phone Case', '34%'], ['web/banners/todos-2.jpg', 'Cabezal SPC+', '26%'], ['web/banners/todos-3.jpg', 'Tripod Pole', '34%']] }
  };

  var VIDEOS = { // número de producto en Tiendanube -> video en productos/videos/
    381763634: 'phone-case-apple', 381763729: 'phone-case-samsung', 381763806: 'phone-case-xiaomi', 381763815: 'phone-case-google',
    381763856: 'phone-case-apple', 381763933: 'phone-case-samsung', 381763976: 'moto-mount-pro', 381763985: 'moto-stem-mount',
    381763995: 'glass-screen-protector', 381764138: 'mirror-mount-pro', 381764171: 'office-stand', 381764255: 'vent-mount',
    381764262: 'brake-mount', 381764270: 'bar-clamp-mount-pro', 381764276: 'moto-mount-pro', 381764279: 'clutch-mount-pro',
    381764285: 'clutch-mount-pro', 381764312: 'office-stand', 381764325: 'vent-mount', 381764337: 'charging-module',
    381764343: 'glass-screen-protector', 381764391: 'charging-module', 381764564: 'anti-vibration-module'
  };
  var VIDEO_POSICION = 2; // 2 = después de la foto principal

  /* ---------- utilidades ---------- */
  function el(tag, cls, txt) { var e = document.createElement(tag); if (cls) e.className = cls; if (txt != null) e.textContent = txt; return e; }
  function partirNombre(t) { // "Soporte de manubrio SP Connect Moto Mount Pro" -> [tipo, modelo]
    var m = /^(.*?)\s+SP Connect\s+(.+)$/.exec((t || '').trim());
    return m && m[1] && m[2] ? [m[1], m[2]] : null;
  }
  var reducir = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* ---------- categoría ---------- */
  function categoria() {
    var lista = document.getElementById('ns-section-product_list');
    var top = location.pathname.split('/').filter(Boolean)[0];
    if (!lista || !BANNERS[top]) return;
    document.body.classList.add('sp-cat');
    var b = BANNERS[top];
    var cab = document.getElementById('ns-section-heading');
    var titulo = cab && cab.querySelector('h1, .page-header-title-inner');
    var esSub = location.pathname.split('/').filter(Boolean).length > 1;

    if (!document.querySelector('.sp-banner')) {
      var sec = el('section', 'sp-banner sp-banner--' + b.tipo);
      if (b.tipo === 'foto') {
        var pic = el('picture');
        var src = el('source'); src.media = '(max-width: 767px)'; src.srcset = CDN + b.imgCel; pic.appendChild(src);
        var im = el('img', 'sp-banner-img'); im.src = CDN + b.img; im.alt = b.alt; im.decoding = 'async'; pic.appendChild(im);
        sec.appendChild(pic);
      }
      var tx = el('div', 'sp-banner-txt');
      tx.appendChild(el('p', 'sp-banner-kicker', esSub && titulo ? titulo.textContent.trim() : b.kicker));
      tx.appendChild(el('h1', 'sp-banner-titulo', b.titulo));
      tx.appendChild(el('p', 'sp-banner-bajada', b.bajada));
      sec.appendChild(tx);
      if (b.tipo === 'papel') {
        var fs = el('div', 'sp-banner-fotos');
        b.fotos.forEach(function (f) { var i = el('img'); i.src = CDN + f[0]; i.alt = f[1]; i.style.width = f[2]; fs.appendChild(i); });
        sec.appendChild(fs);
      }
      (cab || lista).parentNode.insertBefore(sec, cab || lista);
    }

    // chips de subcategorías (las mismas del filtro del tema)
    var cont = lista.querySelector('.container');
    if (cont && !lista.querySelector('.sp-chips')) {
      var chips = el('nav', 'sp-chips'); chips.setAttribute('aria-label', 'Subcategorías');
      var base = '/' + top + '/';
      var todo = el('a', location.pathname === base ? 'sp-on' : '', 'Todo'); todo.href = base; chips.appendChild(todo);
      var vistos = {};
      [].forEach.call(document.querySelectorAll('.filters-desktop-content a[href], .js-filters a[href]'), function (a) {
        var h = (a.getAttribute('href') || '').replace(/^https?:\/\/[^/]+/, '');
        var partes = h.split('/').filter(Boolean);
        if (partes.length !== 2 || partes[0] !== top || vistos[h]) return;
        vistos[h] = 1;
        var c = el('a', location.pathname.indexOf(h) === 0 ? 'sp-on' : '', a.textContent.trim()); c.href = h; chips.appendChild(c);
      });
      if (chips.children.length > 1) cont.insertBefore(chips, cont.firstChild);
    }
  }

  function tarjetas(root) {
    [].forEach.call((root || document).querySelectorAll('.js-item-name:not([data-sp])'), function (n) {
      n.setAttribute('data-sp', '1');
      var p = partirNombre(n.textContent);
      if (!p) return;
      n.textContent = '';
      n.appendChild(el('span', 'sp-tipo', p[0]));
      n.appendChild(el('span', 'sp-modelo', p[1]));
    });
  }

  /* ---------- ficha de producto ---------- */
  function producto() {
    var cont = document.getElementById('single-product');
    if (!cont) return;
    document.body.classList.add('sp-prod');
    var h1 = cont.querySelector('h1.product-name');
    if (h1 && !h1.getAttribute('data-sp')) {
      h1.setAttribute('data-sp', '1');
      var p = partirNombre(h1.textContent);
      if (p) {
        h1.textContent = p[1];
        var k = el('p', 'sp-kicker', p[0] + ' · SP Connect');
        h1.parentNode.insertBefore(k, h1);
      }
    }
    video();
  }

  function crearVideo(src, controles) {
    var v = document.createElement('video');
    v.src = src; v.muted = true; v.loop = true; v.playsInline = true;
    v.setAttribute('muted', ''); v.setAttribute('playsinline', '');
    v.preload = 'metadata'; if (controles) v.controls = true;
    v.setAttribute('aria-label', 'Video del producto');
    return v;
  }

  function video() {
    var id = window.LS && LS.product && LS.product.id;
    if (!id || !VIDEOS[id] || document.querySelector('.sp-video-slide')) return true;
    var sl = document.querySelector('.js-product-slider');
    if (!sl || !sl.swiper) return false;
    var sw = sl.swiper, src = CDN + 'productos/videos/' + VIDEOS[id] + '.mp4';
    var idx = Math.min(VIDEO_POSICION - 1, sw.slides.length);
    var slide = el('div', 'js-product-slide swiper-slide slider-slide sp-video-slide');
    var caja = el('div', 'sp-video-box'); var v = crearVideo(src, true);
    caja.appendChild(v); slide.appendChild(caja);
    if (sw.addSlide) sw.addSlide(idx, slide); else sl.querySelector('.swiper-wrapper').insertBefore(slide, sl.querySelector('.swiper-wrapper').children[idx] || null);
    sw.update();

    var th = document.querySelector('.js-product-slider-thumbs');
    if (th) {
      var items = th.querySelectorAll('.swiper-slide');
      if (items.length) {
        var t = items[Math.min(idx, items.length - 1)].cloneNode(true);
        t.classList.add('sp-video-thumb');
        var a = t.querySelector('.js-product-thumb');
        if (a) {
          a.classList.remove('selected'); a.innerHTML = '';
          var cj = el('span', 'sp-video-box'); cj.appendChild(crearVideo(src, false));
          a.appendChild(cj); a.appendChild(el('span', 'sp-play'));
          th.querySelectorAll('.js-product-thumb[data-thumb-loop]').forEach(function (x) {
            var n = parseInt(x.getAttribute('data-thumb-loop'), 10); if (n >= idx) x.setAttribute('data-thumb-loop', n + 1);
          });
          a.setAttribute('data-thumb-loop', idx);
          a.addEventListener('click', function (e) { e.preventDefault(); sw.slideTo(idx); });
        }
        if (th.swiper && th.swiper.addSlide) { th.swiper.addSlide(idx, t); th.swiper.update(); }
        else items[0].parentNode.insertBefore(t, items[idx] || null);
      }
    }
    if ('IntersectionObserver' in window) {
      new IntersectionObserver(function (es) {
        es.forEach(function (e) {
          if (e.isIntersecting && e.intersectionRatio > 0.5 && !reducir) { var p = v.play(); if (p && p.catch) p.catch(function () {}); }
          else v.pause();
        });
      }, { threshold: [0, 0.5, 1] }).observe(caja);
    }
    return true;
  }

  /* ---------- arranque ---------- */
  var st = el('style'); st.id = 'sp-tienda-css'; st.textContent = CSS; (document.head || document.documentElement).appendChild(st);

  function iniciar() {
    try { categoria(); } catch (e) {}
    try { tarjetas(); } catch (e) {}
    try { producto(); } catch (e) {}
    var tabla = document.querySelector('.js-product-table');
    if (tabla && 'MutationObserver' in window) new MutationObserver(function () { tarjetas(tabla); }).observe(tabla, { childList: true, subtree: true });
    var n = 0;
    (function reintentar() { // el carrusel se arma después del DOM
      var listo = true; try { listo = video(); } catch (e) {}
      if (!listo && ++n < 40) setTimeout(reintentar, 250);
    })();
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', iniciar); else iniciar();
})();

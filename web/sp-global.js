/* SP Connect Argentina · código global del tema (menú, pie, categorías, fichas y video). */
function _toConsumableArray(a){return _arrayWithoutHoles(a)||_iterableToArray(a)||_unsupportedIterableToArray(a)||_nonIterableSpread()}function _nonIterableSpread(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");}
function _unsupportedIterableToArray(a,c){if(a){if("string"==typeof a)return _arrayLikeToArray(a,c);var d={}.toString.call(a).slice(8,-1);return"Object"===d&&a.constructor&&(d=a.constructor.name),"Map"===d||"Set"===d?Array.from(a):"Arguments"===d||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(d)?_arrayLikeToArray(a,c):void 0}}
function _iterableToArray(a){var c="undefined"!=typeof Symbol&&a[Symbol.iterator]||a["@@iterator"];if(Array.isArray(a)&&(null==c||c===("undefined"!=typeof Symbol&&[][Symbol.iterator])||c===[]["@@iterator"]))return a;if(null!=c){var d=[];for(c=c.call(a);!(a=c.next()).done;)d.push(a.value);return d}}function _arrayWithoutHoles(a){if(Array.isArray(a))return _arrayLikeToArray(a)}function _arrayLikeToArray(a,c){(null==c||c>a.length)&&(c=a.length);for(var d=0,m=Array(c);d<c;d++)m[d]=a[d];return m}
!function(){function a(){if(!document.getElementById("spx-sh")){var c='.spx-spc{--ink:#0e0f11;--ink2:#3b3f45;--mute:#7b818a;--line:#e3e6ea;--page:#eceff2;--soft:#f5f6f8;font-family:Montserrat,system-ui,sans-serif;color:var(--ink);text-align:left;-webkit-font-smoothing:antialiased}\n.spx-spc,.spx-spc *{box-sizing:border-box;margin:0;padding:0;letter-spacing:normal;text-transform:none}\n.spx-spc :is(h2,h4,h5,p,a,span,button,label,input,select,textarea,small,b,nav,div){font-family:Montserrat,system-ui,sans-serif!important}\n.spx-spc a{color:inherit;text-decoration:none}.spx-spc svg{max-width:none}\n.spx-spc button{min-height:0;box-shadow:none;border-radius:0}\n.spx-sitehdr{width:100%;height:auto;min-height:0;top:auto}\n.spx-bar{height:35px;background:#000;color:#fff;overflow:hidden;display:flex;align-items:center}\n.spx-track{display:flex;white-space:nowrap;animation:spxmv 60s linear infinite;font-size:12px;font-weight:600;letter-spacing:.12em;text-transform:uppercase}\n.spx-track span{padding:0 28px;display:inline-flex;align-items:center;gap:28px}\n.spx-track span::after{content:"";width:5px;height:5px;background:#fff;border-radius:50%;opacity:.6}\n@keyframes spxmv{to{transform:translateX(-50%)}}\n@media (prefers-reduced-motion:reduce){.spx-track{animation:none}}\n.spx-hdr{height:72px;display:grid;grid-template-columns:1fr auto 1fr;align-items:center;padding:0 40px;border-bottom:1px solid var(--line);background:#fff;position:relative;z-index:20}\n.spx-left{display:flex;align-items:center;gap:22px}\n.spx-burger{width:26px;height:18px;position:relative;background:none;border:0;cursor:pointer}\n.spx-burger i{position:absolute;left:0;right:0;height:1.6px;background:var(--ink);transition:transform .4s cubic-bezier(.16,1,.3,1),opacity .3s}\n.spx-burger i:nth-child(1){top:3px}\n.spx-burger i:nth-child(2){bottom:3px}\n.spx-open .spx-burger i:nth-child(1){transform:translateY(5.6px) rotate(45deg)}\n.spx-open .spx-burger i:nth-child(2){transform:translateY(-5.6px) rotate(-45deg)}\n.spx-lg{height:30px;width:auto;display:block;color:var(--ink)}\n.spx-ic{display:flex;gap:26px;align-items:center}\nsvg.spx-i{width:22px;height:22px;stroke:var(--ink);fill:none;stroke-width:1.6;display:block}\n.spx-right{justify-self:end}\n@media (max-width:600px){.spx-hdr{padding:0 16px}.spx-left{gap:14px}.spx-hdr .spx-lg{height:22px}.spx-ic{gap:18px}.spx-panel .spx-pin3{padding:24px 16px 32px 56px}}\n.spx-panel{position:absolute;left:0;right:0;top:107px;max-height:calc(100vh - 107px);overflow:auto;background:#fff;z-index:15;border-bottom:1px solid var(--line);\n  clip-path:inset(0 0 100% 0);transition:clip-path .7s cubic-bezier(.16,1,.3,1);box-shadow:0 30px 60px rgba(14,15,17,.08)}\n.spx-open .spx-panel{clip-path:inset(0 0 0 0)}\n.pin{display:grid;grid-template-columns:repeat(4,1fr) 1.1fr;gap:40px;padding:44px 40px 52px 88px}\n.col h4{font-size:24px;font-weight:700;margin-bottom:18px}\n.col h5{font-size:12px;font-weight:600;color:var(--mute);letter-spacing:.08em;text-transform:uppercase;margin:16px 0 6px}\n.col a{display:block;font-size:17px;line-height:1.75;color:var(--ink2)}\n.col a:hover{color:var(--ink)}\n.feat{background:var(--soft);padding:24px;display:flex;flex-direction:column;justify-content:flex-end;min-height:260px}\n.feat p{font-size:17px;line-height:1.4}\n.feat b{display:block;font-size:22px;margin-bottom:6px}\n.spx-veil{position:fixed;left:0;right:0;top:107px;bottom:0;background:rgba(14,15,17,.18);opacity:0;pointer-events:none;transition:opacity .5s;z-index:10}\n.spx-open .spx-veil{opacity:1}\n.spx-pin3{padding:28px 40px 36px 88px;max-height:calc(100vh - 140px);overflow:auto}\n.spx-acc{list-style:none}\n.spx-tap{position:relative;overflow:hidden;background:none;border:0;font:inherit;color:var(--ink);cursor:pointer;text-align:left;display:block;touch-action:manipulation;-webkit-tap-highlight-color:transparent;transition:color .35s,transform .25s cubic-bezier(.16,1,.3,1)}\n.spx-tap span{position:relative;z-index:1}\n.spx-tap:active{transform:scale(.97)}\n.spx-t1{font-size:clamp(22px,1.7vw,30px);font-weight:600;line-height:1.25;padding:3px 0;letter-spacing:-.005em}\n.spx-t2{font-size:clamp(16px,1.1vw,18px);font-weight:500;line-height:1.6;padding:1px 0;color:var(--ink2);display:block}\n.spx-t3{display:block;font-size:clamp(15px,.95vw,16px);line-height:1.8;color:var(--mute)}\n.spx-l2{padding:0 0 0 20px}\n.spx-l3{padding:0 0 0 18px}\n.spx-l2\x3eli:first-child{margin-top:4px}\n.spx-l2\x3eli:last-child{margin-bottom:10px}\n.spx-l3\x3eli:last-child{margin-bottom:6px}\n.spx-kids{display:grid;grid-template-rows:0fr;transition:grid-template-rows .55s cubic-bezier(.16,1,.3,1)}\n.spx-kids\x3eul{overflow:hidden;min-height:0}\nli.spx-on\x3e.spx-kids{grid-template-rows:1fr}\n.spx-l1.spx-has\x3eli:not(.spx-on)\x3e.spx-t1{color:#b9bec5}\n.spx-tap .spx-rip{position:absolute;border:1.5px solid var(--ink);border-radius:50%;width:12px;height:12px;transform:translate(-50%,-50%) scale(0);opacity:.6;animation:spxrp .7s cubic-bezier(.16,1,.3,1) forwards;pointer-events:none}\n@keyframes spxrp{to{transform:translate(-50%,-50%) scale(14);opacity:0}}\n.spx-modal{position:fixed;inset:0;background:rgba(14,15,17,.45);display:none;align-items:flex-start;justify-content:center;z-index:300;overflow:auto;padding:40px 16px}\n.spx-modal.spx-on{display:flex}\n.spx-form{background:#fff;max-width:760px;width:100%;padding:44px 48px}\n.spx-form h2{font-size:34px;font-weight:700;line-height:1.1}\n.spx-form .spx-sub{font-size:17px;color:var(--ink2);margin:10px 0 28px;line-height:1.45}\n.spx-g{display:grid;grid-template-columns:1fr 1fr;gap:16px 20px}\n.spx-f{display:flex;flex-direction:column;gap:6px}\n.spx-f.spx-w{grid-column:1/-1}\n.spx-f label{font-size:13px;font-weight:600}\n.spx-f input,.spx-f select,.spx-f textarea{font:inherit;font-size:16px;border:1px solid var(--line);padding:12px 14px;background:#fff;color:var(--ink)}\n.spx-f small{font-size:12px;color:var(--mute)}\n.spx-opts{display:flex;gap:10px;flex-wrap:wrap}\n.spx-opts label{font-weight:500;border:1px solid var(--line);padding:9px 14px;font-size:15px;display:flex;gap:8px;align-items:center}\n.spx-sec{grid-column:1/-1;font-size:12px;font-weight:600;letter-spacing:.08em;text-transform:uppercase;color:var(--mute);margin-top:12px;padding-top:16px;border-top:1px solid var(--line)}\n.spx-send{margin-top:28px;display:flex;gap:16px;align-items:center}\n.spx-send button{font:inherit;font-weight:600;font-size:16px;background:var(--ink);color:#fff;border:0;padding:15px 28px;border-radius:999px;cursor:pointer}\n.spx-send .spx-x{background:none;color:var(--ink);border:1px solid var(--ink)}\n.note{position:fixed;left:16px;bottom:16px;max-width:380px;background:#fff;border:1px solid var(--line);border-radius:12px;padding:14px 16px;font-size:13px;line-height:1.45;box-shadow:0 6px 24px rgba(0,0,0,.08);z-index:60}\n.note b{display:block;margin-bottom:4px}\n.note button{margin-top:8px;font:inherit;font-size:12px;border:1px solid var(--line);background:#fff;border-radius:999px;padding:4px 10px;cursor:pointer}\n.spx-sitehdr{position:relative;z-index:200;background:#fff}\n.spx-ft{display:flex;align-items:center;justify-content:space-between;gap:24px;padding:12px 40px;border-top:1px solid #edf0f3;background:#fff;font-size:12px;font-weight:400;color:#8a9099;line-height:1.4}\n.spx-ft nav{display:flex;flex-wrap:wrap;gap:6px 22px}\n.spx-ft a{color:#8a9099}\n.spx-ft a:hover{color:var(--ink)}\n.spx-ft .spx-lgb{font:inherit;color:#8a9099;background:none;border:0;cursor:pointer;padding:0}\n.spx-leg{position:relative;display:inline-block}\n.spx-lgl{position:absolute;bottom:calc(100% + 12px);left:50%;transform:translate(-50%,6px);background:#fff;border:1px solid var(--line);padding:10px 16px;min-width:220px;opacity:0;pointer-events:none;transition:opacity .3s,transform .4s cubic-bezier(.16,1,.3,1)}\n.spx-leg.spx-on .spx-lgl{opacity:1;pointer-events:auto;transform:translate(-50%,0)}\n.spx-lgl a{display:block;line-height:2}\n.spx-ft .spx-fc{white-space:nowrap}\n@media (max-width:1000px){.spx-ft .spx-fc{display:none}}\n@media (max-width:700px){.spx-ft{padding:10px 16px;font-size:11px}.spx-ft nav{gap:4px 14px}}\nbody:not(.template-home)\x3eheader.js-header.spx-off,body:not(.template-home)\x3e#ns-section-footer.spx-off{display:none!important}\nbody:not(.template-home) #spx-sh{position:sticky;top:0;z-index:300;background:#fff}\nbody:not(.template-home) .spx-ft{position:relative}\n.spx-spc a.spx-t2{color:var(--ink2)}.spx-spc a.spx-t3{color:var(--mute)}.spx-all{color:var(--mute)!important}\n',
d='\x3cheader class\x3d"spx-spc spx-sitehdr" id\x3d"spx-sh"\x3e\n\x3cdiv class\x3d"spx-bar"\x3e\x3cdiv class\x3d"spx-track" id\x3d"spx-tr"\x3e\x3cspan\x3eEnv\u00edos a todo el pa\u00eds\x3c/span\x3e\x3cspan\x3eFor the ones who ride.\x3c/span\x3e\x3cspan\x3eDistribuidor oficial SP Connect en Argentina\x3c/span\x3e\x3cspan\x3eEnv\u00edos a todo el pa\u00eds\x3c/span\x3e\x3cspan\x3eFor the ones who ride.\x3c/span\x3e\x3cspan\x3eDistribuidor oficial SP Connect en Argentina\x3c/span\x3e\x3c/div\x3e\x3c/div\x3e\n  \x3cdiv class\x3d"spx-hdr"\x3e\n    \x3cdiv class\x3d"spx-left"\x3e\x3cbutton class\x3d"spx-burger" id\x3d"spx-bg" aria-label\x3d"Abrir men\u00fa"\x3e\x3ci\x3e\x3c/i\x3e\x3ci\x3e\x3c/i\x3e\x3c/button\x3e\x3ca href\x3d"/" aria-label\x3d"SP Connect Argentina, inicio"\x3e\x3csvg xmlns\x3d"http://www.w3.org/2000/svg" width\x3d"99" height\x3d"33" class\x3d"spx-lg" viewBox\x3d"0 0 99 33" fill\x3d"none"\x3e\n  \x3cpath\n    d\x3d"M9.27434 9.32969V11.02C9.27813 11.9161 10.1504 12.6516 11.2288 12.6516H45.0986C46.177 12.6516 47.0506 13.3859 47.0531 14.2833V31.3684C47.0493 32.2645 46.177 33 45.0986 33H1.95449C0.877371 33 0.00379267 32.2658 0 31.3684V26.9336C0.00379267 26.0375 0.876107 25.302 1.95449 25.302H35.8255C36.9039 25.302 37.7762 24.5664 37.78 23.6703V21.98C37.7762 21.0839 36.9039 20.3484 35.8255 20.3484H1.95449C0.877371 20.3484 0.00379267 19.6141 0 18.7167V1.63164C0.00379267 0.735515 0.876107 0 1.95449 0H45.0999C46.1783 0 47.0518 0.73424 47.0544 1.63164V6.0664C47.0506 6.96253 46.1783 7.69805 45.0999 7.69805H11.2301C10.1517 7.69805 9.2794 8.43229 9.2756 9.32969H9.27434ZM87.7712 7.69805H53.9001C52.823 7.69805 51.9494 6.96381 51.9456 6.0664V1.63164C51.9494 0.735515 52.823 0 53.9001 0H97.0455C98.1239 0 98.9962 0.73424 99 1.63164V18.7167C98.9962 19.6129 98.1239 20.3484 97.0455 20.3484H63.1757C62.0973 20.3484 61.225 21.0839 61.2212 21.98V31.3684C61.2175 32.2645 60.3451 33 59.2668 33H53.9014C52.8243 33 51.9507 32.2658 51.9469 31.3684V14.2833C51.9507 13.3871 52.8243 12.6516 53.9014 12.6516H87.7724C88.8508 12.6516 89.7231 11.9161 89.7269 11.02V9.32969C89.7231 8.43356 88.8508 7.69805 87.7724 7.69805H87.7712ZM92.1011 27.4958C92.1011 27.2166 92.3211 26.9859 92.6056 26.9859H92.7118C92.9317 26.9859 93.0784 27.1006 93.1757 27.2574L94.9014 29.984L96.6359 27.2497C96.7421 27.0776 96.8888 26.9859 97.0923 26.9859H97.1985C97.4829 26.9859 97.7029 27.2166 97.7029 27.4958V32.3066C97.7029 32.5857 97.4829 32.8075 97.1985 32.8075C96.9292 32.8075 96.7016 32.5768 96.7016 32.3066V28.8584L95.3097 30.9681C95.2035 31.1325 95.0733 31.2307 94.8862 31.2307C94.6991 31.2307 94.5765 31.1325 94.4716 30.9681L93.0872 28.875V32.3155C93.0872 32.5946 92.8673 32.8088 92.5904 32.8088C92.3135 32.8088 92.1024 32.5959 92.1024 32.3155V27.4958H92.1011ZM88.6814 27.9547H87.2971C87.0367 27.9547 86.8331 27.7418 86.8331 27.4868C86.8331 27.2319 87.0367 27.019 87.2971 27.019H91.0834C91.3363 27.019 91.5398 27.2319 91.5398 27.4868C91.5398 27.7418 91.3363 27.9547 91.0834 27.9547H89.6915V32.3066C89.6915 32.5857 89.4627 32.8075 89.1858 32.8075C88.909 32.8075 88.6814 32.5857 88.6814 32.3066V27.9547Z"\n    fill\x3d"currentColor" /\x3e\n\x3c/svg\x3e\x3c/a\x3e\x3c/div\x3e\n    \x3cdiv class\x3d"spx-ic"\x3e\n      \x3ca href\x3d"/account/"\x3e\x3csvg class\x3d"spx-i" viewBox\x3d"0 0 24 24" aria-label\x3d"Mi cuenta"\x3e\x3ccircle cx\x3d"12" cy\x3d"8" r\x3d"4"/\x3e\x3cpath d\x3d"M4 21c1.5-4 4.5-6 8-6s6.5 2 8 6"/\x3e\x3c/svg\x3e\x3c/a\x3e\n      \x3ca href\x3d"/comprar/"\x3e\x3csvg class\x3d"spx-i" viewBox\x3d"0 0 24 24" aria-label\x3d"Carrito"\x3e\x3cpath d\x3d"M5 8h14l-1.2 12H6.2z"/\x3e\x3cpath d\x3d"M9 8V6a3 3 0 0 1 6 0v2"/\x3e\x3c/svg\x3e\x3c/a\x3e\n    \x3c/div\x3e\n    \x3cdiv class\x3d"spx-right"\x3e\x3ca href\x3d"/search/"\x3e\x3csvg class\x3d"spx-i" viewBox\x3d"0 0 24 24" aria-label\x3d"Buscar"\x3e\x3ccircle cx\x3d"10.5" cy\x3d"10.5" r\x3d"6.5"/\x3e\x3cpath d\x3d"M15.5 15.5 21 21"/\x3e\x3c/svg\x3e\x3c/a\x3e\x3c/div\x3e\n  \x3c/div\x3e\n  \x3cdiv class\x3d"spx-veil" id\x3d"spx-vl"\x3e\x3c/div\x3e\n  \x3cnav class\x3d"spx-panel" aria-label\x3d"Productos"\x3e\x3c/nav\x3e\n  \x3c/header\x3e',
m='\x3cfooter class\x3d"spx-spc spx-ft" data-sp-foot\x3e\x3cnav\x3e\x3ca href\x3d"#"\x3eSobre nosotros\x3c/a\x3e\x3ca href\x3d"#"\x3eLocales adheridos\x3c/a\x3e\x3ca href\x3d"#" id\x3d"spx-b2b"\x3eComercializ\u00e1 nuestros productos\x3c/a\x3e\x3ca href\x3d"#"\x3eContacto\x3c/a\x3e\x3cspan class\x3d"spx-leg"\x3e\x3cbutton class\x3d"spx-lgb" aria-expanded\x3d"false"\x3eLegales\x3c/button\x3e\x3cspan class\x3d"spx-lgl"\x3e\x3ca href\x3d"#"\x3eT\u00e9rminos y condiciones\x3c/a\x3e\x3ca href\x3d"#"\x3ePol\u00edtica de privacidad\x3c/a\x3e\x3ca href\x3d"#"\x3eCambios y devoluciones\x3c/a\x3e\x3ca href\x3d"#"\x3eBot\u00f3n de arrepentimiento\x3c/a\x3e\x3ca href\x3d"#"\x3eDefensa del consumidor\x3c/a\x3e\x3c/span\x3e\x3c/span\x3e\x3c/nav\x3e\x3cspan class\x3d"spx-fc"\x3e\u00a9 2026 SP Connect Argentina\x3c/span\x3e\x3c/footer\x3e\n\x3cdiv class\x3d"spx-spc spx-modal" id\x3d"spx-md" role\x3d"dialog" aria-label\x3d"Comercializ\u00e1 nuestros productos"\x3e\x3c/div\x3e';
if(!document.querySelector('link[href*\x3d"Montserrat"]')){var h=document.createElement("link");h.rel="stylesheet";h.href="https://fonts.googleapis.com/css2?family\x3dMontserrat:ital,wght@0,400;0,500;0,600;0,700;1,400\x26display\x3dswap";document.head.appendChild(h)}h=document.createElement("style");h.textContent=c;document.head.appendChild(h);c=document.querySelector("body\x3eheader.js-header");h=document.getElementById("ns-section-footer");var p=document.createElement("div");p.innerHTML=d;d=p.firstElementChild;
document.body.insertBefore(d,c||document.body.firstChild);d=document.createElement("div");d.innerHTML=m;for(m=h?h.nextSibling:null;d.firstChild;)document.body.insertBefore(d.firstChild,m);c&&c.classList.add("spx-off");h&&h.classList.add("spx-off");(function(){var q=function(b,e){return'\x3cbutton class\x3d"spx-tap spx-'+b+'" aria-expanded\x3d"false"\x3e\x3cspan\x3e'+e+"\x3c/span\x3e\x3c/button\x3e"};document.querySelector("#spx-sh .spx-panel").innerHTML='\x3cdiv class\x3d"spx-pin3"\x3e\x3cul class\x3d"spx-acc spx-l1"\x3e'+
[["Bici","bici",[["Fundas","fundas"],["Soportes","soportes",[["De manubrio","de-manubrio"],["De potencia","de-potencia"],["Ruta, gravel y MTB","ruta-gravel-y-mtb"],["Adhesivos y universales","adhesivos-y-universales"]]],["Bolsos","bolsos"]]],["Moto","moto",[["Fundas","fundas1"],["Soportes","soportes2",[["De manubrio","de-manubrio1"],["De espejo","de-espejo"],["De tija, freno y embrague","de-tija-freno-y-embrague"],["Universales y adhesivos","universales-y-adhesivos"]]],["Accesorios","accesorios",
[["Antivibraci\u00f3n","antivibracion"],["Carga inal\u00e1mbrica","carga-inalambrica"]]]]],["Auto","auto",[["Fundas","fundas2"],["Soportes","soportes3",[["De rejilla","de-rejilla"],["De sopapa","de-sopapa"],["Jaula antivuelco (4x4 y UTV)","jaula-antivuelco-4x4-y-utv"]]],["Escritorio","escritorio",[["Soporte de escritorio","soporte-de-escritorio"],["Base de carga","base-de-carga"]]]]],["Todos","todos",[["Fundas","fundas3"],["Soportes","soportes1"],["Carga inal\u00e1mbrica","carga-inalambrica1"],["Cables y adaptadores",
"cables-y-adaptadores"],["Protectores de pantalla","protectores-de-pantalla"],["Billeteras y anillos","billeteras-y-anillos"],["Tr\u00edpode, palo y kit creador","tripode-palo-y-kit-creador"],["Repuestos y cabezales","repuestos-y-cabezales"]]]].map(function(b){var e="/"+b[1]+"/";return"\x3cli\x3e"+q("t1",b[0])+'\x3cdiv class\x3d"spx-kids"\x3e\x3cul class\x3d"spx-acc spx-l2"\x3e\x3cli\x3e\x3ca class\x3d"spx-t2 spx-all" href\x3d"'+e+'"\x3eVer todo '+b[0]+"\x3c/a\x3e\x3c/li\x3e"+b[2].map(function(f){var g=
e+f[1]+"/";return f[2]?"\x3cli\x3e"+q("t2",f[0])+'\x3cdiv class\x3d"spx-kids"\x3e\x3cul class\x3d"spx-acc spx-l3"\x3e'+f[2].map(function(k){return'\x3cli\x3e\x3ca class\x3d"spx-t3" href\x3d"'+g+k[1]+'/"\x3e'+k[0]+"\x3c/a\x3e\x3c/li\x3e"}).join("")+"\x3c/ul\x3e\x3c/div\x3e\x3c/li\x3e":'\x3cli\x3e\x3ca class\x3d"spx-t2" href\x3d"'+g+'"\x3e'+f[0]+"\x3c/a\x3e\x3c/li\x3e"}).join("")+"\x3c/ul\x3e\x3c/div\x3e\x3c/li\x3e"}).join("")+"\x3c/ul\x3e\x3c/div\x3e";document.getElementById("spx-md").innerHTML='\x3cform class\x3d"spx-form" onsubmit\x3d"return false"\x3e\x3ch2\x3eComercializ\u00e1 SP Connect\x3c/h2\x3e\x3cp class\x3d"spx-sub"\x3ePara locales f\u00edsicos y tiendas online que quieren vender SP Connect a consumidores finales. Revisamos cada solicitud y te respondemos por correo.\x3c/p\x3e\x3cdiv class\x3d"spx-g"\x3e'+
[["sec","Empresa"],["i","CUIT",'placeholder\x3d"30-12345678-9" inputmode\x3d"numeric" pattern\x3d"\\d{2}-?\\d{8}-?\\d" required',"Verificamos el CUIT antes de responder."],["i","Raz\u00f3n social","required"],["s","Condici\u00f3n frente al IVA","Responsable inscripto|Monotributo|Exento"],["s","Rubro","Motos y accesorios|Bicicletas|Telefon\u00eda y tecnolog\u00eda|Accesorios para auto|Otro"],["r","\u00bfD\u00f3nde vend\u00e9s?","Local f\u00edsico|Tienda online|Las dos"],["s","Provincia","Buenos Aires|CABA|Catamarca|Chaco|Chubut|C\u00f3rdoba|Corrientes|Entre R\u00edos|Formosa|Jujuy|La Pampa|La Rioja|Mendoza|Misiones|Neuqu\u00e9n|R\u00edo Negro|Salta|San Juan|San Luis|Santa Cruz|Santa Fe|Santiago del Estero|Tierra del Fuego|Tucum\u00e1n"],
["i","Localidad"],["iw","Direcci\u00f3n del local",'placeholder\x3d"Si ten\u00e9s local f\u00edsico"'],["iw","Web, tienda online o Instagram",'placeholder\x3d"https://"'],["sec","Contacto"],["i","Nombre y apellido","required"],["i","Cargo"],["i","Correo de la empresa",'type\x3d"email" required'],["i","Tel\u00e9fono / WhatsApp",'type\x3d"tel"'],["sec","Tu negocio"],["s","Compra estimada por mes","Hasta 10 unidades|10 a 50 unidades|M\u00e1s de 50 unidades"],["s","\u00bfVend\u00e9s otras marcas de soportes?",
"No|S\u00ed"],["t","Contanos de tu negocio"]].map(function(b){var e=b[0],f=b[1],g=b[2]||"",k=f.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g,"").replace(/[^a-z0-9]+/g,"-").replace(/^-|-$/g,"");return"sec"==e?'\x3cdiv class\x3d"spx-sec"\x3e'+f+"\x3c/div\x3e":'\x3cdiv class\x3d"spx-f'+("iw"==e||"r"==e||"t"==e?" spx-w":"")+'"\x3e\x3clabel\x3e'+f+"\x3c/label\x3e"+("s"==e?'\x3cselect name\x3d"'+k+'"\x3e'+g.split("|").map(function(l){return"\x3coption\x3e"+l+"\x3c/option\x3e"}).join("")+"\x3c/select\x3e":
"r"==e?'\x3cdiv class\x3d"spx-opts"\x3e'+g.split("|").map(function(l){return'\x3clabel\x3e\x3cinput type\x3d"radio" name\x3d"'+k+'" value\x3d"'+l+'"\x3e '+l+"\x3c/label\x3e"}).join("")+"\x3c/div\x3e":"t"==e?'\x3ctextarea name\x3d"'+k+'" rows\x3d"3"\x3e\x3c/textarea\x3e':'\x3cinput name\x3d"'+k+'" '+g+"\x3e")+(b[3]?"\x3csmall\x3e"+b[3]+"\x3c/small\x3e":"")+"\x3c/div\x3e"}).join("")+'\x3c/div\x3e\x3cdiv class\x3d"spx-send"\x3e\x3cbutton\x3eEnviar solicitud\x3c/button\x3e\x3cbutton class\x3d"spx-x" type\x3d"button" id\x3d"spx-cx"\x3eCerrar\x3c/button\x3e\x3c/div\x3e\x3c/form\x3e';
var n=document.getElementById("spx-sh"),r=function(){var b=n.querySelector(".spx-hdr").getBoundingClientRect().bottom;n.querySelector(".spx-veil").style.top=b+"px";n.querySelector(".spx-panel").style.top=b-n.getBoundingClientRect().top+"px";n.classList.toggle("spx-open")};document.getElementById("spx-bg").onclick=r;document.getElementById("spx-vl").onclick=r;document.getElementById("spx-b2b").onclick=function(b){b.preventDefault();document.getElementById("spx-md").classList.add("spx-on")};document.querySelectorAll(".spx-tap").forEach(function(b){return b.addEventListener("pointerdown",
function(e){var f=b.getBoundingClientRect(),g=document.createElement("i");if(g.className="spx-rip",g.style.left=e.clientX-f.left+"px",g.style.top=e.clientY-f.top+"px",b.append(g),setTimeout(function(){return g.remove()},750),navigator.vibrate&&navigator.vibrate(8),!b.classList.contains("spx-lgb")){e=b.parentElement;f=e.parentElement;var k=!e.classList.contains("spx-on");_toConsumableArray(f.children).forEach(function(l){l.classList.remove("spx-on");l.querySelectorAll("li.spx-on").forEach(function(t){return t.classList.remove("spx-on")});
(l=l.querySelector(":scope\x3e.spx-tap"))&&l.setAttribute("aria-expanded","false")});k&&(e.classList.add("spx-on"),b.setAttribute("aria-expanded","true"));f.classList.contains("spx-l1")&&f.classList.toggle("spx-has",k)}})});document.querySelector(".spx-lgb").addEventListener("click",function(b){var e=b.currentTarget.parentElement;e.classList.toggle("spx-on");b.currentTarget.setAttribute("aria-expanded",e.classList.contains("spx-on"))});document.getElementById("spx-cx").onclick=function(){return document.getElementById("spx-md").classList.remove("spx-on")}})()}}
window.__spxChrome||(window.__spxChrome=1,"loading"===document.readyState?document.addEventListener("DOMContentLoaded",a):a())}();
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
    '.sp-banner,.sp-banner h1,.sp-banner p,.sp-chips a,.sp-prod h1.product-name,.sp-prod .sp-kicker,.sp-tipo,.sp-modelo{font-family:Montserrat,system-ui,sans-serif!important}',
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
    '.sp-cat .js-product-table{row-gap:56px!important}',
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

    /* descripción de producto */
    '.product-description-heading{font-family:Montserrat,system-ui,sans-serif!important;font-size:20px!important;font-weight:700!important;letter-spacing:-.01em;color:var(--sp-ink);margin:0 0 20px!important}',
    '.product-description-content{font-family:Montserrat,system-ui,sans-serif;font-size:16px;line-height:1.6;color:var(--sp-ink2)}',
    '.product-description-content p{margin:0}',
    '.product-description-content .fbox{display:grid;gap:12px;margin:0 0 40px}',
    '.product-description-content .nxlead{font-size:18px;line-height:1.5;font-weight:500;color:var(--sp-ink)}',
    '.product-description-content .nxcod{font-size:13px;color:var(--sp-mute)}',
    '.product-description-content .lb{margin-top:16px;font-size:14px;font-weight:600;color:var(--sp-ink)}',
    '.product-description-content .tags{display:flex;flex-wrap:wrap;gap:8px}',
    '.product-description-content .ptag{display:inline-block;padding:7px 14px;border-radius:999px;background:var(--sp-bg);font-size:14px;line-height:1.3;color:var(--sp-ink)}',
    '.product-description-content .sub{font-size:14px;color:var(--sp-mute)}',
    '.product-description-content .fbox2{margin:0 0 40px}',
    '.product-description-content .chips{display:block;margin-top:12px;border-top:1px solid var(--sp-line)}',
    '.product-description-content .chipg,.product-description-content .ri{display:flex;justify-content:space-between;align-items:baseline;gap:24px;padding:14px 0;border-bottom:1px solid var(--sp-line)}',
    '.product-description-content .cap,.product-description-content .k{font-size:14px;color:var(--sp-mute);flex:0 0 auto}',
    '.product-description-content .chip,.product-description-content .v{font-size:15px;font-weight:500;color:var(--sp-ink);text-align:right;border:0!important;background:none!important;padding:0!important;border-radius:0!important}',
    '.product-description-content .fresto{border-top:1px solid var(--sp-line)}',
    '.product-description-content details.nxac{border-bottom:1px solid var(--sp-line)}',
    '.product-description-content details.nxac>summary{list-style:none;cursor:pointer;display:flex;justify-content:space-between;align-items:center;padding:20px 0;font-size:16px;font-weight:600;color:var(--sp-ink)}',
    '.product-description-content details.nxac>summary::-webkit-details-marker{display:none}',
    '.product-description-content details.nxac>summary::after{content:"+";font-size:24px;font-weight:300;line-height:1;color:var(--sp-ink)}',
    '.product-description-content details.nxac[open]>summary::after{content:"\\2212"}',
    '.product-description-content .accb{display:grid;gap:10px;padding:0 0 24px;font-size:15px}',
    '.product-description-content .g2f{display:grid;gap:10px}',
    '.product-description-content .g2{display:block;border-top:1px solid var(--sp-line)}',
    '.product-description-content .ff{position:relative;padding-left:20px}',
    '.product-description-content .ff::before{content:"";position:absolute;left:0;top:.8em;width:8px;height:1px;background:var(--sp-ink)}',
    '.product-description-content strong{font-weight:600;color:var(--sp-ink)}',

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
  if (!document.querySelector('link[href*="Montserrat"]')) {
    var fl = el('link'); fl.rel = 'stylesheet';
    fl.href = 'https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700&display=swap';
    (document.head || document.documentElement).appendChild(fl);
  }
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

(function () {
  "use strict";
  var root = document.documentElement;
  var lang = "en";
  try { lang = localStorage.getItem("ls-lang") || (navigator.language || "").toLowerCase().indexOf("zh") === 0 && "zh" || "en"; } catch (e) {}
  var reduce = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  var NS = "http://www.w3.org/2000/svg";
  function $(s, el) { return (el || document).querySelector(s); }
  function $$(s, el) { return Array.prototype.slice.call((el || document).querySelectorAll(s)); }
  function T(o) { return o[lang]; }
  function esc(s) { return String(s).replace(/[&<>]/g, function (c) { return { "&": "&amp;", "<": "&lt;", ">": "&gt;" }[c]; }); }

  /* ================= language ================= */
  var renderers = [];
  function setLang(l) {
    lang = l;
    root.setAttribute("data-lang", l);
    root.setAttribute("lang", l === "zh" ? "zh-CN" : "en");
    $$("[data-set-lang]").forEach(function (b) { b.setAttribute("aria-pressed", String(b.dataset.setLang === l)); });
    try { localStorage.setItem("ls-lang", l); } catch (e) {}
    renderers.forEach(function (fn) { fn(); });
  }
  $$("[data-set-lang]").forEach(function (b) { b.addEventListener("click", function () { setLang(b.dataset.setLang); }); });

  /* ================= starfield ================= */
  (function stars() {
    var c = $("#stars"); if (!c) return;
    var ctx = c.getContext("2d"), pts = [], w, h, dpr = Math.min(window.devicePixelRatio || 1, 2);
    function size() {
      w = c.clientWidth; h = c.clientHeight; c.width = w * dpr; c.height = h * dpr; ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      pts = []; var n = Math.round(w * h / 5000);
      for (var i = 0; i < n; i++) pts.push({ x: Math.random() * w, y: Math.random() * h, r: Math.random() * 1.2 + .2, a: Math.random(), s: Math.random() * .02 + .003 });
    }
    function draw() {
      ctx.clearRect(0, 0, w, h);
      for (var i = 0; i < pts.length; i++) {
        var p = pts[i]; p.a += p.s; var al = .25 + .55 * Math.abs(Math.sin(p.a));
        ctx.fillStyle = "rgba(244,239,226," + al + ")"; ctx.beginPath(); ctx.arc(p.x, p.y, p.r, 0, 6.283); ctx.fill();
      }
      if (!reduce) requestAnimationFrame(draw);
    }
    size(); draw(); window.addEventListener("resize", size);
  })();

  /* ================= reveal + progress ================= */
  var io = "IntersectionObserver" in window ? new IntersectionObserver(function (es) {
    es.forEach(function (e) { if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); } });
  }, { threshold: .08 }) : null;
  $$(".reveal").forEach(function (el) { io ? io.observe(el) : el.classList.add("in"); });
  var bar = $("#progress");
  window.addEventListener("scroll", function () {
    var m = document.body.scrollHeight - innerHeight; bar.style.width = (m > 0 ? scrollY / m * 100 : 0) + "%";
    var cur = null;
    $$("section[id]").forEach(function (s) { if (s.getBoundingClientRect().top < innerHeight * .35) cur = s.id; });
    $$(".nav-links a").forEach(function (a) { a.classList.toggle("active", a.getAttribute("href") === "#" + cur); });
  }, { passive: true });

  /* ================= Bang playground ================= */
  (function bang() {
    var svg = $("#bangSvg"); if (!svg) return;
    function val(n) { var r = $('input[name="' + n + '"]:checked'); return r ? r.value : null; }
    function draw() {
      var s = { or: val("b-or"), ed: val("b-ed"), pl: val("b-pl"), gr: val("b-gr"), sc: val("b-sc") };
      var bg = s.gr === "light" ? "#ece7dc" : "#0b0c10";
      var fg = s.gr === "light" ? "#1a1712" : "#e9e3d4";
      var cy = s.pl === "hi" ? 85 : s.pl === "lo" ? 225 : 150;
      var k = s.sc === "l" ? 1.9 : 1;
      var wdt = 90 * k, hgt = 34 * k;
      if (s.or === "v") { var t = wdt; wdt = hgt; hgt = t; }
      var rot = s.or === "d" ? -35 : 0;
      var shape;
      if (s.ed === "r") {
        shape = '<rect x="' + (-wdt / 2) + '" y="' + (-hgt / 2) + '" width="' + wdt + '" height="' + hgt + '" rx="' + Math.min(wdt, hgt) / 2 + '" fill="#c0392b"/>';
      } else {
        var pts = s.or === "h" ? [[-wdt / 2, hgt / 2], [wdt / 2, hgt / 2], [0, -hgt / 2]] :
          [[-wdt / 2, hgt / 2], [wdt / 2, hgt / 2], [0, -hgt / 2]];
        if (s.or !== "h") pts = [[-wdt / 2, hgt / 2], [wdt / 2, hgt / 2], [0, -hgt / 2]];
        shape = '<polygon points="' + pts.map(function (p) { return p.join(","); }).join(" ") + '" fill="#c0392b"/>';
      }
      svg.innerHTML =
        '<rect width="400" height="300" fill="' + bg + '"/>' +
        '<line x1="0" y1="262" x2="400" y2="262" stroke="' + fg + '" stroke-opacity=".25"/>' +
        '<g transform="translate(200 ' + cy + ') rotate(' + rot + ')">' + shape + '</g>' +
        '<circle cx="46" cy="250" r="5" fill="' + fg + '" opacity=".7"/>';
      var b = D.bang;
      var txt = lang === "zh"
        ? "这个形状读起来" + b.or[s.or].zh + "，" + b.ed[s.ed].zh + "；位置让它" + b.pl[s.pl].zh + "；它" + b.gr[s.gr].zh + "，" + b.sc[s.sc].zh + "。"
        : "This shape reads as " + b.or[s.or].en + ", " + b.ed[s.ed].en + "; its placement makes it " + b.pl[s.pl].en + "; it sits " + b.gr[s.gr].en + ", " + b.sc[s.sc].en + ".";
      var ref = b.ref.filter(function (r) { return Object.keys(r.when).every(function (k) { return s[k] === r.when[k]; }); })[0];
      $("#bangRead").innerHTML = "<p>" + esc(txt) + "</p>" + (ref ? '<p class="bang-ref">◆ ' + esc(ref[lang]) + "</p>" : "");
    }
    $$(".bang-controls input").forEach(function (i) { i.addEventListener("change", draw); });
    renderers.push(draw);

    function principles() {
      $("#principles").innerHTML = D.principles.map(function (p, i) {
        var t = p[lang];
        return '<div class="pr"><span class="n">' + String(i + 1).padStart(2, "0") + "</span><h4>" + esc(t[0]) + "</h4><p>" + esc(t[1]) + '</p><p class="ex">' + (lang === "zh" ? "在《命运》中：" : "In Destiny: ") + esc(t[2]) + "</p></div>";
      }).join("");
    }
    renderers.push(principles);
  })();

  /* ================= organic ↔ geometric ================= */
  (function dual() {
    var svg = $("#dualSvg"), range = $("#dualRange"); if (!svg) return;
    var N = 120, cx = 200, cy = 210;
    var g = document.createElementNS(NS, "g"); svg.innerHTML =
      '<defs><radialGradient id="dg" cx="50%" cy="45%" r="60%"><stop offset="0" id="dg0" stop-color="#e8c77a" stop-opacity=".35"/><stop offset="1" stop-color="#050507" stop-opacity="0"/></radialGradient></defs>' +
      '<rect width="400" height="400" fill="#050507"/><rect width="400" height="400" fill="url(#dg)"/>' +
      '<g id="vines"></g><path id="dShape"/><path id="dEdge" fill="none"/><g id="shards"></g>';
    var vines = $("#vines", svg), shapeP = $("#dShape", svg), edge = $("#dEdge", svg), shards = $("#shards", svg), dg0 = $("#dg0", svg);
    // triangle (pyramid) point for angle
    var tri = [[200, 70], [330, 300], [70, 300]];
    function triPoint(t) { // t in [0,1) along perimeter
      var seg = Math.floor(t * 3), f = t * 3 - seg, a = tri[seg], b = tri[(seg + 1) % 3];
      return [a[0] + (b[0] - a[0]) * f, a[1] + (b[1] - a[1]) * f];
    }
    // vine strokes
    var vineData = [];
    for (var v = 0; v < 9; v++) {
      var a0 = Math.random() * 6.283, len = 60 + Math.random() * 70, d = "", x = cx + Math.cos(a0) * 90, y = cy + Math.sin(a0) * 90;
      d = "M" + x.toFixed(1) + " " + y.toFixed(1);
      for (var s = 0; s < 5; s++) { a0 += (Math.random() - .5) * 1.1; x += Math.cos(a0) * len / 5; y += Math.sin(a0) * len / 5; d += " L" + x.toFixed(1) + " " + y.toFixed(1); }
      vineData.push(d);
    }
    vines.innerHTML = vineData.map(function (d) { return '<path d="' + d + '" fill="none" stroke="#7fbf6a" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>'; }).join("");
    var time = 0, k = 0;
    function lerp(a, b, t) { return a + (b - a) * t; }
    function mix(c1, c2, t) {
      var a = parseInt(c1.slice(1), 16), b = parseInt(c2.slice(1), 16);
      var r = Math.round(lerp(a >> 16, b >> 16, t)), gg = Math.round(lerp(a >> 8 & 255, b >> 8 & 255, t)), bb = Math.round(lerp(a & 255, b & 255, t));
      return "#" + ((1 << 24) + (r << 16) + (gg << 8) + bb).toString(16).slice(1);
    }
    function frame() {
      k = range.value / 100; time += reduce ? 0 : .012;
      var d = "";
      for (var i = 0; i < N; i++) {
        var t = i / N, ang = -Math.PI / 2 + t * 6.283;
        var wob = 1 + (1 - k) * (.1 * Math.sin(3 * ang + time) + .06 * Math.sin(7 * ang - time * 1.4) + .03 * Math.sin(13 * ang + time * 2));
        var ox = cx + Math.cos(ang) * 105 * wob, oy = cy - 20 + Math.sin(ang) * 105 * wob;
        var tp = triPoint(t);
        var e = k * k * (3 - 2 * k);
        var x = lerp(ox, tp[0], e), y = lerp(oy, tp[1], e);
        d += (i ? " L" : "M") + x.toFixed(1) + " " + y.toFixed(1);
      }
      d += " Z";
      shapeP.setAttribute("d", d);
      shapeP.setAttribute("fill", mix("#e9e3d4", "#0d0c14", k));
      edge.setAttribute("d", d);
      edge.setAttribute("stroke", mix("#e8c77a", "#8f86ff", k));
      edge.setAttribute("stroke-width", lerp(1, 1.6, k));
      vines.setAttribute("opacity", Math.max(0, 1 - k * 1.6).toFixed(2));
      dg0.setAttribute("stop-color", mix("#e8c77a", "#3a2d6b", k));
      // shards: clean geometric fragments appear past middle
      var sh = "";
      if (k > .35) {
        var o = Math.min(1, (k - .35) / .4);
        sh += '<rect x="40" y="320" width="320" height="3" fill="#8f86ff" opacity="' + (o * .6) + '"/>';
        sh += '<polygon points="318,120 352,120 335,90" fill="none" stroke="#8f86ff" opacity="' + o + '"/>';
        sh += '<polygon points="56,150 84,150 70,126" fill="none" stroke="#8f86ff" opacity="' + o * .7 + '"/>';
      }
      if (k > .2 && k < .85) {
        var m = 1 - Math.abs(k - .52) / .33;
        sh += '<path d="M200 60 V340" stroke="#f4efe2" stroke-width="1" opacity="' + (m * .5) + '"/>';
      }
      shards.innerHTML = sh;
      if (!reduce) requestAnimationFrame(frame);
    }
    function side() {
      var v = +range.value, idx = v < 34 ? 0 : v < 70 ? 1 : 2;
      $$(".duality-text .side").forEach(function (s) { s.classList.toggle("on", +s.dataset.side === idx); });
      if (reduce) frame();
    }
    range.addEventListener("input", side);
    frame(); side();
  })();

  /* ================= context demo ================= */
  (function ctxDemo() {
    var svg = $("#ctxSvg"); if (!svg) return;
    var cur = "city";
    var sphere = '<g><circle cx="400" cy="CY" r="R" fill="url(#cs)"/><path d="M400 TOP L394 CY2 L404 BOT" stroke="#2a2822" stroke-width="1.6" fill="none"/></g>';
    function orb(cy, r) {
      return sphere.replace(/CY2/g, cy + r * .1).replace(/CY/g, cy).replace(/R/g, r).replace("TOP", cy - r).replace("BOT", cy + r);
    }
    var defs = '<defs><radialGradient id="cs" cx="38%" cy="32%" r="75%"><stop offset="0" stop-color="#fff"/><stop offset=".6" stop-color="#e3dccb"/><stop offset="1" stop-color="#8f8a7d"/></radialGradient>' +
      '<linearGradient id="dusk" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#1a2140"/><stop offset="1" stop-color="#c77a4a"/></linearGradient>' +
      '<linearGradient id="redsky" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#1a0605"/><stop offset="1" stop-color="#5a140e"/></linearGradient></defs>';
    function city() {
      var b = "";
      for (var i = 0; i < 40; i++) { var w = 10 + (i * 37 % 23), h = 20 + (i * 53 % 70), x = i * 20; b += '<rect x="' + x + '" y="' + (360 - h) + '" width="' + w + '" height="' + h + '" fill="#0d0f18"/>'; if (i % 3 === 0) b += '<rect x="' + (x + 3) + '" y="' + (366 - h + 8) + '" width="3" height="3" fill="#ffd28a"/>'; }
      return defs + '<rect width="800" height="360" fill="url(#dusk)"/>' + '<circle cx="400" cy="110" r="120" fill="#f4efe2" opacity=".08"/>' + orb(110, 70) + '<rect x="0" y="300" width="800" height="8" fill="#0d0f18"/>' + b;
    }
    function cage() {
      var c = "";
      for (var i = 0; i < 9; i++) { var a = -Math.PI / 2 + (i - 4) * .38; var x1 = 400 + Math.cos(a) * 160, y1 = 170 + Math.sin(a) * 160; c += '<path d="M' + x1.toFixed(0) + " " + y1.toFixed(0) + " L" + (400 + Math.cos(a) * 80).toFixed(0) + " " + (170 + Math.sin(a) * 80).toFixed(0) + ' L' + (400 + Math.cos(a + .12) * 62).toFixed(0) + " " + (170 + Math.sin(a + .12) * 62).toFixed(0) + '" stroke="#d9442b" stroke-width="6" fill="none" stroke-linejoin="miter"/>'; }
      for (var j = 0; j < 9; j++) { var b2 = Math.PI / 2 + (j - 4) * .38; c += '<path d="M' + (400 + Math.cos(b2) * 160).toFixed(0) + " " + (170 + Math.sin(b2) * 160).toFixed(0) + " L" + (400 + Math.cos(b2) * 80).toFixed(0) + " " + (170 + Math.sin(b2) * 80).toFixed(0) + '" stroke="#8e2a1c" stroke-width="6"/>'; }
      return defs + '<rect width="800" height="360" fill="url(#redsky)"/>' + orb(170, 70) + c + '<path d="M0 360 L120 300 L220 330 L330 290 L470 335 L600 295 L800 340 V360Z" fill="#0e0504"/>';
    }
    function voidS() {
      var p = '<polygon points="80,330 200,40 320,330" fill="#08070d" stroke="#8f86ff" stroke-opacity=".5"/>' +
        '<polygon points="500,350 660,20 820,350" fill="#08070d" stroke="#8f86ff" stroke-opacity=".5"/>' +
        '<polygon points="300,360 380,170 460,360" fill="#0c0b14" stroke="#8f86ff" stroke-opacity=".35"/>';
      return defs + '<rect width="800" height="360" fill="#030305"/>' + p + '<g opacity=".85">' + orb(285, 28) + '</g>';
    }
    function draw() {
      svg.innerHTML = cur === "city" ? city() : cur === "cage" ? cage() : voidS();
      var t = D.ctx[cur][lang];
      $("#ctxRead").innerHTML = "<h3>" + esc(t[0]) + "</h3><p>" + esc(t[1]) + "</p>";
      $$(".ctx-buttons button").forEach(function (b) { b.setAttribute("aria-selected", String(b.dataset.ctx === cur)); });
    }
    $$(".ctx-buttons button").forEach(function (b) { b.addEventListener("click", function () { cur = b.dataset.ctx; draw(); }); });
    renderers.push(draw);
  })();

  /* ================= lab drawing ================= */
  (function lab() {
    var svg = $("#labSvg"); if (!svg) return;
    var s = '<defs><linearGradient id="lw" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#f4f7f8"/><stop offset="1" stop-color="#c9d3d8"/></linearGradient>' +
      '<linearGradient id="ice" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#cfe9f7"/><stop offset="1" stop-color="#4f86a8"/></linearGradient></defs>' +
      '<rect width="480" height="320" fill="url(#lw)"/>' +
      // perspective corridor
      '<polygon points="0,0 480,0 330,110 150,110" fill="#e9eef0"/>' +
      '<polygon points="0,320 480,320 330,210 150,210" fill="#d4dde1"/>' +
      '<polygon points="0,0 150,110 150,210 0,320" fill="#eef2f3"/>' +
      '<polygon points="480,0 330,110 330,210 480,320" fill="#e2e9ec"/>' +
      '<rect x="150" y="110" width="180" height="100" fill="#f9fbfb"/>' +
      // window to Europa
      '<rect x="196" y="128" width="88" height="64" fill="url(#ice)"/>' +
      '<path d="M196 178 L222 160 L240 170 L262 150 L284 166 V192 H196Z" fill="#e8f4fa" opacity=".9"/>' +
      '<rect x="196" y="128" width="88" height="64" fill="none" stroke="#9fb1ba" stroke-width="2"/>' +
      // ceiling light strips
      '<path d="M60 22 L190 92 M420 22 L290 92 M240 0 V100" stroke="#ffffff" stroke-width="3" opacity=".95"/>' +
      // seams
      '<path d="M40 30 V290 M90 66 V254 M440 30 V290 M390 66 V254" stroke="#b9c5cb" stroke-width="1"/>' +
      // one small object: a stool / console
      '<rect x="224" y="226" width="32" height="18" fill="#b9c5cb"/><rect x="236" y="244" width="8" height="30" fill="#9fb1ba"/>' +
      '<circle cx="240" cy="235" r="2.5" fill="#4f7cff"/>';
    svg.innerHTML = s;
  })();

  /* ================= expansions ================= */
  (function expansions() {
    var rail = $("#xpRail"), card = $("#xpCard"); if (!rail) return;
    var cur = D.xp.findIndex(function (x) { return x.id === "finalshape"; });
    function emblem(x) {
      var p = x.pal, id = x.id, g = "";
      var bg = '<defs><linearGradient id="xg-' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + p[0] + '"/><stop offset="1" stop-color="' + p[1] + '"/></linearGradient></defs><rect width="400" height="225" fill="url(#xg-' + id + ')"/>';
      switch (id) {
        case "redwar": g = '<circle cx="200" cy="80" r="44" fill="' + p[3] + '" opacity=".9"/><path d="M150 40 L200 80 L250 40 M150 120 L200 80 L250 120" stroke="' + p[2] + '" stroke-width="7" fill="none"/><path d="M0 225 L60 170 L120 190 L180 160 L260 195 L330 165 L400 190 V225Z" fill="' + p[0] + '"/>'; break;
        case "osiris": g = ""; for (var i = 0; i < 7; i++) for (var j = 0; j < 4; j++) g += '<rect x="' + (40 + i * 48) + '" y="' + (60 + j * 36 + (i % 2) * 18) + '" width="30" height="8" fill="' + p[3] + '" opacity="' + (.2 + j * .2) + '"/>'; g += '<circle cx="200" cy="40" r="14" fill="none" stroke="' + p[2] + '" stroke-width="3"/>'; break;
        case "warmind": g = '<path d="M0 225 V150 L80 130 L160 150 L240 125 L320 145 L400 130 V225Z" fill="' + p[2] + '" opacity=".75"/><rect x="150" y="60" width="100" height="90" fill="' + p[1] + '"/><rect x="185" y="30" width="30" height="40" fill="' + p[1] + '"/><rect x="160" y="80" width="80" height="6" fill="' + p[3] + '"/>'; break;
        case "forsaken": g = '<path d="M0 225 V190 Q100 170 200 190 T400 185 V225Z" fill="' + p[0] + '"/>'; [[120, 80], [160, 40], [200, 15], [240, 50], [280, 90]].forEach(function (t) { g += '<polygon points="' + (t[0] - 12) + ',190 ' + t[0] + ',' + t[1] + ' ' + (t[0] + 12) + ',190" fill="' + p[2] + '" opacity=".85"/>'; }); g += '<circle cx="320" cy="50" r="18" fill="' + p[3] + '" opacity=".8"/>'; break;
        case "shadowkeep": g = '<circle cx="200" cy="245" r="150" fill="#d9d2c1" opacity=".12"/><path d="M150 225 V120 L170 100 V60 L185 40 L200 20 L215 40 L230 60 V100 L250 120 V225Z" fill="' + p[2] + '"/><polygon points="170,225 200,180 230,225" fill="#000"/>'; break;
        case "beyond": g = '<polygon points="60,225 120,90 180,225" fill="' + p[2] + '" opacity=".55"/><polygon points="150,225 230,40 310,225" fill="' + p[3] + '" opacity=".75"/><polygon points="260,225 320,110 380,225" fill="' + p[2] + '" opacity=".5"/><path d="M230 40 L230 225" stroke="' + p[1] + '" opacity=".6"/>'; break;
        case "thirty": g = '<text x="200" y="140" text-anchor="middle" font-family="Cormorant Garamond, serif" font-size="96" fill="' + p[2] + '">30</text><circle cx="200" cy="112" r="80" fill="none" stroke="' + p[3] + '" stroke-opacity=".4"/>'; break;
        case "witchqueen": g = '<path d="M0 225 V170 Q100 150 200 175 Q300 200 400 160 V225Z" fill="' + p[1] + '"/><path d="M200 30 C160 60 120 70 90 110 C140 105 170 120 200 150 C230 120 260 105 310 110 C280 70 240 60 200 30Z" fill="' + p[2] + '" opacity=".85"/><path d="M180 30 L190 10 L200 25 L210 10 L220 30" stroke="' + p[3] + '" stroke-width="2" fill="none"/>'; break;
        case "lightfall": g = ""; for (var k = 0; k < 8; k++) { var hh = 60 + (k * 37 % 90); g += '<rect x="' + (30 + k * 45) + '" y="' + (225 - hh) + '" width="26" height="' + hh + '" fill="' + p[0] + '" stroke="' + (k % 2 ? p[2] : p[3]) + '" stroke-width="1.5"/>'; } g += '<circle cx="320" cy="50" r="26" fill="none" stroke="' + p[3] + '" stroke-width="2"/><path d="M0 70 C120 40 260 100 400 60" stroke="' + p[2] + '" fill="none" opacity=".6"/>'; break;
        case "finalshape": g = '<path d="M0 225 C60 180 100 200 140 170 C170 150 160 120 190 110 L190 225Z" fill="#6c8a5a" opacity=".6"/><path d="M400 225 C340 190 300 205 260 175 C235 160 230 130 210 120 L210 225Z" fill="#6c8a5a" opacity=".45"/><rect x="190" y="18" width="20" height="207" fill="#000"/><circle cx="200" cy="60" r="38" fill="' + p[2] + '" opacity=".25"/><circle cx="200" cy="60" r="26" fill="' + p[2] + '" opacity=".9"/><rect x="190" y="18" width="20" height="207" fill="#000"/>'; break;
        case "episodes": g = '<polygon points="80,170 120,100 160,170" fill="none" stroke="' + p[2] + '" stroke-width="2"/><circle cx="200" cy="135" r="34" fill="none" stroke="' + p[3] + '" stroke-width="2"/><path d="M250 170 L290 100 L330 170 Z M270 135 H310" stroke="' + p[1] + '" stroke-width="2" fill="none"/>'; break;
        case "edgeoffate": g = '<circle cx="200" cy="112" r="56" fill="none" stroke="' + p[2] + '" stroke-width="2"/><ellipse cx="200" cy="112" rx="120" ry="26" fill="none" stroke="' + p[3] + '" stroke-opacity=".6"/><circle cx="200" cy="112" r="18" fill="' + p[3] + '"/>'; for (var q = 0; q < 9; q++) { var a = q / 9 * 6.283; g += '<circle cx="' + (200 + Math.cos(a) * 90).toFixed(0) + '" cy="' + (112 + Math.sin(a) * 90 * .4).toFixed(0) + '" r="2" fill="' + p[2] + '"/>'; } break;
        case "renegades": g = '<path d="M0 225 V185 H400 V225Z" fill="' + p[1] + '"/><circle cx="150" cy="70" r="22" fill="' + p[2] + '"/><circle cx="215" cy="85" r="14" fill="' + p[3] + '" opacity=".8"/><path d="M60 185 L120 150 H280 L340 185" fill="none" stroke="' + p[3] + '" stroke-width="2"/>'; break;
      }
      return '<svg viewBox="0 0 400 225" role="img" aria-label="Original abstract emblem">' + bg + g + "</svg>";
    }
    function draw() {
      rail.innerHTML = D.xp.map(function (x, i) {
        return '<button role="tab" aria-selected="' + (i === cur) + '" data-i="' + i + '" style="--c:' + x.pal[2] + '"><span class="y">' + x.year + "</span>" + esc(x[lang].name) + "</button>";
      }).join("");
      var x = D.xp[cur], t = x[lang];
      var L = lang === "zh" ? { w: "地点", th: "视觉命题", st: "故事", lk: "该看什么" } : { w: "Where", th: "Visual thesis", st: "Story", lk: "What to look at" };
      card.style.setProperty("--c", x.pal[2]);
      card.innerHTML = '<div class="xp-art">' + emblem(x) + '<div class="swatches">' + x.pal.map(function (c) { return '<i style="background:' + c + '" title="' + c + '"></i>'; }).join("") + "</div></div>" +
        '<div class="xp-body"><p class="tagline">' + x.year + " · " + esc(t.where) + "</p><h3>" + esc(t.name) + '</h3><p class="thesis"><span>' + L.th + "</span>" + esc(t.thesis) + "</p>" +
        "<h4>" + L.st + "</h4><p>" + esc(t.story) + "</p><h4>" + L.lk + "</h4><p>" + esc(t.look).replace("³", '<span class="cite"><a href="#src-3">[3]</a></span>').replace("⁴", '<span class="cite"><a href="#src-4">[4]</a></span>') + "</p>" +
        '<div class="xp-nav"><button data-step="-1" aria-label="Previous">←</button><span>' + (cur + 1) + " / " + D.xp.length + '</span><button data-step="1" aria-label="Next">→</button></div></div>';
    }
    rail.addEventListener("click", function (e) { var b = e.target.closest("button[data-i]"); if (b) { cur = +b.dataset.i; draw(); } });
    card.addEventListener("click", function (e) { var b = e.target.closest("button[data-step]"); if (b) step(+b.dataset.step); });
    function step(d) { cur = (cur + d + D.xp.length) % D.xp.length; draw(); var sel = rail.querySelector('[aria-selected="true"]'); if (sel && sel.scrollIntoView) sel.scrollIntoView({ block: "nearest", inline: "center", behavior: reduce ? "auto" : "smooth" }); }
    window.__xpStep = step;
    renderers.push(draw);
  })();

  /* ================= factions ================= */
  (function factions() {
    var tabs = $("#facTabs"), panels = $("#facPanels"); if (!tabs) return;
    var cur = 0;
    var glyph = {
      fallen: '<g fill="none" stroke="C" stroke-width="3"><path d="M100 40 L80 70 H120 Z"/><path d="M80 70 L50 100 M80 70 L60 120 M120 70 L150 100 M120 70 L140 120"/><path d="M70 75 C60 130 70 160 60 180 H140 C130 160 140 130 130 75" stroke-dasharray="6 4"/><circle cx="92" cy="58" r="3" fill="C"/><circle cx="108" cy="58" r="3" fill="C"/></g>',
      hive: '<g fill="none" stroke="C" stroke-width="3"><path d="M100 20 L110 70 L100 180 L90 70 Z"/><path d="M60 50 L75 110 L68 180 M140 50 L125 110 L132 180"/><path d="M40 90 L60 120 M160 90 L140 120"/><circle cx="100" cy="80" r="5" fill="C"/></g>',
      vex: '<g fill="none" stroke="C" stroke-width="3"><circle cx="100" cy="60" r="22"/><circle cx="100" cy="60" r="7" fill="C"/><path d="M78 82 H122 L132 130 H68 Z"/><path d="M80 130 L70 180 M120 130 L130 180"/><path d="M60 100 H140" stroke-dasharray="3 5"/></g>',
      cabal: '<g fill="none" stroke="C" stroke-width="3"><rect x="45" y="60" width="110" height="80" rx="18"/><rect x="72" y="30" width="56" height="36" rx="10"/><path d="M60 140 V180 M140 140 V180"/><path d="M45 90 H155"/></g>',
      taken: '<g><path d="M100 30 C130 60 150 90 130 130 C120 150 140 170 120 180 H80 C60 170 80 150 70 130 C50 90 70 60 100 30Z" fill="#000" stroke="C" stroke-width="3"/><circle cx="100" cy="80" r="6" fill="C"/></g>',
      scorn: '<g fill="none" stroke="C" stroke-width="3"><path d="M100 40 L84 72 H116 Z" transform="rotate(-12 100 60)"/><path d="M84 74 L56 96 L48 130 M116 74 L148 92 L140 140"/><path d="M76 80 C66 130 80 150 66 182 M124 80 C140 130 118 150 136 182" stroke-dasharray="2 6 10 4"/><circle cx="96" cy="58" r="3" fill="C"/></g>',
      dread: '<g><path d="M100 18 L140 182 H60 Z" fill="#000" stroke="C" stroke-width="2.5"/><path d="M100 70 L112 120 H88 Z" fill="C"/></g>'
    };
    function draw() {
      tabs.innerHTML = D.fac.map(function (f, i) { return '<button role="tab" aria-selected="' + (i === cur) + '" data-i="' + i + '" style="--c:' + f.c + '"><span class="dot"></span>' + esc(f[lang].name) + "</button>"; }).join("");
      var f = D.fac[cur], t = f[lang];
      var L = lang === "zh" ? ["形状", "感受", "故事"] : ["Shape", "Feeling", "Story"];
      panels.innerHTML = '<div class="panel active" role="tabpanel" style="--c:' + f.c + '"><div><div class="glyph"><svg viewBox="0 0 200 200" aria-hidden="true">' + glyph[f.id].replace(/"C"/g, '"' + f.c + '"') + '</svg></div><div class="swatches">' + f.sw.map(function (c) { return '<i style="background:' + c + '"></i>'; }).join("") + '</div></div><div><h3>' + esc(t.name) + '</h3><p class="tagline">' + esc(t.tag) + "</p><dl><dt>" + L[0] + "</dt><dd>" + esc(t.shape) + "</dd><dt>" + L[1] + "</dt><dd>" + esc(t.feel) + "</dd><dt>" + L[2] + "</dt><dd>" + esc(t.arc) + "</dd></dl></div></div>";
    }
    tabs.addEventListener("click", function (e) { var b = e.target.closest("button[data-i]"); if (b) { cur = +b.dataset.i; draw(); tabs.querySelector('[data-i="' + cur + '"]').focus(); } });
    tabs.addEventListener("keydown", function (e) {
      if (e.key === "ArrowDown" || e.key === "ArrowRight" || e.key === "ArrowUp" || e.key === "ArrowLeft") {
        e.preventDefault(); e.stopPropagation(); var d = (e.key === "ArrowDown" || e.key === "ArrowRight") ? 1 : -1;
        cur = (cur + d + D.fac.length) % D.fac.length; draw(); tabs.querySelector('[data-i="' + cur + '"]').focus();
      }
    });
    renderers.push(draw);
  })();

  /* ================= elements ================= */
  (function elements() {
    var grid = $("#elGrid"), det = $("#elDetail"); if (!grid) return;
    var cur = 0;
    var icon = {
      solar: '<circle cx="50" cy="50" r="20" fill="none" stroke="#fff" stroke-width="3"/><g stroke="#fff" stroke-width="3">' + [0, 45, 90, 135, 180, 225, 270, 315].map(function (a) { return '<line x1="50" y1="14" x2="50" y2="24" transform="rotate(' + a + ' 50 50)"/>'; }).join("") + "</g>",
      arc: '<path d="M56 10 L34 52 H52 L42 90 L70 44 H52 Z" fill="none" stroke="#fff" stroke-width="3" stroke-linejoin="round"/>',
      void: '<circle cx="50" cy="50" r="30" fill="none" stroke="#fff" stroke-width="3"/><circle cx="50" cy="50" r="14" fill="none" stroke="#fff" stroke-width="2" stroke-dasharray="4 4"/><circle cx="50" cy="50" r="4" fill="#fff"/>',
      stasis: '<path d="M50 10 L64 40 L50 90 L36 40 Z M36 40 H64" fill="none" stroke="#fff" stroke-width="3" stroke-linejoin="round"/>',
      strand: '<path d="M20 30 C40 60 60 20 80 50 M20 50 C40 80 60 40 80 70 M20 70 C40 100 60 60 80 90" fill="none" stroke="#fff" stroke-width="3"/>',
      prism: '<path d="M50 14 L84 80 H16 Z" fill="none" stroke="#fff" stroke-width="3"/><path d="M4 56 L40 56" stroke="#fff" stroke-width="2"/><path d="M62 52 L96 40 M64 56 L96 56 M62 60 L96 72" stroke="#fff" stroke-width="2" opacity=".8"/>'
    };
    function draw() {
      grid.innerHTML = D.el.map(function (e, i) { return '<button class="el' + (e.id === "prism" ? " prism" : "") + '" aria-pressed="' + (i === cur) + '" data-i="' + i + '" style="--c:' + e.c + '"><svg viewBox="0 0 100 100" aria-hidden="true">' + icon[e.id] + "</svg><span>" + esc(e[lang].name) + "</span></button>"; }).join("");
      var e = D.el[cur], t = e[lang];
      det.style.setProperty("--c", e.c);
      var sideTxt = { light: { en: "A power of the Light", zh: "光之力" }, dark: { en: "A power of the Darkness", zh: "暗之力" }, both: { en: "Light and Darkness together", zh: "光与暗合一" } }[e.side][lang];
      det.innerHTML = "<h3>" + esc(t.name) + '</h3><p class="verb">' + esc(sideTxt) + " · " + esc(t.verb) + "</p><p>" + esc(t.text) + "</p>";
    }
    grid.addEventListener("click", function (ev) { var b = ev.target.closest("button[data-i]"); if (b) { cur = +b.dataset.i; draw(); grid.querySelector('[data-i="' + cur + '"]').focus(); } });
    renderers.push(draw);
  })();

  /* ================= timeline ================= */
  (function timeline() {
    var el = $("#timeline"); if (!el) return;
    function draw() {
      var open = $$("details", el).map(function (d) { return d.open; });
      el.innerHTML = D.tl.map(function (e, i) {
        var t = e[lang];
        return '<div class="era" style="--c:' + e.c + '"><details' + (open[i] ? " open" : "") + '><summary><span class="when">' + esc(t.when) + '</span><span class="what">' + esc(t.what) + '</span><span class="plus" aria-hidden="true">+</span></summary><div class="content"><p>' + esc(t.text) + '</p><p class="art"><b>' + (lang === "zh" ? "美术上" : "In the art") + "</b>" + esc(t.art) + "</p></div></details></div>";
      }).join("");
    }
    renderers.push(draw);
  })();

  /* ================= glossary ================= */
  renderers.push(function () {
    $("#gloss").innerHTML = D.gloss.map(function (g) { var t = g[lang]; return "<div><b>" + esc(t[0]) + "</b><span>" + esc(t[1]) + "</span></div>"; }).join("");
  });

  /* ================= presenter mode ================= */
  (function present() {
    var btn = $("#presentBtn"), hint = $("#hint");
    var slides = $$("[data-slide]");
    function idx() { var y = innerHeight * .4, best = 0; slides.forEach(function (s, i) { if (s.getBoundingClientRect().top <= y) best = i; }); return best; }
    function go(i) { i = Math.max(0, Math.min(slides.length - 1, i)); slides[i].scrollIntoView({ behavior: reduce ? "auto" : "smooth", block: "start" }); }
    document.addEventListener("keydown", function (e) {
      var tag = (e.target.tagName || "").toLowerCase();
      if (tag === "input" || tag === "textarea") return;
      var inXp = e.target.closest && e.target.closest("#expansions");
      if (inXp && (e.key === "ArrowRight" || e.key === "ArrowLeft")) { e.preventDefault(); window.__xpStep(e.key === "ArrowRight" ? 1 : -1); return; }
      if (e.key === "PageDown" || (e.key === "ArrowRight" && !e.altKey)) { e.preventDefault(); go(idx() + 1); }
      else if (e.key === "PageUp" || (e.key === "ArrowLeft" && !e.altKey)) { e.preventDefault(); go(idx() - 1); }
      else if (e.key === "l" || e.key === "L") { setLang(lang === "en" ? "zh" : "en"); }
    });
    btn.addEventListener("click", function () {
      var d = document;
      if (!d.fullscreenElement && root.requestFullscreen) root.requestFullscreen().catch(function () {});
      else if (d.exitFullscreen) d.exitFullscreen().catch(function () {});
      hint.classList.add("show"); setTimeout(function () { hint.classList.remove("show"); }, 3500);
    });
  })();

  setLang(lang);
})();

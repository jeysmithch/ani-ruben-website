// ===== ARMENIAN ALPHABET DATA =====
const armenianAlphabet = [
  { letter: 'Ա', latin: 'A', name: 'Ayb', sound: 'ah', example: 'Arev — Sun' },
  { letter: 'Բ', latin: 'B', name: 'Ben', sound: 'b', example: 'Barev — Hello' },
  { letter: 'Գ', latin: 'G', name: 'Gim', sound: 'g', example: 'Girq — Book' },
  { letter: 'Դ', latin: 'D', name: 'Da', sound: 'd', example: 'Dprotsq — School' },
  { letter: 'Ե', latin: 'E', name: 'Yech', sound: 'ye/e', example: 'Yerazanq — Dream' },
  { letter: 'Զ', latin: 'Z', name: 'Za', sound: 'z', example: 'Zang — Bell' },
  { letter: 'Է', latin: 'E', name: 'E', sound: 'eh', example: 'Ejh — Page' },
  { letter: 'Ը', latin: 'Y', name: 'Ut', sound: 'uh', example: 'Unker — Friend' },
  { letter: 'Թ', latin: 'T\'', name: 'T\'o', sound: 'th', example: 'T\'itr — Butterfly' },
  { letter: 'Ժ', latin: 'Zh', name: 'Zhe', sound: 'zh', example: 'Zhamanak — Time' },
  { letter: 'Ի', latin: 'I', name: 'Ini', sound: 'ee', example: 'Inchpes — How' },
  { letter: 'Լ', latin: 'L', name: 'Liwn', sound: 'l', example: 'Loys — Light' },
  { letter: 'Խ', latin: 'Kh', name: 'Khe', sound: 'kh', example: 'Khnjor — Apple' },
  { letter: 'Ծ', latin: 'Ts', name: 'Tsa', sound: 'ts', example: 'Tsaghik — Flower' },
  { letter: 'Կ', latin: 'K', name: 'Ken', sound: 'k', example: 'Katu — Cat' },
  { letter: 'Հ', latin: 'H', name: 'Ho', sound: 'h', example: 'Hayeren — Armenian' },
  { letter: 'Ձ', latin: 'Dz', name: 'Dza', sound: 'dz', example: 'Dzuk — Fish' },
  { letter: 'Ղ', latin: 'Gh', name: 'Ghat', sound: 'gh', example: 'Ghekavar — Leader' },
  { letter: 'Ճ', latin: 'Tch', name: 'Tche', sound: 'tch', example: 'Chanapar — Path' },
  { letter: 'Մ', latin: 'M', name: 'Men', sound: 'm', example: 'Mayr — Mother' },
  { letter: 'Յ', latin: 'Y', name: 'Yi', sound: 'y', example: 'Yot — Seven' },
  { letter: 'Ն', latin: 'N', name: 'Now', sound: 'n', example: 'Nkar — Picture' },
  { letter: 'Շ', latin: 'Sh', name: 'Sha', sound: 'sh', example: 'Shun — Dog' },
  { letter: 'Ո', latin: 'Vo', name: 'Vo', sound: 'vo/o', example: 'Vordi — Son' },
  { letter: 'Չ', latin: 'Ch', name: 'Cha', sound: 'ch', example: 'Chors — Four' },
  { letter: 'Պ', latin: 'P', name: 'Pe', sound: 'p', example: 'Papa — Grandpa' },
  { letter: 'Ջ', latin: 'J', name: 'Jhe', sound: 'j', example: 'Jur — Water' },
  { letter: 'Ռ', latin: 'Rr', name: 'Rra', sound: 'rr', example: 'Radio — Radio' },
  { letter: 'Ս', latin: 'S', name: 'Se', sound: 's', example: 'Ser — Love' },
  { letter: 'Վ', latin: 'V', name: 'Vev', sound: 'v', example: 'Vard — Rose' },
  { letter: 'Տ', latin: 'T', name: 'Tiwn', sound: 't', example: 'Tun — House' },
  { letter: 'Ր', latin: 'R', name: 'Re', sound: 'r', example: 'Rope — Minute' },
  { letter: 'Ց', latin: 'Ts', name: 'Tso', sound: 'ts', example: 'Tsov — Sea' },
  { letter: 'Ւ', latin: 'W', name: 'Hiwn', sound: 'v/w', example: 'Part of OU sound' },
  { letter: 'Փ', latin: 'P\'', name: 'P\'iwr', sound: 'ph', example: 'P\'oqrik — Little' },
  { letter: 'Ք', latin: 'K\'', name: 'K\'e', sound: 'kh', example: 'K\'aghaq — City' },
  { letter: 'Օ', latin: 'O', name: 'O', sound: 'o', example: 'Or — Day' },
  { letter: 'Ֆ', latin: 'F', name: 'Fe', sound: 'f', example: 'Futbol — Football' },
  { letter: 'ՈՒ', latin: 'U', name: 'U', sound: 'oo', example: 'Usanel — Learn' },
];

// ===== INIT ON DOM READY =====
document.addEventListener('DOMContentLoaded', function () {

  // ----- THEME TOGGLE -----
  var themeToggle = document.getElementById('themeToggle');
  if (themeToggle) {
    var themeIcon = themeToggle.querySelector('.theme-toggle__icon');
    function syncThemeUI() {
      var isDark = document.documentElement.getAttribute('data-theme') === 'dark';
      if (themeIcon) themeIcon.textContent = isDark ? '🌙' : '☀️';
      themeToggle.setAttribute('aria-label', isDark ? 'Switch to light mode' : 'Switch to dark mode');
    }
    themeToggle.addEventListener('click', function () {
      var isDark = document.documentElement.getAttribute('data-theme') === 'dark';
      if (isDark) {
        document.documentElement.removeAttribute('data-theme');
        localStorage.setItem('theme', 'light');
      } else {
        document.documentElement.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme', 'dark');
      }
      syncThemeUI();
    });
    syncThemeUI();
  }

  // ----- NAVBAR SCROLL -----
  var navbar = document.getElementById('navbar');
  window.addEventListener('scroll', function () {
    if (window.scrollY > 50) navbar.classList.add('scrolled');
    else navbar.classList.remove('scrolled');
  });

  // ----- MOBILE MENU -----
  var hamburger = document.getElementById('hamburger');
  var mobileMenu = document.getElementById('mobileMenu');
  if (hamburger && mobileMenu) {
    hamburger.addEventListener('click', function () {
      var isOpen = mobileMenu.classList.toggle('active');
      document.body.style.overflow = isOpen ? 'hidden' : '';
      hamburger.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    });
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && mobileMenu.classList.contains('active')) {
        closeMobile();
      }
    });
  }

  // ----- BUILD ALPHABET GRID -----
  var grid = document.getElementById('alphabetGrid');
  var detail = document.getElementById('letterDetail');
  var letterPlaceholder = document.getElementById('letterPlaceholder');
  var letterDetailBody = document.getElementById('letterDetailBody');
  var bigLetter = document.getElementById('bigLetter');
  var pronEl = document.getElementById('letterPronunciation');
  var exEl = document.getElementById('letterExample');

  if (grid) {
    armenianAlphabet.forEach(function (item, i) {
      var card = document.createElement('div');
      card.className = 'letter-card';
      card.setAttribute('role', 'listitem');
      card.setAttribute('tabindex', '0');
      card.setAttribute('aria-label', item.name + ' \u2014 ' + item.letter);
      var isMulti = item.letter.length > 1;
      card.innerHTML = '<span class="armenian' + (isMulti ? ' multi' : '') + '">' + item.letter + '</span><span class="latin">' + item.latin + '</span>';

      function activateLetter() {
        document.querySelectorAll('.letter-card').forEach(function (c) {
          c.classList.remove('active');
          c.setAttribute('aria-pressed', 'false');
        });
        card.classList.add('active');
        card.setAttribute('aria-pressed', 'true');
        if (detail) {
          detail.classList.remove('letter-detail--empty');
          detail.classList.add('active');
        }
        if (letterPlaceholder) letterPlaceholder.hidden = true;
        if (letterDetailBody) letterDetailBody.hidden = false;
        bigLetter.textContent = item.letter;
        pronEl.textContent = '"' + item.name + '" \u2014 pronounced "' + item.sound + '"';
        exEl.textContent = item.example;
        detail.style.animation = 'none';
        detail.offsetHeight;
        detail.style.animation = 'fadeUp 0.4s ease';
      }

      card.addEventListener('click', activateLetter);
      card.addEventListener('keydown', function (e) {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          activateLetter();
        }
      });
      grid.appendChild(card);
    });
  }

  // ----- ANIMATED COUNTERS -----
  var countersAnimated = false;
  function animateCounters() {
    if (countersAnimated) return;
    countersAnimated = true;
    document.querySelectorAll('.counter').forEach(function (counter) {
      var target = parseInt(counter.getAttribute('data-target'), 10);
      var suffix = counter.getAttribute('data-suffix') || '';
      var duration = 2000;
      var startTime = null;
      function step(ts) {
        if (!startTime) startTime = ts;
        var progress = Math.min((ts - startTime) / duration, 1);
        var eased = 1 - Math.pow(1 - progress, 3);
        counter.textContent = Math.round(target * eased) + suffix;
        if (progress < 1) requestAnimationFrame(step);
      }
      requestAnimationFrame(step);
    });
  }

  // ----- TESTIMONIAL SLIDER -----
  var track = document.getElementById('testimonialTrack');
  var dotsContainer = document.getElementById('sliderDots');
  var currentSlide = 0;
  var slideTimer = null;

  if (track && dotsContainer) {
    var totalSlides = track.children.length;
    for (var i = 0; i < totalSlides; i++) {
      (function (index) {
        var dot = document.createElement('button');
        dot.className = 'slider-dot' + (index === 0 ? ' active' : '');
        dot.setAttribute('aria-label', 'Go to testimonial ' + (index + 1));
        dot.addEventListener('click', function () { goTo(index); });
        dotsContainer.appendChild(dot);
      })(i);
    }
    function goTo(idx) {
      currentSlide = idx;
      track.style.transform = 'translateX(-' + (idx * 100) + '%)';
      dotsContainer.querySelectorAll('.slider-dot').forEach(function (d, j) {
        d.classList.toggle('active', j === idx);
        d.setAttribute('aria-selected', j === idx ? 'true' : 'false');
      });
      clearInterval(slideTimer);
      slideTimer = setInterval(function () { goTo((currentSlide + 1) % totalSlides); }, 5000);
    }
    slideTimer = setInterval(function () { goTo((currentSlide + 1) % totalSlides); }, 5000);

    // Touch / swipe support
    var touchStartX = 0;
    track.addEventListener('touchstart', function (e) {
      touchStartX = e.changedTouches[0].screenX;
    }, { passive: true });
    track.addEventListener('touchend', function (e) {
      var diff = touchStartX - e.changedTouches[0].screenX;
      if (Math.abs(diff) > 50) {
        goTo(diff > 0
          ? (currentSlide + 1) % totalSlides
          : (currentSlide - 1 + totalSlides) % totalSlides);
      }
    }, { passive: true });
  }

  // ----- CREDENTIALS CAROUSEL -----
  var credTrack = document.getElementById('credentialsTrack');
  var credDotsContainer = document.getElementById('credentialsDots');
  var credCurrentSlide = 0;
  var credSlideTimer = null;

  if (credTrack && credDotsContainer) {
    var credTotalSlides = credTrack.children.length;
    var credReducedMotion = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    for (var c = 0; c < credTotalSlides; c++) {
      (function (index) {
        var dot = document.createElement('button');
        dot.className = 'slider-dot' + (index === 0 ? ' active' : '');
        dot.setAttribute('aria-label', 'Go to credential ' + (index + 1));
        dot.addEventListener('click', function () { credGoTo(index); });
        credDotsContainer.appendChild(dot);
      })(c);
    }

    function credGoTo(idx) {
      credCurrentSlide = idx;
      credTrack.style.transform = 'translateX(-' + (idx * 100) + '%)';
      credDotsContainer.querySelectorAll('.slider-dot').forEach(function (d, j) {
        d.classList.toggle('active', j === idx);
        d.setAttribute('aria-selected', j === idx ? 'true' : 'false');
      });
      clearInterval(credSlideTimer);
      if (!credReducedMotion) {
        credSlideTimer = setInterval(function () {
          credGoTo((credCurrentSlide + 1) % credTotalSlides);
        }, 5000);
      }
    }

    if (!credReducedMotion) {
      credSlideTimer = setInterval(function () {
        credGoTo((credCurrentSlide + 1) % credTotalSlides);
      }, 5000);
    }

    var credTouchStartX = 0;
    credTrack.addEventListener('touchstart', function (e) {
      credTouchStartX = e.changedTouches[0].screenX;
    }, { passive: true });
    credTrack.addEventListener('touchend', function (e) {
      var credDiff = credTouchStartX - e.changedTouches[0].screenX;
      if (Math.abs(credDiff) > 50) {
        credGoTo(credDiff > 0
          ? (credCurrentSlide + 1) % credTotalSlides
          : (credCurrentSlide - 1 + credTotalSlides) % credTotalSlides);
      }
    }, { passive: true });
  }

  // ----- SCROLL REVEAL (Intersection Observer) -----
  var fadeEls = document.querySelectorAll('.fade-in');
  if ('IntersectionObserver' in window) {
    var obs = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          obs.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });
    fadeEls.forEach(function (el) { obs.observe(el); });
  } else {
    // Fallback: just show everything
    fadeEls.forEach(function (el) { el.classList.add('visible'); });
  }

  // Counter observer — skip animation when user prefers reduced motion
  var heroStats = document.querySelector('.hero-stats');
  var prefersReducedMotion = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (prefersReducedMotion) {
    document.querySelectorAll('.counter').forEach(function (c) {
      c.textContent = c.getAttribute('data-target');
    });
  } else if (heroStats && 'IntersectionObserver' in window) {
    var cobs = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          animateCounters();
          cobs.unobserve(entry.target);
        }
      });
    }, { threshold: 0.3 });
    cobs.observe(heroStats);
  } else {
    animateCounters();
  }

  // ----- ACTIVE NAV LINK -----
  var sections = document.querySelectorAll('section[id]');
  window.addEventListener('scroll', function () {
    var scrollY = window.scrollY + 120;
    sections.forEach(function (section) {
      var top = section.offsetTop;
      var height = section.offsetHeight;
      var id = section.getAttribute('id');
      var link = document.querySelector('.nav-links a[href="#' + id + '"]');
      if (link) {
        if (scrollY >= top && scrollY < top + height) link.classList.add('active');
        else link.classList.remove('active');
      }
    });
  });

});

// ----- GLOBAL FUNCTIONS -----
var FORM_ENDPOINT = 'https://formspree.io/f/xdajzryj';
var RECAPTCHA_SITE_KEY = '6LezL_gsAAAAAJd-Uca7Mu9m6iHuHl7Hy9E9JAV8';

function handleSubmit(e) {
  e.preventDefault();
  var form = e.target;
  var btn = form.querySelector('button[type="submit"]');
  var errorEl = document.getElementById('formError');
  var successEl = document.getElementById('formSuccess');
  var orig = btn.innerHTML;

  var parentName = (form.querySelector('[name="parent_name"]').value || '').trim();
  var email = (form.querySelector('[name="email"]').value || '').trim();
  var childAge = form.querySelector('[name="child_age"]').value;

  if (!parentName || !email || !childAge) {
    errorEl.textContent = 'Please fill in your name, email, and child\'s age.';
    return;
  }
  errorEl.textContent = '';
  btn.innerHTML = 'Sending…';
  btn.disabled = true;

  grecaptcha.ready(function () {
    grecaptcha.execute(RECAPTCHA_SITE_KEY, { action: 'contact_form' }).then(function (token) {
      document.getElementById('recaptchaToken').value = token;
      fetch(FORM_ENDPOINT, {
        method: 'POST',
        body: new FormData(form),
        headers: { 'Accept': 'application/json' }
      })
      .then(function (r) {
        return r.json().then(function (data) {
          if (!r.ok) {
            var msg = (data && data.error) ? data.error : JSON.stringify(data);
            throw new Error(msg);
          }
          form.style.display = 'none';
          successEl.removeAttribute('hidden');
        });
      })
      .catch(function (err) {
        console.error('Formspree error:', err.message);
        btn.innerHTML = orig;
        btn.disabled = false;
        errorEl.textContent = err.message || 'Something went wrong. Please email us at hello@aniruben.org.';
      });
    });
  });
}

function closeMobile() {
  var m = document.getElementById('mobileMenu');
  var h = document.getElementById('hamburger');
  if (m) { m.classList.remove('active'); document.body.style.overflow = ''; }
  if (h) { h.setAttribute('aria-expanded', 'false'); }
}

/* Typewriter Effect */
document.addEventListener('DOMContentLoaded', function () {
  var typewriterEl = document.querySelector('.armenian-text[data-typewriter-text]');
  if (!typewriterEl) return;

  var textSpan = typewriterEl.querySelector('.typewriter-text');
  var cursor = typewriterEl.querySelector('.typewriter-cursor');
  if (!textSpan || !cursor) return;

  var fullText = typewriterEl.getAttribute('data-typewriter-text');
  var chars = [...fullText];
  var index = 0;
  var isTyping = true;

  typewriterEl.setAttribute('aria-label', fullText);

  if (window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    textSpan.textContent = fullText;
    cursor.hidden = true;
    return;
  }

  function setCursorBlink(blink) {
    cursor.classList.toggle('typewriter-cursor--blink', blink);
  }

  function tick() {
    if (isTyping) {
      setCursorBlink(false);
      if (index < chars.length) {
        textSpan.textContent += chars[index];
        index += 1;
        setTimeout(tick, 80);
      } else {
        setCursorBlink(true);
        setTimeout(function () {
          isTyping = false;
          tick();
        }, 2000);
      }
    } else {
      setCursorBlink(false);
      if (index > 0) {
        index -= 1;
        textSpan.textContent = chars.slice(0, index).join('');
        setTimeout(tick, 40);
      } else {
        setCursorBlink(true);
        setTimeout(function () {
          isTyping = true;
          tick();
        }, 800);
      }
    }
  }

  tick();
});

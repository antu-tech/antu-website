(function() {
  'use strict';

  function initHamburger() {
    var navEl = document.querySelector('.nav');
    var hamburger = document.querySelector('.nav__hamburger');
    var navLinks = document.getElementById('nav-links');

    if (!hamburger || !navEl) {
      return;
    }

    hamburger.addEventListener('click', function() {
      var open = navEl.classList.toggle('nav--open');
      hamburger.setAttribute('aria-expanded', open);
    });

    if (navLinks) {
      navLinks.querySelectorAll('.nav__link').forEach(function(link) {
        link.addEventListener('click', function() {
          navEl.classList.remove('nav--open');
          hamburger.setAttribute('aria-expanded', 'false');
        });
      });
    }
  }

  function initFabDial() {
    var dial = document.getElementById('fab-dial');
    var trigger = document.getElementById('fab-trigger');

    if (!dial || !trigger) {
      return;
    }

    trigger.addEventListener('click', function(event) {
      event.stopPropagation();
      var open = dial.classList.toggle('fab-dial--open');
      trigger.setAttribute('aria-expanded', open);
    });

    document.addEventListener('click', function(event) {
      if (!dial.contains(event.target)) {
        dial.classList.remove('fab-dial--open');
        trigger.setAttribute('aria-expanded', 'false');
      }
    });
  }

  function initModal() {
    var modal = document.getElementById('reg-modal');
    if (!modal) {
      return;
    }

    var modalClose = document.getElementById('modal-close');
    var backdrop = document.getElementById('modal-backdrop');
    var fabCta = document.getElementById('fab-cta');
    var openModalButtons = document.querySelectorAll('.js-open-reg-modal');
    var dial = document.getElementById('fab-dial');
    var trigger = document.getElementById('fab-trigger');

    function openModal() {
      if (dial) {
        dial.classList.remove('fab-dial--open');
      }
      modal.classList.add('is-open');
      document.body.style.overflow = 'hidden';
      if (modalClose) {
        modalClose.focus();
      }
    }

    function closeModal() {
      modal.classList.remove('is-open');
      document.body.style.overflow = '';
      if (trigger) {
        trigger.focus();
      }
    }

    if (fabCta) {
      fabCta.addEventListener('click', function() {
        openModal();
      });
    }


    if (openModalButtons.length) {
      openModalButtons.forEach(function(button) {
        button.addEventListener('click', function(event) {
          event.preventDefault();
          openModal();
        });
      });
    }

    if (modalClose) {
      modalClose.addEventListener('click', closeModal);
    }

    if (backdrop) {
      backdrop.addEventListener('click', closeModal);
    }

    modal.addEventListener('click', function(event) {
      if (event.target.classList.contains('js-close-modal')) {
        closeModal();
      }
    });

    document.addEventListener('keydown', function(event) {
      if (event.key === 'Escape' && modal.classList.contains('is-open')) {
        closeModal();
      }
    });
  }

  function initModalForm() {
    var form = document.getElementById('reg-form');
    if (!form) return;

    var successEl = document.getElementById('reg-success');
    var submitBtn = form.querySelector('button[type="submit"]');
    var originalText = submitBtn ? submitBtn.textContent : '送出登記';

    form.addEventListener('submit', function(e) {
      e.preventDefault();
      if (!form.checkValidity()) {
        form.reportValidity();
        return;
      }

      if (submitBtn) {
        submitBtn.disabled = true;
        submitBtn.textContent = '傳送中...';
      }

      fetch(form.action, {
        method: 'POST',
        body: new FormData(form),
        headers: { 'Accept': 'application/json' }
      }).then(function(response) {
        if (response.ok) {
          form.hidden = true;
          if (successEl) successEl.hidden = false;
        } else {
          alert('抱歉，傳送時發生錯誤。請稍後再試。');
          if (submitBtn) { submitBtn.disabled = false; submitBtn.textContent = originalText; }
        }
      }).catch(function() {
        alert('網路連線似乎有問題，請檢查您的網路狀態。');
        if (submitBtn) { submitBtn.disabled = false; submitBtn.textContent = originalText; }
      });
    });

    // Reset form + success state when modal closes
    var modal = document.getElementById('reg-modal');
    if (modal) {
      var observer = new MutationObserver(function() {
        if (!modal.classList.contains('is-open')) {
          form.hidden = false;
          form.reset();
          if (submitBtn) { submitBtn.disabled = false; submitBtn.textContent = originalText; }
          if (successEl) successEl.hidden = true;
        }
      });
      observer.observe(modal, { attributes: true, attributeFilter: ['class'] });
    }
  }

  function initScrollAnimations() {
    var animatedElements = document.querySelectorAll('[data-animate]');
    if (!animatedElements.length) {
      return;
    }

    function revealElement(entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    }

    if ('IntersectionObserver' in window) {
      var observer = new IntersectionObserver(function(entries) {
        entries.forEach(revealElement);
      }, {
        threshold: 0.1,
        rootMargin: '0px 0px -120px 0px'
      });

      animatedElements.forEach(function(element) {
        observer.observe(element);
      });
    } else {
      animatedElements.forEach(function(element) {
        element.classList.add('is-visible');
      });
    }
  }

  function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(function(link) {
      link.addEventListener('click', function(event) {
        var targetSelector = link.getAttribute('href');
        if (!targetSelector || targetSelector === '#') {
          return;
        }
        var target = document.querySelector(targetSelector);
        if (target) {
          event.preventDefault();
          target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      });
    });
  }

  function init() {
    initHamburger();
    initFabDial();
    initModal();
    initModalForm();
    initSmoothScroll();
    initScrollAnimations();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();

(function(){
  var stored = localStorage.getItem('igv-lang');
  if(stored){ document.documentElement.setAttribute('data-lang', stored); }

  function applyPlaceholders(lang){
    document.querySelectorAll('[data-ph-es]').forEach(function(el){
      var text = el.getAttribute('data-ph-' + lang) || el.getAttribute('data-ph-es');
      el.setAttribute('placeholder', text);
    });
  }

  document.addEventListener('DOMContentLoaded', function(){
    var current = document.documentElement.getAttribute('data-lang') || 'es';
    applyPlaceholders(current);

    // Language toggle
    var buttons = document.querySelectorAll('[data-set-lang]');
    buttons.forEach(function(btn){
      if(btn.getAttribute('data-set-lang') === current){ btn.classList.add('active'); }
      else { btn.classList.remove('active'); }
      btn.addEventListener('click', function(){
        var lang = btn.getAttribute('data-set-lang');
        document.documentElement.setAttribute('data-lang', lang);
        localStorage.setItem('igv-lang', lang);
        applyPlaceholders(lang);
        buttons.forEach(function(b){ b.classList.toggle('active', b===btn); });
      });
    });

    // Mobile menu toggle
    var menuBtn = document.querySelector('.menu-btn');
    var navLinks = document.querySelector('nav.links');

    if(menuBtn && navLinks){
      // Open menu on hamburger click
      menuBtn.addEventListener('click', function(e){
        e.stopPropagation();
        navLinks.classList.toggle('open');
      });

      // Close menu when a link is clicked
      navLinks.querySelectorAll('a').forEach(function(a){
        a.addEventListener('click', function(){
          navLinks.classList.remove('open');
        });
      });

      // Close menu when clicking outside
      document.addEventListener('click', function(e){
        if(!menuBtn.contains(e.target) && !navLinks.contains(e.target)){
          navLinks.classList.remove('open');
        }
      });
    }
  });
})();

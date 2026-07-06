(function(){
  var stored = localStorage.getItem('igv-lang');
  if(stored){ document.documentElement.setAttribute('data-lang', stored); }

  document.addEventListener('DOMContentLoaded', function(){
    var current = document.documentElement.getAttribute('data-lang') || 'es';
    var buttons = document.querySelectorAll('[data-set-lang]');
    buttons.forEach(function(btn){
      if(btn.getAttribute('data-set-lang') === current){ btn.classList.add('active'); }
      else { btn.classList.remove('active'); }
      btn.addEventListener('click', function(){
        var lang = btn.getAttribute('data-set-lang');
        document.documentElement.setAttribute('data-lang', lang);
        localStorage.setItem('igv-lang', lang);
        buttons.forEach(function(b){ b.classList.toggle('active', b===btn); });
      });
    });

    var menuBtn = document.querySelector('.menu-btn');
    var navLinks = document.querySelector('nav.links');
    if(menuBtn && navLinks){
      menuBtn.addEventListener('click', function(){
        navLinks.classList.toggle('open');
      });
      navLinks.querySelectorAll('a').forEach(function(a){
        a.addEventListener('click', function(){ navLinks.classList.remove('open'); });
      });
    }
  });
})();

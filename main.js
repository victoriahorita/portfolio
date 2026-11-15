(function(){
  var top=document.getElementById('top');
  function onScroll(){ top.classList.toggle('is-scrolled', window.scrollY>40); }
  onScroll(); window.addEventListener('scroll', onScroll, {passive:true});

  var links=[].slice.call(document.querySelectorAll('.top nav a'));
  var map={};
  links.forEach(function(a){ map[a.getAttribute('href').slice(1)]=a; });
  if('IntersectionObserver' in window){
    var io=new IntersectionObserver(function(entries){
      entries.forEach(function(e){
        if(e.isIntersecting){
          links.forEach(function(a){ a.removeAttribute('aria-current'); });
          var a=map[e.target.id]; if(a) a.setAttribute('aria-current','true');
        }
      });
    },{rootMargin:'-45% 0px -50% 0px'});
    Object.keys(map).forEach(function(id){ var s=document.getElementById(id); if(s) io.observe(s); });
  }
})();

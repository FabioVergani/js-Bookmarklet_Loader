<a href="javascript:
(function(w){
 var o=w.fv||false;
 if(o){o.run();}else{
  var d=w.document,h=d.documentElement,s=d.createElement('script'),e='load';
  s.src=w.encodeURI(('file:///D:/xxx/run.js?'+new Date().getTime()).slice(0,-7));
  s.async=true;
  s.addEventListener(e,function f(){s.removeEventListener(e,f);if(o){o.init(w,d,h)};});
  h.appendChild(s);
 }
})(window);"
>test</a>

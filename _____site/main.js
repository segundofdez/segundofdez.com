var k=Object.defineProperty;var a=(e,t)=>k(e,"name",{value:t,configurable:!0});var S=Object.defineProperty,i=a((e,t)=>S(e,"name",{value:t,configurable:!0}),"o");function v(){(function(){let e=0,t=0,n=0,c=0,l=.08,o=document.querySelector(".js-cursor"),g="is-clicked",f="is-hidden",u="is-hover";function L(){return"ontouchstart"in window||navigator.maxTouchPoints>0||navigator.msMaxTouchPoints>0}a(L,"v"),i(L,"isTouchDevice");function p(r){n=r.clientX,c=r.clientY}a(p,"L"),i(p,"onMouseMove");function m(){let r=n-e,P=c-t;e+=r*l,t+=P*l,o.style.left=`${e}px`,o.style.top=`${t}px`,requestAnimationFrame(m)}a(m,"m"),i(m,"updateCursorPosition");function y(){L()||(document.addEventListener("load",function(r){n=r.clientX,c=r.clientY,e=n,t=c}),document.addEventListener("mousemove",p),document.addEventListener("mousedown",()=>o.classList.add(g)),document.addEventListener("mouseup",()=>o.classList.remove(g)),document.body.addEventListener("mouseenter",()=>{o.classList.remove(f),o.classList.remove(u)}),document.body.addEventListener("mouseleave",()=>o.classList.add(f)),document.querySelectorAll("a").forEach(r=>{r.addEventListener("mouseover",()=>o.classList.add(u)),r.addEventListener("mouseout",()=>o.classList.remove(u))}),m())}return a(y,"f"),i(y,"init"),{init:y}})().init()}a(v,"C");i(v,"customCursor");var q=Object.defineProperty,d=a((e,t)=>q(e,"name",{value:t,configurable:!0}),"r"),h="theme-preference",x=d(()=>{s.value=s.value==="light"?"dark":"light",E()},"onClick"),M=d(()=>localStorage.getItem(h)?localStorage.getItem(h):window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light","getColorPreference"),E=d(()=>{localStorage.setItem(h,s.value),b()},"setPreference"),b=d(()=>{document.firstElementChild.setAttribute("data-theme",s.value);let e=document.querySelector("#theme-toggle");if(e){let t=s.value,n=e.querySelector("span");n.textContent=t==="dark"?"Dark":"Light",e.setAttribute("aria-label",t),e.setAttribute("data-theme",t),document.documentElement.setAttribute("data-theme",t)}},"reflectPreference"),s={value:M()},C=d(()=>{b(),document.querySelector("#theme-toggle").addEventListener("click",x),window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change",({matches:e})=>{s.value=e?"dark":"light",E()})},"themetoggle");gsap.registerPlugin(Draggable);document.addEventListener("DOMContentLoaded",function(){v(),C();let e=document.querySelector(".projects");if(e){let t=e.querySelectorAll("div");if(t.length>0){let n=Math.floor(Math.random()*t.length);t[n].classList.add("is-visible"),t.forEach((l,o)=>{o!==n&&l.remove()})}}});
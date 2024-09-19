var p=Object.defineProperty;var d=(o,e)=>p(o,"name",{value:e,configurable:!0});var r={1:"/audio/01.wav",2:"/audio/02.wav",3:"/audio/03.wav",4:"/audio/04.wav",5:"/audio/05.wav",6:"/audio/06.wav"},s={};function m(o){let e=new Audio(o);return e.loop=!0,e.play(),e}d(m,"playSound");function l(o){s[o]&&(s[o].pause(),s[o].currentTime=0,delete s[o])}d(l,"stopAndRemoveAudio");var y=0,I=document.querySelector("header"),h=document.querySelector("footer"),k=document.querySelector(".description"),u={};function v(o){let e=o.key,n=r[e],a=document.getElementById(`button${e}`);if(e==="Escape"){b();return}if(e==="m"||e==="M"){for(let t in s)u[t]?(s[t].muted=!1,u[t]=!1):(s[t].muted=!0,u[t]=!0);return}if(a)if(a.classList.toggle("is-active"),a.classList.contains("is-active")){s[e]=m(n);let t=document.getElementById(`img-${e}`);if(t){t.style.opacity=1,t.style.zIndex=++y;let c=Math.floor(Math.random()*4)+1;t.src=`/img/keyboard/0${e}/0${c}-s.webp`}}else{l(e);let t=document.getElementById(`img-${e}`);t&&(t.style.opacity=0,t.style.zIndex=-1);let c=document.querySelectorAll(".keyboard button")}}d(v,"handleKeyPress");function b(){for(let n in s)l(n);document.querySelectorAll("img").forEach(n=>{n.style.opacity=0,n.style.zIndex=-1,n.style.transition="opacity 400ms"}),document.querySelectorAll(".keyboard button").forEach(n=>{n.classList.remove("is-active")})}d(b,"stopAll");function S(){let o=document.querySelectorAll(".keyboard button"),e=document.querySelector("header"),n=document.querySelector("footer"),a=document.querySelector(".description");o.forEach(t=>{t.addEventListener("click",()=>{let c=t.id.replace("button",""),f=r[c];if(t.classList.toggle("is-active"),t.classList.contains("is-active")){s[c]=m(f);let i=document.getElementById(`img-${c}`);if(i){i.style.opacity=1,i.style.zIndex=++y;let g=Math.floor(Math.random()*4)+1;i.src=`/img/keyboard/0${c}/0${g}-s.webp`}}else{l(c);let i=document.getElementById(`img-${c}`);i&&(i.style.opacity=0)}})}),document.addEventListener("keydown",v)}d(S,"setupButtonEvents");export{S as setupButtonEvents};

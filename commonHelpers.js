(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))c(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&c(n)}).observe(document,{childList:!0,subtree:!0});function a(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function c(e){if(e.ep)return;e.ep=!0;const t=a(e);fetch(e.href,t)}})();(()=>{const r={openModalBtn:document.querySelector("[data-menu-open]"),closeModalBtn:document.querySelector("[data-menu-close]"),mobilemenu:document.querySelector("[data-menu]")};r.openModalBtn.addEventListener("click",i),r.closeModalBtn.addEventListener("click",i);function i(){r.mobilemenu.classList.toggle("is-open")}function a(){function c(t,n){let l=document.querySelector(t);if(!l){console.log("елемент куди скролити не знайдено:",t);return}let m=l.getBoundingClientRect().top,p=window.pageYOffset,d=null;const g=function(o,s,u,y){return o/=y/2,o<1?u/2*o*o+s:(o--,-u/2*(o*(o-2)-1)+s)},f=function(o){d===null&&(d=o);const s=o-d,u=g(s,p,m,n);window.scrollTo(0,u),s<n&&requestAnimationFrame(f)};requestAnimationFrame(f)}const e=document.querySelectorAll("a.scroll-to");e&&e.forEach(t=>{t.addEventListener("click",function(n){n.preventDefault();const l=this.getAttribute("href");r.mobilemenu.classList.contains("is-open")&&r.modal.classList.remove("is-open"),c(l,1e3)})})}a()})();
//# sourceMappingURL=commonHelpers.js.map

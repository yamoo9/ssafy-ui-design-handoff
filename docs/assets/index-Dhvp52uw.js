var S=t=>{throw TypeError(t)};var w=(t,e,s)=>e.has(t)||S("Cannot "+s);var i=(t,e,s)=>(w(t,e,"read from private field"),s?s.call(t):e.get(t)),o=(t,e,s)=>e.has(t)?S("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(t):e.set(t,s),p=(t,e,s,n)=>(w(t,e,"write to private field"),n?n.call(t,s):e.set(t,s),s),m=(t,e,s)=>(w(t,e,"access private method"),s);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))n(r);new MutationObserver(r=>{for(const c of r)if(c.type==="childList")for(const u of c.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&n(u)}).observe(document,{childList:!0,subtree:!0});function s(r){const c={};return r.integrity&&(c.integrity=r.integrity),r.referrerPolicy&&(c.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?c.credentials="include":r.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function n(r){if(r.ep)return;r.ep=!0;const c=s(r);fetch(r.href,c)}})();var h,y,d,f,b,a,C,v,A;class U{constructor(e){o(this,a);o(this,h);o(this,y);o(this,d);o(this,f);o(this,b,[]);p(this,h,e),p(this,y,i(this,h).parentElement),this.label=i(this,h).dataset.label,this.id=crypto.randomUUID(),m(this,a,C).call(this)}get isChecked(){return this.checked==="true"}get checked(){return i(this,f).getAttribute("aria-checked")}set checked(e){return i(this,f).setAttribute("aria-checked",e)}onUpdate(e){i(this,b).push(e)}}h=new WeakMap,y=new WeakMap,d=new WeakMap,f=new WeakMap,b=new WeakMap,a=new WeakSet,C=function(){p(this,d,m(this,a,A).call(this)),p(this,f,i(this,d).querySelector('[role="switch"]')),i(this,y).replaceChild(i(this,d),i(this,h)),m(this,a,v).call(this)},v=function(){const e=i(this,d);e.querySelector(".switch--label").nextElementSibling;const n=r=>{const{type:c,code:u}=r;(c==="click"||c==="keydown"&&u==="Enter"|u==="Space")&&(this.checked=!this.isChecked,i(this,b).forEach(L=>L(this.isChecked)))};e.addEventListener("click",n),e.addEventListener("keydown",n)},A=function(){const{id:e,label:s}=this,n=document.createElement("div");return n.insertAdjacentHTML("beforeend",`
      <div role="group" class="switch--wrapper">
        <span id="${e}" class="switch--label">${s}</span>
        <div
          class="switch"
          role="switch"
          tabindex="0"
          aria-checked="false"
          aria-labelledby="${e}"
        >
          <span class="switch--knob" />
        </div>
      </div>
    `),n.firstElementChild};function q(t){return Array.from(document.querySelectorAll(t)).map(s=>new U(s))}var l,E,P,g;class O{constructor(e){o(this,E);o(this,l);o(this,g,[]);p(this,l,e),this.hasPressedState||(this.pressed=!1),m(this,E,P).call(this)}get isPressed(){return this.pressed==="true"}get hasPressedState(){return i(this,l).hasAttribute("aria-pressed")}get pressed(){return i(this,l).getAttribute("aria-pressed")}set pressed(e){i(this,l).setAttribute("aria-pressed",e)}onUpdate(e){i(this,g).push(e)}toggleState(){this.isPressed?this.pressed=!1:this.pressed=!0}}l=new WeakMap,E=new WeakSet,P=function(){i(this,l).addEventListener("click",e=>{this.toggleState(),i(this,g).forEach(s=>s(this.isPressed))})},g=new WeakMap;function x(t){return Array.from(document.querySelectorAll(".chip")).map(s=>new O(s))}const[z,T]=q(".switch");z.onUpdate(t=>{const{body:e}=document;t?e.style.cssText=`
      color: #fefefe;
      background-color: #1e1e1e;
    `:e.style.cssText=`
      background-color: #fefefe;
      color: #1e1e1e;
    `});T.onUpdate(t=>{const e=document.querySelector(".font-size-control");t?e.style.fontSize="20px":e.style.removeProperty("font-size")});const k=x();k.forEach((t,e)=>{t.onUpdate(s=>{s&&k.filter((r,c)=>c!==e).forEach(r=>{r.pressed=!1})})});

var y=t=>{throw TypeError(t)};var k=(t,e,s)=>e.has(t)||y("Cannot "+s);var i=(t,e,s)=>(k(t,e,"read from private field"),s?s.call(t):e.get(t)),r=(t,e,s)=>e.has(t)?y("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(t):e.set(t,s),d=(t,e,s,l)=>(k(t,e,"write to private field"),l?l.call(t,s):e.set(t,s),s),p=(t,e,s)=>(k(t,e,"access private method"),s);var h,u,n,o,f,a,A,C,v;class q{constructor(e){r(this,a);r(this,h);r(this,u);r(this,n);r(this,o);r(this,f,[]);d(this,h,e),d(this,u,i(this,h).parentElement),this.label=i(this,h).dataset.label,this.id=crypto.randomUUID(),p(this,a,A).call(this)}get isChecked(){return this.checked==="true"}get checked(){return i(this,o).getAttribute("aria-checked")}set checked(e){return i(this,o).setAttribute("aria-checked",e)}onUpdate(e){i(this,f).push(e)}}h=new WeakMap,u=new WeakMap,n=new WeakMap,o=new WeakMap,f=new WeakMap,a=new WeakSet,A=function(){d(this,n,p(this,a,v).call(this)),d(this,o,i(this,n).querySelector('[role="switch"]')),i(this,u).replaceChild(i(this,n),i(this,h)),p(this,a,C).call(this)},C=function(){const e=i(this,n);e.querySelector(".switch--label").nextElementSibling;const l=m=>{const{type:E,code:g}=m;(E==="click"||E==="keydown"&&g==="Enter"|g==="Space")&&(this.checked=!this.isChecked,i(this,f).forEach(U=>U(this.isChecked)))};e.addEventListener("click",l),e.addEventListener("keydown",l)},v=function(){const{id:e,label:s}=this,l=document.createElement("div");return l.insertAdjacentHTML("beforeend",`
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
    `),l.firstElementChild};function x(t){return Array.from(document.querySelectorAll(t)).map(s=>new q(s))}var c,w,P,b;class z{constructor(e){r(this,w);r(this,c);r(this,b,[]);d(this,c,e),this.hasPressedState||(this.pressed=!1),this.isPressed&&(this.disabled=!0),p(this,w,P).call(this)}get isPressed(){return this.pressed==="true"}get hasPressedState(){return i(this,c).hasAttribute("aria-pressed")}get pressed(){return i(this,c).getAttribute("aria-pressed")}get isDisabled(){return this.disabled==="true"}get disabled(){return i(this,c).getAttribute("aria-disabled")}set disabled(e){i(this,c).setAttribute("aria-disabled",e)}set pressed(e){i(this,c).setAttribute("aria-pressed",e),this.isPressed?this.disabled=!0:this.disabled=!1}onUpdate(e){i(this,b).push(e)}toggleState(){this.isPressed?this.pressed=!1:this.pressed=!0}}c=new WeakMap,w=new WeakSet,P=function(){i(this,c).addEventListener("click",e=>{this.isDisabled||(this.toggleState(),i(this,b).forEach(s=>s(this.isPressed)))})},b=new WeakMap;function L(t){return Array.from(document.querySelectorAll(".chip")).map(s=>new z(s))}const[T,D]=x(".switch");T.onUpdate(t=>{const{body:e}=document;t?e.style.cssText=`
      color: #fefefe;
      background-color: #1e1e1e;
    `:e.style.cssText=`
      background-color: #fefefe;
      color: #1e1e1e;
    `});D.onUpdate(t=>{const e=document.querySelector(".font-size-control");t?e.style.fontSize="20px":e.style.removeProperty("font-size")});const S=L();S.forEach((t,e)=>{t.onUpdate(s=>{s&&S.filter((m,E)=>E!==e).forEach(m=>{m.pressed=!1})})});

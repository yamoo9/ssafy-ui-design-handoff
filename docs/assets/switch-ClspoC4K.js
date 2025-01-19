var k=t=>{throw TypeError(t)};var u=(t,e,s)=>e.has(t)||k("Cannot "+s);var i=(t,e,s)=>(u(t,e,"read from private field"),s?s.call(t):e.get(t)),n=(t,e,s)=>e.has(t)?k("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(t):e.set(t,s),d=(t,e,s,c)=>(u(t,e,"write to private field"),c?c.call(t,s):e.set(t,s),s),m=(t,e,s)=>(u(t,e,"access private method"),s);var l,o,h,a,p,r,E,y,f;class S{constructor(e){n(this,r);n(this,l);n(this,o);n(this,h);n(this,a);n(this,p,[]);d(this,l,e),d(this,o,i(this,l).parentElement),this.label=i(this,l).dataset.label,this.id=crypto.randomUUID(),m(this,r,E).call(this)}get isChecked(){return this.checked==="true"}get checked(){return i(this,a).getAttribute("aria-checked")}set checked(e){return i(this,a).setAttribute("aria-checked",e)}onUpdate(e){i(this,p).push(e)}}l=new WeakMap,o=new WeakMap,h=new WeakMap,a=new WeakMap,p=new WeakMap,r=new WeakSet,E=function(){d(this,h,m(this,r,f).call(this)),d(this,a,i(this,h).querySelector('[role="switch"]')),i(this,o).replaceChild(i(this,h),i(this,l)),m(this,r,y).call(this)},y=function(){const e=i(this,h);e.querySelector(".switch--label").nextElementSibling;const c=g=>{const{type:w,code:b}=g;(w==="click"||w==="keydown"&&b==="Enter"|b==="Space")&&(this.checked=!this.isChecked,i(this,p).forEach(v=>v(this.isChecked)))};e.addEventListener("click",c),e.addEventListener("keydown",c)},f=function(){const{id:e,label:s}=this,c=document.createElement("div");return c.insertAdjacentHTML("beforeend",`
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
    `),c.firstElementChild};function A(t){return Array.from(document.querySelectorAll(t)).map(s=>new S(s))}export{A as c};

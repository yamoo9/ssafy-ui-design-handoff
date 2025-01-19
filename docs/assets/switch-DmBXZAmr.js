var E=t=>{throw TypeError(t)};var m=(t,e,s)=>e.has(t)||E("Cannot "+s);var i=(t,e,s)=>(m(t,e,"read from private field"),s?s.call(t):e.get(t)),h=(t,e,s)=>e.has(t)?E("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(t):e.set(t,s),d=(t,e,s,r)=>(m(t,e,"write to private field"),r?r.call(t,s):e.set(t,s),s),k=(t,e,s)=>(m(t,e,"access private method"),s);var n,o,a,l,p,c,b,y,f;class g{constructor(e){h(this,c);h(this,n);h(this,o);h(this,a);h(this,l);h(this,p,[]);d(this,n,e),d(this,o,i(this,n).parentElement),this.label=i(this,n).dataset.label,this.id=crypto.randomUUID(),k(this,c,b).call(this)}get isChecked(){return this.checked==="true"}get checked(){return i(this,l).getAttribute("aria-checked")}set checked(e){i(this,l).setAttribute("aria-checked",e)}onUpdate(e){i(this,p).push(e)}}n=new WeakMap,o=new WeakMap,a=new WeakMap,l=new WeakMap,p=new WeakMap,c=new WeakSet,b=function(){d(this,a,k(this,c,f).call(this)),d(this,l,i(this,a).querySelector('[role="switch"]')),i(this,o).replaceChild(i(this,a),i(this,n)),k(this,c,y).call(this)},y=function(){const e=i(this,a),s=r=>{const{type:w,code:u}=r;(w==="click"||w==="keydown"&&u==="Enter"|u==="Space")&&(this.checked=!this.isChecked,i(this,p).forEach(v=>v(this.isChecked)))};e.addEventListener("click",s),e.addEventListener("keydown",s)},f=function(){const{id:e,label:s}=this,r=document.createElement("div");return r.insertAdjacentHTML("beforeend",`
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
    `),r.firstElementChild};function A(t){return Array.from(document.querySelectorAll(t)).map(s=>new g(s))}export{A as c};

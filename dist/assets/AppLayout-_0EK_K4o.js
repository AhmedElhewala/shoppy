import{u as t,e as H,j as e,L as m,K as u,f as p,g as f,r as l,M as le,Q as V,R as F,S as ce,T as P,N as W,C as G,U as $,V as E,W as de,X as he,l as xe,s as U,Y as pe,q as R,a as q,Z as me,$ as ge,a0 as X,a1 as ue,a2 as fe,A as ve,a3 as we,a4 as ye,a5 as be,a6 as je,a7 as ke,p as Se,t as Ce,x as Le,v as ze,a8 as Ie,a9 as Ne}from"./index-gK2J3_II.js";import{l as Y,a as K}from"./logo-dark-MSfGP5lV.js";import{u as Z}from"./useCategoryList-qz3MIW8e.js";import{S as De}from"./Spinner-fJObtOIq.js";import{f as J}from"./helpers-o6nrGciX.js";import{D as Be}from"./DeleteButton-o4gLQ45O.js";import"./useQuery-h9sTdRQf.js";import"./utils-1RRThafF.js";import"./apiCategory-6MgFhN2f.js";const He=t(m)`
  width: 100%;
  display: flex;
  align-items: center;
  gap: 2.5rem;
  font-weight: bold;
  color: var(--color-grey-900);

  >span {
    display: inline-block;
    font-size: 2.2rem;
  }
`,Pe=t.img`
  display: block;
  max-width: 2.6rem;
  transition: var(--main-transition);
  filter: drop-shadow(0 1px 2px var(--color-grey-500));

  @media screen and (max-width: 767px) {
    max-width: 2.4rem;
  }
`;function Ee(){const{isDark:n}=H();return e.jsxs(He,{to:"/",children:[e.jsx(Pe,{src:n?Y:K,alt:"Shoopy Logo"}),e.jsx("span",{children:"Shoppy"})]})}function Fe(n){return u({tag:"svg",attr:{viewBox:"0 0 640 512"},child:[{tag:"path",attr:{d:"M425.7 256c-16.9 0-32.8-9-41.4-23.4L320 126l-64.2 106.6c-8.7 14.5-24.6 23.5-41.5 23.5-4.5 0-9-.6-13.3-1.9L64 215v178c0 14.7 10 27.5 24.2 31l216.2 54.1c10.2 2.5 20.9 2.5 31 0L551.8 424c14.2-3.6 24.2-16.4 24.2-31V215l-137 39.1c-4.3 1.3-8.8 1.9-13.3 1.9zm212.6-112.2L586.8 41c-3.1-6.2-9.8-9.8-16.7-8.9L320 64l91.7 152.1c3.8 6.3 11.4 9.3 18.5 7.3l197.9-56.5c9.9-2.9 14.7-13.9 10.2-23.1zM53.2 41L1.7 143.8c-4.6 9.2.3 20.2 10.1 23l197.9 56.5c7.1 2 14.7-1 18.5-7.3L320 64 69.8 32.1c-6.9-.8-13.5 2.7-16.6 8.9z"}}]})(n)}const Me=t.nav`
  width: 100%;
  padding: 50px 0;
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`,j=t.div`
  width: 100%;
  position: relative;
`,k=t(W)`
  width: 100%;
  padding-left: 2px;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  transition: var(--main-transition);

  &:hover,
  &.active {
    background-color: var(--overlay-background);
  }
`,M=t.span`
  padding: 8px 0;
  display: flex;
  align-items: center;
  justify-content: center;

  &.rotate {
    >svg {
      transform: rotate(180deg);
    }
  }

  >svg {
    font-size: 2rem;
    cursor: pointer;
    transition: var(--main-transition);
  }
`,S=t.div`
  flex: 1;
  display: flex;
  align-items: center;
  gap: 2.5rem;
  padding: 8px 0;
  border-radius: 8px;
  font-weight: bold;
  font-size: 1.8rem;

  >svg {
    font-size: 2.6rem;
    flex-shrink: 0;
    filter: drop-shadow(0 1px 2px var(--color-grey-500));
  }
`,O=t.ul`
  width: 100%;
  border-radius: 8px;
  display: none;
  flex-direction: column;
  background-color: var(--color-grey-200);
  transition: var(--main-transition);
  overflow: hidden;

  &.open {
    display: flex;
  }
`,L=t.li`
  width: 100%;
`,z=t(W)`
  width: 100%;
  padding: 8px 0;
  display: flex;
  justify-content: center;
  transition: var(--main-transition);

  &.active,
  &:hover {
    background-color: var(--overlay-background);
  }
`;function Oe({isAsideOpen:n}){const r=p(f),[o,i]=l.useState(!1),{isLoading:s,categories:a}=Z();if(s)return e.jsx(De,{});function h(c){i(o===c?"":c)}return e.jsxs(Me,{children:[e.jsx(j,{children:e.jsx(k,{to:"/",title:"Home",children:e.jsxs(S,{children:[e.jsx(le,{}),"Home"]})})}),(r==null?void 0:r.role)==="admin"&&e.jsxs(j,{children:[e.jsxs(k,{to:"/dashboard",title:"Dashboard",className:location.pathname.split("/")[1]==="dashboard"&&"active",children:[e.jsxs(S,{children:[e.jsx(V,{}),"Dashboard"]}),e.jsx(M,{onClick:c=>{c.preventDefault(),h("dashboard")},className:o==="dashboard"?"rotate":"",children:e.jsx(F,{})})]}),e.jsxs(O,{className:o==="dashboard"&&n?"open":"",children:[e.jsx(L,{children:e.jsx(z,{to:"/dashboard/user",children:"Users"})},"user"),e.jsx(L,{children:e.jsx(z,{to:"/dashboard/category",children:"Categories"})},"category"),e.jsx(L,{children:e.jsx(z,{to:"/dashboard/product",children:"Products"})},"product")]})]}),e.jsxs(j,{children:[a&&a.length>0&&e.jsxs(k,{to:`/category/${a[0].id}`,title:"Category",className:location.pathname.split("/")[1]==="category"&&"active",children:[e.jsxs(S,{children:[e.jsx(ce,{}),"Category"]}),e.jsx(M,{onClick:c=>{c.preventDefault(),h("category")},className:o==="category"?"rotate":"",children:e.jsx(F,{})})]}),a&&a.length>0&&e.jsx(O,{className:o==="category"&&n?"open":"",children:a.map(c=>e.jsx(L,{children:e.jsx(z,{to:`/category/${c.id}`,children:c.name})},c.id))})]}),e.jsx(j,{children:e.jsx(k,{to:"/product",title:"Product",children:e.jsxs(S,{children:[e.jsx(Fe,{}),"Products"]})})}),e.jsx(j,{children:e.jsx(k,{to:"/watchlist",title:"Watch List",children:e.jsxs(S,{children:[e.jsx(P,{}),"Watch List"]})})})]})}const Te=t.div`
  width: 3rem;
  height: 3rem;
  border-radius: 50%;
  margin-right: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 0 4px 1px var(--color-grey-500);
  cursor: pointer;
  overflow: hidden;
  flex-shrink: 0;

  &>svg {
    font-weight: bold;
    font-size: 2.6rem;
    color: var(--color-grey-900);
    transition: var(--main-transition);
  }

  >img {
    max-width: 100%;
    object-fit: cover;
  }
`;function _({toggleProfileMenu:n}){const[r,o]=l.useState(!1),i=p(f);function s(){o(!0)}return e.jsx(Te,{onClick:n,children:i.avatar&&!r?e.jsx("img",{src:i.avatar,alt:`${i.name} Avatar`,onError:s}):e.jsx(G,{})})}const Qe=t.div`
  flex: 1;
  display: flex;
  justify-content: end;
  flex-direction: column;
  gap: 1.5rem;
`,Ae=t(m)`
  width: 100%;
  display: flex;
  align-items: center;
  gap: 2.5rem;
`,Ve=t.div`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
  font-size: 1.6rem;
  font-weight: bold;

  >span {
    font-size: 1rem;
    color: var(--color-grey-500);
    font-weight: normal;
    font-size: 1.2rem;
  }
`,We=t.button`
  height: 40px;
  padding: 0 8px;
  border-radius: 8px;
  display: flex;
  align-items: center;
  gap: 2.5rem;
  color: #efefef;
  font-weight: bold;
  cursor: pointer;
  transition: var(--main-transition);

  @media screen and (max-width: 767px) {
    height: 35px;
  }

  &.logout {
    background-color: var(--color-btn-red);
    box-shadow: var(--shadow-btn-red);
  }

  &.login {
    background-color: var(--color-btn-green);
    box-shadow: var(--shadow-btn-green);
  }

  >svg {
    font-size: 1.8rem;
    font-weight: bold;
    flex-shrink: 0;
    transition: var(--main-transition);
  }
`;function Ge(){const n=p(f);return e.jsxs(Qe,{children:[n&&e.jsxs(Ae,{to:"/profile",children:[e.jsx(_,{}),e.jsxs(Ve,{children:[n.name,e.jsx("span",{children:n.email})]})]}),e.jsx(We,{className:n?"logout":"login",children:n?e.jsxs(e.Fragment,{children:[e.jsx($,{}),e.jsx("span",{children:"Log out"})]}):e.jsxs(e.Fragment,{children:[e.jsx(E,{}),e.jsx("span",{children:"Log in"})]})})]})}const $e=t.aside`
  background-color: var(--color-grey-100);
  padding: 15px;
  width: 6rem;
  height: 100vh;
  display: flex;
  flex-direction: column;
  position: fixed;
  top: 0;
  left: 0;
  box-shadow: 0 0 8px 0 var(--color-grey-500);
  transition: var(--main-transition);
  overflow-y: auto;

  &.open {
    width: 26rem;
  }

  &::-webkit-scrollbar {
    width: 0;
    display: none;
  }
  &::-webkit-scrollbar-horizontal {
    height: 0;
  }
`;function Ue({isAsideOpen:n}){return e.jsxs($e,{className:n?"open":"",children:[e.jsx(Ee,{}),e.jsx(Oe,{isAsideOpen:n}),e.jsx(Ge,{})]})}const Re=t.span`
  cursor: pointer;

  &>svg {
    font-weight: bold;
    font-size: 2.2rem;
    color: var(--color-grey-900);
    filter: drop-shadow(0 1px 2px var(--color-grey-500));
    transition: var(--main-transition);
  }
`;function qe(){const{isDark:n,toggleTheme:r}=H();return e.jsx(Re,{onClick:r,children:n?e.jsx(de,{}):e.jsx(he,{})})}const Xe=t(m)`
  cursor: pointer;
  position: relative;

  &>svg {
    font-weight: bold;
    font-size: 2.2rem;
    color: var(--color-grey-900);
    filter: drop-shadow(0 1px 2px var(--color-grey-500));
    transition: var(--main-transition);
  }
`,Ye=t.span`
  width: 2rem;
  height: 2rem;
  border-radius: 50%;
  position: absolute;
  top: -1.2rem;
  right: -1.2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: var(--color-btn-red);
  box-shadow: var(--shadow-btn-red);
  color: #efefef;
  transition: var(--main-transition);
  z-index: 999;
  font-size: 1.2rem;
  font-weight: bold;
`;function Ke(){const n=p(xe);return e.jsxs(Xe,{to:"/watchlist",children:[n>0&&e.jsx(Ye,{children:n}),e.jsx(P,{})]})}const Ze=t.span`
  position: relative;
  cursor: pointer;

  &>svg {
    font-weight: bold;
    font-size: 2.2rem;
    color: var(--color-grey-900);
    filter: drop-shadow(0 1px 2px var(--color-grey-500));
    transition: var(--main-transition);
  }
`,Je=t.span`
  width: 2rem;
  height: 2rem;
  border-radius: 50%;
  position: absolute;
  top: -1.2rem;
  right: -1.2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: var(--color-btn-red);
  box-shadow: var(--shadow-btn-red);
  color: #efefef;
  transition: var(--main-transition);
  z-index: 999;
  font-size: 1.2rem;
  font-weight: bold;
`;function _e({toggleShoppingCart:n}){const r=p(U);return e.jsxs(Ze,{onClick:n,children:[r>0&&e.jsx(Je,{children:r}),e.jsx(pe,{})]})}function et(){const n=R(),r=q();function o(){try{me(),n(ge()),r("/auth/login",{replace:!0})}catch(i){throw new Error(`Faild to logging out: ${i.message}`)}}return{logout:o}}const tt=t.div`
  width: 10em;
  padding: 8px 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.6rem;
  background-color: var(--color-btn-red);
  color: #efefef;
  box-shadow: var(--shadow-btn-red);
  border-radius: 8px;
  font-weight: bold;
  cursor: pointer;
  transition: var(--main-transition);

  &.logout {
    background-color: var(--color-btn-red);
    box-shadow: var(--shadow-btn-red);
  }

  &.login {
    background-color: var(--color-btn-green);
    box-shadow: var(--shadow-btn-green);
  }

  &:hover {
    transform: scale(1.05);
  }

  >svg {
    font-weight: bold;
  }
`;function nt(){const n=p(f),{logout:r}=et();return e.jsx(tt,{className:n?"logout":"login",onClick:()=>{n&&r()},children:n?e.jsxs(e.Fragment,{children:[e.jsx($,{}),"Log out"]}):e.jsxs(e.Fragment,{children:[e.jsx(E,{}),"Log in"]})})}function ee(n,r,o){l.useEffect(()=>{const i=s=>{n.current&&!n.current.contains(s.target)&&(s.stopPropagation(),r())};return document.addEventListener("click",i,o),()=>{document.removeEventListener("click",i,o)}},[n,r,o]),l.useEffect(()=>{const i=s=>{n.current&&s.key==="Escape"&&r()};return document.addEventListener("keydown",i,o),()=>document.removeEventListener("keydown",i,o)},[n,r,o])}const rt=t.div`
  min-width: 25rem;
  padding: 16px;
  background-color: var(--color-grey-300);
  color: var(--color-grey-700);
  border-radius: 8px;
  position: absolute;
  top: 100%;
  right: 15px;
  display: flex;
  flex-direction: column;
  gap: 3rem;
  box-shadow: 0 1px 4px 2px var(--color-grey-500);
  transition: var(--main-transition);
`,ot=t.div`
  width: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
  font-size: 1.6rem;
  font-weight: bold;

  &::after {
    content: "";
    width: 100%;
    height: 1px;
    border-radius: 1px;
    background-color: var(--color-grey-500);
    position: absolute;
    left: 0;
    bottom: -1.2rem;
  }

  >span {
    font-size: 1.2rem;
    color: var(--color-grey-500);
    font-weight: normal;
  }
`,it=t.ul`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`,N=t.li`
  width: 100%;
`,D=t(m)`
  width: 100%;
  display: flex;
  align-items: center;
  gap: 6px;
  transition: var(--main-transition);

  &:hover {
    padding-left: 1rem;
  }
`,at=t.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;function st({closeProfileMenu:n}){const r=p(f),o=l.useRef();return ee(o,n,!0),e.jsxs(rt,{ref:o,children:[e.jsxs(ot,{children:[r.name,e.jsx("span",{children:r.email})]}),e.jsxs(it,{children:[e.jsx(N,{children:e.jsxs(D,{to:"/profile",onClick:n,children:[e.jsx(G,{}),"Profile"]})}),(r==null?void 0:r.role)==="admin"&&e.jsx(N,{children:e.jsxs(D,{to:"/dashboard",onClick:n,children:[e.jsx(V,{}),"Dashboard"]})}),e.jsx(N,{children:e.jsxs(D,{to:"/watchlist",onClick:n,children:[e.jsx(P,{}),"Watch List"]})})]}),e.jsx(at,{children:e.jsx(nt,{})})]})}const lt=t.form`
  position: relative;
  font-size: 1.6px;
  display: flex;
  align-items: center;
  gap: 0;
  transition: var(--main-transition);
  order: 1;
  max-width: 70%;

  @media screen and  (max-width: 767px) {
    display: none;
    order: 2;
    max-width: 100%;

    &.show {
      display: flex;
    }
  }
`,ct=t.select`
  padding: 8px 10px;
  height: 3.2rem;
  max-width: 30%;
  border-radius: 8px 0 0 8px;
  border: none;
  outline: none;
  background-color: var(--color-grey-700);
  color: var(--color-grey-100);
  box-shadow: 0 0 2px 1px var(--color-grey-500);
  cursor: pointer;
  transition: var(--main-transition);
`,T=t.option`

`,dt=t.input`
  flex: 1;
  padding: 8px 20px;
  height: 3.2rem;
  background-color: #efefef;
  border: none;
  transition: var(--main-transition);
  box-shadow: 0 0 2px 1px var(--color-grey-500);
`,ht=t.button`
  padding: 8px 10px;
  height: 3.2rem;
  border-radius: 0 8px 8px 0;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: var(--color-grey-700);
  color: var(--color-grey-100);
  font-weight: bold;
  font-size: 1.6rem;
  box-shadow: 0 0 2px 1px var(--color-grey-500);
  cursor: pointer;
`;function xt({isShow:n}){const[r,o]=l.useState(""),[i,s]=l.useState(""),{categories:a}=Z(),h=q();function c(d){o(d.target.value)}function x(d){s(d.target.value)}function g(d){d.preventDefault(),i&&h(`/search?title=${i}${r?"&categoryId="+r:""}`)}return e.jsxs(lt,{onSubmit:g,className:n?"show":"",children:[e.jsx(ct,{id:"category",name:"category",value:r,onChange:c,children:e.jsxs("optgroup",{label:"Category",children:[e.jsx(T,{value:"",children:"All"},"all"),a&&a.length>0&&a.map(d=>e.jsx(T,{value:d.id,children:d.name},d.id))]})}),e.jsx(dt,{type:"text",value:i,onChange:x,placeholder:"What product you want ..."}),e.jsx(ht,{type:"submit",children:e.jsx(X,{})})]})}const pt=t.div`
  width: 100%;
  margin-bottom: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4rem;
  position: relative;
`,mt=t.p`
  line-height: 1.6;
  font-weight: bold;
`,gt=t(m)`
  padding: 6px 20px;
  border-radius: 6px;
  background-color: var(--color-grey-800);
  color: var(--color-grey-100);
  box-shadow: 0 0 2px 2px var(--color-grey-500);;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  transform: var(--main-transition);
  font-size: 1.6rem;
  font-weight: bold;
`;function ut({closeShoppingCart:n}){return e.jsxs(pt,{children:[e.jsx(mt,{children:"Your cart still empty, please back add some items 😀"}),e.jsx(gt,{to:"/product",onClick:n,children:"Go to products"})]})}const ft=t.div`
  width: 100%;
  border-radius: 8px;
  display: flex;
  flex-wrap: wrap;
  color: var(--color-grey-900);
  box-shadow: 0 0 6px 1px var(--color-grey-500);
  overflow: hidden;
  position: relative;
  transition: var(--main-transition);

  @media screen and (max-width: 767px) {
    flex-direction: column;
  }
`,vt=t.div`
  width: 25%;
  display: flex;
  position: relative;
  transition: var(--main-transition);

  &.shrink {
    display: none;
  }

  @media screen and (max-width: 767px) {
    width: 100%;
  }
`,wt=t.img`
  width: 80%;
  object-fit: cover;
  transition: var(--main-transition);

  &.full {
    width: 100%;
  }
`,yt=t.div`
  padding: 2px 0;
  display: flex;
  align-items: center;
  flex-direction: column;
  position: relative;
  gap: 2px;
  transition: var(--main-transition);
`,bt=t.img`
  flex: 1;
  object-fit: fit;
  cursor: pointer;
  box-shadow: 0 0 4px 2px #333;
  border-radius: 2px;
  transition: var(--main-transition);

  &.active {
    box-shadow: 0 0 1px 2px #000;
  }
`,jt=t.div`
  padding: 2rem;
  flex: 1;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  position: relative;
  gap: 2rem;
  transition: var(--main-transition);

  @media screen and (max-width: 767px) {
    padding: 3rem 2rem;
    gap: 3rem;
  }
`,kt=t.div`
  width: 100%;
  display: flex;
  align-items: start;
  justify-content: space-between;
  gap: 2rem;
  position: relative;
  transition: var(--main-transition);
`,St=t.h3`
  font-size: 1.8rem;
  transition: var(--main-transition);
  line-height: 1.4;
`,Ct=t.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  transition: var(--main-transition);
`,B=t.span`
  width: 2.2rem;
  height: 2.2rem;
  border-radius: 0.6rem;
  color: #efefef;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: var(--main-transition);
  cursor: pointer;

  &.delete,
  &.confirm {
    background-color: var(--color-btn-red);
    box-shadow: var(--shadow-btn-red);
  }

  &.cancel {
    background-color: var(--color-btn-green);
    box-shadow: var(--shadow-btn-green);
  }

  >svg {
    font-size: 1.4rem;
  }
`,Lt=t.span`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  gap: 2rem;
  position: relative;
  transition: var(--main-transition);
`,zt=t.span`
  font-weight: bold;
  transition: var(--main-transition);
`,It=t.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  transition: var(--main-transition);
`,Q=t.button`
  width: 2rem;
  height: 2rem;
  border-radius: 0.6rem;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: var(--main-transition);
  color: #efefef;
  transition: var(--main-transition);

  &.increase {
    background-color: var(--color-btn-green);
    box-shadow: var(--shadow-btn-green);
  }

  &.decrease {
    background-color: var(--color-btn-red);
    box-shadow: var(--shadow-btn-red);
  }
`,Nt=t.span`
  font-weight: bold;
  transition: var(--main-transition);
`;function Dt({item:n}){const{id:r,title:o,quantity:i,totalPrice:s,images:a}=n,[h,c]=l.useState(a&&a[0]),[x,g]=l.useState(!1),d=R(),[I,v]=l.useState(!1),[,w]=l.useState(!1),[,y]=l.useState(!1);function te(b){c(b.target.src)}function ne(){g(!0)}function re(){d(be(r))}function oe(){d(je(r))}function ie(){w(!1),w(!1),v(!0)}function ae(){d(ke(r)),w(!0),v(!1)}function se(){y(!0),v(!1)}return e.jsxs(ft,{children:[e.jsx(vt,{className:x?"shrink":"",children:!x&&e.jsxs(e.Fragment,{children:[e.jsx(wt,{src:h,alt:o,onError:ne,className:a.length>1?"":"full"}),a.length>1&&e.jsx(yt,{children:a.map(b=>e.jsx(bt,{src:b,alt:o,onClick:te,className:h===b?"active":""},b))})]})}),e.jsxs(jt,{children:[e.jsxs(kt,{children:[e.jsx(St,{children:o}),e.jsx(Ct,{children:I?e.jsxs(e.Fragment,{children:[e.jsx(B,{className:"cancel",title:"Cancel deleting",onClick:se,children:e.jsx(ue,{})}),e.jsx(B,{className:"confirm",title:"Confirm deleting",onClick:ae,children:e.jsx(fe,{})})]}):e.jsx(B,{className:"delete",title:"Delete the cart",onClick:ie,children:e.jsx(ve,{})})})]}),e.jsxs(Lt,{children:[e.jsx(zt,{children:J(s)}),e.jsxs(It,{children:[e.jsx(Q,{className:"decrease",title:"Decrease quantity",onClick:oe,children:e.jsx(we,{})}),e.jsx(Nt,{children:i}),e.jsx(Q,{className:"increase",title:"Increase quantity",onClick:re,children:e.jsx(ye,{})})]})]})]})]})}const Bt=t.div`
  width: 60%;
  max-height: 80vh;
  padding: 20px 16px;
  background-color: var(--color-grey-300);
  color: var(--color-grey-700);
  border-radius: 8px;
  position: absolute;
  top: 100%;
  right: 15px;
  display: flex;
  flex-direction: column;
  gap: 5rem;
  box-shadow: 0 1px 4px 2px var(--color-grey-500);
  transition: var(--main-transition);
  z-index: 10000;
  overflow: auto;
  
    @media (min-width: 768px) and (max-width: 991px) {
      width: 70%;
    }

  @media screen and (max-width: 767px) {
    width: 90%;
  }

  &::-webkit-scrollbar {
    width: 0;
    display: none;
  }
  &::-webkit-scrollbar-horizontal {
    height: 0;
  }
`,Ht=t.div`
  width: 100%;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-weight: bold;
  font-size: 1.8rem;

  &::after {
    content: "";
    width: 100%;
    height: 1px;
    background-color: var(--color-grey-500);
    border-radius: 1px;
    position: absolute;
    bottom: -1.5rem;
    left: 0;
  }
`,Pt=t.ul`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 3rem;
`,Et=t.div`
  width: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 3rem;

  &::before {
    content: "";
    width: 100%;
    height: 1px;
    background-color: var(--color-grey-500);
    border-radius: 1px;
    position: absolute;
    top: -1.5rem;
    left: 0;
  }
`,Ft=t.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`,A=t.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;

  >span {
    font-weight: bold;
  }
`,Mt=t(m)`
  width: 100%;
  padding: 10px 20px;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2rem;
  font-weight: bold;
  background-color: var(--color-btn-green);
  color: #efefef;
  box-shadow: var(--shadow-btn-green);

  >svg {
    font-size: 1.8rem;
  }
`;function Ot({closeShoppingCart:n}){const r=p(Se),o=p(U),i=p(Ce),s=l.useRef();return ee(s,n,!0),e.jsxs(Bt,{ref:s,children:[e.jsxs(Ht,{children:[e.jsx("span",{children:"Cart Summry"}),o>0&&e.jsx(Be,{withDispatch:!0,handler:Le,title:"Clear cart"})]}),o>0?e.jsx(Pt,{children:r.map(a=>e.jsx(Dt,{item:a},a.id))}):e.jsx(ut,{closeShoppingCart:n}),o>0&&e.jsxs(Et,{children:[e.jsxs(Ft,{children:[e.jsxs(A,{children:["Items in the cart:",e.jsx("span",{children:o})]}),e.jsxs(A,{children:["Total price:",e.jsx("span",{children:J(i)})]})]}),e.jsxs(Mt,{to:"/checkout",onClick:n,children:[e.jsx(ze,{}),"Checkout"]})]})]})}const Tt=t.header`
  width: calc(100% - 6rem);
  padding: 15px 20px 15px 40px;
  background-color: var(--header-overlay-color);
  backdrop-filter: blur(8px);
  position: fixed;
  top: 0;
  right: 0;
  z-index: 1000;
  transition: var(--main-transition);
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media screen and  (max-width: 767px) {
    padding-left: 30px;
    gap: 1.5rem;
    flex-wrap: wrap;
  }

  &.shrink {
    width: calc(100% - 26rem);
  }
`,Qt=t.span`
  width: 3rem;
  height: 3rem;
  border-radius: 50%;
  position: fixed;
  top: 6rem;
  left: -1.5rem;
  font-weight: bold;
  background-color: var(--color-grey-800);
  color: var(--color-grey-200);
  box-shadow: 0 0 4px 1px var(--color-grey-500);
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: var(--main-transition);
  z-index: 10000;

  &.open {
    >svg {
      transform: rotate(180deg);
    }
  }

  >svg {
    font-size: 1.6rem;
    transition: var(--main-transition);
  }
`,At=t.span`
  display: none;
  align-items: center;
  justify-content: center;

  @media screen and  (max-width: 767px) {
    display: flex;
  }

  >svg {
    font-weight: bold;
    font-size: 1.8rem;
  }
`,Vt=t.div`
  display: flex;
  align-items: center;  
  gap: 1.5rem;
  order: 2;

  @media screen and  (max-width: 767px) {
    gap: 1rem;
    flex: 1;
    justify-content: end;
    order: 1;
  }
`,Wt=t(m)`
  background-color: var(--color-btn-green);
  box-shadow: var(--shadow-btn-green);
  color: #efefef;
  padding: 6px 16px;
  border-radius: 6px;
  font-size: 1.4rem;
  font-weight: bold;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  cursor: pointer;
  transition: var(--main-transition);

  >svg {
    font: 1.8rem;
  }
`;function Gt({isAsideOpen:n,toggleOpenAside:r,handleCloseAside:o,showSerachBar:i,toggleShowSearch:s}){const[a,h]=l.useState(!1),[c,x]=l.useState(!1),g=p(f);function d(){n&&window.innerWidth<=767&&o(),h(y=>!y)}function I(){h(!1)}function v(){n&&window.innerWidth<=767&&o(),x(y=>!y)}function w(){x(!1)}return e.jsxs(Tt,{className:n?"shrink":"",children:[e.jsx(Qt,{onClick:r,className:n?"open":"",children:e.jsx(Ie,{})}),e.jsx(At,{onClick:s,children:e.jsx(X,{})}),e.jsx(xt,{isShow:i}),e.jsxs(Vt,{children:[g?e.jsx(_,{toggleProfileMenu:d}):e.jsxs(Wt,{to:"/auth/login",children:[e.jsx(E,{}),e.jsx("span",{children:"Log in"})]}),e.jsx(qe,{}),e.jsx(Ke,{}),e.jsx(_e,{toggleShoppingCart:v})]}),a&&g&&e.jsx(st,{closeProfileMenu:I}),c&&e.jsx(Ot,{closeShoppingCart:w})]})}function $t(n){return u({tag:"svg",attr:{viewBox:"0 0 320 512"},child:[{tag:"path",attr:{d:"M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"}}]})(n)}function Ut(n){return u({tag:"svg",attr:{viewBox:"0 0 640 512"},child:[{tag:"path",attr:{d:"M386.061 228.496c1.834 9.692 3.143 19.384 3.143 31.956C389.204 370.205 315.599 448 204.8 448c-106.084 0-192-85.915-192-192s85.916-192 192-192c51.864 0 95.083 18.859 128.611 50.292l-52.126 50.03c-14.145-13.621-39.028-29.599-76.485-29.599-65.484 0-118.92 54.221-118.92 121.277 0 67.056 53.436 121.277 118.92 121.277 75.961 0 104.513-54.745 108.965-82.773H204.8v-66.009h181.261zm185.406 6.437V179.2h-56.001v55.733h-55.733v56.001h55.733v55.733h56.001v-55.733H627.2v-56.001h-55.733z"}}]})(n)}function Rt(n){return u({tag:"svg",attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"}}]})(n)}function qt(n){return u({tag:"svg",attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"}}]})(n)}function Xt(n){return u({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z"}}]})(n)}const Yt=t.footer`
  padding: 4rem 0 2rem;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 4rem;
  position: relative;
  box-shadow: 8px 0 4px 2px var(--color-grey-500);
  transition: var(--main-transition);
  margin-top: 8rem;
`,Kt=t.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2rem;
  font-weight: bold;
  color: var(--color-grey-900);
  position: relative;

  >span {
    display: inline-block;
    font-size: 2.2rem;
  }
`,Zt=t.img`
  display: block;
  max-width: 2.6rem;
  transition: var(--main-transition);
  filter: drop-shadow(0 1px 2px var(--color-grey-500));
`,Jt=t.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
  position: relative;
`,_t=t.textarea`
  width: 40%;
  min-height: 10rem;
  padding: 12px;
  border-radius: 8px;
  box-shadow: 0 0 2px 1px var(--color-grey-500);
  background-color: #efefef;
  color: #000;
  border: none;
  outline: none;
  resize: none;
  transition: var(--main-transition);
  
  @media (min-width: 768px) and (max-width: 991px) {
    width: 60%;
  }

  @media screen and (max-width: 767px) {
    width: 80%;
  }

  &:focus {
    box-shadow: 0 0 6px 1px var(--color-grey-500);
  }
`,en=t.button`
  width: 40%;
  padding: 8px 12px;
  border-radius: 8px;
  transition: var(--main-transition);
  background-color: var(--color-btn-green);
  box-shadow: var(--shadow-btn-green);
  color: #efefef;
  transition: var(--main-transition);
  font-size: 1.6rem;
  font-weight: bold;
  cursor: pointer;

  @media (min-width: 768px) and (max-width: 991px) {
    width: 60%;
  }

  @media screen and (max-width: 767px) {
    width: 80%;
  }
`,tn=t.div`
  width: 100%;
  padding: 0 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  gap: 3rem;
  position: relative;
  transition: var(--main-transition);

  @media screen and (max-width: 767px) {
    gap: 2rem;
  }
`,C=t(m)`
  width: 3rem;
  height: 3rem;
  border-radius: 1rem;
  color: #efefef;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: var(--main-transition);

  &.google {
    background-color: #db4437;
    box-shadow: 0 0 4px 2px #db4437;
  }

  &.facebook {
    background-color: #1877f2;
    box-shadow: 0 0 4px 2px #1877f2;
  }

  &.twitter {
    background-color: #1da1f2;
    box-shadow: 0 0 4px 2px #1da1f2;
  }

  &.whatsapp {
    background-color: #25d366;
    box-shadow: 0 0 4px 2px #25d366;
  }

  &.instagram {
    background-color: #c32aa3;
    box-shadow: 0 0 4px 2px #c32aa3;
  }

  &:hover {
    transform: scale(1.1);
  }

  >svg {
    font-size: 2.2rem;
  }
`,nn=t.div`
  width: 100%;
  padding: 0 2rem;
  margin-top: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  gap: 0.6rem;

  &::before {
    content: "";
    width: 100%;
    height: 1px;
    border-radius: 1px;
    background-color: var(--color-grey-400);
    position: absolute;
    top: -1.5rem;
    left: 0;
  }

  >svg {
    color: var(--color-btn-red);
  }
`;function rn(){const{isDark:n}=H();function r(o){o.preventDefault()}return e.jsxs(Yt,{children:[e.jsxs(Kt,{children:[e.jsx(Zt,{src:n?Y:K,alt:"Shoopy Logo"}),e.jsx("span",{children:"Shoppy"})]}),e.jsxs(Jt,{onSubmit:r,children:[e.jsx(_t,{name:"feedback",placeholder:"Please! Let us know your feedback..."}),e.jsx(en,{type:"submit",children:"Send"})]}),e.jsxs(tn,{children:[e.jsx(C,{className:"google",children:e.jsx(Ut,{})},"google"),e.jsx(C,{className:"facebook",children:e.jsx($t,{})},"facebook"),e.jsx(C,{className:"twitter",children:e.jsx(Xt,{})},"twitter"),e.jsx(C,{className:"instagram",children:e.jsx(Rt,{})},"instagram"),e.jsx(C,{className:"whatsapp",children:e.jsx(qt,{})},"whatsapp")]}),e.jsx(nn,{children:"Copyright © 2024, Shoppy. Designed by Ahmed Abd El-Ghany."})]})}const on=t.button`
  width: 4rem;
  height: 4rem;
  border-radius: 50%;
  background-color: var(--color-grey-600);
  color: var(--color-grey-200);
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  bottom: 2rem;
  right: 0;
  box-shadow: 0 0 2px 2px var(--color-grey-200);
  transition: var(--main-transition);
  z-index: 10000000;
  cursor: pointer;

  &.show {
    right: 2rem;
  }
  
  >svg {
    font-size: 2rem;
    font-weight: bold;
  }

  &:hover {
    background-color: var(--color-grey-800);
  }
`;function an(){const[n,r]=l.useState(!1);l.useEffect(()=>{const i=()=>{r(window.scrollY>600)};return window.addEventListener("scroll",i),()=>{window.removeEventListener("scroll",i)}},[]);function o(){window.scrollTo({top:0,behavior:"smooth"})}return n?e.jsx(on,{onClick:o,className:n?"show":"",children:e.jsx(Ne,{})}):null}const sn=t.div`
  width: 100%;
  min-height: 100vh;
  overflow: hidden;
  position: relative;
  transition: var(--main-transition);
`,ln=t.div`
  width: calc(100% - 26rem);
  padding-top: 6rem;
  min-height: 100vh;
  position: relative;
  left: 26rem;

  &.full {
    width: calc(100% - 6rem);
    left: 6rem;
  }

  @media screen and (max-width: 767px) {
    &.grow {
      padding-top: 8rem;
    }
  }
`;function vn({children:n}){const[r,o]=l.useState(!1),[i,s]=l.useState(!1);function a(){o(x=>!x)}function h(){o(!1)}function c(){s(x=>!x),!i&&r&&h()}return e.jsxs(sn,{children:[e.jsx(Ue,{isAsideOpen:r,toggleOpenAside:a}),e.jsxs(ln,{className:`
          ${r?"":"full"}
          ${i?"grow":""}
        `,children:[e.jsx(Gt,{isAsideOpen:r,toggleOpenAside:a,handleCloseAside:h,showSerachBar:i,toggleShowSearch:c}),n,e.jsx(rn,{}),e.jsx(an,{})]})]})}export{vn as default};

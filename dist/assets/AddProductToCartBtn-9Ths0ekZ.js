import{u as r,r as h,j as t,f as m,g,q as f,af as v,a as p,T as y,ag as w,ah as j,ai as I,a3 as P,a4 as C,Y as S,aj as k,a5 as N,a6 as B}from"./index-tiG3UDW2.js";const Q=r.div`
  position: relative;
  transition: var(--main-transition);
`,W=r.img`
  height: 100%;
  object-fit: cover;
  transition: var(--main-transition);
`,E=r.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  position: absolute;
  left: 2px;
  bottom: 2px;
  transition: var(--main-transition);
  
  &.small {
    gap: 0.6rem;
  }
`,T=r.img`
  width: 3rem;
  height: 4rem;
  border-radius: 8px;
  box-shadow: 0 0 4px 2px #333;
  transition: var(--main-transition);
  cursor: pointer;
  transition: var(--main-transition);
  
  &.active {
    box-shadow: 0 0 1px 2px #000;
  }

  &.small {
    width: 2rem;
    height: 2rem;
    border-radius: 4px;
    box-shadow: 0 0 2px 2px #333;
  }
`;function G({images:a,title:n,size:e}){const[s,i]=h.useState(a?a[0]:null),[l,d]=h.useState(!1);function c(o){i(o.target.src)}function u(){d(!0)}return t.jsx(Q,{children:!l&&t.jsxs(t.Fragment,{children:[t.jsx(W,{src:s,alt:n,onError:u}),a.length>1&&t.jsx(E,{className:e==="small"?"small":"",children:a.map(o=>t.jsx(T,{src:o,alt:n,onClick:c,className:`
                    ${s===o?"active":""}
                    ${e==="small"?"small":""}
                  `},o))})]})})}const $=r.span`
  width: 3.2rem;
  height: 3.2rem;
  border-radius: 1rem;
  position: absolute;
  top: 1rem;
  right: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #efefef;
  box-shadow: 0 0 4px 2px #fff;
  color: #333;
  transition: var(--main-transition);
  z-index: 999;
  cursor: pointer;

  &.marked {
    color: var(--color-btn-red);
  }

  &.small {
    width: 2.4rem;
    height: 2.4rem;
    border-radius: 0.7rem;
    box-shadow: 0 0 4px 2px #fff;

    >svg {
    font-size: 2rem;
  }
  }

  >svg {
    font-size: 2.4rem;
  }
`;function O({product:a,size:n}){const e=m(g),s=f(),i=m(v(a.id)),l=p();function d(){if(e){const c={...a,userId:e.id};s(i?w(c):j(c))}else l("/auth/login")}return t.jsx($,{className:`
          ${i?"marked":""}
          ${n==="small"?"small":""}
        `,onClick:d,children:t.jsx(y,{})})}const A=r.div`
  width: 100%;
  padding: 20px 15px 30px;
  display: flex;
  align-items: end;
  justify-content: center;
  transition: var(--main-transition);

  &.small {
    padding: 0 1rem;
  }
`,H=r.button`
  width: 90%;
  padding: 8px 12px;
  border-radius: 8px;
  background-color: var(--color-btn-green);
  box-shadow: var(--shadow-btn-green);
  color: #efefef;
  font-size: 1.6rem;
  font-weight: bold;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  gap: 1rem;
  cursor: pointer;
  transition: var(--main-transition);

  &.small {
    width: 100%;
    padding: 8px 2px;
    font-size: 1.2rem;
    gap: 0.5rem;
  }
`,q=r.div`
  width: 90%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1.5rem;
  transition: var(--main-transition);
`,x=r.button`
  width: 2.4rem;
  height: 2.4rem;
  border-radius: 0.8rem;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: var(--main-transition);
  color: #efefef;

  &.small {
    width: 2rem;
    height: 2rem;
    border-radius: 0.6rem;
  }

  &.increase {
    background-color: var(--color-btn-green);
    box-shadow: var(--shadow-btn-green);
  }

  &.decrease {
    background-color: var(--color-btn-red);
    box-shadow: var(--shadow-btn-red);
  }
`,D=r.span`
  font-weight: bold;
  transition: var(--main-transition);
`;function V({product:a,size:n}){const e=m(g),s=f(),i=m(I(a==null?void 0:a.id)),l=i>0,d=p();function c(){if(e){const b={...a,userId:e==null?void 0:e.id,quantity:1,totalPrice:a.price*1};l||s(k(b))}else d("/auth/login")}function u(){s(N(a.id))}function o(){s(B(a.id))}return t.jsx(A,{className:n==="small"?"small":"",children:l?t.jsxs(q,{className:n==="small"?"small":"",children:[t.jsx(x,{onClick:o,className:`decrease
              ${n==="small"?"small":""}
            `,children:t.jsx(P,{})}),t.jsx(D,{className:n==="small"?"small":"",children:i}),t.jsx(x,{onClick:u,className:`increase
              ${n==="small"?"small":""}
            `,children:t.jsx(C,{})})]}):t.jsxs(H,{onClick:c,className:n==="small"?"small":"",children:[t.jsx(S,{}),t.jsx("span",{children:"Add to cart"})]})})}export{V as A,O as P,G as a};

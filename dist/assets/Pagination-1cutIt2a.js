import{u as o,d as u,j as r,P as c,at as y,au as b,av as j,H as w}from"./index-tiG3UDW2.js";const P=o.div`
  margin: 40px 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 4rem;
  transition: var(--main-transition);

  @media screen and (max-width: 767px) {
    justify-content: center;
  }

  >span {
    cursor: pointer;
  }
`,N=o.div`
  transition: var(--main-transition);

  >span {
    font-weight: bold;
  }
`,d=o.span`
  padding: 6px 16px;
  border-radius: 6px;
  background-color: var(--color-grey-800);
  color: var(--color-grey-100);
  box-shadow: 0 0 2px 1px var(--color-grey-500);
  font-size: 1.4rem;
  font-weight: bold;
  outline: none;
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  transition: var(--main-transition);

  @media screen and (max-width: 767px) {
    padding: 6px 12px;
  }

  &.disabled {
    background-color: var(--color-grey-600);
    cursor: not-allowed;
  }

  >svg {
    font-size: 1.6rem;
  }
`,k=o.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 1.5rem;

`,C=o.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  transition: var(--main-transition);

  >span {
    display: inline-block;
  }

  &.shrink {
    >span {
      display: none;
    }

    >span:first-child, 
    >span:last-child,
    >span.show {
      display: inline-block;
    }
  }
`,H=o.span`
  padding: 6px;
  border-radius: 4px;
  color: var(--color-grey-900);
  cursor: pointer;
  transition: var(--main-transition);
  font-size: 1.4rem;
  display: flex;
  align-items: center;
  justify-content: center;
  
  &.active,
  &:hover {
    color: var(--color-grey-100);
    box-shadow: 0 0 2px 2px var(--color-grey-500);
    font-weight: bold;

    >svg {
      color: var(--color-grey-100);
    }
  }
  
  &.active {
    background-color: var(--color-grey-600);
  }
  
  &:hover {
    background-color: var(--color-grey-800);
  }

  >svg {
    color: var(--color-grey-900);
    font-size: 1.6rem;
    font-weight: bold;
  }
`;function z({length:h,count:l}){const[t,m]=u(),a=t.get("page")?Number(t.get("page")):1,e=Math.ceil(l/c),p=a<e,g=a>1;function i(s){t.set("page",s),m(t)}function v(s){s!==a&&i(s)}function x(){g&&i(a-1)}function f(){p&&i(a+1)}return r.jsxs(P,{children:[r.jsxs(N,{children:["Items from ",r.jsxs("span",{children:[(a-1)*c+1," "]}),"to ",r.jsxs("span",{children:[h<c?l:a*c," "]}),"of ",r.jsx("span",{children:l})]}),r.jsxs(k,{children:[r.jsxs(d,{className:g?"":"disabled",onClick:()=>{x()},children:[r.jsx(y,{}),"prev"]}),r.jsx(C,{className:e>5?"shrink":"",children:Array.from({length:e},(s,n)=>r.jsx(H,{className:`
                ${n+2===a?"show":""}
                ${n+1===a?"active show":""}
                ${n+1===a+1&&n+1<e?"show":""}
              `,onClick:()=>{v(n+1),i(n+1)},children:n+1===1&&a>2?r.jsx(b,{}):n+1===e&&a<e-1?r.jsx(j,{}):n+1},n+1))}),r.jsxs(d,{className:p?"":"disabled",onClick:()=>{f()},children:["next",r.jsx(w,{})]})]})]})}export{z as P};

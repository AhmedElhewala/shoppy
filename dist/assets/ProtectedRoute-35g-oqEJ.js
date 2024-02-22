import{u as o,a,j as r,b as s,c,f as l,g as d,aa as g}from"./index-tiG3UDW2.js";const u=o.div`
  min-height: 80vh;
  width: 100%;
  color: var(--color-grey-900);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 3rem;
`,x=o(s)`
  font-weight: bold;
  font-size: 6rem;
`,m=o.div`
  font-size: 1.6rem;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 2rem;
`,n=o.p`
  margin: 0;
`,h=o.button`
  font-weight: bold;
  display: flex;
  align-items: center;
  gap: 3px;
  margin-top: 5px;
  padding: 1rem 5rem;
  background-color: var(--color-grey-900);
  color: var(--color-grey-0);
  border-radius: 10px;
  cursor: pointer;
  box-shadow: 0 2px 5px 1px var(--color-grey-700);
  transition: var(--main-transition);
  &:hover {
    transform: scale(1.05);
  }
  &>span {
    transition: var(--main-transition);
  }
`,p=o(c)`
  transition: var(--main-transition);
  font-weight: bold;
  font-size: 1.8rem;
`;function f(){const e=a();return r.jsxs(u,{children:[r.jsx(x,{}),r.jsxs(m,{children:[r.jsx(n,{children:"Oh, Sorry! you are not allowed to reach this route."}),r.jsx(n,{children:"Please! Go Back and go to the authorized routes 😃"}),r.jsxs(h,{onClick:()=>e(-1),children:[r.jsx(p,{}),r.jsx("span",{children:"Back"})]})]})]})}function v({children:e,authorizeRole:i}){const t=l(d);return t?i.includes(t==null?void 0:t.role)?e:r.jsx(f,{}):r.jsx(g,{to:"/auth/login"})}export{v as default};

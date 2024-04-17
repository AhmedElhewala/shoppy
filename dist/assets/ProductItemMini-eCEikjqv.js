import{u as o,j as r,L as x}from"./index-gK2J3_II.js";import{f as p}from"./helpers-o6nrGciX.js";import{P as m,a as g,A as u}from"./AddProductToCartBtn-aujmzxQ9.js";const y=o.div`
  background-color: var(--color-grey-300);
  color: var(--color-grey-900);
  box-shadow: 0 0 4px 2px var(--color-grey-500);
  position: relative;
  display: flex;
  flex-direction: column;
  border-radius: 8px;
  overflow: hidden;
  cursor: pointer;
  transition: var(--main-transition);

  &:hover {
    transform: scale(1.05);
  }
`,f=o.div`
  width: 100%;
  padding: 20px 15px;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  transition: var(--main-transition);
`,h=o.h3`
  font-size: 2rem;
`,v=o.p`
  font-size: 1.4rem;
  line-height: 1.4;
  transition: var(--main-transition);
`,P=o.div`
  padding: 20px 15px;
  flex: 1;
  width: 100%;
  display: flex;
  align-items: end;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 2rem;
  position: relative;
  transition: var(--main-transition);
`,j=o(x)`
  padding: 6px 18px;
  border-radius: 6px;
  background-color: var(--color-grey-700);
  color: var(--color-grey-100);
  box-shadow: 0 0 4px 2px var(--color-grey-500);
  font-size: 1.4rem;
  transition: var(--main-transition);
`,w=o.span`
  font-weight: bold;
`;function k({product:t}){const{title:i,description:e,images:n,id:a,price:s,category:d}=t,{id:c,name:l}=d;return r.jsxs(y,{children:[r.jsx(m,{product:t}),r.jsx(g,{title:i,images:n},a),r.jsxs(f,{children:[r.jsx(h,{children:i}),r.jsx(v,{children:e})]}),r.jsxs(P,{children:[r.jsx(j,{to:`/category/${c}`,children:l}),r.jsx(w,{children:p(s)})]}),r.jsx(u,{product:t})]})}export{k as P};

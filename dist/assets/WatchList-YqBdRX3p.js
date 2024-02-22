import{u as i,j as t,L as n,f as o,k as r,l,m as c}from"./index-tiG3UDW2.js";import{P as d}from"./ProductItemMini-OZXsAvuE.js";import{D as p}from"./DeleteButton-kkgkaWG_.js";import"./helpers-o6nrGciX.js";import"./AddProductToCartBtn-9Ths0ekZ.js";const m=i.div`
  width: 100%;
  margin-bottom: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4rem;
  position: relative;
`,h=i.p`
  line-height: 1.6;
  font-weight: bold;
`,u=i(n)`
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
`;function x(){return t.jsxs(m,{children:[t.jsx(h,{children:"Your watch list still empty, please go add some items 😀"}),t.jsx(u,{to:"/product",children:"Go to products"})]})}const g=i.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 4rem;
`,y=i.div`
  width: 100%;
  gap: 4rem;
  justify-content: space-around;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(30%, 1fr));
  
  @media screen and (max-width: 767px) {
    grid-template-columns: repeat(auto-fill, 100%);
  }
`,f=i.div`
  width: 100%;
  display: flex;
  align-items: center;
  gap: 2rem;
  justify-content: space-between;
  position: relative;
`,j=i.h3`
  margin-bottom: 2rem;

  >span {
    font-weight: bold;
  }
`;function w(){const a=o(r),e=o(l);return t.jsxs(g,{children:[t.jsxs(f,{children:[t.jsxs(j,{children:["You have ",t.jsx("span",{children:e})," product",e>1?"s":""," in your watch list."]}),e>0&&t.jsx(p,{withDispatch:!0,handler:c,title:"Clear list"})]}),e>0?t.jsx(y,{children:a.map(s=>t.jsx(d,{product:s},s.id))}):t.jsx(x,{})]})}const v=i.div`
  width: 100%;
  padding: 40px;
  padding-bottom: 80px;
  min-height: 90vh;
  position: relative;
`;function k(){return t.jsx(v,{children:t.jsx(w,{})})}export{k as default};

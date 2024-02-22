import{u as n,r as c,j as e,H as m,L as p}from"./index-tiG3UDW2.js";import{u}from"./useCategoryList-nsH0OpGC.js";import{u as h}from"./useQuery-eENayJcY.js";import{f}from"./apiProduct-il8IqXCH.js";import{P as g,a as x,A as y}from"./AddProductToCartBtn-9Ths0ekZ.js";import{f as v}from"./helpers-o6nrGciX.js";import"./apiCategory-e7eLQlsh.js";import"./utils-1RRThafF.js";function b(t,r){const{isLoading:a,data:i,error:l}=h({queryKey:[`sampleCategoryProducts${t}`,t,r],queryFn:()=>f(t,r)}),s=i==null?void 0:i.count,d=i==null?void 0:i.products;return{isLoading:a,products:d,error:l,count:s}}const j=n.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  position: relative;
  transition: var(--main-transition);
`,w=n(p)`
  display: flex;
  align-items: center;
  gap: 1rem;
  font-weight: bold;
  font-size: 1.8rem;
  transition: var(--main-transition);

  >svg {
    font-size: 2rem;
  }
`,P=n.div`
  padding: 0.8rem;
  width: 100%;
  display: flex;
  gap: 1.5rem;
  position: relative;
  overflow-x: auto;

  &::-webkit-scrollbar {
    width: 0;
    display: none;
  }
  &::-webkit-scrollbar-horizontal {
    height: 0;
  }
`,S=n.div`
  width: 18rem;
  min-height: 10rem;
  padding-bottom: 2rem;
  border-radius: 6px;
  background-color: var(--color-grey-300);
  color: var(--color-grey-800);
  box-shadow: 0 0 4px 2px var(--color-grey-500);
  position: relative;
  flex-shrink: 0;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  overflow: hidden;
  transition: var(--main-transition);
`,C=n.h4`
  padding: 0 1rem;
  margin: 1rem 0;
  font-size: 1.4rem;
`,z=n.span`
  width: 100%;
  padding: 0 1rem;
  font-size: 1.4rem;
  font-weight: bold;
  flex: 1;
  display: flex;
  align-items: end;
  justify-content: end;
`;function H({category:t}){const{id:r,name:a}=t,{products:i,count:l}=b(r,0),s=c.useRef(),d=o=>{o.stopPropagation(),s.current.scrollLeft+=o.deltaY};return e.jsxs(j,{children:[e.jsxs(w,{to:`/category/${r}`,children:[a,e.jsx(m,{})]}),e.jsx(P,{onWheel:d,ref:s,children:l>0&&i.map(o=>e.jsxs(S,{children:[e.jsx(g,{product:o,size:"small"}),e.jsx(x,{images:o.images,title:o.title,size:"small"},o.id),e.jsx(C,{children:o.title}),e.jsx(z,{children:v(o.price)}),e.jsx(y,{product:o,size:"small"})]},o.id))})]})}const k=n.main`
  width: 100%;
  padding: 40px 40px 80px;
  min-height: 90vh;
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 4rem;
`,L=n.h1`
  width: 100%;
  margin-bottom: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  font-size: 2.2rem;
  position: relative;
  filter: drop-shadow(0 0 1px var(--color-grey-600));

  &::after {
    content: "";
    width: 100%;
    height: 1px;
    border-radius: 1px;
    background-color: var(--color-grey-400);
    position: absolute;
    bottom: -2rem;
    left: 0;
  }

  >svg {
    color: var(--color-btn-red);
    filter: drop-shadow(0 0 1px var(--color-btn-red));
  }
`;function $(){const{categories:t}=u();return e.jsxs(k,{children:[e.jsx(L,{children:"Shop at home, hope you find your needs ❤"}),(t==null?void 0:t.length)>0&&t.map(r=>e.jsx(H,{category:r},r.id))]})}export{$ as default};

import{i as y,d as l,P as p,u,j as t,r as x}from"./index-gK2J3_II.js";import{u as P}from"./useQuery-h9sTdRQf.js";import{a as d}from"./apiProduct-1-Ok6Rb-.js";import{S}from"./Spinner-fJObtOIq.js";import{P as j}from"./ProductItemMini-eCEikjqv.js";import{E as q}from"./EmptySection-aXdFFGY5.js";import{P as w}from"./Pagination-vhsxsz_6.js";import"./utils-1RRThafF.js";import"./helpers-o6nrGciX.js";import"./AddProductToCartBtn-aujmzxQ9.js";function E(){const s=y(),[e]=l(),o=e.get("page")?Number(e.get("page")):1,r=e.get("title")&&e.get("title"),n=e.get("categoryId")&&e.get("categoryId"),i=(o-1)*p,{isLoading:c,data:a,error:h}=P({queryKey:["productsSearch",i,r,n],queryFn:()=>d(i,r,n)}),m=a==null?void 0:a.count,g=a==null?void 0:a.products,f=Math.ceil(m/p);return o<f&&s.prefetchQuery({queryKey:["productsSearch",i+1,r,n],queryFn:()=>d(i+1,r,n)}),o>0&&s.prefetchQuery({queryKey:["productsSearch",i-1,r,n],queryFn:()=>d(i-1,r,n)}),{isLoading:c,products:g,count:m,error:h}}const I=u.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 4rem;
`,b=u.div`
  width: 100%;
  gap: 4rem;
  justify-content: space-around;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(30%, 1fr));
  
  @media screen and (max-width: 767px) {
    grid-template-columns: repeat(auto-fill, 100%);
  }
`,v=u.h3`
  margin-bottom: 2rem;
  >span {
    font-weight: bold;
  }
`;function C(){const{isLoading:s,products:e,count:o}=E(),[r]=l(),n=Number(r.get("page")),i=r.get("title")&&r.get("title");return s||!e?t.jsx(S,{}):t.jsxs(I,{children:[t.jsxs(v,{children:["Found ",t.jsx("span",{children:o})," result",o>1?"s":""," about ",t.jsx("span",{children:i})]}),e.length>0?t.jsx(b,{children:e.map(c=>t.jsx(j,{product:c},c.id))}):t.jsx(q,{children:"There is no products with this title, please try  something else..."}),!(n==1&&o<=p)&&t.jsx(w,{length:e.length,count:o})]})}const L=u.div`
  width: 100%;
  padding: 40px 40px 60px;
  min-height: 90vh;
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 4rem;
`;function _(){const[s,e]=l();return x.useEffect(()=>{s.get("page")||(s.set("page",1),e(s))},[s,e]),t.jsx(L,{children:t.jsx(C,{})})}export{_ as default};

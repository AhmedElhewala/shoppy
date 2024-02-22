import{u as H}from"./useQuery-eENayJcY.js";import{i as R,d as k,P as I,u as l,r as x,j as t,am as D,_ as L}from"./index-tiG3UDW2.js";import{e as M}from"./apiProduct-il8IqXCH.js";import{u as J}from"./useCategoryList-nsH0OpGC.js";function te(){const e=R(),[i]=k(),u=i.get("page")?Number(i.get("page")):1,n=i.get("price")&&Number(i.get("price")),a=i.get("price_min")&&Number(i.get("price_min")),o=i.get("price_max")&&Number(i.get("price_max")),s=i.get("title")&&i.get("title"),d=i.get("categoryId")&&i.get("categoryId"),p=(u-1)*I,{isLoading:h,data:c,error:m}=H({queryKey:["productsList",p,n,a,o,s,d],queryFn:()=>M(p,n,a,o,s,d)}),f=c==null?void 0:c.count,g=c==null?void 0:c.products,v=Math.ceil(f/I);return u<v&&e.prefetchQuery({queryKey:["productsList",p+1,n,a,o,s,d],queryFn:()=>M(p+1,n,a,o,s,d)}),u>0&&e.prefetchQuery({queryKey:["productsList",p-1,n,a,o,s,d],queryFn:()=>M(p-1,n,a,o,s,d)}),{isLoading:h,products:g,count:f,error:m}}const U=l.div`
  width: 100%;
  display: flex;
  align-items: start;
  gap: 2rem;
`,V=l.span`
  width: 3rem;
  height: 3rem;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  top: 2.5rem;
  transition: var(--main-transition);
  cursor: pointer;

  >svg {
    font-size: 2.6rem;
    transform: rotate(90deg);
  }
`,W=l.div`
  flex: 1;
  display: flex;
  align-items: end;
  flex-wrap: wrap;
  gap: 2rem;
  justify-content: center;
  transition: var(--main-transition);
`,b=l.div`
  width: 18%;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  transition: var(--main-transition);

  @media screen and (max-width: 480px) {
    width: 100%;
  }

  @media (min-width: 481px) and (max-width: 767px) {
    width: 45%;
  }
`,j=l.label`
  font-size: 1.4rem;
`,C=l.input`
  max-width: 100%;
  padding: 6px 12px;
  border-radius: 6px;
  outline: none;
  border: none;
  background-color: #efefef;
  box-shadow: 0 0 2px 1px var(--color-grey-500);
  transition: var(--main-transition);
`,X=l.select`
  width: 100%;
  padding: 6px 12px;
  border-radius: 6px;
  outline: none;
  border: none;
  background-color: #efefef;
  box-shadow: 0 0 2px 1px var(--color-grey-500);
  transition: var(--main-transition);
  cursor: pointer;
`,N=l.option`

`,q=l.button`
  width: 15%;
  padding: 7px 12px;
  border-radius: 7px;
  outline: none;
  border: none;
  font-weight: bold;
  color: #efefef;
  background-color: var(--color-btn-green);
  box-shadow: var(--shadow-btn-green);
  transition: var(--main-transition);
  cursor: pointer;

  
  @media screen and (max-width: 480px) {
    width: 100%;
  }

  @media (min-width: 481px) and (max-width: 767px) {
    width: 20%;
  }
`;function re(){const[e,i]=k(),u=e.get("price")?Number(e.get("price")):"",n=e.get("price_min")?Number(e.get("price_min")):"",a=e.get("price_max")?Number(e.get("price_max")):"",o=e.get("title")?e.get("title"):"",s=e.get("categoryId")?Number(e.get("categoryId")):"",[d,p]=x.useState(!1),[h,c]=x.useState(u),[m,f]=x.useState(n),[g,v]=x.useState(a),[P,S]=x.useState(o),[A,_]=x.useState(s),{categories:F}=J();function T(){p(r=>!r)}function B(r){c(r.target.value)}function Q(r){f(r.target.value)}function E(r){v(r.target.value)}function K(r){S(r.target.value)}function z(r){const y=r.target.value;_(y),y?e.set("categoryId",y):e.delete("categoryId"),e.set("page",1),i(e)}function w(r,y){e.set(r,y),e.set("page",1)}function O(){h&&w("price",+h),m&&(g?w("price_min",+m):L("please add the max price",{icon:"⚠"})),g&&(m?w("price_max",+g):L("please add the min price",{icon:"⚠"})),P&&w("title",P),i(e)}function G(){u&&(c(""),e.delete("price")),n&&(f(""),e.delete("price_min")),a&&(v(""),e.delete("price_max")),o&&(S(""),e.delete("title")),s&&(_(""),e.delete("categoryId")),i(e)}return t.jsxs(U,{children:[t.jsx(V,{onClick:T,children:t.jsx(D,{})}),t.jsx(W,{children:d&&t.jsxs(t.Fragment,{children:[t.jsxs(b,{children:[t.jsx(j,{htmlFor:"price",children:"Price"}),t.jsx(C,{type:"number",id:"price",value:h,onChange:B,placeholder:"Price"})]}),t.jsxs(b,{children:[t.jsx(j,{htmlFor:"priceMin",children:"Minimum price"}),t.jsx(C,{type:"number",id:"priceMin",value:m,onChange:Q,placeholder:"Minimum price"})]}),t.jsxs(b,{children:[t.jsx(j,{htmlFor:"priceMax",children:"Maximum price"}),t.jsx(C,{type:"number",id:"priceMax",value:g,onChange:E,placeholder:"Maximum price"})]}),t.jsxs(b,{children:[t.jsx(j,{htmlFor:"title",children:"Title"}),t.jsx(C,{type:"text",id:"title",value:P,onChange:K,placeholder:"Title"})]}),t.jsxs(b,{children:[t.jsx(j,{htmlFor:"category",children:"Category"}),t.jsx(X,{id:"category",name:"category",value:A,onChange:z,children:t.jsxs("optgroup",{label:"Category",children:[t.jsx(N,{value:"",children:"All"},"all"),F&&F.length>0&&F.map(r=>t.jsx(N,{value:r.id,children:r.name},r.id))]})})]}),t.jsx(q,{onClick:O,children:"Apply"}),t.jsx(q,{onClick:G,children:"Clear"})]})})]})}export{re as F,te as u};

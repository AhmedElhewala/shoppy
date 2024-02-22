import{i as f,h,d,P as u,u as p,j as o}from"./index-tiG3UDW2.js";import{u as P}from"./useQuery-eENayJcY.js";import{b as c}from"./apiProduct-il8IqXCH.js";import{S as x}from"./Spinner-DmyEU9UC.js";import{P as j}from"./Pagination-1cutIt2a.js";import{E as q}from"./EmptySection-ie_dkvc0.js";import{P as C}from"./ProductItemMini-OZXsAvuE.js";import"./utils-1RRThafF.js";import"./helpers-o6nrGciX.js";import"./AddProductToCartBtn-9Ths0ekZ.js";function S(){const i=f(),{id:t}=h(),[s]=d(),n=s.get("page")?Number(s.get("page")):1,r=(n-1)*u,{isLoading:a,data:e,error:y}=P({queryKey:["categoryProducts",t,r],queryFn:()=>c(t,r)}),m=e==null?void 0:e.count,g=e==null?void 0:e.products,l=Math.ceil(m/u);return n<l&&i.prefetchQuery({queryKey:["categoryProducts",t,r+1],queryFn:()=>c(t,r+1)}),n>0&&i.prefetchQuery({queryKey:["categoryProducts",t,r-1],queryFn:()=>c(t,r-1)}),{isLoading:a,products:g,error:y,count:m}}const w=p.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 4rem;
`,L=p.div`
  width: 100%;
  gap: 4rem;
  justify-content: space-around;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(30%, 1fr));
  
  @media screen and (max-width: 767px) {
    grid-template-columns: repeat(auto-fill, 100%);
  }
`;function A(){const{isLoading:i,products:t,count:s}=S(),[n]=d(),r=Number(n.get("page"));return i||!t?o.jsx(x,{}):o.jsxs(w,{children:[t.length>0?o.jsx(L,{children:t.map(a=>o.jsx(C,{product:a},a.id))}):o.jsx(q,{children:"There is no products with in this category right now, you can try another category"}),!(r==1&&s<=u)&&o.jsx(j,{length:t.length,count:s})]})}export{A as default};

import{u as e,d as a,j as t,P as c,r as d}from"./index-tiG3UDW2.js";import{u as p,F as u}from"./Filter-pwl1sDbc.js";import{S as l}from"./Spinner-DmyEU9UC.js";import{P as h}from"./Pagination-1cutIt2a.js";import{E as f}from"./EmptySection-ie_dkvc0.js";import{P as x}from"./ProductItemMini-OZXsAvuE.js";import"./useQuery-eENayJcY.js";import"./utils-1RRThafF.js";import"./apiProduct-il8IqXCH.js";import"./useCategoryList-nsH0OpGC.js";import"./apiCategory-e7eLQlsh.js";import"./helpers-o6nrGciX.js";import"./AddProductToCartBtn-9Ths0ekZ.js";const g=e.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 4rem;
`,P=e.div`
  width: 100%;
  gap: 4rem;
  display: grid;
  justify-content: space-around;
  grid-template-columns: repeat(auto-fill, minmax(30%, 1fr));
  
  @media screen and (max-width: 767px) {
    grid-template-columns: repeat(auto-fill, 100%);
  }
`;function j(){const{isLoading:i,products:r,count:s}=p(),[n]=a(),m=Number(n.get("page"));return i||!r?t.jsx(l,{}):t.jsxs(g,{children:[t.jsx(u,{}),r.length>0?t.jsx(P,{children:r.map(o=>t.jsx(x,{product:o},o.id))}):t.jsx(f,{children:"There is no products with this filtration, you can try another filter"}),!(m==1&&s<=c)&&t.jsx(h,{length:r.length,count:s})]})}const y=e.div`
  width: 100%;
  padding: 40px;
  min-height: 90vh;
  position: relative;
`;function N(){const[i,r]=a();return d.useEffect(()=>{i.get("page")||(i.set("page",1),r(i))},[i,r]),t.jsx(y,{children:t.jsx(j,{})})}export{N as default};

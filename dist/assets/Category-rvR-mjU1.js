import{u as o,j as r,N as d,h as l,a as p,d as g,r as n,O as m}from"./index-tiG3UDW2.js";import{u as c}from"./useCategoryList-nsH0OpGC.js";import"./useQuery-eENayJcY.js";import"./utils-1RRThafF.js";import"./apiCategory-e7eLQlsh.js";const x=o.div`
  width: 100%;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  justify-content: center;
  gap: 2rem;
  margin-bottom: 2rem;
  position: relative;
`,f=o(d)`
  padding: 8px 20px;
  border-radius: 8px;
  background-color: var(--color-grey-600);
  color: var(--color-grey-100);
  box-shadow: 0 0 2px 2px var(--color-grey-500);
  transition: var(--main-transition);
  font-size: 1.4rem;
  font-weight: bold;
  display: flex;
  align-items: center;
  justify-content: center;

  @media screen and (max-width: 767px) {
    flex: 1;
  }

  &:hover {
    transform: scale(1.05);
  }

  &.active,
  &:hover {
    background-color: var(--color-grey-900);
  }
`;function u(){const{categories:t}=c();return r.jsx(x,{children:(t==null?void 0:t.length)>0&&t.map(e=>r.jsx(f,{to:`/category/${e.id}`,children:e.name},e.id))})}const h=o.div`
  width: 100%;
  padding: 40px;
  min-height: 90vh;
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 4rem;
`;function b(){const{id:t}=l(),{categories:e}=c(),i=p(),[a,s]=g();return n.useEffect(()=>{!t&&e&&e.length>0&&i(`/category/${e[0].id}`)},[t,e,i]),n.useEffect(()=>{a.get("page")||(a.set("page",1),s(a))},[a,s]),r.jsxs(h,{children:[r.jsx(u,{}),r.jsx(m,{})]})}export{b as default};

import{i as y,_ as g,u as o,r as u,j as e,A as $,B as H,S as M,E as O,J as T,o as _,al as Q,d as q,P as x}from"./index-gK2J3_II.js";import{T as f}from"./Table-L31y5TqI.js";import{S as G}from"./Spinner-fJObtOIq.js";import{u as U,M as V,a as J}from"./useModalEffects-vfuaFdbG.js";import{P as K}from"./Pagination-vhsxsz_6.js";import{D as Y}from"./DeleteButton-o4gLQ45O.js";import{u as b}from"./useMutation-Eh4uYkNk.js";import{d as W,a as X,u as Z}from"./apiCategory-6MgFhN2f.js";import{F as ee}from"./FormRowItem-N8q73qFe.js";import"./useQuery-h9sTdRQf.js";import"./utils-1RRThafF.js";function te(){const t=y(),{isLoading:n,mutate:a,error:i}=b({mutationFn:r=>W(r),onSuccess:()=>{t.invalidateQueries(["categoryList"]),g.success("Category successfully Deleted! 😄")},onError:r=>{throw g.error("Failed to delete! Please try again after checking if you did anything wrong"),new Error("delete Product error",r)}});return{isLoading:n,deleteCategory:a,error:i}}function re(){const t=y(),{isLoading:n,mutate:a,error:i}=b({mutationFn:r=>X(r),onSuccess:()=>{t.invalidateQueries(["categoryList"]),g.success("Category successfully added! Congratulations 🥳")},onError:r=>{throw g.error("Faild to add! Please try Again after check if you did anything wrong"),new Error(`Faild to add this category: ${r.message}`)}});return{isLoading:n,addCategory:a,error:i}}function ne(){const t=y(),{isLoading:n,mutate:a,error:i}=b({mutationFn:r=>Z(r.id,r),onSuccess:()=>{t.invalidateQueries(["categoryList"]),g.success("Category successfully updated! Congratulations 🥳")},onError:r=>{throw g.error("Faild to update! Please try Again after check if you did anything wrong"),new Error(`Faild to update this category: ${r.message}`)}});return{isLoading:n,updateCategory:a,error:i}}const oe=o.div`
  padding: 4rem 2rem;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 4rem;
  align-items: center;
`,ae=o.h2`
  color: #efefef;
  filter: drop-shadow(0 0 1px #333);
  
  @media screen and (max-width: 767px) {
    margin-top: 2rem;
  }
`,ie=o.form`
  width: 50%;
  padding: 40px 20px;
  background-color: var(--color-grey-300);
  box-shadow: 0 0 8px 2px var(--color-grey-500);
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
  transition: var(--main-transition);
  position: relative;

  
  @media screen and (max-width: 767px) {
    width: 90%;
  }

  @media (min-width: 768px) and (max-width: 991px) {
    width: 70%;
  }
`,se=o.div`
  width: 10rem;
  height: 10rem;
  border-radius: 1rem;
  margin-bottom: 2rem;
  background-color: var(--color-grey-300);
  color: var(--color-grey-900);
  box-shadow: 0 0 4px 1px var(--color-grey-500);
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  position: relative;

  &:hover {
    >div {
      bottom: 0;
    }
  }
`,de=o.img`
  height: 100%;
  width: 100%;
  object-fit: cover;
  transition: var(--main-transition);
`,le=o.div`
  width: 100%;
  height: 100%;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: var(--main-transition);

  >svg {
    font-size: 8rem;
  }
`,ce=o.div`
  width: 100%;
  height: 50%;
  position: absolute;
  bottom: -100%;
  left: 0;
  background-color: var(--color-grey-100);
  color: var(--color-grey-900);
  opacity: 0.9;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: var(--main-transition);
  cursor: pointer;
  z-index: 99;

  >svg {
    font-size: 2rem;
  }
`,ue=o.input`
  display: none;
`,ge=o.input`
  flex-basis: 80%;
  padding: 8px 12px;
  text-indent: 1rem;
  border-radius: 8px;
  box-shadow: 0 0 2px 1px var(--color-grey-500);
  background-color: #efefef;
  color: #000;
  border: none;
  outline: none;
  font-weight: bold;
  transition: var(--main-transition);

  &:focus {
    box-shadow: 0 0 6px 1px var(--color-grey-500);
  }

  &:disabled {
    background-color: #ccc;
    font-weight: bold;
  }
`,j=o.button`
  width: 100%;
  margin: 0 auto;
  padding: 8px 12px;
  border-radius: 8px;
  transition: var(--main-transition);
  font-size: 1.6rem;
  font-weight: bold;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  cursor: pointer;

  &.close {
    background-color: var(--color-btn-red);
    box-shadow: var(--shadow-btn-red);
    color: #efefef;
  }

  &.submit {
    background-color: var(--color-btn-green);
    box-shadow: var(--shadow-btn-green);
    color: #efefef;
  }
`,me=o.span`
  width: 100%;
  margin: 0 auto;
  padding: 8px 12px;
  border-radius: 8px;
  transition: var(--main-transition);
  font-size: 1.6rem;
  font-weight: bold;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  cursor: pointer;
  background-color: var(--color-grey-700);
  color: var(--color-grey-200);
  box-shadow: 0 0 2px 1px var(--color-grey-500) inset;
`;function S({category:t,close:n,isOpen:a}){const i=u.useRef(),[r,d]=u.useState((t==null?void 0:t.image)||""),[c,m]=u.useState(!1),l=u.useRef(),[s,p]=u.useState((t==null?void 0:t.name)||""),{addCategory:I}=re(),{updateCategory:E}=ne();U(i,a,n);function k(){l&&l.current&&l.current.click()}async function P(h){const w=h.target.files[0];if(w){const C=new FormData;C.append("image",w);try{const L=(await _.post(`https://api.imgbb.com/1/upload?key=${T}`,C)).data.data.url;d(L)}catch(v){console.error(`Error uploading image: ${v.message}`)}}}function A(){d("")}function F(){m(!0)}function R(h){p(h.target.value)}function N(){d(t.image),p(t.name)}function D(){!r||!s||I({name:s,image:r},{onSuccess:()=>{n()}})}function z(){!r||!s||E({id:t==null?void 0:t.id,name:s,image:r},{onSuccess:()=>{n()}})}function B(h){h.preventDefault(),t?z():D()}return e.jsx(V,{children:e.jsxs(oe,{children:[e.jsx(ae,{children:`${t?"Edit":"Add New"} Category`}),e.jsxs(ie,{ref:i,onSubmit:B,noValidate:!0,children:[e.jsxs(se,{children:[e.jsx(ue,{type:"file",name:"image",accept:"image/*",onChange:P,ref:l}),e.jsx(ce,{onClick:()=>{r?A():k()},children:r?e.jsx($,{}):e.jsx(H,{})}),!r||c?e.jsx(le,{children:e.jsx(M,{})}):e.jsx(de,{src:r,alt:"Image",onError:F})]}),e.jsx(ee,{label:"Category Name",error:s?"":"This field is required",children:e.jsx(ge,{id:"nameInput",type:"text",placeholder:"Enter category name",name:"name",value:s,onChange:R})},"name input"),t&&e.jsxs(me,{className:"reset",onClick:N,children:[e.jsx(O,{}),"Reset"]}),e.jsx(j,{className:"close",onClick:n,children:"Cancel"}),e.jsx(j,{className:"submit",type:"submit",children:t?"Save":"Add"})]})]})})}const pe=o.span`
  font-weight: bold;
`,he=o.span`

`,fe=o.img`
  width: 4rem;
  height: 4rem;
  border-radius: 1rem;
`,xe=o.span`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  position: relative;
`,ye=o.span`
  width: 2.6rem;
  height: 2.6rem;
  border-radius: 0.7rem;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  &.edit {
    background-color: var(--color-grey-700);
    color: var(--color-grey-100);
    box-shadow: 0 0 4px 2px var(--color-grey-500) inset;
  }

  >svg {
    font-size: 1.8rem;
  }
`;function be({category:t}){const{id:n,name:a,image:i}=t,{deleteCategory:r}=te(),[d,c]=u.useState(!1);function m(){c(!0)}function l(){c(!1)}function s(){r(n)}return e.jsxs(e.Fragment,{children:[e.jsxs(f.Row,{children:[e.jsx(pe,{children:n}),e.jsx(he,{children:a}),e.jsx(fe,{src:i,alt:a}),e.jsxs(xe,{children:[e.jsx(ye,{className:"edit",title:"Edit",onClick:m,children:e.jsx(Q,{})}),e.jsx(Y,{title:"Delete category",handler:s,withDispatch:!1})]})]}),d&&e.jsx(S,{category:t,close:l,isOpen:d})]})}const we=o.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 4rem;
  overflow-x: auto;

  &::-webkit-scrollbar {
    width: 0;
    display: none;
  }
  &::-webkit-scrollbar-horizontal {
    height: 0;
  }
`,Ce=o.button`
  width: fit-content;
  padding: 6px 20px;
  border-radius: 6px;
  border: none;
  outline: none;
  background-color: var(--color-btn-green);
  color: #efefef;
  box-shadow: var(--shadow-btn-green);
  text-align: center;
  font-size: 1.4rem;
  cursor: pointer;
`;function De(){const{isLoading:t,categories:n}=J(),[a]=q(),r=((a.get("page")?Number(a.get("page")):1)-1)*x,[d,c]=u.useState(!1);function m(){c(!0)}function l(){c(!1)}if(t||!n)return e.jsx(G,{});const s=n==null?void 0:n.slice(r,r+x);return e.jsxs(we,{children:[e.jsxs(f,{columns:"10rem 30rem 30rem 20rem",children:[e.jsxs(f.Header,{children:[e.jsx("span",{children:"Id"}),e.jsx("span",{children:"Name"}),e.jsx("span",{children:"Image"}),e.jsx(Ce,{title:"Add Category",onClick:m,children:"Add category"})]}),e.jsx(f.Body,{data:s,render:p=>e.jsx(be,{category:p},p.id)})]}),n.length>x&&e.jsx(K,{count:n.length,length:s.length}),d&&e.jsx(S,{close:l,isOpen:d})]})}export{De as default};

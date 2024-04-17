import{i as C,_ as x,u as r,r as g,j as e,A as K,B as V,E as W,J as Y,o as X,al as Z,L as ee,d as te,P as re}from"./index-gK2J3_II.js";import{u as oe,F as ne}from"./Filter-M8WWpkXg.js";import{T as P}from"./Table-L31y5TqI.js";import{S as ie}from"./Spinner-fJObtOIq.js";import{P as ae}from"./Pagination-vhsxsz_6.js";import{s as se,f as de}from"./helpers-o6nrGciX.js";import{D as ce}from"./DeleteButton-o4gLQ45O.js";import{u as I}from"./useMutation-Eh4uYkNk.js";import{d as le,c as ue,u as ge}from"./apiProduct-1-Ok6Rb-.js";import{a as pe,u as me,M as he}from"./useModalEffects-vfuaFdbG.js";import{F as j}from"./FormRowItem-N8q73qFe.js";import"./useQuery-h9sTdRQf.js";import"./utils-1RRThafF.js";import"./useCategoryList-qz3MIW8e.js";import"./apiCategory-6MgFhN2f.js";function xe(){const t=C(),{isLoading:s,mutate:i,error:a}=I({mutationFn:n=>le(n),onSuccess:()=>{t.invalidateQueries(["productsList"]),x.success("Product successfully Deleted! 😄")},onError:n=>{throw x.error("Failed to delete! Please try again after checking if you did anything wrong"),new Error("delete Product error",n)}});return{isLoading:s,deleteProduct:i,error:a}}function fe(){const t=C(),{isLoading:s,mutate:i,error:a}=I({mutationFn:n=>ue(n),onSuccess:()=>{t.invalidateQueries(["productList"]),x.success("Product successfully added! Congratulations 🥳")},onError:n=>{throw x.error("Faild to add! Please try Again after check if you did anything wrong"),new Error(`Faild to add this product: ${n.message}`)}});return{isLoading:s,addProduct:i,error:a}}function ye(){const t=C(),{isLoading:s,mutate:i,error:a}=I({mutationFn:n=>ge(n.id,n),onSuccess:()=>{t.invalidateQueries(["productList"]),x.success("Product successfully updated! Congratulations 🥳")},onError:n=>{throw x.error("Faild to update! Please try Again after check if you did anything wrong"),new Error(`Faild to update this product: ${n.message}`)}});return{isLoading:s,updateProduct:i,error:a}}const be=r.div`
  padding: 4rem 2rem;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 4rem;
  align-items: center;
`,ve=r.h2`
  margin-top: 25rem;
  color: #efefef;
  filter: drop-shadow(0 0 1px #333);
  
  @media screen and (max-width: 767px) {
    margin-top: 35rem;
  }
`,we=r.form`
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
`,je=r.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1.5rem;
  position: relative;
  margin-bottom: 2rem;
`,Pe=r.div`
  width: 6rem;
  height: 6rem;
  border-radius: 1rem;
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
`,Se=r.img`
  height: 100%;
  width: 100%;
  object-fit: cover;
  transition: var(--main-transition);
`,Ce=r.div`
  width: 100%;
  height: 100%;
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
    font-size: 2.4rem;
  }
`,Ie=r.input`
  display: none;
`,ke=r.div`
  width: 6rem;
  height: 6rem;
  border-radius: 1rem;
  background-color: var(--color-grey-300);
  color: var(--color-grey-900);
  box-shadow: 0 0 4px 1px var(--color-grey-500);
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  position: relative;
  cursor: pointer;

  >svg {
    font-size: 2.4rem;
  }
`,D=r.input`
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
`,Ee=r.textarea`
  flex-basis: 80%;
  min-height: 10rem;
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
  resize: none;

  &:focus {
    box-shadow: 0 0 6px 1px var(--color-grey-500);
  }

  &:disabled {
    background-color: #ccc;
    font-weight: bold;
  }
`,Ae=r.select`
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
  cursor: pointer;

  &:focus {
    box-shadow: 0 0 6px 1px var(--color-grey-500);
  }

  &:disabled {
    background-color: #ccc;
    font-weight: bold;
  }
`,F=r.option`
  
`,T=r.button`
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
`,De=r.span`
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
`;function R({product:t,isOpen:s,close:i}){const[a,n]=g.useState((t==null?void 0:t.title)||""),[c,p]=g.useState((t==null?void 0:t.description)||""),[l,m]=g.useState((t==null?void 0:t.price)||""),[d,y]=g.useState((t==null?void 0:t.category.id)||""),[u,f]=g.useState((t==null?void 0:t.images)||[]),{categories:h}=pe(),b=g.useRef(),k=g.useRef(),{addProduct:L}=fe(),{updateProduct:z}=ye();me(k,s,i);function B(){b&&b.current&&b.current.click()}async function $(o){const v=o.target.files[0];if(v){const w=new FormData;w.append("image",v);try{const A=(await X.post(`https://api.imgbb.com/1/upload?key=${Y}`,w)).data.data.url;let S=[...u];S.find(J=>J===A)===void 0&&(S.push(A),f(S))}catch(E){console.error(`Error uploading image: ${E.message}`)}}}function q(o){const v=u.filter(w=>w!==o);f(v)}function H(o){n(o.target.value)}function M(o){p(o.target.value)}function N(o){y(o.target.value)}function O(o){m(o.target.value)}function _(){f(t.images),n(t.title),p(t.description),y(t.categpry.id),m(t.price)}function Q(){!u||!a||!c||!d||!l||L({title:a,description:c,images:u,price:l,categoryId:d},{onSuccess:()=>{i()}})}function U(){!u||!a||!c||!d||!l||z({id:t.id,title:a,description:c,images:u,price:l,categoryId:d},{onSuccess:()=>{i()}})}function G(o){o.preventDefault(),t?U():Q()}return e.jsx(he,{children:e.jsxs(be,{children:[e.jsx(ve,{children:`${t?"Edit":"Add New"} Product`}),e.jsxs(we,{ref:k,onSubmit:G,noValidate:!0,children:[e.jsxs(je,{children:[u.length>0&&u.map(o=>e.jsxs(Pe,{children:[e.jsx(Se,{src:o,alt:"Product image"}),e.jsx(Ce,{onClick:()=>q(o),children:e.jsx(K,{})})]},o)),e.jsx(Ie,{type:"file",name:"image",accept:"image/*",onChange:$,ref:b}),e.jsx(ke,{onClick:B,children:e.jsx(V,{})})]}),e.jsx(j,{label:"Title",error:a?"":"This field is required",children:e.jsx(D,{id:"titleInput",type:"text",placeholder:"Enter product title",name:"title",value:a,onChange:H})},"title input"),e.jsx(j,{label:"Description",error:c?"":"This field is required",children:e.jsx(Ee,{id:"descriptionInput",placeholder:"Enter product description",name:"description",value:c,onChange:M})},"description input"),(h==null?void 0:h.length)>0&&e.jsx(j,{label:"Category",error:d?"":"This field is required",children:e.jsxs(Ae,{id:"categoryInput",placeholder:"Enter product category",name:"category",value:d,onChange:N,children:[e.jsx(F,{value:"",disabled:!0},"empty"),h.map(o=>e.jsx(F,{value:o.id,children:o.name},o.id))]})},"category input"),e.jsx(j,{label:"Price",error:l?"":"This field is required",children:e.jsx(D,{id:"priceInput",type:"number",placeholder:"Enter product price",name:"price",value:l,onChange:O})},"price input"),t&&e.jsxs(De,{className:"reset",onClick:_,children:[e.jsx(W,{}),"Reset"]}),e.jsx(T,{className:"close",onClick:i,children:"Cancel"}),e.jsx(T,{className:"submit",type:"submit",children:t?"Save":"Add"})]})]})})}const Fe=r.span`
  font-weight: bold;
`,Te=r.span`
  line-height: 1.4;
`,Re=r.span`
  font-size: 1.2rem;
  line-height: 1.4;
`,Le=r(ee)`
  
`,ze=r.span`
  font-weight: bold;
`,Be=r.span`
  display: flex;
  align-items: center;
  gap: 5px;
  position: relative;
`,$e=r.img`
  width: 4rem;
  height: 4rem;
  border-radius: 1rem;
`,qe=r.span`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  position: relative;
`,He=r.span`
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

  &.delete,
  &.confirm {
    background-color: var(--color-btn-red);
    color: #efefef;
    box-shadow: 0 0 4px 2px var(--shadow-btn-red);
  }
  
  &.cancel {
    background-color: var(--color-btn-green);
    color: #efefef;
    box-shadow: var(--shadow-btn-green);
  }

  >svg {
    font-size: 1.8rem;
  }
`;function Me({product:t}){const{id:s,title:i,description:a,images:n,category:c,price:p}=t,{deleteProduct:l}=xe(),[m,d]=g.useState(!1);function y(){d(!0)}function u(){d(!1)}function f(){l(s)}return e.jsxs(e.Fragment,{children:[e.jsxs(P.Row,{children:[e.jsx(Fe,{children:s}),e.jsx(Te,{children:i}),e.jsx(Re,{children:se(a,20)}),e.jsx(Le,{children:c.name}),e.jsx(ze,{children:de(p)}),e.jsx(Be,{children:n.map(h=>e.jsx($e,{src:h,alt:i},h))}),e.jsxs(qe,{children:[e.jsx(He,{className:"edit",title:"Edit",onClick:y,children:e.jsx(Z,{})}),e.jsx(ce,{title:"Delete product",handler:f,withDispatch:!1})]})]}),m&&e.jsx(R,{product:t,close:u,isOpen:m})]})}const Ne=r.div`
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
`,Oe=r.button`
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
`;function nt(){const{isLoading:t,products:s,count:i}=oe(),[a]=te(),n=Number(a.get("page")),[c,p]=g.useState(!1);function l(){p(!0)}function m(){p(!1)}return t||!s?e.jsx(ie,{}):e.jsxs(Ne,{children:[e.jsx(ne,{}),e.jsxs(P,{columns:"4rem 12rem 20rem 12rem 12rem 16rem 16rem",children:[e.jsxs(P.Header,{children:[e.jsx("span",{children:"Id"}),e.jsx("span",{children:"Title"}),e.jsx("span",{children:"Description"}),e.jsx("span",{children:"Category"}),e.jsx("span",{children:"Price"}),e.jsx("span",{children:"Images"}),e.jsx(Oe,{title:"Add Product",onClick:l,children:"Add product"})]}),e.jsx(P.Body,{data:s,render:d=>e.jsx(Me,{product:d},d.id)})]}),!(n==1&&i<=re)&&e.jsx(ae,{length:s.length,count:i}),c&&e.jsx(R,{close:m,isOpen:c})]})}export{nt as default};

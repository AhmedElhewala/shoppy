import{n as A,ak as I,i as Q,_ as k,u as a,r as g,j as e,E as T,a2 as M,al as G,d as L,am as K,P as R}from"./index-tiG3UDW2.js";import{T as C}from"./Table-BbJGKJPM.js";import{S as D}from"./Spinner-DmyEU9UC.js";import{u as J}from"./useQuery-eENayJcY.js";import{P as V}from"./Pagination-1cutIt2a.js";import{u as W}from"./useMutation-PJM_96Lm.js";import"./utils-1RRThafF.js";async function X(){try{return(await A.get(`${I}/users`)).data}catch(t){throw new Error(`Error fetching users: ${t.message}`)}}async function Y(t,n){try{return(await A.put(`${I}/users/${t}`,n)).data}catch(r){throw new Error(`Error updating this user role: ${r.message}`)}}function Z(){const{isLoading:t,data:n,error:r}=J({queryKey:["usersList"],queryFn:()=>X()}),d=n==null?void 0:n.count;return{isLoading:t,users:n,error:r,count:d}}function ee(){const t=Q(),{isLoading:n,mutate:r,error:d}=W({mutationFn:s=>Y(s.id,s),onSuccess:()=>{t.invalidateQueries(["usersList"]),k.success("Account role successfully updated! Congratulations 🥳")},onError:s=>{throw k.error("Faild to update! Please try Again after check if you did anything wrong"),new Error("Update error",s)}});return{isLoading:n,updateRole:r,error:d}}const te=a.span`
  font-weight: bold;
`,ne=a.img`
  width: 4rem;
  height: 4rem;
  border-radius: 1rem;
`,re=a.span`

`,ae=a.span`
  
`,oe=a.span`
  background-color: transparent;
  border: none;
  outline: none;
  color: var(--color-grey-800);
`,ie=a.select`
  width: 80%;
  padding: 4px 8px;
  border-radius: 4px;
  background-color: var(--color-grey-300);
  color: var(--color-grey-700);
  box-shadow: 0 0 2px 1px var(--color-grey-500);
  position: relative;
  cursor: pointer;
`,U=a.option`
  
`,se=a.span`
  display: flex;
  align-items: center;
  gap: 0.6rem;
  position: relative;
`,E=a.span`
  padding: 6px 20px;
  border-radius: 6px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  cursor: pointer;
  font: bold;

  &.edit {
    background-color: var(--color-grey-700);
    color: var(--color-grey-100);
    box-shadow: 0 0 4px 2px var(--color-grey-500) inset;
  }

  &.submit {
    background-color: var(--color-btn-green);
    color: #efefef;
    box-shadow: var(--shadow-btn-green);
  }

  >svg {
    font-size: 1.8rem;
  }
`;function le({user:t}){const{id:n,avatar:r,name:d,email:s,role:h}=t,{updateRole:f}=ee(),[c,m]=g.useState(t==null?void 0:t.role),[u,o]=g.useState(!1);function i(v){console.log("User role updated to:",v.target.value),m(v.target.value)}function j(){o(!0)}function y(){m(h)}function x(){if(console.log(h),console.log(c),!c){o(!1);return}c!==h&&f({id:n,role:c},{onSettled:()=>{o(!1)},onError:()=>{y()}})}return e.jsxs(C.Row,{children:[e.jsx(te,{children:n}),e.jsx(ne,{src:r,alt:d}),e.jsx(re,{children:d}),e.jsx(ae,{children:s}),u?e.jsxs(ie,{name:"role",value:c,onChange:i,disabled:!u,children:[e.jsx(U,{value:"admin",children:"admin"},"admin"),e.jsx(U,{value:"customer",children:"customer"},"customer")]}):e.jsx(oe,{children:h}),e.jsx(se,{children:u?e.jsxs(e.Fragment,{children:[e.jsx(E,{className:"edit",title:"Reset",onClick:y,children:e.jsx(T,{})}),e.jsx(E,{className:"submit",title:"Submit role",onClick:x,children:e.jsx(M,{})})]}):e.jsxs(E,{className:"edit",title:"Edit role",onClick:j,children:[e.jsx(G,{}),"Edit Role"]})})]})}const de=a.div`
  width: 100%;
  display: flex;
  align-items: start;
  gap: 2rem;
`,ce=a.span`
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
`,b=a.div`
  width: 22%;
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
`,me=a.div`
  flex: 1;
  display: flex;
  align-items: end;
  flex-wrap: wrap;
  gap: 2rem;
  justify-content: center;
  transition: var(--main-transition);
`,S=a.label`
  font-size: 1.4rem;
`,P=a.input`
  max-width: 100%;
  padding: 6px 12px;
  border-radius: 6px;
  outline: none;
  border: none;
  background-color: #efefef;
  box-shadow: 0 0 2px 1px var(--color-grey-500);
  transition: var(--main-transition);
`,ue=a.select`
  width: 100%;
  padding: 6px 12px;
  border-radius: 6px;
  outline: none;
  border: none;
  background-color: #efefef;
  box-shadow: 0 0 2px 1px var(--color-grey-500);
  transition: var(--main-transition);
  cursor: pointer;
`,F=a.option`
  
`,N=a.button`
  width: 18%;
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
    width: 45%;
    margin-top: 1rem;
  }
`;function he(){const[t,n]=L(),r=t.get("id")?Number(t.get("id")):"",d=t.get("name")?t.get("name"):"",s=t.get("email")?t.get("email"):"",h=t.get("role")?t.get("role"):"",[f,c]=g.useState(!1),[m,u]=g.useState(r),[o,i]=g.useState(d),[j,y]=g.useState(s),[x,v]=g.useState(h);function $(){c(l=>!l)}function O(l){const p=l.target.value;u(p)}function q(l){const p=l.target.value;i(p)}function B(l){const p=l.target.value;y(p)}function H(l){const p=l.target.value;v(p)}function w(l,p){t.set(l,p),t.set("page",1)}function _(){m&&w("id",m),o&&w("name",o),j&&w("email",j),x?w("role",x):x===""&&t.delete("role"),n(t)}function z(){m&&(u(""),t.delete("id")),o&&(i(""),t.delete("name")),j&&(y(""),t.delete("email")),x&&(v(""),t.delete("role")),n(t)}return e.jsxs(de,{children:[e.jsx(ce,{onClick:$,children:e.jsx(K,{})}),f&&e.jsx(me,{children:e.jsxs(e.Fragment,{children:[e.jsxs(b,{children:[e.jsx(S,{htmlFor:"id",children:"Id"}),e.jsx(P,{type:"number",id:"id",value:m,onChange:O,placeholder:"User Id"})]}),e.jsxs(b,{children:[e.jsx(S,{htmlFor:"name",children:"Name"}),e.jsx(P,{type:"text",id:"name",value:o,onChange:q,placeholder:"User Name"})]}),e.jsxs(b,{children:[e.jsx(S,{htmlFor:"email",children:"Email"}),e.jsx(P,{type:"text",id:"email",value:j,onChange:B,placeholder:"User Email"})]}),e.jsxs(b,{children:[e.jsx(S,{htmlFor:"role",children:"Role"}),e.jsxs(ue,{id:"role",value:x,onChange:H,children:[e.jsx(F,{value:"",children:"All"},"all"),e.jsx(F,{value:"admin",children:"Admin"},"admin"),e.jsx(F,{value:"customer",children:"Customer"},"customer")]})]}),e.jsx(N,{onClick:_,children:"Apply"}),e.jsx(N,{onClick:z,children:"Clear"})]})})]})}const pe=a.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 4rem;
`;function be(){const{isLoading:t,users:n}=Z(),[r]=L(),d=r.get("page")?Number(r.get("page")):1,s=r.get("id")?Number(r.get("id")):"",h=r.get("name")?r.get("name"):"",f=r.get("email")?r.get("email"):"",c=r.get("role")?r.get("role"):"",m=(d-1)*R;let u=n,o=n;return t||!n?e.jsx(D,{}):(s&&(o=n==null?void 0:n.filter(i=>i.id===s)),h&&(o=n==null?void 0:n.filter(i=>i.name.includes(h))),f&&(o=n==null?void 0:n.filter(i=>i.email.includes(f))),c&&(o=n==null?void 0:n.filter(i=>i.role===c)),u=o==null?void 0:o.slice(m,m+R),e.jsxs(pe,{children:[e.jsx(he,{}),e.jsxs(C,{columns:"6rem 18rem 18rem 24rem 12rem 18rem",children:[e.jsxs(C.Header,{children:[e.jsx("span",{children:"Id"}),e.jsx("span",{children:"Avatar"}),e.jsx("span",{children:"Name"}),e.jsx("span",{children:"Email"}),e.jsx("span",{children:"Role"}),e.jsx("span",{})]}),e.jsx(C.Body,{data:u,render:i=>e.jsx(le,{user:i},i.id)})]}),o.length>R&&e.jsx(V,{count:o.length,length:u.length})]}))}export{be as default};

import{i as k,q as C,ab as E,z as F,u as t,r as m,a as L,j as r,G as I,I as q,L as P}from"./index-tiG3UDW2.js";import{u as R}from"./index.esm-qdcDLwPc.js";import{u as z}from"./useMutation-PJM_96Lm.js";import{S as T}from"./Spinner-DmyEU9UC.js";import{F as h}from"./FormRowItem-2pqtEEnQ.js";import"./utils-1RRThafF.js";function U(){const a=k(),l=C(),{isLoading:p,mutate:e,error:i}=z({mutationFn:({email:o,password:s,isRemmbered:c})=>E({email:o,password:s,isRemmbered:c}),onSuccess:o=>{a.setQueryData(["user"],o),l(F(o))},onError:o=>{throw new Error("login error",o)}});return{isLoading:p,login:e,error:i}}const B=t.form`
  width: 100%;
  background-color: var(--color-grey-200);
  box-shadow: 0 0 8px 1px var(--color-grey-500);
  padding: 40px 20px;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  transition: var(--main-transition);
`,b=t.input`
  flex-basis: 80%;
  padding: 8px 12px;
  border-radius: 8px;
  box-shadow: 0 0 2px 1px var(--color-grey-500);
  background-color: #efefef;
  color: #000;
  border: none;
  outline: none;
  transition: var(--main-transition);

  &:focus {
    box-shadow: 0 0 6px 1px var(--color-grey-500);
  }
`,D=t.span`
  padding: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  position: absolute;
  top: 0;
  right: 0;
  color: var(--color-grey-100);
  cursor: pointer;
  transition: var(--main-transition);

  >svg {
    transition: var(--main-transition);
  }
`,H=t.div`
  margin-top: 1rem;
  display: flex;
  align-items: center;
  gap: 1rem;
  cursor: pointer;

  >* {
    cursor: pointer;
  }

  >input {
    width: 1.2rem;
    height: 1.2rem;
  }
  
  >label {
    font-size: 1.4rem;
    color: var(--color-grey-700);
  }
`,N=t.button`
  width: 100%;
  margin: 1rem 0;
  padding: 8px 12px;
  border-radius: 8px;
  transition: var(--main-transition);
  background-color: var(--color-btn-green);
  box-shadow: var(--shadow-btn-green);
  color: #efefef;
  transition: var(--main-transition);
  font-size: 1.6rem;
  font-weight: bold;
  cursor: pointer;
`,Q=t(P)`
  width: 100%;
  margin-top: 2rem;
  padding: 8px 12px;
  border-radius: 8px;
  transition: var(--main-transition);
  background-color: var(--color-grey-700);
  color: var(--color-grey-100);
  box-shadow: var(--color-grey-500) 0px 50px 100px -20px, var(--color-grey-500) 0px 30px 60px -30px, var(--color-grey-500) 0px -2px 6px 0px inset;;
  transition: var(--main-transition);
  font-size: 1.6rem;
  font-weight: bold;
  text-align: center;
  position: relative;
  cursor: pointer;

  &::before {
    content: "";
    width: 80%;
    height: 1px;
    border-radius: 2px;
    background-color: var(--color-grey-500);
    position: absolute;
    top: -2.5rem;
    left: 50%;
    transform: translateX(-50%);
  }
`;function $(){var x,g;const{register:a,formState:l,handleSubmit:p}=R(),{errors:e}=l,[i,o]=m.useState(!1),[s,c]=m.useState(!1),{login:f}=U(),[d,u]=m.useState(!1),w=L();function y(){o(n=>!n)}function v(n){c(n.target.checked)}function S({email:n,password:j}){u(!0),f({email:n,password:j,isRemmbered:s},{onSettled:()=>{w("/",{replace:!0}),u(!1)}})}return r.jsxs(B,{onSubmit:p(S),noValidate:!0,children:[d&&r.jsx(T,{}),r.jsx(h,{label:"Email",error:(x=e==null?void 0:e.email)==null?void 0:x.message,children:r.jsx(b,{id:"emailInput",type:"email",placeholder:"Enter your email",name:"email",disabled:d,...a("email",{required:"This field is required",pattern:{value:/\S+@\S+\.\S+/,message:"Please provide a valid email address"}})})},"email input"),r.jsxs(h,{label:"Password",error:(g=e==null?void 0:e.password)==null?void 0:g.message,children:[r.jsx(b,{id:"passwordInput",type:i?"text":"password",placeholder:"Enter your password",name:"password",disabled:d,...a("password",{required:"This field is required"})}),r.jsx(D,{onClick:y,children:i?r.jsx(I,{}):r.jsx(q,{})})]},"password input"),r.jsxs(H,{children:[r.jsx("input",{type:"checkbox",name:"remmber",id:"remmberUser",checked:s,onChange:v}),r.jsx("label",{htmlFor:"remmberUser",children:"Remmber me?"})]}),r.jsx(N,{disabled:d,children:"Log in"}),r.jsx(Q,{to:"/auth/register",children:"Create New Account"})]})}export{$ as default};

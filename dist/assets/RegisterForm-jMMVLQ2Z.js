import{i as U,a as _,ac as D,ad as $,u as a,r as d,j as e,A as G,B as M,C as Q,G as P,I as A,J as V,o as X,_ as J,L as K}from"./index-gK2J3_II.js";import{u as N}from"./index.esm-Mn0qej-Y.js";import{F as u}from"./FormRowItem-N8q73qFe.js";import{u as O}from"./useMutation-Eh4uYkNk.js";import{S as Y}from"./Spinner-fJObtOIq.js";import"./utils-1RRThafF.js";function W(){const i=U(),g=_(),{mutate:x,isLoading:f}=O({mutationFn:({name:r,email:o,password:l,avatar:n})=>D({name:r,email:o,password:l,avatar:n}),onSuccess:r=>{i.setQueryData(["registedUser"],r),$.success("Account successfully created! Congratulations 🥳"),g("/auth/login",{replace:!0})}});return{register:x,isLoading:f}}const Z=a.form`
  width: 100%;
  margin-top: 20px;
  background-color: var(--color-grey-300);
  box-shadow: 0 0 8px 2px var(--color-grey-500);
  padding: 70px 20px 40px;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  transition: var(--main-transition);
  position: relative;
`,ee=a.div`
  width: 8rem;
  height: 8rem;
  background-color: var(--color-grey-300);
  color: var(--color-grey-900);
  box-shadow: 0 0 4px 1px var(--color-grey-500);
  border-radius: 50%;
  position: absolute;
  top: -4rem;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;

  &:hover {
    >div {
      bottom: 0;
    }
  }
`,re=a.img`
  height: 100%;
  width: 100%;
  object-fit: cover;
  transition: var(--main-transition);
`,ae=a.div`
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
`,te=a.div`
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
`,oe=a.input`
  display: none;
`,m=a.input`
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
`,k=a.span`
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
`,se=a.button`
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
`,ie=a(K)`
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
`;function me(){var w,b,j,S;const{register:i,formState:g,getValues:x,handleSubmit:f}=N(),{errors:r}=g,[o,l]=d.useState(""),n=d.useRef(),[h,I]=d.useState(!1),[v,E]=d.useState(!1),{register:q}=W(),[s,y]=d.useState(!1);function F(){I(t=>!t)}function T(){E(t=>!t)}function L(){n&&n.current&&n.current.click()}async function B(t){const c=t.target.files[0];if(c){const p=new FormData;p.append("image",c);try{const H=(await X.post(`https://api.imgbb.com/1/upload?key=${V}`,p)).data.data.url;l(H)}catch(C){console.error(`Error uploading image: ${C.message}`)}}}function R(){l("")}async function z({name:t,email:c,password:p}){if(!o){J("Please! Add an avatar of you",{icon:"⚠"});return}y(!0),q({name:t,email:c,password:p,avatar:o},{onSettled:()=>y(!1)})}return e.jsxs(Z,{onSubmit:f(z),noValidate:!0,children:[s&&e.jsx(Y,{}),e.jsxs(ee,{children:[e.jsx(oe,{type:"file",name:"avatar",accept:"image/*",onChange:B,ref:n}),!s&&e.jsx(te,{onClick:()=>{o?R():L()},children:o?e.jsx(G,{}):e.jsx(M,{})}),o?e.jsx(re,{src:o,alt:"Avatar"}):e.jsx(ae,{children:e.jsx(Q,{})})]}),e.jsx(u,{label:"Username",error:(w=r==null?void 0:r.name)==null?void 0:w.message,children:e.jsx(m,{id:"usernameInput",type:"text",placeholder:"Enter your username",name:"name",disabled:s,...i("name",{required:"This field is required"})})},"username input"),e.jsx(u,{label:"Email",error:(b=r==null?void 0:r.email)==null?void 0:b.message,children:e.jsx(m,{id:"emailInput",type:"email",placeholder:"Enter your email",name:"email",disabled:s,...i("email",{required:"This field is required",pattern:{value:/\S+@\S+\.\S+/,message:"Please provide a valid email address"}})})},"email input"),e.jsxs(u,{label:"Password",error:(j=r==null?void 0:r.password)==null?void 0:j.message,children:[e.jsx(m,{id:"passwordInput",type:h?"text":"password",placeholder:"Enter your password",name:"password",disabled:s,...i("password",{required:"This field is required"})}),e.jsx(k,{onClick:F,children:h?e.jsx(P,{}):e.jsx(A,{})})]},"password input"),e.jsxs(u,{label:"Confirm Password",error:(S=r==null?void 0:r.confirmPassword)==null?void 0:S.message,children:[e.jsx(m,{id:"confirmPassword",type:v?"text":"password",placeholder:"Confirm your password",name:"confirmPassword",disabled:s,...i("confirmPassword",{required:"This field is required",validate:t=>t===x().password||"Passwords need to match"})}),e.jsx(k,{onClick:T,children:v?e.jsx(P,{}):e.jsx(A,{})})]},"confirm password"),e.jsx(se,{disabled:s,children:"Sign up"}),e.jsx(ie,{to:"/auth/login",children:"Log in with an existing account"})]})}export{me as default};
